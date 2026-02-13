import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

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
      <Toaster />
    </div>
  )
}

export default App;
