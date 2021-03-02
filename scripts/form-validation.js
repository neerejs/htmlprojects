const schema = joi.object({
    username: joi.string().min(3).max(30).label("Name").required()
});

function validate(dataObject) {
    // dataObject = {username:"",email:""}
    const result = schema.validate(
        {
            ...dataObject,
        },
        { abortEarly: false }
    );
    return result;
}

$(document).ready(function () {

    $(".contact-form").on("submit", function (e) {

        e.preventDefault();
        const contactForm = this;
        const usernameField = $(contactForm).find("#username");


        const formErrors = validate({
            username: usernameField.val(),
        });
        const initialErros = {
            username: null,
        };

        if (formErrors?.error) {
            const { details } = formErrors.error;
            details.map((detail) => {
                initialErros[detail.context.key] = detail.message;
            });
        }


        Object.keys(initialErros).map((errorName) => {
            if (initialErros[errorName] !== null) {
              // if the error exist
              // username input #username
              $(`#${errorName}`).removeClass("is-valid").addClass("is-invalid");
      
              // invalid feedback element
              $(`#${errorName}`)
                .next(".invalid-feedback")
                .text(initialErros[errorName]);
            } else {
              $(`#${errorName}`).removeClass("is-invalid").addClass("is-valid");
            }
          });


          let isFormValid = Object.values(initialErros).every(
            (value) => value === null
          );


          if (isFormValid) {
            contactForm.reset();
            $(responseMessage).addClass("show");
            $(contactForm)
              .find(".is-valid, .is-invalid")
              .removeClass("is-valid is-invalid");
          }
          else {
              alert ("Validation error");
          }




    });

});
