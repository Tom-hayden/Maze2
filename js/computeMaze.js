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


function setup(x,y){
    //sets up divs.
    for (var j=0; j<y; j++){
    //border lines
      var line=$('<div>', {id:"Line border :"+j } ).css({clear:'both',width:'100%'}).appendTo("#base");
      for(var i=0;i<x;i++){
      	$('<div>',{id:"sbox"+i+"_"+j}).addClass("sbox").appendTo(line)
    	$('<div>',{id:"horiz"+i+"_"+j}).addClass("horiz").appendTo(line)
      }
      //right most box
      $('<div>',{id:"sbox"+i+"_"+y}).addClass("sbox").appendTo(line)

      //main lines
      var line=$('<div>', {id:"Line main:"+j } ).css({clear:'both',width:'100%'}).appendTo('#base');
    	for(var i=0;i<x;i++){
      	$('<div>',{id:"vert"+i+"_"+j}).addClass("vert").appendTo(line)
    		$('<div>',{id:"box"+i+"_"+j}).addClass("box").appendTo(line)

    	}
      $('<div>',{id:"vert"+i+"_"+ y}).addClass("vert").appendTo(line)

    }

      //final border line.
      var line=$('<div>', {id:"X"+i } ).css({clear:'both',width:'100%'}).appendTo('#base');
      for(var i=0;i<x;i++){
      	$('<div>',{id:"sbox"+x+"_"+j}).addClass("sbox").appendTo(line)
    		$('<div>',{id:"horiz"+x+"_"+j}).addClass("horiz").appendTo(line)
    	}

      $('<div>').addClass("sbox").appendTo(line)
 }



var mHeight=$('#computeMazeScript').attr("height") ,mWidth=$('#computeMazeScript').attr("width")

setup(mWidth,mHeight);
var arr = initArray(mWidth,mHeight);

//starting point.
var x_start = 3, y_start = 4;
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
