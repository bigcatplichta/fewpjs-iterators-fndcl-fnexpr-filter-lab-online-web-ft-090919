function findMatching(list, searchTerm) {
  let result = list.filter(match =>
  // convert searchTerm and match to lower case
  match.toLowerCase() === searchTerm.toLowerCase()
  )
  return result
}

function fuzzyMatch(list, searchTerm) {
  return drivers.filter(match => match.toLowerCase().indexOf(toMatch.toLowerCase()) === 0)
}