function palindrome(str) {

    let s = str.toLowerCase();
    rule = /[^a-z0-9]+/gi;
    let sr = s.replace(rule, "");
    console.log(s);

}



console.log(palindrome("213 12321 Eye****"));