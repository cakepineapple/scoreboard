import {
  Container,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Scoreboard from "./Scoreboard";
import Form from "./Form";

const bgImgLink =
  "https://th.bing.com/th/id/R.a0425b4d3a77461b74ea604295cedb65?rik=AJIKmp7wWu%2fTGQ&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-8%2fFibonacci-Sequence-High-Definition-Wallpaper-24778.png&ehk=1vUSctXl7NkS24GTJ5cqhWRyB8VZh96bGi5CwJDR3VA%3d&risl=&pid=ImgRaw&r=0";

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
      bgImage={bgImgLink}
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
              Scoreboard 🏆
            </Heading>
          </CardHeader>
          <CardBody>
            {view ? (
              <Scoreboard sortedData={sortedData} setData={setData} />
            ) : (
              <Form setData={setData} data={data} />
            )}
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
};

export default App;
