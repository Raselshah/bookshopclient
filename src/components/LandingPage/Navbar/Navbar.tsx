import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

export default function Navbar() {
 
  const [user, loading] = useAuthState(auth);


const navigate = useNavigate()
  const handleSignOut = async ()  => {
   await signOut(auth);
  }

  const handleLogin =  () => {
    // router.push("/register");
    navigate("/register");

  }

  if(loading){
    return <p>Loading....</p>
  }
  
  return (
    <div className="bg-bg-white border-b border-bg-primary h-[50px] xl:h-[80px] flex justify-center items-center">
      <div className="navbar flex justify-between items-center md:max-w-[736px] max-w-[343px] xl:max-w-[1100px] mx-auto">
  <div className="w-[40%] xl:w-[70%]">
    <a  className=" normal-case text-xl">Book Shop</a>
  </div>
  
  <div className={`w-[30%] flex gap-x-[5px] justify-end  xl:justify-between`}>

   
   
    <div className="flex  xl:justify-start items-center gap-x-[20px]">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full  border">
          <p className="text-base16 text-center flex justify-center items-center h-full">{user?.displayName?.slice(0,2)}</p>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3  p-2 shadow menu menu-sm dropdown-content bg-bg-primary z-30 rounded-box w-52 ">
        <li>
          <a className="justify-between">
            Profile
            
          </a>
        </li>
       
        <li>
        {/* <Link to={`/register`}>Logout</Link> */}
        {
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          user?.uid ? <button onClick={() => handleSignOut()}>
          <p>Logout</p>
        </button> : <button onClick={() => handleLogin()}> 
          <p>Login</p>
        </button>
        }
        
        
        </li>
      </ul>
    </div>
    <div className="cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[25px] h-[25px]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>

    </div>
    </div>
  </div>
 

  
</div>
    </div>
  )
}
