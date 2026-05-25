(function () {
  const D = window.WikiData;
  const main = document.getElementById('main');
  const leftNav = document.getElementById('leftNav');
  const rightNav = document.getElementById('rightNav');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const menuToggle = document.getElementById('menuToggle');

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const category = (id) => D.categories.find((c) => c.id === id);
  const pagesIn = (id) => D.pages.filter((p) => p.category === id);
  const page = (cat, id) => D.pages.find((p) => p.category === cat && p.id === id);
  const route = () => (location.pathname.replace(/\/$/, '') || '/').replace('/index.html', '/');
  const priority = ['Manual', '1', '2', '3', '4'];

  function adSlot(kind) {
    const banner = kind === 'banner';
    return `<div class="ad-slot ad-${esc(kind)}" role="complementary" aria-label="Advertisement"><span class="ad-label">Trade Beacon</span><ins class="adsbygoogle" style="display:block;${banner ? 'width:100%;height:90px;' : ''}" data-ad-client="ca-pub-1319817671788428" data-ad-slot="6141169453" ${banner ? '' : 'data-ad-format="auto"'} data-full-width-responsive="true"></ins></div>`;
  }
  function loadAds() {
    if (!window.adsbygoogle) return;
    document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }
  function setMeta(attr, key, value) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = value || '';
  }
  function applySeo(r) {
    if (!window.WikiMeta || !document.head) return;
    const seo = window.WikiMeta.seoFor(r);
    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords.join(', '));
    setMeta('property', 'og:title', seo.ogTitle);
    setMeta('property', 'og:description', seo.ogDescription);
    setMeta('property', 'og:type', seo.ogType);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:image', seo.ogImage);
    setMeta('name', 'twitter:title', seo.ogTitle);
    setMeta('name', 'twitter:description', seo.ogDescription);
    setMeta('name', 'twitter:image', seo.ogImage);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = seo.canonical;
    let ld = document.getElementById('rww-jsonld');
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'rww-jsonld';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(window.WikiMeta.jsonLdFor(r));
  }

  function sourceNotes(entity) {
    const list = (entity && entity.sources || ['communityWiki', 'officialSite']).map((k) => D.sourceRegistry[k]).filter(Boolean);
    return `<aside class="source-notes"><b>Archive sources</b><div class="src-meta"><span>Updated ${esc(D.site.lastUpdated)}</span><span>${esc(D.site.buildStatus)}</span></div><ul>${list.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a> - ${esc(s.note)}</li>`).join('')}</ul></aside>`;
  }
  function sectionsHTML(sections) {
    return sections.map((s, i) => `<section class="colony-section"><h3><span>${String(i + 1).padStart(2, '0')}</span>${esc(s.h)}</h3>${s.body || ''}${s.list ? `<div class="task-grid">${s.list.map((x, n) => `<div><b>${priority[(n + i) % priority.length]}</b>${esc(x)}</div>`).join('')}</div>` : ''}</section>`).join('');
  }
  function relatedBlock(p) {
    return `<div class="related-orders">${relatedPages(p).map((r) => `<a href="${esc(r.href)}">${esc(r.label)}</a>`).join('')}</div>`;
  }
  function relatedPages(p, count = 5) {
    const sameCategory = D.pages
      .filter((candidate) => candidate.category === p.category && candidate.id !== p.id)
      .slice(0, count)
      .map((candidate) => ({ label: candidate.title, href: `/${candidate.category}/${candidate.id}` }));
    const explicit = (p.related || [])
      .filter((r) => r && r.href && r.href !== `/${p.category}`)
      .map((r) => ({ label: r.label, href: r.href }));
    const seen = new Set();
    return [...explicit, ...sameCategory].filter((item) => {
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    }).slice(0, count);
  }

  function renderLeftNav(active) {
    leftNav.innerHTML = `<div class="panel-title">Architect Menu</div>${D.categories.map((c, i) => `<a class="architect-row" href="/${esc(c.id)}" data-r="/${esc(c.id)}"><span>${String(i + 1).padStart(2, '0')}</span><b>${esc(c.title)}</b></a>`).join('')}<div class="panel-title compact">Comms</div><a class="architect-row" href="/about" data-r="/about"><span>AB</span><b>About</b></a><a class="architect-row" href="/privacy-policy" data-r="/privacy-policy"><span>PP</span><b>Privacy</b></a><a class="architect-row" href="/contact" data-r="/contact"><span>CT</span><b>Contact</b></a>`;
    leftNav.querySelectorAll('a').forEach((a) => {
      const r = a.getAttribute('data-r');
      if (r && (active === r || active.startsWith(r + '/'))) a.classList.add('active');
    });
  }
  function renderRightNav() {
    const tip = D.tips[Math.floor(Math.random() * D.tips.length)];
    rightNav.innerHTML = `<div class="panel-title">Alerts</div><div class="alert-card red">Major threat: raid scaling follows colony wealth.</div><div class="alert-card orange">Low food: freezer planning recommended.</div><div class="alert-card blue">Medical: sterile hospital improves outcomes.</div><div class="panel-title compact">Popular Orders</div><a href="/getting-started/beginner-guide">Beginner Guide</a><a href="/base-building/freezer-design">Freezer Design</a><a href="/base-building/killboxes">Killbox Guide</a><a href="/getting-started/wealth-management">Wealth Management</a><a href="/dlc/best-dlc-purchase-order">Best DLC Order</a><div class="storyteller-note"><span>Storyteller Memo</span><p>${esc(tip)}</p></div>`;
  }
  function pawnStrip() {
    const pawns = ['Cook', 'Builder', 'Doctor', 'Shooter', 'Grower', 'Crafter'];
    return `<div class="pawn-strip">${pawns.map((p, i) => `<div class="pawn"><span>${p.slice(0, 2).toUpperCase()}</span><b>${esc(p)}</b><small>${['OK', 'Tired', 'Armed', 'Idle', 'Growing', 'Craft'][i]}</small></div>`).join('')}</div>`;
  }
  function renderHome() {
    const featured = ['beginner-guide', 'first-week-survival', 'freezer-design', 'killboxes', 'wealth-management', 'best-dlc-purchase-order', 'best-mods'].map((id) => D.pages.find((p) => p.id === id)).filter(Boolean);
    main.innerHTML = `<section class="colony-hero"><img src="/assets/images/hero/homepage-hero.svg" alt="Top-down RimWorld colony command map with rooms, farms, power and raid markers" /><div class="colony-overlay">${pawnStrip()}<div class="hero-terminal"><span class="kicker">Crashlanded command archive</span><h1>The Ultimate RimWorld Colony Survival Wiki</h1><p>Colonists, raids, research, power grids, biomes, DLC systems, mods and survival strategies for a colony where every bad decision becomes a story.</p><div class="hero-actions"><a href="/getting-started/beginner-guide">Start Learning</a><a href="/base-building/freezer-design">Freezer Design</a><a href="/combat/raid-types">Raid Types</a><a href="/mods/best-mods">Best Mods</a></div></div></div></section>${adSlot('banner')}<section class="resource-bar"><div><b>Meals</b><span>42</span></div><div><b>Medicine</b><span>18</span></div><div><b>Steel</b><span>312</span></div><div><b>Components</b><span>27</span></div><div><b>Threat</b><span>Rising</span></div></section><section class="colony-layout"><div class="blueprint-grid">${D.categories.map((c, i) => `<a class="blueprint-card" href="/${esc(c.id)}"><span class="room-code">${String.fromCharCode(65 + (i % 26))}-${String(i + 1).padStart(2, '0')}</span><h3>${esc(c.title)}</h3><p>${esc(c.summary)}</p><small>${i % 3 === 0 ? 'Critical' : i % 3 === 1 ? 'Useful' : 'Expansion'}</small></a>`).join('')}</div><aside class="quick-panel"><div class="panel-title">Beginner Essentials</div>${featured.map((p) => `<a class="order-link" href="/${esc(p.category)}/${esc(p.id)}"><b>${esc(p.title)}</b><span>${esc(p.summary)}</span></a>`).join('')}</aside></section>${adSlot('in-article')}`;
  }
  function renderCategory(id) {
    const c = category(id);
    if (!c) return render404(id);
    main.innerHTML = `${adSlot('banner')}<section class="category-command"><span class="kicker">Architect tab</span><h1>${esc(c.title)}</h1><p>${esc(c.summary)}</p></section><section class="blueprint-grid wide">${pagesIn(id).map((p, i) => `<a class="blueprint-card" href="/${esc(p.category)}/${esc(p.id)}"><span class="room-code">${esc(c.title.slice(0, 2).toUpperCase())}-${String(i + 1).padStart(2, '0')}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><small>${esc(p.facts.slice(0, 2).join(' / '))}</small></a>`).join('')}</section>${adSlot('in-article')}`;
  }
  function renderDetail(cat, id) {
    const c = category(cat);
    const p = page(cat, id);
    if (!c || !p) return render404(cat + '/' + id);
    main.innerHTML = `${adSlot('banner')}<article class="colony-page"><header class="page-command"><div><div class="breadcrumb"><a href="/${esc(c.id)}">${esc(c.title)}</a> / ${esc(p.title)}</div><h1>${esc(p.title)}</h1><p>${esc(p.summary)}</p></div></header><div class="article-layout"><div>${sectionsHTML(p.sections)}${relatedBlock(p)}${sourceNotes(p)}</div><aside class="article-rail"><div class="work-priority"><b>Quick Facts</b>${p.facts.map((x, i) => `<div><span>${priority[i % priority.length]}</span>${esc(x)}</div>`).join('')}</div><div class="inspection-panel"><b>Inspection</b><a href="/${esc(c.id)}">Category: ${esc(c.title)}</a>${relatedPages(p, 5).map((r) => `<a href="${esc(r.href)}">${esc(r.label)}</a>`).join('')}</div></aside></div></article>${adSlot('in-article')}`;
  }
  function renderInfo(slug) {
    const p = D.infoPages[slug];
    if (!p) return render404(slug);
    main.innerHTML = `${adSlot('banner')}<article class="colony-page"><header class="page-command"><div><div class="breadcrumb">Comms / ${esc(p.title)}</div><h1>${esc(p.title)}</h1></div></header><div class="article-layout"><section class="colony-section">${p.body}</section><aside class="inspection-panel"><b>Site Files</b><a href="/about">About</a><a href="/privacy-policy">Privacy Policy</a><a href="/contact">Contact</a></aside></div>${sourceNotes(null)}</article>`;
  }
  function render404(slug) {
    main.innerHTML = `<section class="colony-page"><header class="page-command"><div><h1>Colony Record Missing</h1><p>No archive entry found for <code>${esc(slug)}</code>.</p><p><a href="/">Return to colony command</a></p></div></header></section>`;
  }
  function navigate() {
    const r = route();
    renderLeftNav(r);
    renderRightNav();
    const seg = r.split('/').filter(Boolean);
    if (r === '/') renderHome();
    else if (seg.length === 1 && category(seg[0])) renderCategory(seg[0]);
    else if (seg.length === 1 && D.infoPages[seg[0]]) renderInfo(seg[0]);
    else if (seg.length === 2) renderDetail(seg[0], seg[1]);
    else render404(r);
    applySeo(r);
    setTimeout(loadAds, 100);
  }
  function go(path) {
    const clean = path.replace(/\/$/, '') || '/';
    if (clean === route()) return;
    history.pushState({}, '', clean);
    leftNav.classList.remove('open');
    navigate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const searchIndex = Array.isArray(D.searchIndex) ? D.searchIndex : [
    ...D.categories.map((c) => ({ title: c.title, sub: 'Architect Tab', href: '/' + c.id, tags: c.summary })),
    ...D.pages.map((p) => ({ title: p.title, sub: category(p.category).title, href: '/' + p.category + '/' + p.id, tags: p.facts.join(' ') })),
    ...Object.entries(D.infoPages).map(([k, p]) => ({ title: p.title, sub: 'Comms', href: '/' + k, tags: p.body }))
  ];
  function runSearch(q) {
    if (!q) {
      searchResults.classList.remove('open');
      return;
    }
    const low = q.toLowerCase();
    const matches = searchIndex.filter((x) => (x.title + ' ' + x.sub + ' ' + x.tags).toLowerCase().includes(low)).slice(0, 12);
    searchResults.innerHTML = matches.length ? matches.map((m) => `<a href="${esc(m.href)}">${esc(m.title)}<span>${esc(m.sub)}</span></a>`).join('') : '<div class="empty">No colony records match.</div>';
    searchResults.classList.add('open');
  }
  searchInput.addEventListener('input', () => runSearch(searchInput.value.trim()));
  searchInput.addEventListener('focus', () => runSearch(searchInput.value.trim()));
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) {
      if (!e.target.closest('.search')) searchResults.classList.remove('open');
      return;
    }
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return;
    const url = new URL(href, location.origin);
    if (url.origin !== location.origin) return;
    if (!window.__GW_PRERENDER__) {
      searchInput.value = '';
      searchResults.classList.remove('open');
      return;
    }
    e.preventDefault();
    searchInput.value = '';
    searchResults.classList.remove('open');
    go(url.pathname);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') searchResults.classList.remove('open');
  });
  window.addEventListener('popstate', () => { if (window.__GW_PRERENDER__) navigate(); });
  if (menuToggle) menuToggle.onclick = () => leftNav.classList.toggle('open');
  if (window.__GW_PRERENDER__) {
    navigate();
  } else {
    setTimeout(loadAds, 100);
  }
})();
