import { ProdutoType } from "../useCases/getListaProdutos";

export const getListaProdutosPF = (): ProdutoType[] => {
  const data = [
    {
      id: 1,
      categoria_id: 1,
      rotulo: "e-CPF",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
    {
      id: 2,
      categoria_id: 1,
      rotulo: "BIRD",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
    {
      id: 3,
      categoria_id: 1,
      rotulo: "OAB",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
    {
      id: 4,
      categoria_id: 1,
      rotulo: "CRM",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
    {
      id: 5,
      categoria_id: 1,
      rotulo: "CRC",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
  ];

  return data;
};

export const getListaProdutosPJ = async (): Promise<ProdutoType[]> => {
  const data = [
    {
      id: 6,
      categoria_id: 2,
      rotulo: "e-CNPJ",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
    {
      id: 7,
      categoria_id: 2,
      rotulo: "NFE",
      descricao: null,
      resumo: null,
      etapas: null,
      normas: null,
    },
  ];

  return data;
};
