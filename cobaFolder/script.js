const inputAngka = document.querySelector('.inputNomor')

const updateScreen = (nomor) => {
    inputAngka.value = nomor
}

const numbers = document.querySelectorAll(".nomor")

let prevNumber = ""
let calculationOperator = ""
let currentNumber = "0"

numbers.forEach((nomor) => {
    nomor.addEventListener("click", (event) => {
        console.log("number is pressed")
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const inputNumber = (nomor) => { //berhasil
    if (currentNumber === "0"){
        currentNumber = nomor
    } else {
        currentNumber += nomor
    }
}

const buttonC = document.querySelector(".C") //masih gagal setelahnya pakai operator/sama dengan

buttonC.addEventListener('click',() => {
    if(currentNumber.length > 1){
        currentNumber = currentNumber.toString().slice(0, -1)
    } else if (currentNumber.length === 1){
        currentNumber = "0"
    }
    updateScreen(currentNumber);
})

const buttonTanda = document.querySelector(".tanda")

buttonTanda.addEventListener('click',() => { //berhasil tapi kalau -0, 0 nya bakal nambah angka
    if(currentNumber!=0){
        currentNumber = currentNumber*-1;
        updateScreen(currentNumber);
    }
 })

const ops = document.querySelectorAll(".op")

ops.forEach((op) => {
    op.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ""
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    console.log(currentNumber)
    calculationOperator = ""
}

const equalSign = document.querySelector('.equal')

equalSign.addEventListener('click',() => {
    calculate()
    updateScreen(currentNumber)
    console.log(currentNumber)
})

const clearAll = () => {
    prevNumber = ""
    calculationOperator = ""
    currentNumber = "0"
}

const clearBtn = document.querySelector('.AC') //berhasil

clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.desimal')

decimal.addEventListener('click',(event)=>{ //belum berhasil
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    console.log(currentNumber)
    currentNumber += dot
}

const inputOperator = (op) => {
    if(calculationOperator === ""){
        prevNumber = currentNumber
    }
    calculationOperator = op
    currentNumber = "0"
}