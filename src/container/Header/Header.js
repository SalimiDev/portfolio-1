import React from 'react';
import './Header.scss';

import { motion } from 'framer-motion';

import { images } from '../../constants';

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};

const Header = () => {
    return (
        <div id='home' className='app__header app__flex'>
            <motion.div
                className='app__header-info'
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}>
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello,I am</p>
                            <h1 className='head-text'>Mehdi</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>Web Developer</p>
                        <p className='p-text'>Frontend</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='app__header-img'
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}>
                <img src={images.profile} alt='profile_bg' />

                <motion.img
                    className='overlay_circle'
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt='profile_circle'
                />
            </motion.div>

            <motion.div className='app__header-circles' variants={scaleVariants} whileInView={scaleVariants.whileInView}>
                {[images.flutter, images.redux, images.sass].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='profile_bg' />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Header;
