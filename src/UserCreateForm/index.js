import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Input, Label, Modal } from 'semantic-ui-react'

export default class UserCreateForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createUser(this.state)
    this.props.toggleUserCreateForm()

    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <Modal
        closeIcon
        size='mini'
        as={Form}
        open={this.props.displayUserCreateForm}
        onClose={this.props.toggleUserCreateForm}
        onSubmit={this.handleSubmit}
      >
        <Modal.Header>Create New User</Modal.Header>
        <Modal.Content image>
          <Grid>
            <Grid.Column>
              <Image
                fluid
                size="medium"
                src="https://t4.ftcdn.net/jpg/02/11/73/73/360_F_211737333_nxBcIVfrybNy6nRiewn9Ynh20UJQCfSp.jpg"
              />
              <Modal.Description>
                <Form.Input
                  fluid
                  required
                  type="text"
                  name="username"
                  placeholder="Enter a Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  required
                  type="text"
                  name="email"
                  placeholder="Enter an Email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  required
                  type="password"
                  name="password"
                  placeholder="Enter a Password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Modal.Description>
            </Grid.Column>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button
            fluid
            positive
            content="Create User"
            type="Submit"
          />
        </Modal.Actions>
      </Modal>
    )
  }
}
