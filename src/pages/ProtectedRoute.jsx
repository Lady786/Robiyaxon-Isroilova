// import { Component } from "react"

import UseAuth from "./UseAuth"


function ProtectedRoute  ({ Component }) {
 
    UseAuth();
    return <Component />;

}

export default ProtectedRoute