import { BookModel } from "../models";

export interface IBookService {
  searchByTitle(searchText: string): Promise<BookModel[]>;
}
