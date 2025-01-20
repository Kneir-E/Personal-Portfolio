import "./App.css";
import ProjectsPanel from "./projects/ProjectsPanel";
import Skills_Panel from "./skills/SkillsPanel";
import ImageSlider from "./projects/ImageSlider";

function App() {
  const skills = [
    {
      source: "/SkillsImages/rp2040.jpg",
      title: "Microcontroller Programming",
      description: "I have experience in multiple MCUs",
      longDesc:
        "Experienced in programming microcontrollers belonging to the Arduino, ESP32, RPI Pico, PIC16 family. \nThese are mostly done using the Arduino IDE, Micropython, Circuipython, and MPLAB IDE environments.",
    },
    {
      source: "/SkillsImages/web.jpg",
      title: "Web Development",
      description: "Short Description 2",
      longDesc: "Skill Long Description 2",
    },
    {
      source: "/image.png",
      title: "Skill Name 3",
      description: "Short Description 3",
      longDesc: "Skill Long Description 3",
    },
  ];

  return (
    <>
      {/* <Skills_Panel data={skills}></Skills_Panel> */}
      {/* <ProjectsPanel></ProjectsPanel> */}
      <ImageSlider sources={["arr1", "arr2", "arr3"]}></ImageSlider>
    </>
  );
}

export default App;
