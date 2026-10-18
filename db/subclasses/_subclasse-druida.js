/* ============================================================
   SUBCLASSES — DRUIDA (Círculos)
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 10, 14
   ============================================================ */

/* ---------- CÍRCULO DA LUA ---------- */
window.registrarSubclasse({
  id: "circulo-lua", nome: "Círculo da Lua", classeId: "druida", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  caracteristicas: [
    { nivel: 3, nome: "Formas Animais do Círculo da Lua", descricao: "ND máximo da Forma Selvagem = nível de Druida ÷ 3 (arred. baixo). CA = 13 + mod. Sabedoria (se maior que a da Fera). PV Temporários = 3 × nível de Druida." },
    { nivel: 3, nome: "Magias do Círculo da Lua", descricao: "Sempre preparadas: Curar Ferimentos, Fagulha Estelar, Raio Lunar (nv. 3); Invocar Animais (nv. 5); Fonte do Luar (nv. 7); Curar Ferimentos em Massa (nv. 9). Pode conjurá-las em Forma Selvagem." },
    { nivel: 6, nome: "Formas Animais Aprimoradas", descricao: "Em Forma Selvagem: Radiância Lunar (cada ataque pode causar tipo normal ou Radiante; escolha a cada acerto) e Vigor Aumentado (adiciona mod. Sabedoria a salvaguardas de Constituição)." },
    { nivel: 10, nome: "Passo Lunar", descricao: "Ação Bônus: teleporta até 9m para espaço desocupado à vista; ganha Vantagem na próxima jogada de ataque antes do fim do turno. Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo. Pode recuperar gastando espaço de 2º+." },
    { nivel: 14, nome: "Forma Lunar", descricao: "Radiância Lunar Aprimorada (1×/turno, +2d10 Radiante em um acerto da Forma Selvagem). Luar Compartilhado (ao usar Passo Lunar, pode teleportar criatura voluntária a até 3m para espaço desocupado a até 3m do seu destino)." }
  ]
});

/* ---------- CÍRCULO DA TERRA ---------- */
window.registrarSubclasse({
  id: "circulo-terra", nome: "Círculo da Terra", classeId: "druida", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  magiasSemprePreparadas: [
    // Terreno é escolhido por Descanso Longo. Aqui registramos todas as opções;
    // o app deve filtrar pela escolha atual do personagem.
    { nivel: 3, magiasPorTerreno: {
        Arido:     ["Mãos Flamejantes","Raio de Fogo","Turvar"],
        Polar:     ["Névoa Obscurecente","Paralisar Pessoa","Raio de Gelo"],
        Temperado: ["Passo Nebuloso","Sono","Toque Chocante"],
        Tropical:  ["Bolha Ácida","Raio Nauseante","Teia"]
      }
    },
    { nivel: 5, magiasPorTerreno: {
        Arido:     ["Bola de Fogo"],
        Polar:     ["Nevasca"],
        Temperado: ["Relâmpago"],
        Tropical:  ["Nuvem Fétida"]
      }
    },
    { nivel: 7, magiasPorTerreno: {
        Arido:     ["Malogro"],
        Polar:     ["Tempestade Glacial"],
        Temperado: ["Movimentação Livre"],
        Tropical:  ["Polimorfia"]
      }
    },
    { nivel: 9, magiasPorTerreno: {
        Arido:     ["Muralha de Pedra"],
        Polar:     ["Cone de Frio"],
        Temperado: ["Passo Arbóreo"],
        Tropical:  ["Praga de Insetos"]
      }
    }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Auxílio da Terra", descricao: "Ação Usar Magia: gasta uso de Forma Selvagem e escolhe ponto a até 18m. Flores/espinhos surgem em Esfera de 3m: cada criatura à escolha faz salv. Constituição (CD magia), sofrendo 2d6 Necrótico em falha (metade em sucesso); uma criatura à escolha na área recupera 2d6 PV. Dano/cura aumentam para 3d6 (nv. 10) e 4d6 (nv. 14)." },
    { nivel: 3, nome: "Magias do Círculo da Terra", descricao: "Em cada Descanso Longo, escolha tipo de terreno: Árido, Polar, Temperado ou Tropical. Você tem as magias correspondentes sempre preparadas (ver magiasSemprePreparadas.magiasPorTerreno)." },
    { nivel: 6, nome: "Recuperação Natural", descricao: "Pode conjurar uma magia de 1º+ preparada por Magias do Círculo (qualquer terreno) sem gastar espaço — 1×/Descanso Longo. Em Descanso Curto, recupera espaços gastos cuja soma de círculos ≤ metade do nível de Druida (arred. cima); nenhum pode ser 6º+. 1×/Descanso Longo." },
    { nivel: 10, nome: "Proteção Natural", descricao: "Imunidade a Envenenado. Resistência ao tipo de dano associado ao terreno atual: Árido (Ígneo), Polar (Gélido), Temperado (Elétrico), Tropical (Venenoso)." },
    { nivel: 14, nome: "Santuário Natural", descricao: "Ação Usar Magia: gasta uso de Forma Selvagem para criar árvores e vinhas espectrais em Cubo de 4,5m no chão a até 36m. Dura 1 min ou até você morrer/Incapacitado. Você e aliados têm Cobertura Parcial; aliados ganham Resistência atual da Proteção Natural. Ação Bônus: move o Cubo até 18m." }
  ]
});

