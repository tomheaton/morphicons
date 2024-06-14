import React from "react";

const icons = {
  sun: {
    // NOTE: testing icon curtesy of Bootstrap Icons (https://icons.getbootstrap.com/icons/sun/)
    default: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`,
    square: "<svg>...</svg>",
    circle: "<svg>...</svg>",
  },
  moon: {
    default: "<svg>...</svg>",
    triangle: "<svg>...</svg>",
  },
} as const;

type IconNames = keyof typeof icons;
type IconVariants<Name extends IconNames> = keyof (typeof icons)[Name];

interface MorphIconProps<Name extends IconNames> {
  name: Name;
  variant?: IconVariants<Name>;
  fill?: boolean;
  color?: string;
  size?: number;
}

export default function MorphIcon<Name extends IconNames>({
  name,
  variant = "default" as IconVariants<Name>,
  fill = false,
  color = "black",
  size = 24,
}: MorphIconProps<Name>) {
  const icon = icons[name]?.[variant] || icons[name]?.default;

  if (!icon) {
    return null;
  }

  const fillStyle = fill ? { fill: color } : { stroke: color };

  return (
    <div
      style={{ width: size, height: size, ...fillStyle }}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  );
}
