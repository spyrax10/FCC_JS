
function encrypt(text) {
    var result = "";
    var shift = 13;
   //loop through each caharacter in the text
        for (var i = 0; i < text.length; i++) {
              
             //get the character code of each letter
            var c = text.charCodeAt(i);
 
            // handle uppercase letters
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65); 
 
            // handle lowercase letters
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);
 
            // its not a letter, let it through
            }else {
                result += text.charAt(i);
            }
        }
    return result;
}
 
function rot13(text){
    var result = "";
    var shift = 13;
    shift = (26 - shift) % 26;
    result = encrypt(text,shift);
    return result;
}   

rot13("SERR PBQR PNZC");

//hello
