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

  const icons = {
    rocket: 'M52 14c18 8 28 24 30 48L62 82 48 68 34 54zM30 58l-12 8 16 4M44 72l-8 12-4-16',
    pawn: 'M50 18a16 16 0 110 32 16 16 0 010-32zM22 84c8-22 48-22 56 0',
    base: 'M16 76V36l34-20 34 20v40zM32 76V52h36v24M26 38h48',
    crosshair: 'M50 16v18M50 66v18M16 50h18M66 50h18M50 30a20 20 0 100 40 20 20 0 000-40z',
    beaker: 'M36 16h28M44 16v24L26 76c-3 6 1 10 8 10h32c7 0 11-4 8-10L56 40V16',
    bolt: 'M58 12L28 54h22l-8 34 30-46H50z',
    leaf: 'M80 20C48 20 24 40 24 70c28 2 52-16 56-50zM24 70c18-14 32-24 56-50',
    medkit: 'M20 32h60v48H20zM38 32v-12h24v12M50 44v24M38 56h24',
    globe: 'M50 14a36 36 0 100 72 36 36 0 000-72zM14 50h72M50 14c12 13 12 59 0 72M50 14c-12 13-12 59 0 72',
    flag: 'M26 84V18h48l-8 18 8 18H26',
    signal: 'M20 70a42 42 0 0160 0M32 58a25 25 0 0136 0M46 72h8',
    stars: 'M50 14l8 24 24 8-24 8-8 24-8-24-24-8 24-8z',
    gear: 'M50 20l8 9 12-2 4 12-9 8 3 13-11 7-8-9-10 9-11-7 3-13-9-8 4-12 12 2z',
    book: 'M22 18h40c9 0 16 7 16 16v48H34c-7 0-12-5-12-12zM34 18v64',
    radio: 'M18 38h64v40H18zM34 58h12M56 52h16M56 64h16M62 38l14-18'
  };
  const icon = (name) => `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${icons[name] || icons.base}" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function adSlot(kind) {
    const banner = kind === 'banner';
    return `<aside class="ad-slot ad-${esc(kind)}" aria-label="Advertisement"><span class="ad-label">Advertisement</span><ins class="adsbygoogle" style="display:block;${banner ? 'width:100%;height:90px;' : ''}" data-ad-client="ca-pub-1319817671788428" data-ad-slot="6141169453" ${banner ? '' : 'data-ad-format="auto"'} data-full-width-responsive="true"></ins></aside>`;
  }
  function loadAds() {
    if (!window.adsbygoogle) return;
    document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }
  function sourceNotes(entity) {
    const list = (entity && entity.sources || ['communityWiki', 'officialSite']).map((k) => D.sourceRegistry[k]).filter(Boolean);
    return `<aside class="source-notes"><div class="src-head">Sources &amp; Update Notes</div><div class="src-meta"><span><strong>Last updated:</strong> ${esc(D.site.lastUpdated)}</span><span><strong>Build focus:</strong> ${esc(D.site.buildStatus)}</span></div><ul>${list.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a> - ${esc(s.note)}</li>`).join('')}</ul><p>Exact values, DLC interactions and modded behavior can change by version and load order. Verify details before committing a colony plan.</p></aside>`;
  }
  function relatedBlock(p) {
    if (!p.related || !p.related.length) return '';
    return `<nav class="related" aria-label="Related pages"><h3>Related Pages</h3><div class="related-grid">${p.related.map((r) => `<a href="${esc(r.href)}">${esc(r.label)}</a>`).join('')}</div></nav>`;
  }
  function sectionsHTML(sections) {
    return sections.map((s) => `<section class="article-section"><h3>${esc(s.h)}</h3>${s.body || ''}${s.list ? `<ul>${s.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</section>`).join('');
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

  function renderLeftNav(active) {
    leftNav.innerHTML = `<h3>Colony Sections</h3><ul>${D.categories.map((c) => `<li><a href="/${esc(c.id)}" data-r="/${esc(c.id)}">${esc(c.title)}</a></li>`).join('')}</ul><h3>Site Info</h3><ul><li><a href="/about" data-r="/about">About</a></li><li><a href="/privacy-policy" data-r="/privacy-policy">Privacy Policy</a></li><li><a href="/contact" data-r="/contact">Contact</a></li></ul>${adSlot('half-page')}`;
    leftNav.querySelectorAll('a').forEach((a) => {
      const r = a.getAttribute('data-r');
      if (active === r || (r !== '/' && active.startsWith(r + '/'))) a.classList.add('active');
    });
  }
  function renderRightNav() {
    const tip = D.tips[Math.floor(Math.random() * D.tips.length)];
    rightNav.innerHTML = `<h3>Popular Pages</h3><ul><li><a href="/getting-started/beginner-guide">Beginner Guide</a></li><li><a href="/base-building/freezer-design">Freezer Design</a></li><li><a href="/base-building/killboxes">Killbox Guide</a></li><li><a href="/getting-started/wealth-management">Wealth Management</a></li><li><a href="/combat/weapon-tier-list">Weapon Tier List</a></li><li><a href="/dlc/best-dlc-purchase-order">Best DLC Order</a></li><li><a href="/mods/best-mods">Best Mods</a></li></ul><h3>Colony Note</h3><p class="colony-note">${esc(tip)}</p>${adSlot('rectangle')}`;
  }
  function renderHome() {
    const featured = ['beginner-guide', 'first-week-survival', 'freezer-design', 'killboxes', 'wealth-management', 'best-dlc-purchase-order', 'best-mods'].map((id) => D.pages.find((p) => p.id === id)).filter(Boolean);
    main.innerHTML = `<section class="hero"><img src="/assets/images/hero/homepage-hero.svg" alt="RimWorld frontier colony survival banner" /><div class="hero-content"><span class="hero-kicker">Tactical colony survival handbook</span><h1>The Ultimate RimWorld Colony Survival Wiki</h1><p>Colonists, combat, research, raids, power grids, mods, biomes, DLC systems and advanced survival strategies for the sci-fi colony simulator.</p><div class="hero-buttons"><a class="btn" href="/getting-started/beginner-guide">Start Learning</a><a class="btn" href="/getting-started">Beginner Guide</a><a class="btn" href="/dlc">DLC Guide</a><a class="btn" href="/mods/best-mods">Best Mods</a></div></div></section>${adSlot('banner')}<h2 class="section-head">Featured Categories</h2><div class="cards cat-cards">${D.categories.map((c) => `<a class="card cat-card" href="/${esc(c.id)}"><span class="ico">${icon(c.icon)}</span><h4>${esc(c.title)}</h4><p>${esc(c.summary)}</p><div class="tags"><span>Colony</span><span>${esc(c.title.split(' ')[0])}</span></div></a>`).join('')}</div><div class="home-grid"><section class="page"><h2>Beginner Essentials</h2><div class="breadcrumb">Stabilize before the storyteller gets ideas.</div><ul class="link-list">${featured.map((p) => `<li><a href="/${esc(p.category)}/${esc(p.id)}">${esc(p.title)}<span>${esc(p.summary)}</span></a></li>`).join('')}</ul></section><section class="page"><h2>Colony Survival Loop</h2><div class="breadcrumb">The practical order of operations.</div><ol><li>Secure food, shelter and a freezer.</li><li>Build bedrooms and recreation before mood collapses.</li><li>Research batteries, defenses and medical upgrades.</li><li>Control wealth until defenses catch up.</li><li>Prepare answers for sappers, drop pods, mechs and disease.</li></ol></section></div>${adSlot('in-article')}`;
  }
  function renderCategory(id) {
    const c = category(id);
    if (!c) return render404(id);
    const pages = pagesIn(id);
    main.innerHTML = `${adSlot('banner')}<section class="page"><h1>${esc(c.title)}</h1><div class="breadcrumb">Home / ${esc(c.title)}</div><p class="lead">${esc(c.summary)}</p><div class="cards">${pages.map((p) => `<a class="card" href="/${esc(p.category)}/${esc(p.id)}"><h4>${esc(p.title)}</h4><p>${esc(p.summary)}</p></a>`).join('')}</div></section>${adSlot('in-article')}`;
  }
  function renderDetail(cat, id) {
    const c = category(cat);
    const p = page(cat, id);
    if (!c || !p) return render404(cat + '/' + id);
    main.innerHTML = `${adSlot('banner')}<article class="page article"><div class="breadcrumb"><a href="/${esc(c.id)}">${esc(c.title)}</a> / ${esc(p.title)}</div><h1>${esc(p.title)}</h1><p class="lead">${esc(p.summary)}</p><div class="info-grid"><div>${sectionsHTML(p.sections)}${relatedBlock(p)}${sourceNotes(p)}</div><aside class="infobox"><div class="infobox-head">Quick Facts</div><dl>${p.facts.map((x, i) => `<dt>${String(i + 1).padStart(2, '0')}</dt><dd>${esc(x)}</dd>`).join('')}</dl></aside></div></article>${adSlot('in-article')}`;
  }
  function renderInfo(slug) {
    const p = D.infoPages[slug];
    if (!p) return render404(slug);
    main.innerHTML = `${adSlot('banner')}<section class="page legal-page"><h1>${esc(p.title)}</h1><div class="breadcrumb">Home / ${esc(p.title)}</div>${p.body}${sourceNotes(null)}</section>`;
  }
  function render404(slug) {
    main.innerHTML = `<section class="page"><h1>Colony Record Missing</h1><p>No archive entry found for <code>${esc(slug)}</code>.</p><p><a href="/">Return to colony command</a></p></section>`;
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
  const searchIndex = [
    ...D.categories.map((c) => ({ title: c.title, sub: 'Category', href: '/' + c.id })),
    ...D.pages.map((p) => ({ title: p.title, sub: category(p.category).title, href: '/' + p.category + '/' + p.id, tags: p.facts.join(' ') })),
    ...Object.entries(D.infoPages).map(([k, p]) => ({ title: p.title, sub: 'Site Info', href: '/' + k }))
  ];
  function runSearch(q) {
    if (!q) {
      searchResults.classList.remove('open');
      return;
    }
    const low = q.toLowerCase();
    const matches = searchIndex.filter((x) => (x.title + ' ' + x.sub + ' ' + (x.tags || '')).toLowerCase().includes(low)).slice(0, 12);
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
  window.addEventListener('popstate', navigate);
  if (menuToggle) menuToggle.onclick = () => leftNav.classList.toggle('open');
  navigate();
})();
