import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {children} = props
  return (
    <li>
      <div className="item-container">
        {children}
        <GrFormClose />
      </div>
    </li>
  )
}

export default Notification
