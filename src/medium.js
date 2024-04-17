const game = document.getElementById("game")

const CARD_ELEMENTS = ["🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "🍀", "🍁", "🍃", "🍄", "🌲", "🌳", "🌴", "🌵", "🌾", "🌿", "🍀", "🍁", "🍃", "🍄"];

let shuffle = CARD_ELEMENTS.sort(() => (Math.random() > 0.5) ? 2 : -1);
for (let i = 0; i < CARD_ELEMENTS.length; i++) {
    let card = document.createElement("div")
    card.className = "card";
    card.innerHTML = shuffle[i]

    card.onclick = function () { 
        this.classList.add("open")
        setTimeout(function () {
            if (document.querySelectorAll(".open").length > 1) {
                if (document.querySelectorAll(".open")[0].innerHTML == document.querySelectorAll(".open")[1].innerHTML) {
                    document.querySelectorAll(".open")[0].classList.add("success")
                    document.querySelectorAll(".open")[1].classList.add("success")

                    document.querySelectorAll(".open")[1].classList.remove("open")
                    document.querySelectorAll(".open")[0].classList.remove("open")

                    if (document.querySelectorAll(".success").length == CARD_ELEMENTS.length) {
                        alert("Поздравляю! Ты выиграл(а)")
                        window.location.reload();
                    }
                }
                else {
                    document.querySelectorAll(".open")[1].classList.remove("open")
                    document.querySelectorAll(".open")[0].classList.remove("open")
                }
            }
        }, 500)
    }
    game.append(card)
} 
