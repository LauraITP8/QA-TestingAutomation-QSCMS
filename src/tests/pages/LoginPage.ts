import { page } from "../hooks";

/**
 * Class LoginPage represents the elements that a the page has.
 */
export class LoginPage{
  authButton= page.getByRole('button', { name: 'Autenticar' })
  remember= page.getByText('Recordarme', { exact: true })
  inputEmail=page.getByPlaceholder('Usuario o correo electrónico')
  inputPassword=page.getByPlaceholder('Contraseña')
}