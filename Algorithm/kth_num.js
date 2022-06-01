const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

let a,k=[];

for(let i =0; i<commands.length;i++){
    a= array.slice(commands[i][0]-1,commands[i][1]);
    a= a.sort(function(a,b){return a-b})
    k[i]=a[commands[i][2]-1];
}

console.log(k);