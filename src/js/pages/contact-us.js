$(function () {
  initMask();
  formValidate();
});
function formValidate() {
  $("form#contactForm").validate({
    ignore: [],
    rules: {
      name: {
        required: true,
      },
      surname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
      },
      message: {
        required: true,
        minlength: 30,
      },
      checkbox: {
        required: true,
        minlength: 1,
      },
    },
    messages: getMessages(),

    errorElement: "p",
    errorPlacement: function (error, element) {
      var placement = $(element).parent().find(".error-area");

      if (placement.length) {
        $(".error-area").append(error);
      } else {
        error.insertAfter(element);
      }
    },
    onkeyup: false,
    submitHandler: function (form) {
      form.submit();
      return false;
    },
  });
}
function initMask() {
  let prevVal = {
    name: "",
    surname: "",
  };
  $("input").on("input", function (e) {
    let checkValidity = this.checkValidity();
    if (checkValidity) {
      prevVal[this.id] = this.value;
      console.log(prevVal);
    } else {
      this.value = prevVal[this.id];
    }
  });
}
function getMessages() {
  var en = {
    name: "Please enter your firstname",
    surname: "Please enter your lastname",
    phone: "Please enter your phone number",
    message: {
      required: "Please provide a Message",
      minlength: "Your message must be at least 30 characters long",
    },
    email: "Please enter a valid email address",
    checkbox: "Plase select this option",
  };
  var tr = {
    name: "Lütfen adınızı girin",
    surname: "Lütfen soyadınızı girin",
    phone: "Lütfen telefon numaranızı girin",
    message: {
      required: "Lüften mesajınızı girin",
      minlength: "Mesajınız en az 30 karakter uzunluğunda olmalıdır.",
    },
    email: "Lütfen geçerli bir E-Posta adresi girin",
    checkbox: "Lütfen bu seçeneği seçiniz",
  };

  var localition = $("html").attr("lang");
  if (localition == "tr") {
    return tr;
  } else {
    return en;
  }
}
