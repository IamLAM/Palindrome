function palindrome(str) {
    //remove all non alphanumeric characters
    //lowercase or upper case



    /* let s = str.toLowerCase();
    rule = /[^a-z0-9]+/gi;
    let sr = s.replace(rule, "");
  */
    let v = str.split("").reverse().join("");
    if (v == str) {
        return true;
    } else {
        return false;
    }
    console.log(str);
    console.log(v);

}



palindrome("eye");