function leapYear(Year){
    if(Year%4 == 0 ){
        return `${Year}はうるう年です`;
    }else{
        return `${Year}はうるう年ではありません`;
    }
}
console.log(leapYear(2016));