import React from 'react';
import styles from './Auth.module.scss';
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const Auth = () => {

   const location = useLocation();
   const isLogin = location.pathname === LOGIN_ROUTE;

   return (
       <div>
          <form className={styles.authForm} action="">
             <h2 className={styles.title}>{isLogin ? "Вход" : "Регистрация"}</h2>
             <input type="text" placeholder="Имя"/>
             <input type="text" placeholder="Email"/>
             <input type="text" placeholder="Пароль"/>
             <div className={styles.formBottom}>
                {isLogin
                    ? <div className={styles.registerLink}>
                       <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                    </div>
                    : <div className={styles.registerLink}>
                       <NavLink to={LOGIN_ROUTE}>Вход</NavLink>
                    </div>
                }
                <button className={styles.formButton}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
             </div>
          </form>
       </div>
   );
};

export default Auth;