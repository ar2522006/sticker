import React, {useState} from 'react'
import authService from '../../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {storeLogin} from '../../store/authSlice'
import {Button, Input, Logo} from '../'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(storeLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div>
            <div>
            <div>
                    <span>
                        <Logo width="100%" />
                    </span>
                </div>
                <h2>Sign up to create account</h2>
                <p>
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                    >
                        Sign In
                    </Link>
                </p>
                {error && <p>{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div>
                        <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
                        <Input
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,})}
                        />
                        <Button type="submit">
                            Create Account
                        </Button>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup