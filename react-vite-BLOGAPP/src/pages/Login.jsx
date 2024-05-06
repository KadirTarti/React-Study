import axios from '../helper/axios';
import Input from "@/components/Input.jsx";
import { useDispatch } from 'react-redux';
import {setToken, setCurrentUser} from "@/features/authSlice.js";
import { useNavigate } from 'react-router-dom';

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


const Login = () => {
    
    const navigate = useNavigate()

    const dispatch = useDispatch();

    const onSubmit = async (e) => {
        e.preventDefault();
        const {target} = e;
        const loginData = {
            "username": target.username.value,
            "password": target.password.value,
        }

        console.log('loginData', loginData);

        try {
            const response = await axios.post('/auth/login', loginData);
            console.log('response', response);
            // Yanıtın data özelliğinden token'i alıyoruz
            if (response.data && response.data.token) {
                dispatch(setToken(response.data.token));
                dispatch(setCurrentUser(response.data.user));
                navigate('/dashboard')
            } else {
                console.error('Token bulunamadı:', response);
            }
        } catch (err) {
            console.error('API İsteği Sırasında Hata:', err);
        }
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
                        <Field label='Password *' name='password' id='password' type='password' required/>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-center text-sm text-gray-500">
                        Already have not an account?{' '}
                        <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login