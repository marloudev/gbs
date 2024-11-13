import React from 'react'
import AdministratorLayout from '../../administrator-layout'

export default function ReceivesPage({ auth }) {
  return (
    <AdministratorLayout user={auth.user}>
      ReceivesPage
    </AdministratorLayout>
  )
}
