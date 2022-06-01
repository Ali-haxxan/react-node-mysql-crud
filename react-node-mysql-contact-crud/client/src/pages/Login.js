import React from 'react'

const Login = () => {
  return (
    <div>
    <div className="container">
        <div className="row">
        <div className="col-md-4 col-md-offset-4 ">
            <a href='/' className="mx-5" >
                <img href="./root4tech.jpg"  alt="logo" className="mx-5"/>
                
            </a>
            <div >
                <h1 >Login</h1>
                <p></p>
                <hr/>
                <form action="/auth/login" method="POST">
                   
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" className="form-control" name="email" placeholder="Enter Email" value=""/>
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter password"/>
                        <span className="text-danger"></span>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block btn-primary my-4">Login</button>  
                    </div>
                    <a className="justify-center" href="/register" >Create a new account!</a>
                    
                        
                </form>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login