import Image, { StaticImageData } from "next/image";
import zramctl from "./buttons/zramctl.png";
import incognitotgt from "./buttons/incognitotgt.webp";
import bomberfish from "./buttons/bomberfish.webp";
import redcathode from "./buttons/redcathode.webp";
import spaceness from "./buttons/spaceness.png";
import agpl from "./buttons/agpl.webp";
import Marquee from "react-fast-marquee";

interface ButtonProps {
  name: string;
  href: string;
  image: StaticImageData;
}

const buttons: ButtonProps[] = [
  {
    name: "zramctl",
    href: "https://zram.sh",
    image: zramctl,
  },
  {
    name: "incognitotgt",
    href: "https://incognitotgt.me",
    image: incognitotgt,
  },
  {
    name: "bomberfish",
    href: "https://bomberfish.ca",
    image: bomberfish,
  },
  {
    name: "redcathode",
    href: "https://redcatho.de",
    image: redcathode,
  },
  {
    name: "agpl",
    href: "https://www.gnu.org/licenses/agpl-3.0.html",
    image: agpl,
  },
  {
    name: "spaceness",
    href: "https://spaceness.one",
    image: spaceness,
  },
];

function Button(props: ButtonProps) {
  return (
    <a href={props.href}>
      <Image
        src={props.image}
        width="123"
        height="43.5"
        alt={`${props.name}'s button`}
        className="m-2 "
        style={{
          imageRendering: "pixelated",
        }}
      />
    </a>
  );
}

export function Buttons() {
  return (
    <Marquee pauseOnHover speed={125}>
      {buttons.map((button) => (
        <Button
          href={button.href}
          name={button.name}
          image={button.image}
          key={button.name}
        />
      ))}
    </Marquee>
  );
}
