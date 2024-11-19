export async function create_warehouses_service(data) {
    const response = await axios.post('/api/warehouses', data)
    return response.data;
  }
  
  
  export async function get_warehouses_service() {
    // const params = new URLSearchParams(window.location.search);
    // const searchTerm = params.get('search');
    // const page = params.get('page');
    const response = await axios.get('/api/warehouses'+window.location.search)
    return response.data;
  }
  
  
  export async function get_warehouses_by_id_service(item_id) {
    const response = await axios.get('/api/warehouses/'+item_id)
    return response.data;
  }
  