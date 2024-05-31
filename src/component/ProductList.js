import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


export default function ProductList() {
    // sử dụng hook useSelector lấy dữ liệu từ Redux store
    const products = useSelector(state => state.products);
    return (<div>
            <div className="row">
                {products.map(product => (
                    <Product key={product.id}
                             id={product.id}
                             title={product.title}
                             description={product.description}
                             url={product.url}
                             votes={product.votes}
                             submitterAvatarUrl={product.submitterAvatarUrl}
                             productImageUrl={product.img}
                             color={product.color}
                             isBuying={product.isBuying}
                    />
                ))}
            </div>
        </div>
    );
}

export function Product(data) {
    var [product, setProduct] = useState(data);
    // useDispatch để gởi action
    const dispatch = useDispatch();
    // thay đổi màu khi người dùng click "THÊM"/"LOẠI BỎ"
    const changeColor = (e) => {
        if (product.isBuying) {
            dispatch({type: 'cart.minus', payload: {product: product}})
        } else {
            dispatch({type: 'cart.add', payload: {product: product}})
        }
        setProduct({...product, color: product.color === 'blue' ? 'red' : 'blue', isBuying: !product.isBuying})
    }
    return (<div className="col-3 col-xs-12 col-sm-6 col-lg-3  pb-3">
        <div className="card">
            <img src={product.productImageUrl} className="card-img-top" alt="..."/>
            <div className="card-body  text-center">
                <h5 className="card-title text-center">{product.title} - {product.id}</h5>
                <p className="card-text text-center">{product.description}.</p>
                <a href={`product/${product.id}`} onClick={changeColor}
                   className={"btn  text-center p-2 pl-2 pr-2 " + (product.color === 'red' ? " btn-danger " : " btn-primary")}>{product.isBuying ? "LOẠI BỎ" : "THÊM"}</a>
                <Link to={`/product/${product.id}`} className={"btn btn-success p-2 pl-2 pr-2"}>XEM</Link>
            </div>
        </div>
    </div>);
}