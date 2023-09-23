function fizzBuzz() {
    var number = parseInt(document.getElementById("numberInput").value);
    var result = document.getElementById("result");
    
    // Tambahkan penanganan untuk angka 0
    if (number === 0) {
        result.textContent = "Invalid Input!";
        result.style.color = "red";
    }
    // Check kelipatan 3 dan 5
    else if (number % 3 === 0 && number % 5 === 0) {
        result.textContent = "FizzBuzz!";
        result.style.color = "";
    }
    // Check kelipatan 3
    else if (number % 3 === 0) {
        result.textContent = "Fizz!";
        result.style.color = "";
    }
    // Check kelipatan 5
    else if (number % 5 === 0) {
        result.textContent = "Buzz!";
        result.style.color = "";
    }
    // Kasus lainnya
    else {
        result.textContent = number;
    }
}