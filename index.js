let btn_ver_clima=document.getElementById("btn_ver_clima");
btn_ver_clima.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(function(posicion) {
    let lat=posicion.coords.latitude;
    let long=posicion.coords.longitude;
    let key="3d01c63b90277f07cafb5c331fb6572c";
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
      .then(response=> response.json())
      .then(data=> {
        let estadoClima = data.weather[0].main;
        Toastify({
          text: `Estado del clima: ${estadoClima}`,
          className: "info",
          style: {
            background: "linear-gradient(to right, #414141, #2B2B2B)",
          }
        }).showToast();
      });
  });
});
let btn_enviar= document.getElementById("btn_enviar");
    btn_enviar.addEventListener("click", function() {
        Toastify({
            text: "Datos enviados.",
            className: "info",
            style: {
              background: "linear-gradient(to right, #414141, #2B2B2B)",
            }
          }).showToast();
let nombreinput = document.getElementById("nombreinput");
let nombre= nombreinput.value;
let resultadosdiv= document.getElementById("resultadosdiv");
resultadosdiv.innerHTML= "Bienvenido, "+ nombre;

let trabajadorinput= document.getElementById("trabajadorinput");
let nombretrabajador= trabajadorinput.value;

let autoslavadosinput= document.getElementById("autoslavadosinput");
let autoslavados= autoslavadosinput.value;

let autosaspiradosinput= document.getElementById("autosaspiradosinput");
let autosaspirados= autosaspiradosinput.value;

let autoslustradosinput= document.getElementById("autoslustradosinput");
let autoslustrados= autoslustradosinput.value;

let precioautolavado= 100;
let precioautoaspirado= 50;
let precioautolustrado= 120;

let totalautoslavado= precioautolavado * autoslavados;
let totalautosaspirado= precioautoaspirado * autosaspirados;
let totalautoslustrado= precioautolustrado * autoslustrados;

let total = totalautoslavado + totalautosaspirado + totalautoslustrado;

let iva= 0.21;
let totaliva= total - (total * iva);

resultadosdiv.innerHTML += "<br>Nombre del trabajador: "+nombretrabajador;
resultadosdiv.innerHTML += "<br>Cantidad de autos lavados: "+autoslavados;
resultadosdiv.innerHTML += "<br>Cantidad de autos aspirados: "+autosaspirados;
resultadosdiv.innerHTML += "<br>Cantidad de autos lustrados: "+autoslustrados;
resultadosdiv.innerHTML += "<br>Monto total de los autos trabajados: $"+total;
resultadosdiv.innerHTML += "<br>Monto total con descuento de IVA: $"+totaliva;

let usdata = {
    nombre: nombre,
    nombretrabajador: nombretrabajador,
    autoslavados: autoslavados,
    autosaspirados: autosaspirados,
    autoslustrados: autoslustrados,
    total: total,
    totaliva: totaliva
};
let jsondata = JSON.stringify(usdata);
localStorage.setItem("usdata", jsondata);
}
);