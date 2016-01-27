$(document).ready(function(){


	var direction	= "up"
	var count = 0
	setInterval(function(){
		count = count + 1;
		if (count % 100 == 0 ){
		console.log( "total iterations " + count)
	}
	// determine where ant is pointing
	//ant starts on a white square aims right -->
		var next_square_down 	= $("#ant").index() + 100;
		var next_square_up   	= $("#ant").index() - 100;
		var next_square_right = $("#ant").index() + 1;
		var next_square_left  = $("#ant").index() - 1;
		if( $("#ant").hasClass('visited')  ){

			//colored squares
			$("#ant").removeClass('visited')
			$("div#ant").removeAttr("id")
			if( direction === "up"){
				//console.log("left here")
				$($(".cells")[next_square_left]).attr('id',"ant"); // if coming up, move into square left
				direction = "left";

				}else if( direction === "right"){
					//console.log("down here")
					$($(".cells")[next_square_up]).attr('id',"ant");  // if coming right, move into square down
					direction = "up";

				}else if( direction === "down"){
					//console.log("right here")
					$($(".cells")[next_square_right]).attr('id',"ant"); // if coming down, move into square right
					direction = "right";

				}else{
					//console.log("up here")
					$($(".cells")[next_square_down]).attr('id',"ant");  // if coming from left, move into square up
					direction = "down";
			}

		}else{
			$("#ant").addClass("visited");
			$("div#ant").removeAttr("id");
			if( direction === "up"){
				//console.log("right blank")
				$($(".cells")[next_square_right]).attr('id',"ant"); // if coming from up, move into square right
				direction = "right";

			}else if( direction === "right"){
				//console.log("up blank")
				$($(".cells")[next_square_down]).attr('id',"ant"); // if coming from right, move into square up
				direction = "down";

			}else if( direction === "down"){
				//console.log("left blank")
				$($(".cells")[next_square_left]).attr('id',"ant"); // if coming from down, move into square left
				direction = "left";

			}else if (direction === "left"){
				//console.log("down blank")
				$($(".cells")[next_square_up]).attr('id',"ant"); // if coming from left, move into square down
				direction = "up";
			}
		}
	}, .1)





// and turn right and move into next square
// leaving previous square black

// if it lands in a white square, turn right leave previous square black

// if it lands in a black square turn left move and leave previous square white




})