
$(document).ready(function(){

    var $button = $('#bigassbutton');
    var question = $('#value').val();
    var cutty = $('#hiddenbutton');
    var $ayoforyayo = $('.ayoForYayo');




    console.log($button);

    $button.click(function(){
      question = $('#value').val();
      console.log(question);
      var obj = {};
      obj['question'] =  JSON.stringify(question);
      $.ajax({
          url: 'http://localhost:3000/ornah',
          type: 'POST',
          data: obj,
          success: function (data) {
            question= '';
            console.log('post success')

          },
          error: function (data) {
            console.error('you FAILED!!!');
          }
        });

      
    })

    var ref = new Firebase('https://or-nah.firebaseio.com/question');
    ref.on("value", function(snapshot) {
      var questionsobj = snapshot.val();
      for(var key in questionsobj){
        $('<div class="allthequestions">' + '<h2>' + questionsobj[key]['question'] + '</h2>'+'</div>').prependTo($ayoforyayo);
        console.log(questionsobj[key]['question']); //this is the question no modification necessary
      };

    }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

})