import React, { useState } from "react";

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
    <div style={{ padding: "20px" }}>
      <h1>Receipt</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {products.map(product => (
          <li key={product.id} style={{ margin: "10px 0" }}>
            <input
              type="checkbox"
              checked={product.isSelected}
              onChange={() => handleSelect(product.id)}
            />
            <label style={{ marginLeft: "10px" }}>
              {product.name} - ${product.price}
            </label>
          </li>
        ))}
      </ul>
      <h2>Total: ${totalCost}</h2>
    </div>
  );
};

export default Receipt;
