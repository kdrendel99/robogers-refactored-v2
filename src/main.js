import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import beepBoop from './beepBoop.js';
import './css/styles.css';

$(document).ready(function() {
  $("#robotRogers").submit(function(event) {
    const input = parseInt($("input#number").val());
    let outputString = beepBoop(input);
    event.preventDefault();
    $("#result").show();
    $('#result').text(outputString + "\n");
  });
})