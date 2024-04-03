import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {

  const {register} = useAuthContext();

  // const[email, setEmail] = useState('');
  // const[password, setPassword] = useState('');
  // const[firstName, setFirstName] = useState('');
  // const[lastName, setLastName] = useState('');

  const [info, setInfo] = useState({
    email:'',
    password:'',
    firstName:'',
    lastName:''
  })


  const handleChange =(e)=>{
    // console.log(e.target.id);
    setInfo({...info, [e.target.name]:e.target.value})  //setter metodu her zaman asenkron çalışır
    // setInfo({...info, "email":e.target.value})
    // setInfo({...info, "password":e.target.value})
    // setInfo({...info, "firstName":e.target.value})
    // setInfo({...info, "lastName":e.target.value})
  }
  console.log(info);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const {email, password, firstName, lastName} = info;
    register(email, password, `${firstName} ${lastName}`)
  }


  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]">
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              class="peer"
              value={info.firstName}
              onChange= {handleChange}
              placeholder=" "
              required
            />
            <label for="floating_email">First Name</label>
          </div>

          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={info.lastName}
              onChange= {handleChange}
              class="peer"
              placeholder=" "
              required
            />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              name="email"
              id="email"
              type="email"
              value={info.email}
              onChange= {handleChange}
              class="peer"
              placeholder=""
            />
            <label htmlFor="email">Email</label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              name="password"
              id="password"
              class="peer"
              placeholder=" "
              value={info.password}
              onChange= {handleChange}
              type="password"
            />
            <label htmlFor="floating_password">Password</label>
          </div>

          <button className="btn-danger" type="submit">
            Register
          </button>
          <button
            className="btn-danger-bordered flex justify-between"
            type="button"
          >
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
