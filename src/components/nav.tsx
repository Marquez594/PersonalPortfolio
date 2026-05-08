function Nav(){
    return (
        <nav className="w-full border-b-2 flex p-4 justify-between items-center fixed bg-white h-16 [&>a]:text-center z-10">
            <h1 className="md:text-3xl text-2xl">Brandon Marquez</h1>
            <div className="flex gap-6 ">
                <a className="hover:cursor-pointer" href="#about">About Me</a>
                <a className="hover:cursor-pointer" href="#skills">Skills</a>
                <a className="hover:cursor-pointer" href="#projects">Projects</a>
            </div>
        </nav>
    )
}

export default Nav