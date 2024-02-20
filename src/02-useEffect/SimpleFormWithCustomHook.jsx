import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {
  
  const { 
    formState,
    onInputChange,
    onResetForm,
    username,
    email,
    password 
  } = useForm({
    username: '',
    email: '',
    password: ''
  });

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr/>
      <input
        type="text" 
        name="username" 
        placeholder="Nombre Usuario" 
        className="form-control"
        value={ username }
        onChange={ onInputChange }
      />
      <input
        type="email" 
        name="email" 
        placeholder="username@gmail.com" 
        className="form-control mt-3"
        value={ email }
        onChange={ onInputChange }
      />
      <input
        type="password" 
        name="password" 
        placeholder="Contraseña" 
        className="form-control mt-3"
        value={ password }
        onChange={ onInputChange }
      />
      <button
        className="btn btn-primary mt-4"
        onClick={ onResetForm }>Borrar
      </button>
    </>
  )
}
