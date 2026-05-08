import { useEffect, useState } from "react";
import { languages, other, technology } from "../data/dataSkill";

function Skills() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const contatiner = document.getElementById("scroll-container");

    const handleScroll = () => {
      if (!contatiner) return;

      const scollTop = contatiner.scrollTop;
      const sectionHeight = contatiner.clientHeight;

      const index = Math.floor(scollTop / sectionHeight);
      setActive(index);
    };

    contatiner?.addEventListener("scroll", handleScroll);
    return () => contatiner?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-5 p-5 scroll-mt-16"
      id="skills"
    >
      {/**Text area for the skills */}
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-4xl">My Skills</h1>
        <p className="text-center w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel tenetur
          modi ipsam? Voluptate, vero! Aliquam facilis fugiat animi dolorum
          cumque distinctio perferendis quasi illum quos tenetur magnam ratione,
          libero molestiae.
        </p>
      </div>
      {/**This is where all the skills will go*/}
      <div className=" flex justify-center w-full ">
        {/**This is the scrollable */}
        <div
          className="w-4/5  h-96 overflow-y-scroll snap-y snap-mandatory no-scrollbar rounded-3xl"
          id="scroll-container"
        >
          {/**Languages */}
          <section className="h-96 flex items-center snap-start">
            <h1 className="[writing-mode:vertical-rl]  rotate-180 text-3xl underline decoration-2 md:underline-offset-8 underline-offset-2">
              Languages
            </h1>
            {/** */}
            <div className="w-full grid md:gap-8 md:grid-cols-4 p-5 justify-items-center md:gap-y-20 grid-cols-2 gap-y-8">
              {languages.map((language, index) => (
                <div
                  key={index}
                  className="md:w-24 md:h-30 flex flex-col items-center gap-1 md:gap-2 h-14 w-20"
                >
                  <img
                    src={language.img}
                    className="w-full h-full object-contain"
                  ></img>
                  <h1 className="text-center text-[0.7rem]">
                    {language.skill}
                  </h1>
                </div>
              ))}
            </div>
          </section>
          <section className="h-96 flex items-center snap-start">
            <h1 className="[writing-mode:vertical-rl]  rotate-180 text-3xl underline decoration-2 md:underline-offset-8 underline-offset-2">
              Technology
            </h1>
            <div className="w-full grid gap-8 md:grid-cols-4 p-5 justify-items-center gap-y-20 grid-cols-2">
              {technology.map((tech, index) => (
                <div
                  key={index}
                  className="md:w-24 md:h-30 flex flex-col items-center gap-2 h-20 w-20"
                >
                  <img
                    src={tech.img}
                    className="w-full h-full object-contain fill-white"
                  ></img>
                  <h1 className="text-center">{tech.skill}</h1>
                </div>
              ))}
            </div>
          </section>
          <section className="h-96 flex items-center snap-start">
            <h1 className="[writing-mode:vertical-rl]  rotate-180 text-3xl underline decoration-2 md:underline-offset-8 underline-offset-2">
              Other
            </h1>
            <div className="w-full grid  grid-cols-4 p-5 justify-items-center gap-y-20">
              {other.map((stuff, index) => (
                <div
                  key={index}
                  className="md:w-24 md:h-30 flex flex-col items-center gap-2 h-20 w-20"
                >
                  <img
                    src={stuff.img}
                    className="w-full h-full object-contain"
                  ></img>
                  <h1 className="text-center">{stuff.skill}</h1>
                </div>
              ))}
            </div>
          </section>
        </div>
        <div className="flex justify-center items-center p-1 ">
          <div className="flex flex-col gap-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${active === index ? "bg-white" : "border-2 border-gray-600"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
