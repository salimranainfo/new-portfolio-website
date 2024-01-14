import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
  theme: {
    extend: {
      colors: {
        '1F1F21': '#1F1F21',
        '4E4E4E': '#4E4E4E',
        '6C63FF': '#6C63FF',
        '4581F6': '#4581F6',
        '9C83FF': '#9C83FF',
        E54F26: '#E54F26',
      },
    },
  },
}
