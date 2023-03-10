import React from 'react';
import { useGetAdminsQuery} from '../../features/api';
import Header from '../../components/hearder/header';
import styles from './Admin.module.css';

const Admin = () => {
    const { data } = useGetAdminsQuery();
    console.log(data)

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
    <div className={styles.admin}>
        <Header title='ADMINS' subTitle='Managing admins and list of admins'/>
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
                {data?.map(field => {
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
    </div>
  )
}

export default Admin;