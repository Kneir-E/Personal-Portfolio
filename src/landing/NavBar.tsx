import { useState, useEffect } from "react";
import "./NavBar.css";

interface Props {
  mainTitle?: string;
  titles?: Array<string>;
}

function NavBar({
  mainTitle = "Personal Portfolio",
  titles = ["Home", "About", "Projects", "Contact"],
}: Props) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`NavBar ${isScrolled ? "Scrolled" : ""}`}>
      <div className="NavTitle">{mainTitle}</div>
      <div className="NavButtons">
        {titles.map((title) => (
          <a className="Clickable" href={`#${title}`} key={title}>
            {title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
