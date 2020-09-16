import React, { useState } from 'react';
import './GallerySlider.scss';

function GallerySlider({ gallery }) {
    const [active, setActive] = useState(0);

    const indicators = gallery.map((src, key) => {
        //prettier-ignore
        const className = `slider__indicators__item ${key === active ? 'active' : ''}`;
        const onClick = () => setActive(key);
        const alt = 'preview-' + (key + 1);

        return (
            <div {...{ className, onClick, key }}>
                <img {...{ src, alt }} />
            </div>
        );
    });

    const src = gallery[active];
    const alt = 'preview-product-' + (active + 1);

    return (
        <div className="slider">
            <div className="slider__indicators">
                {/* \n */}
                {indicators}
            </div>
            <div className="slider__preview">
                <img {...{ src, alt }} />
            </div>
        </div>
    );
}

export default GallerySlider;
