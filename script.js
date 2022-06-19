//create three arrays containing the possible objectives: money-making (excluding bosses), bossing, and skilling

const moneyMakers = ['Theatre of Blood','Chambers of Xeric','Pickpocketing Elves','Crafting Blood Runes','Killing Demonic Gorillas','Hallowed Sepulchre','Casting Tan Leather','Killing Lizardman Shamans','Pickpocketing Vyres','Smelting Runite','Killing Rune Dragons','Making Ranarr Potions','Hunting Black Chinchompas'];
const bosses = ['Gauntlet','Corrupted Guantlet','Barrows','Giant Mole','Dagannoth Kings','Sarachnis','Kalphite Queen','God Wars Dungeon (Any)','Nex','Zulrah','Vorkath','Corporeal Beast','The Nightmare','Wildy'];
const skills = ['Prayer','Magic','Runecraft','Hitpoints','Crafting','Mining','Smithing','Fishing','Cooking','Firemaking','Woodcutting','Agility','Herblore','Thieving','Fletching','Slayer','Farming','Construction','Hunter'];

//helper to generate random numbers
function randNum(max) {
	return Math.round(Math.random() * max);
}

//generate an activity 
function pickActivity() {
	let activity = {
		goalType: '',
		goal: '',
		duration: 0
	}

	let newGoal = randNum(3);
	switch (newGoal) {
		case 1:
			activity.goalType = 'moneyMakers'
			activity.goal = moneyMakers[randNum(moneyMakers.length)]
			activity.duration = randNum(2) + 1
			break;
		case 2:
			activity.goalType = 'bosses'
			activity.goal = bosses[randNum(bosses.length)]
			activity.duration = randNum(30) + 1
			break;
		case 3:
			activity.goalType = 'skills'
			activity.goal = bosses[randNum(bosses.length)]
			activity.duration = randNum(2) + 1
			break;
		default: 
			console.log('Error!')
	}
	console.log(activity)
	return activity;
}

//format activity
function formatActivity(activity) {
	// @TODO: turn an activity object into a pretty string
	return activity;
}

//final 'main' function to be run on script execution
function main() {
	let responses = [];

	for (let i = 0; i < 3; i++) responses[i] = formatActivity(pickActivity())

	for (const response of responses) console.log(response)
}

main()