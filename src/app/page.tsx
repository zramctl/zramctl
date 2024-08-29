import { Reviews } from "@/components/reviews";
export default function Home() {
  return (
    <main>
      <p>
        hey, im yusof (aka. zramctl) im the founder of{" "}
        <a
          className="font-bold underline"
          target="_blank"
          href="//spaceness.one"
        >
          spaceness
        </a>
        , created in 2023
      </p>
      <p>
        i don&apos;t neccessarily know what else to put here soo, this website
        is going to be empty for hella long
      </p>
      <Reviews />
    </main>
  );
}
