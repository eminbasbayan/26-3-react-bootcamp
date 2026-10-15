import { Outlet } from "react-router-dom"
import Header from "../components/Layout/Header"

const MainLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <footer>Footer</footer>
    </div>
  )
}

export default MainLayout