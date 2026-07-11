import { rename, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const apiDir = resolve(root, "src", "app", "api");
const disabledApiDir = resolve(root, "src", "app", "_api.sites-disabled");
const nextDir = resolve(root, ".next");

function run(command, args, env) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(command, args, {
      cwd: root,
      env,
      shell: process.platform === "win32",
      stdio: "inherit",
    });

    child.on("error", rejectPromise);
    child.on("exit", (code) => {
      if (code === 0) {
        resolvePromise();
      } else {
        rejectPromise(new Error(`${command} ${args.join(" ")} exited with ${code}`));
      }
    });
  });
}

let apiWasMoved = false;

try {
  await rm(disabledApiDir, { recursive: true, force: true });

  if (existsSync(apiDir)) {
    await rename(apiDir, disabledApiDir);
    apiWasMoved = true;
  }

  await rm(nextDir, { recursive: true, force: true });

  await run("npx", ["next", "build"], {
    ...process.env,
    SITES_EXPORT: "1",
  });

  await run("node", ["scripts/copy-static-export.mjs"], process.env);
} finally {
  if (apiWasMoved && existsSync(disabledApiDir)) {
    await rename(disabledApiDir, apiDir);
  }
}
