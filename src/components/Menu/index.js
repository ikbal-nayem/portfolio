import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import './index.scss';

const Menu = () => {
	return (
		<ul className="menu">
			<Menu.Item name={"user"} link="/about">
				About
			</Menu.Item>
			<Menu.Item name={"address-card"} link="/resume">
				Resume
			</Menu.Item>
			<Menu.Item name={"briefcase"} link="/works">
				Works
			</Menu.Item>
			<Menu.Item name={"at"} link="/contact">
				Contact
			</Menu.Item>
		</ul>
	);
};

Menu.Item = ({ link = "", children, name }) => (
	<li>
		<NavHashLink smooth to={link} activeClassName={"active"} exact>
			<span class={`fas fa-${name}`} />
			{children}
		</NavHashLink>
	</li>
);

export default Menu;
