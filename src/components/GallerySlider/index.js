import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './GallerySlider.scss';

function GallerySlider({ gallery }) {
    const matches = useMediaQuery('(max-width: 500px)');
    const [active, setActive] = useState(0);

    const indicators = gallery.map((src, key) => {
        const className = [
            'slider__indicators__item',
            key === active ? 'active' : '',
            key + 1 === gallery.length ? 'last-item' : '',
        ].join(' ');
        const onClick = () => setActive(key);
        const alt = 'preview-' + (key + 1);
        const style = matches
            ? { width: `calc(${100 / gallery.length}% - 10px)` }
            : undefined;

        return (
            <div {...{ className, style, onClick, key }}>
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
