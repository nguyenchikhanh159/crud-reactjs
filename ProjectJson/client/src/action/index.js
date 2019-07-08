import *as types from './../constants/ActionType';
import callApi from './../utils/ApiCaller';

export const actFectchProductsRequest=()=>{
    return (dispatch)=>{
        return callApi('products','GET',null).then(res=>{ //Delete
            dispatch(actFectchProducts(res.data));
        });
    };
}
export const actFectchProducts=(products)=>{
    return{
        type:types.FETCH_PRODUCTS,                         // Delete
        products
    }
}
export const actDeleteProductsRequest=(id)=>{
    return (dispatch)=>{
        return callApi(`products/${id}`,'DELETE',null).then(res=>{  //Get
            dispatch(actDeleteProducts(id));
        })
    }
}
export const actDeleteProducts=(id)=>{  
    return{
        type:types.DELETE_PRODUCTS,                 //Get
        id
    }
}
export const actAddProductsRequest=(product)=>{
    return (dispatch)=>{
        return callApi(`products`,'POST',product).then(res=>{       //ADD
            dispatch(actAddProducts(res.data));
        })
    }
}
export const actAddProducts=(product)=>{
    return{
        type:types.ADD_PRODUCTS,                        //ADD
        product
    }
}

export const actShowEditingProductsRequest=(id)=>{
    return (dispatch)=>{ 
        return callApi(`products/${id}`,'GET',null).then(res=>{     //ShowEditing
            dispatch(actShowEditingProducts(res.data));
        });
    }
}
export const actShowEditingProducts=(product)=>{
    return{
        type:types.EDIT_PRODUCTS,             //ShowEditing
        product
    }
}
export const actUpdateProductsRequest=(product)=>{
    return dispatch=>{
        return callApi(`products/${product.id}`,'PUT',product).then(res=>{
            dispatch(actUpdateProducts(product));
        })
    }
}
export const actUpdateProducts=(product)=>{
    return{
        type:types.UPDATE_PRODUCTS,
        product
    }
}
export const searchTask=(keyword)=>{
    return{
        type:types.SEARCH,
        keyword
    }
}