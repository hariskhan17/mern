// import { useState } from "react"
// import { urlGetNodeWork } from "../Config/Firebase"
// import { useNavigate } from "react-router-dom"

// function RegisterPage() {

//     const navigate = useNavigate()

//     const [email, setemail] = useState()
//     const [password, setpassword] = useState()
//     const [fullname, setfullname] = useState()
//     const [conutry, setconutry] = useState()
//     const [city, setcity] = useState()
//     const [age, setage] = useState()
//     const [img, setimg] = useState()


//     async function postResgister() {
//         try {
//             const imgUrl = await urlGetNodeWork({ img })

//             await fetch("http://localhost:5000/Auth/register", {
//                 method: "POST",
//                 headers: {
//                     "content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                     fullname,
//                     conutry,
//                     city,
//                     age,
//                     img: imgUrl
//                 }),
//             })
//                 .then((res) => res.json())
//                 .then((res) => console.log(res));

//             alert("REGISTER!")
//             navigate("/Login")

//         } catch (error) {
//             console.log(error)
//         }
//     }


//     return <div>
//         <input
//             onChange={(e) => setemail(e.target.value)}

//             required
//             type="text"
//             placeholder="email"
//         />

//         <input
//             onChange={(e) => setpassword(e.target.value)}

//             required
//             type="text"
//             placeholder="password"
//         />

//         <input
//             onChange={(e) => setfullname(e.target.value)}

//             required
//             type="text"
//             placeholder="full name"
//         />

//         <input
//             onChange={(e) => setconutry(e.target.value)}

//             required
//             type="text"
//             placeholder="conutry"
//         />

//         <input
//             onChange={(e) => setcity(e.target.value)}

//             required
//             type="text"
//             placeholder="city"
//         />

//         <input
//             onChange={(e) => setage(e.target.value)}

//             required
//             type="text"
//             placeholder="age"
//         />

//         <input
//             onChange={(e) => setimg(e.target.files[0])}
//             type="file"
//             required
//         />
        
//         <p>ap ka aacount hai to <a onClick={() => navigate("/Login")}>login</a></p>

//         <button onClick={postResgister}>Submit</button>

//     </div>
// }

// export default RegisterPage;

















































// RegisterPage.js

import React, { useState } from "react";
import { urlGetNodeWork } from "../Config/Firebase";
import { useNavigate } from "react-router-dom";


function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("");
  const [img, setImg] = useState(null);

  async function postRegister() {
    try {
      const imgUrl = await urlGetNodeWork({ img });

      await fetch("http://localhost:5000/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          fullname,
          country,
          city,
          age,
          img: imgUrl,
        }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));

      alert("REGISTER!");
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="input-container">
        <h1>REGISTER</h1>
        <input
          onChange={(e) => setEmail(e.target.value)}
          required
          type="text"
          placeholder="Email"
        />
      </div>

      <div className="input-container">
        <input
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
          placeholder="Password"
        />
      </div>

      <div className="input-container">
        <input
          onChange={(e) => setFullname(e.target.value)}
          required
          type="text"
          placeholder="Full Name"
        />
      </div>

      <div className="input-container">
        <input
          onChange={(e) => setCountry(e.target.value)}
          required
          type="text"
          placeholder="Country"
        />
      </div>

      <div className="input-container">
        <input
          onChange={(e) => setCity(e.target.value)}
          required
          type="text"
          placeholder="City"
        />
      </div>

      <div className="input-container">
        <input
          onChange={(e) => setAge(e.target.value)}
          required
          type="text"
          placeholder="Age"
        />
      </div>

      <div className="input-container">
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          required
        />
      </div>

      {/* <div className="link-container">
        <p>If you already have an account, please&nbsp;
          <a onClick={() => navigate("/Login")}>login</a>
        </p>
        <div className="button-container">
        <button onClick={postRegister}>Submit</button>
      </div>
      </div> */}
<div className="link-container">
  <p>If you already have an account, please&nbsp;
    <a onClick={() => navigate("/Login")}>login</a>
  </p>
  <div className="button-container">
    <button onClick={postRegister}>Submit</button>
  </div>
</div>

      
    </div>
  );
}

export default RegisterPage;
