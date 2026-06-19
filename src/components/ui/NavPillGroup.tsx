import { NAV_PILL_ITEMS, NavPillLink } from './NavPillLink'

interface NavPillGroupProps {
  overlay?: boolean
}

export function NavPillGroup({ overlay = false }: NavPillGroupProps) {
  return (
    <div className="nav-pill-group flex flex-wrap items-center justify-center gap-2">
      {NAV_PILL_ITEMS.map((item) => (
        <NavPillLink
          key={item.to}
          to={item.to}
          variant={item.variant}
          overlay={overlay}
        >
          {item.label}
        </NavPillLink>
      ))}
    </div>
  )
}
