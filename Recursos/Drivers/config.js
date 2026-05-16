const config = {
    tipo: "productos",

    campos: [
        { name: "nombre", label: "Nombre", type: "text" },
        { name: "marca", label: "Marca", type: "text" },
        { name: "precio", label: "Precio", type: "number" },
        { name: "cantidad", label: "Cantidad", type: "number" }
    ],

    // 🟢 IMPORTANTE: soporte para identificación única
    idField: "id"
};