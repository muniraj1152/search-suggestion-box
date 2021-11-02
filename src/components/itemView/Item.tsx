import React from 'react';

import styles from './Item.module.scss';

/**
 * Here component renders product details like product image, title and price
 * @param param
 */
export default function Item({ item }: any) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 p-1">
      <img src={item.productimage} className={styles.productImage}></img>
      <h4 className={`${styles.productTitle} mt-2`}>
        {item.productname.toUpperCase()}
      </h4>
      <div>
        <span className={styles.sellingPrice}>Rs {item.sellingprice}</span>
        <span className={styles.mrpPrice}>Rs. {item.mrpprice}</span>
      </div>
    </div>
  );
}
