var toss = Math.floor((Math.random() * 2) + 1);

var heads = 0;

var tails = 0;

$("document").ready(function onStart() {
  $("#face").hide();
  $("#back").hide();
})

$("button").click(function coinToss() {
  if (toss == 1) {
    $("#double").hide();
    $("#face").show();
    $("#back").hide();
    heads++;
    $("#heads").text("Heads: " + heads);
    toss = Math.floor((Math.random() * 2) + 1);
    } else {
    $("#double").hide();
    $("#face").hide();
    $("#back").show();
    tails++;
    $("#tails").text("Tails: " + tails);
    toss = Math.floor((Math.random() * 2) + 1);
  }
})
