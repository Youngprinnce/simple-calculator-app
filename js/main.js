$(document).ready(function() {
	
	$(".key-operator, .num").on("click", function() {
		var value = $(this).val();
		$(".calculator_display").append(value);
	});

	$(".equals").on("click", function() {
		var calc = $(".calculator_display").text();
		var answer = eval(calc);
		$(".calculator_display").text(answer);	
	});

	$(".reset").on("click", function () {
		$(".calculator_display").text("");
		document.getElementById("gt").innerHTML = 0;
	});
});


	
