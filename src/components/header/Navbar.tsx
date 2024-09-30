import { useState } from "react";
import BodyTexts from "../elements/BodyTexts";

export default function Navbar() {
  const [selectedItem, setSelectedItem] = useState<number | null>(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navBarItems = [
    "Company",
    "Services",
    "FinTechSolutions",
    "Products",
    "Portfolio",
    "Contact us",
  ];

  const handleClick = (index: number) => {
    setSelectedItem(index);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex py-8 px-6 sm:px-20 lg:px-32 bg-costume-gray items-center gap-[23%] ">
      <div className="max-w-[1440px]">
        <BodyTexts text="LOGO" textSize="text-3xl" />

        <div className="lg:hidden absolute top-10 right-7">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full h-screen bg-costume-gray flex flex-col items-start p-4 gap-10 mt-5 lg:hidden">
          {navBarItems.map((item, index) => (
            <div
              key={item}
              onClick={() => handleClick(index)}
              className="cursor-pointer w-full text-left p-2 border-b border-gray-200"
            >
              <BodyTexts text={item} />
            </div>
          ))}
        </div>
      )}

      <div className="hidden lg:flex gap-8">
        {navBarItems.map((item, index) => (
          <div
            key={item}
            onClick={() => handleClick(index)}
            className={`cursor-pointer ${
              selectedItem === index ? "lg:border-b-4 border-green-600" : ""
            } text-nowrap`}
          >
            <BodyTexts text={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
