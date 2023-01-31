import { BookMapper } from "../core/data-mapper";
import { BookModel } from "../core/models";
import {
  IBookService,
  IHttpClientService,
  QueryParams,
} from "../core/services";
import { httpClientService } from "./HttpClient";

export type BookResponseType = {
  url: string;
  title: string;
  author: string;
  objectID: string;
};

export type GetBooksResponseType = {
  hits: BookResponseType[];
};

class BookService implements IBookService {
  private readonly httpClientService: IHttpClientService;

  constructor(httpClientService: IHttpClientService) {
    this.httpClientService = httpClientService;
  }

  async searchByTitle(searchText: string): Promise<BookModel[]> {
    const queryParams: QueryParams = {
      query: searchText,
    };

    const booksReponse = await this.httpClientService.get<GetBooksResponseType>(
      "/search",
      queryParams
    );

    const mappedBooks = BookMapper.mapResponseCollectionToModelCollection(
      booksReponse.hits
    );

    return mappedBooks;
  }
}

const bookService: IBookService = new BookService(httpClientService);
export { bookService };
