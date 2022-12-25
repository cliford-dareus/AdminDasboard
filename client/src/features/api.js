import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
    }),
    tagTypes: [
        "user",
        "products",
        "Customers",
        "Transactions",
        "Geography",
        "Sales",
        "Admins",
        "Performance",
        "Dashboard",
    ],
    endpoints: (build) => ({
        getUSer: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["user"]
        }),

        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"],
          }),

          getCustomers: build.query({
            query: () => "client/customers",
            providesTags: ["Customers"],
          }),

          getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
              url: "client/transactions",
              method: "GET",
              params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
          }),

          getGeography: build.query({
            query: () => "client/geography",
            providesTags: ["Geography"],
          }),

          getSales: build.query({
            query: () => "sales/sales",
            providesTags: ["Sales"],
          }),

          getAdmins: build.query({
            query: () => "management/admins",
            providesTags: ["Admins"],
          }),

          getUserPerformance: build.query({
            query: (id) => `management/performance/${id}`,
            providesTags: ["Performance"],
          }),
          
          getDashboard: build.query({
            query: () => "general/dashboard",
            providesTags: ["Dashboard"],
          }),
    })
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTransactionsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = apiSlice;