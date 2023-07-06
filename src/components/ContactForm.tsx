
type Props = {}

const ContactForm = (props: Props) => {
  return (
    <form className="flex  flex-1  flex-col gap-5" action="">
        <input type="text" className="p-2 bg-transparent border text-white  rounded-md" name="fname" id="fname" placeholder="First Name"/>
        <input type="text"  className="p-2 bg-transparent border text-white  rounded-md" name="lname" id="lname" placeholder="Last Name"/>
        <input type="email"  className="p-2 bg-transparent border text-white  rounded-md" name="workEmail" id="workEmail" placeholder="Work Email"/>
        <input type="text"  className="p-2 bg-transparent border text-white  rounded-md" name="jobTitle" id="jobTitle" placeholder="Job Title"/>
        <input type="text"  className="p-2 bg-transparent border text-white  rounded-md" name="country" id="country" placeholder="Country"/>
        <textarea name="message" className="p-2 bg-transparent border text-white  rounded-md resize-none"  id="message" placeholder="Message" cols={20} rows={10}></textarea>
        <button type="submit" className="p-2 hover:border-primary transition-colors duration-300   bg-primary hover:bg-transparent border text-white  rounded-md">Submit</button>
    </form>
  )
}

export default ContactForm