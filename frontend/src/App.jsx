import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';
import { useEffect } from "react";

const App = () => {
  const {pathname} = useLocation();

  const CallToUp = () => {
    useEffect(() => {
      window.scrollTo(0,0)
    },[pathname])
    return null
  }

  return (
    <div>
      <CallToUp />
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
