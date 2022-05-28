const s = "one4oneoneone";
let repair=s;

while(repair.includes("one")){repair= repair.replace("one","1");}
while(repair.includes("two")){repair= repair.replace("two","2");}
while(repair.includes("three")){repair= repair.replace("three","3");}
while(repair.includes("four")){repair= repair.replace("four","4");}
while(repair.includes("five")){repair= repair.replace("five","5");}
while(repair.includes("six")){repair= repair.replace("six","6");}
while(repair.includes("seven")){repair= repair.replace("seven","7");}
while(repair.includes("eight")){repair= repair.replace("eight","8");}
while(repair.includes("nine")){repair= repair.replace("nine","9");}
while(repair.includes("zero")){repair= repair.replace("zero","0");}
Number(repair);
console.log(repair)