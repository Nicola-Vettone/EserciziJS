let numberArr = [];

function createNumbers() {
    let numeri = document.querySelector("#numberList");
    for(let i=1; i<=76; i++) {
        let cellNumber = document.createElement('div');
        cellNumber.classList.add('celle');
        cellNumber.innerText = i;
        numeri.appendChild(cellNumber)
        
    }
}

let randomNum = document.querySelector("button")
        randomNum.addEventListener('click', numRandom )
            function numRandom() {
                for (let index = 1; index < 2; index++) {
                    let num1 = Math.round(Math.random() * 76); 
                    numberArr.push(num1)
                    console.log(numberArr)
                    let allCells = document.querySelectorAll('.celle');
                   allCells[num1 - 1].classList.add('estrai');
                }
                
      }
createNumbers();

