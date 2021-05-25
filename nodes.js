const node0 = {
    id: 0,
    img: 'start',
    text: 'Привет! Здесь ты сможешь создать своего волшебника и сделать его величайшим в истории. Нажми начать, чтобы создать своего мага и пройти испытания.',
    options: [
        { text: 'начать', id: 1 },
    ]
}

const node1 = {
    id: 1,
    img: 'start',
    text: 'Какую магию мы будем учить?',
    options: [
        { text: 'светлую', id: 2 },
        { text: 'темную', id: 3 }
    ]
}

const node2 = {
    id: 2,
    img: 'light_mage',
    text: 'Выбери заклинание, которое ты будешь учить',
    options: [
        { text: 'превращение человека в бабочку', id: 4 },
        { text: 'превращение человека в кошку', id: 5 }
    ]
}

const node3 = {
    id: 3,
    img: 'dark_mage',
    text: 'Выбери заклинание, которое ты будешь учить',
    options: [
        { text: 'превращение человека в муху', id: 6 },
        { text: 'превращение человека в змею', id: 7 }
    ]
}

const node4 = {
    id: 4,
    img: 'butterfly',
    text: 'Продолжишь изучать светлую магию или перейдешь к темной?',
    options: [
        { text: 'светлую', id: 8},
        { text: 'темную', id: 10}
    ]
}

const node5 = {
    id: 5,
    img: 'cat',
    text: 'Продолжишь изучать светлую магию или перейдешь к темной?',
    options: [
        { text: 'светлую', id: 9},
        { text: 'темную', id: 11}
    ]
}

const node6 = {
    id: 6,
    img: 'fly',
    text: 'Продолжишь изучать темную магию или перейдешь к светлой?',
    options: [
        { text: 'светлую', id: 9},
        { text: 'темную', id: 11}
    ]
}

const node7 = {
    id: 7,
    img: 'snake',
    text: 'Продолжишь изучать темную магию или перейдешь к светлой?',
    options: [
        { text: 'светлую', id: 8},
        { text: 'темную', id: 10}
    ]
}


const node8 = {
    id: 8,
    img: 'light_mage_3_lvl',
    text: 'Выбери способность',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node9 = {
    id: 9,
    img: 'light_mage_3_lvl',
    text: 'Выбери способность',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node10 = {
    id: 10,
    img: 'dark_mage_3_lvl',
    text: 'Выбери способность',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node11 = {
    id: 11,
    img: 'dark_mage_3_lvl',
    text: 'Выбери способность:',
    options: [
        { text: 'летать', id: 12 },
        { text: 'иллюзии', id: 13 },
        { text: 'зелья', id: 14 }
    ]
}

const node12 = {
    id: 12,
    img: 'wings',
    text: 'Выбери талисман',
    options: [
        { text: 'плащ', id: 15 },
        { text: 'кольцо', id: 16 }
    ]
}

const node13 = {
    id: 13,
    img: 'copies',
    text: 'Выбери талисман',
    options: [
        { text: 'кольцо', id: 16 },
        { text: 'перчатки', id: 17 }
    ]
}

const node14 = {
    id: 14,
    img: 'poison_with_hand',
    text: 'Выбери талисман',
    options: [
        { text: 'перчатки', id: 17 },
        { text: 'кинжал', id: 18 }
    ]
}

const node15 = {
    id: 15,
    img: 'cloak',
    text: 'Какую силу ты хочешь хранить?',
    options: [
        { text: 'пространство', id: 19 },
        { text: 'время', id: 20 }
    ]
}

const node16 = {
    id: 16,
    img: 'ring',
    text: 'Какую силу ты хочешь хранить?',
    options: [
        { text: 'разум', id: 21 },
        { text: 'душа', id: 22 }
    ]
}

const node17 = {
    id: 17,
    img: 'gloves',
    text: 'Какую силу ты хочешь хранить?',
    options: [
        { text: 'ледяной кинжал', id: 23 },
        { text: 'вода', id: 24 }
    ]
}

const node18 = {
    id: 18,
    img: 'knife',
    text: 'Какую силу ты хочешь хранить?',
    options: [
        { text: 'темная энергия', id: 25 },
        { text: 'загробный мир', id: 26 }
    ]
}

const node19 = {
    id: 19,
    img: 'space',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node20 = {
    id: 20,
    img: 'time',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node21 = {
    id: 21,
    img: 'dark_energy',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node22 = {
    id: 22,
    img: 'death_world',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node23 = {
    id: 23,
    img: 'mind',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node24 = {
    id: 24,
    img: 'soul',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node25 = {
    id: 25,
    img: 'frozen_knife',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 1 }
    ]
}

const node26 = {
    id: 26,
    img: 'water',
    text: 'Таким получился волшебник. Если вы готовы, то нажимайте играть!',
    options: [
        { text: 'Играть' },
        { text: 'создать волшебника по новой', id: 0 }
    ]
}

//Story one

const node100 = {
    id: 100,
    text: 'Архимаг коллегии попроисл вас одолеть жутко надоедливого тролля в лесу. Согласны ли вы оказать помощь коллегии?',
    options: [
        { text: 'Да', id: 110 },
        { text: 'Нет', id: 120 }
    ]
}

const node110 = {
    id: 110,
    text: 'Вот вы и в лесу. Перед вами тролль. Хотите применить заклинание, чтобы избавиться от него?',
    options: [
        { text: 'Да', id: 111 },
        { text: 'Нет', id: 121 }
    ]
}

const node111 = {
    id: 111,
    text: 'Вы применили заклятие, но тролль лихо увернулся от вашего удара. Закастовать еще одно?',
    bonus: {
        lives: 0,
        light: -10,
        darkness: -10,
        glory: 0
    },
    options: [
        { text: 'Да', id: 112 },
        { text: 'Нет', id: 113 }
    ]
}

const node113 = {
    id: 113,
    text: 'Подождав вы сберегли немного магических сил. После вашего первого заклятия тролль очень сильно испугался и решил бежать. Поздравляем, вы не пагубили жизнь этого существа и смогли выполнить задание Архимага!',
    bonus: {
        lives: 0,
        light: 2,
        darkness: 2,
        glory: 20
    },
    options: [
        { text: 'Идти дальше' }
    ]
}

const node112 = {
    id: 112,
    text: 'Вы попали прямо в тролля. Поздравляем, вы одолели его. Архимаг вами очень доволен.',
    bonus: {
        lives: 0,
        light: -10,
        darkness: -10,
        glory: 10
    },
    options: [
        { text: 'Идти дальше' }
    ]
}

const node120 = {
    id: 120,
    text: 'Архимаг расстроен вашим безразличием, но зато вам удалось сохранить часть магических сил.',
    bonus: {
        lives: 0,
        light: 10,
        darkness: 10,
        glory: -10
    },
    options: [
        { text: 'принять судьбу и идти дальше' }
    ]
}

const node99999 = {
    id: 99999,
    text: 'Похоже, одна из характеристик упала до нуля. Маги не могут жить без маны, славы или очков жизней.',
    options: [
        { text: 'начать заново', id: 1 }
    ]
}

const mapIdToMap = {
    0: node0,
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
    26: node22,

    100: node100,
    110: node110,
    111: node111,
    112: node112,
    113: node113,
    120: node120,

    99999: node99999
  }

module.exports = mapIdToMap;