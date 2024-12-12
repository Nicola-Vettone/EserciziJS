let numberArr = [];
let utenteArr = [];

function createNumbers(n) {
    let numeri = document.querySelector("#numberList");
    for(let i=1; i<=n; i++) {
        let cellNumber = document.createElement('div');
        cellNumber.classList.add('celle');
        cellNumber.innerText = i;
        numeri.appendChild(cellNumber)
        
    }
}

let randomNum = document.querySelector("button")
        randomNum.addEventListener('click', numRandom )

            function numRandom() {
                    let num1 = Math.round(Math.random() * 76)

                    if (!numberArr.includes(num1) && num1 !== 0){ 
                        numberArr.push(num1)

                    let allCells = document.querySelectorAll('.celle');

                    allCells[num1 - 1].classList.add('estrai');

                    console.dir(numberArr)

                    }else {
                        numRandom()   
                    }
                    }             
                    //randomNum.addEventListener('click', createCartella )
                    function createCartella(n) {
                        let numeriRandom = document.querySelector("#tabellaUtente");
                        for(let i=1; i<=15; i++) {
                            let num2 = Math.round(Math.random() * 76)
                            let cellUser = document.createElement('div');
                            cellUser.classList.add('celle');
                            cellUser.innerText = num2;

                            numeriRandom.appendChild(cellUser)

                            let allCells = document.querySelectorAll('.celle');
                            
                            
                        }}
                            
        
                            //
        
                            //console.log(num2)
        
                            
                            
createNumbers(76);
createCartella(76)

