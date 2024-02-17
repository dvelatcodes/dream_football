import Image, { StaticImageData } from "next/image";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";
import "./styles.scss";
import { story, thumbnail } from "./assets";

type storyType = {
  img: StaticImageData,
  title: string,
  desc: string,
  blurDataURL: string,
};

type thumbType = {
  img: StaticImageData,
  title: string,
  blurDataURL: string,
};

export default function Home() {
  return (
    <div className="carousel prev">
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
        <BiCaretLeftCircle className="left" />
        <BiCaretRightCircle className="right" />
      </div>
      <div className="thumbnail-cover prev">
        {thumbnail.map((content: thumbType, index: number) => {
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
