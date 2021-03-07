import{ beepBoop } from './beepBoop.js'

$(document).ready(function() {
  $("#robotRogers").submit(function(event) {
    const input = parseInt($("input#number").val());
    let outputString = beepBoop(input);
    event.preventDefault();
    $("#result").show();
    $('#result').text(outputString + "\n");
  });
})