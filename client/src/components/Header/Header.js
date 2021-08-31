import React, {useContext} from 'react';
import {Context} from "../../index";
import styles from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
   const {user} = useContext(Context);
   return (
       <div className={styles.header}>
          <div className={styles.headerContainer}>
             <NavLink to="/garage" className={styles.logo}>GARAGE</NavLink>
             {user.isAuth
                 ?
                 <div className={styles.headerProfile}>
                    <NavLink to="/profile">Профиль</NavLink>
                    <NavLink onClick={() =>user.setIsAuth(false)} to="/profile">Выйти</NavLink>
                 </div>
                 :
                 <div className={styles.menu}>
                    <NavLink onClick={() =>user.setIsAuth(true)} to="/login">Войти</NavLink>
                    <NavLink onClick={() =>user.setIsAuth(true)} to="/login">Зарегистрироваться</NavLink>
                 </div>
             }
          </div>
       </div>
   );
});

export default Header;