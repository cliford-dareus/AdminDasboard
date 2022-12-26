import React from 'react';
import Header from '../../components/hearder/Header';
import { useGetCustomersQuery } from '../../features/api';
import styles from './Customer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../features/pagination';
import { IoAdd, IoRemove } from 'react-icons/io5';

const Customer = () => {
    const { data, isLoading } = useGetCustomersQuery();

    const page = useSelector(state => state.paginate.value)
    const dispatch = useDispatch()

    const columns = [
        {
          field: "_id",
          headerName: "ID",
          flex: 1,
        },
        {
          field: "name",
          headerName: "Name",
          flex: 0.5,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "phoneNumber",
          headerName: "Phone Number",
          flex: 0.5,
          renderCell: (params) => {
            return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
          },
        },
        {
          field: "country",
          headerName: "Country",
          flex: 0.4,
        },
        {
          field: "occupation",
          headerName: "Occupation",
          flex: 1,
        },
        {
          field: "role",
          headerName: "Role",
          flex: 0.5,
        },
      ];

  return (
    <div className=''>
        <Header 
            title="CUSTOMERS" 
            subTitle="List of Customers"
        />

        <div className={styles.container}>
            <table className={styles.table}>
                <thead
                    style={{ 
                        textAlign: 'left',
                        border: '1px solid whitesmoke'
                    }}
                >
                    <tr
                        className={styles.border}
                    >
                        {columns.map(field => {
                            return(
                                <th 
                                    key={field.headerName}
                                    className={styles.border}
                                >
                                    {field.headerName}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody
                    className={styles.border}
                >
                    {data?.slice(page.start, page.end).map(field => {
                    return (
                        <tr className={styles.border}>
                            <td className={styles.border}>{field._id}</td>
                            <td className={styles.border}>{field.name}</td>
                            <td className={styles.border}>{field.email}</td>  
                            <td className={styles.border}>{field.phoneNumber}</td>  
                            <td className={styles.border}>{field.country}</td>  
                            <td className={styles.border}>{field.occupation}</td>  
                            <td className={styles.border}>{field.role}</td>  
                        </tr>
                    )
                   })}
                </tbody>
            </table>
        </div>

        <div className={styles.pagination}>
            <button
                onClick={() => dispatch(decrement())}
            >
                <IoRemove />
            </button>
            <div>{page.page}</div>
            <button
                onClick={() => dispatch(increment())}
            >
                <IoAdd />
            </button>
        </div>
    </div>
  )
}

export default Customer;