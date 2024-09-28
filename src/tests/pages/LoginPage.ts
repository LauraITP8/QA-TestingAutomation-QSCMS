import { page } from "../hooks";

export class LoginPage{
  authButton= page.getByRole('button', { name: 'Autenticar' })
  remember= page.locator('#customCheckLogin')
  inputEmail=page.getByPlaceholder('Usuario o correo electrónico')
  inputPassword=page.getByPlaceholder('Contraseña')
}