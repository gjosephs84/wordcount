function cleanArray() {
    // Get the text from the DOM
    let wordString = document.getElementById("text-input").value.toLowerCase();
    // Split the text into an array at the spaces
    let dirtyArray = wordString.split(" ");
    // Initialize a new array to hold the cleaned-up words
    let clean = [];
    // Remove all punctuation and add words to the new clean array
    dirtyArray.forEach(element => {
        let cleanWord = element.replace(",", "").replace("'","").replace(".","").replace("?","").replace("!","");
        clean.push(cleanWord);
    });
    // Return the array of cleaned words
    return clean;
}

function wordFrequency() {
    // Callback the cleanArray function to get a clean array of words
    let wordArray = cleanArray();
    // Initialize the words object
    let words = {};
    // Create a new array holding only one instance of each word by use Set
    // and the spread operator
    let wordSet = [...new Set(wordArray)];
    // Count instances of each word in wordArray and create key-value pairs
    // in the words object
    wordSet.forEach((uniqueWord) => {
        // Iterate through each word in wordSet, setting it to the key in the
        // words object. Then set the value to the number of occurrences in
        // wordArray using filter and .length
        words[uniqueWord] = wordArray.filter((w) => w === uniqueWord).length;
    });
    // Create an array to hold the key-value pairs from the object in order to sort
    let sortableWords = [];
    for (let word in words) {
        sortableWords.push([word, words[word]]);
    };
    // Sort the words by most frequently occurring to least frequently occurring
    let sortedWords = sortableWords.sort((a, b) => a[1] - b[1]).reverse();
    console.log(sortedWords);
}