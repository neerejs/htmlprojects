
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


(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
        event.preventDefault();
        let fname = $("#fname").val();
        let email = $("#email").val();
        let age = $("#age").val();
        // let red = $("#redCheck").val();
        // let blue = $("#blueCheck").val();
        // let green = $("#greenCheck").val();
        let grade = $("input[name=GradeRadio]:checked").val()
        // let color = $("input[name=colorPick]:checked").val()
        // let color2 = $("input[name=colorPick2]:checked").val()
        // let color3 = $("input[name=colorPick3]:checked").val()
        // let colors = $("input[name=colorPick]:checked")
        
        //   colors.forEach((color, index) => {
        //   console.log ("colors selected:" + color.value);

        // })

        var selectedColors  = new Array();
        $("input[name=colorPick]:checked").each(function() {
          selectedColors.push($(this).val());
});



        let college = $("#college").val();
        alert("fname:" + fname + "\n" +
          "Email:" + email + "\n" +
          "Age:" + age + "\n" +
          "Color of Flag:" + selectedColors + "\n" +

          // "color:" + color + "\n" +
          // "color2:" + color2 + "\n" +
          // "color3:" + color3 + "\n" +
          // "blue:" + blue +"\n" +
          // "green:" + green +"\n" +
          "grade:" + grade + "\n" +
          "school:" + college
        );


      }, false);
    });
  }, false);
})();



async function getPosts() {
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
async function getPhotos() {
  const response = await fetch("https:jsonplaceholder.typicode.com/photos/");
  const data = await response.json();
  let output = "";
 
  data.forEach((item, index) => {

    if (index < 4) {
      let id = "card"+ index

      output += `<div class="col-sm-3 ">
    <div class="card" style="width: 100%" id=${id}>
    <img src= ${item.url} class="card-img-top" alt="...">
    <div class="card-body" >
    <h5 class="card-title"> ${item.title}</h5>
    
    </div>
    </div>
    </div> 
        
    `
    }

  });

  $("#cardStuff").html(output);
}

function header() {

  let headerhtml = "<div class='row'><div class='col-sm-12' style='padding-left:0px;padding-right:0px'> <img src='./images/red_banner.png' class='img-fluid rounded' style='width:1360px;margin-top:20px;margin-bottom:20px' /> </div></div>";
  $("#header").html(headerhtml);

}

function footer() {

  //let footerhtml = "<div class='row'><div class='col-sm-12' style='padding-left:0px;padding-right:0px'> <img src='./images/ruFooter.png' class='img-fluid rounded' style='width:1360px;margin-top:20px;margin-bottom:20px' /> </div></div>";
  let footerhtml = "<div class='row footer' style='background-color: black;padding-top:30px;padding-bottom:30px'><div class='col-sm-1'><img src='./images/rlogo.png' class='img-fluid rounded' /></div><div class='col-sm-3'><p style='text-align:center'><a href='http://www.google.com'>Google</a></p><p style='text-align:center'><a href='http://www.google.com'>Google</a></p><p style='text-align:center'><a href='http://www.google.com'>Google</a> </p></div><div class='col-sm-3'><p style='text-align:center'><a href='http://www.google.com'>Google</a></p><p style='text-align:center'><a href='http://www.google.com'>Google</a></p><p style='text-align:center'><a href='http://www.google.com'>Google</a> </p></div><div class='col-sm-3'><p style='text-align:center'><a href='http://www.google.com'>Google</a></p><p style='text-align:center'><a href='http://www.google.com'>Google</a></p><p style='text-align:center'><a href='http://www.google.com'>Google</a> </p></div></div>"
  $("#footer").html(footerhtml);

}

$(document).ready(function () {
  header();
  footer();
  getPosts();
  getPhotos();
})

// function footer() {

//   let footerhtml = "<div class='row'><div class='col-sm-12' style='padding-left:0px;padding-right:0px'> <img src='./images/ruFooter.png' class='img-fluid rounded' style='width:1360px;margin-top:20px;margin-bottom:20px' /> </div></div>";
//   $("#footer").html(footerhtml);

// }
// $(document).ready(function () {
//   footer();
//   fetchText();
// })




// function validateForm() {
//     $(document).ready(function(){
//         console.log($('#fname').val)
//         console.log($('#lname').value)
//     });

//     // console.log(document.getElementById("fname").value);
//     // console.log(document.getElementById("lname").value);
//     return false;
// }



