import { Outlet,Navigate } from "react-router-dom"
import header from "../components/header";
import Footer from "../components/footer";
import useAuth from "../hooks/useAuth";
import Header from "../components/header";


const RutaProtegida = () => {

    const {auth, cargando} =useAuth()

    if(cargando) return 'cargando...'
  return (

    <>
    
    

        <Header />
            {auth?._id ?(
                <main className="container mx-auto mt-10">
                    <Outlet /> 
                 </main>
                 ): <Navigate to="/" /> }
        <Footer />

    
    
    </>
    
  )
}

export default RutaProtegida;