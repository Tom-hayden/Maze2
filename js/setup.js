/*var $container = $("<div></div>").css("float","left");

for(var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++){
        $("<div></div>").addClass("box").appendTo($container);
        $("<div></div>").addClass("vert").appendTo($container);
    }
    $("<div></div>").css("clear", "both").appendTo($container);
    for (var j = 0; j < 4; j++){
        $("<div></div>").addClass("horiz").appendTo($container);
        $("<div></div>").addClass("sbox").appendTo($container);
    }
    $("<div></div>").css("clear", "both").appendTo($container);

}

$container.appendTo($("body"));

*/

var x=$('#setupScript').attr("width"), y=$('#setupScript').attr("height")
for (var j=0; j<y; j++){
//First vertical line
	var line=$('<div>', {id:"X"+i } ).css({clear:'both',width:'100%'}).appendTo('#base');

  for(var i=0;i<x;i++){
  	$('<div>',{id:"sbox"+i+"_"+j}).addClass("sbox").appendTo(line)
		$('<div>',{id:"horiz"+i+"_"+j}).addClass("horiz").appendTo(line)
  }
  $('<div>',{id:"sbox"+i+"_"+y}).addClass("sbox").appendTo(line)
  var line=$('<div>', {id:"X"+i } ).css({clear:'both',width:'100%'}).appendTo('#base');


	for(var i=0;i<x;i++){
  	$('<div>',{id:"vert"+i+"_"+j}).addClass("vert").appendTo(line)
		$('<div>',{id:"box"+i+"_"+j}).addClass("box").appendTo(line)

	}
  $('<div>',{id:"vert"+i+"_"+ y}).addClass("vert").appendTo(line)

}

  var line=$('<div>', {id:"X"+i } ).css({clear:'both',width:'100%'}).appendTo('#base');
  for(var i=0;i<x;i++){
  	$('<div>',{id:"sbox"+x+"_"+j}).addClass("sbox").appendTo(line)
		$('<div>',{id:"horiz"+x+"_"+j}).addClass("horiz").appendTo(line)
	}

  $('<div>').addClass("sbox").appendTo(line)

  //$('#horiz0_1').css("background-color","red")
