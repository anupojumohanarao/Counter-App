import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, surname} = this.props
    return (
      <h1>
        Hello, {name} {surname}
      </h1>
    )
  }
}

export default Welcome
