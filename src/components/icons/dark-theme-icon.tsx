import { ComponentProps } from "react";

export function DarkThemeIcon(props: ComponentProps<'svg'>) {
  return (
    <svg width={16} height={16} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 006.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 000 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 00-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 000-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 002.157 0z"
        fill="#828FA3"
      />
    </svg>
  )
}