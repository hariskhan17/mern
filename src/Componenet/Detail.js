// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";





// function Detail() {
//     const [data, setData] = useState([])
//     const { id } = useParams()

//     useEffect(function () {
//         const getData = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/product/${id}`);
//                 const data = await response.json();
//                 setData(data.DATA);
//                 console.log(data.DATA); // yahan data log karen
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         getData()
//     }, [id])










//     return <div><h1>Detail page</h1>

//     <h5>{data.title}</h5>
//     <h5>{data.price}</h5>
//     <h5>{data.description}</h5>
//     <img src={data.img}/>

//     </div>
// }
// export default Detail

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/product/${id}`);
                const data = await response.json();
                setData(data.DATA);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, [id]);

    return (
        <div className="detail-container">
            <h1 className="detail-title">Detail page</h1>
            <div className="detail-info">
            <img src={data.img} alt={data.title} className="detail-image" />
                <h5 className="detail-item">Title: {data.title}</h5>
                <h5 className="detail-item">Description: {data.description}</h5>
                <h5 className="detail-item">Price: {data.price}</h5>
             
               
            </div>
        </div>
    );
}

export default Detail;
