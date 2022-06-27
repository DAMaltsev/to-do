import React from "react";
import styles from "./styles.module.css";
import classNames from "classnames";
import AddItemForm from "../components/AddItemForm/AddItemForm";

const MainPage = () => {
    return(
        <div className={styles.root}>
            <div className={styles.col}>
                <h2 className={styles.heading}>Add new one</h2>
                <AddItemForm/>
            </div>
            <div className={classNames(styles.col, styles.gray)}>
            <h2 className={styles.heading}>My today todo</h2>
            </div>
            <div className={styles.col}>
            <h2 className={styles.heading}>My tomorrow todo</h2>
            </div>
        </div>
    )
}

export default MainPage;