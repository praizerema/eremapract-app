import React, { useState, Component } from 'react';
import { Input, Menu, Image, Icon, Item } from 'semantic-ui-react';
import './topnav.css';
class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }
    // const [activeItem, setActiveItem] = useState({});
    // const handleItemClick = (e, { name }) => setActiveItem({ name });
  render() {
    return (
      <div>
      <div className="sbt-header--container">
            <Menu text>
                <Menu.Item header>
                    <div className={'logo-container'}>
                        <Image
                            src="https://seerbit.com/images/logo.png"
                            as="a"
                            href="https://seerbit.com/"
                            target="_blank"
                        />
                    </div>
                </Menu.Item>

             <Menu.Item
                        name='Test'
                        onPointerOver={this.handleMouseHover}
                        onPointer={this.handleMouseHover}
                        className={''}
                        href="/"
                    />


                <Menu.Menu position="right">
                    <div className="d-flex border-right menu-item">
                        <Menu.Item>
                            <Input
                                icon={'search'}
                                placeholder={'Search transactions, merchant, payment references'}
                                className={'nav-link'}
                            />
                        </Menu.Item>
                        <Menu.Item>
                            <Icon name={'bell outline'} />
                        </Menu.Item>
                    </div>

                    <div className='merchant-details--container'>
                        <Menu.Item>
                            <Item>
                                <Item.Content>
                                    <Item.Header as="a">

                                    </Item.Header>
                                    <Item.Meta>
                                        <div style={{fontSize: 11, color: '#bababa'}}>{'Yesterday'}</div>
                                    </Item.Meta>
                                </Item.Content>
                            </Item>
                        </Menu.Item>
                    </div>
                </Menu.Menu>
            </Menu>
        </div>
        {this.state.isHovering && <div style={{zIndex: "200",position: "fixed", top: "16vh", width: "40vw", height: "50vh", backgroundColor: "rgba(0, 0, 0, 0.7)"}}> <a href="#">Hovering right meow! 🐱</a></div>}
      </div>
    );
  }
}
export default TopHeader;

// import React, { useState } from 'react';
// import { Input, Menu, Image, Icon, Item } from 'semantic-ui-react';
// import './topnav.css';
// const TopHeader =(props)=> {
//     const [activeItem, setActiveItem] = useState(
//         {
//         isHovering: false,
        
//     });
//     this.handleMouseHover = this.handleMouseHover.bind(this);
//     const handleItemClick = (e, { name }) => setActiveItem({ name });
//     // const handleDrop = (e, { name }) => setActiveItem({ name });
//     handleMouseHover= () =>{
//         this.setState(this.toggleHoverState);
//       }
    
//       toggleHoverState = (state) =>{
//         return {
//           isHovering: !state.isHovering,
//         };
//       }
//     return (
//         <div className="sbt-header--container">
//             <Menu text>
//                 <Menu.Item header>
//                     <div className={'logo-container'}>
//                         <Image
//                             src="https://seerbit.com/images/logo.png"
//                             as="a"
//                             href="https://seerbit.com/"
//                             target="_blank"
//                         />
//                     </div>
//                 </Menu.Item>

//              <Menu.Item
//                         name='Test'
//                         onClick={handleItemClick}
//                         onMouseEnter={this.handleMouseHover}
//                         className={''}
//                         href="/"
//                     />


//                 <Menu.Menu position="right">
//                     <div className="d-flex border-right menu-item">
//                         <Menu.Item>
//                             <Input
//                                 icon={'search'}
//                                 placeholder={'Search transactions, merchant, payment references'}
//                                 className={'nav-link'}
//                             />
//                         </Menu.Item>
//                         <Menu.Item>
//                             <Icon name={'bell outline'} />
//                         </Menu.Item>
//                     </div>

//                     <div className='merchant-details--container'>
//                         <Menu.Item>
//                             <Item>
//                                 <Item.Content>
//                                     <Item.Header as="a">

//                                     </Item.Header>
//                                     <Item.Meta>
//                                         <div style={{fontSize: 11, color: '#bababa'}}>{'Yesterday'}</div>
//                                     </Item.Meta>
//                                 </Item.Content>
//                             </Item>
//                         </Menu.Item>
//                     </div>
//                 </Menu.Menu>
//             </Menu>
//             {this.state.isHovering && <div>Hovering right meow! 🐱</div>}
//         </div>
//     );
// }

// export default TopHeader;
