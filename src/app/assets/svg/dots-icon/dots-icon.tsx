import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={24}
    ref={ref}
    width={24}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#a)'} fill={'currentColor'}>
      <path
        d={
          'M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM19 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'a'}>
        <path d={'M0 0h24v24H0z'} fill={'currentColor'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)

export { Memo as Dots }
