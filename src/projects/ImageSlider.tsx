import { useState, useEffect } from "react";

interface Props {
  sources: Array<string>;
}

function ImageSlider(props: Props) {
  const [currImg, setCurrImg] = useState<number>(0);

  const handleNext = () => {
    setCurrImg((prev) => (prev === props.sources.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setCurrImg((prev) => (prev === 0 ? props.sources.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalID = setInterval(handleNext, 3000);

    return () => {
      clearInterval(intervalID);
    };
  }, [props.sources.length]);

  return (
    <div className="ImageSlider">
      <div className="BackButton" onClick={handleBack}>
        <p>{"<"}</p>
      </div>

      <img src={props.sources[currImg]} alt="image.jpg" />
      <div className="NextButton" onClick={handleNext}>
        <p>{">"}</p>
      </div>
    </div>
  );
}

export default ImageSlider;
