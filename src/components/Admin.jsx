import React,{useState} from 'react';
import Main from './main/Main';
import styles from "./Admin.module.css";
import Sidebar from './sidebar/Sidebar';
import List from "./sidestrip/List"


function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
        <div className={styles.body}>
          <div className={styles.sidebar}>
           <Sidebar isOpen={isOpen} setIsopen={setIsOpen}/>
          </div>
          <div className={styles.main}>
           <Main isOpen={isOpen} setIsopen={setIsOpen}/>
          </div>
          <div className={styles.crossbar}>
           <List/>
          </div>

        </div>
    </div>
  )
}

export default Admin;