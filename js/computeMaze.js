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
    //Changes colour on grid to reflect growth in path.

    //x coord same ie. vertical

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
var x_start = 0, y_start = 0;
$('#box'+ x_start + '_' + y_start).css("background-color","white")
arr[x_start][y_start] = 0;




var path = [[x_start,y_start]];

while(true){
    if (path.length == 0) {
        break;
    }

    var available = [];
    //left
    if (path[path.length - 1][0] != 0 && arr[path[path.length-1][0] - 1][path[path.length-1][1]] == 1){
        available.push([path[path.length-1][0] - 1,path[path.length-1][1]]);
    }
    //right
    if (path[path.length - 1][0] != mWidth - 1 && arr[path[path.length-1][0] + 1][path[path.length-1][1]] == 1){
        available.push([path[path.length-1][0] + 1,path[path.length-1][1]]);
    }
    if (path[path.length - 1][1] != mHeight - 1 && arr[path[path.length-1][0]][path[path.length-1][1] + 1 ] == 1){
        available.push([path[path.length-1][0],path[path.length-1][1] + 1]);
    }
    if (path[path.length - 1][1] != 0 && arr[path[path.length-1][0]][path[path.length-1][1] - 1] == 1){
        available.push([path[path.length-1][0],path[path.length-1][1] - 1]);
    }
    if (available.length == 0){
        path.pop();
    }
    else {
        var direction = Math.floor(Math.random() * available.length)
        path.push(available[direction]);
        arr[path[path.length - 1][0]][path[path.length - 1][1]] = 0;
        addPath(path[path.length - 2],path[path.length - 1]);

    }



}




/*
for (var i = 0; i != arr.length; ++i){
    for (var j = 0; j != arr[0].length; ++j){
        console.log(arr[i][j] + ' ' + j);
    }
    console.log('\n');
}
console.log(arr.length + "  " + arr[0].length);
*/
