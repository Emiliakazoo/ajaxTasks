$(function(){

	$("#search-term").on("submit", function(event){
		event.preventDefault();
		var searchTerm = $("#query").val();
		getRequest(searchTerm);
		$("#search-results").empty();
	});


	function getRequest(searchTerm){
	//	$.getJSON('https://www.omdbapi.com/?s=' + searchTerm +'&r=json', function(data){
  	//  	showResults(data.Search);

  		//setting up the search url like this hides the query string and looks cleaner
		var params = {
			s: searchTerm,
			r: 'json'
		};
		url = 'http://www.omdbapi.com';

		$.getJSON(url, params, function(data){
			showResults(data.Search);
		});


	}

  function showResults(results){
  	$.each(results, function(index, value){
  		$("#search-results").append("<div>" + value.Title + "</div>");
  		  		$("#query").val("");

  		//console.log(value.Title);



  		/* This is the code the course suggests to append to the page.  Why?  Seems like extra steps to me

		  var html = "";
		  $.each(results, function(index,value){
		    html += '<p>' + value.Title + '</p>';
		    console.log(value.Title);
		  });
		  $('#search-results').html(html);		


  		*/
  	});
  }

});