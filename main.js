let mes = prompt ("Ingrese un mes en minusculas: ")
switch(mes)
{
    case "febrero":
        alert (mes + " tiene 28 o 29 dias dependiendo si el año es bisiesto o no")
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        alert (mes + " tiene 31 dias")
        break
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        alert (mes + " tiene 30 dias")
        break
    default:
        alert ("Mes inexistente")
}