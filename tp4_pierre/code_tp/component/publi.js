import React from 'react';
import Button from '../components/button';
import '../index.css';

export default class Publi extends React.Component {
    render() {
        const { text, likes, foncLike } = this.props;
        return (
            <div class='publi'>
                <div>
                    {text}
                </div>
                <div>
                    <Button text={'Youpi !'} onClick={foncLike} />
                    <p>Likes: {likes}</p>
                </div>
            </div>
        )
    }
}