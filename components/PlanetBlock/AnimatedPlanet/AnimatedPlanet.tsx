/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import CameraControls from "camera-controls";
import ThreeGlobe from "three-globe";
import backSrc from "/public/images/earth_opt_dark_06.png";

// @ts-ignore
import countries from "/assests/countries.json";

const AnimatedPlanet = () => {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (globeRef != null && globeRef.current != null) {
      let clock = new THREE.Clock();
      const Globe = new ThreeGlobe()
        .globeImageUrl("images/earth_opt_dark_06.png")
        .atmosphereColor("#000000")
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.3)
        .atmosphereColor("#fff")
        .hexPolygonColor(() => `#6E6E6E`);

      setTimeout(() => Globe.polygonAltitude(() => Math.random()), 4000);

      // Setup renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      globeRef.current.appendChild(renderer.domElement);

      // Setup scene
      const scene = new THREE.Scene();
      scene.add(Globe);
      scene.add(new THREE.AmbientLight(0xbbbbbb));
      scene.add(new THREE.DirectionalLight(0xffffff, 0.6));

      // Setup camera
      const camera = new THREE.PerspectiveCamera();
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      camera.position.z = 500;

      // Add camera controls
      // const tbControls = new THREE.TrackballControls(
      //   camera,
      //   renderer.domElement
      // );
      // tbControls.minDistance = 101;
      // tbControls.rotateSpeed = 5;
      // tbControls.zoomSpeed = 0.8;
      CameraControls.install({ THREE: THREE });
      const controls = new CameraControls(camera, renderer.domElement);

      controls.truckSpeed = 0;
      controls.boundaryFriction = 1000;
      controls.minZoom = 0;
      controls.maxZoom = 0;
      controls.dollySpeed = 0.8;
      controls.minDistance = 400;
      controls.maxDistance = 400;
      controls.minPolarAngle = Math.PI / 2;
      controls.maxPolarAngle = Math.PI / 2;

      controls.setLookAt(383, 2, 112, 0, 0, 0, false);
      // Kick-off renderer
      (function animate() {
        Globe.children[0].rotation.y -= 0.005;
        controls.update(clock.getDelta());
        renderer.render(scene, camera);
        renderer.setClearColor("#0b0b0c");
        requestAnimationFrame(animate);
      })();
    }
  }, [globeRef]);

  return (
    <div
      className="globe js-globe"
      id="globe"
      ref={globeRef}
      css={css`
        position: relative;
      `}
    />
  );
};

export default AnimatedPlanet;
