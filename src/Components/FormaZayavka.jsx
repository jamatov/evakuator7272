import React, { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { CHAT_ID, TOKEN } from "../Constants";


export default function FormaZayavka() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998");
  const [model, setModel] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  let text = `Ismi: ${name}.%0ATelefon raqami: ${phone}.%0AModel" ${model}`;

  const sendFeedback = (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (phone.length !== 19) {
      toast.error("Требуется номер телефона. Попробуйте еще раз.");
      setIsLoading(false);
    } else {
      const { data } = axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`
      );

      toast.success(`Завершено успешно. Дождитесь обратного звонка!`);
      setIsLoading(false);
      setName("");
      setPhone("+998");
    }
  };

  return (
    // <section id="contacts" className="Contact">
    //   <div className="container">
    //     <div className="row">
    //       <h2>ЛОКАЦИЯ</h2>

    //       <div className="contact-body row">
    //         <form
    //           onSubmit={sendFeedback}
    //           className="col-12 col-md-6 contact-form"
    //           action=""
    //         >
    //           <h3>Оставьте заявку</h3>
    //           <h4>Мы свяжемся с вами!</h4>
    //           <input
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //             className="col-12"
    //             type="text"
    //             name="name"
    //             id="name"
    //             placeholder="Ваше имя"
    //           />

    //           <InputMask
    //             value={phone}
    //             onChange={(e) => setPhone(e.target.value)}
    //             mask="+998 (99) 999-99-99"
    //             maskChar=""
    //             id="phone"
    //             type="text"
    //             placeholder="+998 (_) _ _ _"
    //             className="col-12"
    //           />

    //           <button disabled={isLoading} type="submit">
    //             {" "}
    //             {isLoading && (
    //               <i className="spinner-border spinner-border-sm text-white me-2"></i>
    //             )}
    //             Заказать звонок
    //           </button>
    //         </form>

    //         <div className="col-md-6 contatct-block">
    //           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d749.0831642677766!2d69.34718855649915!3d41.32337919550234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef45212c2eadb%3A0x70dc07470ae0cde2!2z0YPQu9C40YbQsCDQntC70YLQuNC90YLQtdC_0LAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1699264526725!5m2!1sru!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    //           <div>
                
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id='Form' className='FormaZayavka'>
      <div className="container">
        <form onSubmit={sendFeedback}
              action="">
          <h3>Заказать эвакуатор</h3>
          <p>В течении 5 минут с вами свяжется наш менеджер, для согласования всех условий.</p>
          <div className="d-flex">
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
                />
            <InputMask
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                mask="+998 (99) 999-99-99"
                maskChar=""
                id="phone"
                type="text"
                placeholder="+998 (_) _ _ _"
              />
            <input  placeholder='Модель машина' value={model}
                onChange={(e) => setModel(e.target.value)}
                type="text"
                name="name"
                id="name"
                
                />
            <button disabled={isLoading} type="submit">
                  {" "}
                  {isLoading && (
                    <i className="spinner-border spinner-border-sm text-white me-2"></i>
                  )}
                  Заказать
                </button>
          </div>
        </form>
      </div>
    </section>
  )
}
