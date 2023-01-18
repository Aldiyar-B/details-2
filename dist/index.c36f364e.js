const input = document.querySelector(".date__input");
const inputValue = input.value;
const formDate = document.querySelector(".date__form");
const resultDiv = document.querySelector(".result");
//alert(inputValue);
formDate.addEventListener("click", showResult);
function showResult(e) {
    e.preventDefault();
    let result = calcResult();
    resultDiv.textContent = result;
}
function calcResult(date) {}

//# sourceMappingURL=index.c36f364e.js.map
