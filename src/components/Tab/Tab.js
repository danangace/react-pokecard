import './Tab.css'

function Tab ({ tab, setActive }) {

  const tabActive = () => {
    setActive(tab.title)
  }

  return (
    <div className="tab-wrap-outside">
      <div className="tab-wrap" style={tab.style} onClick={tabActive}>
        <p className="text-lg tab-title">{tab.title}</p>
      </div>
      { tab.active && <div className="active-line"></div> }
    </div>
  )
}


export default Tab