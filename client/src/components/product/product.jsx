import React from "react";
import { useState } from "react";
import styles from './productCard.module.css';

export const Product = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    stat,
  }) => {
    const [ isCollapse, setCollapse ] = useState(false);
  
    return (
      <div
        className={styles.card}
      >
        <div>
          <p style={{
            textTransform: 'uppercase',
            fontSize: '.6rem'
          }}>
            {category}
          </p>
          <p style={{
            fontSize: '.9rem'
          }}>
            {name}
          </p>
          <p style={{
            textTransform: 'uppercase',
            fontSize: '.7rem',
            lineHeight: '1'
          }}>
            ${Number(price).toFixed(2)}
          </p>
          {/* <Rating value={rating} readOnly /> */}
  
          <p style={{
            fontSize: '.7rem',
            lineHeight: '1.5',
            marginBottom: '1rem'
          }}>{description}</p>
        </div>
        <div>
          <button
            // variant="primary"
            // size="small"
            className={styles.btn}
            onClick={() => setCollapse(!isCollapse)}
          >
            See More
          </button>
        </div>
        <div 
          className={styles.collapse}
          style={{
            height: isCollapse? '100%': '0'
          }}
        >
          <div className={styles.collapseContent}>
            <p>id: {_id}</p>
            <p>Supply Left: {supply}</p>
            <p>
              Yearly Sales This Year: {stat.yearlySalesTotal}
            </p>
            <p>
              Yearly Units Sold This Year: {stat.yearlyTotalSoldUnits}
            </p>
          </div>
        </div>
      </div>
    );
  };