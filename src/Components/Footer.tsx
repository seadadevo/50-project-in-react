const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-white py-6 w-full mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ahmed Magdy. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-[#9c4ee9] transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#9c4ee9] transition">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
