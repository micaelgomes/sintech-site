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

export interface ProdutoInfoMontado {
  variacaoProduto: {
    id: number;
    nome: string;
  };
  tipoAtendimento: {
    id: number;
    slug: string;
  };
  validade: {
    id: number;
    rotulo: string;
  };
  midia: {
    id: number;
    rotulo: string;
    link_imagem_midia: string;
    info_midia: string;
    splus: {
      is_splus: boolean;
      info_presencial: string;
      info_videoconferencia: string;
      info_renovacao_online: string;
      info_plus: string;
    }[]
  };
  assinatura?: {
    id: number;
    rotulo: string;
  };
  splus?: boolean;
  info_splus?: string;
}

interface ProdutoData {
  label: string;
  validades: any;
  setValidades: Dispatch<SetStateAction<any>>;
  midias: any;
  setMidias: Dispatch<SetStateAction<any>>;
  assinaturas: any;
  setAssinaturas: Dispatch<SetStateAction<any>>;
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
  const [assinaturas, setAssinaturas] = useState([]);
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
    setAssinaturas([]);
    setProdutoSelecionado({} as ProdutoInfoMontado);

    const infos = await getProdutosPorID(subcategoria.id);

    setLabel(subcategoria.rotulo);
    setProdutos(infos);
  };

  // Tem que fazer o inverso pra desabiltar quando mudar o produto
  useEffect(() => {
    let requisitosPreenchidos =
      typeof produtoSelecionado.variacaoProduto?.nome !== "undefined" &&
      typeof produtoSelecionado.tipoAtendimento?.slug !== "undefined" &&
      typeof produtoSelecionado.validade?.rotulo !== "undefined" &&
      typeof produtoSelecionado.midia?.rotulo !== "undefined";

    if (label === "BIRD") {
      requisitosPreenchidos =
        requisitosPreenchidos &&
        typeof produtoSelecionado.assinatura?.rotulo !== "undefined";
    }

    if (requisitosPreenchidos) {
      setStatusPodeComprar(true);
    } else {
      setStatusPodeComprar(false);
    }

    getPrecoProduto();
  }, [produtoSelecionado]);

  const getLinkParaComprar = () => {
    const hasSPlus = produtoSelecionado.splus || false;
    let linkToRedirect: string;

    try {
      const midia = midias.find(
        (midia) => midia.id === produtoSelecionado.midia.id
      );

      if (midia.assinaturas.length > 0) {
        const assinatura = assinaturas?.find(
          (tmpAssinatura) =>
            tmpAssinatura.id === produtoSelecionado.assinatura?.id
        );

        if (assinatura) {
          linkToRedirect = assinatura[produtoSelecionado.tipoAtendimento.slug];
        }
      } else {
        const links = midia?.splus.find((splus) => splus.is_splus === hasSPlus);
        linkToRedirect = links[produtoSelecionado.tipoAtendimento.slug];
      }

      if (linkToRedirect) {
        window.open(linkToRedirect, "_blank");
      } else {
        addToast("error", "Produto sem Link para compra");
      }
    } catch (err) {
      addToast("error", "Ocorreu um problema ao processar o pedido");
      throw new Error("Não foi possível recuperar o link");
    }
  };

  const getPrecoProduto = () => {
    const hasSPlus = produtoSelecionado.splus || false;

    const midia = midias.find(
      (midia) => midia.id === produtoSelecionado.midia?.id
    );

    if (midia) {
      if (midia.assinaturas.length > 0) {
        const assinatura = assinaturas?.find(
          (tmpAssinatura) =>
            tmpAssinatura.id === produtoSelecionado.assinatura?.id
        );

        if (assinatura) {
          const newPreco = Number(assinatura.preco);
          setPreco(newPreco);
        }
      } else {
        const links = midia?.splus.find((splus) => splus.is_splus === hasSPlus);

        if (links) {
          const newPreco = Number(links.preco);
          setPreco(newPreco);
        }
      }
    } else {
      setPreco(0);
    }
  };

  const valuesInContext = useMemo(
    () => ({
      label,
      validades,
      setValidades,
      midias,
      setMidias,
      assinaturas,
      setAssinaturas,
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
      assinaturas,
      setAssinaturas,
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
