// Solution goes here
$(document).ready(function () {
	var controle1 = false;
	var controle2 = false;
	var controle3 = false;
	var controle4 = false;
	var controle5 = false;
	var letters = /^[A-Za-z]+$/;
	$("#reset").click(function () {
		$(".form-control").val("");
		$(".form-control").css("border", "");
		$("#mistake").css("display", "none");
		$("#wachtsterkte").css("color", "");
		$("#wachtsterkte").html("Wachtwoord sterkte");
	})

	$("form").submit(function (event) {

		if ($("#display-name").val() == "" || $("#pass").val() == "" || $("#pass-confirm").val() == "" || $("#email").val() == "") {
			$("#mistake").css("display", "block");
			event.preventDefault();
		} else if (controle1 == false || controle2 == false || controle3 == false || controle4 == false || controle5 == false) {
			$("#mistake").css("display", "none");
			event.preventDefault();
			if (controle1 == true && controle2 == true && controle3 == false && controle4 == true && controle5 == true) {
				$("#pass-confirm").css("border", "5px solid red");
				$("#extrawachtwoord").css("display", "block");
			}
		}

	});
	$("#display-name").focusout(function () {
		if ($("#display-name").val().length < 5 || $("#display-name").val().length > 20) {
			$("#display-name").css("border", "5px solid red");
			controle1 = false;
		} else if (document.getElementById("display-name").value.match(letters)) {
			$("#display-name").css("border", "5px solid green");
			controle1 = true;
			$("#bonus1").css("display", "none");
		} else {
			$("#display-name").css("border", "5px solid red");
			controle1 = false;
		}


	})
	$("#pass").focusout(function () {
		if ($("#pass").val().length < 5) {
			$("#pass").css("border", "5px solid red");
			controle2 = false;
		} else {
			$("#pass").css("border", "5px solid green");
			controle2 = true;
			$("#bonus2").css("display", "none");
		}

	})
	$("#pass-confirm").focusout(function () {
		if (($("#pass-confirm").val().length < 5)) {
			$("#pass-confirm").css("border", "5px solid red");
			controle3 = false;
		} else if ($("#pass-confirm").val() == $("#pass").val()) {
			$("#pass-confirm").css("border", "5px solid green");
			controle3 = true;
			$("#bonus3").css("display", "none");
			$("#extrawachtwoord").css("display", "none");
		} else {
			$("#pass-confirm").css("border", "5px solid red");
			controle3 = false;
		}

	})

	$("#email").focusout(function () {
		if ($("#email").val().length < 5 || $("#email").val().indexOf("@") == -1) {
			$("#email").css("border", "5px solid red");
			controle4 = false;
		} else {
			$("#email").css("border", "5px solid green");
			controle4 = true;
			$("#bonus4").css("display", "none");
		}

	})

	$("#display-name").focusin(function () {
		$("#bonus1").css("display", "block");
	})

	$("#pass").focusin(function () {
		$("#bonus2").css("display", "block");
	})

	$("#pass-confirm").focusin(function () {
		$("#bonus3").css("display", "block");
	})

	$("#email").focusin(function () {
		$("#bonus4").css("display", "block");
	})

	$("#pass").keyup(function () {
		$("#wachtsterkte").html(checksterk($("#pass").val()))
	})

	function checksterk(paswoord) {
		var sterkte = 0;
		if (paswoord.length < 5) {
			$("#wachtsterkte").css("color", "red");
			controle5 = false;
			return "Wachtwoord te Klein. (Je wachtwoord word alleen toegestaan als het goed of sterk is)";

		}
		if (paswoord.lenght >= 5) {
			sterkte++;
		}
		if (paswoord.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
			sterkte++;
		}
		if (paswoord.match(/([a-zA-Z])/) && paswoord.match(/([0-9])/)) {
			sterkte++;
		}
		if (paswoord.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
			sterkte++;
		}
		if (paswoord.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) {
			sterkte++;
		}

		if (sterkte < 2) {
			$("#wachtsterkte").css("color", "red");
			controle5 = false;
			return "Wachtwoord te Zwak. (Je wachtwoord word alleen toegestaan als het goed of sterk is)";
		} else if (sterkte == 2) {
			$("#wachtsterkte").css("color", "yellow");
			controle5 = true;
			if ($("#pass-confirm").val() == $("#pass").val()) {

				controle3 = true;
				$("#bonus3").css("display", "none");
			} else {

				controle3 = false;
			}
			return "Wachtwoord is Goed. ";
		} else {
			$("#wachtsterkte").css("color", "green");
			controle5 = true;
			if ($("#pass-confirm").val() == $("#pass").val()) {

				controle3 = true;
				$("#bonus3").css("display", "none");
			} else {

				controle3 = false;
			}
			return "Wachtwoord is Sterk!";
		}

	}

})
