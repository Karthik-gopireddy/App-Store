/* eslint-disable array-callback-return */
// Write your code here
import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {imageUrl, appName} = eachapp

  return (
    <li className="list">
      <img className="images" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
