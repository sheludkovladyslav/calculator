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

inputANode.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    inputBNode.focus();
  }
});

inputBNode.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    inputANode.focus();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    SelectOperationNode.focus();
  }
});

SelectOperationNode.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    inputBNode.focus();
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    btnResultNode.focus();
  }
});

btnResultNode.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    SelectOperationNode.focus();
  }
});
