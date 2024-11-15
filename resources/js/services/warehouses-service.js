export async function create_warehouses_service(data) {
    const response = await axios.post('/api/warehouses', data)
    return response.data;
  }
  
  
  export async function get_warehouses_service() {
    const response = await axios.get('/api/warehouses')
    return response.data;
  }
  
  
  export async function get_warehouses_by_id_service(item_id) {
    const response = await axios.get('/api/warehouses/'+item_id)
    return response.data;
  }
  