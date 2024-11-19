export async function create_receives_service(data) {
    const response = await axios.post('/api/receives', data)
    return response.data;
  }
  
  export async function delete_receives_service(data) {
    const response = await axios.delete('/api/receives/'+data.id)
    return response.data;
  }
  
  
  export async function get_receives_service() {
    const params = new URLSearchParams(window.location.search);
    const searchTerm = params.get('search');
    const page = params.get('page');
    const response = await axios.get('/api/receives?search='+searchTerm+'&page='+page)
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
  