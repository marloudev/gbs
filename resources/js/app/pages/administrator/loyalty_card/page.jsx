import React from 'react'
import LoyalCardTableSection from './sections/loyal-card-table-section'
import AdministratorLayout from '../administrator-layout'

export default function LoyaltyCardPage({ auth }) {
  return (
    <AdministratorLayout user={auth.user}>
       <LoyalCardTableSection />
    </AdministratorLayout>
  )
}
