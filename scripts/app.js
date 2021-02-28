
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



// $("#submit-btn").click(function (event) {

//   var form = $("#my-form")

//   if (form[0].checkValidity() === false) {
//     event.preventDefault()
//     event.stopPropagation()
//   }

//   form.addClass('was-validated');
//   event.preventDefault();
//   var fn = $("#fname").val();

//   var email = $("#email").val();
//   var college = $("#college").val()

//   console.log(fn);
//   console.log(email);
//   console.log(college);


// });


(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
       
        form.classList.add('was-validated');
        event.preventDefault();
        let fname = $("#fname").val();
        let grade =$("input[name=GradeRadio]:checked").val()
        alert ("fname:" + fname +"\n" + "Grade:" + grade);

       
      }, false);
    });
  }, false);
})();



async function fetchText() {
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
    let data = await response.json();
    let outputhtml = "";
    data.forEach((item) => {

      outputhtml = outputhtml + "<tr> <th scope='row'>" + item.id + "</th><td>" + item.userId + "</td><td>" + item.title + "</td></tr>"

    });

    // console.log(outputhtml);
    //  document.getElementById("table-content").innerHTML=outputhtml;
    $("#table-content").html(outputhtml);


  }
}

function header() {

  let headerhtml = "<div class='row'><div class='col-sm-12' style='padding-left:0px;padding-right:0px'> <img src='./images/red_banner.png' class='img-fluid rounded' style='width:1360px;margin-top:20px;margin-bottom:20px' /> </div></div>";
  $("#header").html(headerhtml );

}
$(document).ready(function () {
  header();
  fetchText();
})






// function validateForm() {
//     $(document).ready(function(){
//         console.log($('#fname').val)
//         console.log($('#lname').value)
//     });

//     // console.log(document.getElementById("fname").value);
//     // console.log(document.getElementById("lname").value);
//     return false;
// }



