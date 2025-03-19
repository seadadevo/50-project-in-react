import { useEffect } from "react";
import Card from "./components/Card";
import { useDispatch } from "react-redux";
import { setData } from "../../app/features/cardSlice";

const Project2 = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(
        setData({
          headerImg:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
          title: "Lorem ipsum dolor sit amet",
          excerpt:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis",
          profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
          name: "John Doe",
          date: "Oct 08, 2020",
        })
      );
    }, 2500); 
  }, [dispatch]);

  return (
    <div className="">
      <h1 className="text-center text-[#76aac1] font-bold text-2xl">Content Placeholder</h1>
      <Card /> 
    </div>
  );
};

export default Project2;
