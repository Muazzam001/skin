
$(document).ready(function($) {
	$(".step-two-item").hide();
	$("#btnTest").on("click", function(){
		alert("Hello There");
	});
	
	// $(".btn-custom-right").on("click", function(){
		// e.preventDefault();
		// $("#form_badge, .item-display-1").hide();
		// $(".step-two-item").show();
//
		// var first_name = $('#first-name').val();
		// var last_name = $('#sur-name').val();
		// var email = $('#email').val();

		// $(".error").remove();

		// if (first_name.length < 1) {
		  // $('#first-name').after('<span class="error">This field is required</span>');
		// }
		// if (last_name.length < 1) {
		  // $('#sur-name').after('<span class="error">This field is required</span>');
		// }
		// if (email.length < 1) {
		  // $('#email').after('<span class="error">This field is required</span>');
		// } else {
		  // var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
		  // var validEmail = regEx.test(email);
		  // if (!validEmail) {
			// $('#email').after('<span class="error">Enter a valid email</span>');
		  // }
		// }
//
	// });

	    // $("#fname_error_message").hide();
        // $("#sname_error_message").hide();
        // $("#email_error_message").hide();
		// $("#telephone_error_message").hide();

	$(".error_form").hide();

	var error_salute = false;
	var error_fname = false;
	var error_sname = false;
	var error_email = false;

	var error_tel = false;
	var error_clinic_loc = false;
	var error_treat_type = false;
	var error_clinic_time = false;
	
	$(".step-one-item #salute-title").change(function() {
		check_salute();
	});		
	$(".step-one-item #first-name").focusout(function(){
		check_fname();
	});
	$(".step-one-item #sur-name").focusout(function() {
		check_sname();
	});
	$(".step-one-item #email").focusout(function() {
		check_email();
	});
	
	function check_salute() {
		var salute = $(".step-one-item #salute-title").val();
		$("#salute_error_message").show();
		if (salute !== 'emp') {
			$(".step-one-item #salute-title option:first-child").attr("disabled", "disabled");			
			$("#salute_error_message .cross").hide();
			$("#salute_error_message .check").show();
		} else if (salute === 'emp'){
		   $("#salute_error_message .check").hide();
		   $("#salute_error_message .cross").show();
		   error_salute = true;
		}
		else {
		   $("#salute_error_message .check").hide();
		   $("#salute_error_message .cross").show();
		   error_salute = true;
		}
	}

	function check_fname() {
		var pattern = /^[a-zA-Z]*$/;
		var sname = $(".step-one-item #first-name").val()
		$("#fname_error_message").show();
		if (pattern.test(sname) && sname !== '') {
		   $("#fname_error_message .cross").hide();
		   $("#fname_error_message .check").show();				
		} else {
		   $("#fname_error_message .check").hide();
		   $("#fname_error_message .cross").show();				
		   error_fname = true;
		}
	}
		
	function check_sname() {
		var pattern = /^[a-zA-Z]*$/;
		var sname = $(".step-one-item #sur-name").val()
		$("#sname_error_message").show();
		if (pattern.test(sname) && sname !== '') {
		   $("#sname_error_message .cross").hide();
		   $("#sname_error_message .check").show();				
		} else {
		   $("#sname_error_message .check").hide();
		   $("#sname_error_message .cross").show();				
		   error_sname = true;
		}
	}

	function check_email() {
		var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = $(".step-one-item #email").val();
		$("#email_error_message").show();
		if (pattern.test(email) && email !== '') {
			$("#email_error_message .cross").hide();
			$("#email_error_message .check").show();
		} else {
			$("#email_error_message .check").hide();
			$("#email_error_message .cross").show();
		   error_email = true;
		}
	}
	
	$("#btnStep").on("click", function(e){
		e.preventDefault();
		error_salute = false;			
		error_fname = false;
		error_sname = false;
		error_email = false;
		
		check_salute();
		check_fname();
		check_sname();
		check_email();

		if (error_fname === false && error_sname === false && error_email === false && error_salute === false) {
			// return true;
			$("#form_badge, .item-display-1").hide();
			$(".step-two-item").show();
		} else {
		   alert("Please Fill the form Correctly");
		   return false;
		}
	});	

	
	$(".step-two-item #telephone").focusout(function(){
		check_tel();
	});
	$(".step-two-item #clinic-loc").change(function() {
		check_clinic_loc();
	});		
	$(".step-two-item #treatment-type").change(function() {
		check_treat_type();
	});	
	$(".step-two-item #clinic-time").change(function() {
		check_clinic_time();
	});	
	$("#status-email input:radio[name='chk-email-status']").change(function() {
		isEmailChecked();
	});	
	$("#status-sms input:radio[name='chk-sms-status']").change(function() {
		isSMSChecked();
	});	
	function check_tel() {
		var pattern = /^[0-9-+s()]*$/;
		var telp = $(".step-two-item #telephone").val()
		$("#telephone_error_message").show();
		if (pattern.test(telp) && telp !== '') {
		   $("#telephone_error_message .cross").hide();
		   $("#telephone_error_message .check").show();				
		} else {
		   $("#telephone_error_message .check").hide();
		   $("#telephone_error_message .cross").show();				
		   error_tel = true;
		}
	}
	
	function check_clinic_loc() {
		var clinic_loc = $(".step-two-item #clinic-loc").val();
		$("#clinic_loc_error_message").show();
		if (clinic_loc !== 'emp') {
			$(".step-two-item #clinic-loc option:first-child").attr("disabled", "disabled");						
			$("#clinic_loc_error_message .cross").hide();
			$("#clinic_loc_error_message .check").show();
		} else if (clinic_loc === 'emp'){
		   $("#clinic_loc_error_message .check").hide();
		   $("#clinic_loc_error_message .cross").show();
		   error_clinic_loc = true;
		}
		else {
		   $("#clinic_loc_error_message .check").hide();
		   $("#clinic_loc_error_message .cross").show();
		   error_clinic_loc = true;
		}
	}

	function check_treat_type() {
		var treat_type = $(".step-two-item #treatment-type").val();
		$("#treatment_type_error_message").show();

		if (treat_type !== 'emp') {
			$(".step-two-item #treatment-type option:first-child").attr("disabled", "disabled");						
			$("#treatment_type_error_message .cross").hide();
			$("#treatment_type_error_message .check").show();
		} else if (treat_type === 'emp'){
		   $("#treatment_type_error_message .check").hide();
		   $("#treatment_type_error_message .cross").show();
		   error_treat_type = true;
		}
		else {
		   $("#treatment_type_error_message .check").hide();
		   $("#treatment_type_error_message .cross").show();
		   error_treat_type = true;
		}
	}

	function check_clinic_time() {
		var clinic_time = $(".step-two-item #clinic-time").val();
		$("#clinic_time_error_message").show();
		if (clinic_time !== 'emp') {
		   $("#clinic_time_error_message .cross").hide();
		   $("#clinic_time_error_message .check").show();
		} else if (clinic_time === 'emp'){
		   $("#clinic_time_error_message .check").hide();
		   $("#clinic_time_error_message .cross").show();
		   error_clinic_time = true;
		}
		else {
		   $("#clinic_loc_error_message .check").hide();
		   $("#clinic_loc_error_message .cross").show();
		   error_clinic_time = true;
		}
	}
	
	function isEmailChecked() {
		if ($("#status-email input:radio[name='chk-email-status']:checked").length == 0) {
			alert("you must select email status option");
			return false;
		}else {
			return true;
		}
	}
	
	function isSMSChecked() {
		if ($("#status-sms input:radio[name='chk-sms-status']:checked").length == 0) {
			alert("you must select sms status option");
			return false;
		}else {
			return true;
		}
	}
	

	$("#btnSubmit").on("click", function(){
		error_salute = false;			
		error_fname = false;
		error_sname = false;
		error_email = false;
		error_tel = false;
		error_clinic_loc = false;
		error_treat_type = false;
		error_clinic_time = false;		
		
		check_salute();
		check_fname();
		check_sname();
		check_email();
		check_tel();
		check_clinic_loc();
		check_treat_type();
		check_clinic_time();
		
		if (error_salute === false && error_fname === false && error_sname === false && error_email === false && error_tel === false && error_clinic_loc === false && error_treat_type === false && error_clinic_time === false) {
			return true;
		} else {
		   alert("Please Fill the form Correctly");
		   return false;
		}
	});	
	
	$(window).scroll(function(){
		if ($(window).scrollTop() >= 300) {
			$('.top-navbar').addClass('fixed-header');
		}
		else {
			$('.top-navbar').removeClass('fixed-header');
		}
	});

	$('#carousel_slider').carousel({
		interval: 5000
	})

	$('#carousel_slider.carousel .item').each(function(){
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
	  
		if (next.next().length>0) {
			next.next().children(':first-child').clone().appendTo($(this));
		}
		else {
			$(this).siblings(':first').children(':first-child').clone().appendTo($(this));
		}
	});
	function toggleIcon(e) {
		$(e.target)
			.prev('.panel-heading')
			.find(".more-less")
			.toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
	}
	$('.panel-group').on('hidden.bs.collapse', toggleIcon);
	$('.panel-group').on('shown.bs.collapse', toggleIcon);
});

function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider, img, clicked = 0, w, h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = (w / 2) + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
    slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchstop", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e)
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a, x = 0;
      e = e || window.event;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
    }
  }
}
initComparisons();