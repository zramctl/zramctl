import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex justify-between pt-10 pb-3 border-b-2 mb-2 items-center">
      <div>
        <div className="flex flex-col">
          <a href="/">
            <Image width="84" height="84" alt="zramctl logo" src="/zr.svg" />
          </a>
        </div>
      </div>
      <div>
        <a
          href="https://spaceness.one"
          className="flex flex-row hover:scale-105 transition-all"
        >
          @
          <Image
            width="84"
            height="84"
            alt="spaceness logo"
            src="/spaceness.svg"
          />
        </a>
      </div>
    </div>
  );
}
