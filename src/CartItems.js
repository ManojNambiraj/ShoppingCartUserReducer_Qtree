import React from 'react'

function CartItems(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 md-3 me-auto">
                <div class="fw-bold">{props.item.title}</div>
                {props.item.price}
            </div>
            <button onClick={() => {props.handleRemoveFromCart(props.item)}} class="btn badge bg-primary rounded-pill">X</button>
        </li>
    )
}

export default CartItems