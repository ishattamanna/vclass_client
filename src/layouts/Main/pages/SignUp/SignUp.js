import React from 'react';
import authBanner from '../../../../assets/auth/authBanner.png'
import profileImage from '../../../../assets/auth/profileImage.png'
import TextField from '../../../../tools/inputs/TextField';
import Button from '../../../../tools/buttons/Button';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
       <div className="hero min-h-screen w-full">
  <div className="hero-content flex-col lg:flex-row-reverse w-full">
    <div className="text-center lg:text-left lg:w=[50%]">
      <img className="w full" src={authBanner} alt='' />
    </div>
    <div className="card shadow-2xl bg-base-100 lg:w=[50%]">
     <form className='flex flex-col lg:flex-row items-center' action=''>
     <img className="lg:w-[300px] lg:h-[300px]" 
     src={profileImage} alt='' />
     <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <TextField required={true}
           type={"text"}
           name={"UserName"}
           placeholder={"Your Name"}/>
        </div>
        <div className="form-contro w-full">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <TextField required={true} 
          type={"email"} 
          name={"email"}
          placeholder={"Email"}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
        <TextField type={'Password'}
         name={"Password"} required={true} placeholder={"Password"}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Confrim Password</span>
          </label>
        <TextField type={'Password'}
         name={"C_Password"} required={true}
         placeholder={"Confrim Password"}/>
        </div>
        <div className="form-control mt-6">
            <Button type={'Submit'}>Create Account</Button>
        </div>
      </div>
     </form>
     <Link to={"/signin"} className="btn btn-Link normal-case">
     Already have an account ?
     </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;