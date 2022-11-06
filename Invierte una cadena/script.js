
{
    //! Metodo 1
    /// Realizado con metodo split(),reverse(),join()

    function invertirCadena(str) {
        return str
            .split("")  //split() transforma el String en un array (vector) 
            .reverse() // reverse() Invierte  la palabra
            .join("");//  El método join() une todos los elementos de una matriz en una cadena y  la devuelve 
    }

    // console.log(invertirCadena("avion"));
}


{
    //! Metodo 2
    /// con Loop for tradicional 


    {
        //?  Solucion 1
        function invertirCadena(str) {

            let original = str.split("");
            // console.log(original);
            let invertido = [];

            for (i = 0; i < original.length; i++) {
                invertido[i] = original[((original.length - 1) - i)];
            }
            return invertido.join("");
        }

        /// console.log(invertirCadena("hello"));
        // console.log(invertirCadena("avion"));
    }

    {
        //? Solucion 2
        function invertirCadena(str) {

            let original = str.split("");
            let invertido = [];
            let contador = 0;
            for (i = original.length - 1; i >= 0; i--) {
                invertido[contador] = original[i];
                contador += 1;
                // console.log(invertido);
            }
            return invertido.join(" ");
        }
    }

    {
        //? Solucion 3

        function invertirCadena(str) {
            let original = str.split("");
            let invertido = [];

            for (i = 0; i <= original.length - 1; i++) {
                invertido.unshift(original[i]);
                // console.log(i, invertido.unshift(original[i]));
            }
            return invertido.join(" ");
        }

    }

    {
        //? Solucion 4

        function invertirCadena(str) {
            let original = [...str];
            let invertido = [];

            for (i = 0; i <= original.length - 1; i++) {
                invertido.unshift(original[i]);
            }
            return invertido.join(" ");
        }

    }
}

{
    //! Metodo 3  con un for each

    {
        //? Solucion 1
        function invertirCadena(str) {
            let original = [...str];
            let invertido = [];
            original.forEach((_, i) => {
                invertido[i] = original[(original.length - 1) - i];
            });
            return invertido.join(" ");
        }
    }

    {
        //? Solucion 2
        function invertirCadena(str) {
            let original = [...str];
            let invertido = [];
            original.forEach((elemento, i) => {
                invertido.unshift(elemento);
            });
            return invertido.join(" ");
        }

        // invertirCadena("hola");
        // console.log(invertirCadena("hola"));

    }

    {
        //? Solucion 3
        function invertirCadena(str) {
            let original = [...str];
            let invertido = [];
            original.forEach((_, i) => {
                invertido.push(original[(original.length - 1) - i]);
            });
            return invertido.join(" ");
        }

        // invertirCadena("hola");
        // console.log(invertirCadena("hola"));


    }

}

{
    //!Metodo 4  agregandolo como  metodo a el Objeto String

    {
        //? Solucion  0

        //? https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects

        // ? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

        String.prototype.invertirCadena = function () {
            //             console.log(this);
            //             console.log([this]);
            //             console.log([...this]);
            //             console.log(this.split(""));
            //             console.log(this.split("") == [...this]);
            //             console.log('ivor'.length);
            // 
            // 
            //             console.log("-------------");
            // 
            //             console.log(...'guzman');
            //             console.log([...'guzman']);
            //             console.log({ ...'guzman' });

            let invertido = "";


        };
        'ivor'.invertirCadena();
        'pedro'.invertirCadena();
    }





    {
        //?  Solucón 2

        console.log(this);

        String.prototype.invertirCadena = function () {
            console.log([...this].reverse().join(""));
        };
        'ivor'.invertirCadena();
        console.log("ivor".length);;
        // 'pedro'.invertirCadena2();
    }


    {
        // ? Solución 3

        String.prototype.invertirCadena = function () {
            // console.log(this);
            let invertido = [];
            let contador = 0;
            for (let i = this.length - 1; i >= 0; i--) {
                console.log(this[i]);
                invertido[contador += 1] = this[i];
                console.log(invertido);
            }
            return invertido.join("");
        };
        console.log('Zambrano'.length);
        console.log('Zambrano'.invertirCadena());
    }

    {
        // ? Solución 4

        String.prototype.invertirCadena = function () {
            console.log(this);
            let invertido = "";
            for (let i = this.length - 1; i >= 0; i--) {
                console.log(invertido);
                invertido += this[i];
            }
            return invertido;
        };
        console.log('Zambrano'.length);
        console.log('Zambrano'.invertirCadena());
    }
}
