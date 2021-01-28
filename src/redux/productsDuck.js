import axios from 'axios'

const initialData = {
    arrayProducts: []
}

const GET_PRODUCTS = 'GET_PRODUCTS_SUCCESS'
const baseUrl = 'https://localhost:44347/api/productos'

export default function productReducer(state = initialData, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state, arrayProducts: action.payload
            }
            default:
                return state;
    }
}

export const getProducts = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(baseUrl)
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        })
    } catch {
        console.log("error")
    }
}

// const insertData = async (data) => {
//   axios.post('/productos', {
//         descripcion: data
//   }).then(res => {

//   }).catch(e => {

//   });

// }