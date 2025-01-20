import { useState } from "react";

interface Props {
  sources: Array<string>;
}

function ImageSlider(props: Props) {
  const [currImg, setCurrImg] = useState<number>(0);

  const handleRight = () => {
    setCurrImg((prev) => (prev === props.sources.length - 1 ? 0 : currImg + 1));
  };

  const handleLeft = () => {
    setCurrImg((prev) => (prev === 0 ? props.sources.length - 1 : currImg - 1));
  };

  return (
    <>
      <h2 onClick={handleLeft}>{"<"}</h2>
      <p>{currImg}</p>
      <p>{props.sources[currImg]}</p>
      <h2 onClick={handleRight}>{">"}</h2>
    </>
  );
}

export default ImageSlider;
