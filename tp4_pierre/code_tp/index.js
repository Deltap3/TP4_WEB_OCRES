import React from 'react';
import Nav from './containers/nav';
import User from './containers/user';
import Chat_botte from './img/chat_botte.jpg';
import Ptit_biscuit from './img/ptit_biscuit.jpg';
import Shrek from './img/shrek.jpg';
import './index.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    nom: 'Shrek',
                    prenom: 'Du marais',
                    naissance: '04/07/2001',
                    img: Shrek,
                    publi: 'La dernière publication',
                    like: 0
                },
                {
                    nom: 'Botté',
                    prenom: 'Chat',
                    naissance: '06/07/2001',
                    img: Chat_botte,
                    publi: 'La dernière publication',
                    like: 0
                },
                {
                    nom: 'Biscuit',
                    prenom: 'Ptit',
                    naissance: '09/07/2001',
                    img: Ptit_biscuit,
                    publi: 'La dernière publication',
                    like: 0
                },
            ],
            selectedUser: 'Shrek'
        }
    }

    changeUser(selectedUser) {
        this.state({ selectedUser });
    }
    foncLike(username) {
        const { users } = this.state
        const userIndex = users.findIndex((user) => user.name === username);
        let newUsers = users;
        newUsers[userIndex].like += 1;
        this.setState({ users: newUsers });
    }
    render() {
        const { users, selectedUser } = this.state;
        return (
            <div class='mainContent'>
                <Nav users={users} changeUser={this.changeUser.bind(this)} />
                <User user={users.find((user) => user.name === selectedUser)} foncLike={this.foncLike.bind(this)} />
            </div>
        )
    }
}