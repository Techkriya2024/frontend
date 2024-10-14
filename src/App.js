import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; 
import routes from "./routes";

function App() {
  
  const token = useSelector((state) => state.Auth);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route, index) => {
          if (route.private && !token) {
            return <Route key={index} path={route.path} element={<Navigate to="/login" />} />;
          }

          return <Route key={index} path={route.path} element={route.element} />;
        })}

        {token ? (
          <Route path="/" element={<Navigate to="/home" />} />
        ) : (
          <Route path="/" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Suspense>
  );
}

export default App;
