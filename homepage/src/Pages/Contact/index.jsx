import Style from './style.module.css';




export default function Contact() {



  return (
    <section className={Style.container}>
      <div className={Style.left}>
        <h3 className={Style.title}>Contact me</h3>
        <p className={Style.content}>I am interested in freelance opportunities and also web internship opportunities</p>
        <div>
          <form className={Style.form} action='https://api.staticforms.xyz/submit' method='POST'>
            <input type="hidden" name="redirectTo" value="https://homepage-delta-eight.vercel.app/" />
            <input type="hidden" name="accessKey" value="988bb31f-c6be-46c6-bb55-a9259e9c3786" />
            <div className={Style.junt}>
              <input className={Style.name} placeholder="Name" type="text" name="name" />
              <input className={Style.email} placeholder="Email" type="text" name="email" />
            </div>
            <input className={Style.subject} placeholder="Subject" type="text" name="subject" />
            <textarea className={Style.area} placeholder="Message" name="message"></textarea>
            <input className={Style.button} type="submit" value="Submit" />

          </form>

        </div>
      </div>
      <div className={Style.right}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126682.34216868509!2d-34.95180928995358!3d-7.1464332062322224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa3d7%3A0x6e414a9c6d26db34!2sJo%C3%A3o%20Pessoa%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1666029654553!5m2!1spt-BR!2sbr"
          className={Style.map}
          allowFullScreen=""
          loading='lazy'
          style={{ width: '800px', height: '700px' }}
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
        <div className={Style.card}>
          <p>Anderson Vilela</p>
          <span>
            Brazil, Paraíba
          </span>
          <span>@: Andersonvilela.al@gmail.com</span>
        </div>
      </div>
    </section>
  )
}
