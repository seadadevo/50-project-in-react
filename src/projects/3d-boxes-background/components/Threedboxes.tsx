import { useSelector, useDispatch } from "react-redux";

import "../threebox.css";
import { toggleSize } from "../../../app/features/boxSlice";
import type { RootState } from "../../../app/store";
import { useState } from "react";

const Threedboxes = () => {
  const dispatch = useDispatch();
  const isBig = useSelector((state: RootState) => state.box.big);
  // const [isBig, setIsBig] = useState(true)
  return (
    <div className="container space-y-3" >
      <button
        className="magic cursor-pointer "
        onClick={() => dispatch(toggleSize())}
      >
        Magic 🎩
      </button>

      <div className={`boxes ${isBig ? 'big' : ''}`}>
      {Array.from({ length: 4 }).map((_, i) =>
          Array.from({ length: 4 }).map((_, j) => (
            <div
              key={`${i}-${j}`}
              className="box"
              style={{
                backgroundPosition: `${-j * 125}px ${-i * 125}px`,
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default Threedboxes;
