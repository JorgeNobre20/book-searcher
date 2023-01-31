import { BookResponseType } from "../../services";
import { BookModel } from "../models";

export class BookMapper {
  static mapResponseCollectionToModelCollection(
    booksResponse: BookResponseType[]
  ): BookModel[] {
    return booksResponse.map((bookResponse) => {
      return this.mapResponseToModel(bookResponse);
    });
  }

  static mapResponseToModel(bookResponse: BookResponseType): BookModel {
    return {
      id: bookResponse.objectID,
      title: bookResponse.title,
      author: bookResponse.author,
      url: bookResponse.url,
    };
  }
}
