/* Creating the character counter! */

var charactersLeft = 240;

$("#tweetArea").keyup(function(e){
    var characters = $("#tweetArea").val().length;
    charactersLeft = (240 - (characters));
    $("#characterCount").replaceWith("<label id=" + 'characterCount' + ">Character(s) Left: " + charactersLeft + "</label>");
});