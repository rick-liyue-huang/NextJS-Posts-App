import React from 'react';
import Image from "next/image";
import styles from './hero.module.css';

const HeroComponent = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.image}>
				<Image
					width={300} height={300} src={'/images/site/rick.jpeg'} alt={'im Rick'}
				/>
			</div>
			<h1>Hi, this is Rick</h1>
			<p>I like post something about Javascript Development, including frontend frameworks</p>
		</section>
	);
};

export default HeroComponent;
