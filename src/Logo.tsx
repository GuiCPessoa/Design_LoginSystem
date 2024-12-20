import { SVGAttributes } from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement> {}


export function Logo(props: LogoProps) {
  return (
    <svg
      width={106}
      height={102}
      viewBox="0 0 106 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.082 6.12l8.693 21.28c.667 1.653 2.133 2.693 3.893 2.827l22.934 1.706c3.786.267 6.853 2.694 8.026 6.294 1.174 3.6.107 7.36-2.8 9.813L84.255 62.893c-1.36 1.147-1.92 2.854-1.493 4.587l5.466 22.347c.907 3.68-.426 7.36-3.52 9.573-3.066 2.24-6.96 2.373-10.186.373l-21.974-13.6-21.973 13.6c-3.227 2-7.12 1.867-10.187-.373-3.066-2.24-4.4-5.893-3.52-9.573l5.467-22.347c.427-1.733-.133-3.44-1.493-4.587L3.268 48.04c-2.906-2.453-3.973-6.213-2.8-9.813 1.174-3.6 4.24-6.027 8.027-6.294l22.933-1.706c1.787-.134 3.227-1.174 3.894-2.827l8.693-21.28c1.44-3.52 4.667-5.68 8.48-5.68 3.92-.027 7.147 2.16 8.587 5.68z"
        fill="#4253F0"
      />
    </svg>
  )
}
