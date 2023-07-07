"use client";

import { FormEvent } from "react";

type Props = {};

const ContactForm = (props: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    e.currentTarget.reset();
    // const data = Object.fromEntries(formData);
    // console.log(data);
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxfmfuWp7RtJA3Eiw6cYEq17vPZhQMuIwCkDIywA5iQ6WoOQUkOwwQyc7croQUhQyE3/exec";
    // const form = document.forms["google-sheet"];

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) =>
        alert("Thanks for Contacting us..! We Will Contact You Soon...")
      )
      .catch((error) => console.error("Error!", error.message));
  };
  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      className="flex  flex-1  flex-col gap-5"
      action=""
      
      name="google-sheet"
    >
      <input
      required
        type="text"
        className="p-2 bg-transparent border text-white  rounded-md"
        name="First_Name"
        id="fname"
        placeholder="First Name"
      />
      <input
      required
        type="text"
        className="p-2 bg-transparent border text-white  rounded-md"
        name="Last_Name"
        id="lname"
        placeholder="Last Name"
      />
      <input
      required
        type="email"
        className="p-2 bg-transparent border text-white  rounded-md"
        name="Work_Email"
        id="workEmail"
        placeholder="Work Email"
      />
      <input
      required
        type="text"
        className="p-2 bg-transparent border text-white  rounded-md"
        name="Job_Title"
        id="jobTitle"
        placeholder="Job Title"
      />
      <input
      required
        type="text"
        className="p-2 bg-transparent border text-white  rounded-md"
        name="Country"
        id="country"
        placeholder="Country"
      />
      <textarea
        name="Message"
        className="p-2 bg-transparent border text-white  rounded-md resize-none"
        id="message"
        placeholder="Message"
        cols={20}
        rows={10}
      ></textarea>
      <button
        type="submit"
        className="p-2 hover:border-primary transition-colors duration-300   bg-primary hover:bg-transparent border text-white  rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;

{
  /* <Script>
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxkgWotCMyvIKoT9aGtPCndZdHtHrq8i972t9CKAVjO6xC7T0I/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
          </Script> */
}
