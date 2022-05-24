import api from "../api";

export interface ProdutoType {
  id: number;
  categoria_id: number;
  rotulo: string;
  descricao: string;
  resumo: string;
  etapas: string;
  normas: string;
}

export const getListaProdutosPF = async (): Promise<ProdutoType[]> => {
  try {
    const response = await api.get("/subcategorias/1/produtos");

    return [
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
  } catch (error) {
    console.error(error);

    // throw new Error("Erro na busca de produtos - PF");
  }
};

export const getListaProdutosPJ = async (): Promise<ProdutoType[]> => {
  try {
    const response = await api.get("/subcategorias/2/produtos");

    return [
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
  } catch (error) {
    console.error(error);

    // throw new Error("Erro na busca de produtos - PJ");
  }
};
