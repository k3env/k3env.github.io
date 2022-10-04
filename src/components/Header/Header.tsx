import { IMenuItem } from "models";
import menuData from "../../assets/menu-data.json";
import './Header.scss'
import { useState } from "react";
import clsx from 'clsx'
import { BurgerButton, MenuItem } from "components";

export function Header() {
  const menuItems: IMenuItem[] = (menuData as IMenuItem[]).filter(v => v.visible);
  const [opened, toggle] = useState<boolean>(false)

  const handleClick = () => toggle(false)

  return (
    <>
      <div id="header">
        <BurgerButton id="menu-button" toggle={toggle} opened={opened} />
        <div className="title">
          @K3env's personal page
        </div>
      </div>
      <div id="menu" className={clsx({ 'hidden': !opened })}>
        {menuItems.map((v) => <MenuItem key={v.key} item={v} onClick={handleClick} />)}
      </div>
    </>
  )
}