import "./App.css";
import ProjectsPanel from "./projects/ProjectsPanel";
import Skills_Panel from "./skills/SkillsPanel";
import LandingPanel from "./landing/Landing";

const skills = [
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
    title: "Project1",
    description: "Project1 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project2",
    description: "Project2 Description",
    sources: [
      "/SkillsImages/rp2040.jpg",
      "/SkillsImages/web.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
  {
    title: "Project3",
    description: "Project3 Description",
    sources: [
      "/ProjectsImages/img1.jpg",
      "/ProjectsImages/img2.jpg",
      "/ProjectsImages/img3.jpg",
    ],
    url: "https://www.google.com",
  },
];

function App() {
  return (
    <>
      <LandingPanel></LandingPanel>
      <Skills_Panel data={skills}></Skills_Panel>
      <ProjectsPanel data={projects}></ProjectsPanel>
    </>
  );
}

export default App;
