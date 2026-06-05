import { useForm, type SubmitHandler } from "react-hook-form";
import { login } from "../../services/api.service";

type FormProps ={
    username: string;
    password: string;
    expiresInMins?: number;
}

const Form = ({username, password}: FormProps) => {
    const { handleSubmit, register, watch, formState: { errors, isSubmitting } } = useForm<FormProps>({
      defaultValues: { username, password },
    });
 
    const onSubmit: SubmitHandler<FormProps> = values => {
        try {
            login({
                username: values.username,
                password: values.password,
                expiresInMins: 1
            })
        } catch (error) {
            console.log(error
            )
        }
    }

    console.log(watch("username", "password"))
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("username", {
          required: "Required",
        })}
      />
      {errors.username && errors.username.message}

      <input
        type="password"
        {...register("password", {
            required: "Required",
        })}
      />
      {errors.password && errors.password.message}

      <button type="submit">Submit</button>
      {isSubmitting && <p>Submitting...</p>}
    </form>
  );
};

export default Form