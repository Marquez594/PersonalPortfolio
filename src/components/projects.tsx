import { useEffect, useState } from "react";
import { projectList } from "../data/dataProject";
import type { projectType } from "../data/dataProject";

function Projects() {
  const [index, setIndex] = useState(0);
  const [cardCount, setCardCount] = useState(3);

  useEffect(() => {
    const updateCardCount = () => {
      if (window.innerWidth < 768) {
        setCardCount(1);
      } else if (window.innerWidth < 1024) {
        setCardCount(2);
      } else {
        setCardCount(3);
      }
    };
    updateCardCount();

    window.addEventListener("resize", updateCardCount);
    return () => window.removeEventListener("resize", updateCardCount);
  }, []);
  const handleSlider = (): projectType[] => {
    let newData: projectType[] = [];
    for (let i = 0; i < cardCount; i++) {
      newData.push(projectList[(index + i) % projectList.length]);
    }
    return newData;
  };

  const handleLeftSlider = () => {
    setIndex((prev) => (prev - 1 + projectList.length) % projectList.length);
  };

  const handleRightSlider = () => {
    setIndex((prev) => (prev + 1) % projectList.length);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col justify-center items-center gap-12 p-5 scroll-mt-16"
      id="projects"
    >
      {/** */}
      <div className="flex flex-col items-center w-1/2 gap-4">
        <h1 className="text-6xl">Projects</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi facere
          ea harum temporibus odio numquam fugiat similique corrupti quod error
          eum earum, hic nobis ex? Ullam natus porro iure pariatur!
        </p>
      </div>
      <div className=" md:w-4/5  flex [&>button]:cursor-pointer gap-4 w-9/10 items-stretch">
        <button onClick={() => handleLeftSlider()} className="min-w-5">
          <h1 className="[writing-mode:vertical-rl]  rotate-180  decoration-2 text-2xl hover:scale-125 transition-all duration-200 active:scale-95">
            Prev
          </h1>
        </button>
        <div className="flex w-full md:gap-4 gap-2 ">
          {handleSlider().map((project, index) => (
            <div
              key={index}
              className="min-w-0 h-72 flex-1 p-1 md:p-2 rounded-2xl  shadow-2xl flex flex-col items-center justify-between w-16"
            >
              <h1 className="md:text-4xl text-2xl text-center">
                {project.name}
              </h1>
              <p className="mt-4 text-center">{project.description}</p>
              {/**Links */}
              <div className="flex flex-col self-start mt-auto">
                <a
                  href={`${project.github}`}
                  target="_blank"
                  className="w-fit text-purple-900"
                >
                  Vist Github Repo
                </a>
                <a
                  href={`${project.page}`}
                  target="_blank"
                  className="w-fit text-purple-900"
                >
                  Vist Page
                </a>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => handleRightSlider()} className="min-w-5">
          <h1 className="[writing-mode:vertical-rl]  rotate-360  decoration-2 text-2xl hover:scale-125 transition-all duration-200 active:scale-95">
            Next
          </h1>
        </button>
      </div>
    </div>
  );
}

export default Projects;
