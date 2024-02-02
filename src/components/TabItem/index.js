// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updatetabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isTrue = isActive ? 'active-tab' : ''

  const onclicktablist = () => {
    updatetabId(tabId)
  }

  return (
    <li className="tablistcontainer" onClick={onclicktablist}>
      <button type="submit" className={`tab-button ${isTrue} tablist`}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
