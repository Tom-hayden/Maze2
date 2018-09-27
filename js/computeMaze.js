function initArray(x,y) {
    var arrColumn = [];
    var arr = [];
    for(var i = 0; i < y; i++) {
        arrColumn.push(1);
    }
    for(var i = 0; i < x; i++) {
        arr.push(arrColumn.slice());
    }
    return arr;
}

function addPath(start,end){
    //x coord same ie. vertical
    console.log("start: " + start[0] + ' ' + start[1] + ' End: ' + end[0] + ' ' + end[1]);

    if (start[0] == end[0]){
        //up
        if (start[1] > end[1]){
          $('#horiz'+ end[0] + '_' + start[1]).css("background-color","white")
        }
        //down
        else {
          $('#horiz'+ end[0] + '_' + end[1]).css("background-color","white")
        }
    }
    //horizontal
    else{
        //left
        if (start[0] > end[0]){
            $('#vert'+ start[0] + '_' + start[1]).css("background-color","white")
        }
        else {
            $('#vert'+ end[0] + '_' + start[1]).css("background-color","white")
        }
    }

    $('#box'+ end[0] + '_' + end[1]).css("background-color","white")

}

var mHeight=$('#computeMazeScript').attr("height") ,mWidth=$('#setupScript').attr("width")
var arr = initArray(mWidth,mHeight);

//starting point.
var x_start = 4, y_start = 4;
$('#box'+ x_start + '_' + y_start).css("background-color","white")
arr[x_start][y_start] = 0;




var path = [[x_start,y_start]];
path.push([5,4]);
addPath(path[0],path[1])




/*
for (var i = 0; i != arr.length; ++i){
    for (var j = 0; j != arr[0].length; ++j){
        console.log(arr[i][j] + ' ' + j);
    }
    console.log('\n');
}
console.log(arr.length + "  " + arr[0].length);
*/
