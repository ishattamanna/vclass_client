import React from 'react';
import TextField from '../../../../tools/inputs/TextField';
import authBanner from '../../../../assets/auth/authBanner.png';
import Button from '../../../../tools/buttons/Button';
import { Link } from 'react-router-dom';
import IconButton from '../../../../tools/buttons/IconButton';
import IconOutlineButton from '../../../../tools/buttons/IconOutlineButton';
import googleIcon from '../../../../assets/auth/googleIcon.png';
import facebookIcon from '../../../../assets/auth/facebookIcon.png';

const SignIn = () => {
    return (
        <div>
            <div className="hero min-h-screen w-full">
                <div className="hero-content flex-col lg:flex-row-reverse w-full">
                    <div className="text-center lg:text-left lg:w=[50%]">
                        <img className="w full" src={authBanner} alt='' />
                    </div>
                    <div className="card shadow-2xl bg-base-100 lg:w=[50%]">
                        <div className='flex flex-col lg:flex-row items-center lg:items-start'>

                            <div className='px-5 lg:pt-15'>
                                <IconButton className={'my-5 w-[250px]'}>
                                    <img className="w-6 h-6" src={googleIcon} alt="" />
                                    Sign In With Google
                                </IconButton>
                                <IconOutlineButton className={'my-5 w-[250px]'}>
                                    <img className="w-6 h-6" src={facebookIcon} alt="" />
                                    Sign In With Facebook
                                </IconOutlineButton>
                            </div>
                            <form action=''>
                                <div className="card-body w-full">

                                    <div className="form-contro w-full">
                                        <label className="label">
                                            <span className="label-text font-bold">Email</span>
                                        </label>
                                        <TextField required={true}
                                            type={"email"}
                                            name={"email"}
                                            placeholder={"Email"} />
                                        
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <TextField type={'Password'}
                                            name={"Password"} required={true} placeholder={"Password"} />
                                            <button to={"/signin"} className="btn btn-link normal-case text-start">
                                            Forgot Password ?
                                        </button>
                                    </div>

                                    <div className="form-control mt-6">
                                        <Button type={'Submit'}>Sign In</Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <Link to={"/signup"} className="btn btn-link normal-case">
                            Doesn't have an account ?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;