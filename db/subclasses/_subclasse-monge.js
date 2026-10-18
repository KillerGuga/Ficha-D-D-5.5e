/* ============================================================
   SUBCLASSES — MONGE
   Fonte: Livro do Jogador (2024)
   Todas: características em 3, 6, 11, 17
   ============================================================ */

/* ---------- COMBATENTE DA MÃO ESPALMADA ---------- */
window.registrarSubclasse({
  id:"mao-espalmada", nome:"Combatente da Mão Espalmada", classeId:"monge", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 11, 17],
  caracteristicas: [
    { nivel:3, nome:"Técnica da Mão Espalmada", descricao:"Ao atingir criatura com ataque concedido por Torrente de Golpes, impõe um dos efeitos: Derrubar (salv. Destreza ou Caído), Desorientar (sem Ataques de Oportunidade até o início do próximo turno) ou Empurrar (salv. Força ou empurrada 4,5 m)." },
    { nivel:6, nome:"Integridade Corporal", descricao:"Ação Bônus: joga o Dado de Artes Marciais; recupera PV = resultado + mod. Sabedoria (mín. 1). Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo." },
    { nivel:11, nome:"Passo Veloz", descricao:"Ao executar Ação Bônus diferente de Passo do Vento, também pode usar Passo do Vento imediatamente após." },
    { nivel:17, nome:"Palma Vibrante", descricao:"Ao acertar com Ataque Desarmado: gasta 4 Pontos de Foco para iniciar vibrações no alvo por até nível de Monge em dias. Como ação (ou renunciando a um ataque no turno), encerra as vibrações: alvo faz salv. Constituição, sofrendo 10d12 Energético (metade em sucesso). Apenas 1 criatura sob efeito por vez." }
  ]
});

/* ---------- COMBATENTE DA MISERICÓRDIA ---------- */
window.registrarSubclasse({
  id:"misericordia", nome:"Combatente da Misericórdia", classeId:"monge", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 11, 17],
  caracteristicas: [
    { nivel:3, nome:"Implementos de Misericórdia", descricao:"Proficiência em Intuição, Medicina e Kit de Herbalismo." },
    { nivel:3, nome:"Mão de Cura", descricao:"Ação Usar Magia: gasta 1 Ponto de Foco para tocar criatura e recuperar PV = Dado de Artes Marciais + mod. Sabedoria. Ao usar Torrente de Golpes, pode substituir 1 Ataque Desarmado por Mão de Cura sem gastar Ponto." },
    { nivel:3, nome:"Mão de Dolo", descricao:"1×/turno ao acertar com Ataque Desarmado e causar dano: gasta 1 Ponto de Foco para causar dano Necrótico adicional = Dado de Artes Marciais + mod. Sabedoria." },
    { nivel:6, nome:"Toque de Médico", descricao:"Mão de Cura: também pode encerrar uma condição (Atordoado, Cego, Envenenado, Paralisado ou Surdo). Mão de Dolo: também impõe Envenenado até o fim do próximo turno." },
    { nivel:11, nome:"Torrente de Cura e Dolo", descricao:"Ao usar Torrente de Golpes, pode substituir cada Ataque Desarmado pelo uso de Mão de Cura sem gastar Pontos de Foco. Ao acertar com Ataque Desarmado de Torrente de Golpes, pode aplicar Mão de Dolo sem gastar Ponto (1×/turno). Usos = mod. Sabedoria (mín. 1); recupera em Descanso Longo." },
    { nivel:17, nome:"Mão da Misericórdia Final", descricao:"Ação Usar Magia: toque o cadáver de criatura morta nas últimas 24 h e gaste 5 Pontos de Foco. Criatura reviver com PV = 4d10 + mod. Sabedoria. Condições Atordoado, Cego, Envenenado, Paralisado e Surdo são removidas. 1×/Descanso Longo." }
  ]
});

/* ---------- COMBATENTE DAS SOMBRAS ---------- */
window.registrarSubclasse({
  id:"sombras", nome:"Combatente das Sombras", classeId:"monge", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 11, 17],
  caracteristicas: [
    { nivel:3, nome:"Artes das Sombras", descricao:"1 Ponto de Foco: conjura Escuridão sem componentes; enxerga na área e pode mover a Escuridão até 18 m no início de cada turno. Conhece Ilusão Menor (atributo de conjuração: Sabedoria). Visão no Escuro 18 m (se já tiver, +18 m)." },
    { nivel:6, nome:"Passo da Sombra", descricao:"Em Meia-luz ou Escuridão total: Ação Bônus para se teleportar até 18 m para espaço desocupado à vista, também em Meia-luz ou Escuridão. Ganha Vantagem no próximo ataque corpo a corpo antes do fim do turno." },
    { nivel:11, nome:"Passo da Sombra Aprimorado", descricao:"Ao usar Passo da Sombra, pode gastar 1 Ponto de Foco para remover o requisito de Meia-luz/Escuridão. Como parte da Ação Bônus, pode fazer um Ataque Desarmado imediatamente após se teleportar." },
    { nivel:17, nome:"Manto da Sombra", descricao:"Ação Usar Magia (3 Pontos de Foco): em Meia-luz/Escuridão, envolve-se em sombras por 1 min (ou até Incapacitado, ou até encerrar turno em Luz Plena). Ganha: Invisível; move-se por espaços ocupados como Terreno Difícil (se encerrar turno em espaço ocupado, é deslocado para o último espaço desocupado); Torrente de Golpes sem gastar Pontos de Foco." }
  ]
});

/* ---------- COMBATENTE DOS ELEMENTOS ---------- */
window.registrarSubclasse({
  id:"elementos", nome:"Combatente dos Elementos", classeId:"monge", fonte:"PHB 2024",
  niveisDeCaracteristica:[3, 6, 11, 17],
  caracteristicas: [
    { nivel:3, nome:"Manipular Elementos", descricao:"Conhece Elementalismo (atributo: Sabedoria)." },
    { nivel:3, nome:"Sintonia Elemental", descricao:"Início do turno: gasta 1 Ponto de Foco para imbuir-se de energia elemental por 10 min (ou até Incapacitado). Ganha: Ataques Elementais (Ataque Desarmado causa Ácido/Elétrico/Gélido/Ígneo/Trovejante em vez de normal; ao causar esse dano, pode forçar salv. Força para empurrar/puxar até 3 m); Extensão (+3 m de alcance em Ataques Desarmados)." },
    { nivel:6, nome:"Explosão Elemental", descricao:"Ação Usar Magia (2 Pontos de Foco): energia elemental explode em Esfera de 6 m de raio centrada em ponto a até 36 m. Escolha tipo (Ácido, Elétrico, Gélido, Ígneo, Trovejante). Cada criatura na área faz salv. Destreza: falha = 3 × Dado de Artes Marciais; sucesso = metade." },
    { nivel:11, nome:"Passo dos Elementos", descricao:"Em Sintonia Elemental: Deslocamento de Natação e de Voo iguais ao Deslocamento." },
    { nivel:17, nome:"Ápice Elemental", descricao:"Em Sintonia Elemental: Golpes Potencializados (1×/turno, +Dado de Artes Marciais em um ataque) e Passo Destrutivo (Passo do Vento: +6 m; criaturas à escolha a até 1,5 m onde você entra sofrem dano = Dado de Artes Marciais, uma vez por turno). Resistência a Ácido, Elétrico, Gélido, Ígneo ou Trovejante (escolha a cada início de turno)." }
  ]
});

console.log('[DND] Subclasses do Monge carregadas.');