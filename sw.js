const CACHE = 'dnd-ficha-v2'; // <-- Mude esta versão sempre que alterar o código
const ESSENCIAIS = [
  // Arquivos Raiz
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png',
  
  // Arquivos da Ficha
  './ficha/ficha.html', './ficha/ficha.css',
  './ficha/ficha-estado.js', './ficha/ficha-calculo.js', './ficha/ficha-config.js',
  './ficha/ficha-render.js', './ficha/ficha-app.js', './ficha/ficha-validar.js',

  // DB - Classes
  './db/classes/classes-base.js',
  './db/classes/_classe-artifice.js',
  './db/classes/_classe-barbaro.js',
  './db/classes/_classe-bardo.js',
  './db/classes/_classe-bruxo.js',
  './db/classes/_classe-clerigo.js',
  './db/classes/_classe-druida.js',
  './db/classes/_classe-feiticeiro.js',
  './db/classes/_classe-guardiao.js',
  './db/classes/_classe-guerreiro.js',
  './db/classes/_classe-ladino.js',
  './db/classes/_classe-mago.js',
  './db/classes/_classe-monge.js',
  './db/classes/_classe-paladino.js',

  // DB - Itens
  './db/itens/itens-equipamento.js',
  './db/itens/itens-magicos.js',

  // DB - Magias
  './db/magias/magias.js',
  './db/magias/_bloco02.js',
  './db/magias/_bloco03.js',
  './db/magias/_bloco04.js',
  './db/magias/_bloco05.js',
  './db/magias/_bloco06.js',
  './db/magias/_bloco07.js',
  './db/magias/_bloco08.js',
  './db/magias/_bloco09.js',
  './db/magias/_bloco10.js',

  // DB - Origens
  './db/origens/origens-base.js',
  './db/origens/_especies.js',
  './db/origens/_antecedentes.js',
  './db/origens/_talentos-origem.js',
  './db/origens/_talentos-gerais.js',
  './db/origens/_talentos-estilo-de-luta.js',
  './db/origens/_talentos-dadiva-epica.js',

  // DB - Recursos
  './db/recursos/_invocacoes-bruxo.js',
  './db/recursos/_metamagia-feiticeiro.js',
  './db/recursos/_tabela-surto-selvagem.js',

  // DB - Subclasses
  './db/subclasses/_subclasse-artifice.js',
  './db/subclasses/_subclasse-barbaro.js',
  './db/subclasses/_subclasse-bardo.js',
  './db/subclasses/_subclasse-bruxo.js',
  './db/subclasses/_subclasse-clerigo.js',
  './db/subclasses/_subclasse-druida.js',
  './db/subclasses/_subclasse-feiticeiro.js',
  './db/subclasses/_subclasse-guardiao.js',
  './db/subclasses/_subclasse-guerreiro.js',
  './db/subclasses/_subclasse-ladino.js',
  './db/subclasses/_subclasse-mago.js',
  './db/subclasses/_subclasse-monge.js',
  './db/subclasses/_subclasse-paladino.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ESSENCIAIS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(r => {
      // Se achou no cache, retorna. Se não, busca na rede e salva no cache.
      return r || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match('./index.html')); // Fallback offline
    })
  );
});