const cards = document.querySelectorAll(".card-pokedev");
const pokedev = document.querySelectorAll(".pokedev");

function removeClassesAtivas() {
	cards.forEach((element) => element.classList.remove("aberto"));
	pokedev.forEach((element) => element.classList.remove("ativo"));
}

pokedev.forEach((element, index) => {
	element.addEventListener("click", () => {
		removeClassesAtivas();

		element.classList.add("ativo");
		cards[index].classList.add("aberto");
	});
});
