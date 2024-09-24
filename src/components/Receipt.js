import React, { useState } from "react";
import venmoImage from './media/Screenshot_20240921-143011_Venmo.png';
import 'bulma/css/bulma.min.css';

const Receipt = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "1 Margarita Flight", price: 23.00, isSelected: false },
    { id: 2, name: "2 Pupusas (Pork, Bean, Cheese | Cheese, Shredded Meat)", price: 8.95, isSelected: false },
    { id: 3, name: "Platains (Plain)", price: 6.50, isSelected: false },
    { id: 4, name: "3 Pupusa Combo (Pork, Bean, Cheese | Chicken & Cheese | Squash & Cheese)", price: 17.50, isSelected: false },
    { id: 5, name: "2 Pupusas (Bean, Cheese, Loroco | Cheese, Squash)", price: 8.70, isSelected: false },
    { id: 6, name: "Nuegados con Chilate", price: 9.50, isSelected: false },
    { id: 7, name: "2 Pupusa Combo (Pork, Bean, Cheese | Bean, Cheese, Loroco)", price: 14.25, isSelected: false },
    { id: 8, name: "3 Pupusa Combo (Pork, Bean, Cheese | Cheese, Loroco | Cheese, Jalapeno)", price: 17.50, isSelected: false },
    { id: 9, name: "2 Pupusas TOGO (Pork, Bean, Cheese | Cheese, Loroco)", price: 8.70, isSelected: false },
    { id: 10, name: "1 Pacifico BTL", price: 6.50, isSelected: false }
  ]);

  const handleSelect = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, isSelected: !product.isSelected } : product
    ));
  };

  const totalCost = products
    .filter(product => product.isSelected)
    .reduce((total, product) => total + product.price, 0);

  return (
    <div className="container has-background-light py-6">
      <div className="box">
        <h1 className="title has-text-centered">Pupusas Las Cabanas Receipt</h1>
        <ul>
          {products.map(product => (
            <li key={product.id} className="mb-4">
              <button
                className={`button is-light ${product.isSelected ? "has-background-info-light" : ""}`}
                style={{ maxWidth: "100%", whiteSpace: "normal" }} // Allow wrapping and limit width
                onClick={() => handleSelect(product.id)}
              >
                {product.name} - ${product.price.toFixed(2)}
              </button>
            </li>
          ))}
        </ul>
        <h2 className="subtitle has-text-centered">Subtotal: ${totalCost.toFixed(2)}</h2>
        <h2 className="subtitle has-text-centered">Tax (10.75%): ${(totalCost * 0.1075).toFixed(2)}</h2>
        <h2 className="subtitle has-text-centered">Tip (20%): ${(totalCost * 0.20).toFixed(2)}</h2>
        <h2 className="title has-text-centered">Total: ${(totalCost + totalCost * 0.1075 + totalCost * 0.20).toFixed(2)}</h2>
      </div>
      
      <div className="box">
        <h1 className="title has-text-centered">Venmo</h1>
        <a 
          href="https://venmo.com/code?user_id=3612146969609850718&created=1726954181"
          target="_blank"
          rel="noopener noreferrer"
          className="button is-link is-fullwidth"
        >
          @David-Cervantes-133
        </a>
        <figure className="image is-4by3">
          <img src={venmoImage} alt="Venmo QR Code" />
        </figure>
      </div>
    </div>
  );
};

export default Receipt;
