const allFactions = {
  list: [
    {
      faction: 'CyberSec',
      type: 'Early Game Faction',
      requirements: 'Install a backdoor on the CSEC server',
      augmentations: 'Neurotrainer I, Synaptic Enhancement Implant, BitWire, Cranial Signal Processors - Gen I, Cranial Signal Processors - Gen II, NeuroFlux Governor',
      work: 'Hacking Contracts',
      description: 'The Internet is the first thing that was built that we don\'t fully understand, the largest experiment in anarchy that we have ever had. And as the world becomes increasingly dominated by it, society approaches the brink of total chaos. We serve only to protect society, to protect humanity, to protect the world from imminent collapse.',
      checklistID: 'faction-1',
    },
    {
      faction: 'Netburners',
      type: 'Early Game Faction',
      requirements: 'Hacking Level 80, Total Hacknet Levels of 100, Total Hacknet RAM of 8, Total Hacknet Cores of 4',
      augmentations: 'Hacknet Node NIC Architecture Neural-Upload, Hacknet Node Cache Architecture Neural-Upload, Hacknet Node CPU Architecture Neural-Upload, Hacknet Node Kernel Direct-Neural Interface, Hacknet Node Core Direct-Neural Interface, NeuroFlux Governor',
      work: 'Hacking Contracts',
      description: '~~//*>H4CK||3T 8URN3R5**>?>\~~',
      checklistID: 'faction-2',
    },
    {
      faction: 'Tian Di Hui',
      type: 'Early Game Faction',
      requirements: '$1m, Hacking Level 50, Be in Chongqing, New Tokyo, or Ishim',
      augmentations: 'Wired Reflexes, Speech Enhancement, ADR-V1 Pheromone Gene, Nuoptimal Nootropic Injector Implant, Social Negotiation Assistant (S.N.A), Speech Processor Implant, Nanofiber Weave, Neuroreceptor Management Implant, NeuroFlux Governor',
      work: 'Hacking Contracts, Security Work',
      description: 'Obey Heaven and work righteously.',
      checklistID: 'faction-3',
    },
    {
      faction: 'Shadows of Anarchy',
      type: 'Early Game Faction',
      requirements: 'Successfully infiltrate a company',
      augmentations: 'SoA - phyzical WKS harmonizer, SoA - Might of Ares, SoA - Wisdom of Athena, SoA - Chaos of Dionysus, SoA - Beauty of Aphrodite, SoA - Trickery of Hermes, SoA - Flood of Poseidon, SoA - Hunt of Artemis, SoA - Knowledge of Apollo',
      work: 'Shadows of Anarchy can only gain reputation by infiltrating.',
      description: 'The government is ruled by the corporations that we have allowed to consume it. To release the world from its shackles, the gods grant us their strength.',
      checklistID: 'faction-4',
    },
    {
      faction: 'NiteSec',
      type: 'Hacking Groups',
      requirements: 'Install a backdoor on the avmnite-02h server',
      augmentations: 'DataJack, BitWire, Neurotrainer II, Cranial Signal Processors - Gen I, Artificial Synaptic Potentiation, Cranial Signal Processors - Gen II, CRTX42-AA Gene Modification, Neural-Retention Enhancement, Embedded Netburner Module, Cranial Signal Processors - Gen III, NeuroFlux Governor',
      work: 'Hacking Contracts',
      description: 'ASCII Art',
      checklistID: 'faction-5',
    },
    {
      faction: 'The Black Hand',
      type: 'Hacking Groups',
      requirements: 'Install a backdoor on the I.I.I.I server',
      augmentations: 'DataJack, The Black Hand, Cranial Signal Processors - Gen IV, Enhanced Myelin Sheathing, Embedded Netburner Module Core Implant, Neuralstimulator, Artificial Synaptic Potentiation, Embedded Netburner Module, Cranial Signal Processors - Gen III, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work',
      description: 'The world, so afraid of strong government, now has no government. Only power - Digital power. Financial power. Technological power. And those at the top rule with an invisible hand. They built a society where the rich get richer, and everyone else suffers. <br>So much pain. So many lives. Their darkness must end.',
      checklistID: 'faction-6',
    },
    {
      faction: 'Bitrunners',
      type: 'Hacking Groups',
      requirements: 'Install a backdoor on the run4theh111z server',
      augmentations: 'DataJack, Cranial Signal Processors - Gen IV, Enhanced Myelin Sheathing, Neural Accelerator, Cranial Signal Processors - Gen V, Embedded Netburner Module Core Implant, Artificial Bio-neural Network Implant, BitRunners Neurolink, Embedded Netburner Module Core V2 Upgrade, Neurotrainer II, Embedded Netburner Module, Cranial Signal Processors - Gen III, NeuroFlux Governor',
      work: 'Hacking Contracts',
      description: 'Our entire lives are controlled by bits. All of our actions, our thoughts, our personal information. It\'s all transformed into bits, stored in bits, communicated through bits. It’s impossible for any person to move, to live, to operate at any level without the use of bits. And when a person moves, lives, and operates, they leave behind their bits, mere traces of seemingly meaningless fragments of information. But these bits can be reconstructed. Transformed. Used. <br>Those who run the bits, run the world.',
      checklistID: 'faction-7',
    },
    {
      faction: 'Sector-12',
      type: 'City Factions',
      requirements: 'Be in Sector-12, $15m, Not in City Factions: Chongqing, New Tokyo, Ishima, Volhaven',
      augmentations: 'Neuralstimulator, Wired Reflexes, Augmented Targeting I, Augmented Targeting II, Speech Processor Implant, CashRoot Starter Kit, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'The City of the Future.',
      checklistID: 'faction-8',
    },
    {
      faction: 'Aevum',
      type: 'City Factions',
      requirements: 'Be in Aevum, $40m, Not in city factions: Chongqing, New Tokyo, Ishima, Volhaven',
      augmentations: 'PCMatrix, Neuralstimulator, Wired Reflexes, Neurotrainer I, Synaptic Enhancement Implant, Speech Processor Implant, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'The Silicon City.',
      checklistID: 'faction-9',
    },
    {
      faction: 'Volhaven',
      type: 'City Factions',
      requirements: 'Be in Volhaven, $50m, Not in any other city faction',
      augmentations: 'Combat Rib I, Combat Rib II, DermaForce Particle Barrier, Wired Reflexes, Nuoptimal Nootropic Injector Implant, Speech Processor Implant, Neuralstimulator, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Benefit, Honor, and Glory.',
      checklistID: 'faction-10',
    },
    {
      faction: 'Chongqing',
      type: 'City Factions',
      requirements: 'Be in Chongqing, $20m, Not in City Factions: Sector-12, Aevum, Volhaven',
      augmentations: 'Neuregen Gene Modification, Nuoptimal Nootropic Injector Implant, Speech Processor Implant, Neuralstimulator, DataJack, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Serve the People.',
      checklistID: 'faction-11',
    },
    {
      faction: 'New Tokyo',
      type: 'City Factions',
      requirements: 'Be in New Tokyo, $20m, Not in City Factions: Sector-12, Aevum, Volhaven',
      augmentations: 'NutriGen Implant, Nuoptimal Nootropic Injector Implant, Speech Processor Implant, Neuralstimulator, DataJack, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Asia\'s World City.',
      checklistID: 'faction-12',
    },
    {
      faction: 'Ishima',
      type: 'City Factions',
      requirements: 'Be in Ishima, $30m, Not in City Factions: Sector-12, Aevum, Volhaven',
      augmentations: 'INFRARET Enhancement, Wired Reflexes, Augmented Targeting I, Combat Rib I, Speech Processor Implant, Neuralstimulator, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'The East Asian Order of the Future.',
      checklistID: 'faction-13',
    },
    {
      faction: 'Daedalus',
      type: 'Endgame Factions',
      requirements: '30 Augmentations, $100b, Hacking Level of 2500 OR All Combat Stats of 1500',
      augmentations: 'Synfibril Muscle, Embedded Netburner Module Analyze Engine, Synthetic Heart, NEMEAN Subdermal Weave, Embedded Netburner Module Direct Memory Access Upgrade, Embedded Netburner Module Core V3 Upgrade, The Red Pill, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work',
      description: 'Yesterday we obeyed kings and bent our necks to emperors. Today we kneel only to truth.',
      checklistID: 'faction-14',
    },
    {
      faction: 'The Covenant',
      type: 'Endgame Factions',
      requirements: '20 Augmentations, $75b, Hacking Level of 850, All Combat Stats of 850',
      augmentations: 'Graphene Bone Lacings, SPTN-97 Gene Modification, Embedded Netburner Module Core V3 Upgrade, Augmented Targeting III, Combat Rib III, Synfibril Muscle, Embedded Netburner Module Analyze Engine, Synthetic Heart, NEMEAN Subdermal Weave, Embedded Netburner Module Direct Memory Access Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work',
      description: 'Surrender yourself. Give up your empty individuality to become part of something great, something eternal. Become a slave. Submit your mind, body, and soul. Only then can you set yourself free. <br>Only then can you discover immortality.',
      checklistID: 'faction-15',
    },
    {
      faction: 'Illuminati',
      type: 'Endgame Factions',
      requirements: '30 Augmentations, $150b, Hacking Level of 1500, All Combat Stats of 1200',
      augmentations: 'QLink, Synfibril Muscle, Embedded Netburner Module Analyze Engine, Synthetic Heart, NEMEAN Subdermal Weave, Embedded Netburner Module Direct Memory Access Upgrade, Embedded Netburner Module Core V3 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work',
      description: 'Humanity never changes. No matter how civilized society becomes, it will eventually fall back into chaos. And from this chaos, we are the invisible hand that guides them to order.',
      checklistID: 'faction-16',
    },
    {
      faction: 'Slum Snakes',
      type: 'Criminal Organizations',
      requirements: 'All Combat Stats of 30, -9 Karma, $1m',
      augmentations: 'LuminCloaking-V2 Skin Implant, SmartSonar Implant, Wired Reflexes, LuminCloaking-V1 Skin Implant, Augmented Targeting I, Combat Rib I, NeuroFlux Governor',
      work: 'Field Work, Security Work',
      description: 'Slum Snakes rule!',
      checklistID: 'faction-17',
    },
    {
      faction: 'Tetrads',
      type: 'Criminal Organizations',
      requirements: 'Be in Chongqing, New Tokyo, or Ishima, All Combat Stats of 75, -18 Karma',
      augmentations: 'LuminCloaking-V2 Skin Implant, HemoRecirculator, Power Recirculation Core, Bionic Arms, LuminCloaking-V1 Skin Implant, NeuroFlux Governor',
      work: 'Field Work, Security Work',
      description: 'Following the mandate of Heaven and carrying out the way.',
      checklistID: 'faction-18',
    },
    {
      faction: 'The Syndicate',
      type: 'Criminal Organizations',
      requirements: 'Hacking Level 200, All Combat Stats of 200, Be in Aevum or Sector-12, $10m, -90 Karma, Not working for CIA or NSA',
      augmentations: 'HemoRecirculator, BrachiBlades, Power Recirculation Core, Augmented Targeting III, Combat Rib III, The Shadow\'s Simulacrum, Bionic Spine, Bionic Legs, NEMEAN Subdermal Weave, Wired Reflexes, ADR-V1 Pheromone Gene, Augmented Targeting I, Combat Rib I, Augmented Targeting II, Combat Rib II, Nanofiber Weave, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Honor holds you back.',
      checklistID: 'faction-19',
    },
    {
      faction: 'Speakers for the Dead',
      type: 'Criminal Organizations',
      requirements: 'Hacking Level 100, All Combat Stats of 300, 30 People Killed, -45 Karma, Not working for CIA or NSA',
      augmentations: 'Graphene BrachiBlades Upgrade, Unstable Circadian Modulator, Synfibril Muscle, Synthetic Heart, Wired Reflexes, Speech Enhancement, Nanofiber Weave, The Shadow\'s Simulacrum, Bionic Spine, Bionic Legs, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'It is better to reign in Hell than to serve in Heaven.',
      checklistID: 'faction-20',
    },
    {
      faction: 'The Dark Army',
      type: 'Criminal Organizations',
      requirements: 'Hacking Level 300, All Combat Stats of 300, Be in Chongqing, 5 People Killed, -45 Karma, Not working for CIA or NSA',
      augmentations: 'Graphene Bionic Arms Upgrade, Wired Reflexes, Augmented Targeting I, Combat Rib I, Augmented Targeting II, HemoRecirculator, Combat Rib II, Power Recirculation Core, Augmented Targeting III, Combat Rib III, Nanofiber Weave, The Shadow\'s Simulacrum, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work',
      description: 'The World doesn\'t care about right or wrong. It only cares about power.',
      checklistID: 'faction-21',
    },
    {
      faction: 'Silhouette',
      type: 'Criminal Organizations',
      requirements: 'CTO, CFO, or CEO of a company, $15m, -22 Karma',
      augmentations: 'TITN-41 Gene-Modification Injection, Speech Processor Implant, ADR-V2 Pheromone Gene, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work',
      description: 'Corporations have filled the void of power left behind by the collapse of Western government. The issue is they\'ve become so big that you don\'t know who they\'re working for. And if you\'re employed at one of these corporations, you don\'t even know who you\'re working for.',
      checklistID: 'faction-22',
    },
    {
      faction: 'ECorp',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'PC Direct-Neural Interface, PC Direct-Neural Interface Optimization Submodule, Graphene Bionic Legs Upgrade, ECorp HVMind Implant, Graphene Bionic Spine Upgrade, Embedded Netburner Module, Embedded Netburner Module Core Implant, Embedded Netburner Module Analyze Engine, Embedded Netburner Module Core V2 Upgrade, Embedded Netburner Module Direct Memory Access Upgrade, Embedded Netburner Module Core V3 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'ECorp\'s mission is simple: to connect the world of today with the technology of tomorrow. With our wide range of Internet-related software and commercial hardware, ECorp makes the world\'s information universally accessible.',
      checklistID: 'faction-23',
    },
    {
      faction: 'MegaCorp',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'Graphene Bionic Legs Upgrade, CordiARC Fusion Reactor, ADR-V1 Pheromone Gene, Embedded Netburner Module, Embedded Netburner Module Core Implant, Embedded Netburner Module Analyze Engine, Embedded Netburner Module Core V2 Upgrade, Embedded Netburner Module Direct Memory Access Upgrade, Embedded Netburner Module Core V3 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'MegaCorp does what no other dares to do. We imagine. We create. We invent. We create what others have never even dreamed of. Our work fills the world\'s needs for food, water, power, and transportation on an unprecedented scale, in ways that no other company can. In our labs and factories and on the ground with customers, MegaCorp is ushering in a new era for the world.',
      checklistID: 'faction-24',
    },
    {
      faction: 'KuaiGong International',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'HyperSight Corneal Implant, Photosynthetic Cells, Speech Enhancement, Augmented Targeting I, Combat Rib I, Augmented Targeting II, Combat Rib II, Augmented Targeting III, Combat Rib III, Bionic Spine, FocusWire, Bionic Legs, Synfibril Muscle, Synthetic Heart, Embedded Netburner Module Core V2 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Dream big. Work hard. Make history.',
      checklistID: 'faction-25',
    },
    {
      faction: 'Four Sigma',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'Neurotrainer III, Speech Enhancement, ADR-V1 Pheromone Gene, Nuoptimal Nootropic Injector Implant, Neuralstimulator, ADR-V2 Pheromone Gene, FocusWire, Enhanced Social Interaction Implant, PC Direct-Neural Interface, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'The scientific method is the best way to approach investing. Big strategies backed up with big data. Driven by deep learning and innovative ideas. And improved by iteration. That\'s Four Sigma.',
      checklistID: 'faction-26',
    },
    {
      faction: 'NWO',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'Neurotrainer III, Xanipher, Hydroflame Left Arm, ADR-V1 Pheromone Gene, Embedded Netburner Module, Power Recirculation Core, Embedded Netburner Module Core Implant, Enhanced Social Interaction Implant, Synfibril Muscle, Embedded Netburner Module Analyze Engine, Synthetic Heart, Embedded Netburner Module Core V2 Upgrade, Embedded Netburner Module Direct Memory Access Upgrade, Embedded Netburner Module Core V3 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Humans don\'t truly desire freedom. They want to be observed, understood, and judged. They want to be given purpose and direction in life. That is why they created God. And that is why they created civilization - not because of willingness, but because of a need to be incorporated into higher orders of structure and meaning.',
      checklistID: 'faction-27',
    },
    {
      faction: 'Blade Industries',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'HyperSight Corneal Implant, Neotra, Augmented Targeting I, Combat Rib I, Augmented Targeting II, Embedded Netburner Module, Combat Rib II, Augmented Targeting III, Combat Rib III, Nanofiber Weave, Bionic Spine, Bionic Legs, Embedded Netburner Module Core Implant, PC Direct-Neural Interface, Synfibril Muscle, PC Direct-Neural Interface Optimization Submodule, Embedded Netburner Module Core V2 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Augmentation is Salvation.',
      checklistID: 'faction-28',
    },
    {
      faction: 'OmniTek Incorporated',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'OmniTek InfoLoad, Augmented Targeting I, Combat Rib I, Augmented Targeting II, Combat Rib II, Augmented Targeting III, Combat Rib III, Nanofiber Weave, Bionic Spine, Bionic Legs, Enhanced Social Interaction Implant, PC Direct-Neural Interface, Embedded Netburner Module Core V2 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Simply put, our mission is to design and build robots that make a difference.',
      checklistID: 'faction-29',
    },
    {
      faction: 'Bachman & Associates',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'ADR-V2 Pheromone Gene, FocusWire, Enhanced Social Interaction Implant, SmartJaw, Speech Enhancement, Nuoptimal Nootropic Injector Implant, Neuralstimulator, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'Where Law and Business meet - that\'s where we are. Legal Insight - Business Instinct - Innovative Experience.',
      checklistID: 'faction-30',
    },
    {
      faction: 'Clarke Incorporated',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation',
      augmentations: 'Neuronal Densification, nextSENS Gene Modification, Speech Enhancement, Nuoptimal Nootropic Injector Implant, Neuralstimulator, ADR-V2 Pheromone Gene, FocusWire, Enhanced Social Interaction Implant, NeuroFlux Governor',
      work: 'Hacking Contracts, Field Work, Security Work',
      description: 'The Power of the Genome - Unlocked.',
      checklistID: 'faction-31',
    },
    {
      faction: 'Fulcrum Secret Technologies',
      type: 'Corporations',
      requirements: 'Have 400k reputation with the Corporation, Install a backdoor on the fulcrumassets server',
      augmentations: 'Graphene Bone Lacings, PC Direct-Neural Interface NeuroNet Injector, Embedded Netburner Module, Nanofiber Weave, Enhanced Myelin Sheathing, Embedded Netburner Module Core Implant, Artificial Bio-neural Network Implant, Synfibril Muscle, PC Direct-Neural Interface Optimization Submodule, Embedded Netburner Module Analyze Engine, Synthetic Heart, Graphene Bionic Legs Upgrade, NEMEAN Subdermal Weave, Embedded Netburner Module Core V2 Upgrade, Embedded Netburner Module Direct Memory Access Upgrade, Graphene Bionic Spine Upgrade, Embedded Netburner Module Core V3 Upgrade, NeuroFlux Governor',
      work: 'Hacking Contracts, Security Work',
      description: 'The human organism has an innate desire to worship. That is why they created gods. If there were no gods, it would be necessary to create them. And now we can.',
      checklistID: 'faction-32',
    },
  ]
};
const factionListTemplate = ({
  faction,
  type,
  requirements,
  augmentations,
  work,
  description,
  checklistID,
}) => `
<tr id="${checklistID.replace('faction', 'faction-card')}">
  <td><input class="form-check-input me-1 faction-checkbox" type="checkbox" value="" id="${checklistID}"></td>
  <td>${faction}</td>
  <td>${type}</td>
  <td>${requirements}</td>
  <td>${work.replace(' Contracts', '').replaceAll(' Work', '').replace('Shadows of Anarchy can only gain reputation by infiltrating.', 'Infiltration')}</td>
  <td>${augmentations}</td>
  <td hidden>F: ${faction}</td>
</tr>
`;

const factionTable = allFactions.list.map(factionListTemplate);

document.querySelector('#all-factions-data').innerHTML = `
<div class="table-responsive">
  <table class="table table-striped table-sm align-middle">
    <thead>
      <tr>
        <th scope="col"> </th>
        <th scope="col">Faction</th>
        <th scope="col">Type</th>
        <th scope="col">Requirements</th>
        <th scope="col">Work</th>
        <th scope="col">Augmentations</th>
      </tr>
    </thead>
    <tbody>
      ${factionTable.join("")}
    </tbody>
  </table>
</div>
`;