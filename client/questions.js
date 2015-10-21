angular.module('ornah', [])

.controller('QuestionsController', function ($scope, Questions) {
  $scope.data = {
    name: 'hello',
    iA: 'thiswillshow'
  }; //store all questions here
  $scope.getAllQuestions = function(){
    Questions.getAllQuestions()
      .then(function(questions){
        $scope.data.questions = questions;
      })
      .catch(function(error){
        console.log(error);
      });
  };
  $scope.getAllQuestions();

})

.factory('Questions', function(){
  var getAllQuestions = function ($http){
    return $http({
      method: 'GET',
      url: '/getAllQuestions' //set up a route handler for this url in the server.js return the data necessary
    }).then(function(resp){
      return resp.data;
    });
  };

  return{
    getAllQuestions: getAllQuestions
  }


})