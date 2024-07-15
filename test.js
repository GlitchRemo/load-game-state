const gameState = require("./game-state-3.json");

const debug = (val) => {
	console.log(val);
	return val;
};

const main = () => {
	fetch("http://localhost:8000/test/game-state", {
		headers: { "content-type": "application/json" },
		method: "PATCH",
		body: JSON.stringify(debug(gameState)),
	});
};

main();
