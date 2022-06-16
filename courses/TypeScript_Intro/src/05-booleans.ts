(() => {
  let isEnable = true;
  isEnable = false;

  let isNew: boolean = false;
  console.log("isNew", isNew);
  isNew = true;

  const random = Math.random();

  isNew = random >= 0.5;
})();
