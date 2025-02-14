import React from 'react'

import { ACTION_TYPES } from '@/app/constants/enum/enums'
import { HomeMenuIcon } from '@flyingtornado06/ui-kit/dist/assets'

export const MENU: DropdownMenuType = [
  {
    action: 'delete',
    icon: (
      <svg
        fill={'none'}
        height={'24'}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#clip0_376_8519)'}>
          <path
            d={
              'M21 6H17C16.7348 6 16.4804 6.10536 16.2929 6.29289C16.1054 6.48043 16 6.73478 16 7C16 7.26522 16.1054 7.51957 16.2929 7.70711C16.4804 7.89464 16.7348 8 17 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6Z'
            }
            fill={'white'}
          />
          <path
            d={
              'M10 11C10.7911 11 11.5645 10.7654 12.2223 10.3259C12.8801 9.88635 13.3928 9.26164 13.6955 8.53074C13.9983 7.79983 14.0775 6.99556 13.9231 6.21964C13.7688 5.44372 13.3878 4.73098 12.8284 4.17157C12.269 3.61216 11.5563 3.2312 10.7804 3.07686C10.0044 2.92252 9.20017 3.00173 8.46927 3.30448C7.73836 3.60723 7.11365 4.11992 6.67412 4.77772C6.2346 5.43552 6 6.20888 6 7C6 8.06087 6.42143 9.07828 7.17157 9.82843C7.92172 10.5786 8.93913 11 10 11ZM10 5C10.3956 5 10.7822 5.1173 11.1111 5.33706C11.44 5.55683 11.6964 5.86918 11.8478 6.23463C11.9991 6.60009 12.0387 7.00222 11.9616 7.39018C11.8844 7.77814 11.6939 8.13451 11.4142 8.41422C11.1345 8.69392 10.7781 8.8844 10.3902 8.96157C10.0022 9.03874 9.60009 8.99914 9.23463 8.84776C8.86918 8.69639 8.55682 8.44004 8.33706 8.11114C8.1173 7.78224 8 7.39556 8 7C8 6.46957 8.21071 5.96086 8.58579 5.58579C8.96086 5.21072 9.46957 5 10 5Z'
            }
            fill={'white'}
          />
          <path
            d={
              'M10 13C8.14348 13 6.36301 13.7375 5.05025 15.0503C3.7375 16.363 3 18.1435 3 20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21C4.26522 21 4.51957 20.8946 4.70711 20.7071C4.89464 20.5196 5 20.2652 5 20C5 18.6739 5.52678 17.4021 6.46447 16.4645C7.40215 15.5268 8.67392 15 10 15C11.3261 15 12.5979 15.5268 13.5355 16.4645C14.4732 17.4021 15 18.6739 15 20C15 20.2652 15.1054 20.5196 15.2929 20.7071C15.4804 20.8946 15.7348 21 16 21C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20C17 18.1435 16.2625 16.363 14.9497 15.0503C13.637 13.7375 11.8565 13 10 13Z'
            }
            fill={'white'}
          />
        </g>
        <defs>
          <clipPath id={'clip0_376_8519'}>
            <rect fill={'white'} height={'24'} width={'24'} />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Delete User',
  },
  {
    action: 'ban',
    icon: (
      <svg
        fill={'none'}
        height={'24'}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#clip0_376_8522)'}>
          <path
            d={
              'M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z'
            }
            fill={'white'}
          />
          <line
            stroke={'white'}
            strokeWidth={'2.3'}
            x1={'7.04314'}
            x2={'17.0431'}
            y1={'19.3621'}
            y2={'4.3621'}
          />
        </g>
        <defs>
          <clipPath id={'clip0_376_8522'}>
            <rect fill={'white'} height={'24'} width={'24'} />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Ban in the system',
  },
  {
    action: 'unban',
    icon: (
      <svg
        fill={'none'}
        height={'24'}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#clip0_376_8522)'}>
          <path
            d={
              'M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z'
            }
            fill={'white'}
          />
          <line
            stroke={'white'}
            strokeWidth={'2.3'}
            x1={'7.04314'}
            x2={'17.0431'}
            y1={'19.3621'}
            y2={'4.3621'}
          />
        </g>
        <defs>
          <clipPath id={'clip0_376_8522'}>
            <rect fill={'white'} height={'24'} width={'24'} />
          </clipPath>
        </defs>
      </svg>
    ),
    label: 'Unban in the system',
  },
  {
    action: 'info',
    icon: (
      <svg
        fill={'none'}
        height={'24'}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={
            'M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z'
          }
          fill={'white'}
        />
        <path
          d={
            'M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z'
          }
          fill={'white'}
        />
      </svg>
    ),
    label: 'More Information',
  },
]
export type UserAllowActionType = keyof Pick<
  typeof ACTION_TYPES,
  'ban' | 'delete' | 'info' | 'unban'
>
export type DropdownMenuItemType = {
  action: UserAllowActionType
  icon: any
  label: string
}
export type DropdownMenuType = Array<DropdownMenuItemType>

export type SVGIconType = typeof HomeMenuIcon
