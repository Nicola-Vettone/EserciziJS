
let bottone = document.getElementById("conferma")
bottone.onclick = function inserisci() {
        let input = document.getElementById("inputUtente").value
        let lista = document.createElement("li")
        let button = document.createElement("button")
        lista.innerHTML = input
        button.innerText = "Elimina"
        let lista1 = document.querySelector('div ul').appendChild(lista)
        lista.appendChild(button)
        lista1.onclick = function sbarrato() {
                lista.style.textDecoration = "line-through red"   
        }
        button.onclick = function () {
                button.parentNode.remove()
        }
        let cancella = document.getElementById("inputUtente").value = ""
        
                
        }
        
        
        