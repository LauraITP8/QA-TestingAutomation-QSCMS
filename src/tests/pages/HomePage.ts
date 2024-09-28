import { page } from "../hooks";

export class HomePage{
  verticalChart= page.locator('//ngx-charts-bar-vertical//div')
  categoryPageBtn= page.getByRole('link', { name: 'Tipos de Categorias' })
}