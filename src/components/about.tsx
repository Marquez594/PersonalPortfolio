function About() {
  return (
    <div className="min-h-screen bg-white pt-16 flex p-3 flex-col md:flex-row" id="about">
      {/**Left side where the about details go */}
      <div className="lg:flex-2 md:flex-1">
        <div className="pl-12 flex flex-col justify-center  h-full p-2 gap-5">
          <h1 className="md:text-6xl lg:text-8xl text-6xl font-bold">Hello, I am <br></br>Brandon Marquez</h1>
          <p className="lg:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            repellendus, perspiciatis perferendis id provident iure tempora
            magnam obcaecati cum eius optio, a molestiae, necessitatibus minus
            quos nihil consequuntur porro. Suscipit.
          </p>
        </div>
      </div>
      {/**This is where the image goes */}
      <div className=" flex-1 flex flex-col justify-center items-center">
        <div className="md:h-9/10 md:w-9/10 lg:h-9/10 lg:w-3/4 rounded-full bg-black h-64 w-3/4 border">
        </div>
      </div>
    </div>
  );
}
export default About;
