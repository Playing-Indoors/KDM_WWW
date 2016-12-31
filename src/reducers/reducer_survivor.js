import { GET_SURVIVOR } from '../actions/types';

// Mock Data structure.
const mockStats = {
  survival: {
    title: 'Surival',
    style: 'state-btn',
    description: 'Limit: ',
    children: [
      {
        name: 'Survival',
        amount: 2,
        max: 3,
        min: 0,
      },
    ],
  },
  bleeding: {
    title: 'Bleeding',
    style: 'bleeding',
    description: '',
    children: [
      {
        name: 'Bleeding',
        amount: 0,
        max: 5,
        min: 0,
        milestones: [
          5,
        ],
      },
    ],
  },
  xp: {
    title: 'XP',
    children: [
      {
        name: 'Hunt',
        amount: 2,
        max: 16,
        min: 0,
        milestones: [
          2,
          6,
          10,
          15,
          16,
        ],
      },
      {
        name: 'Courage',
        amount: 0,
        max: 9,
        min: 0,
        milestones: [
          4,
          9,
        ],
      },
      {
        name: 'Understanding',
        amount: 0,
        max: 9,
        min: 0,
        milestones: [
          4,
          9,
        ],
      },
      {
        name: 'Weapon',
        amount: 0,
        max: 8,
        min: 0,
        milestones: [
          3,
          8,
        ],
      },
    ],
  },
  // xp: [
  //   hunt,
  //   courage,
  //   understanding,
  //   weapon,
  // ],
  // primaryStats: [
  //   movement,
  //   accuracy,
  //   strength,
  //   evasion,
  //   luck,
  //   speed,
  // ],
  armor: {
    title: 'Armor',
    description: 'Rawhide Armor Set',
    style: 'stat',
    children: [
      {
        name: 'Brain',
        amount: 3,
        milestone: {
          visible: true,
          name: 'Insane',
        },
      },
      {
        name: 'Head',
        amount: -1,
      },
      { name: 'Arms' },
      { name: 'Body' },
      { name: 'Waist' },
      { name: 'Feet' },
    ]
  },
  fightingArts: {
    title: 'Fighting Arts',
    style: 'list',
    max: 3,
    children: [
      {
        name: 'Purpose',
        desc: 'Your comrades make you strong...',
      },
      {
        name: 'Propulsion Drive',
        desc: 'At the <strong>start</strong> of...',
      },
    ]
  },
  disorders: [
    1,
    2,
    3,
  ],
  abilities: [
    'none',
  ],
  impairments: [
    'none',
  ],
  notes: [
    'none',
  ],
};

export default function (state = null, action) {
  if (action.type === GET_SURVIVOR) {
    const survivorData = action.payload;
    survivorData.mock = mockStats;
    console.log('reducer_survivor', survivorData);
    return survivorData;
  }
  return state;
}
