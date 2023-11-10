import { GoogleLogout } from "react-google-login";
const clientId="943264069242-a96qq5kild8hahup8lfufaeoqq53t95i.apps.googleusercontent.com";

function Logout(){
    const onSuccess=()=>{
        console.log("log out successfull!");
        sessionStorage.clear();
        window.location.reload();
    }
    return(
        <div id="signOutButton">
        <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
                />

        </div>
    )
}
export default Logout;