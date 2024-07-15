import { DELETE_PRODUCT_ERROR, DELETE_PRODUCT_SUCCESS, GET_PRODUCT_ERROR, GET_PRODUCT_SUCCESS, POST_PRODUCT_ERROR, POST_PRODUCT_SUCCESS, UPDATE_PRODUCT_ERROR, UPDATE_PRODUCT_SUCCESS } from "../../admin/action";
import { delete_product, get_product, post_product, put_product } from "../../admin/api";
import { call, put } from "redux-saga/effects"

function* handle_get_product(action) {

    // console.log(action,"from manageproduct");
    try {
        let { status, data } = yield call(get_product, action);

        if (status == 200) {
            yield put({ type: GET_PRODUCT_SUCCESS, payload: data });
        }
    } catch (error) {
        yield put({ type: GET_PRODUCT_ERROR, payload: error })
    }
}

function* handle_post_product(action) {
    console.log(action, "manageProduct");

    try {
        let { data, status } = yield call(post_product, action);
        yield put({ type: POST_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        yield put({ type: POST_PRODUCT_ERROR, payload: error });
    }
}

function* handle_delete_product(action) {
    try {
        let { data, status } = yield call(delete_product, action);
        yield put({ type: DELETE_PRODUCT_SUCCESS, payload: data })

    } catch (error) {
        yield put({ type: DELETE_PRODUCT_ERROR, payload: error })
    }
}

function* handle_put_product(action) {
    try {
        let {data,status} = yield call(put_product,action);

        yield put({type:UPDATE_PRODUCT_SUCCESS, payload:data})
    } catch (error) {
        yield put({ type: UPDATE_PRODUCT_ERROR, payload: error })
    }
}

export { handle_get_product, handle_post_product, handle_delete_product , handle_put_product };