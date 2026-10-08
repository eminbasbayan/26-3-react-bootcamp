import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required('Kullanıcı adı zorunludur!'),
  password: yup
    .string()
    .min(6, 'Parola en az 6 karekterli olmalıdır!')
    .required('Parola zorunludur!'),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username:
          <br />
          <input
            type="text"
            placeholder="Kullanıcı adı giriniz"
            {...register('username')}
            className="border"
          />
          {errors.username && (
            <p className="text-red-400 text-xs">{errors.username.message}</p>
          )}
        </label>
        <br />
        <br />
        <label>
          Password:
          <br />
          <input
            type="password"
            placeholder="Şifre giriniz"
            {...register('password')}
            className="border"
          />
          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password.message}</p>
          )}
        </label>

        <br />
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
