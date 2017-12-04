import * as React from 'react'

const FacebookIcon = (
  <svg
    height="30px"
    viewBox="0 0 67 67"
    width="30px"
    style={{ enableBackground: 'new 0 0 67 67' }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.765,50.32h6.744V33.998h4.499l0.596-5.624h-5.095  l0.007-2.816c0-1.466,0.14-2.253,2.244-2.253h2.812V17.68h-4.5c-5.405,0-7.307,2.729-7.307,7.317v3.377h-3.369v5.625h3.369V50.32z   M34,64C17.432,64,4,50.568,4,34C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z"
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        fill: '#3A589B'
      }}
    />
  </svg>
)
const TwitterIcon = (
  <svg height="30px" style={{ enableBackground: 'new 0 0 67 67' }} viewBox="0 0 67 67" width="30px" xmlns="http://www.w3.org/2000/svg">
    <path d="M38.167,22.283c-2.619,0.953-4.274,3.411-4.086,6.101  l0.063,1.038l-1.048-0.127c-3.813-0.487-7.145-2.139-9.974-4.915l-1.383-1.377l-0.356,1.017c-0.754,2.267-0.272,4.661,1.299,6.271  c0.838,0.89,0.649,1.017-0.796,0.487c-0.503-0.169-0.943-0.296-0.985-0.233c-0.146,0.149,0.356,2.076,0.754,2.839  c0.545,1.06,1.655,2.097,2.871,2.712l1.027,0.487l-1.215,0.021c-1.173,0-1.215,0.021-1.089,0.467  c0.419,1.377,2.074,2.839,3.918,3.475l1.299,0.444l-1.131,0.678c-1.676,0.976-3.646,1.526-5.616,1.567  C20.775,43.256,20,43.341,20,43.405c0,0.211,2.557,1.397,4.044,1.864c4.463,1.377,9.765,0.783,13.746-1.568  c2.829-1.674,5.657-5,6.978-8.221c0.713-1.715,1.425-4.851,1.425-6.354c0-0.975,0.063-1.102,1.236-2.267  c0.692-0.678,1.341-1.419,1.467-1.631c0.21-0.403,0.188-0.403-0.88-0.043c-1.781,0.636-2.033,0.551-1.152-0.402  c0.649-0.678,1.425-1.907,1.425-2.267c0-0.063-0.314,0.042-0.671,0.233c-0.377,0.212-1.215,0.53-1.844,0.72l-1.131,0.361l-1.027-0.7  c-0.566-0.381-1.361-0.805-1.781-0.932C40.766,21.902,39.131,21.944,38.167,22.283z M34,64C17.432,64,4,50.568,4,34  C4,17.431,17.432,4,34,4s30,13.431,30,30C64,50.568,50.568,64,34,64z"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      fill: '#598DCA'
    }}/>
  </svg>
)
const GooglePlusIcon = (
  <svg height="30px" style={{ enableBackground: 'new 0 0 56.6934 56.6934' }} viewBox="0 0 56.6934 56.6934" width="30px" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.0681,4.1549c-13.6006,0-24.625,11.0234-24.625,24.623s11.0244,24.625,24.625,24.625s24.625-11.0254,24.625-24.625  S41.6687,4.1549,28.0681,4.1549z M30.399,35.2503c-2.5519,3.5903-7.6752,4.6385-11.6721,3.1005  c-4.0115-1.5281-6.8524-5.765-6.5144-10.085c0.0882-5.285,4.947-9.9136,10.232-9.7373c2.5323-0.1176,4.9128,0.9845,6.8524,2.5323  c-0.8278,0.9404-1.6849,1.8466-2.6008,2.6939c-2.3315-1.6115-5.6475-2.0719-7.9789-0.2106  c-3.3356,2.307-3.4874,7.7536-0.2792,10.2369c3.1201,2.8311,9.0173,1.4253,9.8794-2.9095c-1.9543-0.0294-3.9136,0-5.8679-0.0637  c-0.0049-1.1657-0.0098-2.3315-0.0049-3.4972c3.267-0.0098,6.534-0.0147,9.8059,0.0098  C32.4464,30.0633,32.0839,32.9826,30.399,35.2503z M44.4857,30.2299c-0.9747,0.0098-1.9494,0.0146-2.929,0.0245  c-0.0098,0.9796-0.0147,1.9543-0.0196,2.929c-0.9747,0-1.9445,0-2.9193,0c-0.0098-0.9747-0.0098-1.9494-0.0196-2.9241  c-0.9747-0.0098-1.9543-0.0196-2.929-0.0294c0-0.9698,0-1.9396,0-2.9144c0.9747-0.0098,1.9494-0.0146,2.929-0.0196  c0.0049-0.9796,0.0147-1.9543,0.0245-2.929c0.9698,0,1.9396,0,2.9143,0c0.0049,0.9747,0.0098,1.9543,0.0196,2.929  c0.9747,0.0098,1.9543,0.0098,2.929,0.0196C44.4857,28.2854,44.4857,29.26,44.4857,30.2299z"
    style={{
      fillRule: 'evenodd',
      clipRule: 'evenodd',
      fill: '#d62d20'
    }}
    />
  </svg>
)
const WhatsAppIcon = (
  <svg height="30px" viewBox="0 0 60 60" width="30px" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
      <g id="whatsapp">
        <path d="M30,60 C46.5685433,60 60,46.5685433 60,30 C60,13.4314567 46.5685433,0 30,0 C13.4314567,0 0,13.4314567 0,30 C0,46.5685433 13.4314567,60 30,60 Z" fill="#57BB63"/>
        <path d="M30.0712615,46.2210462 C27.2108308,46.2210462 24.5235692,45.4899692 22.1856,44.2068923 L13.1538462,47.0769231 L16.0980923,38.3918769 C14.6130462,35.9523692 13.7575385,33.0915692 13.7575385,30.0336 C13.7575385,21.0934154 21.0612923,13.8461538 30.0716308,13.8461538 C39.0808615,13.8461538 46.3846154,21.0934154 46.3846154,30.0336 C46.3846154,38.9737846 39.0812308,46.2210462 30.0712615,46.2210462 Z M30.0712615,16.4241231 C22.5079385,16.4241231 16.3558154,22.5293538 16.3558154,30.0336 C16.3558154,33.0114462 17.3265231,35.7692308 18.9681231,38.0130462 L17.2548923,43.0670769 L22.5252923,41.3918769 C24.6912,42.8137846 27.2854154,43.6430769 30.0712615,43.6430769 C37.6334769,43.6430769 43.7867077,37.5382154 43.7867077,30.0339692 C43.7867077,22.5297231 37.6334769,16.4241231 30.0712615,16.4241231 L30.0712615,16.4241231 Z M38.3088,33.7617231 C38.2083692,33.5966769 37.9417846,33.4969846 37.5426462,33.2987077 C37.1424,33.1004308 35.1758769,32.1400615 34.8099692,32.0082462 C34.4429538,31.8760615 34.176,31.8092308 33.9097846,32.2065231 C33.6435692,32.6038154 32.8770462,33.4969846 32.6433231,33.7617231 C32.4099692,34.0268308 32.1769846,34.0600615 31.7771077,33.8614154 C31.3776,33.6631385 30.0889846,33.2440615 28.5611077,31.8923077 C27.3725538,30.8407385 26.5698462,29.5425231 26.3368615,29.1448615 C26.1035077,28.7479385 26.3121231,28.5334154 26.5122462,28.3358769 C26.6920615,28.1579077 26.9121231,27.8724923 27.1122462,27.6409846 C27.3123692,27.4091077 27.3788308,27.2440615 27.5117538,26.9789538 C27.6454154,26.7142154 27.5785846,26.4827077 27.4785231,26.2836923 C27.3784615,26.0854154 26.5783385,24.1329231 26.2452923,23.3383385 C25.9122462,22.5444923 25.5795692,22.6766769 25.3458462,22.6766769 C25.1124923,22.6766769 24.8459077,22.6434462 24.5793231,22.6434462 C24.3127385,22.6434462 23.8792615,22.7427692 23.5126154,23.1396923 C23.1463385,23.5369846 22.1136,24.4969846 22.1136,26.4491077 C22.1136,28.4016 23.5458462,30.288 23.7463385,30.5523692 C23.9460923,30.8167385 26.5118769,34.9536 30.5767385,36.5424 C34.6430769,38.1308308 34.6430769,37.6009846 35.3763692,37.5348923 C36.1085538,37.4688 37.7412923,36.5752615 38.0754462,35.6488615 C38.4081231,34.7217231 38.4081231,33.9271385 38.3088,33.7617231 L38.3088,33.7617231 Z" fill="#FFFFFF"/>
      </g>
    </g>
  </svg>
)

const socialIcons = new Map()

socialIcons.set('Facebook', FacebookIcon)
socialIcons.set('Twitter', TwitterIcon)
socialIcons.set('Google+', GooglePlusIcon)
socialIcons.set('WhatsApp', WhatsAppIcon)

interface IProps {
  type: 'Facebook' | 'Twitter' | 'Google' | 'WhatsApp'
}

const SocialIcon = ({ type }: IProps) => (
  socialIcons.get(type)
)

export default SocialIcon