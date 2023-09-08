import React from 'react';
import { useUser } from '../contexts/UserContext';
import { Navigate, useLocation } from "react-router-dom";

type Props = {
    component: React.ReactNode,
	redirect: string;
  }

export const RouteGuardAuth: React.FC<Props> = (props) => {
	const {loginStatus} = useUser();
  
	switch (loginStatus) {
	case 'INIT':
		return <></>;
	case 'LOGIN':
		return <>{props.component}</>;
	case 'LOGOUT':
		return <Navigate to={props.redirect} state={{from:useLocation()}} replace={false} />;
	}
};
