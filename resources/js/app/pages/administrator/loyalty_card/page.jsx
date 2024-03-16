import React from 'react'
import LoyalCardTableSection from './sections/loyal-card-table-section'
import AdministratorLayout from '@/app/layouts/administrator-layout'

export default function LoyaltyCardPage() {
  return (
    <AdministratorLayout>
       <LoyalCardTableSection />
    </AdministratorLayout>
  )
}
