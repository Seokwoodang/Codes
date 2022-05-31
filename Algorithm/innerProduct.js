function solution(a, b) {
    return a.reduce((acc,curr,i)=>acc+=a[i]*b[i],0) 
}