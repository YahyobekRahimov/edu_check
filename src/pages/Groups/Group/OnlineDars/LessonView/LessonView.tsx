import { useState } from "react";

interface IVideo {
  title: string;
  embedCode: string;
}

export default function LessonView() {
  const [currentVideo, setCurrentVideo] = useState<number>(1);
  const videos: IVideo[] = [
    {
      title: "Rust in 100 Seconds",
      embedCode: "https://www.youtube.com/embed/CWeSzhJpJ9U",
    },
    {
      title: "The FASTEST Way to Learn to Code & Get a Job",
      embedCode: "https://www.youtube.com/embed/27YP6n6pDh0",
    },
    {
      title: "Is Coding Still Worth Learning in 2024?",
      embedCode: "https://www.youtube.com/embed/4gX44uyGSHo",
    },
  ];

  return (
    <div>
      <div className="flex items-start gap-10 p-5 flex-col lg:flex-row">
        <ul className="flex flex-col gap-3">
          {videos.map((video, index) => {
            return (
              <li
                title={video.title}
                key={index}
                className={`text-nowrap text-md cursor-pointer flex items-center gap-1 p-2 border-[3px] border-[var(--primary-color)] rounded-lg ${
                  index === currentVideo
                    ? "bg-[var(--primary-color)] text-white dark:text-[var(--white-text)]"
                    : "bg-slate-100 dark:bg-[var(--dark-background-900)]"
                }`}
                onClick={() => setCurrentVideo(index)}
              >
                {index + 1}.{" "}
                <p className="hidden lg:block">
                  {video.title.split(" ").slice(0, 3).join(" ")}
                  ...
                </p>
                <p className="w-[200px] xs:w-[250px] overflow-hidden lg:hidden">
                  {video.title}
                </p>
              </li>
            );
          })}
        </ul>
        <div className="w-full">
          <iframe
            className="w-full"
            width="853"
            height="480"
            src={videos[currentVideo].embedCode}
            title={videos[currentVideo].title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="px-5">
        <h3 className="text-2xl text-center mb-5">
          Title of the lesson
        </h3>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          voluptatum officia nisi, cum beatae tempore quibusdam non
          omnis laborum deleniti distinctio consectetur ipsam amet
          repellendus officiis asperiores minima? Cum vel quos sunt
          iure deserunt veniam officiis a. Dolorem sequi assumenda
          saepe. Hic odit amet odio nemo voluptates enim similique
          molestiae? Perspiciatis necessitatibus ipsum ab quas est aut
          quae vero consequatur repellat dicta ut cupiditate quos qui
          dolore dolor dolores ratione voluptas repudiandae neque
          perferendis velit, doloremque aspernatur architecto
          laudantium. Nam, voluptatum harum eius quo unde maiores
          labore nisi animi molestias quia, necessitatibus laboriosam
          deleniti ratione modi. Quas voluptates voluptatibus totam
          neque dolore magnam facere id temporibus, iste laboriosam
          nam aspernatur et accusantium est. Voluptas eos nostrum
          dolores asperiores fugiat temporibus velit quod soluta ab
          aut inventore, rerum recusandae veniam? Commodi similique
          molestiae non maiores neque quia, numquam quis reiciendis
          laudantium aperiam vel ab amet eius rerum, minima ratione
          possimus rem recusandae quaerat impedit vero explicabo
          voluptate labore iste. Corporis eius amet ut explicabo
          dolorem repellendus voluptatibus necessitatibus architecto
          itaque blanditiis! Odit eos enim et consequuntur, inventore
          fugiat adipisci at, id dolorem fuga rerum atque. Cum,
          numquam? Nobis earum dolor repellendus officiis consequatur
          blanditiis, labore, quod similique porro provident aperiam
          dicta illum aspernatur temporibus. Adipisci corrupti
          debitis, necessitatibus et minus eos molestias nostrum
          provident porro ratione cum ab autem laboriosam atque non
          error! Iusto ex omnis qui ea unde neque impedit illum, natus
          nobis quasi provident repellat perspiciatis aut iste?
        </p>
      </div>
    </div>
  );
}
