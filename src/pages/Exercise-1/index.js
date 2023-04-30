import { useEffect, useState } from "react";

const Exercise1 = () => {
	const [data, setData] = useState([]);
	
	const [patient, setPatien] = useState();

	const [pacientesConAlergias, setPacientesConAlergias] = useState([])
	const [pacientesPrivados, setPacientesPrivados] = useState([])

	const handleAddUser = (event) => {
		event.preventDefault();

		const { userName, cedula, telefono, ultimaVista, esPrivado, alergias, observaciones } = event.target

		const newUser = {
			userName: userName.value,
			cedula: cedula.value,
			telefono: telefono.value,
			ultimaVista: ultimaVista.value,
			esPrivado: esPrivado.checked,
			alergias: alergias.value,
			observaciones: observaciones.value
		}

		setData(preValue => [...preValue, newUser]);
	};

	const handleSearchUser = (event) => {
		event.preventDefault();

		for(let i = 0; i < data.length; i++) {
			if (event.target.patient.value === data[i].userName) {
				console.log("Paciente encontrado: ", data[i])
				setPatien(data[i]);
			};
		}

	}

	useEffect(()=> {
		const newAlergicPatients = data.filter((patient) => patient.alergias);
		setPacientesConAlergias(newAlergicPatients);

		const newPacientesPrivados = data.filter((patient) => patient.esPrivado);
		setPacientesPrivados(newPacientesPrivados);

	}, [data])

	return (
		<div>
			<h2>Exercise 1</h2>
      <p>
				Un médico almacena la siguiente información de sus pacientes: nombre, cédula, 
				teléfono, fecha de la última visita, si es privado o no (no tiene seguridad social), si tiene 
				alergias y un campo de observaciones. Se desea un algoritmo con las siguientes 
				opciones:
      </p>

			<ol>
				<li>
					Introducir los datos interactivamente.
				</li>

				<li>
					Imprimir por pantalla toda la información del paciente.
				</li>

				<li>
					Dada la cédula de un paciente, encontrar la fecha de la última visita.
				</li>

				<li>
					Listar todos los pacientes con alergias
				</li>

				<li>
					Listar todos los pacientes privados.
				</li>

				<li>
					Imprimir todo el listado completo de pacientes.
				</li>
			</ol>

			<br />

			 <h3>Agregar usuario: </h3>

			<form onSubmit={handleAddUser}>
				<div>
					<label htmlFor="userName">Nombre del usuario: </label>
					<input name="userName" id="userName" type="text" />
				</div>

				<div>
					<label htmlFor="cedula">Cedula: </label>
					<input name="cedula" id="cedula" type="number" />
				</div>

				<div>
					<label htmlFor="telefono">Telefono: </label>
					<input name="telefono" id="telefono" type="number" />
				</div>

				<div>
					<label htmlFor="ultimaVista">Ultima visita: </label>
					<input name="ultimaVista" id="ultimaVista" type="date" />
				</div>

				<div>
					<label htmlFor="esPrivado">Es privado: </label>
					<input name="esPrivado" id="esPrivado" type="checkbox"/>
				</div>

				<div>
					<label htmlFor="alergias">Alergias: </label>
					<input name="alergias" id="alergias" type="text" />
				</div>

				<div>
					<label htmlFor="observaciones">Observaciones: </label>
					<textarea name="observaciones" id="observaciones"/>
				</div>

				<button type="submit">Añadir usuario</button>
			</form>

			<br />

			<h3>Consultar paciente</h3>

			<div>
				<form onSubmit={handleSearchUser}>
					<label htmlFor="patient">Paciente a consultar: </label>
					<input id="patient" name="patient" type="text" />
					<button type="submit">Buscar paciente</button>
				</form>
			</div>
			{patient && (
				<div>
					<div>
						<p><strong>Nombre:</strong> {patient.userName}</p>
					</div>

					<div>
						<p><strong>Cedula:</strong> {patient.cedula}</p>
					</div>

					<div>
						<p><strong>Telefono:</strong> {patient.telefono}</p>
					</div>

					<div>
						<p><strong>Ultima visita:</strong> {patient.ultimaVista}</p>
					</div>

					<div>
						<p><strong>Es privado:</strong> {patient.esPrivado ? "Sí" : "No"}</p>
					</div>

					<div>
						<p><strong>Alergias:</strong> {patient.alergias}</p>
					</div>

					<div>
						<p><strong>Observaciones:</strong> {patient.observaciones}</p>
					</div>
				</div>
			)}

			<br />

			<div>
				<h3>Pacientes con alergias:</h3>
				{
					pacientesConAlergias && (
						<ul>
							{pacientesConAlergias.map( (paciente, index) => (
								<li key={index}>{paciente.userName}</li>
							))}
						</ul>
					)
				}
			</div>

			<br />

			<div>
				<h3>Pacientes Privados:</h3>
				{
					pacientesPrivados && (
						<ul>
							{pacientesPrivados.map( (paciente, index) => (
								<li key={index}>{paciente.userName}</li>
							))}
						</ul>
					)
				}
			</div>

			<div>
				<h3>Pacientes:</h3>
					<ul>
						{data.map( (paciente, index) => (
							<li key={index}>{paciente.userName}</li>
						))}
					</ul>
			</div>
		</div>
	)};

export default Exercise1;