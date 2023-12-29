'use client';

import ModalContainer, { ModalContent, ModalHeader } from '../Modal';
import PrimaryButton from '../PrimaryButton';

const Post = {
  title: 'Vyzkoušejte naše herní servery!',
  image: '/images/placeholder-blog.jpg',
};

const MainHeader = () => {
  return (
    <>
      <ModalContainer autoOpen={true} displayButton={false}>
        <ModalHeader>
          Vážení návštěvníci, Dovolte mi, prosím, upozornit, že tato stránka
          není oficiálním hostingem GamerHost.pro!
        </ModalHeader>
        <ModalContent>
          Tento web má čistě rekreační charakter a slouží k prezentaci nového
          grafického designu. Tento design byl vytvořen s cílem představit
          možnou přestavbu. Pokud byste nalezli nějaké nedostatky, neváhejte mě
          kontaktovat přes Discord na uživatelském jménu{' '}
          <strong>rotzzik</strong>. Děkuji Vám za pochopení a doufám, že se Vám
          má práce líbí. <br />
          <br /> Celý tento web byl vytvořen za použití technologií{' '}
          <a href='https://nextjs.org'>Next.js</a> a{' '}
          <a href='https://tailwindcss.com'>TailwindCSS</a>, spolu s vlastními
          komponenty.
        </ModalContent>
      </ModalContainer>
      <header>
        <div className='container'>
          <div className='flex items-center h-[700px] overflow-hidden'>
            <div className='relative w-[35%]'>
              <h1 className='text-6xl font-bold text-black text-pretty'>
                Herní hosting co si na nic nehraje
              </h1>
              <p className='text-xl text-secondary-500 text-pretty mt-4 mb-10'>
                Jsme upřímný herní hosting sídlící v Česku, naše servery jsou
                uloženy v jednom z nejlepších datacenter v Praze. Tak co přidáš
                se k nám?
              </p>
              <PrimaryButton>Zobrazit nabídku</PrimaryButton>
            </div>
            <div className='relative w-[65%] h-full'>
              <div
                className='absolute top-[10%] right-[35%] z-10 rotate-[100deg]'
                id='blocks1'
              >
                <div className='relative top-6 bg-primary-700/40 backdrop-blur-sm w-10 h-10 rounded-md z-[1] animate-[floatRotateX_5s_ease-in-out_infinite]'></div>
                <div className='relative top-3 left-4 bg-primary-700/40 backdrop-blur-sm w-12 h-12 rounded-md z-0 animate-[floatRotateX_4s_ease-in-out_infinite]'></div>
                <div className='relative top-1 left-6 bg-primary-700/40 backdrop-blur-sm w-14 h-14 rounded-md -z-[1] animate-[floatRotateX_6s_ease-in-out_infinite]'></div>
              </div>
              <div
                className='absolute bottom-[30%] left-[25%] z-10 rotate-[160deg]'
                id='blocks2'
              >
                <div className='relative top-6 bg-primary-700/40 backdrop-blur-sm w-10 h-10 rounded-md z-[1] animate-[floatRotateY_5s_ease-in-out_infinite]'></div>
                <div className='relative top-3 left-4 bg-primary-700/40 backdrop-blur-sm w-12 h-12 rounded-md z-0 animate-[floatRotateY_4s_ease-in-out_infinite]'></div>
                <div className='relative top-1 left-6 bg-primary-700/40 backdrop-blur-sm w-14 h-14 rounded-md -z-[1] animate-[floatRotateY_6s_ease-in-out_infinite]'></div>
              </div>
              <div className='heroImage'>
                <svg
                  xlinkHref='http://www.w3.org/1999/xlink'
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 631.38306 645.306'
                  version='1.1'
                >
                  <defs>
                    <filter
                      filterUnits='userSpaceOnUse'
                      colorInterpolationFilters='sRGB'
                      id='filter_1'
                    >
                      <feFlood floodOpacity='0' result='BackgroundImageFix' />
                      <feGaussianBlur stdDeviation='0' />
                      <feBlend
                        mode='normal'
                        in2='BackgroundImageFix'
                        result='effect0_dropShadow'
                      />
                      <feBlend
                        mode='normal'
                        in='SourceGraphic'
                        in2='effect0_dropShadow'
                        result='shape'
                      />
                    </filter>
                    <path
                      d='M258.531 7.45618L580.902 124.803Q581.456 125.004 582.001 125.227Q582.546 125.45 583.082 125.695Q583.619 125.939 584.145 126.204Q584.671 126.469 585.186 126.755Q585.701 127.041 586.205 127.346Q586.708 127.652 587.2 127.977Q587.691 128.302 588.169 128.646Q588.647 128.99 589.111 129.353Q589.575 129.716 590.025 130.097Q590.475 130.477 590.909 130.875Q591.343 131.273 591.762 131.688Q592.18 132.103 592.582 132.534Q592.983 132.964 593.368 133.411Q593.753 133.857 594.119 134.318Q594.486 134.779 594.834 135.254Q595.183 135.729 595.512 136.218Q595.842 136.706 596.152 137.207Q596.462 137.708 596.752 138.221Q597.042 138.733 597.311 139.257Q597.581 139.781 597.83 140.315Q598.079 140.849 598.307 141.392Q598.535 141.935 598.741 142.487Q598.947 143.039 599.132 143.598Q599.316 144.158 599.479 144.724Q599.641 145.29 599.781 145.863Q599.921 146.435 600.039 147.012Q600.156 147.589 600.251 148.171Q600.345 148.752 600.417 149.337Q600.489 149.922 600.538 150.509Q600.587 151.096 600.612 151.684Q600.638 152.273 600.641 152.862Q600.643 153.451 600.622 154.04L588.65 496.936Q588.629 497.525 588.585 498.112Q588.542 498.699 588.475 499.285Q588.408 499.87 588.319 500.452Q588.229 501.035 588.117 501.613Q588.004 502.191 587.869 502.765Q587.734 503.338 587.577 503.906Q587.419 504.473 587.24 505.035Q587.06 505.596 586.859 506.149Q586.657 506.703 586.434 507.248Q586.211 507.793 585.967 508.329Q585.723 508.865 585.458 509.392Q585.192 509.918 584.907 510.433Q584.621 510.948 584.315 511.452Q584.01 511.955 583.685 512.447Q583.36 512.938 583.015 513.416Q582.671 513.894 582.309 514.358Q581.946 514.823 581.565 515.272Q581.185 515.722 580.787 516.156Q580.389 516.591 579.974 517.009Q579.559 517.427 579.128 517.829Q578.697 518.231 578.251 518.615Q577.805 519 577.344 519.367Q576.883 519.733 576.408 520.082Q575.933 520.43 575.444 520.76Q574.956 521.089 574.455 521.399Q573.954 521.709 573.441 521.999Q572.929 522.289 572.405 522.559Q571.881 522.829 571.347 523.078Q570.813 523.327 570.27 523.555Q569.727 523.782 569.175 523.989Q568.623 524.195 568.064 524.38Q567.504 524.564 566.938 524.726L237.167 619.297Q236.601 619.459 236.029 619.599Q235.457 619.74 234.879 619.857Q234.302 619.974 233.72 620.069Q233.139 620.164 232.554 620.236Q231.969 620.308 231.382 620.356Q230.795 620.405 230.206 620.431Q229.618 620.457 229.029 620.459Q228.44 620.462 227.851 620.441Q227.262 620.421 226.674 620.377Q226.087 620.333 225.501 620.267Q224.916 620.2 224.334 620.11Q223.751 620.021 223.173 619.908Q222.595 619.796 222.021 619.661Q221.448 619.526 220.88 619.368Q220.312 619.211 219.751 619.031Q219.19 618.852 218.637 618.65Q218.083 618.449 217.538 618.226Q216.992 618.002 216.456 617.758Q215.92 617.514 215.394 617.249Q214.868 616.983 214.353 616.698Q213.837 616.412 213.334 616.106Q212.83 615.801 212.339 615.476Q211.847 615.15 211.369 614.806Q210.891 614.462 210.427 614.099Q209.963 613.736 209.513 613.356Q209.063 612.975 208.629 612.577Q208.195 612.179 207.776 611.764Q207.358 611.349 206.956 610.918Q206.554 610.488 206.17 610.041Q205.785 609.595 205.418 609.134Q205.052 608.673 204.703 608.198Q204.355 607.722 204.025 607.234L12.1861 322.789Q11.8567 322.301 11.5467 321.8Q11.2368 321.299 10.9467 320.786Q10.6567 320.273 10.387 319.75Q10.1173 319.226 9.86834 318.692Q9.6194 318.158 9.39162 317.615Q9.16383 317.072 8.95755 316.52Q8.75127 315.968 8.56681 315.409Q8.38235 314.849 8.21999 314.283Q8.05764 313.717 7.91763 313.145Q7.77763 312.572 7.6602 311.995Q7.54277 311.418 7.44809 310.836Q7.35341 310.255 7.28162 309.67Q7.20984 309.086 7.16106 308.499Q7.11229 307.911 7.0866 307.323Q7.0609 306.734 7.05833 306.145Q7.05577 305.556 7.07632 304.968Q7.09688 304.379 7.14053 303.791Q7.18419 303.204 7.25087 302.619Q7.31755 302.033 7.40715 301.451Q7.49676 300.869 7.60915 300.291Q7.72155 299.712 7.85655 299.139Q7.99156 298.566 8.14897 297.998Q8.30638 297.43 8.48596 296.869Q8.66553 296.308 8.86699 295.755Q9.06845 295.201 9.29149 294.656Q9.51452 294.111 9.75879 293.575Q10.0031 293.039 10.2682 292.513Q10.5333 291.987 10.8189 291.471Q11.1044 290.956 11.41 290.453Q11.7156 289.949 12.0407 289.458Q12.3658 288.966 12.71 288.488Q13.0541 288.01 13.4167 287.546L224.628 17.178Q224.991 16.7137 225.372 16.264Q225.752 15.8143 226.15 15.38Q226.548 14.9456 226.963 14.5271Q227.378 14.1087 227.809 13.7069Q228.239 13.305 228.686 12.9204Q229.132 12.5358 229.593 12.169Q230.054 11.8023 230.529 11.4539Q231.004 11.1055 231.493 10.776Q231.981 10.4465 232.482 10.1365Q232.983 9.82644 233.496 9.53631Q234.009 9.24617 234.533 8.9764Q235.056 8.70662 235.59 8.45762Q236.124 8.20862 236.668 7.98077Q237.211 7.75292 237.763 7.54659Q238.315 7.34025 238.874 7.15574Q239.434 6.97122 240 6.80882Q240.566 6.64642 241.139 6.50638Q241.711 6.36634 242.288 6.24888Q242.866 6.13142 243.447 6.03671Q244.029 5.94201 244.613 5.87021Q245.198 5.79841 245.785 5.74962Q246.373 5.70084 246.961 5.67514Q247.55 5.64945 248.139 5.64688Q248.728 5.64432 249.317 5.66489Q249.906 5.68546 250.493 5.72913Q251.081 5.7728 251.666 5.83951Q252.252 5.90621 252.834 5.99585Q253.416 6.08549 253.994 6.19792Q254.573 6.31036 255.146 6.44541Q255.72 6.58046 256.288 6.73793Q256.855 6.89539 257.416 7.07502Q257.977 7.25466 258.531 7.45618L258.531 7.45618Z'
                      id='path_1'
                    />
                    <clipPath id='clip_1'>
                      <use
                        xlinkHref='#path_1'
                        clipRule='evenodd'
                        fillRule='evenodd'
                      />
                    </clipPath>
                    <clipPath id='clip_2'>
                      <use xlinkHref='#path_1' />
                    </clipPath>
                    <image xlinkHref={Post.image} id='img_1' />
                    <pattern
                      patternUnits='objectBoundingBox'
                      x='-0.008560181%'
                      width='100.00856%'
                      height='100%'
                      id='pattern_1'
                    >
                      <use
                        xlinkHref='#img_1'
                        transform='matrix(0.5262611 0 0 0.5262611 0 0)'
                      />
                    </pattern>
                  </defs>
                  <g id='DSC_4834-1942144778-Mask'>
                    <g id='Mask-2' filter='url(#filter_1)'>
                      <use
                        stroke='none'
                        fill='#1FF2A5'
                        xlinkHref='#path_1'
                        fillRule='evenodd'
                      />
                      <g clipPath='url(#clip_2)'>
                        <use
                          xlinkHref='#path_1'
                          fill='none'
                          stroke='#0A9169'
                          strokeWidth='2'
                        />
                      </g>
                    </g>
                    <g clipPath='url(#clip_1)'>
                      <path
                        d='M-172.638 -34.8425L879.704 -34.8425L879.704 667.716L-172.638 667.716L-172.638 -34.8425Z'
                        id='DSC_4834-1942144778'
                        fill='url(#pattern_1)'
                        fillRule='evenodd'
                        stroke='none'
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <PrimaryButton className='absolute bottom-[20%] left-1/2 -translate-x-1/2 w-2/4 py-4 text-center text-white bg-primary-700/60 hover:bg-primary-700 hover:scale-110 backdrop-blur-sm rounded-md'>
                {Post.title}
              </PrimaryButton>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
