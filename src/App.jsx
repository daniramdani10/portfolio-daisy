import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Resume from "./components/Resume";
import Proficiency from "./components/Proficiency";

function App() {
  return (
    <div className="font-poppins">
      <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto bg-base-200">
        <Profile />
        <About />
        <Proficiency />
      </div>
    </div>
  );
}

export default App;
