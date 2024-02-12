import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

export const Hero = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola soy <span className={styles.Name}>William!</span></h1>
            <p className={styles.description}>
                Soy un ingeniero en Desarrollo de Software, 
                listo para aprender cualquier lenguaje o tecnologia. contactame si quieres saber mas sobre mi.
            </p>
            <a href="mailto:espinozaw657@gmail.com" className={styles.contactBtn}>
                Contactame
            </a>
        </div>
        <img
            src={getImageUrl("hero/heroImage.png")}
            alt="Hero imagen sobre mi"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};