let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const lengthEight = document.getElementById("length-8")
const lengthSixteen = document.getElementById("length-16")
const lengthTwentyFour = document.getElementById("length-24")

const everythingOption = document.getElementById("everything")
const numbersOption = document.getElementById("numbers")
const specialOption = document.getElementById("special")

let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two");
let passLength = 16;

function getRandomIndex() {
   return Math.floor(Math.random() * characters.length)
}

function generatePasswords() {
    passOne.textContent = "";
    passTwo.textContent = "";

    for (let i = 0; i < passLength; i++ ) {
        let randomIndexOne = getRandomIndex();
        let randomIndexTwo = getRandomIndex();

        passOne.textContent += characters[randomIndexOne];
        passTwo.textContent += characters[randomIndexTwo];
    }
}

function setLength(value) {
    passLength = value;
    if (passLength === 8) {
        lengthEight.classList.add("clicked")
        lengthSixteen.classList.remove("clicked")
        lengthTwentyFour.classList.remove("clicked")
    } else if (passLength === 16) {
        lengthSixteen.classList.add("clicked")
        lengthEight.classList.remove("clicked")
        lengthTwentyFour.classList.remove("clicked")
    } else if (passLength === 24) {
        lengthTwentyFour.classList.add("clicked")
        lengthSixteen.classList.remove("clicked")
        lengthEight.classList.remove("clicked")
    }
}

function setCharacterOption(value) {
    let optionSelection = value
    if (optionSelection === everything) {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

        everythingOption.classList.add("clicked")
        numbersOption.classList.remove("clicked")
        specialOption.classList.remove("clicked")
    } else if (optionSelection === numbers) {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        numbersOption.classList.add("clicked")
        everythingOption.classList.remove("clicked")
        specialOption.classList.remove("clicked")
    } else if (optionSelection === special) {
        characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

        specialOption.classList.add("clicked")
        numbersOption.classList.remove("clicked")
        everythingOption.classList.remove("clicked")
    }
}

function copyPassword(string) {
    navigator.clipboard.writeText(string)
}
