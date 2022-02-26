const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const $ul = document.querySelector("ul");
const $newLi = [];

ingredients.forEach((ing) => {
	const newItem = document.createElement("li");
	newItem.textContent = ing;
	newItem.classList = "item";
	
	$newLi.push(newItem);
	});

$ul.append(...$newLi);