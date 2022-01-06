const ingresos = [
    new Ingreso('Salario',1600),
    new Ingreso('Venta coche', 500),
    new ingreso('nuevo ingreso', 300),
];

const egresos = [
    new Egreso('Renta departamento', 800),
    new Egreso('Ropa', 85),
];

let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
}

let totalIngresos = () =>{
    let totalIngreso = 0;
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () =>{
    let totalEgreso = 0;
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML= formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

//formato de moneda
const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimunFractionDigits: 2});
}

const fomatoPorcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimunFractionDigits: 2});
}

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        ingresoHTML += crearIngresoHTML = ingreso;
    }
    document.getElementById('lista ingresos').innerHTML = ingresosHTML;
}
//esta parte la hice con el tutorial delde udemy, que no se si está bien esto. igual no está terminado.
const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
    <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"></ion-icon>
                            </button>
                        </div>
                    </div>`
    return ingresoHTML();
}
