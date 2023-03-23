import {
  Container,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Flex,
  Image,
  CardFooter,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Form from "./Form";
import config from "./config";

export const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("cookie")) || []
  );
  const [sortedData, setSortedData] = useState([]);
  const [view, setView] = useState(true);

  useEffect(() => {
    localStorage.setItem("cookie", JSON.stringify(data));
    const sortData = (arr) => {
      return [...arr].sort((a, b) => b.score - a.score);
    };
    setSortedData(sortData(data));
  }, [data]);
  return (
    <Box
      bgImage={config.bg}
      bgRepeat="no-repeat"
      bgSize="cover"
      m="0"
      minH="100vh"
      as={Flex}
      alignItems="center"
    >
      <Container w="500px">
        <Card minH="90vh">
          <CardHeader onClick={() => setView(!view)}>
            <Heading textAlign="center" _hover={{ cursor: "pointer" }}>
              {config.heading}
            </Heading>
          </CardHeader>
          <CardBody>
            {view ? (
              <Scoreboard sortedData={sortedData} setData={setData} />
            ) : (
              <Form setData={setData} data={data} />
            )}
          </CardBody>
          <CardFooter as={Flex} justifyContent="center" gap="30px" mt="0">
            <Image src="./images/moramaths.png" height="40px" />
            <Image src="./images/mday.png" height="40px" />
          </CardFooter>
        </Card>
      </Container>
    </Box>
  );
};

export default App;
