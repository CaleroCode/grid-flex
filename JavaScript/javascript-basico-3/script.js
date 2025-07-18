// Ejercicios básicos en JavaScript 3 
// Números:

function sumar(a,b)
    {return a + b}
        console.log(sumar(10, 20));

function resta(c,d)
    {return c - d}
        console.log(resta(15, 25));

function multiplicar(e, f) 
    {return e * f;}
        console.log(multiplicar(30, 40));

function dividir(g, h) 
    {return g / h;}
        console.log(dividir(60, 5));

function exponente(i, j)
    {return i ** j}
        console.log(exponente(10, 5));

function rdiv(k, l)
    {return k % l}
        console.log(rdiv(65, 12));

function rcuadr(number)
    {return Math.sqrt(number)}
        console.log(rcuadr(22));

function vabsolute(number)
    {return Math.abs(number)}
        console.log(vabsolute(-10))
        console.log(vabsolute(10))
        console.log(vabsolute(0))
        console.log(vabsolute(540))

function nredondo(number)
    {return Math.round(number)}
        console.log(nredondo(3.7))
        console.log(nredondo(50.32))
        console.log(nredondo(5.4))
        console.log(nredondo(2.12))

function random()
    {return Math.random()}
        console.log(random())



// Letras:

function concatenar(texto1, texto2)
    {return texto1 + texto2}
        console.log(concatenar("Hello, ", "world!!!!"))

function longitud(texto)
    {return texto.length}
        console.log(longitud("Hi, world! Im here"));

function caps(texto)
    {return texto.toUpperCase()}
        console.log(caps("Hey there!!"))

function lower(texto)
    {return texto.toLowerCase()}
        console.log(lower("HERE'S JOHNNY!!!!"))

function caracterIndice(texto, indice)
    {return texto.charAt(indice)}
        console.log(caracterIndice("Hi world!", 8))

function invert(texto)
    {return texto.split('').reverse().join('');}
            console.log(invert("Hi world, again.... and again..."))

function cuentaLetras(texto, caracter) 
    {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) 
    {
    if (texto[i] === caracter) {
      contador++;
    }
    }
  return contador;
    }
            console.log(cuentaLetras("CALERO", "e"))

function sinEspacios(texto)
    {return texto.replace(/\s+/g, "")}
            console.log(sinEspacios("HEY THERE, IM HERE AGAIN!"))

function palindromo(texto)
    {
        const limpio = texto.toLowerCase().replace(/\s/g, " ");
        const invert = limpio.split("").reverse().join("");
        return limpio === invert;
    }
            console.log(palindromo("Anita lava la tina"));
            console.log("Esto no es un palíndromo");
            console.log("Hi world, im here again!!!");

function primeraLetra(texto)
    {
        return texto
            .split(" ")
            .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
            .join(" ");
    }
            console.log(primeraLetra("uppercase!!"))



// Arrays:

function sumArray(numeros)
    {return numeros.reduce((acumulator, actual) => acumulator + actual, 0)}
        console.log(sumArray([1, 2, 3, 4]));

function promediArray(numeros)
    {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce ((acumulator, actual) => acumulator + actual, 0);
    return suma / numeros.length;
    }
        console.log(promediArray([10,20, 80, 40]));

function ascendente(numeros)
    {return numeros.slice().sort((a, b) => a - b);}
        console.log(ascendente([5, 24, 1, 193, 83, 70]));

function combinados(array1, array2)
    {return array1.concat(array2)}
    const a = ["a", "b", "c"];
    const b = ["d", "e", "f"];
    const resultado = combinados(a, b);
        console.log(resultado);

function NumMax(numeros)
    {return Math.max(...numeros);}
        const numeracion = [65, 123, 89, 65];
        console.log(NumMax(numeracion));

function NumMin(numeros)
    {return Math.min(...numeros);}
        const listaNumeros = [54, 3432, 684, 1, 23];
        console.log(NumMin(listaNumeros));

function cantidadVeces(array, elemento)
    {return array.filter(item => item === elemento).length;}
        const num = [41, 64, 89, 14, 15, 16, 89, 190];
        console.log(cantidadVeces(num, 89));

function noDuplicados(array)
    {return array.filter((item, index) => array.indexof(item) === index);}
        console.log(resultado)

function ordenInverso(array)
    {return array.slice().reverse();}
        const original = [1, 2, 3, 5, 6, 7, 8, 9];
        const invertido = ordenInverso(original);
        console.log(invertido)
        console.log(original)


// Objetos literales:

function objetoLiteral(objeto)
    {return objeto.nombre;}
        const persona = { nombre: "Calero", edad: 41 };
        const resultado1 = objetoLiteral(persona);
            console.log(resultado1);

function edadActualizada(objeto, nuevaEdad)
    {objeto.edad = nuevaEdad;
    return objeto;}
        const personA = { nombre: "Calero", edad: 40 };
        const personActualizada = edadActualizada(personA, 41);
            console.log(personActualizada);

function nuevaPropiedad(objeto, nombrePropiedad)
    {objeto[nombrePropiedad] = null;}
        const personB = { nombre: "Eva", edad: 30 };
        nuevaPropiedad(personB, "Profesora");
            console.log(personB);

function deleted(objeto, nombrePropiedad)
    {delete objeto[nombrePropiedad];}
        const personC = { nombre: "Andrés", edad: 60, ocupación: "Ingeniero"};
        deleted(personC, "ocupación");
            console.log(personC)

function propiedadEliminada(objeto, nombrePropiedad)
    {delete objeto[nombrePropiedad];}
        const personD = {
                        nombre: "Julia",
                        edad: 34,
                        profesion: "developer",
                        };
        propiedadEliminada(persona, "profesion");
            console.log(personD)

function Propiedad(objeto, nombrePropiedad)
    {return objeto.hasOwnProperty(nombrePropiedad);}
        const personE = {
                        nombre: "Sergi",
                        edad: 32,
                        };
            console.log(Propiedad(personE, "edad"));
            console.log(Propiedad(personE, "profesion"));

function ObjetoLiteral(objeto)
    {return Object.values(objeto);}
        const personF = {
                        nombre: "Mafalda",
                        edad: 80,
                        profesion: "sarcástica"
                        };
        const valores = ObjetoLiteral(personF)
        console.log(valores)

function objetosIguales(objeto1, objeto2) {
  const clave1 = Object.keys(objeto1);
  const clave2 = Object.keys(objeto2);

  if (clave1.length !== clave2.length) 
        {return false;}

  for (let clave of clave1) 
    {
    if (objeto1[clave] !== objeto2[clave]) 
        {return false;}
    }
  return true;
}
    const datoA = { nombre: "Calero", edad: 41 };
    const datoB = { edad: 41, nombre: "Calero"};
    const datoC = { nombre: "Calero", edad: 25};
        console.log(objetosIguales(datoA, datoB));
        console.log(objetosIguales(datoA, datoC));

function copiaExacta(objeto)
    {return { ...objeto };}
        const personG = { nombre: "Anastasia", edad: 103 };
        const copiaPersona = copiaExacta(personG);
        console.log(copiaPersona);
        console.log(copiaPersona === personG);

function dosObjetos(objeto1, objeto2)
    {return { ...objeto1, ...objeto2};}
        const objetoA = { nombre: "Gomaespuma", edad: 75 };
        const objetoB = { edad: 40, profesion: "panadera"};
        const objCombi = dosObjetos(objetoA, objetoB);
        console.log(objCombi);