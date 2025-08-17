function changeBackground(type) {
  const body = document.body;
  if (type === 'kiss') {
    body.style.background = "url('../img/kiss.jpg') center center / cover no-repeat";
  } else if (type === 'god') {
    body.style.background = "url('../img/saibaba.jpg') center center / cover no-repeat";
  }
  setTimeout(() => {
    body.style.background = "linear-gradient(120deg, #b39ddb 0%, #ce93d8 100%)";
  }, 3000); // Revert after 3 seconds
}
