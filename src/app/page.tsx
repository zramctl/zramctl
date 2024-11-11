import { Spaceness } from "@/components/spaceness";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-3">
      <article>
        <h2 className="text-2xl font-semibold">hey!</h2>
        <p className="flex items-center">
          hey, im yusof (aka. zramctl), im the founder of{" "}
          <a
            href="https://github.com/spaceness"
            className="flex flex-row gap-1 ml-3 font-bold"
          >
            <Image
              width="32"
              height="32"
              alt="spaceness logo"
              src="/spaceness.svg"
            />
            spaceness
          </a>
          .
        </p>
      </article>
      <article>
        <h2 className="text-2xl font-semibold">what i've been working on</h2>
        <p className="flex items-center">
          currently, i've been dedicating all my time to{" "}
          <a
            href="https://github.com/zramctl/dotfiles"
            className="flex flex-row items-center gap-1 ml-0.5 font-bold"
          >
            <Icon icon={"simple-icons:nixos"} fontSize={18} />
            my dotfiles
          </a>
          , which i have seemed to now finish.
        </p>
        <br />
        <p>
          it did take a long time but now I will be shifting towards working on
          other important projects.
        </p>
      </article>
    </main>
  );
}
