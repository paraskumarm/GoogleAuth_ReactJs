import React from 'react'
import GoogleLogin from 'react-google-login'

export const App = () => {
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <div>
      Hello
      <GoogleLogin
      clientId="200984423378-at5nkl9s277gr99a6t5o3s676tbfq26u.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
      />
        
    </div>
  )
  
}
// AIzaSyCJ5lqOz5WkM215MgjE00Xm5ThU8ViVDsY


// 200984423378-at5nkl9s277gr99a6t5o3s676tbfq26u.apps.googleusercontent.com clientidkey