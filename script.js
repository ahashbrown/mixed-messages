import ./activities.js;

//helper to generate random numbers
function randNum(max) {
	return Math.round(Math.random()) * max;
}

//generate an activity 
const pickActivity (() => {
	let activity = {
		goalType: '',
		goal: '',
		length: 0;
	}

	// @TODO: fill in the blanks here

	return activity;
})

//format activity
function formatActivitiy(activity) {
	// @TODO: turn an activity object into a pretty string
}

//final 'main' function to be run on script execution
function main() {
	let responses = [];
	//format 3 responses

	for (let i = 0; i < 3; i++) responses[i] = pickActivity(randNum)

	//print 3 responses

}

main()