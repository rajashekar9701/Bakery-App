// import React from 'react'
// import { useGoogleLogin } from '@react-oauth/google';
// import axios from 'axios';


// function Login() {
//     const login = useGoogleLogin({
//         onSuccess: async(response)=>{
//             try{
//                 const res=await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",
//                 {
//                     headers:{
//                         Authorization:'Bearer ${response.access_token}',
//                     },
//                 }
//                 );
//                 console.log(res)
//             }
//             catch(err){
//                 console.log(err);
//             }
//         },
//       });
//   return (
//     <div>
//         <button onClick={() => login()}>
//   Sign in with Google 🚀{' '}
// </button>;
//     </div>
//   );
// }
// export default Login;



// import { GoogleLogin } from '@react-oauth/google';
// import {jwtDecode} from "jwt-decode";

// function Login() {

//   return (
//     <>
//       <GoogleLogin
//   onSuccess={credentialResponse => {
//     const credentialResponseDecoded=jwtDecode(
//       credentialResponse.credential
//     );
//     console.log(credentialResponseDecoded);
//   }}
//   onError={() => {
//     console.log('Login Failed');
//   }}
// />

//     </>
//   );
// }

// export default Login;


import { GoogleLogin } from "react-google-login";
const clientId="943264069242-a96qq5kild8hahup8lfufaeoqq53t95i.apps.googleusercontent.com";
function Login(){
    const onSuccess=(res)=>{
        var token=res.tokenObj.access_token;
        var email=res.profileObj.email;
        var name=res.profileObj.name;
        console.log("LOGIN SUCCESS! Current User:",res.profileObj);
        sessionStorage.setItem("jwtToken",token)
        sessionStorage.setItem("email",email);
        sessionStorage.setItem("name",name);
        window.location.reload();
        console.log(res.tokenObj.access_token);
        console.log(res.profileObj.email);
        console.log(res.profileObj.name);
    }
    const onFailure=(res)=>{
        console.log("LOGIN FAILED! res: ",res);
    }

    return(
        <div id='signInButton'>
        <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                />
        </div>
    )
}
export default Login;