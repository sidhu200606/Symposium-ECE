import React from 'react';
import "./Contactus.css";
import Swal from "sweetalert2";

const Contacts = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "95d3e2ee-7672-49ea-bd80-ad5899d280ec");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      let timerInterval;
      Swal.fire({
        title: "Thank you for Contacting Us",
        html: "The Message will be sent in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      
      event.target.reset();
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error"
      });
    }
  };

  return (
    <section className='contact'>
      <form id='sidhu' onSubmit={onSubmit}>
        <h2>Contact Form</h2>

        <div className="input-box">
          <label htmlFor='name'>Full Name</label>
          <input type="text" id="name" className='field' placeholder='Enter your name' autoComplete="name" name='name' required />
        </div>

        <div className="input-box">
          <label htmlFor='email'>Email Address</label>
          <input type="email" id="email" className='field' placeholder='Enter your email' autoComplete="email" name='email' required />
        </div>

        <div className="input-box">
          <label htmlFor='message'>Your Message</label>
          <textarea id="message" className='field mess' placeholder='Enter your message' required autoComplete="off" name='message'></textarea>
        </div>

        <button type='submit'>Send Message</button>
      </form>
    </section>
  );
}

export default Contacts;
