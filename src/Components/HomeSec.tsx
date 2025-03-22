import frontendImage from "../assets/imgs/frontendImage.jpg";


const HomeSec = () => {
  return (
    <div
      id="home"
      className="h-screen flex flex-col space-y-8 items-center justify-center relative"
    >
      <div
        className="absolute h-screen z-[-1] inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: `url(${frontendImage})`,
        }}
      ></div>

      <h3 className="text-[#623159] brightness-[2] tracking-tighter text-3xl font-bold ">
        50 Project in 50 Days
      </h3>
      <p className="text-[#fff] brightness-200 font-semibold text-center tracking-wide text-4xl">
        50 unique mini-projects to sharpen your HTML, CSS, React, Redux, React
        Router Dom and more
      </p>
      <a
      target="_blank"
      rel="noopener"
        className="space-x-2 transform transition-all  hover:translate-y-1 bg-[#603090] py-2.5 px-4 brightness-200"
        href="https://github.com/seadadevo/50-project-in-react"
      >
        <i className="fa-brands fa-github text-[20px]"></i>
        <span className="text-[15px] text-[#fff] font-semibold tracking-wide">
          The Repo
        </span>
      </a>
    </div>
  );
};

export default HomeSec;
