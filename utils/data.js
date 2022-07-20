export const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const projectItems = [
  {
    name: "This Website",
    keywords: ["Next JS", "React"],
    id: "this-website",
    image: "/images/floating-images/this-website.png",
  },
  {
    name: "Live Chat",
    keywords: ["Vue3", "Vite", "Firebase"],
    id: "live-chat",
    image: "/images/floating-images/live-chat.png",
    github: "https://github.com/bravoosonja/live-chat",
    live: "https://vue-firebase-4dc0a.web.app/",
  },
  {
    name: "Movie App",
    keywords: ["React", "Styled-components", "External API"],
    id: "movie-app",
    image: "/images/floating-images/movie-app.png",
    github: "https://github.com/bravoosonja/movie-app",
    live: "https://master--bright-parfait-e0cd13.netlify.app/",
  },
  {
    name: "Shopping Cart",
    keywords: [
      "React",
      "Styled-components",
      "Context API",
      "Responsive Design",
    ],
    id: "shopping-cart",
    image: "/images/floating-images/shopping-cart.png",
    github: "https://github.com/bravoosonja/shopping-cart",
    live: "https://regal-faun-bcff09.netlify.app/",
  },
];

export const skillsItems = [
  {
    name: "React",
    keywords: ["Next JS", "Styled-components"],
    pages: ["this-website", "shopping-cart", "movie-app"],
  },
  {
    name: "Vue",
    keywords: ["Vue3", "Vite"],
    pages: ["live-chat"],
  },
];

export const liveChatImages = [
  {
    src: "/images/live-chat/dark-login.png",
    alt: "dark mode login",
  },
  {
    src: "/images/live-chat/dark-chat.png",
    alt: "dark mode chat",
  },
  {
    src: "/images/live-chat/light-login.png",
    alt: "light mode login",
  },
  {
    src: "/images/live-chat/light-chat.png",
    alt: "light mode chat",
  },
];
