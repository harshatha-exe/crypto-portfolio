import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
function App() {

const token = localStorage.getItem("token");

return (

<div>

<h1>Crypto Portfolio Tracker</h1>

{/* Show links only when not logged in */}
{/*}
{!token && (

<nav>

<Link to="/">Login</Link> | 
<Link to="/register">Register</Link>

</nav>

)}
*/}
<Routes>

<Route path="/" element={<Home />} />

<Route path="/login" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/dashboard" element={<Dashboard />} />

</Routes>

</div>

);

}

export default App;