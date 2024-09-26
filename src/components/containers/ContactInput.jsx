import * as React from "react";
import Input from "../form/Input";

export default function ContactInput() {
  const formRef = React.useRef(null);

  const handlePost = async (data) => {
    try {
      const request = await fetch(`${process.env.BASE_URL}/api/contacts/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    const formData = formRef.current;
    e.preventDefault();
    const data = {
      name: formData["name"].value,
      email: formData["email"].value,
      img_url: formData["img_url"].value || undefined,
    };

    if (!data.img_url) delete data.img_url;
    handlePost(data);
    formRef.current.reset();
    console.log(data);
  };
  return (
    <section className="add__content__container">
      <h1 className="main__container-heading">Contact Apps</h1>
      <h2 className="main__container-subheading">Add New Contact</h2>
      <form className="add__content__container-input" ref={formRef}>
        <Input name="name" placeholder="Nama" />
        <Input name="email" placeholder="Email" />
        <Input name="img_url" placeholder="Image URL" />
        <button
          id="main__container-button"
          className="main__container-button"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </section>
  );
}
