import { useMediaQuery } from 'react-responsive';
import Logo from '../components/Logo';
import NavBar from '../components/NavBar';
import HomeImg from '../components/HomeImg';
import HomeCard from '../components/HomeTxt';
import HomeCardsTab from '../components/HomeCardsTab';

function HomePage() {
  const afterMediumBreakpoint = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-purple-300 via-[#9f9ba9] via- red-300 via-[#b9a5ae] via-[#a4a9bc] via-[#9c929b] via-purple-300 via-[#aea2ac] via-[#a0969f] to-red-300">
      <NavBar />
      {afterMediumBreakpoint && <Logo />}
      <HomeCardsTab/>
    </div>
  );
}

export default HomePage;
