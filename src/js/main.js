CGP = {
  PreviousPlot: [],
  Backup: {}
};

CGP.plants = {
  'bakerWheat': {
    generation: 0,
    recipes: [
      {
        parents: {
          bakerWheat: {
            min: 2
          }
        },
        chance: 0.2
      }
    ],
    upgrade: 'Wheat slims'
  },
  'thumbcorn': {
    generation: 1,
    recipes: [
      {
        parents: {
          bakerWheat: {
            min: 2
          }
        },
        chance: 0.05
      }
    ]
  },
  'cronerice': {
    generation: 2,
    recipes: [
      {
        parents: {
          bakerWheat: {},
          thumbcorn: {}
        },
        chance: 0.01
      }
    ]
  },
  'gildmillet': {
    generation: 3,
    recipes: [
      {
        parents: {
          cronerice: {},
          thumbcorn: {}
        },
        chance: 0.03
      }
    ]
  },
  'clover': {
    generation: 4,
    recipes: [
      {
        parents: {
          bakerWheat: {},
          gildmillet: {}
        },
        chance: 0.03
      }
    ]
  },
  'goldenClover': {
    generation: 4,
    recipes: [
      {
        parents: {
          bakerWheat: {},
          gildmillet: {}
        },
        chance: 0.0007
      }, {
        parents: {
          clover: {
            min: 2,
            max: 4
          }
        },
        chance: 0.0001
      }, {
        parents: {
          clover: {
            min: 4
          }
        },
        chance: 0.0007
      }
    ]

  },
  'shimmerlily': {
    generation: 5,
    recipes: [
      {
        parents: {
          clover: {},
          gildmillet: {}
        },
        chance: 0.02
      }
    ]
  },
  'elderwort': {
    generation: 4,
    recipes: [
      {
        parents: {
          shimmerlily: {},
          cronerice: {}
        },
        chance: 0.01
      }, {
        parents: {
          wrinklegill: {},
          cronerice: {}
        },
        chance: 0.002
      }
    ],
    upgrade: 'Elderwort biscuits'
  },
  'bakeberry': {
    generation: 1,
    recipes: [
      {
        parents: {
          bakerWheat: {
            min: 2
          }
        },
        chance: 0.001
      }
    ],
    harvest: true,
    upgrade: 'Bakeberry cookies'

  },
  'chocoroot': {
    generation: 3,
    recipes: [
      {
        parents: {
          bakerWheat: {},
          brownMold: {}
        },
        chance: 0.1
      }
    ],
    harvest: true
  },
  'whiteChocoroot': {
    generation: 4,
    recipes: [
      {
        parents: {
          chocoroot: {},
          whiteMildew: { mature: false }
        },
        chance: 0.1
      }
    ],
    harvest: true
  },
  'whiteMildew': {
    generation: 3,
    recipes: [
      {
        parents: {
          brownMold: { mature: false },
          whiteMildew: { max: 1, mature: false }
        },
        chance: 0.5
      }
    ]
  },
  'brownMold': {
    generation: 2,
    recipes: [
      {
        special: true
      }
    ]
  },
  'meddleweed': {
    generation: 1,
    recipes: [
      {
        special: true,
        chance: 0.002
      }
    ]
  },
  'whiskerbloom': {
    generation: 6,
    recipes: [
      {
        parents: {
          shimmerlily: {},
          whiteChocoroot: {}
        },
        chance: 0.01
      }
    ]
  },
  'chimerose': {
    generation: 7,
    recipes: [
      {
        parents: {
          shimmerlily: {},
          whiskerbloom: {}
        },
        chance: 0.05
      }
    ]
  },
  'nursetulip': {
    generation: 7,
    recipes: [
      {
        parents: {
          whiskerbloom: { min: 2 }
        },
        chance: 0.05
      }
    ]
  },
  'drowsyfern': {
    generation: 7,
    recipes: [
      {
        parents: {
          chocoroot: {},
          keenmoss: {}
        },
        chance: 0.005
      }
    ],
    upgrade: 'Fern tea'
  },
  'wardlichen': {
    generation: 4,
    recipes: [
      {
        parents: {
          cronerice: {},
          whiteMildew: {}
        },
        chance: 0.005
      }, {
        parents: {
          cronerice: {},
          keenmoss: {}
        },
        chance: 0.005
      }
    ]
  },
  'keenmoss': {
    generation: 6,
    recipes: [
      {
        parents: {
          greenRot: {},
          brownMold: {}
        },
        chance: 0.1
      }
    ]
  },
  'queenbeet': {
    generation: 4,
    recipes: [
      {
        parents: {
          chocoroot: {},
          bakeberry: {}
        },
        chance: 0.01
      }
    ],
    harvest: true
  },
  'queenbeetLump': {
    generation: 5,
    recipes: [
      {
        parents: {
          queenbeet: { min: 8 }
        },
        chance: 0.001
      }
    ],
    harvest: true
  },
  'duketater': {
    generation: 5,
    recipes: [
      {
        parents: {
          queenbeet: { min: 2 }
        },
        chance: 0.001
      }
    ],
    harvest: true,
    upgrade: 'Duketater cookies'
  },
  'crumbspore': {
    generation: 2,
    recipes: [
      {
        special: true
      }
    ]
  },
  'doughshroom': {
    generation: 3,
    recipes: [
      {
        parents: {
          crumbspore: { min: 2 }
        },
        chance: 0.005
      }
    ]
  },
  'glovemorel': {
    generation: 3,
    recipes: [
      {
        parents: {
          crumbspore: {},
          thumbcorn: {}
        },
        chance: 0.02
      }
    ]
  },
  'cheapcap': {
    generation: 6,
    recipes: [
      {
        parents: {
          crumbspore: {},
          shimmerlily: {}
        },
        chance: 0.04
      }
    ]
  },
  'foolBolete': {
    generation: 6,
    recipes: [
      {
        parents: {
          doughshroom: {},
          greenRot: {}
        },
        chance: 0.04
      }
    ]
  },
  'wrinklegill': {
    generation: 3,
    recipes: [
      {
        parents: {
          crumbspore: {},
          brownMold: {}
        },
        chance: 0.06
      }
    ]
  },
  'greenRot': {
    generation: 5,
    recipes: [
      {
        parents: {
          whiteMildew: {},
          clover: {}
        },
        chance: 0.05
      }
    ],
    upgrade: 'Green yeast digestives'
  },
  'shriekbulb': {
    generation: 5,
    recipes: [
      {
        parents: {
          queenbeet: { min: 5 }
        },
        chance: 0.001
      }, {
        parents: {
          duketater: { min: 3, mature: false }
        },
        chance: 0.005
      }, {
        parents: {
          doughshroom: { min: 4, mature: false }
        },
        chance: 0.002
      }, {
        parents: {
          wrinklegill: {},
          elderwort: {}
        },
        chance: 0.001
      }, {
        parents: {
          elderwort: { min: 5 }
        },
        chance: 0.001
      }
    ]
  },
  'tidygrass': {
    generation: 5,
    recipes: [
      {
        parents: {
          bakerWheat: {},
          whiteChocoroot: {}
        },
        chance: 0.02
      }
    ]
  },
  'everdaisy': {
    generation: 6,
    recipes: [
      {
        parents: {
          tidygrass: { min: 3 },
          elderwort: { min: 3 }
        },
        chance: 0.002
      }
    ]
  },
  'ichorpuff': {
    generation: 5,
    recipes: [
      {
        parents: {
          elderwort: {},
          crumbspore: {}
        },
        chance: 0.002
      }
    ],
    upgrade: 'Ichor syrup'
  }
};

