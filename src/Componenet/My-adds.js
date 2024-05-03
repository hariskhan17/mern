import { useEffect, useState } from "react";
import Navbar from "./Navbar"
import { useNavigate } from 'react-router-dom';

function AddHistory() {
    const navigation = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
      try {
        // Token ko localStorage se retrieve karna
        const token = localStorage.getItem('token');

        // Fetch request bhejne ke liye options tayyar karna
        const requestOptions = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Token ko Bearer authentication ke taur par header mein include karna
                'Content-Type': 'application/json'
            }
        };

        // Pehle alert dikhana agar server tak connection na ho

        // Fetch request bhejna
        const response = await fetch("http://localhost:5000/product/get", requestOptions);

        // Check karna ke response mila ya nahi


        // Response ko parse karna
        const data = await response.json();

        // Response ko setData ke zariye set karna
        setData(data.DATA);

        // Log kar dena
        console.log(data.DATA);
    } catch (error) {
        // Error handle karna
        console.error("Data fetch karne mein error:", error);
        // Network error ka alert dikhana
        alert("Network Error");
        }
    };

    // Function to navigate to update page with item ID
    const navigateToUpdate = (itemId) => {
        navigation(`/update/${itemId}`, { state: { item: { _id: itemId } } });
    };

    // Function to delete item by ID
    const deleteItem = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:5000/product/${itemId}`, {
                method: 'DELETE',
            });
            console.log(itemId)
            if (response.ok) {
                // If deletion is successful, fetch updated data
                getData();
                console.log("Item deleted successfully!");
                alert("Item deleted successfully!")
            } else {
                console.error("Failed to delete item.");
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
          <Navbar />
          <h1>My Adds</h1>
      
          <div className="row">
            {data.map((item) => (
              <div key={item._id} className="col-md-3 col-sm-6">
                <div className="product-grid">
                  <div className="product-image">
                    <a href="#" className="image">
                      <img className="pic-1" src={item.img} alt="" />
                    </a>
                  </div>
                  <div className="product-content">
                    <h5 className="title">Title: {item.title}</h5>
                    <h5 className="des">Description: {item.des}</h5>
                    <h5 className="price">Price: {item.price}</h5>
                   
                    <button className="btn-update" onClick={() => navigateToUpdate(item._id)}>Update</button>
                    <button className="btn-delete" onClick={() => deleteItem(item._id)}>Delete</button>
                                    </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      }

export default AddHistory;
