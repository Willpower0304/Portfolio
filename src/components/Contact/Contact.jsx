import React from 'react';

import styles from "./Contact.module.css";
import { getImageUrl} from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contacto</h2>
                <p>No dudes en comunicarte conmigo!</p>
            </div>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                        <a href="mailto:espinozaw657@gmail.com">espinozaw657@gmail.com</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/linkedinIcon.png")} alt="linked Icon" />
                        <a href="https://www.linkedin.com/in/william-espinoza-7687722ab/">linkedin.com/WilliamEspinoza</a>
                    </li>
                    <li className={styles.link}>
                        <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                        <a href="https://github.com/Willpower0304">github.com/WilliamEspinoza</a>
                    </li>
                </ul>
        </footer>
    )
}
