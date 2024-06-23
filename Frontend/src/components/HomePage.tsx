import Logo from "./Logo"
import NavBar from "./NavBar"

function HomePage() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-200 via-violet-300 via-rose-200 to-indigo-200">
        <div>
        <NavBar></NavBar>
        <Logo></Logo>
        </div>
    </div>
  )
}

export default HomePage
