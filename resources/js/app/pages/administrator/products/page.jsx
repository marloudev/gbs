import React from 'react'
import ProductsTableSection from './sections/products-table-section'
import AdministratorLayout from '@/app/layouts/administrator-layout'

export default function ProductsPage() {
  return (
    <AdministratorLayout>
      <ProductsTableSection />
    </AdministratorLayout>
  )
}
