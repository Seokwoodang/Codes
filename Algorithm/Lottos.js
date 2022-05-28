    const lottos = [44, 1, 0, 0, 31, 25];
    const win_nums = [31, 10, 45, 1, 5, 19];
    let k=lottos;
    let matched = [];
    let unknown=0; //0개수
    let possible=[];
    let min,max=0;
    matched= k.filter(x=>win_nums.includes(x)) //맞은배열
    for(let i=0;i<6;i++){
        if(lottos[i]==0)
            {
                unknown++;
            }    
        }
        min = 6-matched.length+1;
        max = 6-matched.length+1-unknown;
        if(unknown==6){
            min = 6;
            max=1;
        }
        if(matched.length==0&&unknown==0){
            min=6;
            max=6;
        }
        possible[1]=min;
        possible[0]=max;
    console.log(possible);