import { auth } from "../firebase";
import { removeCookie } from "../cookie";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



export const logout=()=>{
    signOut(auth);
    removeCookie("user_email");
    removeCookie("user_pic");
    removeCookie("user_nickname")
  }
