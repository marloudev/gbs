export async function create_receives_service(data) {
    const response = await axios.post('/api/receives', data)
    return response.data;
  }
  
  
  export async function get_receives_service() {
    const path = window.location.pathname.split('/')[3]
    const status = path == 'orders'?'Pending':'Received'
    const response = await axios.get('/api/receives?status='+status)
    return response.data;
  }
  export async function change_status_service(data) {
    const response = await axios.post('/api/change_status', data)
    return response.data;
  }
  

  export async function pullout_item_service(data) {
    const response = await axios.post('/api/pullout_item', data)
    return response.data;
  }
  