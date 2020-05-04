function progBar(arg) {
	console.log($(".progress").width());
}

const oneBtn = $("#oneButton");
const threeBtn = $("#threeButton");
const sevenBtn = $("#sevenButton");

function addOne() {
	addPercent(1);
}
function addThree() {
	addPercent(3);
}
function addSeven() {
	addPercent(7);
}

function addPercent(arg) {
	let plusPercent = $(".progress").width() / 100.0 * arg;
	let nowWidth = $("#my-progress-bar").width();
	let farWidth = nowWidth + plusPercent;
	$("#my-progress-bar").width(farWidth);
}

function init() {
	$("#my-progress-bar").width("0%");
	oneBtn.click(addOne);
	threeBtn.click(addThree);
	sevenBtn.click(addSeven);
}

$(document).ready(init);