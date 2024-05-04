// Recycle.js
import React from "react";
import RecycleNavbar from "../../component/recycle/RecycleNavbar";
import RecycleHeader from "../../component/recycle/RecycleHeader"
import styles from './Menu.module.css'; 

function Recycle() {
  return (
    <>
      <div>
        <RecycleHeader />
        <div className={styles.pd}>

          <h1 >플라스틱 쓰레기</h1>
         

          <RecycleNavbar />
        </div>
      </div>
    </>
  );
}

export default Recycle;