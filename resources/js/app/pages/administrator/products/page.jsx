import React, { useEffect, useState } from 'react'
import ProductsTableSection from './sections/products-table-section'
import AdministratorLayout from '../administrator-layout'
import TableSection from './sections/table-section'
import store from '@/store/store'
import { getAllProductsThunk } from './redux/products-thunk'
import { get_products_service } from '@/services/products-service'

export default function ProductsPage({ auth }) {

  const [page, setPage] = useState(1)
  const [search,setSearch] = useState('')
  useEffect(() => {
    store.dispatch(getAllProductsThunk(get_products_service(page, search)))
  }, []);

  return (
    <AdministratorLayout user={auth.user}>
      <TableSection />
    </AdministratorLayout>
  )
}
