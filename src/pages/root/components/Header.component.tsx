import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { FrontUrls } from 'Src/constants/FrontUrls'
import 'Pages/root/styles/Header.scss'

const navigationList = (listClassName = '', elementClassName = '') => (
	<ul className={listClassName}>
		<li className={elementClassName}>
			<NavLink to={FrontUrls.history} activeClassName="active-link">
				History
			</NavLink>
		</li>
		<li className={elementClassName}>
			<NavLink to={FrontUrls.launches} activeClassName="active-link">
				Launches
			</NavLink>
		</li>
	</ul>
)

export const Header = (): JSX.Element => (
	<nav className="header">
		<div className="hamburger-menu">
			<input id="menu__toggle" type="checkbox" />
			<label className="menu__btn" htmlFor="menu__toggle">
				<span />
			</label>
			{navigationList('menu__box', 'menu__item')}
		</div>
		<div className="header__logo">
			<NavLink to={FrontUrls.home} activeClassName="active-link">
				SpaceX
			</NavLink>
		</div>
		{navigationList()}
	</nav>
)
