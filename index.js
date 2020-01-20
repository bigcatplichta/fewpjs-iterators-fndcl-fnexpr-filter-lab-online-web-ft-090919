function findMatching(list, searchTerm) {
  let result = list.filter(match =>
  match.toLowerCase() === searchTerm.toLowerCase()
  )
  return result
}

function findMatching(a, b) {
    return a.filter(possibleMatch => 
        possibleMatch.toLowerCase() === b.toLowerCase()
     )
}