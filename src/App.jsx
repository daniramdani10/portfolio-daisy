import { GithubLogo } from "@phosphor-icons/react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <Profile />
      </div>
    </>
  );
}

export default App;
