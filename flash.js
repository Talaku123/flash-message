


(function () {


  let forms = document.querySelectorAll('.needs-validation')



  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event,  email, password) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        if(email && password === 'true') {

          const para = document.createElement("h3")

          para.classList.add("regular")

          para.innerHTML = `${msg} <span> Success </span>`

        }else if(!email || !password !== "false"){

          const para = document.createElement("h3")

          para.classList.add("js-regular")

          para.innerHTML  = `${msg} <span> Error </span>`
        }


        form.classList.add('was-validated')

      }, false)
    })

})
