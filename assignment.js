// feet to mile 
function feetToMile(feet){
    if(feet<0){
        return 'wrong input'
    }
    else{
        var mile=feet/5280;
        var mile=mile.toFixed(2);
        return mile;

    }
}
var result=feetToMile(-67563);
console.log(result);


// wood calculator
function woodCalculator(chair,table,bed)
{
    if(chair<0 || table<0 || bed<0){
        return "this  value can't be negative,try again"
    }
   else 
   { chairCalculation=chair*1;
    tableCalculation=table*3;
    bedCalaculation=bed*5;
    total=chairCalculation+tableCalculation+bedCalaculation;
    return total; } 
}
var result=woodCalculator(-2,13,17);
console.log("Total wood:",result);

// Brick Calculator
function brickCalculator(floor){
    if(floor<=0){
        return "wrong Input. This value can't be negative or zero"
    }
    else if (floor<=10){
      var    totalBrick=floor*15*1000;

    }
    else if(floor>10 && floor<=20)
    {
        floor=floor-10;
        var first=10*15*1000;
        var second=floor*12*1000;
        var totalBrick=first+second;
    }
    else {
        floor=floor-20;
        var first=10*15*1000;
        var second=10*12*1000;
        var third=floor*10*1000;
        var totalBrick=first+second+third;

    }
    return totalBrick;

}
var bricknumber=brickCalculator(0);
console.log("Total brick Number:" ,bricknumber);

// tiny friend
function tinyFriend(friend){
    var minimumLength=friend[0].length;
    var minimumName=friend[0];
    for (var i=1;i<friend.length;i++){
        var nameLength=friend[i].length;
        if(minimumLength> nameLength){
            minimumLength=nameLength;

            minimumName=friend[i];
            
            
        }
    }
    return  minimumName;

}

var v=tinyFriend(["tani","babul","sa","salah","akib","kabul","ali","babula"]);

console.log(v)


