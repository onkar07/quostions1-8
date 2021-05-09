function validateForm() {
    if( document.myForm.firstname.value == "" ) {
        alert( "Please provide your name!" );
        document.myForm.firstname.focus() ;
        return false;
     }
     if( document.myForm.checkme.checked == false) {
        alert( "Please check this!" );
        document.myForm.checkme.focus() ;
        return false;
     }
     return true;
  }