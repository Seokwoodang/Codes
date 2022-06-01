function solution(participant, completion) {
    var k = 0;
    participant.sort()
    completion.sort()
    var n = 0;
    for(var i =0; i<participant.length;i++){
        if(participant[i]!=completion[i]){
            return participant[i];
        }
            
    }
}