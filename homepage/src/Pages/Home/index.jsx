import Style from './style.module.css';
import perfil from '../../assets/IMG_0179 (1).jpg';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from "../../components/Scene/Scene";

export default function Home() {


  return (
    <div className={Style.Container}>
      <section className={Style.content}>
        <div className={Style.model3d}>
          <Suspense fallback={null}>
            <Canvas shadows flat linear>
              <Scene />
              <OrbitControls />
            </Canvas>
          </Suspense>
        </div>
        <div className={Style.bubleDescription}>
          <span className={Style.description}>Hello, I'm a web developer based in Brazil!</span>
        </div>
        <div className={Style.contentPerfil}>
          <div>
            <h2 className={Style.name}>
              Anderson Vilela
            </h2>
            <p className={Style.description}>
              computer science student
            </p>
          </div>
          <img className={Style.perfil} src={perfil} />
        </div>
        <div className={Style.work}>
          <h4 className={Style.titlesub}>
            Work
          </h4>
          <p className={Style.description}>
            Anderson is a computer science student and web developer based in Brazil in the Northeast. and he loves creating things and developing them, the best part for him is being able to take all his creativity off paper to solve a problem. When he's not online he loves to go to the movies, he likes to eat, and he likes to go jogging on the beach. He is currently looking for his first job as a developer.
          </p>
        </div>
        <button className={Style.btnPortifolio} type="button">My portifolio</button>
        <div className={Style.work}>
          <h4 className={Style.titlesub}>
            Bio
          </h4>
          <p className={Style.description}>
            <strong style={{ marginRight: '10px' }}>2002</strong> Born in João Pessoa , Brazil.
          </p>
          <p className={Style.description}>
            <strong style={{ marginRight: '10px' }}>2022</strong> Started college in computer science at unipê.
          </p>
        </div>
        <div className={Style.work}>
          <h4 className={Style.titlesub}>I ♥</h4>
          <p className={Style.description}>Art, Music, Playing Games, 3d Modeling</p>
        </div>
        <div className={Style.work}>
          <h4 className={Style.meet}>Meet Me!</h4>

          <p className={Style.git}><AiFillGithub className={Style.icon} size={20} /><a href="https://github.com/AndersonVilela" target="_blank"> @AndersonVilela</a></p>
          <p className={Style.linkedn}><BsLinkedin className={Style.icon} size={20} /><a href="https://www.linkedin.com/in/anderson-lucas-239071232/" target="_blank"> @AndersonVilela</a></p>

        </div>
      </section >
    </div >
  );
}
