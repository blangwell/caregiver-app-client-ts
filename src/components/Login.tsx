import { useForm } from "react-hook-form";

interface LoginFormData {
  email: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (formData: LoginFormData):void => console.log(formData)

  console.log(`email: ${watch("email")}`)
  console.log(`password: ${watch("password")}`)

  return (
    <div>
      <h1>Login</h1>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <input 
          className="auth-form__text" 
          placeholder="email" 
          type="text" 
          {...register("email", {required: true, pattern: /^\S+@\S+$/})}
        />
        <span className="auth-form__error">
          {errors.email && "Please enter a valid email"}
        </span>

        <input 
          className="auth-form__text" 
          placeholder="password" 
          type="password" 
          {...register("password", {required: true, minLength: 8})}
        />
        <span className="auth-form__error">
          {errors.password && "Password is required"}
        </span>
        
        <input 
          className="auth-form__submit" 
          type="submit" 
          value="Login"
        />
      </form>
    </div>
  )
}