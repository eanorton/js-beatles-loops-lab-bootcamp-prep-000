function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  const loudFacts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"];
    
    let i = 0
  while (i < facts.length) {
    loudFacts.push(`${facts[i]}!!!`)
    i++
  }
  return loudFacts
}

