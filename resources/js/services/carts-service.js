export async function get_add_to_carts_service(receipt_id) {
    const response = await axios.get('/api/get_cart/' + receipt_id)
    return response.data.data;
}

export async function get_carts_service(page, search) {
    const response = await axios.get('/api/carts?page=' + page + '&search=' + search)
    return response.data.data;
}

export async function create_carts_service(data) {
    const response = await axios.post('/api/carts', data)
    return response.data;
}

export async function edit_cart_item_service(data) {
    const response = await axios.put(`/api/carts/${data.id}`, data)
    return response.data.data;
}
export async function get_specific_carts_service(id) {
    const response = await axios.get(`/api/carts/${id}`)
    return response.data;
}

export async function delete_cart_item_service(id) {
    const response = await axios.delete(`/api/carts/${id}`)
    return response.data.data;
}