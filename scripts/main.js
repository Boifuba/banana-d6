  
const moduleName = 'banana-d6';

Hooks.once('diceSoNiceReady', (dice3d) => {
  // MASKS
  dice3d.addSystem({id:"memento", name:"Memento"}, false);
  dice3d.addDicePreset({
    type:"d6",
    system:"memento",
    labels:[
      'modules/' + moduleName + '/images/memento/d6-1.webp', 
      'modules/' + moduleName + '/images/memento/d6-2.webp', 
      'modules/' + moduleName + '/images/memento/d6-3.webp',
      'modules/' + moduleName + '/images/memento/d6-4.webp', 
      'modules/' + moduleName + '/images/memento/d6-5.webp', 		
      'modules/' + moduleName + '/images/memento/d6-6.webp'
    ],
    bumpMaps:[
      'modules/' + moduleName + '/images/memento/d6-1-b.webp', 
      'modules/' + moduleName + '/images/memento/d6-2-b.webp', 
      'modules/' + moduleName + '/images/memento/d6-3-b.webp',
      'modules/' + moduleName + '/images/memento/d6-4-b.webp',		
      'modules/' + moduleName + '/images/memento/d6-5-b.webp',
      'modules/' + moduleName + '/images/memento/d6-6-b.webp'
    ]      
  });


  
    // AVATAR
  dice3d.addSystem({id:"cyberpunk", name:"Cyberpunk"}, false);
  dice3d.addDicePreset({
    type:"d6",
    system:"cyberpunk",
    labels:[
      'modules/' + moduleName + '/images/cyberpunk/a.png', 
      'modules/' + moduleName + '/images/cyberpunk/b.png', 
      'modules/' + moduleName + '/images/cyberpunk/c.png',
      'modules/' + moduleName + '/images/cyberpunk/d.png', 
      'modules/' + moduleName + '/images/cyberpunk/e.png', 		
      'modules/' + moduleName + '/images/cyberpunk/f.png'
    ],
    bumpMaps:[
      'modules/' + moduleName + '/images/cyberpunk/1.png', 
      'modules/' + moduleName + '/images/cyberpunk/2.png', 
      'modules/' + moduleName + '/images/cyberpunk/3.png',
      'modules/' + moduleName + '/images/cyberpunk/4.png',		
      'modules/' + moduleName + '/images/cyberpunk/5.png',
      'modules/' + moduleName + '/images/cyberpunk/6.png'
    ]      
  });
  // AVATAR
  dice3d.addSystem({id:"mementocoin", name:"memento-coin"}, false);
  dice3d.addDicePreset({
    type:"dc",
    system:"GURPS",
    labels:[
      'modules/' + moduleName + '/images/memento/heads.webp', 
      'modules/' + moduleName + '/images/memento/tail.webp'
    ],
    bumpMaps:[
      'modules/' + moduleName + '/images/memento/heads_bump.webp', 
      'modules/' + moduleName + '/images/memento/tail_bump.webp'
    ]      
  });
});