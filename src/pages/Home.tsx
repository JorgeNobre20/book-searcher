import { ChangeEvent, useState } from "react";
import { Flex, Input, Button, Heading, Center } from "@chakra-ui/react";

import { BookCard, ListPlaceholder } from "../components";
import { BookModel } from "../core/models";
import { bookService } from "../services";

let hasSearched = false;

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  function onChangeSearchText(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  async function onSearch() {
    setIsLoading(true);

    try {
      await trySearch();
    } catch {
      catchSearch();
    } finally {
      setIsLoading(false);
    }
  }

  async function trySearch() {
    hasSearched = true;
    const loadedBooks = await bookService.searchByTitle(searchText);
    setBooks(loadedBooks);
  }

  async function catchSearch() {
    alert("Erro ao buscar livros");
  }

  return (
    <Flex
      justifyContent={"center"}
      minHeight={"100vh"}
      background="gray.900"
      paddingY={"1rem"}
    >
      <Flex flexDirection={"column"} width={"70%"} maxWidth={"700px"}>
        <Center width={"100%"} marginTop={"2rem"} marginBottom={"2rem"}>
          <Heading color={"gray.300"} fontSize={"2rem"}>
            Book Seacher
          </Heading>
        </Center>

        <Flex width={"100%"} marginBottom={"2rem"}>
          <Input
            placeholder="Digite aqui e clique em buscar"
            borderColor={"gray.600"}
            color="white"
            size={"md"}
            fontSize="1rem"
            value={searchText}
            onChange={onChangeSearchText}
          />

          <Button
            colorScheme={"linkedin"}
            height={"100%"}
            minHeight={"0px"}
            paddingX={"2rem"}
            background="gray.600"
            marginLeft={"1rem"}
            onClick={onSearch}
            isLoading={isLoading}
          >
            Buscar
          </Button>
        </Flex>

        {!hasSearched && books.length === 0 && (
          <ListPlaceholder label=" Faça uma busca para poder ver a lista" />
        )}

        {hasSearched && books.length === 0 && !isLoading && (
          <ListPlaceholder label="Nenhum livro encontrado" />
        )}

        {books.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </Flex>
    </Flex>
  );
};

export { Home };
