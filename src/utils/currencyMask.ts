export const currencyMask = (value: number) => {
  const precoComMask = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return precoComMask;
};
