export type skillType = {
  skill: string;
  img: string;
};

const languages: skillType[] = [
  {
    skill: "JavaScript",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s",
  },
  {
    skill: "TypeScript",
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    skill: "Python",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/960px-Python-logo-notext.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    skill: "Java",
    img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    skill: "HTML",
    img: "https://images.icon-icons.com/112/PNG/512/html5_18891.png",
  },
  {
    skill: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png",
  },
  {
    skill: "SQL",
    img: "https://www.svgrepo.com/show/331760/sql-database-generic.svg",
  },
];

const technology: skillType[] = [
  {
    skill: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png",
  },
  {
    skill: "Next.js",
    img: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
  },
  {
    skill: "Node.js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    skill: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/3840px-Tailwind_CSS_Logo.svg.png",
  },
];

const other: skillType[] = [
  {
    skill: "Git",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/3840px-Git_icon.svg.png",
  },
];

export { technology, languages, other };
