
const loadCart=()=>{
    return JSON.parse(localStorage.getItem('cart'))??[];
}
const initState={
    products:[],
    // cart:loadCart()
}
export const root=(state= initState,action)=>{
    switch (action.type){
        case "product/load":{  //Thêm sản phẩm vào store
            let cart=loadCart();
            let products=action.payload;
            let out=[];
            //
            lop1:for (const p of products) {
                for (const c of cart) {
                    if(p.id===c.id){
                        out.push({...p,isBuying:true});
                        continue lop1;
                    }
                }
                    out.push({...p,isBuying:false});
            }
            return {
                ...state,
                products: out
            }
        }
        default: return state;
    }
}