CGP.ConfigDefault = {
  Volume: 100,
  AlertOnMatureSeed: true,
  AlertOnDyingSeed: true,
  AlertOnMatureUpgrade: true,
  AlertOnDyingUpgrade: true,
  AlertOnMatureHarvest: true,
  AlertOnDyingHarvest: true,
  AlertSoundURL: 'http://hamusutaa.net/service-bell_daniel_simion.mp3'
};
CGP.ConfigPrefix = 'CGPConfig';

CGP.VersionMajor = '2.016';
CGP.VersionMinor = '1';

CGP.saveConfig = function () {
  localStorage.setItem(CGP.ConfigPrefix, JSON.stringify(CGP.Config));
};

CGP.loadConfig = function () {
  if (localStorage.getItem(CGP.ConfigPrefix) !== null) {
    CGP.Config = JSON.parse(localStorage.getItem(CGP.ConfigPrefix));
  } else {
    CGP.Config = CGP.ConfigDefault;
  }
};

CGP.seedStatus = function (name) {
  var plant = CGP.M.plants[name],
    cgpPlant = CGP.plants[name];

  if (plant.unlocked) {
    return 'unlocked';
  }

  for (var i in cgpPlant.recipes) {
    var valid = true;
    for (var p in cgpPlant.recipes[i].parents) {
      if (!CGP.M.plants[p]) {
        console.error('[cookie-garden-progress] ERROR IN DATA: plant not found', p);
        return null;
      }
      valid = valid & CGP.M.plants[p].unlocked;
    }
    if (valid) {
      return 'unlockable';
    }
  }
  return 'locked';
};

