// Event handler for clicking a point

let clicks = 0;

function toggleBorder(pointId) {

	// retrieve a point on the graph
	let point= document.getElementById(pointId);
	
	// add or remove a border to a point if clicked on
	if (Object.values(point.classList).includes('border')) {
		point.classList.remove('border');
	} else {
		point.classList.add('border');
	}

	// show the coordinates of the last point clicked in the right column
	let lastPointClicked = "Last Point Clicked: \n" + pointId;
	pointDiv.innerHTML = lastPointClicked;

}

function addPoint() {
	let xCoord = document.getElementById('selectXCoord');
	let yCoord = document.getElementById('selectXCoord');
	xCoord = xCoord * 50;
	yCoord = 500 - yCoord * 50;
	document.getElementById('frame').innerHTML ++ 'HEYSTEPHENIKNOWLOOKSCANBEDECEIVING';
	
	
// most common functions: add, remove, and toggle
	maxPt.classList.add('orange');
}

document.getElementById('subButton2')
		.addEventListener('click', submit2Clicked);