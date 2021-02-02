const string = "Скоро наступит весна!";
const vovels = ["о", "е", "а", "у", "и"]
const getVowels = stringToFilter => {
  let extractedVowels = "";

for (let i = 0; i < stringToFilter.length; i++){
  const currentLetter = stringToFilter[i];

 if (vovels.includes(currentLetter)) {
   extractedVowels += currentLetter;
 }
}
 

return extractedVowels;
}

console.log(getVowels(string));