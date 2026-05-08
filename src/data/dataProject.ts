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
    page: "https://marquez594.github.io/WeatherApp/"
  }
];
