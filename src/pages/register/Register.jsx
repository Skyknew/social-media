import "./register.scss"

const Register = () => {
  return (
    <div className="register">
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
          <button>Login</button>
        </div>

        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="text" placeholder="Name"/>
            <button>Register</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register;