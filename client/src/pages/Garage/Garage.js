import React, {useContext} from 'react';
import {Context} from "../../index";
import styles from "./Garage.module.scss";

const Garage = () => {
   const {user} = useContext(Context);
   return (
       <div className={styles.garageContent}>
          <div className={styles.contentTitle}>My cars</div>
       </div>
   );
};

export default Garage;