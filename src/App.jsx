import Header from './Header';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div class="flex justify-center">
        <div class="max-w-5xl w-full">
          <Header></Header>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
