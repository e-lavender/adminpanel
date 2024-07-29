import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import { SVGIconType } from '@/shared/card-dropdown-menu/data'
import { Typography } from '@flyingtornado06/ui-kit'
import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

type MenuItemProps<T extends ElementType> = {
  as?: T
  asListItem?: boolean
  className?: string
  disabled?: boolean
  icon?: SVGIconType
  isSelected?: boolean
  isStyled?: boolean
  label?: string
} & ComponentPropsWithoutRef<T>

export const MenuItem = <T extends ElementType>({
  as,
  asListItem = true,
  children,
  disabled,
  href,
  icon,
  isSelected,
  isStyled = true,
  label,
  ...props
}: MenuItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof MenuItemProps<T>>) => {
  const SVGMenuIcon = icon || Fragment
  const Component = as || Link
  const Container = asListItem ? SideBarMenu.Item : Fragment

  return (
    <Container>
      <Component
        aria-disabled={disabled}
        aria-hidden={disabled}
        href={href || null}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}

        <SVGMenuIcon />
        <Typography>{label}</Typography>
      </Component>
    </Container>
  )
}
