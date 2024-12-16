import { Outlet } from "react-router-dom";
import "./App.css"

const App = () => {
  return (
    <div className="max-w-screen-xl 2xl:max-w-screen-2xl mx-auto">
      <Outlet/>
    </div>
  );
};

export default App;