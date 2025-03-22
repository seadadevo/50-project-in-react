interface IProps {}

const About = ({}: IProps) => {
  return (
    <section
      id="about"
      className="flex py-[60px] space-y-5 flex-col items-center bg-[#333333] mb-[-40px]"
    >
      
      <h3 className="text-white text-center font-semibold text-5xl">
        About The Course
      </h3>
      <p className="text-white text-center font-normal text-[25px] max-w-[80%]">
        This is a pure, practical and fun project based course. Every project is
        different and while we use do use some repeated practices, they are each
        meant to teach you something new. It is recommended that you do one
        project per day, however you can do them as you please. By the end, you
        will have a stronger foundation in JS as well as HTML/CSS/Js and should
        be able to move on and build your own projects..
      </p>
      <a
        target="_blank"
        rel="noopener"
        className="mt-[40px] space-x-2 transform transition-all  bg-transparent
         border-1 border-[#fff] md:p-8 brightness-200 hover:scale-105 hover:bg-[#242424]
          p-5 "
        href="https://github.com/seadadevo/50-project-in-react"
      >
        <i className="fa-brands fa-github text-[27px]"></i>
        <span className="text-[22px] text-[#fff] font-semibold tracking-wide">
          GitHub Repo For All Projects
        </span>
      </a>


     
    </section>
  );
};

export default About;
