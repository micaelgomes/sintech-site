import api from "../api";

export interface SubcategoriaType {
  id: number;
  categoria_id: number;
  rotulo: string;
  descricao: string;
  resumo: string;
  etapas: string;
  normas: string;
}

export const getSubcategoria = async (
  id: number
): Promise<SubcategoriaType> => {
  try {
    const { data } = await api.get(`/subcategorias/${id}`);

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("Erro na busca de subcategorias");
  }
};
