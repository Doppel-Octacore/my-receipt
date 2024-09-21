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
    <div style={styles.container}>
      <div style={styles.receiptContainer}>
        <h1 style={styles.heading}>Pupusas Las Cabanas Receipt</h1>
        <ul style={styles.productList}>
          {products.map(product => (
            <li key={product.id} style={{ marginBottom: "10px" }}>
              <button
                style={{
                  ...styles.productButton,
                  backgroundColor: product.isSelected ? "#d1ecf1" : "#fff"
                }}
                onClick={() => handleSelect(product.id)}
              >
                {product.name} - ${product.price.toFixed(2)}
              </button>
            </li>
          ))}
        </ul>
        <h2 style={styles.total}>Subtotal: ${totalCost.toFixed(2)}</h2>

        {/* 10.75% tax based on Subtotal*/}
        <h2 style={styles.total}>Tax (10.75%): ${(totalCost * 0.1075).toFixed(2)}</h2>

        {/* 20% tip based on Subtotal */}
        <h2 style={styles.total}>Tip (20%): ${(totalCost * 0.20).toFixed(2)}</h2>

        {/* Total (subtotal + tax + tip) */}
        <h2 style={styles.total}>Total: ${(totalCost + totalCost * 0.1075 + totalCost * 0.20).toFixed(2)}</h2>
      </div>
      <div style={styles.receiptContainer}>
      <h1 style={styles.heading}>Venmo</h1>


      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e0f7ff",
    padding: "20px",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  receiptContainer: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
  },
  productList: {
    listStyleType: "none",
    padding: 0,
  },
  productButton: {
    width: "100%",
    padding: "15px 20px",
    fontSize: "16px",
    textAlign: "left",
    backgroundColor: "#fff",
    border: "2px solid #b2ebf2",
    borderRadius: "5px",
    cursor: "pointer",
  },
  total: {
    fontSize: "20px",
    textAlign: "center",
    marginTop: "20px",
  }
};

export default Receipt;
