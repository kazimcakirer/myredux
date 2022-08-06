import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {sepeteEkle} from "../actions";

const Products = props => {
    return (
        <div>
            <h2>
                <span>Kitap Listesi</span>
                <Link to="/cart">Sepetim</Link>
            </h2>
            {
                props.bookLists.map(book => (
                    <div className="book" key={book.id}>
                        <img
                            src={book.image}
                            alt={book.name}
                        />
                        <div>
                            <h4>{book.name}</h4>
                            <p>Yazar: {book.author}</p>
                            <p>Fiyat: &#8378; {book.price}</p>
                            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
const mapActionsToProps = {sepeteEkle}
const mapStateToProps = state => {
    return {
        bookLists: state.bookLists,
        cart: state.cart
    }
}
export default connect(mapStateToProps, mapActionsToProps)(Products);
