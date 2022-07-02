import React from "react";
import Link from "next/link";
import styles from "../../styles/headers/HeaderBottom.module.css";
const HeaderBottom = () => {
  return (
    <div className={styles.header_bottom}>
      <ul>
        <li>
          <Link href="/" className={styles.link}>
            ទមព័រដើម
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            ផលិតផល
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            ទំនាក់ទំនង
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            កម្មងមុន
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            របៀបកម្មង់ទិញ់
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            បញ្ចាក់ការបង់លុយ
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.link}>
            អំពីរពួកយើង
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBottom;
