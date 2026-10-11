export type projectType = {
  name: string;
  description?: string;
  github: string;
  page?: string;
};

export const projectList: projectType[] = [
  {
    name: "Pokemon Search",
    description:
      "A site where the user can look up their favorite Pokémon and grab valuable information about them. This includes making API calls to get information about the Pokémon, the ability of the Pokémon, and the evolution chain.",
    github: "https://github.com/Marquez594/PokemonAPI",
    page: "https://marquez594.github.io/PokemonAPI/",
  },
  {
    name: "Quiz App",
    description:
      "A simple quiz site that lets the user answer and see whether or not their answer was correct",
    github: "https://github.com/Marquez594/QuizApp",
    page: "https://marquez594.github.io/QuizApp/",
  },
  {
    name: "E-com Website",
    description:
      "Made a website that users could browse and “shop” using an API to get the information. It had simple filters and different ways to sort the items.",
    github: "https://github.com/Marquez594/E-Com",
    page: "https://marquez594.github.io/E-Com/",
  },
  {
    name: "Weather App",
    description:
      "Using API's, the pages shows the current weather of the location it's currently set at. Users can also change the location of page to see the weather in other parts of the world. ",
    github: "https://github.com/Marquez594/BetterWeather",
    page: "https://marquez594.github.io/BetterWeather/",
  },
  {
    name: "Bulletin-Board",
    description:
      "Site where users can send meessage to everyone using a database. Full stack application with node.js in the backend",
    github: "https://github.com/Marquez594/Bulletin-Board",
    page: "https://bulletin-delta-seven.vercel.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "Website that works with the Bulletin-Board that is able to monitor post and users. Within the admin center you can edit and delete posts and users. The site was created entirely with Next.js",
    github: "https://github.com/Marquez594/BulletinAdmin",
    page: "https://bulletin-admin.vercel.app/",
  },
  {
    name: "React Mini Projects",
    description:
      "Collection of some mini react projects that I saw online. Many of these projects helped me gain a better understanding of react.",
    github: "https://github.com/Marquez594/ReactProjects",
    page: "https://react-projects-three-livid.vercel.app/",
  },
  {
    name: "Bear Chat",
    description:
      "*Calls have a chance to not work* Application where users can taxt to each other by video and/or audio calls. Users can also message one another. Works like any modern social media app.",
    github: "https://github.com/Marquez594/BearChat",
    page: "https://bear-chat-rust.vercel.app/",
  },
];
