import React from 'react'
import AdministratorSalesTableSection from './sections/administrator-sales-table-section'
import AdministratorLayout from '@/app/layouts/administrator-layout'

export default function SalesPage({ auth }) {
  return (
    <AdministratorLayout user={auth.user}>
      <AdministratorSalesTableSection />
    </AdministratorLayout>
  )
}
