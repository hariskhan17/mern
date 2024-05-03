import React, { useState } from "react";
import { urlGetNodeWork } from "../Config/Firebase";


const PostData = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [img, setImg] = useState(null);

    async function PostApiWork() {
        try {
            const imgUrl = await urlGetNodeWork({ img })


            //fetch post //

            await fetch("http://localhost:5000/product/post", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    description,
                    price,
                    img: imgUrl
                }),
            })
                .then((res) => res.json())
                .then((res) => console.log(res));

            alert("data submit")


        } catch (error) {
            console.log(error)
        }
    }





    return (
        <div className="sell-form-container">
            <h1>Sell Form</h1>
            <div className="form-group">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    required
                    type="text"
                    placeholder="Title"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    required
                    type="text"
                    placeholder="Description"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                    type="text"
                    placeholder="Price"
                />
            </div>
            <div className="form-group">
                <input
                    onChange={(e) => setImg(e.target.files[0])}
                    type="file"
                    required
                />
            </div>
            <button className="Submit" onClick={PostApiWork}>Submit</button>
        </div>
    );
};

export default PostData;
