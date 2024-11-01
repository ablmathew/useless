document.getElementById("skillForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const offer = document.getElementById("offer").value;
    const request = document.getElementById("request").value;

    if (offer && request) {
        addSwap(offer, request);
        document.getElementById("skillForm").reset();
    }
});

function addSwap(offer, request) {
    const swapList = document.getElementById("swapList");

    const li = document.createElement("li");
    li.textContent = Offering: ${offer} | Looking for: ${request};

    swapList.appendChild(li);
}