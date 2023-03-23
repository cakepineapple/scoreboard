import React, { useState } from "react";

import {
  Flex,
  Spacer,
  Text,
  Center,
  Circle,
  Divider,
  Box,
  Badge,
} from "@chakra-ui/react";

const Scoreboard = ({ sortedData, setData }) => {
  return (
    <>
      {sortedData.slice(0, 8).map((person, index) => {
        return (
          <React.Fragment key={person.id}>
            <Flex margin="8px" align="center">
              <Circle
                bg={
                  index === 0
                    ? "#E7BF5F"
                    : index === 1
                    ? "#A3A3A3"
                    : index === 2
                    ? "#B85A24"
                    : "blue.200"
                }
                width="45px"
                height="45px"
                color="white"
              >
                <Center>
                  <Text as="b">{index + 1}</Text>
                </Center>
              </Circle>
              <Center ml="15px">
                <Text as={index <= 2 ? "b" : ""}>{person.name}</Text>
              </Center>

              <Badge
                colorScheme="red"
                h="20px"
                as={Center}
                opacity="0"
                ml="10px"
                _hover={{ opacity: 1, cursor: "pointer" }}
                onClick={() => {
                  let newData = sortedData.filter(
                    (item) => item.id !== person.id
                  );
                  setData(newData);
                }}
              >
                Remove
              </Badge>

              <Spacer />
              <Center>
                <Text as="b">{person.score}</Text>
              </Center>
            </Flex>
            <Divider />
          </React.Fragment>
        );
      })}
    </>
  );
};
export default Scoreboard;
