exports.filter_frequency = async function(string, cutOff) {
    let cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()|+]/g, "");
        cleanString = cleanString.replace(/  +/g, ' ').toLowerCase().replace(/\s+(a|e|i|o|u|de|da|do|das|dos|em|and|or|to|for|of|with|in|the|is)\s+/g,' ');
    let words = cleanString.split(' '),
        frequencies = {},
        word, frequency, i;

    for (i = 0; i < words.length; i++) {
        word = words[i];
        frequencies[word] = frequencies[word] || 0;
        frequencies[word]++;
    }

    words = Object.keys(frequencies);

    return words.sort(function (a, b) {
        return frequencies[b] - frequencies[a];
    }).slice(0, cutOff).toString();
}