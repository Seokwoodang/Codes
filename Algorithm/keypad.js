const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = "right";

const loc=[{row:1,column:2},{row:4,column:1},{row:4,column:2},{row:4,column:3},{row:3,column:1},
                {row:3,column:2},{row:3,column:3},{row:2,column:1},{row:2,column:2},{row:2,column:3}]; // 각각의 번호를 객체로 선언
let L = {row:1,column:1}; //왼쪽 손가락의 위치
let R = {row:1,column:3}; // 오른쪽 손가락의 위치
let typing=[]; // 타이핑이 되고있는 상태

for(let i=0;i<numbers.length;i++){
    if(numbers[i]==0||numbers[i]==2||numbers[i]==5||numbers[i]==8){ //눌린 숫자가 가운데 줄의 경우
        if(Math.abs(L.row-loc[numbers[i]].row)+Math.abs(L.column-loc[numbers[i]].column)>Math.abs(R.row-loc[numbers[i]].row)+Math.abs(R.column-loc[numbers[i]].column)){ //위치를 고려했을 때 오른속이 더 가까울 경우
            R=loc[numbers[i]]; //오른손 손가락의 위치를 저장
            typing.push("R");
        }
        else if(Math.abs(L.row-loc[numbers[i]].row)+Math.abs(L.column-loc[numbers[i]].column)<Math.abs(R.row-loc[numbers[i]].row)+Math.abs(R.column-loc[numbers[i]].column)){ // 위치를 고려했을 때 왼손이 더 가까운 경우
            L=loc[numbers[i]]; // 왼손 손가락의 위치를 저장
            typing.push("L"); 
        }
        else{ // 오른손과 왼손의 거리가 키패드로부터 같을 경우
            if(hand=="right"){ // 오른손 잡이라면
                R=loc[numbers[i]];
                typing.push("R");
            }
            else{   // 왼손 잡이라면
                L=loc[numbers[i]];
                typing.push("L");
            }
        }
    }
    else if(numbers[i]==1||numbers[i]==4||numbers[i]==7){ // 눌린 숫자가 왼쪽 줄일 경우
        L=loc[numbers[i]];
        typing.push("L");
    }
    else if(numbers[i]==3||numbers[i]==6||numbers[i]==9){ // 눌린 숫자가 오른쪽 줄일 경우
        R=loc[numbers[i]];
        typing.push("R");
    }
    console.log(i +typing);
    console.log(L);
    console.log(R);
    
}
console.log(typing.join(''));   
