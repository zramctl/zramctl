import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex justify-between pt-10 pb-3 border-b-2 mb-2 items-center">
      <div>
        <div className="flex flex-row">
          <a href="/">
            <Image width="84" height="84" alt="zramctl logo" src="/zr.svg" />
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <a
          href="https://github.com/spaceness"
          target="_blank"
          className="flex flex-row hover:scale-105 transition-all font-bold"
        >
          @
          <Image
            width="32"
            height="32"
            alt="spaceness logo"
            src="/spaceness.svg"
          />
        </a>
      </div>
    </div>
  );
}
