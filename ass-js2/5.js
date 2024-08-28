function countVowels(str) {
 // let vowels = 'aeiouAEIOU';
  let c=0;
  for(let i=0;i<str.length;i++){
    if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U'){
      c++;
    }
  }
  return c;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3
