
function uvecajZaJedan() {
    let currCounter = document.getElementById("counter");
    console.log(currCounter)
    currCounter = currCounter.innerHTML; 
    console.log(currCounter)
    //console.log(typeof(currCounter))

    currCounter = Number(currCounter)
    currCounter = currCounter + 1; //currCounter++

    //ako je currCounter dosao do 10, ne uvacavaj vise
    //ne uvecavaj vise - znaci napusti funkciju
    if (currCounter > 10) {  //ako je uslov tacan ulazi u if petlju
        alert('Limit Reached');
        return; //napusti funkciju
    }


    //treba da izmenimo html
    document.getElementById("counter").innerHTML = currCounter;

}


function umanjiZaJedan() {
    const el = document.getElementById("counter"); // <div id="counter">0</div>
    let numCounter =  el.innerHTML; // 0 - kao string

    numCounter = Number(numCounter); // sada je broj
    numCounter--; //umanjili smo counter za jedan

    if (numCounter <= 0) {
        alert('Min value is 1');
        return;
    }

    el.innerHTML = numCounter; //promenili vrednost za el
}

//operation - parametar funkcije
//                       operation = 'oduzimanje'
function counterFunction(operation) {
    const el = document.getElementById("counter"); // <div id="counter">0</div>
    let numCounter =  el.innerHTML; // 0 - kao strin

    //ako je operacija sabiranje
    //== operacija za proveru jednakosti
    // = dodela vrednosti
    if (operation == 'sabiranje') { //proveravamo da li je prosledjena operacija sabiranje ako jeste ulazi u telo if petlje i izvrsava izraze u njoj
        numCounter++;
        //a sada kada smouvecali treba da proverimo limit
        if (numCounter > 10) {  //ako je uslov tacan ulazi u if petlju
            alert('Limit Reached');
            return; //napusti funkciju counterFunction
        }
    } else if (operation == 'oduzimanje') {
        numCounter--;
        if (numCounter <= 0) {
            alert('Min value is 1');
            return;
        }
    } else {
        alert('Invalid operation');
    }

    //kad zavrsi if-else deo propada ovde
    el.innerHTML = numCounter;
}

//prvo proveri prvi if uslov
//ako je tacan izvrsava ga 
//i ne proverava ostale uslove

//ako prvi uslov nije tacan
//proverava sledeci uslov
//ako je sledeci uslov tacan izvrsava ga
// i ne proverava ostale

//ako ni jedan od navedenih uslova nije tacan
// a imamo else deo, 
// nakon sto proveri sve uslove, i ni jedan nije tacan
// propada u else deo i izvrsava ga
