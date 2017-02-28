/* Creating the character counter! */

var charactersLeft = 140;
var text = "";

$("#tweetArea").keyup(function(e){
    var characters = $("#tweetArea").val().length;
    charactersLeft = (140 - (characters));
    $("#characterCount").replaceWith("<label id=" + 'characterCount' + ">Character(s) Left: " + charactersLeft + "</label>");
});

function modifyText() {
    text = $("#tweetArea").val();
    var newText = "";
    for (var i = 0; i < text.length + 1; i++) {
        if ((i % 2) == 0) {
            newText += text.slice(i, i + 1)
        }
    }
    window.open("https://twitter.com/intent/tweet?text=" + newText + " %23twit_er");
}

//<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text="> Tweet</a>                        
