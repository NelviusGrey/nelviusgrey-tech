import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-[#030504]">
      <div className="relative grid place-items-center">
        <div className="absolute h-28 w-28 animate-ping rounded-md border border-[color:var(--brand-green)]/20" />
        <Image
          src="/brand/logo-mark.png"
          alt="NelviusGrey Tech loading"
          width={72}
          height={72}
          className="relative z-10"
          priority
        />
      </div>
    </div>
  );
}
