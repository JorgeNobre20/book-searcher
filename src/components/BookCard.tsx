import { Text, Heading, Center, Flex } from "@chakra-ui/react";
import { GiBookmarklet } from "react-icons/gi";

import { BookModel } from "../core/models";

type BookCardProps = {
  data: BookModel;
};

const BookCard = ({ data: book }: BookCardProps) => {
  return (
    <Flex
      paddingY={"1rem"}
      width={"100%"}
      paddingX={"2rem"}
      borderRadius="2px"
      background="gray.300"
      marginBottom={"1rem"}
      alignItems={"center"}
    >
      <Center height={"4rem"} width={"4rem"}>
        <GiBookmarklet size={"4rem"} color="#008bb4" />
      </Center>

      <Flex
        height={"100%"}
        marginLeft="1.2rem"
        marginTop={"1rem"}
        flexDirection={"column"}
      >
        <Heading fontSize={"1.2rem"} color="gray.600">
          {book.title}
        </Heading>
        <Text fontSize={"0.8rem"} marginTop={"0.5rem"}>
          <strong>Autor:</strong> {book.author}
        </Text>
        <Text fontSize={"0.8rem"}>
          <strong>Link:</strong>{" "}
          <a target={"_blank"} href={book.url} rel="noreferrer">
            {book.url}
          </a>
        </Text>
      </Flex>
    </Flex>
  );
};

export { BookCard };
