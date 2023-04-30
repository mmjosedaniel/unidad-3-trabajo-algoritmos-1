import { useEffect, useState } from "react";

const Exercise2 = () => {
	const [jugadores, setJugadores] = useState([]);
	const [jugadorEncontrado, setJugadorEncontrado] = useState();

	const [jugadoresHombres, setJugadoresHombres] = useState([]);
	const [jugadoresMujeres, setJugadoresMujeres] = useState([]);
	const [jugadoresNa, setJugadoresNa] = useState([]);

	const [jugadoresPorEstatura, setJugadoresPorEstatura] = useState([]);
	const [jugadoresPorEdad, setJugadoresPorEdad] = useState([]);

	const handleAddJugador = (event) => {
		event.preventDefault();

		const { nombreDelJugador, cedulaDelJugador, estaturaDelJugador, edadDelJugador, sexoDelJugador } = event.target

		const nuevoJugador = {
			nombreDelJugador: nombreDelJugador.value,
			cedulaDelJugador: cedulaDelJugador.value,
			estaturaDelJugador: estaturaDelJugador.value,
			edadDelJugador: edadDelJugador.value,
			sexoDelJugador: sexoDelJugador.value
		}

		setJugadores(preValue => [...preValue, nuevoJugador]);
	};

	const handleBuscarJugador = (event) => {
		event.preventDefault();

		for(let i = 0; i < jugadores.length; i++) {
			if (event.target.jugadorBuscado.value === jugadores[i].nombreDelJugador) {
				console.log("Jugador encontrado: ", jugadores[i])
				setJugadorEncontrado(jugadores[i]);
			};
		}
	}

	const handleFiltroPorEstatura = (event) => { 
		event.preventDefault();

		const nuevoJugadoresPorEstatura = jugadores.filter(
			(jugador) => {
				return (
					+jugador.estaturaDelJugador >= +event.target.estaturaMinimaJugador.value &&
					+jugador.estaturaDelJugador <= +event.target.estaturaMaximaJugador.value
				)
			}
		)
		setJugadoresPorEstatura(nuevoJugadoresPorEstatura);
	}

	const handleFiltroPorEdad = (event) => { 
		event.preventDefault();

		const nuevoJugadoresPorEdad= jugadores.filter(
			(jugador) => {
				return (
					+jugador.edadDelJugador >= +event.target.edadMinimaJugador.value &&
					+jugador.edadDelJugador <= +event.target.edadMaximaJugador.value
				)
			}
		)
		setJugadoresPorEdad(nuevoJugadoresPorEdad);
	}

	useEffect(() => {
		const newJugadoresHombres = jugadores.filter((jugador) => jugador.sexoDelJugador === "hombre" );
		setJugadoresHombres(newJugadoresHombres);

		const newJugadoresMujeres = jugadores.filter((jugador) => jugador.sexoDelJugador === "mujer" );
		setJugadoresMujeres(newJugadoresMujeres);

		const newJugadoresNa = jugadores.filter((jugador) => jugador.sexoDelJugador === "na" );
		setJugadoresNa(newJugadoresNa);
	}, [jugadores]);
	return (
		<div>
			<p>
				Se desea manejar mediante arreglos de registros los datos de los jugadores de 
				determinado equipo de baloncesto. Los campos de los registros son: nombre, cédula, 
				estatura, edad y sexo. Se desea un algoritmo con las siguientes opciones:
			</p>
			<ol>
				<li>
					Introducir los datos interactivamente.
				</li>

				<li>
					Imprimir por pantalla toda la información de un jugador.
				</li>

				<li>
					Listado por sexo.
				</li>

				<li>
					Listado de jugadores comprendidos entre dos estaturas.
				</li>
				<li>
					Listado de jugadores comprendidos entre dos edades.
				</li>

				<li>
					Imprimir todo el listado completo de jugadores.
				</li>
			</ol>

			<br />

			<h3>Añadir jugador: </h3>

			<form onSubmit={handleAddJugador}>
				<div>
					<label htmlFor="nombreDelJugador">Nombre del jugador: </label>
					<input name="nombreDelJugador" id="nombreDelJugador" type="text" />
				</div>

				<div>
					<label htmlFor="cedulaDelJugador">Cedula del jugador: </label>
					<input name="cedulaDelJugador" id="cedulaDelJugador" type="number" />
				</div>

				<div>
					<label htmlFor="estaturaDelJugador">Estatura del jugador en cm : </label>
					<input name="estaturaDelJugador" id="estaturaDelJugador" type="number" />
				</div>

				<div>
					<label htmlFor="edadDelJugador">Edad del jugador: </label>
					<input name="edadDelJugador" id="edadDelJugador" type="number" />
				</div>

				<div>
					<label htmlFor="sexoDelJugador">Sexo del jugador: </label>
					<select name="sexoDelJugador" id="sexoDelJugador" >
						<option value="hombre">Hombre</option>
  					<option value="mujer">Mujer</option>
						<option value="na">Na</option>
					</select>
				</div>

				<button type="submit">Añadir jugador</button>
			</form>

			<br />

			{console.log(jugadorEncontrado)}

			<h3>Consultar jugador</h3>

			<div>
				<form onSubmit={handleBuscarJugador}>
					<label htmlFor="jugadorBuscado">Jugador a consultar: </label>
					<input id="jugadorBuscado" name="jugadorBuscado" type="text" />
					<button type="submit">Buscar Jugador</button>
				</form>
			</div>
			{jugadorEncontrado && (
				<div>
					<div>
						<p><strong>Nombre:</strong> {jugadorEncontrado.nombreDelJugador}</p>
					</div>

					<div>
						<p><strong>Cedula:</strong> {jugadorEncontrado.cedulaDelJugador}</p>
					</div>

					<div>
						<p><strong>Estatura:</strong> {jugadorEncontrado.estaturaDelJugador}</p>
					</div>

					<div>
						<p><strong>Edad:</strong> {jugadorEncontrado.edadDelJugador}</p>
					</div>

					<div>
						<p><strong>Sexo:</strong> {jugadorEncontrado.sexoDelJugador}</p>
					</div>
				</div>
			)}

			<br />
			<div>
				<h3>Jugadores por sexo</h3>

				<h4>Hombres</h4>
				<ul>
					{jugadoresHombres.map((jugador) => (
						<li>{jugador.nombreDelJugador}</li>
					))}
				</ul>



				<h4>Mujeres</h4>
				<ul>
					{jugadoresMujeres.map((jugador) => (
						<li>{jugador.nombreDelJugador}</li>
					))}
				</ul>

				<h4>Na</h4>
				<ul>
					{jugadoresNa.map((jugador) => (
						<li>{jugador.nombreDelJugador}</li>
					))}
				</ul>
			</div>

			<br />

			<div>
				<h3>Jugadores por rango de estatura: </h3>

				<form onSubmit={handleFiltroPorEstatura}>
					<div>
						<label htmlFor="estaturaMinimaJugador">Estatura minima: </label>
						<input name="estaturaMinimaJugador" id="estaturaMinimaJugador" type="number" />
					</div>

					<div>
						<label htmlFor="estaturaMaximaJugador">Estatura Maxima: </label>
						<input name="estaturaMaximaJugador" id="estaturaMaximaJugador" type="number" />
					</div>
					<button type="submit">Filtrar en rango de estatura</button>
				</form>
				
				<ul>
					{jugadoresPorEstatura && jugadoresPorEstatura.map((jugador, key) => <li key={key}>{jugador.nombreDelJugador}</li>)}
				</ul>
			</div>

			<br />

			<div>
				<h3>Jugadores por rango de Edad: </h3>
				
				<form onSubmit={handleFiltroPorEdad}>
					<div>
						<label htmlFor="edadMinimaJugador">Edad minima: </label>
						<input name="edadMinimaJugador" id="edadMinimaJugador" type="number" />
					</div>

					<div>
						<label htmlFor="edadMaximaJugador">Edad Maxima: </label>
						<input name="edadMaximaJugador" id="edadMaximaJugador" type="number" />
					</div>
					<button type="submit">Filtrar en rango de edad</button>
				</form>
				
				<ul>
					{jugadoresPorEstatura && jugadoresPorEdad.map((jugador, index) => <li key={index}>{jugador.nombreDelJugador}</li>)}
				</ul>
			</div>

			<div>
				<h3>Jugadores:</h3>

				<ul>
					{jugadores.map((jugador, index) => <li key={index}>{jugador.nombreDelJugador}</li>)}
				</ul>
			</div>
		</div>
	);
};

export default Exercise2;
