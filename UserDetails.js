import React from 'react'
import ReactDOM from 'react-dom'
import Avatar from 'react-avatar-edit'


export default  class UserDetails extends React.Component {

  constructor(props) {
    super(props)
    const src = 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    this.state = {
      preview: null,
      
    }
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
  }
  
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }
  
  render () {
    return (
      <div>
        <Avatar
          width={390}
          height={295}
          onCrop={this.onCrop}
          onClose={this.onClose}
          src={this.state.src}
        />
        <img src={this.state.preview} alt="Preview" />
      </div>
    )
  }
}

ReactDOM.render(<UserDetails /> , document.getElementById('root'))