/* ---------- CÍRCULO DAS ESTRELAS ---------- */
window.registrarSubclasse({
  id: "circulo-estrelas", nome: "Círculo das Estrelas", classeId: "druida", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  caracteristicas: [
    { nivel: 3, nome: "Forma Estrelada", descricao: "Ação Bônus: gasta uso de Forma Selvagem para assumir forma estrelada por 10 min (ou até Incapacitado/novo uso). Corpo emite Luz Plena 3m + Meia-luz 3m. Escolha constelação ao assumir:\n• Arqueiro: ao ativar e como Ação Bônus nos turnos seguintes, ataque mágico à distância (18m) — 1d8 Radiante + mod. Sabedoria.\n• Dragão: em testes de Int ou Sab, ou salvaguardas de Constituição para Concentração, resultado 9 ou menos vira 10.\n• Taça: sempre que conjurar magia com espaço que cure PV em criatura, você ou criatura a até 9m recupera 1d8 + mod. Sabedoria." },
    { nivel: 3, nome: "Mapa Estelar", descricao: "Objeto Minúsculo, Foco de Conjuração para magias de Druida. Forma: jogar 1d6 na tabela Mapa Estelar. Enquanto segurando: sempre tem Orientação e Raio Guia preparadas; pode conjurar Raio Guia sem espaço (usos = mod. Sabedoria, mín. 1, recupera em Descanso Longo). Pode recriar o mapa em cerimônia de 1h." },
    { nivel: 6, nome: "Presságio Cósmico", descricao: "Ao completar Descanso Longo, joga um dado. Par = Prosperidade (Reação: criatura à vista a até 9m faz Teste de D20 → +1d6); Ímpar = Infortúnio (Reação: −1d6). Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo." },
    { nivel: 10, nome: "Constelações Cintilantes", descricao: "Em Forma Estrelada: Arqueiro e Taça passam a rolar 2d8; Dragão concede Deslocamento de Voo 6m (pairar). No início de cada turno em Forma Estrelada, pode trocar a constelação ativa." },
    { nivel: 14, nome: "Repleto de Estrelas", descricao: "Em Forma Estrelada: parcialmente incorpóreo, Resistência a dano Contundente, Cortante e Perfurante." }
  ]
});

/* ---------- CÍRCULO DO MAR ---------- */
window.registrarSubclasse({
  id: "circulo-mar", nome: "Círculo do Mar", classeId: "druida", fonte: "PHB 2024",
  niveisDeCaracteristica: [3, 6, 10, 14],
  magiasSemprePreparadas: [
    { nivel: 3, magias: ["Despedaçar","Lufada de Vento","Névoa Obscurecente","Onda Trovejante","Raio de Gelo"] },
    { nivel: 5, magias: ["Relâmpago","Respirar na Água"] },
    { nivel: 7, magias: ["Controlar Água","Tempestade Glacial"] },
    { nivel: 9, magias: ["Invocar Elemental","Paralisar Monstro"] }
  ],
  caracteristicas: [
    { nivel: 3, nome: "Ira do Mar", descricao: "Ação Bônus: gasta uso de Forma Selvagem para manifestar Emanação de 1,5m de respingos por 10 min (ou até encerrar/Incapacitado). Ao manifestar e como Ação Bônus nos turnos seguintes: escolha criatura à vista na Emanação; salv. Constituição (CD magia) ou sofre dano Gélido igual a mod. Sabedoria em d6s (mín. 1d6) e, se Grande ou menor, é empurrada 4,5m para longe." },
    { nivel: 6, nome: "Afinidade Aquática", descricao: "Tamanho da Emanação de Ira do Mar aumenta para 3m. Adquire Deslocamento de Natação igual ao Deslocamento." },
    { nivel: 10, nome: "Filho da Tempestade", descricao: "Em Ira do Mar ativa: Deslocamento de Voo igual ao Deslocamento; Resistência a dano Elétrico, Gélido e Trovejante." },
    { nivel: 14, nome: "Manifestação Oceânica", descricao: "Em vez de manifestar a Emanação ao seu redor, pode manifestá-la ao redor de criatura voluntária a até 18m (ela usa sua CD e mod. Sabedoria). Pode manifestar ao redor de si E da outra criatura gastando dois usos de Forma Selvagem." }
  ]
});

console.log('[DND] Subclasses do Druida carregadas.');