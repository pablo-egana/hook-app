import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en <LoginPage />', () => {

  const user = {
    id: 123,
    name: 'Boris',
    email: 'boris@gmail.com'
  };

  test('debe de mostrar el componente sin el usuario', () => {
    
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');

  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => {

    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(user);

  });

});
