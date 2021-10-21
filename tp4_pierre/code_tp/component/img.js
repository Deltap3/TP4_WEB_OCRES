import '../index.css';
import React from 'react';


export default class Image extends React.Component {
    render() {
        const { src } = this.props;
        return (
            <img class='img' src={src} alt='' />
        );
    }
}