CGP.generatePlantIcon = function (stage, name) {
  var plant = CGP.M.plants[name],
    status = CGP.seedStatus(name);

  var posX, posY, opacity;

  posX = stage * 48;
  posY = plant.icon * 48;

  opacity = plant.unlocked ? 1 : 0.3;

  var tooltip = Game.getDynamicTooltip('Game.ObjectsById[' + CGP.M.parent.id + '].minigame.seedTooltip(\'' + plant.id +
    '\')', 'this');

  return '<div class="cgp-icon cgp-seed-status-' + status + ' " style="background-position: ' + -posX + 'px ' + -posY +
    'px; opacity: ' + opacity +
    '" ' + tooltip + '></div>';
};

CGP.generatePanelHTML = function () {
  var html = '';

  html += '<table class="cgp-table">';

  var i, j;
  for (i = 0; i <= 7; i++) {
    html += '<tr>';

    for (j in CGP.M.plants) {
      if (CGP.plants[j].generation === i) {
        html += '<td id="cgp-icon-' + j + '" onclick="CGP.onIconClick(\'' + j + '\')">' + CGP.generatePlantIcon(4, j) +
          '</td>';
      }
    }

    html += '</tr>';
  }

  html += '</table>';

  return html;
};

CGP.onIconClick = function (id) {
  var info = l('cgp-info'),
    icon = l('cgp-icon-' + id);

  if (id === CGP.selectedInfoId) {
    icon.className = '';
    delete CGP.selectedInfoId;
    info.style.display = 'none';
  } else {
    if (CGP.selectedInfoId) {
      l('cgp-icon-' + CGP.selectedInfoId).className = '';
    }
    icon.className = 'cgp-selected';
    CGP.selectedInfoId = id;

    info.style.display = 'inherit';

    var plant = CGP.plants[id],
      mPlant = CGP.M.plants[id];

    var html = '<b>' + mPlant.name + ':</b><br/>';

    for (var i in plant.recipes) {
      var parentNames = [];
      var recipe = plant.recipes[i];

      if (recipe.special) {
        switch (id) {
          case 'meddleweed':
            html += 'Chance to grow in an empty field</br>';
            break;
          case 'brownMold':
          case 'crumbspore':
            html += 'Chance to be left behind when uprooting Meddleweed</br>';
            break;
        }
        continue;
      }

      for (var parent in recipe.parents) {
        var name = CGP.M.plants[parent].name;

        var parentConditions = recipe.parents[parent];
        if (parentConditions.min) {
          name += ' [min ' + parentConditions.min + ']';
        }
        if (parentConditions.max) {
          name += ' [max ' + parentConditions.max + ']';
        }
        if (parentConditions.mature === false) {
          name += ' [immature okay]';
        }
        parentNames.push(name);
      }

      var chance = Math.round(recipe.chance * 100000) / 1000;
      html += '<span class="cgp-recipe-parents">' + parentNames.join(' + ') + '</span> (' + chance + '%)</br>';
    }

    info.innerHTML = html;
  }
};

