import { useDispatch } from "react-redux";
import { toggleCup } from "../../../app/features/waterSlice";
import classNames from "classnames";
import "../drinkWater.css";
interface CupProps {
  index: number;
  isActive: boolean;
}

const Cup = ({ index, isActive }: CupProps) => {
  const dispatch = useDispatch();

  return (
 <div
      className={classNames("cup", "cup-small", { active: isActive })}
      onClick={() => dispatch(toggleCup(index))}
      >
      <p>250ml</p>
    </div>
        
  );
};

export default Cup;
