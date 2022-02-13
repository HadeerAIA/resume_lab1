import React from 'react';
import Button from 'react-bootstrap/Button'
import './header.css'

class Header extends React.Component {
  render() {
    return(
      <>
      <div>
        <div className='cover'>
          <div className='bottun'>
            <h1>Hadeer Elfiky</h1>
            <Button variant="secondary">Contact me</Button>{' '}
            <Button variant="secondary">More</Button>{' '}
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default Header;