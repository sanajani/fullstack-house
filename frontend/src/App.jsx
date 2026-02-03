import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Navbar/>
        <div className="min-h-screen">
          {<Outlet />}
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App;
