var count = 0 ; 

var weeklyTotal;
var totalKm;
var kmArray = new Array[7];
var boolArr = new Array[7];


function calculateTotal(boolArr,kmArray){
    var result
    for( i = 0 ; i < 7 ; i++){
        if(boolArr[i]===true){
            result += kmArray[i]
        }
    }
    return result
}
