let counterValue = 0;

const $button1 = document.querySelector('button[data-action="decrement"]');
const $button2 = document.querySelector('button[data-action="increment"]');

let $span = document.querySelector("span");

console.log($span.innerHTML);

console.log($button1);
console.log($button2);

const handleClick1 = () => {
	counterValue -= 1;
	$span.innerHTML = `${counterValue}`;
};

const handleClick2 = () => {
	counterValue += 1;
	$span.innerHTML = `${counterValue}`;
};
console.log(counterValue);

$button1.addEventListener("click", handleClick1);
$button2.addEventListener("click", handleClick2);
