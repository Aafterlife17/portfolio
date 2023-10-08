import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.section}>
      <div className={style.contact_container}>
        <h1 className={style.contact_title}>Let's get in touch</h1>

        <div className={style.contact_subtitle}>
          <p className={style.contact_p}>
            Do you want to know more about me? Awesome!
          </p>
          <p className={style.contact_p}>
            Send me a message and I’ll contact you as soon as possible.
          </p>
        </div>

        <form action="" className={style.form}>
          <label className={style.form_label}>Name</label>
          <input type="text" className={style.form_input} />

          <label className={style.form_label}>Email</label>
          <input type="text" className={style.form_input} />

          <label className={style.form_label}>Message</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={style.form_textarea}
          ></textarea>

          <button className={style.form_button}>Send message</button>
        </form>
      </div>
      <div className={style.contact_3d}>
        <h1>Acá va el 3d!</h1>
      </div>
    </div>
  );
};

export default Contact;
