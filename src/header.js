import { Link } from 'react-router-dom';
import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';

class Header extends React.Component{
    state = { activeItem: 'Home' }

    updateActiveItem = (e, {name}) => this.setState({activeItem: name})

    render(){
        const { activeItem } = this.state;

        return (
            <Menu pointing secondary>
                <Menu.Item as={Link} active={ activeItem === "Home" } to="/" name="Home" onClick={this.updateActiveItem} />
                <Menu.Item as={Link} active={ activeItem === "About" } to="/about" name="About" onClick={this.updateActiveItem} />
            </Menu>
        )
    }
}
export default Header;