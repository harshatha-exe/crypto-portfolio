import { Link } from "react-router-dom";

function Home(){

return(

<div>

<p>Please login or register to continue.</p>

<Link to="/login">
<button>Login</button>
</Link>

<br/><br/>

<Link to="/register">
<button>Register</button>
</Link>

</div>

);

}

export default Home;