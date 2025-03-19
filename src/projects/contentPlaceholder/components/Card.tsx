// Card.js
import { useEffect } from "react";
import {  useSelector } from "react-redux";
import { setData, RootState } from "../../../app/features/cardSlice";
import "../contentPlac.css";
import CardSkeleton from "./CardSkeleton";
const Card = () => {
  
  const { headerImg, title, excerpt, profileImg, name, date, loading } =
    useSelector((state: RootState) => state.card);

    //  Without using library 
  // useEffect(() => {
  //     setTimeout(() => {
  //         dispatch(setData({
  //             headerImg: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
  //             title: "Ahmed is good",
  //             excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //             profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
  //             name: "John Doe",
  //             date: "Oct 08, 2020",
  //         }))
  //     }, 2500);
  // }, [dispatch])

  return (
    //     <div className="card">
    //         <div className={`card-header ${loading ? "animate-pg" : ""}`}>
    //             {loading ? null : <img src={profileImg} alt="Header-img"/>}
    //         </div>
    //     <div className="card-content">
    //         <h3 className={`card-title ${loading ? "animate-pg animated-bg-text" : ""}`}>
    //             {loading ? "" : title }
    //         </h3>
    //         <p className="card-excerpt">
    //       {loading ? (
    //         <>
    //           <span className="animated-bg animated-bg-text">&nbsp;</span>
    //           <span className="animated-bg animated-bg-text">&nbsp;</span>
    //           <span className="animated-bg animated-bg-text">&nbsp;</span>
    //         </>
    //       ) : (
    //         excerpt
    //       )}
    //     </p>
    //     <div className="author">
    //       <div className={`profile-img ${loading ? "animated-bg" : ""}`}>
    //         {loading ? null : <img src={profileImg} alt="Profile" />}
    //       </div>
    //       <div className="author-info">
    //         <strong className={loading ? "animated-bg animated-bg-text" : ""}>
    //           {loading ? "" : name}
    //         </strong>
    //         <small className={loading ? "animated-bg animated-bg-text" : ""}>
    //           {loading ? "" : date}
    //         </small>
    //       </div>
    //     </div>
    //     </div>
    //   </div>

    // ! By using Library (React-Content-Loader)
    <div className="card">
      {loading ? (
        <CardSkeleton />
      ) : (
        <>
          <div className="card-header">
            <img src={headerImg} alt="Header" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-excerpt">{excerpt}</p>
            <div className="author">
              <div className="profile-img">
                <img src={profileImg} alt="Profile" />
              </div>
              <div className="author-info">
                <strong>{name}</strong>
                <small>{date}</small>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
