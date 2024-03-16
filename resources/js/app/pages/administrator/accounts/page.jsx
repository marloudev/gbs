import React from 'react'
import AdministratorAccountTableSection from './sections/administrator-account-table-section'
import AdministratorLayout from '@/app/layouts/administrator-layout'

export default function AccountsPage() {
  return (
    <AdministratorLayout>
      <AdministratorAccountTableSection />
    </AdministratorLayout>
  )
}
