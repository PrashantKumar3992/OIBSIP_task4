const calculateTemp = () => {
  const tempUnits = document.querySelector(".temp-units");
  let inputTemp = document.querySelector(".input-temp").value;
  let outputTemp = document.querySelector(".output-temp");

  const resultValue = tempUnits.options[tempUnits.selectedIndex].value;
  //  celcius To fehrenheit
  const celToFeh = function (cel) {
    let fahrenheit = ((cel * 9) / 5 + 32);
    return fahrenheit;
  };

  //  fehrenheit To celcius

  const fahToCel = function (fah) {
    let celsius = (((fah - 32) * 5) / 9);
    return celsius;
  };

  if (resultValue == "Fah") {
    console.log("temperaturte");
    document.querySelector(".output-temp").value =
      fahToCel(inputTemp) + "°Celsius";
  } else {
    document.querySelector(".output-temp").value =
      celToFeh(inputTemp) + "°Fahrenheit";
  }
};
