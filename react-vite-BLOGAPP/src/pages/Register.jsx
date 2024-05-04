import Input from "@/components/Input.jsx";
import axios from '@/helper/axios.js';
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "@/features/authSlice.js";

const Field = ({label, id, name, type, required}) => {
    return (
        <div className='flex flex-col'>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div>
                <Input
                    id={id}
                    name={name}
                    type={type}
                    required={required}
                />
            </div>
        </div>
    )
}

const Register = () => {

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        const {target} = e;
        const registerData = {
            "username": target.username.value,
            "firstName": target.firstname.value,
            "lastName": target.lastname.value,
            "email": target.email.value,
            "image": target.imagelink.value,
            "city": target.city.value,
            "bio": target.bio.value,
            "password": target.password.value,
            "password2": target.password2.value
        }

        console.log('registerData', registerData);

        const response = await axios.post('/users', registerData).catch(err => {
            console.log('err', err);
        });
        console.log('response', response);
        dispatch(setToken(response.data.token));
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={onSubmit} method="POST">
                        <Field label='User name *' name='username' id='username' type='text' required/>
                        <Field label='First name *' name='firstname' id='firstname' type='text' required/>
                        <Field label='Last name *' name='lastname' id='lastname' type='text' required/>
                        <Field label='Email Address *' name='email' id='email' type='email' required/>
                        <Field label='Image Link' name='imagelink' id='imagelink' type='text'/>
                        <Field label='City' name='city' id='city' type='text'/>
                        <Field label='Bio' name='bio' id='bio' type='text'/>
                        <Field label='Password *' name='password' id='password' type='password' required/>
                        <Field label='Re-Password *' name='password2' id='password2' type='password' required/>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-center text-sm text-gray-500">
                        Already have an account?{' '}
                        <a href="/signin" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
