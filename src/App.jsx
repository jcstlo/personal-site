import Header from './Header';
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { DarkModeContextProvider } from "./DarkModeContext";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);
}

function App() {
  return (
    <>
      <DarkModeContextProvider>
        <div className="flex justify-center">
          <div className="max-w-5xl w-full">
            <ScrollToTop />
            <Header></Header>
            <Outlet />
          </div>
        </div>
      </DarkModeContextProvider>
    </>
  )
}

export default App
