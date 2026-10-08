import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { register, handleSubmit } = useForm();

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
        </label>

        <br />
        <br />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginPage;
