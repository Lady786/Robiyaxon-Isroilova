import { BrowserRouter , Routes, Route } from "react-router-dom";
import React, { Suspense } from 'react'
import Layout from "./pages/Layout";
const Client = React.lazy(()=> import ("./pages/Client"))
const Admin = React.lazy(()=> import ("./pages/Admin"))
const Login = React.lazy(()=> import ("./pages/Login"))

const App = () => {
  return (
   
    <BrowserRouter>
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
      <Route path="/" element ={<Layout/>}>
      <Route index element={<Client/>}/>
      <Route path="/admin" element={<Admin/>}/>
      </Route>
      <Route path="/login" element={<Login/>} />
    </Routes>
    </Suspense>
    
    </BrowserRouter>
  )
}

export default App