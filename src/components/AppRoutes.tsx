import React from 'react'
import { RiRouterFill } from 'react-icons/ri';
import {
   Routes,
   Route,
   Navigate,
} from "react-router-dom";
import { routes } from '../route/routes';

const AppRoutes = () => {
   return (
      <div>
         <Routes>
            {routes.map(route =>
               <Route key={route.path} path={route.path} element={<route.element />} />
            )}
            <Route path='*' element={<Navigate to={'/'} />} />
         </Routes>
      </div>
   )
}

export default AppRoutes