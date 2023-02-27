import React from "react";
import { useRouteError } from "react-router-dom";
import Error404 from "../../asset/404";
import './ErrorFallback.css';

const ErrorFallback = () => {
    const error = useRouteError();
   return (
       <div className="error-fallback">
            <Error404 />
            <div 
               className="alert alert-primary" 
               style={{
                        background: 'rgb(144, 206, 221)',
                        fontWeight: 600,
                      }}
               >{error?.message}</div>
       </div>
   )
}
export default ErrorFallback;