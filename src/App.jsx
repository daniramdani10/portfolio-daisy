import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Resume from "./components/Resume/";
import Work from "./components/Work/";
import Contact from "./components/Contact/";

function App() {
  return (
    <div className="font-poppins">
      <div className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-7 gap-5 flex flex-col">
        <Profile />
        <About />
        <Resume />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
