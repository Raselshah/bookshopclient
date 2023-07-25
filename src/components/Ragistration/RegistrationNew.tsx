import { useState } from 'react';
import {
    useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile
} from "react-firebase-hooks/auth";

import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
interface IFormInputs {
    firstName?: string;
    lastName?: string;
    email:string;
    password:string;
    confirmPassword?:string
}



const RegistrationNew = () => {

    // const { register, handleSubmit } = useForm<IFormInputs>()
    const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, userLogin] =
    useSignInWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInputs>();
    const [loginSign, setLoginSign] = useState("login");
    const onSubmit: SubmitHandler<IFormInputs> =async (data) => {
        if(loginSign === "signup"){
            await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: (data.firstName) });
        }else{
           await signInWithEmailAndPassword(data.email, data.password);
        }
        
      };

    
      console.log("userLogin",userLogin)

   

    const navigate = useNavigate();
    if(user?.user?.uid){
        navigate("/")
    } else if (userLogin?.user?.uid){
        navigate("/")
    }
    


    return (
        <div className="h-full xl:max-w-[1100px] md:max-w-[736px] max-w-[343px]  mx-auto">
            {/* <div className="h-[100vh] w-full flex flex-row justify-start items-start relative">
            <div className=" basis-3/12 h-full z-10  w-full bg-btn-secondary"></div>
            <div className=" w-full basis-9/12  z-20 h-full flex justify-center items-center">
            <div className="w-full h-[500px]  flex justify-between items-center">
                <div className="w-full h-full bg-bg-warning"></div>
                <div className="bg-btn-primary w-full h-full"></div>
            </div>
            </div>
           </div> */}
            {/* <div className="absolute top-[50%]">
            <div className="w-[500px] h-[500px] bg-bg-warning"></div>
           </div> */}
            {/* <div className={`${styles.slide_right} w-[30%] h-full z-10 absolute bg-btn-secondary`}></div> */}
       
    {/* h-screen  mx-[150px]*/}
            <div className="flex justify-center  z-20 items-center mt-[30px]  ">
                <div className="w-full h-full xl:h-[620px]   shadow-2xl z-20 flex xl:flex-row flex-col justify-between items-center">
                    <div className={`w-full h-full bg-bg-primary xl:block hidden`}>
                      
                        <div data-aos="fade-up"
     data-aos-duration="1500" className={`flex justify-center items-center h-full`}>
                            <div className="flex flex-col justify-center items-center gap-y-[10px]">
                            <div className="w-[200px]">
                                <img className='w-full' src="./ghuddy-logo-white.png" alt="" />
                            </div>
                            <div className="div">
                              <h2 className='text-[26px] lowercase italic text-txt-primary font-semibold'>
                              #Book Shop
                              </h2>
                            </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className=" w-full h-full bg-bg-white px-[16px] xl:px-[50px] py-[50px]">
                        <div className="flex justify-between">
                            <h2 className="text-[36px]">{loginSign === "login" ? "Login" : "Register"}</h2>
                            <div className="flex justify-start">
                                <button onClick={() => setLoginSign("login")} className={`w-[100px] h-[50px] border border-btn-secondary ${loginSign === "login" ? " bg-btn-secondary text-txt-primary" : ""}`}>Login</button>
                                <button onClick={() => setLoginSign("signup")} className={`w-[100px] h-[50px] border border-btn-secondary ${loginSign === "signup" ? " bg-btn-secondary text-txt-primary" : ""}`}>
                                    Register
                                </button>
                            </div>
                        </div>

                    
                        <div className="mt-[40px] ">

                            {/* register area */}
                            {
                                loginSign === "signup" &&  <div >
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-[14px]" >
                                    <div className="flex justify-between items-center gap-x-[24px]">
                                     <div className="w-full">
                                     <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="First Name"
                                            {...register('firstName', { required: true })}
                                        />
                                       <p className='text-btn-red text-base12 mt-[1px]'> {errors.firstName && 'First name is required'}</p>
                                     </div>
                                      <div className="w-full">
                                      <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Last Name"
                                            {...register('lastName', { required: true })}
                                        />
                                        <p className='text-btn-red text-base12 mt-[1px]'>{errors.lastName && 'Last name is required'}</p>
                                      </div>
                                    </div>

                                   
                                    {/* <div className="w-full">
                                     <SingleSelectPhoneTwo
                                        id={'phoneDropdown'}
                                        title={phoneCode}
                                        inputValue={formikRef?.current?.values?.phone || ''}
                                        setTitle={setPhoneCode}
                                        confirmed={confirmed}
                                        showOtpModal={() => {
                                            confirmPhoneWithOtp(formikRef?.current?.values?.phone);
                                        }}
                                        register={true}
                                        dataArray={country}
                                    /> 
                                </div> */}
                                <div className="w-full">
                                      <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Email"
                                            {...register('email', { required: true })}
                                        />
                                        <p className='text-btn-red text-base12 mt-[1px]'>{errors.lastName && 'Eamil is required'}</p>
                                      </div>
                                      <div className="w-full">
                                      <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Email"
                                            {...register('email', { required: true })}
                                        />
                                        <p className='text-btn-red text-base12 mt-[1px]'>{errors.lastName && 'Eamil is required'}</p>
                                      </div>

                                      <div className="flex justify-between items-center gap-x-[24px]">
                                     <div className="w-full">
                                     <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Password"
                                            {...register('password', { required: true })}
                                        />
                                       <p className='text-btn-red text-base12 mt-[1px]'> {errors.password && 'password is required'}</p>
                                     </div>
                                      <div className="w-full">
                                      <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Confirm Password"
                                            {...register('confirmPassword', { required: true })}
                                        />
                                        <p className='text-btn-red text-base12 mt-[1px]'>{errors.confirmPassword && 'password not match'}</p>
                                      </div>
                                    </div>


                                    <div className="flex flex-col gap-y-[6px]">
                              <div className="flex justify-start items-start gap-x-[4px]">
                                <div className="w-[20px] h-[20px] border border-btn-secondary"></div>
                              <p className='text-base14 text-txt-primary w-full'>I consent to receive promotional offers. I can withdraw my consent at any given time</p>
                              </div>
                                <p className='text-base12 text-txt-primary'>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
                              </div>

                                    <input value='Register' className='w-full text-bg-primary bg-btn-primary h-[50px]' type="submit" />
                                </form>

                                {/* <input
                                        type="text"
                                        name="firstName"
                                        className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                        placeholder="First Name"
                                    />
                                     <input
                                        type="text"
                                        name="lastName"
                                        className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                        placeholder="Last Name"
                                    /> */}
                            </div>

                            }
                           
                            {/* login Area */}

                            {
                                loginSign === "login" &&   <div >
                                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-[14px]" >
                                  

                                   
                                    {/* <div className="w-full">
                                     <SingleSelectPhoneTwo
                                        id={'phoneDropdown'}
                                        title={phoneCode}
                                        inputValue={formikRef?.current?.values?.phone || ''}
                                        setTitle={setPhoneCode}
                                        confirmed={confirmed}
                                        showOtpModal={() => {
                                            confirmPhoneWithOtp(formikRef?.current?.values?.phone);
                                        }}
                                        register={true}
                                        dataArray={country}
                                    /> 
                                </div> */}
                                <div className="w-full">
                                      <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Email"
                                            {...register('email', { required: true })}
                                        />
                                        <p className='text-btn-red text-base12 mt-[1px]'>{errors.lastName && 'Eamil is required'}</p>
                                      </div>
                                      
                                     
                                     <div className="w-full">
                                     <input
                                            className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                            placeholder="Password"
                                            {...register('password', { required: true })}
                                        />
                                       <p className='text-btn-red text-base12 mt-[1px]'> {errors.password && 'password is required'}</p>
                                     </div>
                                     


                                    <div className="flex flex-col gap-y-[6px]">
                              <p className='text-base14 text-txt-primary'>I consent to receive promotional offers. I can withdraw my consent at any given time</p>
                                <p className='text-base12 text-txt-primary'>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
                              </div>

                                    <input value='Register' className='w-full text-bg-primary bg-btn-primary h-[50px]' type="submit" />
                                </form>

                                {/* <input
                                        type="text"
                                        name="firstName"
                                        className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                        placeholder="First Name"
                                    />
                                     <input
                                        type="text"
                                        name="lastName"
                                        className=" px-[10px] h-[50px] bg-white border shadow-sm border-[#2a220e40] placeholder-[#2a220e40] focus:outline-none focus:border-[#4E90A8] focus:ring-[#4E90A8] block w-full rounded-md sm:text-sm focus:ring-1"
                                        placeholder="Last Name"
                                    /> */}
                            </div>
                            }
                          


                            <div className='flex flex-col gap-x-[4px] mt-[6px]'>
                              
                                <div className="flex gap-x-[3px] mt-[4px] justify-center items-center">
                                <p>{loginSign === "login" ? "Don’t have an account?" : "Already have an account?"}</p>
                                {
                                    loginSign === "login" ? 
                                     <button onClick={() => setLoginSign("signup")}>
                                     <p className='text-txt-secondary'>Register</p>
                                 </button>
                                    : 
                                    <button onClick={() => setLoginSign("login")}>
                                    <p className='text-txt-secondary'>Login</p>
                                </button>
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationNew;
