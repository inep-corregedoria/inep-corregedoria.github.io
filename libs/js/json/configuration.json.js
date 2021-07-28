Bizagi.AppModel = {"personalized":true,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Fluxo Corregedoria-27julho2021","publishDate":"28/07/2021 08:44:35","pages":[{"id":"9f766e35-1db1-425f-9a85-2d689b6b0906","name":"Executar Procedimento Correcional","version":"1.0","author":"Bruno","image":"files\\diagrams\\Executar Procedimento Correcional.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[{"id":"70e15a98-d333-472e-a469-bef33ef1133e","name":"Executar Procedimento Correcional","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":16.0,"y":16.0}],"radius":0.0,"height":1048.0,"width":50.0,"shape":"rect"},"elementType":"Participant","elementSubType":"Participant","properties":[],"pageElements":[{"id":"9cc498cb-4b45-4dea-b771-c42133d7929b","name":"Exame inicial","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Estudo inicial do processo para verificar os fatos, autores, materialidade e demais informa&ccedil;&otilde;es contidas na descri&ccedil;&atilde;o inicial.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":243.0,"y":562.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"17bb9a88-c85a-4cad-b1a7-aa6b86bd0c13","name":"Realizar encaminhamentos","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Encaminhar para as &aacute;reas competentes. &Aacute;reas t&eacute;cnicas, Comiss&atilde;o de &Eacute;tica, etc.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":413.0,"y":749.0}],"radius":0.0,"height":60.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"2837757a-bf08-43ba-82b3-1a33865cf50f","name":"Arquivar Processo","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Processo ser&aacute; arquivado </span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":555.0,"y":749.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"419523f2-9163-49ac-8aee-cf75b7ea366b","name":"Cadastrar Denúncia","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:8pt;font-weight:normal;font-style:normal;\">Criar Processo SEI e ePAD, com as informa&ccedil;&otilde;es apresentadas, registrar nas planilhas de processos da corregedoria.</span></p>","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":768.0,"y":562.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","elementSubType":"Task","properties":[]},{"id":"6c8d0218-1e31-4366-ad39-2f7f94f2282d","name":"Analisar Caso Concreto","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SubProcess_AdHoc.png","imageBounds":{"points":[{"x":1256.0,"y":562.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SubProcess","elementSubType":"AdHocSubProcess","properties":[{"id":"AdHocOrdering","name":"Pedido ad-hoc","value":"Paralelo","type":"text"}]},{"id":"d3874448-c32b-41a0-83ba-8d0e13ad022e","name":"Comunicar Órgãos Competentes","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":2812.0,"y":650.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"cb77e262-0262-4d84-bb0e-b71779fff3fd","name":"Gateway exclusivo baseado em evento","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\EventBasedGatewayExclusive.png","imageBounds":{"points":[{"x":3155.0,"y":572.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"EventBasedGatewayExclusive","elementSubType":"EventBasedGateway","properties":[{"id":"Instantiate","name":"Instanciar","value":"Verdadeiro","type":"text"}],"pageElements":[]},{"id":"5821da29-7e02-46fa-985e-32df04ccb6fa","name":"Analisar Caso Concreto","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\LinkIntermediate_Throw.png","imageBounds":{"points":[{"x":3407.0,"y":667.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"pageElementRef":"1139ab02-326b-43a0-9461-4dcb790d815b","elementType":"LinkIntermediate","elementSubType":"IntermediateThrowEvent"},{"id":"f73de594-dd14-43da-98a1-5cca43fc1a13","name":"Elaborar Proposta de Avocação","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\SendTask.png","imageBounds":{"points":[{"x":1922.0,"y":898.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"SendTask","elementSubType":"SendTask","properties":[{"id":"SendTaskImplementation","name":"Implementação","value":"Serviço Web","type":"text"}]},{"id":"ea6f84a9-c4b5-4b40-a9f7-896f8e7a260b","name":"Gateway exclusivo baseado em evento","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\EventBasedGatewayExclusive.png","imageBounds":{"points":[{"x":2047.0,"y":908.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"EventBasedGatewayExclusive","elementSubType":"EventBasedGateway","properties":[{"id":"Instantiate","name":"Instanciar","value":"Verdadeiro","type":"text"}],"pageElements":[]},{"id":"1139ab02-326b-43a0-9461-4dcb790d815b","name":"Analisar Caso Concreto","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\LinkIntermediate_Throw.png","imageBounds":{"points":[{"x":2250.0,"y":979.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"pageElementRef":"f7c44fae-1a81-4d1d-af14-f425de8603f1","elementType":"LinkIntermediate","elementSubType":"IntermediateThrowEvent"},{"id":"f7c44fae-1a81-4d1d-af14-f425de8603f1","name":"Analisar Caso Concreto","imageObject":"System.Drawing.Bitmap","elementImage":"files\\bpmnElements\\LinkIntermediate_Catch.png","imageBounds":{"points":[{"x":1210.0,"y":472.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"pageElementRef":"1139ab02-326b-43a0-9461-4dcb790d815b","elementType":"LinkIntermediate","elementSubType":"IntermediateCatchEvent"}]}],"subPages":[]},{"id":"1e6a8115-20bf-4fca-a03c-4ba121e8e710","name":"MacroProcesso","version":"1.0","author":"bruno.barrios","image":"files\\diagrams\\MacroProcesso.svg","isSubprocessPage":false,"isCallActivityPage":false,"elements":[],"subPages":[]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","accountable":"Responsável","consulted":"Consultado","informed":"Informado","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"Ir para Matriz","calledBy":"Chamada por","attachmentsTooltip":"Exibir anexos","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Mostrar tudo","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Processo","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Participantes","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Início","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","viewDetails":"Ver detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"A página não pode ser exibida","resourceNotFound":"O recurso solicitado não foi encontrado:","applyTheme":"Aplicando novo tema","showMore":"Mostrar mais","showLess":"Mostrar menos","hideDescription":"Ocultar descrição","showDescription":"Mostrar descrição","presentationActionLink":"Exibir ações de apresentação","goToLinkThrow":"Ir para o evento de destino","goToLinkCatch":"Ir para o evento de origem","goToSubProcess":"Ir para o subprocesso","viewByList":"Lista de processos","viewByTree":"Hierarquia de processos","diagramList":"Lista de processos","folderTree":"Hierarquia de processos"},"searchMap":[{"containerId":"1e6a8115-20bf-4fca-a03c-4ba121e8e710","containerName":"MacroProcesso","isSubprocess":false,"elements":[{"id":"d6c7f6e4-3b5b-4442-87ea-6f6cfb568b09","value":"Fluxo Correcional (Macro-Processo)"},{"id":"69f76e88-da86-41f3-8452-a918cb3e0b6f","value":"Denúncia, Representação, Relatório de Auditoria, Mídia, CGU"},{"id":"3829f191-3582-4204-8c23-1b8446a33c54","value":"Realizar Juízo de Admissibilidade"},{"id":"84c7d19c-e7b2-474e-9e96-5de5bc7da1f8","value":""},{"id":"7504419a-73b0-4295-9e15-7876082d801a","value":"Arquivar Processo"},{"id":"0336c713-9fb1-4ddc-800c-39a512351142","value":"Realizar Procedimento Investigativo"},{"id":"6c02b2af-cf29-4ff8-b1f7-23bdf9d2b678","value":"Realizar Procedimento Acusatório"},{"id":"38fae1bb-b57a-4c6e-8082-52e19f96e468","value":"Decidir por arquivamento ou instauração"},{"id":"e0619c00-15ab-45b7-80e9-350258042130","value":"Processo arquivado"},{"id":"1dff5839-3ec1-4e98-a1b8-b4d886383fdc","value":"Possui indícios de autoria E materialidade?"},{"id":"a3620e99-0acf-4672-b4c7-d99c4140f365","value":"Julgar procedimento investigativo"},{"id":"12cda310-2730-42d5-a8df-691ad397367c","value":"Julgar procedimento acusatório"},{"id":"07023d34-e234-4684-9a05-ddba87266956","value":""},{"id":"b24bf8a9-6345-4bce-a27f-023618319832","value":"Aplicar punição"},{"id":"6d8243a4-4c6f-42d8-9767-ed9444cab2ce","value":"Processo Finalizado"},{"id":"deafdc8f-f8c4-413f-9f52-36bdfbef0711","value":"Identificado desvio ético?"},{"id":"b7706901-48a3-4227-ad8e-5fc85a2a4cbf","value":"Encaminhar para Comissão de Ética"},{"id":"4425e0e9-c79f-4889-aff0-4ec510382205","value":"Encaminhado para Comissão de Ética"},{"id":"c10882af-7cc6-402f-9caf-ec871132c429"},{"id":"704727b6-603b-42a0-b072-6b9e7816dd98"},{"id":"b1ffca7a-93fa-40b8-871c-407b26f56338"},{"id":"ae96ab5d-c6a4-471d-8217-c78fb7199453"},{"id":"73c1fb86-660b-4096-a843-419196358e65"},{"id":"d98fa93f-9bc7-407c-a83d-203bf5bce264"},{"id":"fd7f16f9-8618-4cdf-a812-2d4b2e24f03d"},{"id":"fb03f01f-9b34-4243-bdbc-0973ed49e2fb"},{"id":"3abce46b-c2c2-435b-b520-520c895d2a76"},{"id":"f68327d8-2c3b-474b-93b4-214b6c861c5d"},{"id":"4bfc1551-4d1e-4c7c-b4a4-2550a99aecf7"}]},{"containerId":"9f766e35-1db1-425f-9a85-2d689b6b0906","containerName":"Executar Procedimento Correcional","isSubprocess":false,"elements":[{"id":"70e15a98-d333-472e-a469-bef33ef1133e","value":"Executar Procedimento Correcional"},{"id":"5422f89d-94a8-4843-985d-e235ba28d5fc","value":"Corregedoria"},{"id":"73ef24c0-8bb6-42dc-aaeb-e2c1feb0c018","value":"Exame Inicial da Infração"},{"id":"6d39e1fe-0aa5-4377-bd6f-d2499e9c3282","value":"Análise da Infração"},{"id":"0c591a9a-de50-4b3c-a848-8034c14e0576","value":"Procedimento Correcional"},{"id":"1d59951a-c1c5-4812-910f-3b5d1eeaa4e0","value":"Apoio ao Julgamento e encaminhamentos"},{"id":"668a8591-f9f0-488b-8201-d839fdd22487","value":"Planilha de Procedimentos Correcionais"},{"id":"ffbf112b-c0d1-4562-a2f1-8ce0483c5aa0","value":"Lei 8112/90 Estatuto dos servidores"},{"id":"261b6138-3d1d-409a-9d5c-d4c0faa27f50","value":"Lei9784/99 Processo Administrativo"},{"id":"3332a8b3-9676-4502-8c27-40c0a08b6897","value":"Lei 8429/92\r Improbidade"},{"id":"6941341c-9349-4b5c-baef-3af435cfd2d7","value":"Lei 12846 Anticorrupção"},{"id":"ee06b105-ad0e-42ce-a257-d5f675c43c14","value":"Lei 12813 Conflito de Interesses"},{"id":"321c58c5-a697-4022-9bc9-0af7b8e4017f","value":"Lei 13869 Abuso de Autoridae"},{"id":"53dc8e06-417e-4c26-a5ef-3465684e3334","value":"ePAD"},{"id":"e3d1d833-29e8-4462-89f8-c90f11430e67","value":"CGU-PAD"},{"id":"e3296974-bbf4-4160-8d53-e7b62c2b8cc6","value":"SEI"},{"id":"9cc498cb-4b45-4dea-b771-c42133d7929b","value":"Exame inicial"},{"id":"414fa656-8b04-4793-aef7-1ec6e832f530","value":"Denúncia  pertence à esfera disciplinar?"},{"id":"b3bdafff-55e4-403b-9939-faef6fd69ca6","value":"Processo Arquivado"},{"id":"2837757a-bf08-43ba-82b3-1a33865cf50f","value":"Arquivar Processo"},{"id":"419523f2-9163-49ac-8aee-cf75b7ea366b","value":"Cadastrar Denúncia"},{"id":"17bb9a88-c85a-4cad-b1a7-aa6b86bd0c13","value":"Realizar encaminhamentos"},{"id":"0544830f-6447-4cff-bad9-60070269a076","value":"Contém indícios mínimos de autoria e/ou materialidade?"},{"id":"f890f23a-0352-46a6-85c3-a0451540784a","value":"Motivar Arquivamento"},{"id":"a007f40f-c891-4f2a-9871-355825b8e859","value":"Analisar Rito Correcional à ser adotado"},{"id":"0a5ecbdb-ea0a-4884-a3b7-7e9b8797d132","value":""},{"id":"506e32d8-1e89-4026-88c8-34eacad0228a","value":""},{"id":"f22a4df1-4182-44e7-b209-7065d5dc933c","value":"Realizar Juízo de Admissibilidade"},{"id":"5476d26f-a939-424d-823b-4328c7f8cae2","value":"Realizar Investigação Preliminar Sumária"},{"id":"498f6f83-a65e-4b63-93dc-8361d5d6c206","value":"Realizar Sindicância Investigativa"},{"id":"7861ee1a-9259-4abb-8497-9e5b5b803f87","value":"Realizar Sindicância Patrimonial"},{"id":"28999428-3485-43d4-a7fc-497a0bda7ad7","value":"Realizar Processo Administrativo de Responsabilização de Entes Privados"},{"id":"f3a82221-d673-42f9-b7ee-4c67c28bd3d9","value":"Realizar Processo Administrativo Disciplinar Sumário"},{"id":"4859cd40-00ed-41f4-8611-ed745718d845","value":""},{"id":"58489f27-7bb2-4e06-9947-29431e150eda","value":"Celebrar Termo de Ajustamento de Conduta"},{"id":"9e4e5fd4-dd1a-43b0-a5b1-970bde43e96c","value":"Analisar Relatório Final/ Nota Técnica"},{"id":"5e40c62f-e0b0-4a8c-8a36-eaf5d5cfc9fc","value":"Elaborar Parecer da Corregedoria"},{"id":"f73de594-dd14-43da-98a1-5cca43fc1a13","value":"Elaborar Proposta de Avocação"},{"id":"fca0fd7d-9147-40a2-af01-99bbfd537ae2","value":"Arquivar Processo"},{"id":"b000353c-5ba7-45b5-80f3-31ebb7377376","value":"Processo Arquivado"},{"id":"1139ab02-326b-43a0-9461-4dcb790d815b","value":"Analisar Caso Concreto"},{"id":"f7c44fae-1a81-4d1d-af14-f425de8603f1","value":"Analisar Caso Concreto"},{"id":"a73f8a96-908b-4e88-b76d-048c87fa64a9","value":""},{"id":"d3874448-c32b-41a0-83ba-8d0e13ad022e","value":"Comunicar Órgãos Competentes"},{"id":"e3e68c0c-5201-438e-b506-fe43a11ace2f","value":"Excede a esfera disciplinar?"},{"id":"c16ea109-a3ce-4f82-ac43-f1f5741e866b","value":""},{"id":"ea6f84a9-c4b5-4b40-a9f7-896f8e7a260b","value":""},{"id":"cb77e262-0262-4d84-bb0e-b71779fff3fd","value":""},{"id":"fb5ff7b4-e93f-494c-b823-7ba6eeba0975","value":"Proposta Aceita"},{"id":"51e2b5f8-75c9-44d5-9446-f29b72ededa6","value":"Decisão de Aplicação de sanção"},{"id":"62454ac8-86b8-4ec2-9b8a-aa98e282f9c4","value":"Decisão por Instauração de Procedimento Correcional"},{"id":"0e431cc9-9109-4332-bbd8-0236d1a7178e","value":"Decisão de Arquivamento"},{"id":"f5a7db31-7345-45d8-b4e0-32477a4bf61d","value":"Apoiar Aplicação de Sanção"},{"id":"5821da29-7e02-46fa-985e-32df04ccb6fa","value":"Analisar Caso Concreto"},{"id":"c468a0d5-0494-43a6-8122-e7e6d7e8f139","value":""},{"id":"f402c9e1-d373-4224-9767-f047b79a76d7","value":"Proposta Recusada"},{"id":"99b10389-efe7-4832-8c62-55effcbf5ada","value":"Arquivar Processo"},{"id":"9a5b8a37-2a0d-47a5-9edc-4f37704a4ae0","value":"Processo Arquivado"},{"id":"6c8d0218-1e31-4366-ad39-2f7f94f2282d","value":"Analisar Caso Concreto"},{"id":"d1fcf7c1-0587-457c-9178-029a80c516c7","value":"Comunicação de Infração: Denuncia, representação, relatório de auditoria, recomendação procuradoria e ofício próprio"},{"id":"89e99f4e-1764-41ce-9083-79bc15e7d17a","value":"Decisão do Rito Correcional"},{"id":"09118b8b-4ded-4c02-b6cb-2ea8bb32e5d8","value":"Realizar Processo Administrativo Disciplinar"},{"id":"5f3cca28-13ac-4a11-a2aa-b3d09f412930"},{"id":"3501251e-fdbc-4249-a070-07cfd9c4fa05"},{"id":"82ac2353-e932-4880-8802-898edf117173"},{"id":"d20d7d66-278f-4ae1-b35f-9093c6a219a9"},{"id":"e523c1be-59b6-459e-87cb-4af206821959"},{"id":"e04b9061-ddc2-457d-a7c0-53056885a251"},{"id":"96afb8a2-30af-48ff-8c30-72f2aefe2e88"},{"id":"10809a61-9b71-42f3-b76a-2f624c2a1680"},{"id":"56490fcd-1505-4176-8b98-a7695b463c88"},{"id":"44c51ad5-600c-4e25-b745-1d6139105667"},{"id":"17e3a76f-fd7b-49ad-9732-367e10759992"},{"id":"e71a8ceb-2538-45e4-8e22-d85645ff4b98"},{"id":"2e74a142-fd44-4365-8b3d-ce59db569ae6"},{"id":"d79b7c08-893f-401e-acd5-6f836a183087","value":""},{"id":"aaf4f720-fa1e-4ec8-9720-cf991189787e"},{"id":"1b17475b-41bc-4937-a8c5-b8fce3565bf3","value":"CGU"},{"id":"da3ce9cb-6f9a-41e0-8a9b-6cccc23c7934","value":"MPU / PF"},{"id":"9ef458bb-6342-4d9e-b16a-ec4577e72fe0","value":"Presidência"}]}]}