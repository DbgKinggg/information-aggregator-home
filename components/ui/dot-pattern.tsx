import { useId } from "react"

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
    size?: number
    radius?: number
    offsetX?: number
    offsetY?: number
}

function DotPattern({ size = 16, radius = 1, offsetX = 0, offsetY = 0, className }: DotPatternProps) {
    const id = useId()

    return (
        <svg className={className}>
            <defs>
                <pattern
                    id={id}
                    width={size}
                    height={size}
                    patternUnits="userSpaceOnUse"
                    patternContentUnits="userSpaceOnUse"
                    x={offsetX}
                    y={offsetY}>
                    <circle cx={size / 2} cy={size / 2} r={radius}></circle>
                </pattern>
            </defs>

            <rect width="100%" height="100%" strokeWidth="0" fill={`url(#${id})`}></rect>
        </svg>
    )
}

export default DotPattern