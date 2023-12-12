import React from 'react'
import '../CSS/Signup.css'
import { useAuth0 } from "@auth0/auth0-react";


function Signup() {

    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();

  return (
    <>
      <div className="signup">
      <div className="Top_sub_headline">
            <h1>NEWSLETTER</h1>
      </div>
      <div className="signup_input">
        <form action="" className='signup_form'>
            {isAuthenticated ?(
           
              <button className='sub_login' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </button>
            ):(
              
              <>
              <p id="regular_news">Login for better user experience!</p>
              <button class='sub_login' onClick={() => loginWithRedirect()}>login</button>
              </>
            ) }
        </form>
       </div>
      </div>
       
          </>
  )
}

export default Signup
