const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";

function encrypt(text, key) {
    let encryptWord = "";
    for(let i = 0; i < text.length; i++) {
        encryptWord += alphabet.charAt((alphabet.indexOf(text.charAt(i)) + alphabet.indexOf(key.charAt(i % key.length))) % alphabet.length);
    }
    
    return encryptWord;
}

function decrypt(text, key) {
    let decryptWord = "";
    for(let i = 0; i < text.length; i++) {
        decryptWord += alphabet.charAt(((alphabet.indexOf(text.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(i % key.length))) % alphabet.length);
    }
    
    return decryptWord;
}

function displayResult(text) {
    document.getElementById("text-result").textContent = text;
}

document.getElementById("button-encrypt").addEventListener("click", function() {
    let text = document.getElementById("text-input").value;
    let key = document.getElementById("text-key").value;
    
    displayResult("Encrypted text: " + encrypt(text, key));
});

document.getElementById("button-decrypt").addEventListener("click", function() {
    let text = document.getElementById("text-input").value;
    let key = document.getElementById("text-key").value;
    
    displayResult("Encrypted text: " + decrypt(text, key));
});