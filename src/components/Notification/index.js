import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li className="item-container">
      {children[0]}
      <div className="item-details">
        {children[1]}
        {children[2]}
      </div>
      <GrFormClose />
    </li>
  )
}

export default Notification
