import { useMediaQuery } from 'react-responsive';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';

function HomePage() {
  const afterMediumBreakpoint = useMediaQuery({ query: "(min-width: 768px)" });


    return (
      <div className="w-full h-screen bg-gradient-to-r from-[#9f9ba9] via-[#b9a5ae] via-[#a4a9bc] via-[#9c929b] via-[#aea2ac] to-[#a0969f]">
        <div>
          <NavBar/>
          {afterMediumBreakpoint && <Logo />}
        </div>
      </div>
    );

}

export default HomePage;
