function convert() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (isNaN(temperature)) {
        resultElement.innerHTML = " Error!!  Please enter a valid temperature";
        return;
    }

    if (unit === "celsius") {
        var convertedTemperature = (temperature * 9 / 5) + 32;
        resultElement.innerHTML = temperature + " &#8451; = " + convertedTemperature + " &#8457;";
    }

    if (unit === "kelvin (degree fahrenheit)") {
        var convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
        resultElement.innerHTML = temperature + " &#8457; = " + convertedTemperature + " &#8490;";
    }

    if (unit === "kelvin (degree celcius)") {
        var convertedTemperature = temperature + 273.15;
        resultElement.innerHTML = temperature + " &#8451; = " + convertedTemperature + " &#8490;";
    }

    else if (unit === "fahrenheit") {
        var convertedTemperature = (temperature - 32) * 5 / 9;
        resultElement.innerHTML = temperature + " &#8457; = " + convertedTemperature + " &#8451;";
    }
}