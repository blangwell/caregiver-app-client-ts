import { useRef } from "react";
import { useForm } from "react-hook-form";

interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (formData: SignupFormData):void => console.log(formData);
  
  const password = useRef({});
  // watch to see if password is empty string
  password.current = watch("password", "");

  return (
    <div>
      <h1>Signup</h1>
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <input 
          className="auth-form__text" 
          placeholder="email" 
          type="text" 
          {...register("email", {
            required: true, 
            pattern: {
              value: /^\S+@\S+$/,
              message: "Please enter a valid email"
            }
          })}
        />
        <span className="auth-form__error">
          {errors.email && errors.email.message}
        </span>

        <input 
          className="auth-form__text" 
          placeholder="password" 
          type="password" 
          {...register("password", {
            required: "Password is required", 
            minLength: {
              value: 8, 
              message: "Password is not long enough"
          }
          })}
        />
        <span className="auth-form__error">
          {errors.password && errors.password.message}
        </span>
        <input 
          className="auth-form__text" 
          placeholder="confirm password" 
          type="password" 
          {...register("confirmPassword", {
            required: true, 
            validate: input => input === password.current || "The passwords must match"
          })}
        />
        <span className="auth-form__error">
          {errors.confirmPassword && errors.confirmPassword.message}
        </span>
        
        <input 
          className="auth-form__submit" 
          type="submit" 
          value="Login"
        />
      </form>
    </div>
  )
};