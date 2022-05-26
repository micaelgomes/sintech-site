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

export const getListaSubcategoriaPF = async (): Promise<SubcategoriaType[]> => {
  try {
    const { data } = await api.get("/categorias/1/subcategorias");

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("Erro na busca de subcategorias - PF");
  }
};

export const getListaSubcategoriaPJ = async (): Promise<SubcategoriaType[]> => {
  try {
    const { data } = await api.get("/categorias/2/subcategorias");

    return data;
  } catch (error) {
    console.error(error);

    throw new Error("Erro na busca de subcategorias - PJ");
  }
};
