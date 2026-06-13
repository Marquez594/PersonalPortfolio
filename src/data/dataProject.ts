export type projectType = {
  name: string;
  description?: string;
  github: string;
  page?: string;
};

export const projectList: projectType[] = [
  {
    name: "Pokemon Search",
    description: "Website",
    github: "https://github.com/Marquez594/PokemonAPI",
    page: "https://marquez594.github.io/PokemonAPI/",
  },
  {
    name: "Quiz App",
    description: "Quiz App",
    github: "https://github.com/Marquez594/QuizApp",
    page: "https://marquez594.github.io/QuizApp/",
  },
  {
    name: "E-com Website",
    description: "Buy all your fav stuff",
    github: "https://github.com/Marquez594/E-Com",
    page: "https://marquez594.github.io/E-Com/",
  },
  {
    name: "Weather App",
    description: "Weather App",
    github: "https://github.com/Marquez594/WeatherApp",
    page: "https://marquez594.github.io/WeatherApp/",
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
];
