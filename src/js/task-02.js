const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const $ul = document.querySelector("ul");
ingredients.forEach((ing) => {
	
	const $newLi = [];

	const newItem = document.createElement("li");
	newItem.textContent = ing;
	newItem.classList = "item";
	console.log(newItem);
	$newLi.push(newItem);
	console.log($newLi)
	

});
