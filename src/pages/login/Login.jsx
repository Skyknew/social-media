import { Link } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social ChitChat</h1>
          <p>
          Welcome! We are overjoyed to see you. Welcome! 
          Having you here has definitely made my day.
          It's such a pleasure to have you here! 
          Thank you for joining us, you are cordially welcomed! Welcome to you!
          </p>
          <span>Do you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>

        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Login</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Login