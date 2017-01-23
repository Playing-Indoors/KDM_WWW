import { GET_SURVIVOR } from '../actions/types';

const MILESTONE_STORY = 'story';
const MILESTONE_ARMOR = 'armor';
const MILESTONE_TEMP = 'temp';

// Mock Data structure.
const mockStats = {
	survival: {
		title: 'Surival',
		style: 'state-btn',
		description: 'Limit: 3',
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
					{
						at: 5,
						name: 'Dead',
						type: MILESTONE_STORY,
					},
				],
			},
		],
	},
	xp: {
		title: 'XP',
		children: [
			{
				name: 'Hunt',
				amount: 8,
				max: 16,
				min: 0,
				milestones: [
					{
						at: 2,
						name: 'Age 1',
						type: MILESTONE_STORY,
					},
					{
						at: 6,
						name: 'Age 2',
						type: MILESTONE_STORY,
					},
					{
						at: 10,
						name: 'Age 3',
						type: MILESTONE_STORY,
					},
					{
						at: 15,
						name: 'Age 4',
						type: MILESTONE_STORY,
					},
					{
						at: 16,
						name: 'Retired',
						type: MILESTONE_STORY,
					},
				],
			},
			{
				name: 'Weapon',
				amount: 0,
				max: 8,
				min: 0,
				milestones: [
					{
						at: 3,
						name: 'Specialist',
						type: MILESTONE_STORY,
					},
					{
						at: 8,
						name: 'Master',
						type: MILESTONE_STORY,
					},
				],
			},
			{
				name: 'Courage',
				amount: 3,
				max: 9,
				min: 0,
				milestones: [
					{
						at: 3,
						name: 'Bold',
						type: MILESTONE_STORY,
					},
					{
						at: 9,
						name: 'See the Truth',
						type: MILESTONE_STORY,
					},
				],
			},
			{
				name: 'Understanding',
				amount: 0,
				max: 9,
				min: 0,
				milestones: [
					{
						at: 3,
						name: 'Insight',
						type: MILESTONE_STORY,
					},
					{
						at: 9,
						name: 'White Secret',
						type: MILESTONE_STORY,
					},
				],
			},
		],
	},
	primaryStats: {
		title: 'Primary Stats',
		description: '',
		children: [
			{
				name: 'Movement',
				amount: 5,
				min: 1,
			},
			{
				name: 'Accuracy',
				amount: 1,
				min: -999,
			},
			{
				name: 'Strength',
				amount: 3,
				min: -999,
				status: [
					{
						type: 'token',
					},
					{
						type: 'armor',
					},
				],
			},
			{
				name: 'Evasion',
				amount: -1,
				min: -999,
			},
			{
				name: 'Luck',
				amount: -1,
				min: -999,
				status: [
					{
						type: 'token',
					},
				],
			},
			{
				name: 'Speed',
				amount: 0,
				min: -999,
			},
		],
	},
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
		],
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
