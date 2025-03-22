import { useState } from "react";
import "../moviestyle.css";
import { Link } from "react-router-dom";

interface IProps {
  onSearch: (query: string) => void;
}
const Header = ({ onSearch }: IProps) => {
  const [searchTerm, setSearchTerm] = useState("");
    
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  
  };
  return (
    <header
      className="container mx-auto w-[100%] min-w-full
        bg-[#373b69] p-[20px] flex items-center justify-between"
    >
      <div className="text-[#22254b] text-2xl font-semibold">
        <a href="/" className="block">
          <span className="text-[30px] font-bold text-[#FFD700]">B</span>est
          <span className="text-[#FFD700] font-bold text-[30px]">M</span>ovies
        </a>
      </div>
        <Link to="/">Ahmed</Link>
      <input
        className="rounded-[50px] bg-transparent border 
           border-[#22254b] border-2 outline-none 
         p-[10px] max-w-full w-[150px] text-[#fff] md:w-[270px]
         placeholder-[#7378c5] focus:bg-[#22254b]
          focus:placeholder-[#373b69]
         transition-all"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </header>
  );
};

export default Header;
