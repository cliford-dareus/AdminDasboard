import React, { useState } from 'react';
import Header from '../../components/hearder/Header';
import { useGetTransactionsQuery } from '../../features/api';

const Transaction = () => {
    const [ page, setPage ] = useState(0);
    const [ pageSize, setPageSize ] = useState(20);
    const [ sort, setSort ] = useState({});
    const [ search, setSearch ] = useState("");

    const { data, isLoading } = useGetTransactionsQuery();
    console.log(data)

    

  return (
    <div>
        <Header 
            title='TRANSACTIONS'
            subTitle='Entire list of transactions'
        />
        Transaction
    </div>
  )
}

export default Transaction;