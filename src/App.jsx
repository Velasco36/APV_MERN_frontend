import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';

import AdministrarPaciente from './paginas/AdministrarPaciente';
import Login from './paginas/login'; 
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import Nuevopassword from './paginas/Nuevopassword';

import { AuthProvider } from './context/AuthProvider';
import {PacienteProvider} from './context/PacienteProvider';
import EditarPerfil from './paginas/EditarPerfil';
import CambiarPassword from './paginas/CambiarPassword';




function App (){

    //console.log(import.meta.env.VITE_BACKEND_URL)
    //console.log(import.meta.env.IMAGENES_URL)
  return (
    <BrowserRouter>
      <AuthProvider>
        <PacienteProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
                    <Route index element={<Login />} />
                    <Route path="registrar" element={<Registrar />} />
                    <Route path="OlvidePassword" element={<OlvidePassword />} />
                    <Route path="OlvidePassword/:token" element={<Nuevopassword />} />
                    <Route path="confirmar/:id" element={<ConfirmarCuenta />} />

            </Route>

            <Route path="/Admin" element= {<RutaProtegida />}>
              <Route index element={<AdministrarPaciente />} />
              <Route path="perfil" element={<EditarPerfil />} />
              <Route path="cambiar-password" element={<CambiarPassword />} />

              </Route>
          </Routes>
        </PacienteProvider>
      </AuthProvider>  
    </BrowserRouter>
  )

}

export default App