export async function create_items_service(data) {
  const response = await axios.post('/api/items', data)
  return response.data;
}


export async function get_items_service() {
  const response = await axios.get('/api/items'+window.location.search)
  return response.data;
}


export async function get_items_by_id_service(item_id) {
  const response = await axios.get('/api/items/'+item_id)
  return response.data;
}
