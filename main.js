function calcularIMC() {
    const EDAD = document.getElementById("edad").value;
    const NOMBRE = document.getElementById("nombre").value;
    const PESO = parseFloat(document.getElementById("peso").value);
    const ESTATURA = parseFloat(document.getElementById("estatura").value);
    const IMC = PESO/(ESTATURA**2);

    if (IMC < 18.5) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tu peso es inferior al normal.";
    } else if (IMC <= 24.9) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tu peso es normal.";
    } else if (IMC <= 29.9) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tu peso es superior al normal.";
    } else {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tienes obesidad.";
    }
    document.getElementById("resultado").textContent = mensaje;
}