import { page } from "../hooks";

export class CategoryPage{
  tittleCategory= page.getByRole('heading', { name: 'Tipos de categorías' })

  //const
  PAGE = (number: string) => `//a[contains(text(),"${number}")]`;
  CATEGORY_NAME = (name: string) => `//tr[last()]//td[contains(text(), "${name}")]`;

}
