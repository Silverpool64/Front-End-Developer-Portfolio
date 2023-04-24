const colors = document.querySelector(".colors");
(function clock() {
	'use strict';

	if (document.querySelector("#clock") != null) {

		document.addEventListener('DOMContentLoaded', function(){
			const currentTime = document.querySelector("#current-time"),
			currentDate = document.querySelector("#current-date");

			setInterval(function() {
				var d = new Date();

				var hours = d.getHours(),
				minutes = d.getMinutes(),
				seconds = d.getSeconds(),
				day = formatDay(d.getDay()),
				month = formatMonth(d.getMonth()),
				date = d.getDate(),
				year = d.getFullYear(),
				ampm = 'AM';

				if (hours > 12) {
					hours -= 12;
					ampm = 'PM';
				} else if (hours === 0) {
					hours = 12;
				}

				if (minutes < 10) {
					minutes = '0' + minutes;
				}

				var sepClass = '';
				if (d.getSeconds() % 2 === 1) sepClass = 'trans';

				var sep = '<span class="' + sepClass + '">:</span>';

				currentTime.innerHTML = hours + sep + minutes /*+ sep + seconds*/ + ' ' + ampm;
				currentDate.textContent = day + ', ' + month + ' ' + date + ', ' + year;
			}, 1000);

			function formatDay(dayIndex) {
				dayIndex = parseInt(dayIndex, 10);

				if (dayIndex < 0) {
					dayIndex = 0;
				} else if (dayIndex > 11) {
					dayIndex = 11;
				}

				var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

				return dayNames[dayIndex];
			}

			function formatMonth(m) {
				m = parseInt(m, 10);

				if (m < 0) {
					m = 0;
				} else if (m > 11) {
					m = 11;
				}

				var monthNames = [
					'January', 'February', 'March',
					'April', 'May', 'June',
					'July', 'August', 'September',
					'October', 'November', 'December'
				];

				return monthNames[m];
			}
		});
	}
})();

function formatColorDay(colorDayIndex) {
	colorDayIndex = parseInt(colorDayIndex, 10);

	if (colorDayIndex < 0) {
		colorDayIndex = 0;
	} else if (colorDayIndex > 11) {
		colorDayIndex = 11;
	}

	var colorDayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	return colorDayNames[colorDayIndex];
}

function colorOfTheDay() {
	var colorDate = new Date(),
	colorDay = formatColorDay(colorDate.getDay());

	if (colorDay == "Monday") {
		colors.classList.add("monday");
		console.log("It's Monday!");
	} else if (colorDay == "Tuesday") {
		colors.classList.add("tuesday");
		console.log("It's Tuesday!");
	} else if (colorDay == "Wednesday") {
		colors.classList.add("wednesday");
		console.log("It's Wednesday!");
	} else if (colorDay == "Thursday") {
		colors.classList.add("thursday");
		console.log("It's Thursday!");
	} else if (colorDay == "Friday") {
		colors.classList.add("friday");
		console.log("It's Friday!");
	} else if (colorDay == "Saturday") {
		colors.classList.add("saturday");
		console.log("It's Saturday!");
	} else if (colorDay == "Sunday") {
		colors.classList.add("sunday");
		console.log("It's Sunday!");
	}
}

function preparePage() {
	colorOfTheDay();
}

window.onload = function() {
	if (document.querySelector(".colors") != null) {
		preparePage();
	}
	if (document.querySelector("#error404") != null) {
		prepare404Page(error404);
	}
};
