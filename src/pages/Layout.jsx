import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"
import { useEffect } from "react";


const Layout = () => {
  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, )
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout