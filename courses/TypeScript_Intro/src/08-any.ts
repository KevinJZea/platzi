(() => {
  let myDynamicVar: any;

  myDynamicVar = "Hola";
  const rta = (myDynamicVar as string).toLowerCase();

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
})();
