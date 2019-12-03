export default (function () {
	// Theme switch
	var themeSwitch = document.getElementById('themeSwitch');
	if (themeSwitch) {
		initTheme(); // if user has already selected a specific theme -> apply it
		themeSwitch.addEventListener('change', function (event) {
			console.log('asds');
			resetTheme(); // update color theme
		});

		function initTheme() {
			var darkThemeSelected = (localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'dark');
			// update checkbox
			themeSwitch.checked = darkThemeSelected;
			// update body data-theme attribute
			darkThemeSelected ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
		};

		function resetTheme() {
			if (themeSwitch.checked) { // dark theme has been selected
				document.body.setAttribute('data-theme', 'dark');
				localStorage.setItem('themeSwitch', 'dark');
			} else {
				document.body.setAttribute('data-theme', 'light');
				localStorage.setItem('themeSwitch', 'light');
			}
		};
	}
}());
