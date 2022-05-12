import React from 'react';
import MainNavigation from "./MainNavigation";
import LogoComponent from "./Logo";


const LayoutComponent = ({children}) => {
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
		</>
	);
};

export default LayoutComponent;
