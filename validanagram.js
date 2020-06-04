//Objective is to tell whether two strings (both not capitalized) are
//anagrams of each other

let s = 'anagram'
let t = 'nagaram'


//O(nlogn) solution that sorts both words of length n and sees if the two strings match

if (s.length !== t.length) {
    return false
}

let sorted1 = s.split('').sort((a,b) => {
    return a - b
}).join()

let sorted2 = s.split('').sort((a,b) => {
    return a - b
}).join()

return sorted1 === sorted2


//O(n) solution that hashes the frequencies of the characters in the first string
//then decrements the frequencies based on the characters in t
//We finally check whether all of the frequencies in the hash table are 0

if (s.length !== t.length) {
    return false 
}

let map = {}

for (let i = 0; i < s.length; i++) {
    if (map[s.charAt(i)] === undefined) {
        map[s.charAt(i)] = 1
    } else {
        map[s.charAt(i)]++
    }
}

for (let i = 0; i < t.length; i++) {
    if (map[t.charAt(i)]) {
        map[t.charAt(i)]--
    }
}

for (let value of Object.values(map)) {
    if (value !== 0) {
        return false
    }
}

return true