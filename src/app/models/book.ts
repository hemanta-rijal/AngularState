export interface Book {
  id:string,
  title:string,
  author:string,
  publication_year: number,
  genre: string[],
  description: string,
  cover_image: string
}