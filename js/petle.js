var tablica = ['marcin', 10, -50, 'anna', 'michal'];

//for
//indeks: 0, numer elementu: 1, wartosc: marcin

for(var i=0; i < tablica.length; i++) {
    if(i==3) {
    console.log('indeks: ' + i + ' numer elementu: ' + (i+1) + ' wartosc:' + tablica[i]);
        }
}

//forEach

tablica.forEach(function(element, index) {
    console.log('indeks: ' + index + ' numer elementu: ' + (index+1) + ' wartosc: ' + element);
} );

//while

var it = 0;
while(it < 10) {
    console.log(it);
    it++;
}