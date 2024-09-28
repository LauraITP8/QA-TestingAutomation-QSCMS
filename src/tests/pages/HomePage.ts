import { page } from "../hooks";

/**
 * Class HomePage represents the elements that a the page has.
 */
export class HomePage {
  verticalChart = page.getByRole('heading', { name: 'Total de contribuciones' })
  categoryPageBtn = page.getByRole('link', { name: 'Tipos de Categorias' })
}