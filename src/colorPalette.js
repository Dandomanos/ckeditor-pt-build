const coke = [
	{
		color: '#e91721',
		label: 'Red',
	},
	{
		color: '#FFFFFF',
		label: 'White',
		hasBorder: true,
	},
	{
		color: '#E3E3E3',
		label: 'Light grey',
	},
	{
		color: '#BABABA',
		label: 'Dark grey',
	},
	{
		color: '#474747',
		label: 'Black',
	},
]

// TODO => Add other branding colors

const red = [
	{
		color: '#FFA07A',
		label: 'Light salmon',
	},
	{
		color: '#F08080',
		label: 'Light coral',
	},
	{
		color: '#FF0000',
		label: 'Red',
	},
	{
		color: '#DC143C',
		label: 'Crismon',
	},
	{
		color: '#B22222',
		label: 'Fire brick',
	},
]

const pink = [
	{
		color: '#FFC0CB',
		label: 'Pink',
	},
	{
		color: '#DB7093',
		label: 'Pale violet red',
	},
	{
		color: '#FF69B4',
		label: 'Hot pink',
	},
	{
		color: '#FF1493',
		label: 'Deep pink',
	},
	{
		color: '#C71585',
		label: 'Medium violet red',
	},
]

const orange = [
	{
		color: '#FFA500',
		label: 'Orange',
	},
	{
		color: '#FF8C00',
		label: 'Dark orange',
	},
	{
		color: '#FF7F50',
		label: 'Coral',
	},
	{
		color: '#FF6347',
		label: 'Tomato',
	},
	{
		color: '#FF4500',
		label: 'Orange red',
	},
]

const yellow = [
	{
		color: '#FFFACD',
		label: 'Lemon chiffon',
	},
	{
		color: '#F0E68C',
		label: 'Khaki',
	},
	{
		color: '#FFFF00',
		label: 'Yellow',
	},
	{
		color: '#FFD700',
		label: 'Gold',
	},
	{
		color: '#BDB76B',
		label: 'Dark khaki',
	},
]

const purple = [
	{
		color: '#DDA0DD',
		label: 'Plum',
	},
	{
		color: '#DA70D6',
		label: 'Orchid',
	},
	{
		color: '#800080',
		label: 'Purple',
	},
	{
		color: '#8A2BE2',
		label: 'Blue violet',
	},
	{
		color: '#4B0082',
		label: 'Indigo',
	},
]

const green = [
	{
		color: '#98FB98',
		label: 'Pale green',
	},
	{
		color: '#9ACD32',
		label: 'Yellow green',
	},
	{
		color: '#32CD32',
		label: 'Lime green',
	},
	{
		color: '#008000',
		label: 'Green',
	},
	{
		color: '#006400',
		label: 'Dark green',
	},
]

const blue = [
	{
		color: '#B0E0E6',
		label: 'Powder blue',
	},
	{
		color: '#00BFFF',
		label: 'Deep sky blue',
	},
	{
		color: '#4682B4',
		label: 'Steel blue',
	},
	{
		color: '#0000FF',
		label: 'Blue',
	},
	{
		color: '#00008B',
		label: 'Dark blue',
	},
]

const brown = [
	{
		color: '#D2B48C',
		label: 'Tan',
	},
	{
		color: '#CD853F',
		label: 'Peru',
	},
	{
		color: '#A0522D',
		label: 'Sienna',
	},
	{
		color: '#A52A2A',
		label: 'Brown',
	},
	{
		color: '#800000',
		label: 'Maroon',
	},
]

const all = [coke, red, pink, orange, yellow, purple, green, blue, brown]

const pt = all.reduce((prev, cur) => prev.concat(cur), [])

export default pt