CGP.checkMaturePlants = function () {
  var M = CGP.M,
    alert = false,
    messages = {};

  for (var y = 0; y < 6; y++) {
    for (var x = 0; x < 6; x++) {
      if (M.isTileUnlocked(x, y)) {
        var tile = M.plot[y][x],
          previousTile = CGP.PreviousPlot[y][x];

        var me = M.plantsById[tile[0] - 1];

        if (!me) {
          continue;
        }

        var upgradeName = CGP.plants[me.key].upgrade;
        var upgrade = upgradeName ? Game.Upgrades[upgradeName] : null;

        var mature = tile[1] >= me.mature;
        var previousMature = previousTile[1] >= me.mature;

        var dying = ((tile[1] + Math.ceil(me.ageTick + me.ageTickR)) >= 100 ? 1 : 0);
        var previousDying = ((previousTile[1] + Math.ceil(me.ageTick + me.ageTickR)) >= 100 ? 1 : 0);

        var harvestable = false;

        if (dying) {
          if (CGP.Config.AlertOnDyingSeed && !me.unlocked) {
            messages['Dying ' + me.name + ' can be harvested for a seed!'] = true;
            alert = alert || !previousDying;
          }
          if (CGP.Config.AlertOnDyingUpgrade && upgrade && !upgrade.unlocked) {
            messages['Dying ' + me.name + ' can be harvested for a chance at ' + upgradeName + '.'] = false;
            alert = alert || !previousDying;
          }
          if (CGP.Config.AlertOnDyingHarvest && harvestable) {
            messages['Mature ' + me.name + ' can be harvested for a reward.'] = true;
            alert = alert || !previousMature;
          }
        } else {
          if (mature) {
            if (CGP.Config.AlertOnMatureSeed && !me.unlocked) {
              messages['Mature ' + me.name + ' can be harvested for a seed!'] = true;
              alert = alert || !previousMature;
            }
            if (CGP.Config.AlertOnMatureUpgrade && upgrade && !upgrade.unlocked) {
              messages['Mature ' + me.name + ' can be harvested for a chance at ' + upgradeName + '.'] = false;
              alert = alert || !previousMature;
            }
            if (CGP.Config.AlertOnMatureHarvest && harvestable) {
              messages['Mature ' + me.name + ' can be harvested for a reward.'] = true;
              alert = alert || !previousMature;
            }
          }
        }

      }
    }
  }

  var html = '';

  for (var m in messages) {
    var important = messages[m] ? 'cgp-message-important' : '';
    html += '<span class="cgp-message ' + important + '">' + m + '</span></br>';
  }

  l('cgp-messages').innerHTML = html;

  if (alert) {
    var sound = new realAudio(CGP.Config.AlertSoundURL);
    sound.volume = CGP.Config.Volume / 100;
    sound.play();
  }
};

CGP.copyToPreviousPlot = function () {
  var previousPlot = CGP.PreviousPlot,
    plot = CGP.M.plot;

  for (var y = 0; y < 6; y++) {
    previousPlot[y] = [];
    for (var x = 0; x < 6; x++) {
      previousPlot[y][x] = [plot[y][x][0], plot[y][x][1]];
    }
  }
};

CGP.AddMenu = function () {
  if (Game.onMenu === 'prefs') {
    var cgpMenu = document.createElement('div');
    cgpMenu.id = 'cgp-menu';

    cgpMenu.innerHTML = this.generateMenu();

    l('menu').childNodes[2].insertBefore(cgpMenu, l('menu').childNodes[2].childNodes[l('menu').childNodes[2].childNodes.length -
    1]);
    l('cgp-alert-url').value = CGP.Config.AlertSoundURL;
  }
};

CGP.UpdateMenu = function () {
  l('cgp-menu').innerHTML = this.generateMenu();
};

