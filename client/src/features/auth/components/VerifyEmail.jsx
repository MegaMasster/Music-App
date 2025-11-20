import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

import passwordIcon from "../../../assets/images/password-icon.png"
import AuthAnim from '../../../shared/ui/authAnimation/authAnim'
import useAuthStore from '../../../shared/stores/useAuthStore'

const VerifyEmail = () => {

    const {
        setLoading ,
    } = useAuthStore()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({mode: "onChange"})

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <main className="wrapper">
            <AuthAnim className="flex flex-col justify-evenly w-90 h-80 rounded-2x">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl">Verify email</h1>
                    <div className='flex justify-center items-end h-7 w-30 rounded'>
                        <Link to="/sign-in" className="underline opacity-40
                            hover:text-amber-600 transition-colors b"> 
                            Back to sign in?
                        </Link>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-evenly items-center h-[65%] ">
                    <div className='flex flex-col w-full'>
                        <div className='flex items-center relative w-full 
                            focus-within:translate-x-2 transition-all duration-250'
                        >
                            <img 
                                src={passwordIcon}
                                alt="password icon"
                                className='absolute w-5 h-5 left-4'
                                style={{ filter: 'invert(1)' }}
                            />
                            <input 
                                type="password" 
                                placeholder='Password'
                                className="w-full h-11 pl-12 rounded border border-gray-600 outline-0
                                focus:border-gray-500 transition-all duration-250" 
                                {...register("password" , {
                                    required: "This field is required",
                                    minLength: {
                                        value: 8,
                                        message: "Password is too short"
                                    },
                                    maxLength: {
                                        value: 128,
                                        message: "Password is too long"
                                    }
                                })}
                            />
                    </div>
                    {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                </div>

                    <button
                        type='submit' 
                        className='text-lg w-full h-11 bg-amber-500 rounded 
                        hover:bg-amber-400 hover:translate-x-2 hover:cursor-pointer active:scale-95
                        transition-all duration-250'
                    >
                        Verify
                    </button>
                </form>
            </AuthAnim>
        </main>
    )
}
export default VerifyEmail 