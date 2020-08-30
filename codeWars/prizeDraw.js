//Link to Code Challenge:
//https://www.codewars.com/kata/5616868c81a0f281e500005c/train/javascript

function rank(st, we, n) {
  // first param: string list of names, 
  // second param: array of numbers, 
  // third param: rank

  // To get the value for each participant,
     // Add the value of the first letter of the first name 
       // (need to create object to store values a-z)
     // Add the length of the name
    // Add the corresponding weight from the next array.      
  // return the firstname of the participant whose rank n are numbered from 1.

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

  let newParticipantObjectArray = []
  let participantObject = {}
  //Go through participant array, add participant name and their value with calculation.
  for( let i = 0; i < participantArray.length; i++) {
      let p = participantArray[i]
      console.log(p)
      let som = 0
      for (let i = 0; i < p.length; i++) {
        let letter = p[i].toLowerCase()
        let value = alphabetCalculator[letter]
        som += value
      }
      let r = we[i]
      participantObject[p] = (som + p.length) * r
      newParticipantObjectArray.push(newParticipantObjectArray)
  }



  // console.log(newParticipantObjectArray)
  let sorted = Object.keys(participantObject).sort((a, b) => { 
    console.log(participantObject[b] - participantObject[a])
    if (participantObject[b] - participantObject[a] == 0) {
      console.log(participantObject[a])
    } else {
      return participantObject[b] - participantObject[a]
    }
    
  })
  console.log(sorted)

  return sorted[n-1]
  
    
}


