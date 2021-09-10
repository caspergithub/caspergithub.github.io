window.onload = function () {
	let count = 8,
		div,
		board = document.createElement("div"),
		fragment = document.createDocumentFragment();

	const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
	const numbers = ["8", "7", "6", "5", "4", "3", "2", "1"];

	board.setAttribute("id", "board");
	document.body.appendChild(board);

	// rows
	for (let i = 0; i < count; ++i) {
		// columns
		for (let j = 0; j < count; ++j) {
			div = document.createElement("div");
			div.className =
				(i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)
					? "black"
					: "white";

			let label = letters[j] + numbers[i];
			div.innerHTML = label;

			fragment.appendChild(div);
		}
	}

	board.appendChild(fragment);
};
