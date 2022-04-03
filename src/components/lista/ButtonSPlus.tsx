import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { memo, useState } from "react";
import { FiCheck, FiHelpCircle } from "react-icons/fi";
import Popup from "reactjs-popup";

type ButtonSPlusProps = {
  description: string;
};

const ButtonSPlus: React.FC<ButtonSPlusProps> = ({ description }) => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState("12");

  const toggleOpen = () => {
    setOpened(!opened);
  };

  return (
    <Stack
      backgroundColor="white"
      borderRadius="2xl"
      px="2"
      py="3"
      cursor="pointer"
      transition="all .3s ease-out"
    >
      <HStack justifyContent="space-between">
        <Text color="secondary" fontWeight="bold" fontSize="lg" ml="2">
          Adicionar S.Plus
        </Text>

        <HStack>
          <Popup
            trigger={() => (
              <Button
                background="none"
                _hover={{ background: "none" }}
                _active={{ background: "none" }}
                p="0"
                mr="-2"
              >
                <FiHelpCircle color="#194F69" size={26} />
              </Button>
            )}
            on={["hover", "focus"]}
            position="top center"
            closeOnDocumentClick
            offsetY={-3}
            offsetX={10}
            arrowStyle={{
              color: "#E1E8F0",
            }}
          >
            <Stack
              background="#E1E8F0"
              px="6"
              py="4"
              borderRadius="2xl"
              shadow="2xl"
              maxWidth={400}
            >
              <Text color="secondary" fontSize="xl" fontWeight="bold">
                O que é o Token?
              </Text>
              <Text color="secondary" my="4">
                Nunc id justo eget lacus pulvinar iaculis sit amet a felis.
                Vivamus vitae bibendum nibh, ac tristique urna. Quisque ac est
                vitae arcu interdum dapibus id nec justo.
              </Text>
            </Stack>
          </Popup>

          <Button
            position="relative"
            backgroundColor="transparent"
            shadow="none"
            variant="primary"
            p="0"
            zIndex={0}
            onClick={toggleOpen}
            _hover={{
              background: "none",
            }}
            _after={{
              content: '""',
              position: "absolute",
              backgroundColor: opened ? "#35B1A7" : "#FFF",
              border: "3px solid #194F69",
              width: 29,
              height: 29,
              borderRadius: 8,
              zIndex: -1,
            }}
          >
            {opened && <FiCheck color="#FFF" size={21} />}
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default memo(ButtonSPlus);