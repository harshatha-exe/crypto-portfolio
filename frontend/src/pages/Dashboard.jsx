import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

function Dashboard(){

const [assets,setAssets]=useState([]);
const [message, setMessage] = useState("");
const [error, setError] = useState("");
const [coinName,setCoinName]=useState("");
const [symbol,setSymbol]=useState("");
const [quantity,setQuantity]=useState("");
const [buyPrice,setBuyPrice]=useState("");
const [currentPrice,setCurrentPrice]=useState("");

const navigate = useNavigate();

const token = localStorage.getItem("token");

const headers = {
Authorization:`Bearer ${token}`
};

if(!token){
navigate("/");
}

const fetchAssets = async()=>{

try{

const res = await API.get("/portfolio",{headers});

setAssets(res.data);

}catch(err){

alert("Failed to load portfolio");

}

};

useEffect(()=>{
fetchAssets();
},[]);


// CREATE
const createAsset = async(e)=>{

e.preventDefault();

if(!coinName || !symbol || !quantity){
alert("Please fill required fields");
return;
}

try{

await API.post("/portfolio",{
coinName,
symbol,
quantity,
buyPrice,
currentPrice
},{headers});

setMessage("Asset created successfully");
setError("");

fetchAssets();

}catch(err){

setError(err.response?.data?.message || "Create failed");
setMessage("");

}

};


// DELETE
const deleteAsset = async(id)=>{

try{

await API.delete(`/portfolio/${id}`,{headers});

setMessage("Asset deleted");

fetchAssets();

}catch(err){

setError("Delete failed");

}

};


// UPDATE
const updateAsset = async(id)=>{

const newQuantity = prompt("Enter new quantity");

if(!newQuantity) return;

try{

await API.put(`/portfolio/${id}`,{
quantity:newQuantity
},{headers});

setMessage("Asset updated");

fetchAssets();

}catch(err){

setError("Update failed");

}

};


// LOGOUT
const logout = ()=>{

localStorage.removeItem("token");

navigate("/");

};


return(

<div>

<h2>Dashboard</h2>
{message && <p style={{color:"green"}}>{message}</p>}
{error && <p style={{color:"red"}}>{error}</p>}
<button onClick={logout}>Logout</button>

<h3>Create Asset</h3>

<form onSubmit={createAsset}>

<input
placeholder="Coin Name"
value={coinName}
onChange={(e)=>setCoinName(e.target.value)}
/>

<input
placeholder="Symbol"
value={symbol}
onChange={(e)=>setSymbol(e.target.value)}
/>

<input
placeholder="Quantity"
value={quantity}
onChange={(e)=>setQuantity(e.target.value)}
/>

<input
placeholder="Buy Price"
value={buyPrice}
onChange={(e)=>setBuyPrice(e.target.value)}
/>

<input
placeholder="Current Price"
value={currentPrice}
onChange={(e)=>setCurrentPrice(e.target.value)}
/>

<button type="submit">Add Asset</button>

</form>

<h3>Your Portfolio</h3>

<ul>

{assets.map(asset=>(

<li key={asset._id}>

{asset.coinName} ({asset.symbol})  
Qty: {asset.quantity}

<button onClick={()=>updateAsset(asset._id)}>Update</button>

<button onClick={()=>deleteAsset(asset._id)}>Delete</button>

</li>

))}

</ul>

</div>

);

}

export default Dashboard;