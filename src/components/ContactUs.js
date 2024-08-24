const ContactUs = () => {
  return (
    <>
      <h1 className="font-bold p-4 m-4 text-3xl">Contact-Us</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 rounded-lg bg-gray-100">
          Submit
        </button>
      </form>
    </>
  );
};
export default ContactUs;
