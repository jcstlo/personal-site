import Header from './Header';
import { Outlet } from "react-router-dom";
import { DarkModeContextProvider } from "./DarkModeContext";

function App() {
  return (
    <>
      <DarkModeContextProvider>
        <div class="flex justify-center">
          <div class="max-w-5xl w-full">
            <Header></Header>
            <Outlet />
          </div>
        </div>
      </DarkModeContextProvider>
    </>
  )
}

export default App
