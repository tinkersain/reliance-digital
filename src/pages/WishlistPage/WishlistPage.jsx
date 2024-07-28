import React, { useState } from "react";
import "./WishlistPage.css";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  const addItem = (item) => {
    setWishlist([...wishlist, item]);
  };

  const removeItem = (index) => {
    setWishlist(wishlist.filter((_, i) => i !== index));
  };

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <input type="text" id="itemInput" placeholder="Add new item" />
      <button
        onClick={() => addItem(document.getElementById("itemInput").value)}
      >
        Add Item
      </button>
      <ul>
        {wishlist.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishlistPage;
