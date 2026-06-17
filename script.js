fetch('productos.json')
.then((rpta) => rpta.json())
.then((datos) => {
    let salida = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Disponible</th>
                <th>Detalles</th>
            </tr>
    `;
    datos.forEach(pro => {
        salida += `
            <tr>
                <td>${pro.nombre}</td>
                <td>$${pro.precio}</td>
                <td>${pro.disponible}</td>
                <td>${pro.detalles.color} - ${pro.detalles.talla}</td>
            </tr>
        `;
    });
    salida += `</table>`;
    document.getElementById("resultado").innerHTML = salida;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});