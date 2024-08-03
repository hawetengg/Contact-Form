import {useForm} from 'react-hook-form';
import {DevTool} from '@hookform/devtools';

let renderCount = 0
type FormValues = {
  username: string
  email: string
  message: string
};

export const ContactForm = () => {
  const form = useForm<FormValues>();
  const {register, control, handleSubmit, formState} = form;
  const {errors} = formState;

  const onSubmit = (data: FormValues) =>{
    console.log('Form submitted')
    alert("Form Submitted Succesfully")
  }
  renderCount++

  return (
    <div className='container'>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
          />

          <p className="error">{errors.username?.message}</p>

          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              required: {
                value : true,
                message: "email is required"
              },
            })}
          />
          <p className='error'>{errors.email?.message}</p>
        </div>

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message", {
            required: {
              value: true,
              message: "message is required",
            },
          })}
        />
        <p className="error">{errors.message?.message}</p>

        <button className="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};






  

