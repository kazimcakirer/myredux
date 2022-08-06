import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {productDown, productRemove, productUp} from "../actions";

const Cart = props => {
    const totalPrice = props.cart.length && props.cart.reduce((total, item) => (total += (item.price*item.count)), 0)
    return (
        <div>
            <h2>
                <Link to="/">Kitap Listesi</Link> <span>Sepetim</span>
            </h2>

            <h3>Toplam Sepet Tutarı: &#8378;{totalPrice.toFixed(2)}</h3>

            {
                props.cart.map(book => (
                    <div className="book" key={book.id}>
                        <img
                            src={book.image}
                            alt={book.name}
                        />
                        <div>
                            <h4>{book.name}</h4>
                            <p>Yazar: {book.auther}</p>
                            <p>Fiyat: &#8378;{book.price}</p>
                            <p>Toplam: &#8378;{(book.price * book.count).toFixed(2)}</p>
                            <p>Sepetinizde bu kitaptan toplam {book.count} adet var.</p>
                            <button onClick={() => props.productDown(book)}>-</button>
                            <button onClick={() => props.productRemove(book)}>Sepetten Çıkar</button>
                            <button onClick={() => props.productUp(book)}>+</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps, {productDown, productRemove, productUp})(Cart);
