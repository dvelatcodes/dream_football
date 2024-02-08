import Image, { StaticImageData } from "next/image";
import { BiCaretLeftSquare, BiCaretRightSquare } from "react-icons/bi";
import "./styles.scss";
import { story } from "./assets";

type storyType = {
  img: StaticImageData,
  title: string,
  desc: string,
  blurDataURL: string,
};

export default function Home() {
  return (
    <div className="carousel">
      <div className="story-cover">
        {story.map((content: storyType, index: number) => {
          return (
            <div className="story" key={index}>
              <Image
                src={content.img}
                alt="story image"
                width={300}
                height={300}
                placeholder="blur"
                blurDataURL={content.blurDataURL}
              />
              <h1>{content.title}</h1>
              <p>{content.desc}</p>
            </div>
          );
        })}
      </div>
      <div className="btn-cover">
        <BiCaretLeftSquare className="left" />
        <BiCaretRightSquare className="right" />
      </div>
      <div className="thumbnail-cover">
        {story.map((content: storyType, index: number) => {
          return (
            <div className="thumbnail" key={index}>
              <Image
                src={content.img}
                alt="story image"
                width={140}
                height={150}
                placeholder="blur"
                blurDataURL={content.blurDataURL}
              />
              <h1>{content.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
