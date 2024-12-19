
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";


const PrivateRoutes = ({children}) => {
   const {user,loading} = useAuth();
   const location = useLocation();
   if(loading){
    return <Spinner/>
   }
   if (user) {
    return children
}
return <Navigate state={location.pathname} to={`/login`} replace />
};

export default PrivateRoutes;