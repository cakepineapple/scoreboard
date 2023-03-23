import {
  FormControl,
  FormLabel,
  Input,
  Divider,
  Flex,
  Center,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ setData, data }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");
  return (
    <FormControl as={Flex} flexDirection="column" justifyContent="center">
      <FormLabel>Name</FormLabel>
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Divider />
      <FormLabel>Score</FormLabel>
      <Input
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <Button
        mt="20px"
        onClick={() => {
          setData([...data, { name: name, score: score, id: uuid() }]);
          setName("");
          setScore("");
        }}
      >
        Add
      </Button>
      <Button
        mt="20px"
        onClick={() => {
          localStorage.removeItem("cookie");
          setData([]);
        }}
        colorScheme="red"
        opacity="0"
        _hover={{ opacity: 1 }}
      >
        DELETE ALL ENTRIES!
      </Button>
    </FormControl>
  );
};
export default Form;
