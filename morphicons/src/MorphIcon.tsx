import React from "react";

const icons = {
  // Sun icon courtesy of Bootstrap Icons (https://icons.getbootstrap.com/icons/sun/)
  sun: {
    default: `<path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>`,
    filled: `<path d="M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8"/>`,
  },
  // Moon icon courtesy of Bootstrap Icons (https://icons.getbootstrap.com/icons/moon/)
  moon: {
    default: `<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>`,
    filled: `<path d="M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>`,
  },
} as const;

type IconNames = keyof typeof icons;
type IconVariants = "default" | "square" | "circle";
type DesignVariants = "default" | "filled";

const applyVariant = (
  icon: string,
  variant: IconVariants,
  size: number,
  color: string,
  fill: boolean,
): string => {
  const viewBoxSize = 16; // Assuming the base SVG viewBox is 16x16
  const scale = size / viewBoxSize;

  switch (variant) {
    case "circle":
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
          <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" ${fill ? `fill="${color}"` : `stroke="${color}"`} />
          <g transform="translate(${(size - viewBoxSize) / 2}, ${(size - viewBoxSize) / 2}) scale(${scale})" fill="${fill ? color : "none"}" ${!fill ? `stroke="${color}"` : ""}>
            ${icon}
          </g>
        </svg>
      `;
    case "square":
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
          <rect width="${size}" height="${size}" ${fill ? `fill="${color}"` : `stroke="${color}"`} />
          <g transform="translate(${(size - viewBoxSize) / 2}, ${(size - viewBoxSize) / 2}) scale(${scale})" fill="${fill ? color : "none"}" ${!fill ? `stroke="${color}"` : ""}>
            ${icon}
          </g>
        </svg>
      `;
    default:
      return `
        <svg width="${size}" height="${size}" viewBox="0 0 ${viewBoxSize} ${viewBoxSize}" xmlns="http://www.w3.org/2000/svg" fill="${fill ? color : "none"}" ${!fill ? `stroke="${color}"` : ""}>
          ${icon}
        </svg>
      `;
  }
};

export default function MorphIcon({
  name,
  variant = "default",
  designVariant = "default",
  fill = false,
  color = "black",
  size = 24,
}: {
  name: IconNames;
  variant?: IconVariants;
  designVariant?: DesignVariants;
  fill?: boolean;
  color?: string;
  size?: number;
}) {
  const iconPath = icons[name][designVariant];

  if (!iconPath) {
    return null;
  }

  const iconWithVariant = applyVariant(iconPath, variant, size, color, fill);

  return (
    <div
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: iconWithVariant }}
    />
  );
}
