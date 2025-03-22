import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const RootLayout = () => {
  return (
    <div className="">
     
   
        <Outlet />
    
    </div>
  );
};

export default RootLayout;
