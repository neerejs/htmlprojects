
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

    

    async function fetchText() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      console.log(response.status); // 200
      console.log(response.statusText); // OK
  
      if (response.status === 200) {
          let data = await response.json();
          let outputhtml="";
          data.forEach ((item) => {

            outputhtml = outputhtml +  "<tr> <th scope='row'>" + item.id + "</th><td>" + item.userId +"</td><td>"+ item.title+"</td></tr>"

             });

             console.log (outputhtml);
             document.getElementById("table-content").innerHTML=outputhtml;
           
        
      }
  }
  
  $( document ).ready(function() {
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



