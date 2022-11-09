import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Route/router";

function App() {
  return (
    <div className="lg:w-11/12 mx-3 lg:mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
