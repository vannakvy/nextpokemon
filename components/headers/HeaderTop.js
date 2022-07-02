import React from 'react'
import styles from '../../styles/headers/HeaderTop.module.css'
const HeaderTop = () => {
  return (
    <div className={styles.header_top}>
        <div className="header-top__logo">
            <img width={80} height={50} src="/logo.png" alt="logo" />
        </div>
        <div className={styles.header_top_nav}>
            <div className={styles.header_top_nav_item}>
            <i class='bx bxs-user-account' ></i>
                <a href='#'>ចុះឈ្មោះ</a>
            </div>
            <div className={styles.header_top_nav_item}>
            <i class='bx bxs-lock-alt'></i>
                <a href='#'>ចូលបញ្ចី</a>
            </div>
        </div>
    </div>
  )
}

export default HeaderTop