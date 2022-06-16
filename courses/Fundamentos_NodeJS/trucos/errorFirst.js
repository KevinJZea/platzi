function asincrona(callback) {
  setTimeout(function() {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

try {
  asincrona(function(error, dato) {
    if(error) {
      // console.error("Tenemos un error");
      // console.error(error);
      // return false;
      throw error;
    } else {
      console.log("Todo ha ido bien, mi data es ", dato);
    }
  });
} catch (error) {
  console.error("Hemos capturado un error");
  console.error(error);
}