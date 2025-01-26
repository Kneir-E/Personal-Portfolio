import "./App.css";
import ProjectsPanel from "./projects/ProjectsPanel";
import Skills_Panel from "./skills/SkillsPanel";
import LandingPanel from "./landing/Landing";
import Contact from "./contacts/Contact";

const skills = [
  {
    source: "/content/03_hotel/04.png",
    title: "Web Development",
    description: "Experience in Web Development",
    longDesc:
      "Experienced in Web Development using different frameworks as well as integration of APIs. Some of the frequently used ones are: \
    \n\
    \nHTML\
    \nCSS\
    \nJavascript\
    \nReact\
    \nTypescript\
    \nFirebase API",
  },
  {
    source: "/SkillsImages/rp2040.jpg",
    title: "Microcontroller Programming",
    description: "Experience in programming MCUs",
    longDesc:
      "Experienced in programming microcontrollers belonging to the families: \
      \n \
      \nArduino - via Arduino IDE\
      \nESP32 - via Arduino IDE\
      \nRPI Pico - via Micropython and CircuitPython\
      \nPIC16 family - via MPLAB IDE",
  },
  {
    source: "/SkillsImages/web.jpg",
    title: "Application Development",
    description: "Multiple languages of app development",
    longDesc:
      "Experience in creating applications for both desktop and mobile platforms as well as usage of repositories like Git.\
    \n\
    \nPreferred Languages:\
    \nC/C++\
    \nJava\
    \nPython\
    \nKotlin",
  },
];

const projects = [
  {
    title: "Hotel Management Software",
    description:
      "This is a Website designed to handle hotel management software for the concept brand Hypnos Haven. \n\
    The website features a screenwide slideshow at the landing page. Users can book hotel rooms using the website.\n\
    At the management end, admins can add, remove, and modify room packages.\n\
    \n\
    Built using html, css, javascript, Node.js, and Firebase firestore",
    sources: [
      "/content/03_hotel/01.png",
      "/content/03_hotel/02.png",
      "/content/03_hotel/03.png",
      "/content/03_hotel/04.png",
    ],
    url: "https://github.com/Kneir-E/Hotel-Management-Software",
  },
  {
    title: "Machine Learning",
    description:
      "This is an introductory project to machine learning. This uses the the Keras API and the CIFAR-100 dataset \n\
    to train a computer vision model using the Google Colaboratory Notebook and the Python programming language",
    sources: [
      "/content/02_cifar/01.png",
      "/content/02_cifar/02.png",
      "/content/02_cifar/03.png",
      "/content/02_cifar/04.png",
    ],
    url: "https://github.com/Kneir-E/Machine-Learning-CIFAR100",
  },
  {
    title: "Java Projects - OOP",
    description:
      "A compilation of Java projects I have done all throughout the years.\n\
    These projects follow Object Oriented Programming concepts such as encapsulation, inheritance, etc.\n\
    User interface was implemented using different java UI libraries such as swing.\n\
    In addition, a User Interface framework was also implemented such as JavaFX.",
    sources: ["/content/05_java/01.png", "/content/05_java/03.png"],
    url: "https://github.com/Kneir-E/Java-Projects",
  },
  {
    title: "Python Projects",
    description:
      "A compilation of projects I have written in the python scripting language.\n\
    The projects use the common python libraries such as pandas, numpy, scikit, etc.\n\
    User interface libraries such as Tkinter and Matplotlib were also used.",
    sources: ["/content/06_python/01.png", "/content/06_python/02.png"],
    url: "https://github.com/Kneir-E/Personal-Python-Projects",
  },
  {
    title: "Arduino projects",
    description:
      "A compilation of my Arduino IDE projects.\n\
    These are done using the arduino, esp8266, and esp32 families of microcontrollers\n\
    Projects include using different components interfaced to the mentioned MCUs.\n\
    There are also projects implementing a web server using the espressif MCUs.",
    sources: ["/content/01_arduino/01.png", "/content/01_arduino/02.png"],
    url: "https://github.com/Kneir-E/Personal-Arduino-And-ESP32-Projects",
  },
];

function App() {
  return (
    <>
      <LandingPanel></LandingPanel>
      <Skills_Panel data={skills}></Skills_Panel>
      <ProjectsPanel data={projects}></ProjectsPanel>
      <Contact></Contact>
    </>
  );
}

export default App;
