function findMatching(list, search) {
  
}

function findMatching(a, b) {
    return a.filter(possibleMatch => 
        possibleMatch.toLowerCase() === b.toLowerCase()
     )
}