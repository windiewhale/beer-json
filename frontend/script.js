function loadEvent() {
    console.log("The Beer Data");
    let rootElement = document.getElementById("root")
    
    //let keys = []

    let beers = []
    function beerList() {
        fetch("beer.json")
                .then(response => response.json())
                .then(data => {
                    console.log(data.cards);
                    /* for(const cards in data) {
                        console.log(`${cards}: ${data[cards]}`);
                    } */
                    //beers = Object.values(data.cards);
                    //console.log(beers);
                    //const cards = keys[3]
                    //console.log(cards);
                })
    }
    beerList();
    console.log(beers);

          /*   .then(data => {
                console.log(data.cards[2].sub)
                document.getElementById("root").innertext = data.cards[2].sub
            })

    let allCities = [] // ebbe mennek bele a városok nevei a getAllCities fügvény segitségével
    function getAllCities() {
        const url = "./city.list.json";
        fetch(url)
        .then(response => response.json())
        .then(repos => {
            
            for (let i = 0; i < repos.length; i++) {
                allCities[i] = repos[i].name
            }
        })
        .catch(err => console.log(err))      
} */



    let card = function (title, sub, text){
        return `
        <div class="card">
            <h2>${title}</h2>
            <h4>${sub}</h4>
            <p>${text}</p>
        </div>`;
    };

    rootElement.insertAdjacentHTML("beforeend", card(beers.title, beers.sub, beers.text)); 
    
    
}
window.addEventListener("load", loadEvent);