import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface SocialProps {
  name: string;
  href: string;
  icon: string;
}

export function Social(props: SocialProps) {
  return (
    <a
      href={props.href}
      target="_blank"
      className="px-3 gap-2 py-1.5 w-[fit-content] rounded-full bg-white flex flex-row mx-1 text-black items-center justify-center"
    >
      <Icon width="32" height="32" icon={props.icon} />
      <span className="text-wrap">{props.name}</span>
    </a>
  );
}

export default function Socials() {
  const socials: SocialProps[] = [
    {
      name: "@zramctl",
      href: "https://discord.com/users/1257722365090205700",
      icon: "ic:baseline-discord",
    },
    {
      name: "@zramctl",
      href: "https://github.com/zramctl",
      icon: "mdi:github",
    },
    {
      name: "@zramctl",
      href: "https://codeberg.org/zramctl",
      icon: "simple-icons:codeberg",
    },
    {
      name: "@yosoof.03",
      href: "https://signal.me/#eu/xCp3k0xDHskuu3R3NkgVRMMPXdo89zpm1CosgbJCXswPoMZ2eNBHoaCcTYiqStdB",
      icon: "simple-icons:signal",
    },
    {
      name: "@zramctl",
      href: "https://x.com/@zramctl",
      icon: "prime:twitter",
    },
    {
      name: "@zram.sh",
      href: "https://bsky.app/profile/zram.sh",
      icon: "ri:bluesky-fill",
    },
    {
      name: "github:zramctl/dotfiles",
      href: "https://github.com/zramctl/dotfiles",
      icon: "simple-icons:nixos",
    },
  ];

  return (
    <Marquee className="overflow-hidden mb-2" pauseOnHover speed={125}>
      {socials.map((social, i) => (
        <Social
          name={social.name}
          href={social.href}
          icon={social.icon}
          key={i}
        />
      ))}
    </Marquee>
  );
}
