import { useEffect } from "react";
import DashboardLineCartSection from "./sections/dashboard-line-cart-section";
import DashboardPeriodicTabSection from "./sections/dashboard-periodic-tab-section";
import { getAllAnalytics } from "./redux/dashboard-thunk";
import store from '../../../../store/store'
import { useSelector } from "react-redux";
import AdministratorLayout from "@/app/layouts/administrator-layout";
export default function DashboardPage() {
  const { year, tab, analytics } = useSelector((state) => state.dashboard);
  useEffect(() => {
    store.dispatch(getAllAnalytics())
  }, [year, tab]);
  return (
    <AdministratorLayout>
      <DashboardPeriodicTabSection />
      <DashboardLineCartSection
        year={year}
        analytics={analytics}
        periodic={tab} />
    </AdministratorLayout>
  )
}
