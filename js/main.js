/* Creating the character counter! */

var charactersLeft = 140;

$("#tweetArea").keyup(function(e){
    var characters = $("#tweetArea").val().length;
    charactersLeft = (140 - (characters));
    $("#characterCount").replaceWith("<label id=" + 'characterCount' + ">Character(s) Left: " + charactersLeft + "</label>");
});