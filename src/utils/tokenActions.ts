


import Cookies from "cookie-universal";
import { jwtDecode } from "jwt-decode";
import { persistor } from "../store/store.ts";


const  cookie = Cookies()

// get token from cookie
export const getToken = (tokenName:string) => {
  return cookie.get(tokenName)
}


// set token in cookie
export const setToken = (tokenName:string ,token:string , durationInMinutes?:any ) => {
  const expiryDate = new Date();
  expiryDate.setMinutes(expiryDate.getMinutes() + durationInMinutes);
  return cookie.set(tokenName , token , {
    secure: true, 
    sameSite: 'strict',
    path: '/',
  })
}

// remove token from cookie
export const removeToken = (tokenName:string) => {
  return cookie.remove(tokenName)
}

// remove all tokens from cookie
export const removeAllTokens = () => {
  cookie.remove('accessToken')
  persistor.purge();
  cookie.remove('persist:root', { path: '/' });
  cookie.removeAll()
}




export const isTokenExpired = (token: string): boolean => {
  try {
    const decoded:any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (error) {
    return true;
  }
};



export const handleLogout = async ()=> {
  try {
    await removeAllTokens()
  }catch(err:any){
    console.log(err)
  }
}