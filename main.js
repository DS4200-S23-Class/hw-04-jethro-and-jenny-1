// Event handler for clicking a point

function toggleBorder(pointId) {

	// retrieve a point on the graph
	let point = document.getElementById(pointId);
	
	// add or remove a border to a point if clicked on
	if (Object.values(point.classList).includes('border')) {
		point.classList.remove('border');
	} else {
		point.classList.add('border');
	}

	// show the coordinates of the last point clicked in the right column
	let lastPointClicked = "Last Point Clicked: \n" + pointId;

	let lastPointClickedDiv = document.getElementById("last-point-clicked");
	lastPointClickedDiv.innerHTML = lastPointClicked;
}


// Event handler for adding a point

function addPoint() {

	// set radius as a constant
	const RADIUS = 10;

	// obtain the coordinate values the user inputted
	let selectXCoord = document.getElementById('selectXCoord');
	let selectYCoord = document.getElementById('selectYCoord');

	// convert user input into numbers
	let xCoord = Number(selectXCoord.options[selectXCoord.selectedIndex].text);
	let yCoord = Number(selectYCoord.options[selectYCoord.selectedIndex].text);

	// establish the ID attribute of the new point
	let newPointId = '(' + xCoord + ', ' + yCoord + ')';

	// scale the point so that it is placed on the plot appropriately
	let scaledXCoord = xCoord * 50;
	let scaledYCoord = 500 - yCoord * 50;

	// obtain the graph to add the points in
	let graph = document.getElementById('frame');

	// create a new element (point)
	let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

	// set the attributes of the new element (point)
	circle.setAttribute("id", newPointId);
	circle.setAttribute("class", "point"); 
	circle.setAttribute("cx", scaledXCoord);
	circle.setAttribute("cy", scaledYCoord); 
	circle.setAttribute("r", RADIUS); 
	circle.setAttribute("onclick", "toggleBorder('" + newPointId + "')");

	// display the new point on the plot
	graph.appendChild(circle);
}

// get the button 
document.getElementById('addPoint')
			// call the function (adding a point) when clicked
			.addEventListener('click', addPoint);