import React from "react";

export default function ContactItem({imgUrl, name, email, onDelete}) {
  return (
    <div className="content__item__container">
      <div className="content__item-image">
        <img
          src={imgUrl?? "../../public/images/default.png"}
          alt={name}
          className="content__item__image-file"
          width={120}
          height={120}
        />
      </div>
      <div className="contact__detail__container">
        <p className="contact__detail-name">{name}</p>
        <p className="contact__detail-email">{email}</p>
      </div>
      <button className="content__item-button" onClick={onDelete}>x</button>
    </div>
  );
}
