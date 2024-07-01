
interface HamburgerProps {
  onClick: () => void;
  isOpen: boolean;
}

function Hamburger({ onClick, isOpen }: HamburgerProps) {
  return (
    <div className={`pl-5 pt-5 z-5 ml-5 ${isOpen ? "bg-violet-200" : ""}`}>
      <button className="relative group" onClick={onClick}>
        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-blue-100 ring-0 ring-blue-200 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
            <div className={`bg-blue-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10' : ''}`}></div>
            <div className={`bg-blue-500 h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? 'translate-x-10 delay-75' : ''}`}></div>
            <div className={`bg-blue-500 h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? 'translate-x-10 delay-150' : ''}`}></div>

            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${isOpen ? '-translate-x-0' : '-translate-x-10'} flex w-0 ${isOpen ? 'w-12' : ''}`}>
              <div className={`absolute bg-blue-500 h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${isOpen ? 'rotate-45' : ''}`}></div>
              <div className={`absolute bg-blue-500 h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${isOpen ? '-rotate-45' : ''}`}></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default Hamburger;
