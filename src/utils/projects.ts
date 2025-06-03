// src/data/projects.ts
export interface Project {
    id: number;
    title: string;
    blurb: string;
    stack: string[];
    repo: string;
    demo?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Shelter Strain Predictor (Los Angeles County)",
      blurb: "Developed a machine learning pipeline to predict shelter strain across LA county, using data from 6+ sources including housing inventory, homelessness counts, evictions, unemployment, and weather data",
      stack: ["Python", "scikit-learn", "pandsas", "NumPy", "Matplotlib"],
      repo: "https://github.com/arthurnnguyen/cs4210-la-shelter-prediction-project",
    },

    {
        id: 2,
        title: "Personal Website",
        blurb: "My portfolio site built with React and Tailwind CSS.",
        stack: ["React", "Tailwind CSS", "TypeScript", "Azure", "Vite"],
        repo: "https://github.com/arthurnnguyen/arthur-portfolio"
    },

    {
        id: 3,
        title: "Wilderness Survival Game",
        blurb: "A survival AI-driven game where an automated “player” navigates a procedurally generated map from west to east, managing strength, food, water, and gold resources along the way.",
        stack: ["Python", "PyGame"],
        repo: "https://github.com/arthurnnguyen/cs3560-wss-project"
    },

    {
        id: 4,
        title: "Stock Anayltics Dashboard",
        blurb: "Designed and developed a real-time stock analytics platform, enabling users to track and analyze market data via a public-facing web application" + 
            "Integrated the Finnhub API to fetch and display live stock prices, historical trends, and key financial metrics" +
            "Developed an interactive dashboard and built a scalable backend using Python(Django) and PostgreSQL to ensure efficient data storage and retrieval",
        stack: ["Python", "Django", "PostgreSQL", "Docker", "HTML", "CSS", "Azure"],
        repo: "https://github.com/arthurnnguyen/Millionare_Maker"
    },

    {
        id: 5,
        title: "Movie Search App",
        blurb: "Developed an Android application that allows users to search, browse, and view detailed information about movies and TV shows, leveraging the TMDB API for real-time data access." +
            "Integrated features such as user authentication, personalized recommendations, and favorites management, enhancing user engagement and experience through seamless data synchronization",
        stack: ["Kotline", "Android SDK", "Jetpack Compose", "Retrofit"],
        repo: "https://github.com/arthurnnguyen/CS4750-MovieApp"
    },
  ];
