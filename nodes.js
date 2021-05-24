const node1 = {
    id: 1,
    img: 'start',
    text: 'какую магию мы будем учить?',
    options: [
        { text: 'светлую', id: 2 },
        { text: 'темную', id: 3 }
    ]
}

const node2 = {
    id: 2,
    img: 'light_mage',
    text: 'выбери заклинание, которое ты будешь учить',
    options: [
        { text: 'превращение человека в бабочку', id: 4 },
        { text: 'превращение человека в кошку', id: 5 }
    ]
}

const node3 = {
    id: 3,
    img: 'dark_mage',
    text: 'выбери заклинание, которое ты будешь учить',
    options: [
        { text: 'превращение человека в муху', id: 6 },
        { text: 'превращение человека в змею', id: 7 }
    ]
}

const node4 = {
    id: 4,
    img: 'butterfly',
    text: 'продолжишь изучать светлую магию или перейдешь к темной?',
    options: [
        { text: 'светлую', id: 8},
        { text: 'темную', id: 10}
    ]
}

const node5 = {
    id: 5,
    img: 'cat',
    text: 'продолжишь изучать светлую магию или перейдешь к темной?',
    options: [
        { text: 'светлую', id: 9},
        { text: 'темную', id: 11}
    ]
}

const node6 = {
    id: 6,
    img: 'fly',
    text: 'продолжишь изучать темную магию или перейдешь к светлой?',
    options: [
        { text: 'светлую', id: 9},
        { text: 'темную', id: 11}
    ]
}

const node7 = {
    id: 7,
    img: 'snake',
    text: 'продолжишь изучать темную магию или перейдешь к светлой?',
    options: [
        { text: 'светлую', id: 8},
        { text: 'темную', id: 10}
    ]
}


const node8 = {
    id: 8,
    img: 'light_mage_3_lvl',
    text: 'выбери способность',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node9 = {
    id: 9,
    img: 'light_mage_3_lvl',
    text: 'выбери способность',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node10 = {
    id: 10,
    img: 'dark_mage_3_lvl',
    text: 'выбери способность',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node11 = {
    id: 11,
    img: 'dark_mage_3_lvl',
    text: 'выбери способность:',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node12 = {
    id: 12,
    img: 'wings',
    text: 'выбери талисман',
    options: [
        { text: 'плащ', id: 15 },
        { text: 'кольцо', id: 16 }
    ]
}

const node13 = {
    id: 13,
    img: 'copies',
    text: 'выбери талисман',
    options: [
        { text: 'кольцо', id: 16 },
        { text: 'перчатки', id: 17 }
    ]
}

const node14 = {
    id: 14,
    img: 'poison_with_hand',
    text: 'выбери талисман',
    options: [
        { text: 'перчатки', id: 17 },
        { text: 'кинжал', id: 18 }
    ]
}

const node15 = {
    id: 15,
    img: 'cloak',
    text: 'какую силу ты хочешь хранить?',
    options: [
        { text: 'пространство', id: 19 },
        { text: 'время', id: 20 }
    ]
}

const node16 = {
    id: 16,
    img: 'ring',
    text: 'какую силу ты хочешь хранить?',
    options: [
        { text: 'разум', id: 21 },
        { text: 'душа', id: 22 }
    ]
}

const node17 = {
    id: 17,
    img: 'gloves',
    text: 'какую силу ты хочешь хранить?',
    options: [
        { text: 'ледяной кинжал', id: 23 },
        { text: 'вода', id: 24 }
    ]
}

const node18 = {
    id: 18,
    img: 'knife',
    text: 'какую силу ты хочешь хранить?',
    options: [
        { text: 'темная энергия', id: 25 },
        { text: 'загробный мир', id: 26 }
    ]
}

const node19 = {
    id: 19,
    img: 'space',
    options: []
}

const node20 = {
    id: 20,
    img: 'time',
    options: []
}

const node21 = {
    id: 21,
    img: 'dark_energy',
    options: []
}

const node22 = {
    id: 22,
    img: 'death_world',
    options: []
}

const node23 = {
    id: 23,
    img: 'mind',
    options: []
}

const node24 = {
    id: 24,
    img: 'soul',
    options: []
}
const node25 = {
    id: 25,
    img: 'frozen_knife',
    options: []
}

const node26 = {
    id: 26,
    img: 'water',
    options: []
}

const mapIdToMap = {
    1: node1,
    2: node2,
    3: node3,
    4: node4,
    5: node5,
    6: node6,
    7: node7,
    8: node8,
    9: node9,
    10: node10,
    11: node11,
    12: node12,
    13: node13,
    14: node14,
    15: node15,
    16: node16,
    17: node17,
    18: node18,
    19: node19,
    20: node20,
    21: node21,
    22: node22,
    23: node22,
    24: node22,
    25: node22,
    26: node22
  }

module.exports = mapIdToMap;