import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { SubcategoriaType } from "../../../service/useCases/getListaProdutos";
import {
  getProdutosPorID,
  ProdutoType,
} from "../../../service/useCases/getProdutosPorID";

interface ProdutoInfoMontado {
  variacaoProduto: {
    id: number;
    nome: string;
  };
  tipoAtendimento: {
    slug: string;
    nome: string;
  };
  validade: {
    id: number;
    rotulo: string;
  };
  midia: {
    id: number;
    rotulo: string;
  };
  splus: boolean;
}

interface ProdutoData {
  label: string;
  currentSubcategoria: SubcategoriaType;
  setCurrentSubcategoria: Dispatch<SetStateAction<SubcategoriaType>>;
  validades: any;
  setValidades: Dispatch<SetStateAction<any>>;
  midias: any;
  setMidias: Dispatch<SetStateAction<any>>;
  produtoSelecionado: ProdutoInfoMontado;
  setProdutoSelecionado: Dispatch<SetStateAction<ProdutoInfoMontado>>;
  produtos: ProdutoType[];
  setProdutos: Dispatch<SetStateAction<ProdutoType[]>>;
  getInfosProduto: (subcategoria: SubcategoriaType) => Promise<void>;
  statusPodeComprar: boolean;
  getLinkParaComprar: () => void;
  setResetCompra: Dispatch<SetStateAction<boolean>>;
  preco: number;
}

const ProdutoContext = createContext<ProdutoData>({} as ProdutoData);

const ProdutoProvider: React.FC = ({ children }) => {
  const [currentSubcategoria, setCurrentSubcategoria] =
    useState<SubcategoriaType>({} as SubcategoriaType);
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<ProdutoInfoMontado>({} as ProdutoInfoMontado);

  const [produtos, setProdutos] = useState([]);
  const [validades, setValidades] = useState([]);
  const [midias, setMidias] = useState([]);
  const [label, setLabel] = useState("");

  const [statusPodeComprar, setStatusPodeComprar] = useState(false);
  const [resetCompra, setResetCompra] = useState(false);
  const [preco, setPreco] = useState(0);

  const getInfosProduto = async (subcategoria: SubcategoriaType) => {
    setLabel(subcategoria.rotulo);
    const infos = await getProdutosPorID(subcategoria.id);

    setProdutos(infos);
  };

  // Tem que fazer o inverso pra desabiltar quando mudar o produto
  useEffect(() => {
    const tudoPreenchido =
      produtoSelecionado.variacaoProduto &&
      produtoSelecionado.tipoAtendimento &&
      produtoSelecionado.validade &&
      produtoSelecionado.midia;

    if (tudoPreenchido) {
      setStatusPodeComprar(true);
    }

    getPrecoProduto();
  }, [produtoSelecionado]);

  // useEffect(() => {
  //   if (resetCompra) {
  //     setProdutoSelecionado({
  //       ...produtoSelecionado,
  //       midia: {} as any,
  //       validade: {} as any,
  //     });
  //   }
  // }, [resetCompra]);

  const getLinkParaComprar = () => {
    const hasSPlus = produtoSelecionado.splus || false;

    try {
      const midia = midias.find(
        (midia) => midia.id === produtoSelecionado.midia.id
      );

      const links = midia?.splus.find((splus) => splus.is_splus === hasSPlus);
      const linkToRedirect = links[produtoSelecionado.tipoAtendimento.slug];

      window.open(linkToRedirect, "_blank");
    } catch (err) {
      throw new Error("Não foi possível recuperar o link");
    }
  };

  const getPrecoProduto = () => {
    const hasSPlus = produtoSelecionado.splus || false;

    const midia = midias.find(
      (midia) => midia.id === produtoSelecionado.midia?.id
    );

    if (midia) {
      const links = midia?.splus.find((splus) => splus.is_splus === hasSPlus);

      if (links) {
        const newPreco = Number(links.preco);
        setPreco(newPreco);
      }
    }
  };

  const valuesInContext = useMemo(
    () => ({
      label,
      currentSubcategoria,
      setCurrentSubcategoria,
      validades,
      setValidades,
      midias,
      setMidias,
      produtoSelecionado,
      setProdutoSelecionado,
      produtos,
      setProdutos,
      getInfosProduto,
      statusPodeComprar,
      getLinkParaComprar,
      setResetCompra,
      preco,
    }),
    [
      label,
      currentSubcategoria,
      setCurrentSubcategoria,
      validades,
      setValidades,
      midias,
      setMidias,
      produtoSelecionado,
      setProdutoSelecionado,
      produtos,
      setProdutos,
      getInfosProduto,
      statusPodeComprar,
      getLinkParaComprar,
      setResetCompra,
      preco,
    ]
  );

  return (
    <ProdutoContext.Provider value={valuesInContext}>
      {children}
    </ProdutoContext.Provider>
  );
};

const useProduto = (): ProdutoData => {
  const context = useContext(ProdutoContext);

  if (!context) throw new Error("useProduto must be used in sidebar context");

  return context;
};

export { ProdutoProvider, useProduto };
