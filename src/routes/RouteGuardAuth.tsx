import React from 'react';
import { useUser } from '../contexts/UserContext';
import { Navigate, useLocation } from "react-router-dom";

type Props = {
    component: React.ReactNode;
    redirect: string,
  }

export const RouteGuardAuth: React.FC<Props> = (props) => {
	const authUser = useUser().user;
  
	let allowRoute = false;
	allowRoute = authUser != null;
  
	if (!allowRoute) {
		return <Navigate to={props.redirect} state={{from:useLocation()}} replace={false} />;
	}
  
	return <>{props.component}</>;
  
};
