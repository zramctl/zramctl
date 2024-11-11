import Image from "next/image";
import { Spaceness } from "./spaceness";

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
        <Spaceness />
      </div>
    </div>
  );
}
