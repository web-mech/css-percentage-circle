import './demo.css'
import '../scss/circle.scss'
import defaultDemo from './default.html'
import darkDemo from './dark.html'

export default {
  title: 'CSS Percentage Circles',
}

export const Micro = () => `<div class="c100 p25 micro">
      <span>25%</span>
      <div class="slice">
          <div class="bar"></div>
          <div class="fill"></div>
      </div>
  </div>
`

export const Small = () => `<div class="c100 p25 small">
      <span>25%</span>
      <div class="slice">
          <div class="bar"></div>
          <div class="fill"></div>
      </div>
  </div>
`

export const Medium = () => `<div class="c100 p25 medium">
      <span>25%</span>
      <div class="slice">
          <div class="bar"></div>
          <div class="fill"></div>
      </div>
  </div>
`

export const Large = () => `<div class="c100 p50 green large">
      <span>50%</span>
      <div class="slice">
          <div class="bar"></div>
          <div class="fill"></div>
      </div>
  </div>
`

export const Huge = () => `<div class="c100 p75 huge orange">
      <span>75%</span>
      <div class="slice">
          <div class="bar"></div>
          <div class="fill"></div>
      </div>
  </div>
`

export const DefaultDemo = () => defaultDemo

export const DarkDemo = () => darkDemo
