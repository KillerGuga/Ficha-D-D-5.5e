/* ============================================================
   TALENTOS — CATEGORIA DÁDIVA ÉPICA
   Fonte: Livro do Jogador (2024)
   Pré-requisito comum: Nível 19+
   ============================================================ */

window.registrarTalento({
  id:"dadiva-da-fortitude", nome:"Dádiva da Fortitude", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Saúde Fortalecida", descricao:"PV máximos +40. Ao recuperar PV, pode recuperar PV adicionais = mod. Con. 1×/turno." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-proeza-em-combate", nome:"Dádiva da Proeza em Combate", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Pontaria Inigualável", descricao:"Ao errar uma jogada de ataque, em vez disso você acerta. 1×/turno." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-proficiencia-em-pericia", nome:"Dádiva da Proficiência em Perícia", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Assecla Completo", descricao:"Adquire proficiência em todas as perícias." },
    { nome:"Especialização", descricao:"Especialização em uma perícia proficiente que ainda não seja Especialista." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-recordacao-de-magia", nome:"Dádiva da Recordação de Magia", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+, Característica de Conjuração", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta Int, Sab ou Car em 1 (máx. 30)." },
    { nome:"Conjuração Livre", descricao:"Ao conjurar magia com espaço de 1º a 4º círculo, joga 1d4. Se o resultado for igual ao círculo do espaço, o espaço não é gasto." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-recuperacao", nome:"Dádiva da Recuperação", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Até a Morte", descricao:"Ao ser reduzido a 0 PV, pode ficar com 1 PV e recuperar metade dos PV máximos. 1×/Descanso Longo." },
    { nome:"Recuperar Vitalidade", descricao:"Reserva de 10d10. Ação Bônus: gasta dados da reserva e recupera PV = total. Recupera todos em Descanso Longo." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-resistencia-a-energia", nome:"Dádiva da Resistência à Energia", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Resistências à Energia", descricao:"Escolha dois tipos: Ácido, Elétrico, Gélido, Ígneo, Necrótico, Psíquico, Radiante, Trovejante ou Venenoso. Resistência a eles (pode trocar em Descanso Longo)." },
    { nome:"Redirecionamento de Energia", descricao:"Reação: ao sofrer dano de um dos tipos escolhidos, redireciona o mesmo tipo para criatura à vista a até 18m sem Cobertura Total. Alvo faz salv. Destreza (CD 8 + Con + BP) ou sofre 2d12 + mod. Con do tipo." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-velocidade", nome:"Dádiva da Velocidade", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Artista de Fuga", descricao:"Ação Bônus: executa a ação Desengajar, encerrando também a condição Imobilizado em você." },
    { nome:"Agilidade", descricao:"Deslocamento +9m." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-viagem-dimensional", nome:"Dádiva da Viagem Dimensional", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Passos Fugazes", descricao:"Imediatamente após executar a ação Atacar ou Usar Magia, teleporta até 9m para espaço desocupado à vista." }
  ]
});

window.registrarTalento({
  id:"dadiva-da-visao-verdadeira", nome:"Dádiva da Visão Verdadeira", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Visão Verdadeira", descricao:"Visão Verdadeira 18m." }
  ]
});

window.registrarTalento({
  id:"dadiva-do-ataque-irresistivel", nome:"Dádiva do Ataque Irresistível", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta For ou Des em 1 (máx. 30)." },
    { nome:"Superar Defesas", descricao:"Dano Contundente, Cortante e Perfurante que você causa ignora Resistência." },
    { nome:"Golpe Devastador", descricao:"Ao tirar 20 no d20 para jogada de ataque, causa dano adicional ao alvo = valor do atributo aumentado por este talento, do mesmo tipo do ataque." }
  ]
});

window.registrarTalento({
  id:"dadiva-do-destino", nome:"Dádiva do Destino", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Aprimorar Destino", descricao:"Quando você ou criatura a até 18m for bem-sucedida ou falhar em Teste de D20, pode jogar 2d4 e aplicar como bônus ou penalidade. Recupera em Iniciativa ou em Descanso Curto/Longo." }
  ]
});

window.registrarTalento({
  id:"dadiva-do-espirito-da-noite", nome:"Dádiva do Espírito da Noite", categoria:"Dádiva Épica",
  prerequisitos:"Nível 19+", repetivel: false,
  beneficios: [
    { nome:"Aumento no Valor de Atributo", descricao:"Aumenta um atributo à sua escolha em 1 (máx. 30)." },
    { nome:"Fundir-se com Sombras", descricao:"Em Meia-luz ou Escuridão, Ação Bônus: concede-se Invisível. Encerra imediatamente após executar uma ação, Ação Bônus ou Reação." },
    { nome:"Forma Sombria", descricao:"Em Meia-luz ou Escuridão, Resistência a todos os danos exceto Psíquico e Radiante." }
  ]
});

console.log('[DND] Dádivas Épicas carregadas:', talentosPorCategoria("Dádiva Épica").length);