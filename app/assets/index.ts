import intro from "./intro.jpg";
import Quarterback from "./Quarterback.jpg";
import timeout from "./timeout.jpg";
import Behind from "./Behind.jpg";
import Rivalry from "./Rivalry.jpg";
import Innovations from "./Innovation.jpg";
import Mary from "./Mary.jpg";
import Hero from "./Hero.jpg";
import Kickoff from "./Kickoff.jpg";
import Legacy from "./Legacy.jpg";
import { StaticImageData } from "next/image";

export const story: Array<{
  img: StaticImageData;
  title: string;
  desc: string;
  blurDataURL: string;
}> = [
  {
    img: Kickoff,
    title: "The Kickoff",
    desc: "It was a crisp fall afternoon, and the stadium buzzed with excitement as the teams geared up for the kickoff. Fans roared, and the anticipation hung in the air like static electricity",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FKickoff.b64414d7.jpg&w=8&q=70",
  },
  {
    img: Quarterback,
    title: "The Star Quarterback",
    desc: "Meet Jake, the charismatic quarterback with a rocket arm. Known for his precision passes, Jake led his team with unwavering determination, becoming the heartthrob of the football-crazed town",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FQuarterback.b31958da.jpg&w=5&q=70",
  },
  {
    img: timeout,
    title: "A Strategic Timeout",
    desc: "With seconds left on the clock, the coach called a timeout. Tension filled the huddle as the team strategized their next move, devising a play that could make or break their championship dreams.",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftimeout.95805bcc.jpg&w=5&q=70",
  },
  {
    img: Hero,
    title: "The Unlikely Hero",
    desc: "In a twist of fate, a rookie wide receiver, underestimated by opponents, caught the winning touchdown pass. The stadium erupted, celebrating the underdog's triumph and proving that anyone can be a hero on the gridiron.",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHero.268cb113.jpg&w=8&q=70",
  },
  {
    img: Rivalry,
    title: "Epic Rivalry",
    desc: "The team's arch-nemesis challenged them in a rivalry as old as time. The clash between the titans electrified the atmosphere, transcending the game into a battle of wills",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRivalry.706a82a4.jpg&w=5&q=70",
  },
  {
    img: Mary,
    title: "The Hail Mary",
    desc: "In a do-or-die situation, the team executed a Hail Mary pass. The ball soared through the air, weaving between defenders, culminating in a miraculous catch that etched itself into football folklore.",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMary.753f5a91.jpg&w=5&q=70",
  },
  {
    img: Behind,
    title: "Behind the Scenes",
    desc: "Off the field, the players' camaraderie unfolded. From locker room banter to shared triumphs and defeats, their bond extended beyond the game, mirroring the spirit of teamwork celebrated in football short stories",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBehind.482b2812.jpg&w=5&q=70",
  },
  {
    img: Innovations,
    title: "Innovations in the Game",
    desc: "Inspired by the evolving nature of football, technological advancements transformed the sport. From helmet designs to game strategies, innovation shaped the landscape of American football",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FInnovation.0dec7bb5.jpg&w=8&q=70",
  },
  {
    img: Legacy,
    title: "Legacy of Legends",
    desc: "As the season concluded, the legacy of the players lived on. Their stories became tales shared across generations, embodying the essence of American football's cultural significance",
    blurDataURL:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLegacy.737a4e8b.jpg&w=5&q=70",
  },
];
