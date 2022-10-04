import './BurgerButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faBars } from '@fortawesome/free-solid-svg-icons'

type BurgerButtonProps = {
  id: string
  toggle: (state: boolean) => void,
  opened: boolean
}

export function BurgerButton(props: BurgerButtonProps) {
  const handleClick = () => {
    props.toggle(!props.opened)
  }
  return (
    <FontAwesomeIcon id={props.id} icon={props.opened ? faX : faBars} onClick={handleClick} size='2xl' className='icon' />
  )
}