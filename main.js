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

	let lastPointClickedDiv = document.getElementById("last-point-clicked");
	lastPointClickedDiv.innerHTML = lastPointClicked ;
}

// Event handler for adding a point

function addPoint() {

	const radius = 10;

	let selectXCoord = document.getElementById('selectXCoord');
	let selectYCoord = document.getElementById('selectYCoord');

	let xCoord = Number(selectXCoord.options[selectXCoord.selectedIndex].text);
	let yCoord = Number(selectYCoord.options[selectYCoord.selectedIndex].text);
	let newPointId = '(' + xCoord + ', ' + yCoord + ')';

	scaledXCoord = xCoord * 50;
	scaledYCoord = 500 - yCoord * 50;

	let graph = document.getElementById('frame')

	var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	var pointLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");

	circle.setAttribute("id", newPointId);
	circle.setAttribute("class", "point"); 
	circle.setAttribute("cx", scaledXCoord);
	circle.setAttribute("cy", scaledYCoord); 
	circle.setAttribute("r", radius); 
	circle.setAttribute("onclick", "toggleBorder('" + newPointId + "')");

	pointLabel.setAttribute("x", scaledXCoord);
	pointLabel.setAttribute("y", scaledYCoord - 25);
	pointLabel.innerHTML = '(' + xCoord + ', ' + yCoord + ')';

	graph.appendChild(circle);
	graph.appendChild(pointLabel);
}

document.getElementById('addPoint')
			.addEventListener('click', addPoint);