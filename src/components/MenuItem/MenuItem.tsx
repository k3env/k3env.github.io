import clsx from "clsx";
import { IMenuItem } from "models";
import './MenuItem.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Link, useMatch } from "react-router-dom";

export function MenuItem(props: { item: IMenuItem, onClick: (key: string) => void }) {
  const match = useMatch(props.item.link) !== null
  if (match)
    document.title = `K3Env - ${props.item.title}`
  const classes = clsx("menu-item", { 'active': match })
  const externalIcon = <FontAwesomeIcon transform="shrink-6 up-3 right-3" icon={faArrowUpRightFromSquare} />
  if (props.item.external)
    return <a href={props.item.link} className="menu-item" target={"_blank"} onClick={() => props.onClick(props.item.key)}>{props.item.title}{externalIcon}</a>
  return <Link to={props.item.link} className={classes} onClick={() => props.onClick(props.item.key)}>{props.item.title}</Link>
}