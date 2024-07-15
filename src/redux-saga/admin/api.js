import axios from "axios";
import { BASE_URL, DELETE_PRODUCT, GET_PRODUCT, POST_PRODUCT, PUT_PRODUCT } from "../constant";

async function get_product(action) {

    // console.log(action , "from api");
    let res = await axios.get(BASE_URL + GET_PRODUCT);

    let data = res.data;
    let status = res.status;

    return { data, status }
}


async function post_product(action) {

    // console.log(action, "from api");
    let { data, status } = await axios.post(BASE_URL + POST_PRODUCT, action.payload);

    return { data, status }
}

async function delete_product(action) {
    let { data, status } = await axios.delete(BASE_URL + DELETE_PRODUCT + action.payload);

    return { data, status }
}

async function put_product(action) {
    let { data, status } = await axios.put(BASE_URL + PUT_PRODUCT + action.payload.id, action.payload);

    return{data,status}
}
export { get_product, post_product, delete_product, put_product };