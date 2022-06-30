export const questions = [
  {
    question: "O que é um Certificado Digital?",
    answer:
      "Na prática, o certificado digital no padrão da Infraestrutura de Chaves Públicas Brasileira (ICP-Brasil) funciona como uma identidade virtual que permite a identificação segura e inequívoca do autor de uma mensagem ou transação feita em meios eletrônicos. Esse documento eletrônico é gerado e assinado por uma terceira parte confiável, ou seja, uma Autoridade Certificadora (AC) que, seguindo regras estabelecidas pelo Comitê Gestor da ICP-Brasil, associa uma entidade (pessoa, processo, servidor) a um par de chaves criptográficas.",
  },
  {
    question: "Devo comprar o Certificado Digital tipo A1 ou A3?",
    answer:
      "Existem diferentes níveis de segurança para cada tipo:  Certificado tipo A1: a assinatura tem nível de segurança 1, é instalada diretamente no computador e é possível fazer cópias. Tem sua chave privada gerada e armazenada em um software e possui validade de 1 ano; Certificado tipo A3: a assinatura tem nível de segurança 3. É gerada e instalada em dispositivos criptográficos próprios: cartão inteligente, token e a validade pode variar de 1 a 3 anos. São, portanto, emitidos e armazenados em mídias que impedem a exportação do Certificado.",
  },
  {
    question: "Quais os documentos necessários para realizar a validação do Certificado Digital? (A – Pessoa Física | e-CPF)",
    answer:
      "Atenção: é obrigatória a apresentação dos documentos originais. Carteira Nacional de Habilitação (CNH) ou Cédula de Identidade; Carteira de Identidade de Estrangeiro (CIE), se estrangeiro domiciliado no Brasil; CPF; Comprovante de residência ou domicílio, emitido há no máximo três meses da data de validação presencial, caso não tenha é gerada uma declaração no nome do titular.",
  },
  {
    question: "Quais os documentos necessários para realizar a validação do Certificado Digital? (B – Pessoa Jurídica – e-CNPJ)",
    answer:
      "Atenção: é obrigatória a apresentação dos documentos originais.",
  },
  {
    question: "Quais os documentos necessários para realizar a validação do Certificado Digital? (C – Documentos da Pessoa Jurídica - empresa/instituição)",
    answer:
      "Atenção: é obrigatória a apresentação dos documentos originais. Registro Comercial ou Requerimento de Empresário, no caso de empresa individual devidamente registrada em órgão competente; Ato Constitutivo, Estatuto ou Contrato Social em vigor, devidamente registrado em órgão competente para empresas com dois ou mais sócios/administradores; Documento de eleição de seus administradores, quando aplicável; Cartão do CNPJ (Impresso do site da Receita Federal há no máximo 7 dias); Cadastro Específico do INSS – CEI (Opcional).",
  },
  {
    question: "Quais os documentos necessários para realizar a validação do Certificado Digital? (D – Documentos do responsável legal cadastrado na Receita Federal Pessoa Física e-CPF)",
    answer:
      "Atenção: é obrigatória a apresentação dos documentos originais. Carteira Nacional de Habilitação (CNH), Cédula de Identidade; Carteira de Identidade de Estrangeiro (CIE), se estrangeiro domiciliado no Brasil; CPF; Comprovante de residência ou domicílio, emitido há no máximo três meses da data de validação presencial, caso não tenha é gerada uma declaração no nome do titular.",
  },
  {
    question: "Posso enviar os documentos por e-mail / digitalizados?",
    answer:
      "Não, somente original. Pois o processo de Validação só pode ocorrer através do documento original apresentado no ato da Solicitação.",
  },
  {
    question: "Aceita cópia autenticada dos documentos?",
    answer:
      "Não, somente original. Pois o processo de Validação só pode ocorrer através do documento original apresentado no ato da Solicitação.",
  },
  {
    question: "Fiz a emissão do meu Certificado A1 e foi gerado um arquivo. O que devo fazer?",
    answer:
      "Esse arquivo é o seu Certificado Digital. Note que o nome deste arquivo é o nome da pessoa/empresa. Para a sua segurança, transfira esta cópia para um local seguro, como um pen drive ou e-mail. Por determinação da legislação, a Sintech não possui cópia do seu Certificado Digital.",
  },
  {
    question: "Perdi meu cartão / token contendo meu certificado digital. Como devo proceder? ",
    answer:
      "Em caso de perda do certificado, você deve revogá-lo imediatamente. Para isso, entre em contato com a Sintech para tomar as devidas providências.",
  },
  {
    question: "Em quanto tempo fica pronto o Certificado Digital?",
    answer:
      "A solicitação, quando está completa, é enviada para o setor de aprovação. Geralmente, sai no mesmo dia.",
  },
  {
    question: "Posso receber o Certificado Digital por e-mail?",
    answer:
      "Por medidas de segurança, não é permitido o envio de documentação de cliente por e-mail.",
  },
  {
    question: "O que é um Certificado Digital SSL?",
    answer:
      "Para os sites, o Certificado Digital SSL (Secure Sockets Layer), também conhecido como “site seguro”, tem duas funções: identificar de forma inquestionável o site e estabelecer uma conexão segura entre o visitante e os servidores web do site por meio de um canal de criptografia.",
  },
  {
    question: "Como funciona o Certificado Digital SSL?",
    answer:
      "O Certificado SSL é um arquivo instalado no servidor web onde no site está hospedado. É composto por dois segmentos: Chave Pública, que codifica os dados; Chave Privada, que decodifica os dados. Quando um visitante acessa o site, o navegador se conecta ao servidor protegido pelo Certificado SSL e uma seção única é criada com estas duas chaves. Desta forma, todos os dados durante esta seção estarão protegidos e não poderão ser decifrados por qualquer outra parte, além do visitante e o servidor web.",
  },
  {
    question: "Por que ter um Certificado Digital SSL?",
    answer:
      "Não importa o porte da sua empresa ou a finalidade de seu site, ter um Certificado SSL é indispensável para oferecer segurança aos usuários, clientes e reforçar a autenticidade de sua página. Os Certificados Digitais SSL que são comercializados pela SOLUTI são oferecidos em duas opções de hierarquia de confiança: Internacional – possui a cadeia de confiança reconhecida por todos os softwares e navegadores utilizados no mercado; ICP-Brasil – possui a cadeia de confiança da infraestrutura brasileira de chaves públicas – ICP. Ideal para órgãos governamentais.",
  },
  {
    question: "Quais os tipos de Certificado Digital SSL?",
    answer:
      "Os Certificados Digitais SSL são classificados pelo tipo de validação: DV – Autenticação de Domínio (Domain Authetication) – a Autoridade Certificadora apenas valida se a empresa solicitante do Certificado SSL é proprietária do domínio configurado na solicitação do Certificado ou se há autorização da proprietária do domínio para a realização da validação. A validação é feita com base nos dados cadastrados na entidade responsável pelo registro de domínio; OV – Autenticação da Organização (Org. Authetication) – a Autoridade Certificadora valida se a empresa solicitante do Certificado SSL é proprietária do domínio configurado na solicitação do Certificado e se a entidade é legalmente constituída; EV – Validação Extendida (Extended Validation) – a Autoridade Certificadora valida se a empresa solicitante do Certificado SSL é proprietária do domínio configurado na solicitação do Certificado, se a entidade é legalmente constituída e se a pessoa que solicitou Certificado tem poder para efetuar o pedido; SANs – Certificados Digitais para os Múltiplos Domínios, que é um Certificado SSL desenvolvido, principalmente, para o uso em soluções baseadas em Comunicações Unificadas (Unified Communications), como por exemplo, Microsoft Exchange (2007 ou superior), Live Communications Server (2005 ou superior); Certificados WildCards – permitem que uma única chave valide inúmeros subdomínios. Não está disponível para EV.",
  },
];
