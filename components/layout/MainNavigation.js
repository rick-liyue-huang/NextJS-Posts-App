import React from 'react';
import Link from "next/link";
import LogoComponent from "./Logo";
import styles from './main-navigation.module.css'

const MainNavigationComponent = () => {
	return (
		<header className={styles.header}>
			<Link href={'/'}>
				<a><LogoComponent /></a>
			</Link>
			<nav>
				<ul>
					<li><Link href={'/posts'}>POST</Link></li>
					<li><Link href={'/contact'}>CONTACT</Link></li>
				</ul>
			</nav>
		</header>

	);
};

export default MainNavigationComponent;
