import EditPostForm from '../EditPostForm'
import SimpleMap from '../../SimpleMap'
import { Button, Item, Label } from 'semantic-ui-react'
import React, { Component } from 'react'

export default class ShowPost extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayEditPostForm: false
    }
  }

  toggleEditPostForm = () => {
    this.setState({
      displayEditPostForm: !this.state.displayEditPostForm
    })
  }

  selectLocation = (event) => {

  }

  render() {
    return (
      <React.Fragment>
        <Item key={ this.props.postToEdit.id }>
          <Item.Image
            size='small'
            src={ this.props.postToEdit.user.photo }
          />
          <Item.Content>
            <Item.Header verticalalign='middle'>
              { this.props.postToEdit.user.username }
            </Item.Header>
            <Item.Description>
              <p>{ this.props.postToEdit.description }</p>
            </Item.Description>
            <Item.Extra>
              {
                this.props.postToEdit.user.id === this.props.loggedInUserID
                &&
                  <React.Fragment>
                    <Button onClick={ this.props.deletePost }>DELETE</Button>
                    <Button onClick={ this.toggleEditPostForm }>EDIT</Button>
                  </React.Fragment>
              }
              <Label>{ this.props.postToEdit.activity }</Label>
            </Item.Extra>
          </Item.Content>
          <SimpleMap
            selectLocation={ this.selectLocation }
            lat={ this.props.postToEdit.lat }
            lng={ this.props.postToEdit.lng }
          />
        </Item>
        {
          this.state.displayEditPostForm
          &&
            <EditPostForm
              toggleEditPostForm={ this.toggleEditPostForm }
              displayEditPostForm={ this.state.displayEditPostForm }
              postToEdit={ this.props.postToEdit }
              updatePost={ this.props.updatePost }
            />
        }
      </React.Fragment>
    )
  }
}

  // <React.Fragment>
  //   <Card
  //     centered={ true }
  //     color={ 'blue' }
  //     key={ this.props.postToEdit.id }
  //     raised={ true }
  //   >
  //     <Image
  //       src={ this.props.postToEdit.user.photo }
  //       wrapped ui={ false }
  //     />
  //     <Card.Content>
  //       <Card.Header>
  //         { this.props.postToEdit.user.username }
  //       </Card.Header>
  //       <Card.Meta>
  //         { this.props.postToEdit.activity } at { this.props.postToEdit.location }
  //       </Card.Meta>
  //       <Card.Description>
  //         { this.props.postToEdit.description }
  //       </Card.Description>
  //       {
  //         this.props.postToEdit.user.id === this.props.loggedInUserID
  //         &&
  //           <React.Fragment>
  //             <Button onClick={ this.props.deletePost }>DELETE</Button>
  //             <Button onClick={ this.toggleEditPostForm }>EDIT</Button>
  //           </React.Fragment>
  //       }
  //     </Card.Content>
  //   </Card>
  //   {
  //     this.state.displayEditPostForm
  //     &&
  //       <EditPostForm
  //         toggleEditPostForm={ this.toggleEditPostForm }
  //         updatePost={ this.props.updatePost }
  //         displayEditPostForm={ this.state.displayEditPostForm }
  //         postToEdit={ this.props.postToEdit }
  //       />
  //   }
  // </React.Fragment>
