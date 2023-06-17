import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

export const WelcomeIcon = ({size}: {size: number}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 597 43" fill="none">
      <Path
        d="M11.8019 42L0.148521 1.27273H9.55477L16.2962 29.571H16.6343L24.0718 1.27273H32.1258L39.5434 29.6307H39.9014L46.6428 1.27273H56.0491L44.3957 42H36.0036L28.248 15.3722H27.9298L20.194 42H11.8019ZM70.0179 42.5966C66.8758 42.5966 64.1713 41.9602 61.9042 40.6875C59.6504 39.4015 57.9137 37.5852 56.694 35.2386C55.4743 32.8788 54.8645 30.0881 54.8645 26.8665C54.8645 23.7244 55.4743 20.9669 56.694 18.5938C57.9137 16.2206 59.6306 14.3712 61.8446 13.0455C64.0718 11.7197 66.6836 11.0568 69.6798 11.0568C71.695 11.0568 73.5709 11.3816 75.3076 12.0312C77.0576 12.6676 78.5823 13.6288 79.8815 14.9148C81.194 16.2008 82.2148 17.8182 82.944 19.767C83.6732 21.7027 84.0378 23.9697 84.0378 26.5682V28.8949H58.2451V23.6449H76.0633C76.0633 22.4252 75.7982 21.3447 75.2679 20.4034C74.7376 19.4621 74.0018 18.7263 73.0605 18.196C72.1325 17.6525 71.052 17.3807 69.819 17.3807C68.533 17.3807 67.3929 17.679 66.3986 18.2756C65.4175 18.8589 64.6486 19.6477 64.0917 20.642C63.5349 21.6231 63.2499 22.7169 63.2366 23.9233V28.9148C63.2366 30.4261 63.515 31.732 64.0718 32.8324C64.6419 33.9328 65.444 34.7812 66.4781 35.3778C67.5122 35.9744 68.7385 36.2727 70.1571 36.2727C71.0984 36.2727 71.9601 36.1402 72.7423 35.875C73.5245 35.6098 74.194 35.2121 74.7508 34.6818C75.3076 34.1515 75.7319 33.5019 76.0236 32.733L83.8588 33.25C83.4611 35.1326 82.6457 36.7765 81.4128 38.1818C80.1931 39.5739 78.6154 40.661 76.6798 41.4432C74.7575 42.2121 72.5368 42.5966 70.0179 42.5966ZM96.9178 1.27273V42H88.4462V1.27273H96.9178ZM116.385 42.5966C113.256 42.5966 110.565 41.9337 108.311 40.608C106.071 39.2689 104.347 37.4129 103.141 35.0398C101.948 32.6667 101.351 29.9356 101.351 26.8466C101.351 23.7178 101.954 20.9735 103.161 18.6136C104.38 16.2405 106.11 14.3911 108.351 13.0653C110.592 11.7263 113.256 11.0568 116.345 11.0568C119.01 11.0568 121.343 11.5407 123.345 12.5085C125.347 13.4763 126.932 14.8352 128.098 16.5852C129.265 18.3352 129.908 20.3902 130.027 22.75H122.033C121.807 21.2254 121.211 19.9991 120.243 19.071C119.289 18.1297 118.036 17.6591 116.485 17.6591C115.172 17.6591 114.025 18.017 113.044 18.733C112.076 19.4356 111.321 20.4631 110.777 21.8153C110.234 23.1676 109.962 24.8049 109.962 26.7273C109.962 28.6761 110.227 30.3333 110.757 31.6989C111.301 33.0644 112.063 34.1051 113.044 34.821C114.025 35.5369 115.172 35.8949 116.485 35.8949C117.452 35.8949 118.321 35.696 119.09 35.2983C119.872 34.9006 120.515 34.3239 121.019 33.5682C121.536 32.7992 121.874 31.8778 122.033 30.804H130.027C129.895 33.1373 129.258 35.1922 128.118 36.9688C126.991 38.732 125.433 40.1108 123.445 41.1051C121.456 42.0994 119.103 42.5966 116.385 42.5966ZM148.132 42.5966C145.043 42.5966 142.372 41.9403 140.118 40.6278C137.878 39.3021 136.147 37.4593 134.928 35.0994C133.708 32.7263 133.098 29.9754 133.098 26.8466C133.098 23.6913 133.708 20.9337 134.928 18.5739C136.147 16.2008 137.878 14.358 140.118 13.0455C142.372 11.7197 145.043 11.0568 148.132 11.0568C151.221 11.0568 153.886 11.7197 156.127 13.0455C158.38 14.358 160.117 16.2008 161.337 18.5739C162.557 20.9337 163.166 23.6913 163.166 26.8466C163.166 29.9754 162.557 32.7263 161.337 35.0994C160.117 37.4593 158.38 39.3021 156.127 40.6278C153.886 41.9403 151.221 42.5966 148.132 42.5966ZM148.172 36.0341C149.577 36.0341 150.751 35.6364 151.692 34.8409C152.633 34.0322 153.343 32.9318 153.82 31.5398C154.31 30.1477 154.556 28.5634 154.556 26.7869C154.556 25.0104 154.31 23.4261 153.82 22.0341C153.343 20.642 152.633 19.5417 151.692 18.733C150.751 17.9242 149.577 17.5199 148.172 17.5199C146.754 17.5199 145.56 17.9242 144.593 18.733C143.638 19.5417 142.915 20.642 142.425 22.0341C141.948 23.4261 141.709 25.0104 141.709 26.7869C141.709 28.5634 141.948 30.1477 142.425 31.5398C142.915 32.9318 143.638 34.0322 144.593 34.8409C145.56 35.6364 146.754 36.0341 148.172 36.0341ZM167.555 42V11.4545H175.629V16.8438H175.987C176.623 15.054 177.684 13.642 179.169 12.608C180.653 11.5739 182.43 11.0568 184.498 11.0568C186.593 11.0568 188.376 11.5805 189.848 12.6278C191.319 13.6619 192.3 15.0672 192.791 16.8438H193.109C193.732 15.0938 194.859 13.6951 196.49 12.6477C198.134 11.5871 200.076 11.0568 202.316 11.0568C205.167 11.0568 207.48 11.965 209.257 13.7812C211.046 15.5843 211.941 18.143 211.941 21.4574V42H203.49V23.1278C203.49 21.4309 203.039 20.1581 202.137 19.3097C201.236 18.4612 200.109 18.0369 198.757 18.0369C197.219 18.0369 196.019 18.5275 195.157 19.5085C194.295 20.4763 193.865 21.7557 193.865 23.3466V42H185.651V22.9489C185.651 21.4508 185.221 20.2576 184.359 19.3693C183.51 18.4811 182.39 18.0369 180.998 18.0369C180.057 18.0369 179.208 18.2756 178.453 18.7528C177.71 19.2169 177.12 19.8731 176.683 20.7216C176.245 21.5568 176.026 22.5379 176.026 23.6648V42H167.555ZM231.433 42.5966C228.291 42.5966 225.587 41.9602 223.32 40.6875C221.066 39.4015 219.329 37.5852 218.11 35.2386C216.89 32.8788 216.28 30.0881 216.28 26.8665C216.28 23.7244 216.89 20.9669 218.11 18.5938C219.329 16.2206 221.046 14.3712 223.26 13.0455C225.487 11.7197 228.099 11.0568 231.095 11.0568C233.111 11.0568 234.987 11.3816 236.723 12.0312C238.473 12.6676 239.998 13.6288 241.297 14.9148C242.61 16.2008 243.63 17.8182 244.36 19.767C245.089 21.7027 245.453 23.9697 245.453 26.5682V28.8949H219.661V23.6449H237.479C237.479 22.4252 237.214 21.3447 236.683 20.4034C236.153 19.4621 235.417 18.7263 234.476 18.196C233.548 17.6525 232.468 17.3807 231.235 17.3807C229.949 17.3807 228.808 17.679 227.814 18.2756C226.833 18.8589 226.064 19.6477 225.507 20.642C224.951 21.6231 224.665 22.7169 224.652 23.9233V28.9148C224.652 30.4261 224.931 31.732 225.487 32.8324C226.058 33.9328 226.86 34.7812 227.894 35.3778C228.928 35.9744 230.154 36.2727 231.573 36.2727C232.514 36.2727 233.376 36.1402 234.158 35.875C234.94 35.6098 235.61 35.2121 236.166 34.6818C236.723 34.1515 237.148 33.5019 237.439 32.733L245.274 33.25C244.877 35.1326 244.061 36.7765 242.828 38.1818C241.609 39.5739 240.031 40.661 238.095 41.4432C236.173 42.2121 233.952 42.5966 231.433 42.5966ZM277.95 11.4545V17.8182H259.555V11.4545H277.95ZM263.731 4.13636H272.203V32.6136C272.203 33.3958 272.322 34.0057 272.561 34.4432C272.799 34.8674 273.131 35.1657 273.555 35.3381C273.993 35.5104 274.496 35.5966 275.066 35.5966C275.464 35.5966 275.862 35.5634 276.26 35.4972C276.657 35.4176 276.962 35.358 277.174 35.3182L278.507 41.6222C278.082 41.7547 277.486 41.9072 276.717 42.0795C275.948 42.2652 275.013 42.3778 273.913 42.4176C271.871 42.4972 270.082 42.2254 268.544 41.6023C267.019 40.9792 265.832 40.0114 264.984 38.6989C264.135 37.3864 263.718 35.7292 263.731 33.7273V4.13636ZM295.821 42.5966C292.732 42.5966 290.061 41.9403 287.807 40.6278C285.567 39.3021 283.837 37.4593 282.617 35.0994C281.397 32.7263 280.787 29.9754 280.787 26.8466C280.787 23.6913 281.397 20.9337 282.617 18.5739C283.837 16.2008 285.567 14.358 287.807 13.0455C290.061 11.7197 292.732 11.0568 295.821 11.0568C298.91 11.0568 301.575 11.7197 303.816 13.0455C306.069 14.358 307.806 16.2008 309.026 18.5739C310.246 20.9337 310.855 23.6913 310.855 26.8466C310.855 29.9754 310.246 32.7263 309.026 35.0994C307.806 37.4593 306.069 39.3021 303.816 40.6278C301.575 41.9403 298.91 42.5966 295.821 42.5966ZM295.861 36.0341C297.266 36.0341 298.44 35.6364 299.381 34.8409C300.322 34.0322 301.032 32.9318 301.509 31.5398C301.999 30.1477 302.245 28.5634 302.245 26.7869C302.245 25.0104 301.999 23.4261 301.509 22.0341C301.032 20.642 300.322 19.5417 299.381 18.733C298.44 17.9242 297.266 17.5199 295.861 17.5199C294.443 17.5199 293.249 17.9242 292.282 18.733C291.327 19.5417 290.605 20.642 290.114 22.0341C289.637 23.4261 289.398 25.0104 289.398 26.7869C289.398 28.5634 289.637 30.1477 290.114 31.5398C290.605 32.9318 291.327 34.0322 292.282 34.8409C293.249 35.6364 294.443 36.0341 295.861 36.0341Z"
        fill="#ECECEC"
      />
      <Path
        d="M363.179 15.5312H354.468C354.309 14.4044 353.985 13.4034 353.494 12.5284C353.003 11.6401 352.374 10.8845 351.605 10.2614C350.836 9.63826 349.948 9.16098 348.94 8.82954C347.946 8.49811 346.865 8.33239 345.699 8.33239C343.591 8.33239 341.754 8.85606 340.19 9.90341C338.626 10.9375 337.413 12.4489 336.551 14.4375C335.689 16.4129 335.258 18.8125 335.258 21.6364C335.258 24.5398 335.689 26.9792 336.551 28.9545C337.426 30.9299 338.646 32.4214 340.21 33.429C341.774 34.4366 343.584 34.9403 345.639 34.9403C346.792 34.9403 347.86 34.7879 348.841 34.483C349.835 34.178 350.717 33.7339 351.485 33.1506C352.254 32.554 352.891 31.8314 353.395 30.983C353.912 30.1345 354.27 29.1667 354.468 28.0795L363.179 28.1193C362.953 29.9886 362.39 31.7917 361.488 33.5284C360.6 35.2519 359.4 36.7964 357.889 38.1619C356.391 39.5142 354.601 40.5881 352.52 41.3835C350.451 42.1657 348.111 42.5568 345.5 42.5568C341.867 42.5568 338.619 41.7348 335.755 40.0909C332.905 38.447 330.651 36.0672 328.994 32.9517C327.35 29.8362 326.528 26.0644 326.528 21.6364C326.528 17.1951 327.363 13.4167 329.034 10.3011C330.704 7.18561 332.971 4.8125 335.835 3.18182C338.699 1.53788 341.92 0.715908 345.5 0.715908C347.86 0.715908 350.047 1.04735 352.062 1.71023C354.091 2.37311 355.887 3.34091 357.451 4.61363C359.016 5.8731 360.289 7.41761 361.27 9.24716C362.264 11.0767 362.9 13.1714 363.179 15.5312ZM376.785 42.5767C374.836 42.5767 373.099 42.2386 371.574 41.5625C370.05 40.8731 368.843 39.8589 367.955 38.5199C367.08 37.1676 366.642 35.4839 366.642 33.4688C366.642 31.7718 366.954 30.3466 367.577 29.1932C368.2 28.0398 369.049 27.1117 370.123 26.4091C371.196 25.7064 372.416 25.1761 373.782 24.8182C375.16 24.4602 376.606 24.2083 378.117 24.0625C379.893 23.8769 381.325 23.7045 382.412 23.5455C383.499 23.3731 384.288 23.1212 384.779 22.7898C385.269 22.4583 385.515 21.9678 385.515 21.3182V21.1989C385.515 19.9394 385.117 18.965 384.321 18.2756C383.539 17.5862 382.426 17.2415 380.981 17.2415C379.456 17.2415 378.243 17.5795 377.341 18.2557C376.44 18.9186 375.843 19.7538 375.552 20.7614L367.716 20.125C368.114 18.2689 368.896 16.6648 370.063 15.3125C371.23 13.947 372.734 12.8996 374.577 12.1705C376.433 11.428 378.581 11.0568 381.02 11.0568C382.717 11.0568 384.341 11.2557 385.892 11.6534C387.457 12.0511 388.842 12.6676 390.049 13.5028C391.268 14.3381 392.23 15.4119 392.932 16.7244C393.635 18.0237 393.986 19.5814 393.986 21.3977V42H385.952V37.7642H385.713C385.223 38.7188 384.567 39.5606 383.745 40.2898C382.923 41.0057 381.935 41.5691 380.782 41.9801C379.628 42.3778 378.296 42.5767 376.785 42.5767ZM379.211 36.7301C380.457 36.7301 381.557 36.4848 382.512 35.9943C383.466 35.4905 384.215 34.8144 384.759 33.9659C385.303 33.1174 385.574 32.1562 385.574 31.0824V27.8409C385.309 28.0133 384.945 28.1723 384.481 28.3182C384.03 28.4508 383.519 28.5767 382.949 28.696C382.379 28.8021 381.809 28.9015 381.239 28.9943C380.669 29.0739 380.152 29.1468 379.688 29.2131C378.694 29.3589 377.825 29.5909 377.083 29.9091C376.34 30.2273 375.764 30.6581 375.353 31.2017C374.942 31.732 374.736 32.3949 374.736 33.1903C374.736 34.3438 375.154 35.2254 375.989 35.8352C376.838 36.4318 377.911 36.7301 379.211 36.7301ZM415.686 11.4545V17.8182H397.291V11.4545H415.686ZM401.467 4.13636H409.939V32.6136C409.939 33.3958 410.058 34.0057 410.297 34.4432C410.535 34.8674 410.867 35.1657 411.291 35.3381C411.728 35.5104 412.232 35.5966 412.802 35.5966C413.2 35.5966 413.598 35.5634 413.995 35.4972C414.393 35.4176 414.698 35.358 414.91 35.3182L416.243 41.6222C415.818 41.7547 415.222 41.9072 414.453 42.0795C413.684 42.2652 412.749 42.3778 411.649 42.4176C409.607 42.4972 407.817 42.2254 406.28 41.6023C404.755 40.9792 403.568 40.0114 402.72 38.6989C401.871 37.3864 401.454 35.7292 401.467 33.7273V4.13636ZM440.635 42.5767C438.687 42.5767 436.95 42.2386 435.425 41.5625C433.901 40.8731 432.694 39.8589 431.806 38.5199C430.931 37.1676 430.493 35.4839 430.493 33.4688C430.493 31.7718 430.805 30.3466 431.428 29.1932C432.051 28.0398 432.9 27.1117 433.974 26.4091C435.047 25.7064 436.267 25.1761 437.633 24.8182C439.011 24.4602 440.456 24.2083 441.968 24.0625C443.744 23.8769 445.176 23.7045 446.263 23.5455C447.35 23.3731 448.139 23.1212 448.63 22.7898C449.12 22.4583 449.366 21.9678 449.366 21.3182V21.1989C449.366 19.9394 448.968 18.965 448.172 18.2756C447.39 17.5862 446.277 17.2415 444.831 17.2415C443.307 17.2415 442.094 17.5795 441.192 18.2557C440.291 18.9186 439.694 19.7538 439.403 20.7614L431.567 20.125C431.965 18.2689 432.747 16.6648 433.914 15.3125C435.081 13.947 436.585 12.8996 438.428 12.1705C440.284 11.428 442.432 11.0568 444.871 11.0568C446.568 11.0568 448.192 11.2557 449.743 11.6534C451.308 12.0511 452.693 12.6676 453.9 13.5028C455.119 14.3381 456.081 15.4119 456.783 16.7244C457.486 18.0237 457.837 19.5814 457.837 21.3977V42H449.803V37.7642H449.564C449.074 38.7188 448.418 39.5606 447.596 40.2898C446.774 41.0057 445.786 41.5691 444.633 41.9801C443.479 42.3778 442.147 42.5767 440.635 42.5767ZM443.062 36.7301C444.308 36.7301 445.408 36.4848 446.363 35.9943C447.317 35.4905 448.066 34.8144 448.61 33.9659C449.153 33.1174 449.425 32.1562 449.425 31.0824V27.8409C449.16 28.0133 448.796 28.1723 448.331 28.3182C447.881 28.4508 447.37 28.5767 446.8 28.696C446.23 28.8021 445.66 28.9015 445.09 28.9943C444.52 29.0739 444.003 29.1468 443.539 29.2131C442.545 29.3589 441.676 29.5909 440.934 29.9091C440.191 30.2273 439.615 30.6581 439.204 31.2017C438.793 31.732 438.587 32.3949 438.587 33.1903C438.587 34.3438 439.005 35.2254 439.84 35.8352C440.688 36.4318 441.762 36.7301 443.062 36.7301ZM479.537 11.4545V17.8182H461.142V11.4545H479.537ZM465.318 4.13636H473.79V32.6136C473.79 33.3958 473.909 34.0057 474.148 34.4432C474.386 34.8674 474.718 35.1657 475.142 35.3381C475.579 35.5104 476.083 35.5966 476.653 35.5966C477.051 35.5966 477.449 35.5634 477.846 35.4972C478.244 35.4176 478.549 35.358 478.761 35.3182L480.094 41.6222C479.669 41.7547 479.073 41.9072 478.304 42.0795C477.535 42.2652 476.6 42.3778 475.5 42.4176C473.458 42.4972 471.668 42.2254 470.13 41.6023C468.606 40.9792 467.419 40.0114 466.571 38.6989C465.722 37.3864 465.305 35.7292 465.318 33.7273V4.13636ZM500.182 11.4545V17.8182H481.787V11.4545H500.182ZM485.964 4.13636H494.435V32.6136C494.435 33.3958 494.555 34.0057 494.793 34.4432C495.032 34.8674 495.363 35.1657 495.787 35.3381C496.225 35.5104 496.729 35.5966 497.299 35.5966C497.697 35.5966 498.094 35.5634 498.492 35.4972C498.89 35.4176 499.195 35.358 499.407 35.3182L500.739 41.6222C500.315 41.7547 499.718 41.9072 498.949 42.0795C498.18 42.2652 497.246 42.3778 496.145 42.4176C494.104 42.4972 492.314 42.2254 490.776 41.6023C489.252 40.9792 488.065 40.0114 487.216 38.6989C486.368 37.3864 485.95 35.7292 485.964 33.7273V4.13636ZM513.291 42.5767C511.342 42.5767 509.605 42.2386 508.081 41.5625C506.556 40.8731 505.35 39.8589 504.462 38.5199C503.587 37.1676 503.149 35.4839 503.149 33.4688C503.149 31.7718 503.461 30.3466 504.084 29.1932C504.707 28.0398 505.555 27.1117 506.629 26.4091C507.703 25.7064 508.923 25.1761 510.288 24.8182C511.667 24.4602 513.112 24.2083 514.623 24.0625C516.4 23.8769 517.832 23.7045 518.919 23.5455C520.006 23.3731 520.795 23.1212 521.285 22.7898C521.776 22.4583 522.021 21.9678 522.021 21.3182V21.1989C522.021 19.9394 521.623 18.965 520.828 18.2756C520.046 17.5862 518.932 17.2415 517.487 17.2415C515.962 17.2415 514.749 17.5795 513.848 18.2557C512.946 18.9186 512.35 19.7538 512.058 20.7614L504.223 20.125C504.621 18.2689 505.403 16.6648 506.569 15.3125C507.736 13.947 509.241 12.8996 511.084 12.1705C512.94 11.428 515.087 11.0568 517.527 11.0568C519.224 11.0568 520.848 11.2557 522.399 11.6534C523.963 12.0511 525.349 12.6676 526.555 13.5028C527.775 14.3381 528.736 15.4119 529.439 16.7244C530.141 18.0237 530.493 19.5814 530.493 21.3977V42H522.459V37.7642H522.22C521.73 38.7188 521.073 39.5606 520.251 40.2898C519.429 41.0057 518.442 41.5691 517.288 41.9801C516.135 42.3778 514.802 42.5767 513.291 42.5767ZM515.717 36.7301C516.963 36.7301 518.064 36.4848 519.018 35.9943C519.973 35.4905 520.722 34.8144 521.266 33.9659C521.809 33.1174 522.081 32.1562 522.081 31.0824V27.8409C521.816 28.0133 521.451 28.1723 520.987 28.3182C520.536 28.4508 520.026 28.5767 519.456 28.696C518.886 28.8021 518.316 28.9015 517.746 28.9943C517.176 29.0739 516.658 29.1468 516.194 29.2131C515.2 29.3589 514.332 29.5909 513.589 29.9091C512.847 30.2273 512.27 30.6581 511.859 31.2017C511.448 31.732 511.243 32.3949 511.243 33.1903C511.243 34.3438 511.66 35.2254 512.496 35.8352C513.344 36.4318 514.418 36.7301 515.717 36.7301ZM549.746 42.5966C546.618 42.5966 543.926 41.9337 541.672 40.608C539.432 39.2689 537.708 37.4129 536.502 35.0398C535.309 32.6667 534.712 29.9356 534.712 26.8466C534.712 23.7178 535.315 20.9735 536.522 18.6136C537.742 16.2405 539.472 14.3911 541.712 13.0653C543.953 11.7263 546.618 11.0568 549.707 11.0568C552.371 11.0568 554.705 11.5407 556.707 12.5085C558.708 13.4763 560.293 14.8352 561.459 16.5852C562.626 18.3352 563.269 20.3902 563.388 22.75H555.394C555.169 21.2254 554.572 19.9991 553.604 19.071C552.65 18.1297 551.397 17.6591 549.846 17.6591C548.533 17.6591 547.386 18.017 546.405 18.733C545.438 19.4356 544.682 20.4631 544.138 21.8153C543.595 23.1676 543.323 24.8049 543.323 26.7273C543.323 28.6761 543.588 30.3333 544.118 31.6989C544.662 33.0644 545.424 34.1051 546.405 34.821C547.386 35.5369 548.533 35.8949 549.846 35.8949C550.814 35.8949 551.682 35.696 552.451 35.2983C553.233 34.9006 553.876 34.3239 554.38 33.5682C554.897 32.7992 555.235 31.8778 555.394 30.804H563.388C563.256 33.1373 562.619 35.1922 561.479 36.9688C560.352 38.732 558.795 40.1108 556.806 41.1051C554.817 42.0994 552.464 42.5966 549.746 42.5966ZM575.369 33.2102L575.388 23.0483H576.621L586.405 11.4545H596.13L582.985 26.8068H580.976L575.369 33.2102ZM567.692 42V1.27273H576.164V42H567.692ZM586.783 42L577.795 28.696L583.442 22.7102L596.707 42H586.783Z"
        fill="url(#paint0_linear_2_186)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2_186"
          x1="241"
          y1="22"
          x2="265.746"
          y2="-55.8385"
          gradientUnits="userSpaceOnUse">
          <Stop stop-color="#C339AC" />
          <Stop offset="0.326412" stop-color="#CD4CB5" />
          <Stop offset="1" stop-color="#E173C7" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};