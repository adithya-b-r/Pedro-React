import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("Your fullName is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords Don't Match").required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Full Name..." {...register("fullName")} /><br />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email..." {...register("email")} /><br />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age..." {...register("age")} /><br />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password..." {...register("password")} /><br />
      <p>{errors.password?.message}</p>
      <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} /><br />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
}