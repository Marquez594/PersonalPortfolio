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
      "Using API's, I would have a weather show for a location. The browser asks for permission for the user's location to check the weather. Users could also check other locations if they wished ",
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
