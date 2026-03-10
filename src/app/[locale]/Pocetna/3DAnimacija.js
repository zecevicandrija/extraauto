"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import styles from './3DAnimacija.module.css';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className={styles.loaderContainer}>
            <div className={styles.spinner}></div>
        </div>
    )
});

const Animacija3D = () => {
    return (
        <div className={styles.splineWrapper}>
            <div className={styles.splineContainer}>
                <Spline
                    style={{ width: '100%', height: '100%' }}
                    scene="https://prod.spline.design/0tzl2Rtx7GJVEUML/scene.splinecode"
                    onLoad={() => {
                        console.log('3D Animation Loaded');
                    }}
                />
            </div>

            {/* Add gradient overlays to blend the 3D scene edges and make it premium */}
            <div className={styles.splineOverlayTop}></div>
            <div className={styles.splineOverlayBottom}></div>
            <div className={styles.splineOverlayLeft}></div>
            <div className={styles.splineOverlayRight}></div>
        </div>
    );
};

export default Animacija3D;

