import { usFlag } from "@assets/images/us.png";
import { faFlag } from "@assets/images/fa.png";
import { useState } from 'react'


const ChangeLanguage = () => {

  const [show, setShow] = useState(false)
  return (
    <div className='dropdown' style={{backgroundColor: "red"}}>
      <a className='nav-flag dropdown-toggle' onClick={() => setShow(true)}>
        <img src={usFlag} alt="English" />
      </a>
      <div className={`dropdown-menu dropdown-menu-end show ${show ? 'show' : undefined}`}>
        <a className="dropdown-item fw-bolder" style={{textAlign: "right"}}>
          <img src={faFlag} width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>
        <a className="dropdown-item fw-bolder" style={{textAlign: "right"}}>
          <img src={usFlag} width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  )
}

export default ChangeLanguage
