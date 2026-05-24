window.WikiData = {
  site: {
    name: 'RimWorld Wiki',
    shortName: 'RimWorld Wiki',
    baseUrl: 'https://rimworld.gamewikihub.com',
    titleSuffix: 'RimWorld Wiki',
    defaultDescription: 'A practical RimWorld wiki for colonists, combat, research, raids, power grids, mods, biomes, DLC systems and advanced survival strategies.',
    defaultOgImage: '/assets/images/hero/homepage-hero.svg',
    lastUpdated: '2026-05-24',
    buildStatus: 'Core + DLC strategy guidance; verify exact values against your installed version and mod list.'
  },

  sourceRegistry: {
    officialSite: { label: 'RimWorld Official Site', url: 'https://rimworldgame.com/', note: 'Official game overview and DLC information.' },
    steam: { label: 'RimWorld Steam Page', url: 'https://store.steampowered.com/app/294100/RimWorld/', note: 'Official store description, DLC listings and update context.' },
    communityWiki: { label: 'RimWorld Wiki', url: 'https://rimworldwiki.com/', note: 'Community mechanics reference for items, pawns, systems and events.' },
    ludeonForum: { label: 'Ludeon Forums', url: 'https://ludeon.com/forums/', note: 'Community modding, support and strategy discussion.' }
  },

  categories: [
    { id: 'getting-started', title: 'Getting Started', icon: 'rocket', summary: 'Beginner guide, scenarios, first week survival, wealth management and common mistakes.' },
    { id: 'colonists', title: 'Colonists', icon: 'pawn', summary: 'Skills, traits, health, mood, relationships, passions, bionics and pawn management.' },
    { id: 'base-building', title: 'Base Building', icon: 'base', summary: 'Starter bases, bedrooms, freezers, hospitals, prisons, killboxes, storage and fire safety.' },
    { id: 'combat', title: 'Combat', icon: 'crosshair', summary: 'Cover, melee, ranged combat, raids, mechanoids, armor, weapons and turrets.' },
    { id: 'research', title: 'Research', icon: 'beaker', summary: 'Research tree, best research order, benches, multi-analyzers and tech progression.' },
    { id: 'power', title: 'Power', icon: 'bolt', summary: 'Batteries, conduits, solar, wind, geothermal, chemfuel and redundant grid design.' },
    { id: 'farming', title: 'Farming & Food', icon: 'leaf', summary: 'Crops, soil fertility, hydroponics, animals, meals, nutrient paste and food preservation.' },
    { id: 'medical', title: 'Medical', icon: 'medkit', summary: 'Disease, surgery, prosthetics, drugs, bleeding, pain, consciousness and hospitals.' },
    { id: 'biomes', title: 'Biomes', icon: 'globe', summary: 'Temperate forest, desert, ice sheet, jungle, tundra and biome-specific survival.' },
    { id: 'factions', title: 'Factions', icon: 'flag', summary: 'Empire, pirates, tribals, outlanders, mechanoids, insects, diplomacy and raid styles.' },
    { id: 'storyteller-ai', title: 'Storyteller AI', icon: 'signal', summary: 'Cassandra Classic, Phoebe Chillax, Randy Random, pacing and difficulty differences.' },
    { id: 'dlc', title: 'DLC', icon: 'stars', summary: 'Royalty, Ideology, Biotech, Anomaly and how DLC systems reshape colonies.' },
    { id: 'mods', title: 'Mods', icon: 'gear', summary: 'Vanilla Expanded, Combat Extended, RimHUD, Hospitality, performance mods and compatibility.' },
    { id: 'guides', title: 'Guides', icon: 'book', summary: 'Starter bases, killboxes, freezers, wealth, weapons, traits, mods, DLC and Randy survival.' },
    { id: 'updates', title: 'Updates', icon: 'radio', summary: 'Patch notes, DLC updates, mod compatibility notes and site refreshes.' }
  ],

  pages: [
    article('getting-started', 'beginner-guide', 'Beginner Guide', 'Start with food, shelter, power and a defense plan before the storyteller starts testing the colony.', ['Crashlanded scenario', 'Early priorities', 'Food', 'Shelter', 'First raid']),
    article('getting-started', 'starting-scenarios', 'Starting Scenarios', 'Scenarios decide starting pressure, tech level, pawn count and how quickly mistakes become fatal.', ['Crashlanded', 'Tribal', 'Rich Explorer', 'Naked Brutality', 'Custom scenario']),
    article('getting-started', 'first-week-survival', 'First Week Survival', 'The first week is about building a stable loop before comfort becomes a distraction.', ['Food', 'Bedrooms', 'Freezer', 'Batteries', 'Early defense']),
    article('getting-started', 'wealth-management', 'Wealth Management', 'Wealth makes the colony shinier and the raids meaner.', ['Raid scaling', 'Unnecessary wealth', 'Stockpile control', 'Defensive timing', 'Safe investment']),
    article('getting-started', 'beginner-mistakes', 'Beginner Mistakes', 'Most colony failures start as obvious systems left unfinished.', ['Huge bases too early', 'Bad freezer setup', 'No hospital', 'No firefoam', 'Mood neglect']),

    article('colonists', 'skills', 'Skills', 'Skills decide what a pawn can do well, what they ruin slowly and who deserves the good tools.', ['Shooting', 'Melee', 'Construction', 'Crafting', 'Medicine']),
    article('colonists', 'traits', 'Traits', 'Traits are powerful because they shape mood, work, combat and social problems at the same time.', ['Mood effects', 'Skill modifiers', 'Work priorities', 'Dangerous combos', 'Best use cases']),
    article('colonists', 'health-system', 'Health System', 'Health is a chain of injuries, infections, scars, consciousness and treatment quality.', ['Injuries', 'Scars', 'Infections', 'Diseases', 'Bionics']),
    article('colonists', 'mood-system', 'Mood System', 'Mood management keeps colonies from turning ordinary hardship into social collapse.', ['Expectations', 'Beauty', 'Recreation', 'Food quality', 'Relationships']),
    article('colonists', 'relationships', 'Relationships', 'Relationships create weddings, rivalries, social fights and mood cascades.', ['Marriage', 'Rivals', 'Social fights', 'Family', 'Opinion']),
    article('colonists', 'passions', 'Passions', 'Passions are the hidden engine behind efficient skill growth.', ['Learning multipliers', 'Work assignment', 'Burning passion', 'Skill planning', 'Long-term roles']),

    article('base-building', 'base-layout-guide', 'Base Layout Guide', 'A good base reduces walking, controls temperature and turns raids into planned encounters.', ['Early layout', 'Compact base', 'Mountain base', 'Open colony', 'Expansion']),
    article('base-building', 'bedrooms', 'Bedrooms', 'Bedrooms are mood infrastructure disguised as small rooms.', ['Size', 'Beauty', 'Impressiveness', 'Furniture', 'Expectations']),
    article('base-building', 'freezer-design', 'Freezer Design Guide', 'A freezer is the difference between a harvest and a pile of rot.', ['Double walls', 'Coolers', 'Airlocks', 'Butcher flow', 'Power backup']),
    article('base-building', 'hospital-design', 'Hospital Design', 'Hospitals turn disasters into recoveries when cleanliness and medicine are ready.', ['Sterile tiles', 'Vitals monitor', 'Medicine storage', 'Bed quality', 'Doctor access']),
    article('base-building', 'prison-design', 'Prison Design', 'Prisons are recruitment systems, not just rooms with locked doors.', ['Recruitment', 'Suppression', 'Escape prevention', 'Mood', 'Security']),
    article('base-building', 'killboxes', 'Killbox Guide', 'Killboxes control pathing, cover and line of fire when raids outgrow open-field bravery.', ['Pathing', 'Traps', 'Turrets', 'Anti-mech design', 'Fallback doors']),
    article('base-building', 'storage-systems', 'Storage Systems', 'Storage controls work speed, fire risk and whether pawns waste half a day walking.', ['Shelves', 'Warehouse layout', 'Critical stockpiles', 'Fire prevention', 'Work zones']),
    article('base-building', 'fire-safety', 'Fire Safety', 'Fire safety is boring until one wooden hallway becomes colony history.', ['Stone walls', 'Firefoam poppers', 'Wiring safety', 'Home zone', 'Safe breaks']),

    article('combat', 'combat-basics', 'Combat Basics', 'Combat is cover, range, armor penetration and retreat discipline.', ['Cover', 'Positioning', 'Range', 'Armor penetration', 'Fallback lines']),
    article('combat', 'melee-combat', 'Melee Combat', 'Melee works best when chokepoints make enemy numbers irrelevant.', ['Blockers', 'Chokepoints', 'Melee tanking', 'Shield belts', 'Door fighting']),
    article('combat', 'ranged-combat', 'Ranged Combat', 'Ranged combat rewards firing lanes, weapon range and clean retreats.', ['Firing lines', 'Sniper tactics', 'Assault rifles', 'Cover', 'Focus fire']),
    article('combat', 'raid-types', 'Raid Types', 'Raid type determines whether walls help, hurt or do nothing.', ['Standard raids', 'Sappers', 'Breachers', 'Drop pods', 'Infestations']),
    article('combat', 'mechanoids', 'Mechanoids', 'Mechanoids punish soft cover and underprepared colonies.', ['Scythers', 'Centipedes', 'Lancers', 'Pikemen', 'Mech clusters']),
    article('combat', 'armor-guide', 'Armor Guide', 'Armor turns lethal hits into survivable injuries when matched to the threat.', ['Flak', 'Recon', 'Marine', 'Cataphract', 'Armor penetration']),
    article('combat', 'weapon-tier-list', 'Weapon Tier List', 'Weapons should be judged by range, DPS, armor penetration and colony economy.', ['Early game', 'Mid game', 'End game', 'Crafting quality', 'Specialists']),
    article('combat', 'turrets', 'Turrets', 'Turrets are support tools, not substitutes for a trained defense plan.', ['Mini turrets', 'Uranium slug', 'Autocannon', 'Power', 'Explosion risk']),

    article('research', 'research-tree', 'Research Tree', 'Research order decides when a colony becomes stable, rich or dangerously overextended.', ['Early priorities', 'Tech progression', 'Industrial path', 'Spacer tech', 'DLC tech']),
    article('research', 'best-research-order', 'Best Research Order', 'The best research order solves immediate survival before chasing luxury.', ['Batteries', 'Geothermal', 'Hospital beds', 'Fabrication', 'Microelectronics']),
    article('research', 'research-benches', 'Research Bench Types', 'Research benches are bottlenecks; upgrade them when the colony can support the power and space.', ['Simple bench', 'Hi-tech bench', 'Multi-analyzer', 'Cleanliness', 'Research speed']),

    article('power', 'power-basics', 'Power Basics', 'Power grids fail when batteries, conduits and load growth are treated casually.', ['Batteries', 'Conduits', 'Short circuits', 'Switches', 'Redundancy']),
    article('power', 'solar-power', 'Solar Power', 'Solar is clean and predictable until night, eclipse or bad battery planning.', ['Efficiency', 'Day cycle', 'Batteries', 'Panels', 'Backup']),
    article('power', 'wind-turbines', 'Wind Turbines', 'Wind turbines need protected clear space more than they need optimism.', ['Spacing', 'Obstacles', 'Variable output', 'Battery support', 'Fields']),
    article('power', 'geothermal', 'Geothermal', 'Geothermal is stable power with placement and defense problems.', ['Steam geysers', 'Defensive placement', 'Long conduits', 'Walls', 'Grid value']),
    article('power', 'chemfuel', 'Chemfuel', 'Chemfuel is portable power, mortar supply and a fire hazard in one resource.', ['Generators', 'Boomalopes', 'Refining', 'Storage', 'Fire risk']),
    article('power', 'power-grid-design', 'Power Grid Design', 'A good grid isolates failure and keeps critical systems running.', ['Battery rooms', 'Hidden conduits', 'Switches', 'Backup generators', 'Freezer priority']),

    article('farming', 'crop-guide', 'Crop Guide', 'Crop choice controls food timing, medicine, drugs and labor demand.', ['Rice', 'Corn', 'Potatoes', 'Healroot', 'Psychoid']),
    article('farming', 'soil-fertility', 'Soil Fertility', 'Soil fertility decides whether a field is efficient or just large.', ['Rich soil', 'Hydroponics', 'Grow zones', 'Climate', 'Labor']),
    article('farming', 'animal-farming', 'Animal Farming', 'Animals are food, wool, hauling, caravan power and sometimes a hay-eating mistake.', ['Muffalo', 'Alpaca', 'Chickens', 'Cows', 'Pens']),
    article('farming', 'food-types', 'Food Types', 'Meal type affects mood, labor, ingredients and emergency stability.', ['Simple meals', 'Fine meals', 'Lavish meals', 'Nutrient paste', 'Packaged meals']),
    article('farming', 'food-preservation', 'Food Preservation', 'Food preservation is freezer design, meal planning and caravan preparation.', ['Freezer management', 'Shelves', 'Caravan food', 'Pemmican', 'Power backup']),

    article('medical', 'disease-guide', 'Disease Guide', 'Disease survival is bed rest, medicine quality and doctor availability.', ['Plague', 'Flu', 'Malaria', 'Immunity gain', 'Treatment quality']),
    article('medical', 'surgery', 'Surgery', 'Surgery success depends on doctor skill, cleanliness, medicine and bed quality.', ['Success chance', 'Cleanliness', 'Medicine quality', 'Bed quality', 'Bionics']),
    article('medical', 'prosthetics', 'Prosthetics', 'Prosthetics turn permanent injuries into upgrade paths.', ['Peg legs', 'Prosthetics', 'Bionics', 'Archotech', 'Body parts']),
    article('medical', 'drug-guide', 'Drug Guide', 'Drugs are tools, trade goods and addiction risks.', ['Go-juice', 'Yayo', 'Smokeleaf', 'Wake-up', 'Policies']),
    article('medical', 'blood-injury-system', 'Blood and Injury System', 'Bleeding, pain and consciousness decide whether a pawn walks away or becomes cargo.', ['Bleeding', 'Pain', 'Consciousness', 'Tending', 'Rescue']),

    article('biomes', 'temperate-forest', 'Temperate Forest', 'Temperate forest is forgiving enough to teach the game without removing danger.', ['Weather', 'Growing season', 'Wood', 'Animals', 'Beginner difficulty']),
    article('biomes', 'desert', 'Desert', 'Desert colonies trade disease pressure for heat, sparse wood and food planning.', ['Heat', 'Low wood', 'Soil', 'Stone', 'Caravans']),
    article('biomes', 'ice-sheet', 'Ice Sheet', 'Ice sheet survival is a challenge run in temperature, food and power math.', ['Cold', 'No soil', 'No wood', 'Hydroponics', 'Trade dependence']),
    article('biomes', 'jungle', 'Jungle', 'Jungle gives growth and disease in equal measure.', ['Disease', 'Fertility', 'Animals', 'Heat', 'Vegetation']),
    article('biomes', 'tundra', 'Tundra', 'Tundra is a short-growing-season test of freezer and stockpile discipline.', ['Cold', 'Short seasons', 'Wildlife', 'Wood', 'Warm clothing']),

    article('factions', 'empire', 'Empire', 'The Empire brings permits, titles, psycasts and political consequences.', ['Royalty DLC', 'Titles', 'Permits', 'Quests', 'Tribute']),
    article('factions', 'pirates', 'Pirates', 'Pirates are persistent raid pressure with little diplomatic value.', ['Hostility', 'Raid styles', 'Gear', 'Capture', 'Threats']),
    article('factions', 'tribals', 'Tribals', 'Tribals bring numbers, low armor and early raid pressure.', ['Low tech', 'Large raids', 'Melee', 'Diplomacy', 'Prisoners']),
    article('factions', 'outlanders', 'Outlanders', 'Outlanders are trade partners, allies and modern raid threats.', ['Technology', 'Diplomacy', 'Trade', 'Raids', 'Allies']),
    article('factions', 'mechanoid-hive', 'Mechanoid Hive', 'Mechanoids are immune to diplomacy and very interested in testing armor.', ['Mechs', 'Clusters', 'No negotiation', 'EMP', 'Heavy weapons']),
    article('factions', 'insects', 'Insects', 'Insects turn mountain bases into a security question.', ['Infestations', 'Hives', 'Melee swarms', 'Heat tactics', 'Bait rooms']),

    article('storyteller-ai', 'cassandra-classic', 'Cassandra Classic', 'Cassandra escalates pressure in a readable but relentless curve.', ['Pacing', 'Event frequency', 'Threat growth', 'Beginner value', 'Pressure']),
    article('storyteller-ai', 'phoebe-chillax', 'Phoebe Chillax', 'Phoebe gives more breathing room, which can make rare threats feel sharper.', ['Long gaps', 'Recovery time', 'Sudden danger', 'Builder play', 'Difficulty']),
    article('storyteller-ai', 'randy-random', 'Randy Random', 'Randy turns probability into colony folklore.', ['Random pacing', 'Event clusters', 'Quiet years', 'Bad luck', 'Challenge runs']),

    article('dlc', 'royalty', 'Royalty DLC Guide', 'Royalty adds titles, psycasts, permits and Empire politics.', ['Psycasts', 'Titles', 'Permits', 'Empire quests', 'Honor']),
    article('dlc', 'ideology', 'Ideology DLC Guide', 'Ideology changes what the colony believes is moral, beautiful or unforgivable.', ['Memes', 'Precepts', 'Rituals', 'Slavery', 'Specialist roles']),
    article('dlc', 'biotech', 'Biotech DLC Guide', 'Biotech adds genes, children, xenotypes, pollution and controllable mechanoids.', ['Genes', 'Xenotypes', 'Children', 'Mechanoids', 'Pollution']),
    article('dlc', 'anomaly', 'Anomaly DLC Guide', 'Anomaly adds entities, containment, rituals and darker event chains.', ['Entities', 'Containment', 'Rituals', 'Dark events', 'Research']),
    article('dlc', 'best-dlc-purchase-order', 'Best DLC Purchase Order', 'DLC value depends on whether you want politics, ideology, biology or horror.', ['Royalty', 'Ideology', 'Biotech', 'Anomaly', 'Compatibility']),

    article('mods', 'vanilla-expanded', 'Vanilla Expanded', 'Vanilla Expanded is a family of mods that broadens RimWorld without abandoning its feel.', ['Content scope', 'Compatibility', 'Performance', 'Beginner friendliness', 'Combinations']),
    article('mods', 'combat-extended', 'Combat Extended', 'Combat Extended rewrites combat into a harsher ballistic simulation.', ['Ammo', 'Armor', 'Compatibility', 'Learning curve', 'Load order']),
    article('mods', 'rimhud', 'RimHUD', 'RimHUD improves pawn readability without changing colony balance.', ['Interface', 'Pawn panels', 'Compatibility', 'Performance', 'Beginner value']),
    article('mods', 'hospitality', 'Hospitality', 'Hospitality makes visitors and guest beds into a real colony system.', ['Guests', 'Recruitment', 'Trading', 'Mood', 'Compatibility']),
    article('mods', 'performance-fish', 'Performance Fish', 'Performance mods help large modlists survive their own ambition.', ['Performance', 'Compatibility', 'Large colonies', 'Modlists', 'Testing']),
    article('mods', 'best-mods', 'Best Mods for Beginners', 'Good beginner mods improve readability before they overhaul balance.', ['RimHUD', 'Allow Tool', 'Vanilla Expanded', 'Hospitality', 'Performance mods']),

    article('guides', 'best-starter-base-designs', 'Best Starter Base Designs', 'Starter bases should be small, fire-safe and easy to defend.', ['Core rooms', 'Freezer', 'Barracks', 'Storage', 'Defense line']),
    article('guides', 'best-defensive-layouts', 'Best Defensive Layouts', 'Defense layouts are about pathing, cover, fallback points and raid variety.', ['Killboxes', 'Open defense', 'Turrets', 'Mechs', 'Breachers']),
    article('guides', 'wealth-control-guide', 'Wealth Control Guide', 'Wealth control keeps raid difficulty close to actual colony readiness.', ['Stockpiles', 'Floors', 'Art', 'Animals', 'Defense investment']),
    article('guides', 'advanced-killbox-designs', 'Advanced Killbox Designs', 'Advanced killboxes handle sappers, breachers, mechs and fire better than simple corridors.', ['Pathing', 'Turret bait', 'EMP', 'Cover denial', 'Fallback doors']),
    article('guides', 'efficient-freezer-setups', 'Efficient Freezer Setups', 'Efficient freezers preserve food without draining the grid or slowing cooks.', ['Double walls', 'Airlocks', 'Coolers', 'Shelves', 'Butcher flow']),
    article('guides', 'mid-game-survival', 'Mid-Game Survival Guide', 'Mid-game survival is about avoiding wealth spikes while building real defenses.', ['Research', 'Armor', 'Hospital', 'Power', 'Trade']),
    article('guides', 'end-game-colony', 'End-Game Colony Guide', 'End-game colonies survive by redundancy, specialists and raid-specific answers.', ['Spacer tech', 'Marine armor', 'Mechs', 'Ship launch', 'DLC threats']),
    article('guides', 'randy-random-survival', 'How to Survive Randy Random', 'Randy survival means preparing for event clusters without assuming fairness.', ['Stockpiles', 'Medical backup', 'Defense redundancy', 'Fire safety', 'Bad timing']),
    article('guides', 'best-traits-tier-list', 'Best Traits Tier List', 'Traits should be ranked by job value, mood impact and colony risk.', ['Industrious', 'Jogger', 'Tough', 'Chemical interest', 'Pyromaniac']),
    article('guides', 'best-weapons-tier-list', 'Best Weapons Tier List', 'Weapon tiers change by target, range, armor and production quality.', ['Assault rifle', 'Charge rifle', 'Sniper rifle', 'Heavy SMG', 'Melee weapons']),

    article('updates', 'patch-notes', 'Patch Notes', 'Patch notes matter because balance, DLC systems and mod compatibility shift colony planning.', ['Game updates', 'DLC changes', 'Bug fixes', 'Mod impact', 'Version checks']),
    article('updates', 'mod-compatibility', 'Mod Compatibility Notes', 'Compatibility notes prevent a modlist from becoming the true final boss.', ['Load order', 'Dependencies', 'Performance', 'DLC support', 'Save safety'])
  ],

  tips: [
    'A freezer without backup power is just a delayed rot box.',
    'Wealth is raid difficulty wearing a nicer hat.',
    'Every colony needs a doctor before it needs marble floors.',
    'Stone walls are cheaper than rebuilding after a wooden base burns.',
    'Do not research luxury faster than you build defenses.',
    'A good killbox still needs a plan for breachers and drop pods.',
    'Mood breaks are logistics failures with feelings.'
  ],

  infoPages: {
    about: {
      title: 'About RimWorld Wiki',
      body: '<p><strong>RimWorld Wiki</strong> is an unofficial fan-made GameWikiHub archive for practical colony survival guidance: colonists, raids, base design, research, farming, medical systems, DLC, mods and advanced strategy.</p><p>The site is built as a fast static knowledge base with consistent article templates, searchable content, SEO metadata and non-invasive ad placements.</p><h3>Editorial approach</h3><p>Articles are written like advice from a veteran colony player: direct, tactical and focused on preventing avoidable disasters.</p><h3>Unofficial notice</h3><p>This site is not affiliated with, endorsed by, or sponsored by Ludeon Studios.</p>'
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      body: '<p><strong>Effective date:</strong> May 24, 2026</p><p>This static wiki does not require user accounts and does not intentionally collect names, passwords, payment information or private account details.</p><h3>Automatically processed information</h3><p>Hosting, analytics, security and advertising providers may process technical information such as IP address, browser type, device type, pages visited, referring pages, approximate location and timestamps.</p><h3>Cookies and advertising</h3><p>This site may use cookies, local storage, analytics tools and advertising providers such as Google AdSense. Advertising partners may use cookies or similar technologies to serve ads, measure performance, prevent fraud and personalize or limit advertising according to user settings and applicable law.</p><h3>Third-party links</h3><p>External links to official resources, stores, community wikis, documentation or mod sites are governed by those sites&apos; own policies.</p><h3>Contact</h3><p>Questions about this policy can be sent through the contact page.</p>'
    },
    contact: {
      title: 'Contact',
      body: '<p>Use this page to report corrections, suggest guide topics, request removals or ask about the RimWorld Wiki project.</p><h3>Email</h3><p><a href="mailto:contact@gamewikihub.com">contact@gamewikihub.com</a></p><h3>What to include</h3><ul><li>The page URL or title.</li><li>What information is wrong, missing or outdated.</li><li>A source, screenshot, patch note or clear explanation when available.</li></ul><h3>Official support</h3><p>For official support, purchases, bug reports or account issues, contact Ludeon Studios or the relevant platform support channel.</p>'
    }
  }
};

