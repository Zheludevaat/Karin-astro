const CACHE='deine-sterne-v3';
const ASSETS=['/','index.html','manifest.webmanifest','karin-chart.svg','caelus-bundle.js','transit-cache.json','fonts/playfair-display-latin-400.woff2','fonts/playfair-display-latin-700.woff2','fonts/playfair-display-latin-400-italic.woff2','fonts/inter-latin-400.woff2','fonts/inter-latin-500.woff2','icons/icon-192.png','icons/icon-192-maskable.png','icons/icon-512.png','icons/icon-512-maskable.png','icons/icon-180.png','icons/icon-167.png','data/sabian-en.json','data/sabian-de.json'];

self.addEventListener('install',e=>{e.waitUntil((async()=>{const c=await caches.open(CACHE);const r=await Promise.allSettled(ASSETS.map(u=>c.add(u).catch(e=>{console.warn('SW: failed',u,e.message);throw e})));const f=r.filter(x=>x.status==='rejected');if(f.length)console.warn('SW:',f.length,'assets failed');return self.skipWaiting()})())});

self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(n=>Promise.all(n.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});

self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);if(u.pathname.endsWith('.json')){e.respondWith(caches.open(CACHE).then(c=>c.match(e.request).then(cached=>{const fp=fetch(e.request).then(n=>{if(n&&n.status===200)c.put(e.request,n.clone());return n}).catch(()=>cached);return cached||fp})));return}e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(n=>{if(n&&n.status===200){const cl=n.clone();caches.open(CACHE).then(c2=>c2.put(e.request,cl))}return n})))})});
