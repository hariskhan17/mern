// import { useState } from "react"
// import { useNavigate } from "react-router-dom";


// function LoginPage() {

//     const navigate = useNavigate()

//     const [email, setemail] = useState()
//     const [password, setpassword] = useState()

//     async function postLogin() {

//        if(!email ){
//           alert("please enter your email ")
//        }
//        else if(! password){
//         alert("enter your password")
//        }
//        else{

//         try {
//             const response = await fetch("http://localhost:5000/Auth/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     email,
//                     password,
//                 }),
//             });
       
//             const data = await response.json();
//             const token = data.token;
    
//             if (!token) {
//                 alert("Invalid credentials!");
//                 return; // Agar token nahi mila, to further execution ko ruk jana chahiye
//             }
    
//             // Token ko localStorage mein save karna
//             localStorage.setItem('token', token);
    
//             alert("You're Logged in, Brother!");
            
//             navigate("/home");
//         } catch (error) {
//             console.log(error);
//         }
//     }
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
//         <button onClick={postLogin}>Log In</button>
//     </div>
// }

// export default LoginPage;























// LoginPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function postLogin() {
    if (!email) {
      alert("Please enter your email");
    } else if (!password) {
      alert("Please enter your password");
    } else {
      try {
        const response = await fetch("http://localhost:5000/Auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        const data = await response.json();
        const token = data.token;
console.log(token)
        if (!token) {
          alert("Invalid credentials!");
          return;
        }

        localStorage.setItem("token", token);

        alert("You're Logged in, Brother!");

        navigate("/home");
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="container">
      <div className="input-container">
        <h1 >LOGIN</h1>
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

      <div className="button-container">
        <button onClick={postLogin}>LogIn</button>
      </div>

      <div className="link-container">
        <p>
          If you don't have an account,&nbsp;
          <a onClick={() => navigate("/")}>register</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;








