import * as React from 'react'
import { SVGProps, Ref, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    ref={ref}
    {...props}
  >
    <g fill="currentColor" clipPath="url(#a)">
      <path d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4V8Zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16v5Z" />
      <path d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM15 15h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const PaymentList = memo(ForwardRef)
export default PaymentList
