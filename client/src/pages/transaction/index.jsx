import React, { useState } from 'react';
import { IoExitOutline, IoPauseSharp, IoSearchOutline } from 'react-icons/io5';
import Header from '../../components/hearder/Header';
import { useGetTransactionsQuery } from '../../features/api';
import styles from './transaction.module.css';

const Transaction = () => {
    const [ page, setPage ] = useState(0);
    const [ pageSize, setPageSize ] = useState(20);
    const [ sort, setSort ] = useState({});
    const [ search, setSearch ] = useState("");

    const [searchInput, setSearchInput] = useState("");

    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });
    console.log(data)

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
    <div className=''>
        <Header 
            title='TRANSACTIONS'
            subTitle='Entire list of transactions'
        />
        <div className={styles.tabletop}>
            <div className={styles.left}>
                <span>
                    <IoPauseSharp  />  
                    <p>COLUMNS</p>
                </span>
                <span>
                    <IoPauseSharp />   
                    <p>DENSITY</p>
                </span>
                <span>
                    <IoExitOutline />   
                    <p>EXPORT</p>
                </span>
            </div>

            <div className={styles.search}>
                <input 
                    type="text" 
                    placeholder='Search...'
                />
                <IoSearchOutline />
            </div>
        </div>

        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
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

                <tbody>

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Transaction;