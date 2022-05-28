import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useToast } from "../../../context/toast";

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
  resetCompra: boolean;
  setResetCompra: Dispatch<SetStateAction<boolean>>;
  preco: number;
  setCurrShowed: Dispatch<SetStateAction<number>>;
  currShowed: number;
}

const ProdutoContext = createContext<ProdutoData>({} as ProdutoData);

const ProdutoProvider: React.FC = ({ children }) => {
  const [produtoSelecionado, setProdutoSelecionado] =
    useState<ProdutoInfoMontado>({} as ProdutoInfoMontado);

  const [produtos, setProdutos] = useState([]);
  const [validades, setValidades] = useState([]);
  const [midias, setMidias] = useState([]);
  const [label, setLabel] = useState("");
  const [statusPodeComprar, setStatusPodeComprar] = useState(false);
  const [currShowed, setCurrShowed] = useState(1);
  const [resetCompra, setResetCompra] = useState(false);
  const [preco, setPreco] = useState(0);

  const { addToast } = useToast();

  const getInfosProduto = async (subcategoria: SubcategoriaType) => {
    setProdutos([]);
    setValidades([]);
    setMidias([]);
    setProdutoSelecionado({} as ProdutoInfoMontado);

    const infos = await getProdutosPorID(subcategoria.id);

    setLabel(subcategoria.rotulo);
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
      addToast("error", "Produto sem Link para compra");

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
      resetCompra,
      setResetCompra,
      preco,
      currShowed,
      setCurrShowed,
    }),
    [
      label,
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
      resetCompra,
      setResetCompra,
      preco,
      currShowed,
      setCurrShowed,
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
