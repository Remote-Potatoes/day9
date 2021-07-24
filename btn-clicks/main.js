const btn = document.querySelector("button");

let counter = 0;

btn.onclick = () => {
  counter++;
  const insideParens = btn.querySelector("span");

  if (counter === 1) {
    insideParens.innerText = `1 time`;
  } else {
    insideParens.innerText = `${counter} times`;
  }
};
