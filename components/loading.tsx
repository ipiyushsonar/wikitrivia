import React from "react";
import { Oval } from "react-loader-spinner";
import styles from "../styles/loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <h1>Loading</h1>
      <Oval color="#006699" height={60} width={60} />
    </div>
  );
}
