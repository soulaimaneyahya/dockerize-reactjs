import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let url = `http://localhost:4000/api/products`;
        const response = await axios.get(url);

        setProducts(response.data);
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
