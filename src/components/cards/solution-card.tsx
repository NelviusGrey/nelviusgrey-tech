import { Reveal } from "@/components/animations/reveal";
import { Icon } from "@/components/ui/icon";
import type { solutionAreas } from "@/lib/constants";

type Solution = (typeof solutionAreas)[number];

export function SolutionCard({ solution, index }: { solution: Solution; index: number }) {
  return (
    <Reveal
      delay={index * 0.035}
      className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-green)]/35"
    >
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)]">
          <Icon name={solution.icon} />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
          <p className="mt-3 text-sm leading-7 text-white/62">{solution.description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-5 text-sm lg:grid-cols-3">
        <div>
          <p className="font-semibold text-white/86">Common problems</p>
          <ul className="mt-3 grid gap-2 text-white/55">
            {solution.problems.map((problem) => (
              <li key={problem}>- {problem}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white/86">How we help</p>
          <p className="mt-3 leading-7 text-white/55">{solution.helps}</p>
        </div>
        <div>
          <p className="font-semibold text-white/86">Example solutions</p>
          <ul className="mt-3 grid gap-2 text-white/55">
            {solution.examples.map((example) => (
              <li key={example}>- {example}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
