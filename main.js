function calcularIMC() {
    const EDAD = document.getElementById("edad").value;
    const NOMBRE = document.getElementById("nombre").value;
    const PESO = parseFloat(document.getElementById("peso").value);
    const ESTATURA = parseFloat(document.getElementById("estatura").value);
    const IMC = PESO/(ESTATURA**2);
    const IMAGEN = document.getElementById("imagen-peso")
    let imagenSrc = "";

    if (IMC < 18.5) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tu peso es inferior al normal.";
        imagenSrc = "img/BajoPeso.png"
    } else if (IMC <= 24.9) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tu peso es normal.";
        imagenSrc = "img/NormalPeso.png"
    } else if (IMC <= 29.9) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tu peso es superior al normal.";
        imagenSrc = "img/SobrePeso.png"
    } else if (IMC >= 30.0) {
        mensaje = "Hola " + NOMBRE + ", tu IMC es de: " + IMC.toFixed(2) + ". Por lo tanto tienes obesidad.";
        imagenSrc = "img/ObesidadPeso.png"
    }

    document.getElementById("btn-enviar").classList.add("deshabilitado");
    document.getElementById("btn-eliminar").classList.remove("deshabilitado");

    document.getElementById("resultado").textContent = mensaje;
    IMAGEN.src = imagenSrc;
    IMAGEN.style.display = "block";
}

function eliminar() {
    const EDAD = NaN;
    const NOMBRE = "";
    const PESO = NaN;
    const ESTATURA = NaN;
    const IMAGEN = document.getElementById("imagen-peso")

    document.getElementById("edad").value = EDAD;
    document.getElementById("nombre").value = NOMBRE;
    document.getElementById("peso").value = PESO;
    document.getElementById("estatura").value = ESTATURA;

    document.getElementById("btn-eliminar").classList.add("deshabilitado");
    document.getElementById("btn-enviar").classList.remove("deshabilitado");

    document.getElementById("resultado").textContent = "";
    IMAGEN.style.display = "none";
}
