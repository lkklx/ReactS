import React from 'react';

const ProductCard = () => {
    return (
        <section class="product-item">
                <img src = '${this.image}' alt='${this.title}'></img>
                    <h1 class="product-title">${this.title}</h1>
                    <div class="product-info">
                        <span>
                            <strong>
                                ${this.price} UAH
                            </strong>
                        </span>
                        <span>
                            <button class="buy-btn" data-id='${this.id}'>BUY</button>
                        </span>
                    </div>
            </section>
    )
}