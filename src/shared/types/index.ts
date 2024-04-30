import React from 'react'

export type IconType = React.MemoExoticComponent<
  React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
>
