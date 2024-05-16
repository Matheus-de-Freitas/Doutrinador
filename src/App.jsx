import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Doutrinador from "./pages/Doutrinador.jsx"
import Personagens from "./pages/Personagens.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Doutrinador />
  },

  {
    path: "/personagens",
    element: <Personagens />
  },
])

export default function App() {
  return(
    <RouterProvider router={router} />
  )
}