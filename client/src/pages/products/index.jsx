import React from 'react';
import Header from '../../components/hearder/Header';
import styles from './product.module.css';
import { useGetProductsQuery } from '../../features/api';
import { Product } from '../../components/product/product';

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div>
      <Header title='PRODUCTS' subTitle="See your list of products." />
      <div className={styles.product}>
      { data || !isLoading? (
        <div
          className={styles.container}
        >
          {data?.map(
            ({
              _id,
              name,
              description,
              price,
              rating,
              category,
              supply,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                rating={rating}
                category={category}
                supply={supply}
                stat={stat}
              />
            )
          )}
        </div>
      ) : <> LOADING ...</>}
      </div>
    </div>
  )
};

export default Products;