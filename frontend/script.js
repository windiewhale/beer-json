fetch("beer.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.cards[0])
        document.querySelector("#root").innertext = data.cards[0]
    })