function article(category, id, title, summary, points) {
  return {
    category,
    id,
    title,
    summary,
    facts: points,
    sections: [
      { h: 'Quick Summary', body: '<p>' + summary + '</p>' },
      { h: 'Why It Matters', body: '<p>RimWorld turns small planning gaps into colony stories. This topic matters because it affects survival, work speed, raid readiness, mood stability or long-term colony growth.</p>' },
      { h: 'Key Systems', list: points },
      { h: 'Strategy Tips', body: '<p>Build the smallest reliable version first, then expand once the colony can defend and maintain it. A clean system beats a large system that only works while nothing is on fire.</p>' },
      { h: 'Common Mistakes', list: ['Expanding before food and power are stable', 'Ignoring pawn mood while chasing efficiency', 'Letting wealth outpace defenses', 'Building with flammable materials in critical areas', 'Forgetting fallback plans for unusual raids'] },
      { h: 'FAQ', list: ['Is this beginner friendly? Yes, if you start with the simple version.', 'Does DLC change this? Some DLC systems add options or threats, so check related DLC pages.', 'Do mods change the advice? Major overhaul mods can change balance and priorities.'] }
    ],
    related: points.slice(0, 3).map((p) => ({ label: p, href: '/' + category })),
    sources: ['communityWiki', 'officialSite']
  };
}
