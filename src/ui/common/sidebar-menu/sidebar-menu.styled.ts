import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import { styled } from 'styled-components'
export const SidebarMenuStyles = {
  Container: styled(SideBarMenu.Root)`
    height: calc(100lvh - 6rem);
    padding: 7.2rem 0 3.6rem 6rem;

    background-color: var(--bg-color-primary);
    border: 1px solid transparent;
    border-right-color: #333;

    transition: 0.6s all ease-in;
  `,
  Menu: styled(SideBarMenu.List)`
    display: inline-flex;
    flex-direction: column;
    li {
      margin-bottom: 2.6rem;
      transition: 0.6s all ease-in;
    }
  `,
}
