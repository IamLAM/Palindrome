function palindrome(str) {
    //remove all non alphanumeric characters

    let codingRegex = /[^A-Za-z0-9]/g;
    str = str.replace(codingRegex, "");
    let i = 0;
    let j = str.length - 1;
    console.log(j);
    console.log(str);
    while (i < str.length) {
        if (str[i].toLowerCase() == str[j].toLowerCase()) {
            console.log("It is a coincidence");
        } else {
            console.log("It isn't a palindrome");
            return false;
        }
        console.log("str1: " + str[i] + "str2: " + str[j]);
        i++;
        j--;
    }
    return true;
    console.log(str);


}



palindrome("A man, a plan, a canal. Panama");
console.log("Ok");