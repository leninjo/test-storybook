import React from 'react';
import PropTypes from 'prop-types';
import './headline.css';

/**
 * Titulares para mostrar textos relevantes
 */
export const HeadLine = ({ text, size, color, ...props }) => {
    return <span className={`w4y-headline--${size}`} style={color && { color }}>
        {text}
    </span>
}

HeadLine.propTypes = {
    /**
     * Texto a mostrar
     */
    text: PropTypes.string.isRequired,
    /**
     * Tamaño del texto
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']).isRequired,
    /**
     * Color del texto
     */
    color: PropTypes.string,
};

HeadLine.defaultProps = {
    text: 'Soy un titular',
    size: 'medium',
    color: null,
};
