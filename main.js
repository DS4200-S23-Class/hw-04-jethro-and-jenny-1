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