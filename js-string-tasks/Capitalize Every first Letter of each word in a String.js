// Capitalize Every first Letter of each word in a String
let str = 'sakibul islam';
let word = str.split(" ");
for (let i = 0; i < word.length; i++) {
    word[i] = word[i][0].toLocaleUpperCase() + word[i].slice(1); //slice(1) mane 1 theke sru kore sesh letter prjnto oi word r 
}
let capitalized = word.join(" ");
console.log(capitalized);