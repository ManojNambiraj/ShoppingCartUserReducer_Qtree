import React from 'react'

function Product(props) {
    return (
        <div className='col-md-3 col-lg-2 mt-3'>
            <div class="card" style={{ width: "18rem;" }}>
                <img src="https://via.placeholder.com/100x50" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.product.title}</h5>
                    <p>{props.product.price}</p>
                    <p class="card-text">Some quick example text to build on the card title.</p>
                    <button onClick={() => {props.handleAddToCart(props.product)}} class="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product