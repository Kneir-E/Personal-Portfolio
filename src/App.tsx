import "./App.css";
import Skills_Panel from "./skills/SkillsPanel";

function App() {
  const skills = [
    {
      source: "/image.png",
      title: "Skill Name 1",
      description: "Short Description 1",
      longDesc: "Skill Long Description 1",
    },
    {
      source: "/image.png",
      title: "Skill Name 2",
      description: "Short Description 2",
      longDesc: "Skill Long Description 2",
    },
    {
      source: "/image.png",
      title: "Skill Name 3",
      description: "Short Description 3",
      longDesc: "Skill Long Description 3",
    },
    {
      source: "/image.png",
      title: "Skill Name 4",
      description: "Short Description 4",
      longDesc: "Skill Long Description 4",
    },
    {
      source: "/image.png",
      title: "Skill Name 5",
      description: "Short Description 5",
      longDesc: "Skill Long Description 5",
    },
    {
      source: "/image.png",
      title: "Skill Name 6",
      description: "Short Description 6",
      longDesc: "Skill Long Description 6",
    },
  ];

  return (
    <>
      <Skills_Panel data={skills}></Skills_Panel>
    </>
  );
}

export default App;
