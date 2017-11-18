//tablice
//indeksowane od 0
//dostep do elementu tablicy - nazwa_tablicy[indeks]

var tablica = [10, 'marcin', 30, 40];
console.log(tablica);

console.log(tablica[1]);

//dodanie wartosci na koniec tablicy za pomoca indeksu ostatniego elementu + 1
tablica[4] = 'anna';
console.log(tablica);

//dodanie wartosci do tablicy za pomoca metody push();

tablica.push(50, 'michal');
console.log(tablica);

//metoda pop() usuwa ostatni element z tablicy
tablica.pop();
console.log(tablica);

//unshift() wstawia nowe wartosci na poczatek tablicy
tablica.unshift('robert',105);
console.log(tablica);

//shift usuwa pierwszy element z tablicy
tablica.shift();
console.log(tablica);

//.length - zwraca dlugosc tablicy
console.log(tablica.length);

//metoda join laczy do stringa elementy tablicy
console.log(tablica.join('-'));

//metoda reverse() - odwraca kolejnosc elementow tablicy
console.log(tablica.reverse());
console.log(tablica);

//.sort() do sortowania tablicy
console.log(tablica.sort());
console.log(tablica);
















