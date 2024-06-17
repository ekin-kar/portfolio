//EkoCinema
import cinema from "../../assets/EkoCinema/cinema.webp";
import cinema1 from "../../assets/EkoCinema/cinema1.png";
import cinema2 from "../../assets/EkoCinema/cinema2.png";
import cinema3 from "../../assets/EkoCinema/cinema3.png";
import cinema4 from "../../assets/EkoCinema/cinema4.png";
import cinema5 from "../../assets/EkoCinema/cinema5.png";
//EkoJobs
import jobs from "../../assets/EkoJobs/jobs.webp";
import jobs1 from "../../assets/EkoJobs/jobs1.png";
import jobs2 from "../../assets/EkoJobs/jobs2.png";
import jobs3 from "../../assets/EkoJobs/jobs3.png";
import jobs4 from "../../assets/EkoJobs/jobs4.png";
import jobs5 from "../../assets/EkoJobs/jobs5.png";
import jobs6 from "../../assets/EkoJobs/jobs6.png";
import jobs7 from "../../assets/EkoJobs/jobs7.png";
//EkoPortfolio
import portfolio from "../../assets/EkoPortfolio/portfolio.webp";
import portfolio1 from "../../assets/EkoPortfolio/portfolio1.png";
import portfolio2 from "../../assets/EkoPortfolio/portfolio2.png";
import portfolio3 from "../../assets/EkoPortfolio/portfolio3.png";
//EkoTradingBot
import bot from "../../assets/EkoBot/bot.webp";
import bot1 from "../../assets/EkoBot/bot1.png";
import bot2 from "../../assets/EkoBot/bot2.png";
//Yelp
import yelp from "../../assets/Yelp/yelp.webp";
import yelp1 from "../../assets/Yelp/yelp1.png";
import yelp2 from "../../assets/Yelp/yelp2.png";
import yelp3 from "../../assets/Yelp/yelp3.png";
import yelp4 from "../../assets/Yelp/yelp4.png";
//EkoDoc
import doc1 from "../../assets/EkoDoc/doc1.webp";
import doc2 from "../../assets/EkoDoc/doc2.webp";
import doc3 from "../../assets/EkoDoc/doc3.webp";
// Car
import car1 from "../../assets/RentACar/car1.webp";
import car2 from "../../assets/RentACar/car2.webp";
import car3 from "../../assets/RentACar/car3.webp";
import car4 from "../../assets/RentACar/car4.webp";
import car5 from "../../assets/RentACar/car5.webp";
//Techs
import next from "../../assets/Techs/NextJS-Dark.svg";
import mongo from "../../assets/Techs/MongoDB.svg";
import postgre from "../../assets/Techs/PostgreSQL-Dark.svg";
import typescript from "../../assets/Techs/TypeScript.svg";
import nodejs from "../../assets/Techs/NodeJS-Dark.svg";
import binance from "../../assets/Techs/Binance.svg";
import express from "../../assets/Techs/ExpressJS-Dark.svg";
import ejs from "../../assets/Techs/Ejs.svg";
import tailwind from "../../assets/Techs/TailwindCSS-Dark.svg";
import vue from "../../assets/Techs/VueJS-Dark.svg";
export const projectsData = [
  {
    id: 1,
    image: cinema,
    title: "EkoCinema",
    category: "full stack",
    overview:
      "EkoCinema is a user-friendly cinema app that simplifies the process of browsing local cinemas, exploring movie options, and purchasing tickets. Built with Next.js and MongoDB, EkoCinema merges user-friendly navigation with powerful data handling, ensuring a seamless experience and efficient data management.",
    pics: [cinema1, cinema2, cinema3, cinema4, cinema5],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/ekoCinema",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        image: next,
        desc: "Next.js is used as main framework of the application. It improves page loading speed and navigation through its server-side rendering and component-based structure, thus enhancing the user experience. Its simple but effective method increases the development productivity and scalability.",
      },
      {
        name: "MongoDB",
        image: mongo,
        desc: "MongoDB, which is used with Mongoose, provides a flexible data storage system that is perfect for the dynamic apps like the cinema app. Its document focus simplifies the complex data management, thus improving the efficiency and user experience. Mongoose makes the MongoDB interactions easier by organizing the data and enabling the fast queries.",
      },
    ],
    features: [
      {
        name: "City Selection",
        desc: "Once you have entered the application, you will be able to get to different cities by using the city selection interface, which will make it easy for you to find the place you want to go.",
      },
      {
        name: "Cinema Selection",
        desc: "Discover cinemas in your selected city, giving you a personalized viewing experience that is based on your location.",
      },
      {
        name: "Movie Listings",
        desc: "You will be able to see the detailed movie listings in each selected cinema, which include the time, the number of seats available and the screening information.",
      },
      {
        name: "Movie Details",
        desc: "Go through your chosen movie with the detailed plot, rating, and crew information, therefore, you can select the best movie for you.",
      },
      {
        name: "Seat Selection",
        desc: "Select your preferred seating arrangement with ease through a user-friendly seat selection modal that shows you the available seats.",
      },
    ],
  },
  {
    id: 2,
    image: doc1,
    title: "EkoDoc",
    category: "Frontend",
    overview:
      "EkoDoc is a portfolio web application developed using Next.js and Tailwind CSS. It is designed to showcase projects and provide a platform for users to manage and present their professional work effectively.",
    pics: [doc1, doc2, doc3],
    technologies: [
      {
        name: "Next.js",
        image: next,
        desc: "Next.js serves as the core framework, enabling server-side rendering and static site generation for a highly performant web application.",
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
        desc: "Tailwind CSS is used for styling the application, providing a utility-first CSS framework that allows for rapid UI development.",
      },
    ],
    features: [
      {
        name: "Responsive Design",
        desc: "EkoDoc features a fully responsive design, ensuring optimal user experience across all devices, including desktops, tablets, and mobile phones.",
      },
      {
        name: "User-Friendly Interface",
        desc: "The application boasts a user-friendly interface, making it easy for visitors to navigate through the doctor's profile, services, and other relevant information.",
      },
      {
        name: "Contact Form",
        desc: "EkoDoc includes a contact form, allowing patients to easily reach out to the doctor for appointments, inquiries, or consultations.",
      },
      {
        name: "Professional Profile",
        desc: "A dedicated professional profile page showcases the doctor's qualifications, experience, and other credentials to establish trust and credibility.",
      },
    ],
    links: [
      {
        name: "Live Demo",
        url: "https://eko-doctor-voi5.vercel.app/",
      },
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/eko-doctor",
      },
    ],
  },
  {
    id: 3,
    image: car1,
    title: "Rent A Car",
    category: "frontend",
    overview:
      "Responsive car rental website design, demonstrating a seamless user experience and visually appealing interface.",
    pics: [car1, car2, car3, car4, car5],

    technologies: [
      {
        name: "Vue",
        image: vue,
        desc: "Vue.js is the JavaScript framework used to build the frontend of the application, providing a reactive and component-based structure for creating interactive user interfaces.",
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
        desc: "Tailwind CSS is the utility-first CSS framework utilized for styling the application, enabling rapid UI development and customization through utility classes.",
      },
    ],
    features: [
      {
        name: "Responsive Design",
        desc: "Rent A Car features a fully responsive design, ensuring optimal user experience across various devices, including desktops, tablets, and mobile phones.",
      },
    ],
    links: [
      {
        name: "Live Demo",
        url: "https://rentacar.ekinkar.com/",
      },
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/rent-a-car",
      },
    ],
  },
  {
    id: 4,
    image: jobs,
    title: "EkoJobs",
    category: "full stack",
    overview:
      "EkoJobs is a multifunctional job search platform that provides the user with all the necessary tools to easily find a job. Built with Next. js and PostgreSQL, EkoJobs uses a combination of user-friendly interface design with strong backend functionality which ultimately gives the user an easy-to-use platform and at the same time efficient data management.",
    pics: [jobs1, jobs2, jobs3, jobs4, jobs5, jobs6, jobs7],
    links: [
      {
        name: "Live Demo",
        url: "https://eko-jobs.vercel.app/",
      },
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/ekoJobs",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        image: next,
        desc: "The core framework is Next.js which improves page loading speed and navigation through server-side rendering and component-based structure, which in turn, helps in achieving higher development productivity and scalability. ",
      },
      {
        name: "PostgreSQL",
        image: postgre,
        desc: "For data storage, PostgreSQL is the reliable and scalable solution for maintaining job listings and user information, and it helps in efficient data retrieval and querying.",
      },
      {
        name: "TypeScript",
        image: typescript,
        desc: "TypeScript is used throughout the project to provide static typing and improved code maintainability, reducing potential errors and enhancing developer productivity.",
      },
    ],
    features: [
      {
        name: "Job Search",
        desc: "Users can easily search for job opportunities based on different criteria such as job title, location and industry. This will lead to a customized job search experience.",
      },
      {
        name: "Job Listings",
        desc: "Detailed job listings provide a detailed description of the job, including job description, requirements, and application guidelines, which enable users to make informed decisions.",
      },
      {
        name: "Clerk Authentication",
        desc: "EkoJobs integrates Clerk authentication middleware to ensure secure user authentication and data protection, enhancing the platform's trustworthiness.",
      },
      {
        name: "React Hook Form, Zod Validation",
        desc: "Utilizing React Hook Form and Zod validation, EkoJobs ensures accurate and efficient data submission and validation, improving the overall user experience and data integrity.",
      },
      {
        name: "Shadcn UI",
        desc: "Leveraging Shadcn UI, EkoJobs achieves a visually appealing and intuitive user interface, enhancing user engagement and satisfaction with the platform's design aesthetics.",
      },
    ],
  },
  {
    id: 5,
    image: portfolio,
    title: "EkoPortfolio",
    category: "full stack",
    overview:
      "EkoPortfolio is a web application developed using Next.js. It designed to help users in monitoring and managing their cryptocurrency investments effectively. It provides a seamless interface for tracking trades, calculating average prices, and viewing current holdings.",
    pics: [portfolio1, portfolio2, portfolio3],
    technologies: [
      {
        name: "Next.js",
        image: next,
        desc: "Next.js is utilized as the foundational framework for building a highly responsive and dynamic web application.",
      },
      {
        name: "Node.js",
        image: nodejs,
        desc: "Node.js serves as the backend runtime environment, facilitating server-side logic and interaction with external APIs.",
      },
      {
        name: "Binance API",
        image: binance,
        desc: "The application integrates with the Binance API to fetch real-time market data, enabling users to access up-to-date information on various cryptocurrencies.",
      },
    ],
    features: [
      {
        name: "Trade Tracking",
        desc: "Trade Tracking: Users can effortlessly track their cryptocurrency trades, including buy and sell orders, to maintain a comprehensive record of their investment activities.",
      },
      {
        name: "Average Price Calculation",
        desc: "EkoPortfolio automatically calculates the average price of each cryptocurrency in the user's portfolio, providing valuable insights into their overall investment performance.",
      },
      {
        name: "Portfolio Page",
        desc: "A dedicated portfolio page allows users to visualize their current holdings, including the quantity of each cryptocurrency held and their respective market values.",
      },
      {
        name: "Detailed Coin Stats",
        desc: "Users can access detailed statistics and information about any cryptocurrency, even if they do not currently own the coin, empowering them to make informed investment decisions.",
      },
      {
        name: "Search Coin Functionality",
        desc: "The application features a convenient search coin button, enabling users to quickly look up specific cryptocurrencies and access relevant data and insights.",
      },
    ],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/ekoPortfolio",
      },
    ],
  },
  {
    id: 6,
    image: bot,
    title: "Eko Trading Bot",
    category: "console base",
    overview:
      "The Eko Trading Bot is an advanced trading automation tool specifically made for enhancing automatic trading at Binance’s Cross and Isolated Margin market. Developed as a personal project, it offers a range of features aimed at enhancing trading efficiency and flexibility. The bot's main script, tradeBot.js, employs predefined conditions and indicators to execute long or short positions, while additional scripts enable manual trading on both Cross Margin and Isolated Margin markets.",
    pics: [bot1, bot2],
    technologies: [
      {
        name: "Node.js",
        image: nodejs,
        desc: "The core framework is Next.js which improves page loading speed and navigation through server-side rendering and component-based structure, which in turn, helps in achieving higher development productivity and scalability. ",
      },
      {
        name: "Binance API",
        image: binance,
        desc: "The bot interacts with the Binance API to access real-time market data, execute trades, and manage account activities such as borrowing and repayment of funds.",
      },
    ],
    features: [
      {
        name: "Automated Trading with tradeBot.js",
        desc: "The primary feature of the bot, tradeBot.js, automates trading on the Margin market based on predefined conditions and indicators. It orchestrates the entire trading process, including borrowing funds, placing market buy or sell orders, setting Oco (One Cancels the Other) orders for position closure, and automatic repayment of borrowed funds.",
      },
      {
        name: "Manual Trading Scripts",
        desc: "The bot includes additional scripts for manual trading on both Cross Margin (crossManual.js) and Isolated Margin (isolatedManual.js) markets. These scripts provide users with the flexibility to manually initiate and manage long or short positions, set profit targets, and define stop-loss levels according to their preferences.",
      },
      {
        name: "Isolated Margin Oco Trading",
        desc: "The isolatedOcoTrade.js script facilitates placing Isolated Margin orders with fixed stop and limit prices. Similar to other scripts, it handles automatic borrowing and repayment of funds, simplifying the trading process for users.",
      },
      {
        name: "Prerequisites and Setup Guide",
        desc: "The project provides clear instructions on the prerequisites for running the bot, including Node.js and npm installation, as well as obtaining a Binance API key and secret. A setup guide outlines the steps for cloning the repository, installing dependencies, configuring environment variables, and running the desired scripts.",
      },
    ],
    links: [
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/binanceTradeBot",
      },
    ],
  },
  {
    id: 7,
    image: yelp,
    title: "Yelp Camp",
    category: "full stack",
    overview:
      "The project is a web application developed as part of a web development course on Udemy(2 years ago). Built using Node.js, Express.js, MongoDB, and EJS, the application provides users with features to register, add new campgrounds, leave reviews, and interact with existing content.",
    pics: [yelp1, yelp2, yelp3, yelp4],
    technologies: [
      {
        name: "Node.js",
        image: nodejs,
        desc: "As the runtime environment, Node.js facilitates server-side scripting and enables asynchronous, event-driven programming for handling HTTP requests and responses.",
      },
      {
        name: "Express.js",
        image: express,
        desc: " Express.js is utilized as the web application framework for Node.js, simplifying the process of building robust and scalable web applications with features such as routing, middleware, and template rendering.",
      },
      {
        name: "MongoDB",
        image: mongo,
        desc: " MongoDB serves as the NoSQL database solution, providing a flexible and schema-less data storage mechanism for storing user accounts, campground information, and reviews.",
      },
      {
        name: "EJS",
        image: ejs,
        desc: "EJS is the templating engine used to generate dynamic HTML content based on data retrieved from the server, allowing for the creation of reusable components and layouts.",
      },
    ],
    features: [
      {
        name: "User Registration",
        desc: "The application allows users to register accounts, providing a personalized experience with features such as adding new campgrounds and leaving reviews.",
      },
      {
        name: "Campground Management",
        desc: "Registered users can create new campgrounds, which are stored in the MongoDB database. Additionally, users have the ability to edit and delete their own campgrounds, providing control over their content.",
      },
      {
        name: "Review System",
        desc: "Users can leave reviews under any campground, contributing to community engagement and providing valuable feedback for other users. Furthermore, users have the capability to delete their own comments, enhancing interaction and user autonomy.",
      },
      {
        name: "Authentication and Authorization",
        desc: "The project implements authentication mechanisms to ensure secure access to user-specific functionalities. By incorporating user authentication, the application safeguards user data and ensures privacy and security throughout the user journey.",
      },
    ],

    links: [
      {
        name: "Live Demo",
        url: "https://eko-yelp.onrender.com/",
      },
      {
        name: "Source Code",
        url: "https://github.com/ekin-kar/yelpCamp",
      },
    ],
  },
];

export const projectsNav = [
  { name: "All" },
  { name: "Full Stack" },
  { name: "Frontend" },
  { name: "Console Base" },
];
