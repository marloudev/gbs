import React, { useEffect } from 'react'
import AdministratorAccountTableSection from './sections/administrator-account-table-section'
import AdministratorLayout from '../administrator-layout'
import TableSection from './sections/table-section'
import store from '@/store/store';
import { getAllBranches } from './redux/account-thunk';


export default function AccountsPage({ auth }) {
  useEffect(() => {
    store.dispatch(getAllBranches())
}, []);
  return (
    <AdministratorLayout user={auth.user}>
      {/* <AdministratorAccountTableSection /> */}
      <TableSection />
    </AdministratorLayout>
  )
}
