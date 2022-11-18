import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const images = [
        "/img/keagan-henman-Won79_9oUEk-unsplash.jpg",
        "/img/hannah-morgan-ycVFts5Ma4s-unsplash.jpg",
        "/img/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg",
    ];

    return (
        <Slide autoplay={true}>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Designer Wear</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Designer Wear</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Designer Wear</span>
                </div>
            </div>
        </Slide>
    );
};

export default Example;