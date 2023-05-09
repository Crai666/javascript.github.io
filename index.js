let inicio=prompt("¿Deseas iniciar? Si/No");
inicio=inicio.toLowerCase();
if (inicio==="si"){
    while(inicio == "si"){
        /* Datos, ingresa el nombre y los numeros de autos trabajados */
        let=nombre=prompt("Ingresar nombre del empleado");
        function mostrar_empleado(){
            console.log("Empleado:",nombre);
        }
        let autoslavados=parseInt(prompt("Autos lavados"));
        let autosencerados=parseInt(prompt("Autos encerados"));
        let autosaspirados=parseInt(prompt("Autos aspirados"));
        autostotal=(autoslavados)+(autosencerados)+(autosaspirados);
        /* Calcular el precio por cada auto trabajado */
        let costolavados=200*autoslavados;
        let costoencerados=400*autosencerados;
        let costoaspirados=100*autosaspirados;
        let total=(costolavados)+(costoencerados)+(costoaspirados);
        /* Impuesto */
        let impuesto=0.21;
        let costoimpuesto=total*(1-impuesto);
        /* Muestra la informacion total */
        mostrar_empleado();
        console.log("Auto trabajados en total:", autostotal);
        console.log("Paga por sus",autostotal,"autos trabajados:$",total);
        console.log("Su paga es de:$",costoimpuesto,("(Con impuestos)"));
        inicio=prompt("¿Quieres agregar mas empleados? Si/No")
        inicio=inicio.toLowerCase();
        }
        console.log("Hasta luego!");
}   
else if (inicio==="no"){
    console.log("Hasta luego!");
}
else{
    console.log("Opcion no valida")
}


