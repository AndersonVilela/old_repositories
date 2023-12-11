import Style from './style.module.css';


export default function Card({ image, description, name }) {


  return (
    <div className={Style.container}>
      <img className={Style.image} src={image} />
      <h4 className={Style.title} >{name}</h4>
      <p className={Style.description} >{description}</p>
    </div>
  )
}
