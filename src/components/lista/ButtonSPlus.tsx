import { Box, Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { FiCheck, FiHelpCircle } from "react-icons/fi";
import Popup from "reactjs-popup";
import { useProduto } from "./context/produto";

type ButtonSPlusProps = {
  description: string;
};

const ButtonSPlus: React.FC<ButtonSPlusProps> = ({ description }) => {
  const [checked, setChecked] = useState(false);
  const [info, setInfo] = useState("");

  const { setProdutoSelecionado, produtoSelecionado } = useProduto();

  const toggleCheck = () => {
    setChecked(!checked);
  };

  const selectSPlus = () => {
    setProdutoSelecionado({
      ...produtoSelecionado,
      splus: checked,
    });
  };

  useEffect(() => {
    selectSPlus();
  }, [checked]);

  useEffect(() => {
    console.log("splus", produtoSelecionado.splus);

    const info =
      produtoSelecionado.splus || produtoSelecionado.splus === undefined
        ? produtoSelecionado.midia?.splus.filter((s) => s.is_splus === true)[0]
            ?.info_plus
        : produtoSelecionado.midia?.splus.filter((s) => s.is_splus === false)[0]
            ?.info_plus;
    setInfo(info);
  }, [produtoSelecionado]);

  return (
    <Stack
      w="100%"
      backgroundColor="white"
      borderRadius="2xl"
      px="2"
      py="3"
      cursor="pointer"
      transition="all .3s ease-out"
      shadow="base"
      marginBottom="40px !important"
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
                O que é o S.Plus?
              </Text>
              <Text color="secondary" my="4">
                {info
                  ? info
                  : "Escolha uma Mídia para entender como o S.Plus funciona"}
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
            onClick={toggleCheck}
            _hover={{
              background: "none",
            }}
            _after={{
              content: '""',
              position: "absolute",
              backgroundColor: checked ? "#35B1A7" : "#FFF",
              border: "3px solid #194F69",
              width: 29,
              height: 29,
              borderRadius: 8,
              zIndex: -1,
            }}
          >
            {checked && <FiCheck color="#FFF" size={21} />}
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
};

export default memo(ButtonSPlus);
