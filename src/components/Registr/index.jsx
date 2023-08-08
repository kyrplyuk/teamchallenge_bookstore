import React from "react";
import styles from "../Registr/Registr.module.scss"


const RegistrForm = () =>{
    return (
        <div className={styles.registrFormBody}>
        <form className={styles.registrFormWrap}>
            <div className={styles.registrFormHeader}>
                <h1 className={styles.registrFormHead}>Register</h1>
            </div>
            <div className={styles.registrFormContent}>
                <div  className={styles.registrFormWrapper}>
                <label htmlFor="firstName" className={styles.registrFormText}>First name</label>
                <input className={styles.registrFormFirstName} type="text" id="firstName" name="firstName" required />
                </div>
                <div  className={styles.registrFormWrapper}>
                <label className={styles.registrFormText} htmlFor="lastName">Last name</label>
                <input className={styles.registrFormFirstName} type="text" id="lastName" name="lastName" required />
                </div>
                <div  className={styles.registrFormWrapper}>
                <label className={styles.registrFormText} htmlFor="email">Email</label>
                <input className={styles.registrFormFirstName} type="email" id="email" name="email" required placeholder="user.name@gmail.com"/>
                </div>
                <div  className={styles.registrFormWrapper}>
                <label className={styles.registrFormText} htmlFor="phone">Phone</label>
                <input className={styles.registrFormFirstName} type="tel" id="phone" name="phone" required placeholder="+380 ХХ ХХХ ХХ ХХ"/>
                </div>
                <div  className={styles.registrFormWrapper}>
                <label className={styles.registrFormText} htmlFor="password">Password</label>
                <input className={styles.registrFormFirstName} type="password" id="password" name="password" required placeholder="********"/>
                </div>
                <button className={styles.registrFormButt} type="submit">Register</button>
                <p className={styles.registrFormText}>Are you already registered? <a href="№">Log in</a> </p>
                </div>
                <img src="/assets/img/Decor.svg" alt="decor" className={styles.registrFormImg}/>
            </form>
        </div>
    );
};



export default RegistrForm