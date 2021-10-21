import React from 'react';
import Button from '../components/button';
import Img from '../components/img';
import Publi from '../components/publi';
import '../index.css';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = { backgroundColor: 'white' }
    }
    changeStyle() {
        this.setState((prevState) => ({ backgroundColor: prevState.backgroundColor === 'white' ? 'black' : 'white' }))
    }
    render() {
        const { user, fonclike } = this.props;
        const { backgroundColor } = this.state;
        return (
            <div class='user'>
                <div class='profile' style={{ background: backgroundColor, color: backgroundColor === 'white' ? 'black' : 'white' }}>
                    <Img src={user.picture} />
                    <div class='profileInfos'>
                        <div class='profileInfo'>
                            {`Prénom: ${user.prenom}`}
                        </div>
                        <div class='profileInfo'>
                            {`Nom: ${user.nom}`}
                        </div>
                        <div class='profileInfo'>
                            {`Date de naissance: ${user.naissance}`}
                        </div>
                    </div>
                    <Button text={'Changer de style'} onClick={this.changeStyle.bind(this)} style={{ alignSelf: 'flex-end' }} />
                </div>
                <Publi text={user.publi} likes={user.like} foncLike={() => fonclike(user.name)} />
            </div>
        )
    }
}
