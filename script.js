fetch('personas.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let salida = "";
    datos.forEach(pers => {
        salida += `<p>Nombre: ${pers.name} - Edad: ${pers.age} años</p>`;
    });
    document.getElementById("resultado").innerHTML = salida;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});