import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'
import './index.css'
import Notification from '../Notification'

class Alert extends Component {
  render() {
    return (
      <ul className="alert-container ">
        <h1>Alert Notifications</h1>
        <Notification>
          <AiFillCheckCircle className="success" />
          <div className="item-details">
            <h1 className="heading success">Success</h1>
            <p className="description">
              You can access all the files in the folder
            </p>
          </div>
        </Notification>
        <Notification>
          <RiErrorWarningFill className="error" />
          <div className="item-details">
            <h1 className="heading error">Error</h1>
            <p className="description">
              Sorry, you are not authorized to have access to delete the file
            </p>
          </div>
        </Notification>
        <Notification>
          <MdWarning className="warning" />
          <div className="item-details">
            <h1 className="heading warning">Warning</h1>
            <p className="description">
              Viewers of this file can see comments and suggestions
            </p>
          </div>
        </Notification>
        <Notification>
          <MdInfo className="info" />
          <div className="item-details">
            <h1 className="heading info">Info</h1>
            <p className="description">
              Anyone on the internet can view these files
            </p>
          </div>
        </Notification>
      </ul>
    )
  }
}

export default Alert
