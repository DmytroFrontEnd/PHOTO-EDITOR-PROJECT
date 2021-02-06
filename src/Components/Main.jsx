import { useState } from "react";
import Editor from "./Editor/Editor";
import { imageArr } from "./Images";
import Photos from "./Photos/Photos";
import Range from "./Range/Range";

const Main = () => {
  const [image, setImage] = useState(3);
  const [opacity, setOpacity] = useState(imageArr[image - 1].opacity);
  const [sepia, setSepia] = useState(imageArr[image - 1].sepia);
  const [saturate, setSaturate] = useState(imageArr[image - 1].saturate);
  const [hueRotate, setHueRotate] = useState(imageArr[image - 1].hueRotate);
  const [grayscale, setGrayscale] = useState(imageArr[image - 1].grayscale);
  const [brightness, setBrightness] = useState(imageArr[image - 1].brightness);
  const [contrast, setContrast] = useState(imageArr[image - 1].contrast);
  const [blur, setBlur] = useState(imageArr[image - 1].blur);
  const imageHandler = (i) => {
    setImage(i + 1);
    setOpacity(imageArr[i].opacity);
    setSepia(imageArr[i].sepia);
    setSaturate(imageArr[i].saturate);
    setHueRotate(imageArr[i].hueRotate);
    setGrayscale(imageArr[i].grayscale);
    setBrightness(imageArr[i].brightness);
    setContrast(imageArr[i].contrast);
    setBlur(imageArr[i].blur);
  };
  const array = [
    { name: "Opacity", value: opacity, min: 0, max: 100 },
    { name: "Sepia", value: sepia, min: 0, max: 100 },
    { name: "Saturate", value: saturate, min: 0, max: 200 },
    { name: "Hue-rotate", value: hueRotate, min: 0, max: 360 },
    { name: "Gray-Scale", value: grayscale, min: 0, max: 100 },
    { name: "Brightness", value: brightness, min: 0, max: 200 },
    { name: "Contrast", value: contrast, min: 0, max: 200 },
    { name: "Blur", value: blur, min: 0, max: 20 },
  ];
  const inputHandler = (e, i) => {
    if (array[i].name === "Opacity") {
      return setOpacity(e.target.value);
    } else if (array[i].name === "Sepia") {
      return setSepia(e.target.value);
    } else if (array[i].name === "Saturate") {
      return setSaturate(e.target.value);
    } else if (array[i].name === "Hue-rotate") {
      return setHueRotate(e.target.value);
    } else if (array[i].name === "Gray-Scale") {
      return setGrayscale(e.target.value);
    } else if (array[i].name === "Brightness") {
      return setBrightness(e.target.value);
    } else if (array[i].name === "Contrast") {
      return setContrast(e.target.value);
    } else if (array[i].name === "Blur") {
      setBlur(e.target.value);
    }
  };
  return (
    <div className="main">
      <Photos imageHandler={imageHandler} />
      <Editor
        blur={blur}
        contrast={contrast}
        brightness={brightness}
        hueRotate={hueRotate}
        saturate={saturate}
        sepia={sepia}
        imageArr={imageArr}
        opacity={opacity}
        image={image}
        grayscale={grayscale}
      />
      <Range inputHandler={inputHandler} array={array} />
    </div>
  );
};
export default Main;
