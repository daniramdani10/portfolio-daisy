import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Proficiency from "./components/Proficiency";

function App() {
  return (
    <div className="font-poppins">
      <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <Profile />
        <About />
        <Proficiency />
      </div>
    </div>
  );
}

export default App;
