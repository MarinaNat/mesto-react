import React from "react";
import { Route, Navigate } from "react-router-dom";

// этот компонент принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
const ProtectedRoute = ({ isLoggedIn, children }) => {
  console.log('is', isLoggedIn)
  return (isLoggedIn ? children : <Navigate to="./sign-up" />)
}
  


export default ProtectedRoute; 