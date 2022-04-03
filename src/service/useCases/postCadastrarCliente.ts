import api from "../api";

export const postCadastrarCliente = async () => {
  try {
    const response = await api.get("/produto");

    console.log(response.data);
  } catch (error) {
    console.error(error);

    throw new Error("Erro na busca do pedido");
  }
};
