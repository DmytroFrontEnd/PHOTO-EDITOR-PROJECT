import { imageArr } from "../Images";
import styles from "./Photos.module.css";

const Photos = (props) => {
  return (
    <div className="photos">
      <div className={styles.photosContainer}>
        <div>
          <h1 className="click">Choose the image</h1>
        </div>
        <div className={styles.imageDiv}>
          {imageArr.map((image, index) => {
            return (
              <img
                className={styles.image}
                onClick={() => props.imageHandler(index)}
                src={image.img}
                alt="/"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Photos;
