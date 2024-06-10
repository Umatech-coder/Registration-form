const form = document.querySelector("form"),
    nextBtn = form.querySelector(".nextBtn"),
    backBtn = form.querySelector(".backBtn"),
    allInput = form.querySelectorAll(".first input");

const mobileNumberInput = document.getElementById('mobileNumber');

  mobileNumberInput.addEventListener('change', (event) => {
    const value = event.target.value;

    if (!value.match(/^0[7-9]\d{9}$/)) {
      alert('Please enter a valid Nigerian phone number starting with 0.');
      mobileNumberInput.value = ''; // Clear the invalid input
    }
  });

nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if (input.value != "") {
            form.classList.add('secActive');
        } else {
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));