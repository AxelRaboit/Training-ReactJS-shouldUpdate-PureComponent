import React, { Component } from 'react';
import SimpleComponent from './SimpleComponent';
import PureComp from './PureComponent';

export class ParentComponent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            name: 'Axel'
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Je suis dans shouldComponentUpdate() décide TRUE');
        
        console.log(this.state.name);
        console.log(nextState);

        /* Lorsque l'on passe par cette methode, la premiere fois les choses sont updaté et rendu, mais si on recommence à update
        il va recharger la page avec les memes update apporté, chose qui ne sert à rien.
        Pour cela nous pouvons créer un PureComponent, il permettra alors que si l'update detecte que les datas sont les
        memes, alors il ne le fera pas. */
        
        return true;
    }

    changeFirstname = () => {
        this.setState({
            name: 'Remi'
        })
    }
    
    
    render() {

        console.log('%c RENDER() DU COMPOSANT PARENT', 'color: red;');

        return (
            <div>
                <SimpleComponent name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <button onClick={this.changeFirstname}>Changer le prénom</button>
            </div>
        )
    }
}

export default ParentComponent;
