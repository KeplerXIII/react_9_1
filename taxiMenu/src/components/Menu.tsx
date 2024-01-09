import { NavLink } from 'react-router-dom'

export const Menu = () => {
  const menuItemClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'menu__item menu__item-active' : 'menu__item'

  return (
    <nav className='menu'>
      <NavLink className={menuItemClassName} to='/'>
        Главная
      </NavLink>
      <NavLink className={menuItemClassName} to='/drift'>
        Дрифт-такси
      </NavLink>
      <NavLink className={menuItemClassName} to='/timeattack'>
        Time Attack
      </NavLink>
      <NavLink className={menuItemClassName} to='/forza'>
        Forza Karting
      </NavLink>
    </nav>
  )
}
