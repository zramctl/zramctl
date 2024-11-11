import Image from "next/image";

export function Spaceness() {
  return (
    <a
      href="https://github.com/spaceness"
      target="_blank"
      className="flex flex-row hover:scale-105 text-[12px] transition-all font-bold"
    >
      @
      <Image width="32" height="32" alt="spaceness logo" src="/spaceness.svg" />
    </a>
  );
}
