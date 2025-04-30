    /* Las variable se pueden declarar como var o let, cualquiera de las 2 es valida, la diferencia principal es que let te deja cambiar las variables cuando vos quieras, mientras que var o const son definidas y quedan definidas desde el principio */
    var nombre = "Juan";
    //console.log(nombre); // Variable de tipo string
    let caracter = 'a';
    //console.log(caracter);
    let numero = 1;
    var numero2 = 2;
    //console.log(numero, numero2); /* se pueden hacer operaciones matematicas en los console.log */
    let array = [1, 2, 3];
    //console.log(array[0]); buscar un elemento especifico dentro del array
    /* Los array tienen sus propios metodos, como el .length() y .push(), length sirve para ver la dimension del array y tambien hacer como el ejemplo de abajo, push sirve para "pushear" o "empujar" un elemento al final del array. Otro metodo es el .pop() el cual remueve el ultimo elemento del array y lo retorna como el valor */
    array[array.length - 1] = 4; /* Cambia el valor del ultimo elemento del array */
    const pushed = array.push(5) /* Empuja el valor 5 al ultimo elemento */
    const unshifted = array.unshift(0) /* Empuja el valor 0 al primer elemento */
    const pop = array.pop();  /* El pop remueve el ultimo elemento del array y lo retorna como el valor */
    const shifted = array.shift(); /* El shift remueve el primer elemento del array y lo retorna como el valor */
    //console.log(array); 
    //console.log(pop); 
    //console.log(array);
    //Las constantes se declaran con const, y no se pueden cambiar, por lo que si se intenta cambiar el valor de una constante, el programa no va a funcionar y dara error.
    const constante = 1;
    const palabra = "hola";

    const vector = [];
    //Cuando se necesita realizar una tarea repetidamente hasta que una condicion se haga se necesita usar un loop. El mas basico es el for loop
    for (iterador; condicion; iteracion){ //El iterador es el valor inicial que indica como va iterando el loop, la condicion es el valor que se tiene que cumplir para que el loop siga y la iteracion es lo que se le suma al iterador cada vez que se cumple la condicion.
        logica;
    }
    for (let i = 0; i < contador; i = i + 1){ // i = i + 1 es igual a i +=1 que es lo mismo a i++ tambien se pueden usar los -- o i-=1 para la resta
        console.log(i) //El iterador empieza en 0, la condicion es que i sea menor a 10 y la iteracion es que i se le suma 1 cada vez que se cumple la condicion. Por lo que el loop va a iterar 10 veces, desde 0 hasta 9.
    }
    let rows = [];
    let result = "";
    for (const row of rows) { //El for of loop es un loop que se usa para iterar sobre los elementos de un array, en este caso rows. El iterador es el valor inicial que indica como va iterando el loop, la condicion es el valor que se tiene que cumplir para que el loop siga y la iteracion es lo que se le suma al iterador cada vez que se cumple la condicion.
        result = result + "\n" + row; //El resultado es el valor que se va a ir sumando cada vez que se cumple la condicion. En este caso, el resultado es el valor de cada elemento del array rows. Se puede agregar un salto de linea con el \n, que es un caracter especial que indica un salto de linea.
    }
    //Voy a intentar hacer una piramide.
    const hash = "#"; //El hash es el caracter que se va a usar para hacer la piramide.
    function nombre(parametro, parametro2){ //La funcion es un bloque de codigo que se utiliza para reutilizar en la aplicacion.
        //El parametro es el valor que se le pasa a la funcion para que la funcion lo use. En este caso, el parametro es el valor que se le pasa a la funcion para que la funcion lo use. Se puede usar el return para retornar un valor de la funcion.
        const suma = parametro +parametro2
        console.log(suma) //BIEN.
        return suma; //El return es un metodo que se usa para retornar un valor de la funcion. En este caso, el return es el valor que se le pasa a la funcion para que la funcion lo use. Se puede usar el return para retornar un valor de la funcion. Para retornar una variable local se tiene que hacer asi. Para ver un log de consola (console.log) se tiene que si o si usar antes del return.
        console.log(suma) //MAL, no devuelve nada
    }
    nombre(parametro) //Llamar a la funcion, se le puede pasar un valor o no.
    const llamada = nombre(5,10); //Llamar a la funcion y guardar el resultado en una variable. 
    const ola = nombre(5*10+5) //Se pueden usar operaciones matematicas para llamar a una funcion y guardar el resultado en una variable. Que es lo mismo que la funcion nombre con el resultado de 55
    console.log(llamada);
    //Existen variables globales (como hash, rows, result, llamada, contador), que son las que se declaran fuera de una funcion y se pueden usar en cualquier parte del programa, y variables locales (como suma), que son las que se declaran dentro de una funcion y solo se pueden usar dentro de esa funcion. Las variables globales tambien se pueden usar en la funcion por ejemplo se podria retornar hash+parametro y devolveria algo nuevo.
    if (condicion){ //El if es una condicion que se usa para ejecutar un bloque de codigo si la condicion se cumple. Existen valores truthy y falsy, los truthy son los que se cumplen y los falsy son los que no se cumplen. Existen 3 tipos de if, el if, el else if y el else. El if es el bloque de codigo que se ejecuta si la condicion se cumple, el else if es el bloque de codigo que se ejecuta si la condicion no se cumple y el else es el bloque de codigo que se ejecuta si ninguna de las condiciones anteriores se cumple.
        logica;
    }
    else if (condicion) {
        logica;
    }
    else {
        logica;
    }
    while (condicion){ //Los ciclos while son aquellos que se repiten hasta que la condicion se cumpla.
        logica;
    }
    //Existen algunos operadores aritmeticos para hacer confirmaciones, como el == que se usa para comprobar si dos valores son iguales, esto tiene sus problemas por ejemplo "0" == 0 devuelve verdadero, cuando nada que ver, para ver si dos valores son iguales y del mismo tipo se usa el ===, aca "0" === 0 es falso.
    //Hay otra forma de hacer la piramide, y es con un ciclo:
    var done = 0;
    while (done !== 8){
        rows.push(piramide(done, 8));
        done++; 
    }
    const contador = 10;
    let invertido = true;
    for (let i = 1; i < contador; i=i+1){
        if (invertido){
            rows.unshift(piramide(i+1, contador)); //piramide invertida
        } 
        else {
            rows.push(piramide(i+1, contador)) //piramide normal
        }
    }
    function piramide(filas, columnas){
        return " ".repeat (columnas - filas) + hash.repeat(2 * filas - 1) + " ".repeat(columnas-filas); //El repeat es un metodo que se usa para repetir una variable las veces que se indica. En este caso, el hash se va a repetir i veces, donde i es el iterador que va desde 1 hasta 10. Por lo que la piramide va a ir creciendo de a 1 cada vez que se cumple la condicion.
    }
    function getAverage(scores) {
        let sum = 0;
      
        for (const score of scores) {
          sum += score;
        }
      
        return sum / scores.length;
      }
      
      function getGrade(score) {
        if (score === 100) {
          return "A++";
        } else if (score >= 90) {
          return "A";
        } else if (score >= 80) {
          return "B";
        } else if (score >= 70) {
          return "C";
        } else if (score >= 60) {
          return "D";
        } else {
          return "F";
        }
      }
      
      function hasPassingGrade(score) {
        return getGrade(score) !== "F";
      }
      function getAverage(scores) {
        let sum = 0;
      
        for (const score of scores) {
          sum += score;
        }
      
        return sum / scores.length;
      }
      
      function getGrade(score) {
        if (score === 100) {
          return "A++";
        } else if (score >= 90) {
          return "A";
        } else if (score >= 80) {
          return "B";
        } else if (score >= 70) {
          return "C";
        } else if (score >= 60) {
          return "D";
        } else {
          return "F";
        }
      }
      
      function hasPassingGrade(score) {
        return getGrade(score) !== "F";
      }
      
      function studentMsg(totalScores, studentScore) {
        const average = getAverage(totalScores);
        const grade = getGrade(studentScore);
        const passed = hasPassingGrade(studentScore);
      
        if (passed) {
          return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
        } else {
          return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
        }
      }
      
      // Ejemplo de prueba
      console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
      