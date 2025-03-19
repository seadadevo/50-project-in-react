import { useSelector, useDispatch } from "react-redux";

import "../back.css";
import { nextSlide, prevSlide } from "../../../app/features/project1Slice";

const ARROW_COLORS = ["#1b3c57", "#020911", "#9ba9cb", "#ffb500", "#235f99"];

const BackgroundSlice = () => {
  const dispatch = useDispatch();
  const { activeSlide, images } = useSelector(
    (state: { slider: { activeSlide: number; images: string[] } }) =>
      state.slider
  );

  return (
    <div
      className="slider-container"
      style={{ backgroundImage: `url(${images[activeSlide]})` }}
    >
      {images.map((image: string, index: number) => (
        <div
          key={image}
          className={`slide ${index === activeSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <button
        className="arrow left-arrow"
        style={{ backgroundColor: ARROW_COLORS[activeSlide] }}
        onClick={() => dispatch(prevSlide())}
      >
        ❮
      </button>
      <button
        className="arrow right-arrow"
        style={{ backgroundColor: ARROW_COLORS[activeSlide] }}
        onClick={() => dispatch(nextSlide())}
      >
        ❯
      </button>
    </div>
  );
};

export default BackgroundSlice;
