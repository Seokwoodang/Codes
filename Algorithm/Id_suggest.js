    const new_id = "........."
    let suggest=""
    let count =0;
    regex1=/[a-z0-9\.\-\_]/;
    regex2=/\S/;
    suggest = new_id.toLowerCase(); //소문자 변경
    suggest = suggest.split(''); //배열로 변경
    suggest = suggest.filter(x => regex1.test(x)); //정규식을 이용해 특수문자제거
    suggest = suggest.join(''); // 문자열 변경
    suggest = suggest.replace(/\.{2,}/g,'.');  //..을 . 으로 변경
    suggest = suggest.split(''); // 배열로 변경
    while(suggest[0]=='.'){ 
        suggest.shift();  //앞의 . 빼주기
    }
    while(suggest[suggest.length-1]=='.'){
        suggest.pop();
    }
    suggest = suggest.join(''); // 문자열로 변경
    if(suggest==""){
        suggest = 'a';
    }
    if(suggest.length>=16){
        suggest=suggest.split('');
     //길이 15이하로 줄이기
        let a =suggest.length;
        for(let i=0;i<a-15;i++)
        {   
            suggest.pop();
            
        }
        if(suggest[suggest.length-1]=='.'){
            suggest.pop();
        }
    }
    else{
        suggest = suggest.split('');
    }
    while(suggest.length<3){
        suggest.push(suggest[suggest.length-1])
    }
    suggest=suggest.join('');
    console.log(suggest);