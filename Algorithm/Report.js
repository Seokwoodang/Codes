/*
    let id_list = ["muzi", "frodo", "apeach", "neo"]
    let report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
    let k = 2
    let reported =[];
    let reporting=[];
    let temp=[];
    let temp2=[];

    for(let i=0;i<id_list.length;i++){
        reported[i]=0;
    }

    for(let i =0;i<report.length;i++){   
        temp = report[i].split(' ')
        reported[id_list.indexOf(temp[1])]++; // id 당 신고받은 횟수 저장 
        id_list.indexOf(temp) 
        temp2.push(id_list.indexOf(temp[1])) //temp[1] = 신고 받은사람
        console.log(temp2)
        if(id_list.indexOf(temp[0])==1){
        
        }
    }

    console.log('reporting',reporting[0])
    console.log('reported',reported)
    for(let i = 0;i<id_list.length;i++){
        if(reported[i]>=k){

        }
    }
*/

