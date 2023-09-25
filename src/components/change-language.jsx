import { usFlag } from "@assets/images/en.png";

const ChangeLanguage = () => {
  return (
    <div className='dropdown'>
      <a className='nav-flag dropdown-toggle'>
        <img src={usFlag} alt="English" />
      </a>
    </div>
  )
}

export default ChangeLanguage
