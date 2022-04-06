function loadEvent() {
    console.log("The Beer Data");
    let rootElement = document.getElementById("root")
    
    fetch("beer.json")
        .then(response => response.json())
        .then(data => {
            data.cards.forEach(card => {
                let htmlC = `
                <div class="card">
                    <h2>${card.title}</h2>
                    <h4>${card.sub}</h4>
                    <p>${card.text}</p>
                </div>`;
                rootElement.insertAdjacentHTML("beforeend", htmlC)
            });
        })  
}
window.addEventListener("load", loadEvent);