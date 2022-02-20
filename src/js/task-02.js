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
	const newItem = document.createElement("li");
	newItem.textContent = ing;
	newItem.classList = "item";
	$ul.append(newItem);
});
