import { useEffect } from "react";
import DashboardLineCartSection from "./sections/dashboard-line-cart-section";
import DashboardPeriodicTabSection from "./sections/dashboard-periodic-tab-section";
import { getAllAnalytics } from "./redux/dashboard-thunk";
import store from '../../../../store/store'
import { useSelector } from "react-redux";
import AdministratorLayout from '../administrator-layout'
import axios from "axios";
import Papa from 'papaparse';

export default function DashboardPage({ auth }) {
  const { year, tab, analytics } = useSelector((state) => state.dashboard);
  useEffect(() => {
    store.dispatch(getAllAnalytics())
  }, [year, tab]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
  
    if (file && file.type === 'text/csv') {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const csvContent = event.target.result; // Get the file content as string
        console.log('csvContent:', csvContent);
  
        // Use Papaparse to parse the CSV content
        Papa.parse(csvContent, {
          complete: (result) => {
            // result.data will be an array of objects representing each row in the CSV
            axios.post('/api/csvContent',{
              data:result.data
            })
          },
          header: true, // This option treats the first row as headers
          skipEmptyLines: true, // Skip any empty lines in the CSV
        });
      };
  
      reader.readAsText(file); // Read the file content as text
    } else {
      alert('Please upload a valid CSV file.');
    }
  };
  
  return (
    <AdministratorLayout user={auth.user}>
      <DashboardPeriodicTabSection />
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      <DashboardLineCartSection
        year={year}
        analytics={analytics}
        periodic={tab} />
    </AdministratorLayout>
  )
}
