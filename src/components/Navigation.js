import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../contextsStuff/CartContext';
import { useContext } from 'react';


const Navigation = () => {
	const { cart } = useContext(CartContext);
		return (
		<div className="navigation">
			<NavLink to="/">PRODUCTS</NavLink>
			<NavLink to="/cart">
				CART <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
