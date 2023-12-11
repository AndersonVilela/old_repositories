import React from "react"
import Card from "../Card";
import Style from '../../Pages/Projects/style.module.css';


export default function Project() {

  const project = [
    {
      id: 1,
      name: "Pokedex-v2",
      image: "https://raw.githubusercontent.com/AndersonVilela/Pokedex-v2/main/1yRRdNTU7PqeqG0SQh9xYuQG-large.webp",
      description: "Criei uma pokedex relembrando uns dos melhores desenhos da minha infância, utilizei uma api do pokeapi para buscar as informações dos pokemons e também utilizei outro site para pegar os gifs das imagens dos pokemons."
    },
    {
      id: 2,
      name: "Github Profile",
      image: "https://github.com/AndersonVilela/github-profile/blob/main/src/images-para-readme/profile1.PNG?raw=true",
      description: "Criei uma aplicação onde o usuário vai colocar o username do github e irá listar algumas informações sobre o perfil, utilizei a a pi pública do github."
    },
    {
      id: 3,
      name: "Landing Page 2.0",
      image: "https://github.com/AndersonVilela/landing-page2.0/blob/main/2022-09-14_12-18.png?raw=true",
      description: "Desenvolvi uma landing page como se fosse para uma cafeteria para desenvolvedores."
    },
    {
      id: 4,
      name: "Crypto-App",
      image: "https://github.com/AndersonVilela/crypto-App/blob/main/2022-09-14_12-17.png?raw=true",
      description: "uma aplicação em react utilizando uma api de crypto moedas"
    },

    {
    id: 4,
    name: "Move | Doro",
    image: "https://github.com/AndersonVilela/move-doro/blob/main/public/2022-11-06%2011.57.11%20localhost%2022dc6cf88090.png?raw=true",
    description: "uma aplicação baseada no método pomodoro gameficado, com algumas tarefas a comprir visão a saúde do dev, feito em next com typescript e css modules."
    }
  ]

  return (
    <div className={Style.list}>
      {project.map((proj) => (
        <Card name={proj.name} image={proj.image} description={proj.description} key={proj.id} />
      ))}
    </div>
  )
}

