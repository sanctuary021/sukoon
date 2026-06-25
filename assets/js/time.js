window.onload = displayClock();
function displayClock() {
	var d = new Date();
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

	var dayOfWeek = d.toLocaleDateString(CONFIG.language, { weekday: 'long' });
	var month = d.toLocaleDateString(CONFIG.language, { month: 'short' });
	var day = d.toLocaleDateString(CONFIG.language, { day: 'numeric' });

	document.getElementById('fullDate').innerHTML = `<span class="dateAccent">${dayOfWeek}</span>, ${month} <span class="dateAccent">${day}</span>`;

	setTimeout(displayClock, 1000);
}
