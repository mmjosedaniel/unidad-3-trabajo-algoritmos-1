import { useState } from "react";

const Exercise3 = () => {
	const [palabra, setPalabra] = useState('');
	const [palabrMinusculasMinusculas, setPalabrMinusculasMinusculas ] = ('');

	const   handleProcesarPablabra = () => {
		cambiarMayusculasYMinusculas()
	};

	const cambiarMayusculasYMinusculas = (palabra) => {
		let resultado = "";
		for (let i = 0; i < palabra.length; i++) {
			let letra = palabra[i];
			if (letra === letra.toUpperCase()) {
				resultado += letra.toLowerCase();
			} else {
				resultado += letra.toUpperCase();
			}
		}
		setPalabrMinusculasMinusculas(resultado);
	};

	return(
		<div>
			<h2>Exercise 3</h2>

			Elabore un programa en pseint que le pida al usuario una palabra digitada en 
			minúscula y:
			<br />
			1. Convierta las mayúsculas a minúsculas y viceversa.
			<br />
			2. Determine si tiene más vocales que consonantes o no. Su programa debe 
			<br />
			retornar verdadero si cumple la condición; de lo contrario, debe retornar falso.
			<br />
			3. Que invierta todos los caracteres de una hilera dada. Por ejemplo, si la hilera es 
			“amor”, el algoritmo debe imprimir “roma”.
			<br />
			4. Determine si tiene los cincos vocales o no. Su método debe retornar verdadero 
			si cumple la condición; de lo contrario, debe retornar falso.

			<label htmlFor="palabraParaAnalizar">Ingrese la Palabra</label>
			<input 
				id="palabraParaAnalizar" 
				name="palabraParaAnalizar" 
				type="text"
				onChange={(event) => setPalabra(event.target.value)} 
			/>
			<button type="button" onClick={handleProcesarPablabra}>Procesar palabra</button>
			<h3>Palabra:</h3>
			<p>{palabra}</p>
			<h3>Minusculas a mayusculas y viseversa: </h3>
			<p>{palabrMinusculasMinusculas}</p>
		</div>
	)
}

export default Exercise3;
