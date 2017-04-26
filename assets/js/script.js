$(document).ready(function() {

	$("#edup").hover(
		function() {
		$("#edu").animate({fontSize: '100%'})
	},
		function() {
		$("#edu").animate({fontSize: '70%'})
	}
	);

	$("#beachp").hover(
		function() {
		$("#beach").animate({fontSize: '100%'})
	},
		function() {
		$("#beach").animate({fontSize: '70%'})
	}
	);

	$("#communityp").hover(
		function() {
		$("#community").animate({fontSize: '100%'})
	},
		function() {
		$("#community").animate({fontSize: '70%'})
	}
	);





	$("#q1").click(function() {
			$("#q1answer").fadeToggle('slow');
	});
	$("#q2").click(function() {
			$("#q2answer").fadeToggle('slow');
	});
	$("#q3").click(function() {
			$("#q3answer").fadeToggle('slow');
	});
	$("#q4").click(function() {
			$("#q4answer").fadeToggle('slow');
	});





	$(".food").click(function() {
		$(this).addClass('pic-click');
		$("#boba").addClass('pic-clickb');
		$('#pancakes').addClass('pic-clickp');
		$("#overlay").show();
	});
	$("#sushi").click(function() {
		$(".fdescript").hide();
		$("#niko").show();
	});
	$("#boba").click(function() {
		$(".fdescript").hide();
		$("#85").show();
	});
	$("#burger").click(function() {
		$(".fdescript").hide();
		$("#habit").show();
	});
	$("#waffle").click(function() {
	$(".fdescript").hide();
		$("#bruxies").show();
	});
	$("#pancakes").click(function() {
		$(".fdescript").hide();
		$("#stacks").show();
	});
	$("#plates").click(function() {
		$(".fdescript").hide();
		$("#urban").show();
	});
	$("#overlay").click(function() {
		$(this).hide();
		$(".food").removeClass('pic-click');
		$("#boba").removeClass('pic-clickb');
		$("#pancakes").removeClass('pic-clickp');
		$("fdescript").hide();
		$(".redpins").hide();
		$(".greenpins").hide();
		$(".bluepins").hide();
		$("#redpin7").show();
		$("#greenpin4").show();
		$("#bluepin5").show();
	});


	$("#utilities").click(function() {
		$(".bluepins").show(2500);
	});
	$("#leisure").click(function() {
		$(".greenpins").show(2500);
	});
	$("#education").click(function() {
		$(".redpins").show(2500);
	});
	$("#reset").click(function() {
		$(".redpins").hide();
		$(".greenpins").hide();
		$(".bluepins").hide();
		$("#redpin7").show();
		$("#greenpin4").show();
		$("#bluepin5").show();
	});

});