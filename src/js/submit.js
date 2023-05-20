function checkParams() {
        var email = $('#email').val();
    
  
    if ( email.length != 0 ) {
      $('#submit').removeAttr('disabled');
    } else {
      $('#submit').attr('disabled', 'disabled');
    }
  }