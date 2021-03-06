import { CartItem } from './cartItem';
import {deleteCart} from '../dao/cartDao'
import {useState} from 'react'

export const CartContainer = ({cart}) => {

    const handleClear = () => {
        deleteCart().then(()=>{
            window.location.href = '/';
        })
    }

    return (
        <div>
            { 
              //qs 4 prevent adding two exact same products into shopping cart
            // Validate minimum quantity requirements.
            $products = $this->cart->getProducts();
            foreach ($products as $product) {
                $product_total = 0;

                foreach ($products as $product_2) {
                    if ($product_2['product_id'] == $product['product_id']) {
                        $product_total += $product_2['quantity'];
                    }
                }

                if ($product['minimum'] > $product_total) {
                    $this->response->redirect($this->url->link('checkout/cart'));
                }
            } 

            typeof cart === 'undefined' || cart.length === 0 ?
                <div className="mt-5 text-center">No item in cart</div>

                :
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="card card-body border-0 col-sm-3">
                        {
                            cart.map(product => <CartItem key={product.id} product={product} />)
                        }
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <div className="card card-body">
                            <p className="mb-1">Total Items</p>
                            <h4 className=" mb-3 txt-right">{cart.length}</h4>
                            <p className="mb-1">Total Payment</p>
                            <h3 className="m-0 txt-right">{cart.map(e=>e.price).reduce((a, b) => a + b)}</h3>
                            <hr className="my-4" />
                            <div className="text-center">
                                <button type="button" className="btn btn-primary mb-2 btn-dark" >CHECKOUT</button>
                                <button type="button" onClick={handleClear} className="btn btn-outlineprimary btn-sm" >CLEAR</button>
                            </div>

                        </div>
                    </div>

                </div>
            }

        </div>

    );
}