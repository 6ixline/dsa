var frequencySort = function(s) {
    let freq = {}
    s = s.split("")
    s.forEach(element => {
        freq[element] = freq[element]?freq[element]+1:1
    })
    console.log(freq);
    let arr = Object.keys(freq).map(element => [element, freq[element]])
    arr = arr.sort((a,b) => b[1]-a[1])
    let res = ""
    for(const i of arr) {
        res += i[0].repeat(i[1])
    }
    return res
};


console.log(frequencySort("tree"));

