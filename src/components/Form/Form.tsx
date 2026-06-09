import { useForm, type SubmitHandler } from "react-hook-form";
import { login } from "../../services/api.service";

type FormProps ={
    username: string;
    password: string;
    expiresInMins?: number;
}
// Оголошує компонент форми. Через деструктуризацію він приймає пропси username та password типу FormProps
const Form = ({username, password}: FormProps) => {
    // Викликає хук useForm, передаючи йому тип FormProps
    const { handleSubmit, // Обгортка над функцією відправки.
        register, // Функція, яка зв'язує (bind) реальні інпути в JSX з логікою React Hook Form.
        watch, // Метод для відстеження значень в інпутах у реальному часі
        formState: { errors, isSubmitting } // Об'єкт поточного стану форми. errors містить помилки валідації для кожного поля, а isSubmitting стає true, поки відправляється асинхронний запит.
    } = useForm<FormProps>({
      defaultValues: { username, password }, // Встановлює початкові значення для полів форми, які прийшли з пропсів.
    });

    // Функція onSubmit, яка виконається тільки якщо валідація форми пройшла успішно.
   const onSubmit: SubmitHandler<FormProps> = async values => {
        try {
           await login({
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