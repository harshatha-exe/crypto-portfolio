import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Login(){
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const navigate = useNavigate();

const handleSubmit = async(e)=>{

e.preventDefault();

setError("");
setMessage("");

if(!email || !password){
setError("Email and password required");
return;
}

try{

const res = await API.post("/auth/login",{email,password});

localStorage.setItem("token",res.data.token);

setMessage("Login successful");

setTimeout(()=>{

navigate("/dashboard");

},1000);

}catch(err){

setError(err.response?.data?.message || "Login failed");

}

};

return(

<div>

<h2>Login</h2>
{message && <p style={{color:"green"}}>{message}</p>}
{error && <p style={{color:"red"}}>{error}</p>}
<form onSubmit={handleSubmit}>

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

<button type="submit">Login</button>

</form>

</div>

);

}

export default Login;