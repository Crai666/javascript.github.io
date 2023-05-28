let inicio = prompt("¿Deseas iniciar? Si/No");
inicio = inicio.toLowerCase();
if (inicio === "si") {
  const empleados = [];
  while (inicio === "si"){
    /* Datos, ingresa el nombre y los numeros de autos trabajados */
    const empleado = {};
    empleado.nombre = prompt("Ingresar nombre del empleado");
    empleado.mostrarEmpleado = function (nombre){
      console.log("Empleado:", this.nombre);
    };
    empleado.autoslavados=parseInt(prompt("Autos lavados"));
    empleado.autosencerados=parseInt(prompt("Autos encerados"));
    empleado.autosaspirados=parseInt(prompt("Autos aspirados"));
    empleado.autostotal=empleado.autoslavados+empleado.autosencerados+empleado.autosaspirados;
    /* Calcular el precio por cada auto trabajado */
    empleado.costolavados=200 * empleado.autoslavados;
    empleado.costoencerados=400 * empleado.autosencerados;
    empleado.costoaspirados=100 * empleado.autosaspirados;
    empleado.total=empleado.costolavados+empleado.costoencerados+empleado.costoaspirados;
    /* Impuesto */
    const impuesto = 0.21;
    empleado.costoimpuesto = empleado.total * (1 - impuesto);
    empleados.push(empleado);
    /* Muestra la informacion total */
    empleado.mostrarEmpleado();
    console.log("Auto trabajados en total:", empleado.autostotal);
    console.log("Paga por sus",empleado.autostotal,"autos trabajados: $",empleado.total);
    console.log("Su paga es de: $",empleado.costoimpuesto,"(Con impuestos)");
    inicio = prompt("¿Quieres agregar más empleados? Si/No");
    inicio = inicio.toLowerCase();
  }
  console.log("Empleados registrados:");
  empleados.forEach(function (empleado) {
    empleado.mostrarEmpleado();
  });
  console.log("Hasta luego!");
} 
else if (inicio === "no") {
  console.log("Hasta luego!");
} 
else {
  console.log("Opción no válida");
}
