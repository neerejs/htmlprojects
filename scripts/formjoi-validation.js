const schema = joi.object({
    name: joi.string().min(3).max(30).label("Name").required(),
    email:joi.string().email({ tlds: {allow: false} }).label("Email address").required(),
    age:joi.number().max(100),
    startdate:joi.date().greater('now')
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

    $("#joi-form").on("submit", function (e) {

        e.preventDefault();
        const joiForm = this;
        const nameField = $(joiForm).find("#name");
        const emailField = $(joiForm).find("#email");
        const ageField = $(joiForm).find("#age");
        const startDateField = $(joiForm).find("#startdate");


        const formErrors = validate({
            name: nameField.val(),
            email: emailField.val(),
            age: ageField.val(),
            startdate:startDateField.val()
        });

       const initialErros = {
            name: null,
            email:null,
            age:null,
            startdate:null
        };

        if (formErrors?.error) {
            const { details } = formErrors.error;
            details.map((detail) => {
                initialErros[detail.context.key] = detail.message;
                // console.log(detail);
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
            joiForm.reset();
            $("#" + 'responseMessage').addClass("show");
            $(joiForm)
                .find(".is-valid, .is-invalid")
                .removeClass("is-valid is-invalid");
        }
        else {
            alert("Validation error");
        }



    });
})


