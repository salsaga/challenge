
//parseSentence is the main function
function parseSentence(sentence){
    const sentenceArray = sentence.split('');
  
    //this array will store separeted alphabetic and non alphabetic strings
    const arrayOfStrings = sentenceArray.reduce((currentArray, char)=>{
      const lastString = currentArray.pop();
      //note this case will only happen in the first step
      if (!lastString.length){
        return [char];
      } 
      
      if (isAlphabetic(lastString[0]) === isAlphabetic(char)){
         return [...currentArray, lastString + char];   
      } else {
         return [...currentArray, lastString, char]                                    
      }                                     
    },['']);
    
    const parsedArrayOfStrings = arrayOfStrings.map((string)=>{
      if (string.length && isAlphabetic(string[0])){
        return parseWord(string);
      } else{
        return string;
      }
    });
    
    
    return parsedArrayOfStrings.join('');
  }
  
  function isAlphabetic(character){
    return character.length === 1 && (/[a-zA-Z]/).test(character);
  }
  
  function parseWord(word){
    //I take the max of 0 and word.length - 2 to consider posibility of words of 1 single letter
    //I assume that, in such a case, the fist and last letter of that word is the same, and we still have 0 letters in between
    return word.charAt(0) + Math.max(0, word.length-2) + word.charAt(word.length - 1); 
  }
  
  //quick tests
  console.log(parseWord('smooth'));
  console.log(parseWord('s'));
  
  console.log(isAlphabetic('a0'));
  console.log(isAlphabetic('T'));
  console.log(isAlphabetic('&'));
  
  console.log(parseSentence('lorem ipsum'));