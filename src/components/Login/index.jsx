import React from "react";
import styles from "./Login.module.scss"



const LoginForm = () => {
    return(
        <div className={styles.formBody}>
            <form className={styles.formBodyForm}>
                <div className={styles.formHead}>
                    <h1 className={styles.formHeadText}>Log in</h1>
                </div>
                <div className={styles.formWrapp}>
                <div  className={styles.formContent}>
                    <label className={styles.formText} htmlFor="email">Email</label>
                    <input className={styles.formName} type="email" id="email" name="email" required placeholder="user.name@gmail.com"/>
                </div>
                <div  className={styles.formContent}>
                    <label className={styles.formText} htmlFor="password">Password</label>
                    <input className={`${styles.formName} ${styles.formPass}`} type="password" id="password" name="password" required placeholder="********"/>
                    <img className={styles.formImage} src="/assets/img/EyeSlash.svg" alt="eae"/>
                </div>
                <button className={styles.formButt} type="submit">Log in</button>
                <p className={styles.formFutText}>Don`t have an account?<a href="№"> Register</a> </p>
                </div>
            </form>
        </div>
    )
}


export default LoginForm