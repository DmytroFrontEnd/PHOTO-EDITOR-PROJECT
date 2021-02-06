import styles from "./Editor.module.css";

const Editor = (props) => {
  const styleForImage = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    filter: `opacity(${props.opacity}%) sepia(${props.sepia}%) saturate(${props.saturate}%) hue-rotate(${props.hueRotate}deg) grayscale(${props.grayscale}%) brightness(${props.brightness}%) contrast(${props.contrast}%) blur(${props.blur}px)`,
  };
  return (
    <div className="editor">
      <div className={styles.editorImg}>
        {props.image ? (
          <img
            style={styleForImage}
            src={props.imageArr[props.image - 1].img}
            alt="/"
          ></img>
        ) : null}
      </div>
    </div>
  );
};
export default Editor;
