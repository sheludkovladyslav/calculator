const inputANode = document.querySelector(".js-number-a");
const inputBNode = document.querySelector(".js-number-b");
const btnResultNode = document.querySelector(".js-btn-result");
const OutputNode = document.querySelector(".js-output");
const SelectOperationNode = document.querySelector(".js-select-operation");

btnResultNode.addEventListener("click", function () {
  const a = parseInt(inputANode.value);
  const b = parseInt(inputBNode.value);
  const operation = SelectOperationNode.value;
  const result = calculate({
    a,
    b,
    operation,
  });
  OutputNode.innerHTML = result;
});
