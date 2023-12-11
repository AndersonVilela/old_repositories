import React from "react";
import Style from './style.module.css';
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from "../../components/Scene/Scene";
import Project from "../../components/Project";



export default function Projects() {



  return (
    <section className={Style.container}>
      <div className={Style.model3d}>
        <Suspense fallback={null}>
          <Canvas shadows flat linear>
            <Scene />
            <OrbitControls />
          </Canvas>
        </Suspense>
      </div>
      <div className={Style.content}>
        <div className={Style.contentTitle}>
          <h4 className={Style.title}>Popular</h4>
        </div>
        <div className={Style.listagem}>
          <Project />
        </div>
      </div>
    </section>
  )
}
