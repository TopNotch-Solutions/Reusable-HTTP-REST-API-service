import './App.css';
import Services from './services/request';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const requests = new Services();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await requests.get("");
        console.log("Response data: ", res);
        setAllProducts(res);
      } catch (error) {
        console.error("Error fetching products: ", error.message);
      }
    };

    fetchProducts();
  }, []);

  const addProduct = useCallback(async () => {
    try {
      const res = await requests.post("", { userId: 100, title: "We are winning" });
      console.log("Product added: ", res);
      setAllProducts((prev) => [...prev, res]); // Add the new product to the list
    } catch (error) {
      console.error("Error adding product: ", error.message);
    }
  }, []);

  return (
    <div className="App">
      <h1>Product List</h1>
      <ul>
        {allProducts.map((data, index) => (
          <li key={index}>
            {data.title}
          </li>
        ))}
      </ul>
      <button type="button" onClick={addProduct}>
        Add New Product
      </button>
    </div>
  );
}

export default App;
