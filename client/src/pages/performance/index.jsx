import React from 'react';
import Header from '../../components/hearder/header';
import styles from '../admin/Admin.module.css';
import { useGetUserPerformanceQuery } from '../../features/api';
import { useSelector } from 'react-redux';

const Performance = () => {
    const userId = useSelector((state) => state.global.userId);
    const { data, isLoading } = useGetUserPerformanceQuery(userId);

    const columns = [
        {
          field: "_id",
          headerName: "ID",
          flex: 1,
        },
        {
          field: "userId",
          headerName: "User ID",
          flex: 1,
        },
        {
          field: "createdAt",
          headerName: "CreatedAt",
          flex: 1,
        },
        {
          field: "products",
          headerName: "# of Products",
          flex: 0.5,
          sortable: false,
          renderCell: (params) => params.value.length,
        },
        {
          field: "cost",
          headerName: "Cost",
          flex: 1,
          renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
        },
      ];

  return (
    <div>
        <Header title='PERFORMANCE' subTitle='Track your Affiliate Sales Performance Here' />

        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr className={styles.border}>
                        {
                            columns.map((field)  => {
                                return(
                                    <th 
                                        key={field.headerName}
                                        className={styles.border}
                                    >
                                        {field.headerName}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                        
                <tbody>
                    {data?.map((field) => {
                        return (
                            <tr className={styles.border}>
                                <td className={styles.border}>{field._id}</td>
                                <td className={styles.border}>{field.userId}</td>
                                <td className={styles.border}>{field.createdAt}</td>  
                                <td className={styles.border}>{field.products}</td>  
                                <td className={styles.border}>{field.cost}</td>   
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Performance;