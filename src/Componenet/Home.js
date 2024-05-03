// import Navbar from "./Navbar";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";


// function Home() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             const requestOptions = {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             };
//             const response = await fetch("http://localhost:5000/product/get", requestOptions);
//             const data = await response.json();
//             setData(data.DATA);
//         } catch (error) {
//             console.error("Data fetch karne mein error:", error);
//             alert("Network Error");
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <h1 className="dash">Dashboard</h1>
//             <div className="container">
//                 <div className="row">
//                     {data.map((item) => (
//                         <div key={item.id} className="col-lg-4 mb-4">
//                             <div className="card">
//                                 <div className="card-img-container">
//                                     <img src={item.img} className="card-img" alt={item.title} />
//                                 </div>
//                                 <div className="card-body">
//                                     <h5 className="card-title">Title : {item.title}</h5>
//                                     <p className="card-text">Description : {item.description}</p>
//                                     <p className="card-price">Rs : {item.price}</p>
//                                     <button className="btn-detail" onClick={() => navigate(`/detail/${item._id}`)}>Detail</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Home









// import Navbar from "./Navbar";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Home() {
//     const [data, setData] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = async () => {
//         try {
//             const token = localStorage.getItem('token');
//             const requestOptions = {
//                 method: 'GET',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 }
//             };
//             const response = await fetch("http://localhost:5000/product/get", requestOptions);
//             const data = await response.json();
//             setData(data.DATA);
//         } catch (error) {
//             console.error("Data fetch karne mein error:", error);
//             alert("Network Error");
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <h1 className="dash">Dashboard</h1>
//             <div className="container">
//                 <div className="row">
//                     {data.map((item) => (
//                         <div key={item.id} className="col-lg-4 mb-4">
//                             <div className="card" style={{
//                                 border: "1px solid #ddd",
//                                 borderRadius: "8px",
//                                 overflow: "hidden",
//                             }}>
//                                 <div className="card-body" style={{ padding: "20px" }}>
//                                     <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{item.title}</h5>
//                                     <p className="card-text" style={{ fontSize: "16px", marginBottom: "10px" }}>{item.description}</p>
//                                     <img src={item.img} className="card-img" style={{ width: "100%", objectFit: "cover" }} alt={item.title} />
//                                     <p className="card-price" style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff", marginBottom: "10px" }}>Rs : {item.price}</p>
//                                     <button className="btn-detail" style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s ease" }} onClick={() => navigate(`/detail/${item._id}`)}>Detail</button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;
























import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const token = localStorage.getItem('token');
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            };
            const response = await fetch("http://localhost:5000/product/get", requestOptions);
            const data = await response.json();
            setData(data.DATA);
        } catch (error) {
            console.error("Data fetch karne mein error:", error);
            alert("Network Error");
        }
    };

    return (
        <div>
            <Navbar />
            <h1 className="dash">Dashboard</h1>
            <div className="container">
                <div className="row">
                    {data.map((item) => (
                        <div key={item.id} className="col-lg-4 mb-4">
                            <div className="card" style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" ,
                                width:"500px",
                            
                            }}>
                                <div className="card-body" style={{ padding: "20px",width:"100%",height:"100%" }}>
                                    <h5 className="card-title" style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>{item.title}</h5>
                                    <p className="card-text" style={{ fontSize: "16px", marginBottom: "10px",overflow:"hidden" }}>{item.description}</p>
                                    <img src={item.img} className="card-img" style={{ width: "100%", objectFit: "cover", marginBottom: "10px",height:"200px" }} alt={item.title} />
                                    <p className="card-price" style={{ fontSize: "18px", fontWeight: "bold", color: "#007bff", marginBottom: "10px" }}>Rs : {item.price}</p>
                                    <button className="btn-detail" style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px 16px", borderRadius: "4px", cursor: "pointer", transition: "background-color 0.3s ease" }} onClick={() => navigate(`/detail/${item._id}`)}>Detail</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
