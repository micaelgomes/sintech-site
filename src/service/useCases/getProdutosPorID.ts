import api from "../api";

export type ProdutoType = {
  id: number;
  subcategoria_id: number;
  nome: string;
  descricao: string;
  image: string;
  validades: any;
};

export const getProdutosPorID = async (id: number): Promise<ProdutoType[]> => {
  try {
    const { data } = await api.get(`subcategorias/${id}/produtos`);

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("Erro na busca do pedido");
  }
};
