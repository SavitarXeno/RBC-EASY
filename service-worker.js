const CACHE_NAME = 'redplay-cache-v1';
const urlsToCache = [
  // HTML Files
  'BibliasMaker.html',
  'CalculadoraCientífica.html',
  'CentralCity.html',
  'Converter.html',
  'FireA.html',
  'index.html',
  'InfoContacto.html',
  'mainfest.json',
  'Mis_Proyectos.html',
  'Modo-Ascendido.html',
  'Modo-Escritor.html',
  'RedPlay.html',

  // JavaScript Files (Funciones directory)
  'Funciones/FuncionesBibliasMaker.js',
  'Funciones/FuncionesCalculadoraCientífica.js',
  'Funciones/ModoEscritor.js',

  // CSS Files (Estilos directory)
  'Estilos/EstilosBibliasMaker.css',
  'Estilos/EstilosCalculadoraCientífica.css',
  'Estilos/ModoEscritor.css',

  // Assets (Estilos/Assest directory)
  'Estilos/Assest/FCC.png',
  'Estilos/Assest/FdCC.png',
  'Estilos/Assest/FGCC.png',
  'Estilos/Assest/FMA.png',
  'Estilos/Assest/FNP.png',
  'Estilos/Assest/FSH.png',
  'Estilos/Assest/FT.png',
  'Estilos/Assest/HNP.png',
  'Estilos/Assest/ÍconoWeb.png',
  'Estilos/Assest/MAPA.png',
  'Estilos/Assest/TAP.png',
  'Estilos/Assest/WIDE1.png',
  'Estilos/Assest/WIDE2.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});