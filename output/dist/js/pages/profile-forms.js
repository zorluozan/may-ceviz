$(function () {
  initMask();
  formValidate();
});

var value = $("#newpassword").val();

$.validator.addMethod("passwordcheck", function (value) {
  return /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?\W).*$/.test(value);
});

function formValidate() {
  $("form#userInfoForm").validate({
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
    },
    messages: getMessages(),

    errorElement: "p",
    errorPlacement: function (error, element) {
      if (element.length) {
        error.insertAfter(element);
      }
    },
    onkeyup: false,
    submitHandler: function (form) {
      form.submit();
      return false;
    },
  });

  $("form#passwordChangeForm").validate({
    rules: {
      password: {
        required: true,
      },
      newpassword: {
        required: true,
        minlength: 8,
        passwordcheck: true,
      },
      repeatpassword: {
        minlength: 8,
        equalTo: "#newpassword",
      },
    },
    messages: getMessages(),

    errorElement: "p",
    errorPlacement: function (error, element) {
      if (element.length) {
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
    email: "Please enter a valid email address",
    password: {
      required: "Please enter your old password",
    },
    newpassword: {
      required: "Please enter your new password",
      minlength: "Please enter at least 8 character long",
      passwordcheck: "Your password is not strong enough",
    },
    repeatpassword: "Passwords do not match",
  };
  var tr = {
    name: "Lütfen adınızı girin",
    surname: "Lütfen soyadınızı girin",
    phone: "Lütfen telefon numaranızı girin",
    email: "Lütfen geçerli bir e-Posta adresi girin",
    password: {
      required: "Lütfen mevcut şifrenizi girin",
    },

    newpassword: {
      required: "Lütfen yeni şifrenizi giriniz",
      minlength: "Şifreniz en az 8 karakter uzunluğunda olmalıdır",
      passwordcheck: "Şifreniz yeterince güçlü değil",
    },

    repeatpassword: "Şifreler eşleşmiyor",
  };

  var localition = $("html").attr("lang");
  if (localition == "tr") {
    return tr;
  } else {
    return en;
  }
}
