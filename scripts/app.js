
// document.getElementById("submit-btn").addEventListener("click", function (event) {displayDate(event)})

// function displayDate(e) {
//     e.preventDefault();
//     document.getElementById("fname").value = Date();

// }

// document.getElementById("submit-btn").addEventListener("click", function (event) {
//     event.preventDefault();
//     console.log(document.getElementById("fname").value);
//     console.log(document.getElementById("lname").value);

// })



$("#submit-btn").click(function(event) {

    var form = $("#my-form")
    
    if (form[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    
    form.addClass('was-validated');
     event.preventDefault();
    var fn = $("#fname").val();
           
            var email = $("#email").val();
            var college = $("#college").val()
    
    console.log (fn);
    console.log (email);
    console.log (college);
    
       
    });

    


// function validateForm() {
//     $(document).ready(function(){
//         console.log($('#fname').val)
//         console.log($('#lname').value)
//     });

//     // console.log(document.getElementById("fname").value);
//     // console.log(document.getElementById("lname").value);
//     return false;
// }



