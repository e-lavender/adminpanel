import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import { IconType } from '@/shared/types'
import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'

import { MenuItemStyles } from './menu-item.styled'

type MenuItemProps<T extends ElementType = typeof Link> = {
  as?: T
  asListItem?: boolean
  className?: string
  disabled?: boolean
  icon?: IconType
  isSelected?: boolean
  isStyled?: boolean
  label?: string
} & ComponentPropsWithoutRef<T>

export const MenuItem = <T extends ElementType = typeof Link>({
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
  const Container = asListItem ? SideBarMenu.Item : Fragment
  const { LabelStyled, LinkComponent } = MenuItemStyles
  const SVGMenuIcon = icon || Fragment

  return (
    <Container>
      <LinkComponent
        aria-disabled={disabled}
        aria-hidden={disabled}
        href={href || null}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}

        <SVGMenuIcon />
        <LabelStyled>{label}</LabelStyled>
      </LinkComponent>
    </Container>
  )
}
