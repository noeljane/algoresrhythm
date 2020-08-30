//Link to Code Challenge:
//https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

function rank(st, we, n) {
  // Error Checks: 
  if (!st) {
    return "No participants"
  }

  participantArray = st.split(",")
  if (n > participantArray.length) {
    return "Not enough participants"
  }

  charCode = 97
  let alphabetCalculator = {}
  
  //create alphabet Calculator from ASCII codes
  for (let i = 0; i < 26; i++) {
    let chr = String.fromCharCode(charCode)
    alphabetCalculator[chr] = i + 1
    charCode++
  }

  //Go through participant array, add participant name and their value with calculation.
  let newParticipantObjectArray = []
  for( let i = 0; i < participantArray.length; i++) {
      let p = participantArray[i]
      let som = 0
      for (let i = 0; i < p.length; i++) {
        let letter = p[i].toLowerCase()
        let value = alphabetCalculator[letter]
        som += value
      }
      let r = we[i]
      let object = {}
      object[p] = (som + p.length) * r
      newParticipantObjectArray.push(object)
  }

  //Sort the participants descending by winning numbers/alphabetize
  let sorted = newParticipantObjectArray.sort((a,b) => {
    if (Object.values(b)[0] - Object.values(a)[0] === 0) {
      if (Object.keys(a)[0] < Object.keys(b)[0]) {
        return -1
      } else {
        return 1
      }
    }
    return Object.values(b)[0] - Object.values(a)[0]
  })
  //Return the appropriate rank
  return Object.keys(sorted[n-1])[0]

}


console.log(rank("Natalie,Andrew,Michael,Robert,Lily,Emily,Logan,Ava,Sophia,Madison,Mason,Joshua,David", [3,6,1,4,3,3,1,2,4,1,5,5,5], 7)) //should return Emily 