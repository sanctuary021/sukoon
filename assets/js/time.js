// ┌┬┐┬┌┬┐┌─┐
//  │ ││││├┤
//  ┴ ┴┴ ┴└─┘
// Set time and Date

window.onload = displayClock();
function displayClock() {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const weekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	var d = new Date();
	var mm = monthNames[d.getMonth()];
	var dd = d.getDate();
	var dayOfWeek = weekdayNames[d.getDay()];
	var min = (mins = ('0' + d.getMinutes()).slice(-2));
	var hh = d.getHours();
	var ampm = '';

	if (CONFIG.twelveHourFormat) {
		ampm = hh >= 12 ? ' pm' : ' am';
		hh = hh % 12;
		hh = hh ? hh : 12;
	} else {
		hh = ('0' + hh).slice(-2);
	}

	document.getElementById('hour').innerText = hh;
	document.getElementById('separator').innerHTML = ' : ';
	document.getElementById('minutes').innerText = min + ampm;

	document.getElementById('fullDate').innerHTML = `<span class="dateAccent">${dayOfWeek}</span>, ${mm} <span class="dateAccent">${dd}</span>`;

	setTimeout(displayClock, 1000);
}
