function wypiszWKonsoli() {
    console.log('Wywolanie funkcji');
}

wypiszWKonsoli();

function dodawanie(parametr1, parametr2) {
 //   console.log(parametr1 + parametr2);
//   console.log(123);   
//   zwracanie wartosci poprzez uzycie slowa kluczowego return, jezeli funkcja dojdzie do return, przerywa swoje dzialanie (kod nastepujacy nie  wykonywany)
    return parametr1 + parametr2;
}

function mnozenie(parametr3, parametr4) {
    console.log(parametr3 * parametr4);
}
mnozenie(3,4);

//dodawanie(4, 5);
var wynik = dodawanie(4, 5);
console.log(wynik);

console.log(10 + wynik);