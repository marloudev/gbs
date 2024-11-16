export async function create_supplies_service(data) {
    const response = await axios.post('/api/supplies', data)
    return response.data;
  }
  
  
  export async function get_supplies_service() {
    const response = await axios.get('/api/supplies'+window.location.search)
    return response.data;
  }
  
  
  export async function get_supplies_by_id_service(item_id) {
    const response = await axios.get('/api/supplies/'+item_id)
    return response.data;
  }
  