import { RouterProvider } from "react-router-dom";
import router from "../src/router";
import "./App.css";
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
