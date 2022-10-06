// 4. Word Wars
// Write a program that calculates the ASCII value of a few words, as the word with the highest value is the winner.
// The value of a word is calculated when you sum the ASCII values of all the letters of which it consists of.
// From the console read words until the command "STOP", then print:
// ● “Winner is {winner word} – {value of the word}!”

// let word = "Hello world";
// console.log(string.charCodeAt(6))

// String str = "ABC";
// for(int i=0; i<str.length(); i++)
// {
//   System.out.println(str.charAt(i));
// }
// //OUTPUT
// //A
// //B
// //C

// String str = "ABC";
// for(int i=0; i<str.length(); i++)
// {
//   int asciiValue = str.charAt(i);
//   System.out.println(str.charAt(i) + "=" + asciiValue);
// }
//OUTPUT
//A=65
//B=66
//C=67
// let text = "Hello World!";
// let length = text.length;

function main(array) {
    let word = array.shift()
    let sum = 0
    let wordSum = 0
    let maxSum = 0
    while (word != "STOP") {
        // word = array.shift()
        let length = word.length
        for (let i = 0; i < length; i++) {
            sum += word.charCodeAt(i)
            if (i == length - 1 ) {
                wordSum = sum
                if (wordSum > maxSum) {
                    maxSum = wordSum
                    maxWord = word
                }
                sum = 0
                word = array.shift()
            }
        }
    }
    console.log(`Winner is ${maxWord} - ${maxSum}!`)
}
// main(["Dog", "Destination", "STOP"])
main(['Tokyo','Denver','Nairobi', 'Berlin', 'Rio', 'Helsinki', 'Oslo', 'STOP'])