CGP.generateMenu = function () {
  if (Game.onMenu === 'prefs') {
    function button (option, text, label) {
      var on = CGP.Config[option];
      return '<div class="listing">' +
        '<a class="option' + (on ? '' : ' off') + '" onclick="CGP.ToggleOption(\'' + option + '\')">' + text + '</a>' +
        '<label>' + label + '</label>' +
        '</div>';
    }

    var html = '<div class="subsection"><div class="title" style="color:lightgreen;">Cookie Garden Progress</div>';

    html += button('AlertOnMatureSeed', 'Alert on Mature Seed', 'Play a sound when a plant you don\'t have the seed for becomes mature.');
    html += button('AlertOnDyingSeed', 'Alert on Dying Seed', 'Play a sound when a plant you don\'t have the seed for is about to die.');
    html += button('AlertOnMatureUpgrade', 'Alert on Mature Upgrade', 'Play a sound when a plant you don\'t have the potential upgrade for becomes mature.');
    html += button('AlertOnDyingUpgrade', 'Alert on Dying Upgrade', 'Play a sound when a plant you don\'t have the potential upgrade for is about to die.');
    html += button('AlertOnMatureHarvest', 'Alert on Mature Harvest', 'Play a sound when a plant that gives a reward when harvested becomes mature.');
    html += button('AlertOnDyingHarvest', 'Alert on Dying Harvest', 'Play a sound when a plant that gives a reward when harvested is about to die.');

    html += '<div class="listing">' +
      '<span class="option">Alert Sound URL: </span>' +
      '<input id="cgp-alert-url" class="option" type="text" style="width:300px;">' +
      '<a class="option" onclick="CGP.SaveURL()">Save</a>' +
      '</div>';

    html += '</div>';

    return html;
  }
};

CGP.ToggleOption = function (option) {
  CGP.Config[option] = !CGP.Config[option];
  CGP.saveConfig();
  CGP.UpdateMenu();
};

CGP.SaveURL = function () {
  CGP.Config.AlertSoundURL = l('cgp-alert-url').value;
  CGP.saveConfig();
};

CGP.insertStyles = function () {
  var css = document.createElement('style');
  css.innerText = '#cgp-info { padding-top: 5px;} ' +
    '.cgp-seed-progress { border: solid white 2px; padding: 3px; cursor: pointer; margin: 5px;} ' +
    '.cgp-icon {width: 44px; height: 44px; background: url(img/gardenPlants.png); border: 2px solid transparent;} ' +
    '.cgp-selected .cgp-icon {border: 2px solid white; } ' +
    '.cgp-message-important {font-weight: bold; } ' +
    '.cgp-seed-status-unlockable { background-color: green; } ' +
    '.cgp-seed-status-locked { background-color: red; } ';
  document.head.appendChild(css);
};

CGP.createElements = function () {
  var seedsUnlockedDiv = l('gardenSeedsUnlocked');
  var panel = l('gardenPanel');

  if (!seedsUnlockedDiv || !panel) {
    return;
  }

  var link = document.createElement('div');
  link.className = 'cgp-seed-progress';
  link.innerHTML = 'Seed Progress';
  seedsUnlockedDiv.parentNode.insertBefore(link, seedsUnlockedDiv);

  var messages = document.createElement('div');
  messages.id = 'cgp-messages';
  seedsUnlockedDiv.parentNode.insertBefore(messages, seedsUnlockedDiv);

  var info = document.createElement('div');
  info.id = 'cgp-info';
  info.style.display = 'none';
  seedsUnlockedDiv.parentNode.insertBefore(info, seedsUnlockedDiv);

  var cgpPanel = document.createElement('div');
  cgpPanel.id = 'cgp-seed-panel';
  cgpPanel.style.display = 'none';
  cgpPanel.innerHTML = CGP.generatePanelHTML();

  panel.appendChild(cgpPanel);

  AddEvent(link, 'click', CGP.onLinkClick);
};

CGP.onLinkClick = function () {
  var panel = l('cgp-seed-panel');

  if (panel.style.display === 'none') {
    panel.style.display = 'inherit';
    l('gardenSeeds').style.display = 'none';
  } else {
    panel.style.display = 'none';
    l('gardenSeeds').style.display = 'inherit';
  }
};

