function shadower(options) {
	let images = document.querySelectorAll('shadower');

	if (options.type === 'hard') {
		options.type = '0px';
	} else {
		options.type = '15px';
	}

	images.forEach(function (image) {
		image.style.boxShadow = `10px 10px ${options.type} 1px rgba(0, 0, 0, 0.13)`;

		if (options.padding) {
			image.style.padding = '1em';
		}
	});
}

module.exports.shadower = shadower;
