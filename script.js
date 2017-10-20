var shipPos = [];
var ids = [];
$(document).ready(function(){
  var headLetter = ["A","B","C","D","E","F","G","H","I","J"];
  var torpedoes = 10;
  $("#torpedoCount").text("Torpedoes remaining: " + torpedoes)
  // var board = [[], [], [], [], [], [], [], [], [], []]
  const ship = 1;
  var hits = 0;
  var idCounter = 10;
  var letter
  var number
  //populates ships on board


 for (i = 0; i < 5; i++){

      letter = Math.floor(Math.random()*10);
       number = Math.floor(Math.random()*10);
       shipPos[i] = letter + "" + number;
  }


   console.log(shipPos);




   //this is the game board
    for (h=0; h<10; h++) {
        $("#table").append("<th id="+'h'+(headLetter[h])+h+">"+(headLetter[h])+"</th>");
    }


       for (var r=0; r<10; r++){
            $("#table").append("<tr id='" + r + "'></tr>");
            for (var d=0; d<10; d++){
                $("<td id="+r+d+"></td>").appendTo("#" + r);
                ids.push(""+r+d);
            }
        }


   //clicking fires torpedoes and adds to torpedo counter
    $("td").on("click", function() {
            if (hits <= 5 || torpedoes > 0) {
            var thisSq = $(this).attr("id");
            console.log(thisSq);
            if (shipPos.includes(thisSq)) {
                $(this).addClass("hit");
                //take this class and rename it then add below and reassign
                hits++;
                console.log("hits = " + hits);
            } else {
                $(this).addClass("miss");
            }
            if (torpedoes > 0) {
                torpedoes -= 1;
                $("#torpedoCount").text("Torpedoes remaining: " + torpedoes);
            if (torpedoes <= 0 && hits < 5) {

             $("#torpedoCount").text("You have run out of ammo, Game Over!");
              $("td").off("click");
              shipPos.forEach(function(element){
                $("#" + element).addClass("hit");
              })
            //   ids.forEach(function(element){
            //       if (shipPos.includes(element)) {
            //            $("td").attr("id")
            //       }
              //
            //       }






         } else if (hits >= 5) {
              $("#torpedoCount").text("You Win!");
              $("td").off("click");
          }
            }
        $(this).off("click");
          }
            });

});