CGP.newTileTooltip = function (x, y) {
  return function () {
    var M = CGP.M;
    var tile = M.plot[y][x];

    var html = CGP.Backup.tileTooltip(x, y)();

    if (tile[0] == 0) {
      var statsHtml = '<div class="cgp-chance-list">';

      var muts = CGP.calculateMuts(x, y);
      var weedMult = M.soilsById[M.soil].weedMult;

      if (muts == null) {
        var chance = Math.round(0.002 * weedMult * M.plotBoost[y][x][2] * 100000) / 1000;
        statsHtml += '<div class="cgp-chance-list-item">' + chance + '% chance of becoming a Meddleweed.</div>';
      } else {
        for (var i = 0; i < muts.length; i++) {
          var weedChance = M.plants[muts[i][0]].weed ? weedMult : 1;
          var weedBoostChance = M.plants[muts[i][0]].weed || M.plants[muts[i][0]].fungus ? M.plotBoost[y][x][2] : 1;

          var chance = Math.round(muts[i][1] * weedChance * weedBoostChance * 100000) / 1000;

          statsHtml += '<div class="cgp-chance-list-item">' + chance + '% chance of becoming a ' +
            CGP.M.plants[muts[i][0]].name + '.</div>';
        }
      }

      statsHtml += '</div>';

      html = html.replace(/<\/div>$/, statsHtml + '</div>');
    }

    return html;
  };
};

CGP.calculateMuts = function (x, y) {
  var M = CGP.M;

  var any = 0;
  var neighs = {};//all surrounding plants
  var neighsM = {};//all surrounding mature plants
  for (var i in M.plants) {neighs[i] = 0;}
  for (var i in M.plants) {neighsM[i] = 0;}
  for (var ix = x - 1; ix <= x + 1; ix++) {
    for (var iy = y - 1; iy <= y + 1; iy++) {
      var neigh = M.getTile(ix, iy);
      if (neigh[0] > 0) {
        var age = neigh[1];
        neigh = M.plantsById[neigh[0] - 1];
        any++;
        neighs[neigh.key]++;
        if (age >= neigh.mature) {neighsM[neigh.key]++;}
      }
    }
  }
  if (any > 0) {
    return M.getMuts(neighs, neighsM);
  }
  else {
    //weeds in empty tiles (no other plants must be nearby)
    return null;
  }
};

CGP.replaceNative = function () {
  CGP.Backup.Loop = Game.Loop;
  Game.Loop = function () {
    CGP.Backup.Loop();
    CGP.Loop();
  };
  CGP.Backup.UpdateMenu = Game.UpdateMenu;
  Game.UpdateMenu = function () {
    CGP.Backup.UpdateMenu();
    CGP.AddMenu();
  };
  CGP.Backup.tileTooltip = CGP.M.tileTooltip;
  CGP.M.tileTooltip = CGP.newTileTooltip;
};

CGP.DelayInit = function () {
  CGP.M = Game.Objects['Farm'].minigame;

  this.loadConfig();
  this.copyToPreviousPlot();
  this.insertStyles();
  this.createElements();
  this.replaceNative();

  if (Game.prefs.popups) {
    Game.Popup('Cookie Garden Progress version ' + CGP.VersionMajor + '.' + CGP.VersionMinor +
      ' loaded!');
  } else {
    Game.Notify('Cookie Garden Progress version ' + CGP.VersionMajor + '.' + CGP.VersionMinor +
      ' loaded!', '', '', 1, 1);
  }

  Game.Win('Third-party');
};

CGP.Init = function () {
  var proceed = true;
  if (Game.version != CGP.VersionMajor) {
    proceed = confirm('Cookie Garden Progress version ' + CGP.VersionMajor + '.' + CGP.VersionMinor +
      ' is meant for Game version ' + CGP.VersionMajor +
      '.  Loading a different version may cause errors.  Do you still want to load Cookie Garden Progress?');
  }
  if (proceed) {

    var delay = setInterval(function () {
      CGP.DelayInit();
      clearInterval(delay);
    }, 1000);
  }
};

CGP.Loop = function () {
  this.checkMaturePlants();
  this.copyToPreviousPlot();
};

CGP.Init();
