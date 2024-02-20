import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: 'vegeta',
    email: 'vegeta@gmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {

    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });

  };

  useEffect(() => {
    //console.log('useEffect called!');
  }, []);

  useEffect(() => {
    //console.log('formState changed!');
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
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
      {
        (username === 'vegeta') && <Message/>
      }
    </>
  )
}
