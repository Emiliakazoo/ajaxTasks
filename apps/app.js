$(function(){

  $.getJSON('https://www.omdbapi.com/?s=Star%20Wars&r=json', function(data){
  	var movieData = data.Search;
  	$.each(movieData, function(index, value){
  		console.log(value.Title);
  	});
  });

});