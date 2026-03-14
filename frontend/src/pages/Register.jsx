import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Register(){
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{

e.preventDefault();

if(!name || !email || !password){
alert("All fields are required");
return;
}

if(password.length < 6){
alert("Password must be at least 6 characters");
return;
}

try{

const res = await API.post("/auth/register",{
name,email,password
});

localStorage.setItem("token",res.data.token);

setMessage("Registration successful");

setTimeout(()=>{

navigate("/dashboard");

},1000);

}catch(err){

setError(err.response?.data?.message || "Registration failed");

}

};

return(

<div>

<h2>Register</h2>
{message && <p style={{color:"green"}}>{message}</p>}
{error && <p style={{color:"red"}}>{error}</p>}
<form onSubmit={handleSubmit}>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button type="submit">Register</button>

</form>

</div>

);

}

export default Register;