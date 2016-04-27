 $(document).ready(function() {}

 	$('#carousel-next').click(function() {
	    var m = parseInt($('#carousel').css('margin-left').replace("px", ""));
	    if (m == -3840) {
	      return false;
	    } else {
	      var n = (m - 960);
	      $('#carousel').css('margin-left', n);
	    }
	});
	$('#carousel-prev').click(function() {
    var m = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (m == 0) {
      return false;
    } else {
      var n = (m + 960);
      $('#carousel').css('margin-left', n);
    }
  });



 });