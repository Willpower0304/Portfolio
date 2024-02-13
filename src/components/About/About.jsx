import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>Sobre Mi</h2>
            <div className={styles.content}>
                <img
                src={getImageUrl("about/aboutImage.png")}
                alt="sobre mi seccion"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                        src={getImageUrl("about/fronendIcon.png")} 
                        alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Desarrollador Front-End</h3>
                            <p>
                                soy un Desarrollador front-end novato, que aun sigue
                                aprendiendo para mejorar.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                        src={getImageUrl("about/backendIcon.png")} 
                        alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Desarrollador Back-End</h3>
                            <p>
                                Entusiasta en construir soluciones sólidas.
                                Utilizo tecnologías como SQL y PHP. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img
                        src={getImageUrl("about/uiIcon.png")} 
                        alt="UI Icon " />
                        <div className={styles.aboutItemText}>
                            <h3>Diseñador de UI´s</h3>
                            <p>
                                Mi enfoque se centra en la creación de experiencias simples 
                                y funcionales para cualquier dispositivo.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
