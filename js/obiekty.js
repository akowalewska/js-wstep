var osoba = {
    name: 'marcin',
    height: 170,
    print: function() {
        console.log(this.name);
    }
}
console.log(osoba.name + ' ' + osoba.height);
osoba.print();

//dodawanie wlasciwosci do obiektu
osoba.weight = 65;

//klucze podajemy bez nawiasow !!
osoba.printDetail = function() {
    console.log(this.name + ' ' + this.height + ' ' + this.weight);
}

osoba.printDetail();