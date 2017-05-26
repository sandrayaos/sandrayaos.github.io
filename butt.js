$(document).ready(function() {
	function sortDemo(userInput,insertSort,numSteps) {
	  
	  var temp;
	  var result = userInput.split(',');
	  var output = [];
	  numSteps = parseInt(numSteps);
	  
	  for (var a in result) {
	    result[a] = parseInt(result[a], 10);
	  }
	  if(insertSort == true) {
	  	for (var i = 1; i<numSteps+1; i++) {
		    temp = result[i];
		    for(var j = i-1; j>=0; j--) {
		      if(temp < result[j]) {
		        result[j+1] = result[j];
		        result[j] = temp;
		      }
		    }
		    output.push(result.slice());
		}
	  } else {
	  	for (i=0; i < numSteps; i++){
	  		output.push(result.slice());
	        min = i;
	        for (j=i+1; j < result.length; j++){
	            if (result[j] < result[min]){
	                min = j;
	            }
	        }
	        if (i != min){
	        	temp = result[i]
	            result[i] = result[min];
	            result[min] = temp;
	        }
	    }
	  }
	  return output;
	}

	$("button").click(function() {
		var steps = sortDemo($(".input").val(),$("#insertion")[0].checked,$(".steps").val());
		$(".results").empty();
		for(var i = 0; i < steps.length; i++) {
			$(".results").append(steps[i] + "<br>");
		}
	});
	$(".option").click(function() {
		$(".box").hide();
		$(".box#header").show();
		$(".box#" + $(this).attr("class").substring(7)).show();
	});
});