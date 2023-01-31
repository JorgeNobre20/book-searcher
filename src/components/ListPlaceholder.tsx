import { Heading, Center } from "@chakra-ui/react";

type ListPlaceholderProps = {
  label: string;
};

const ListPlaceholder = ({ label }: ListPlaceholderProps) => {
  return (
    <Center marginTop={"3rem"}>
      <Heading fontSize={"1rem"} color="gray.300">
        {label}
      </Heading>
    </Center>
  );
};

export { ListPlaceholder };
