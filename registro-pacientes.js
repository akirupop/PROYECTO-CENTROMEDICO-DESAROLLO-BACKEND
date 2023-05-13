function agregarPaciente() {
  let nombre = prompt("Ingrese el nombre del paciente:");
  let apellido = prompt("Ingrese el apellido del paciente:");
  let fechaNacimiento = prompt("Ingrese la fecha de nacimiento del paciente (dd/mm/aaaa):");
  let correo = prompt("Ingrese el correo electrónico del paciente:");
  let telefono = prompt("Ingrese el número de teléfono del paciente:");
  
  let tabla = document.getElementById("tabla-pacientes");
  let nuevaFila = tabla.insertRow(-1);
  let celdaNombre = nuevaFila.insertCell(0);
  let celdaApellido = nuevaFila.insertCell(1);
  let celdaFechaNacimiento = nuevaFila.insertCell(2);
  let celdaCorreo = nuevaFila.insertCell(3);
  let celdaTelefono = nuevaFila.insertCell(4);
  
  celdaNombre.innerHTML = nombre;
  celdaApellido.innerHTML = apellido;
  celdaFechaNacimiento.innerHTML = fechaNacimiento;
  celdaCorreo.innerHTML = correo;
  celdaTelefono.innerHTML = telefono;
}
