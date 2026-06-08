import Self from "../assets/self.jpg"
function About() {
  return (
    <div
      className="min-h-screen bg-white pt-16 flex p-3 flex-col md:flex-row"
      id="about"
    >
      {/**Left side where the about details go */}
      <div className="lg:flex-2 md:flex-1">
        <div className="pl-12 flex flex-col justify-center  h-full p-2 gap-5">
          <h1 className="md:text-6xl lg:text-8xl text-6xl font-bold">
            Hello, I am <br></br>Brandon Marquez
          </h1>
          <p className="lg:text-xl md:text-2xl">
            I am a passionate Front-End Developer who enjoys creating
            responsive, modern, and user-friendly web applications. I focus on
            building clean interfaces and smooth user experiences using
            technologies like React, TypeScript, JavaScript, HTML, CSS, and
            Tailwind CSS. I enjoy turning ideas into functional and visually
            appealing websites while continuously learning and improving my
            development skills.
          </p>
        </div>
      </div>
      {/**This is where the image goes */}
      <div className=" flex-1 flex flex-col justify-center items-center">
        <div className="md:h-9/10 md:w-9/10 lg:h-9/10 lg:w-3/4 rounded-full bg-black h-64 w-3/4 border overflow-hidden">
          <img src={Self} className="w-full h-full object-cover md:object-[42%_30%] object-[40%_30%]"></img>
        </div>
      </div>
    </div>
  );
}
export default About;
