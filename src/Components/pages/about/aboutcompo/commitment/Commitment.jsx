"use client";
import React from "react";
import Image from "next/image";
import img from "../../../../../assets/aboutassets/ph_medal-thin.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
const Commitment = () => {
  return (
    <>
      <div className="commitment">
        <div className="w-full h-[full] max-xl:px-[80px] pl-20 pr-[111.37px] pt-[73px] widescreen:pt-[123px] pb-[120px] bg-white flex-col justify-start items-start gap-[60px] inline-flex max-lg:h-full max-lg:p-10 max-sm:p-5">
          <div className="flex-col justify-start widescreen:w-full items-start gap-9 inline-flex">
            <div className="opacity-60 w-[413px] widescreen:w-[40%] max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
              <div className=" text-black text-sm widescreen:text-[16px] widescreen:text-[24px] font-normal font-['Archivo'] uppercase leading-snug">
                our values and principles
              </div>
              <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div>
            </div>
            <div className="text-black text-[49.20px] widescreen:w-full widescreen:text-[54px] widestscreen:text-[60px] font-normal font-['Graphik'] leading-[120%] letter-spacing-2 max-sm:text-[36px]">
              Our commitments{" "}
            </div>
          </div>
          <div className="about-comit justify-start items-start gap-[52px] inline-flex flex-wrap">
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <path
                    d="M21.7859 51.5233C19.965 51.5233 18.3706 50.9723 17.0026 49.8703C15.633 48.7683 14.6894 47.3551 14.1716 45.6309C13.6903 46.4321 13.0253 47.0448 12.1766 47.4691C11.3295 47.8951 10.4373 48.108 9.5 48.108C7.847 48.108 6.44417 47.5293 5.2915 46.3719C4.13883 45.2161 3.5625 43.8148 3.5625 42.1681C3.5625 40.7115 4.07075 39.3839 5.08725 38.1853C6.10533 36.9867 7.38862 36.3803 8.93713 36.366C8.14071 35.6345 7.50975 34.755 7.04425 33.7274C6.58033 32.6982 6.34838 31.6287 6.34838 30.5188C6.34838 29.2094 6.67058 27.9759 7.315 26.8185C7.95942 25.6611 8.86192 24.7079 10.0225 23.959C10.1286 24.3074 10.2735 24.6818 10.4571 25.0824C10.6408 25.4814 10.8284 25.8408 11.02 26.1606C10.2837 26.718 9.72721 27.3798 9.35038 28.1461C8.97196 28.9125 8.78275 29.7231 8.78275 30.5781C8.78275 33.0386 9.69317 34.6251 11.514 35.3376C13.3348 36.0501 15.2087 36.5948 17.1356 36.9716L17.67 37.9121C17.2346 39.1788 16.8815 40.2499 16.6108 41.1255C16.3416 42.0011 16.207 42.8102 16.207 43.5528C16.207 45.0458 16.7453 46.3442 17.822 47.4478C18.9034 48.5514 20.2097 49.1031 21.7408 49.1031C23.2813 49.1031 24.5678 48.5727 25.6001 47.5119C26.6325 46.4511 27.493 45.1527 28.1818 43.6169C28.8721 42.0811 29.4207 40.4558 29.8276 38.741C30.233 37.0263 30.5702 35.5158 30.8394 34.2095C30.9265 33.8105 31.1101 33.4994 31.3904 33.2761C31.6706 33.0529 31.9754 32.9943 32.3048 33.1004C32.6737 33.2065 32.9349 33.4266 33.0885 33.7606C33.2421 34.0963 33.2698 34.4636 33.1716 34.8626C32.847 36.4697 32.4457 38.2415 31.9675 40.1779C31.4893 42.1143 30.8307 43.9233 29.9915 45.6048C29.1523 47.2847 28.0788 48.6915 26.771 49.8251C25.4632 50.9572 23.8015 51.5233 21.7859 51.5233ZM9.5 45.733C10.4769 45.733 11.3153 45.3831 12.0151 44.6833C12.7134 43.9866 13.0625 43.149 13.0625 42.1705C13.0625 41.192 12.7134 40.3536 12.0151 39.6554C11.3153 38.9571 10.4769 38.608 9.5 38.608C8.52308 38.608 7.68471 38.9571 6.98487 39.6554C6.28662 40.3536 5.9375 41.192 5.9375 42.1705C5.9375 43.1474 6.28662 43.985 6.98487 44.6833C7.68471 45.3831 8.52308 45.733 9.5 45.733ZM24.795 35.0859C24.5258 35.3566 24.1997 35.4548 23.8165 35.3804C23.4349 35.306 23.0882 35.1334 22.7763 34.8626C19.8819 32.2438 17.5386 29.8751 15.7463 27.7566C13.9571 25.6366 13.0625 23.3312 13.0625 20.8406C13.0625 18.6034 13.8288 16.7176 15.3615 15.1834C16.8958 13.6507 18.7815 12.8844 21.0188 12.8844C21.451 12.8844 21.8405 12.9097 22.1873 12.9604C22.534 13.0111 22.8633 13.0823 23.1753 13.1741C22.9853 12.8068 22.8356 12.4331 22.7264 12.0531C22.6171 11.6731 22.5625 11.2654 22.5625 10.83C22.5625 9.18493 23.1404 7.78368 24.2962 6.62627C25.4552 5.47043 26.8565 4.89252 28.5 4.89252C30.1435 4.89252 31.5448 5.47043 32.7038 6.62627C33.8596 7.78368 34.4375 9.18493 34.4375 10.83C34.4375 11.2654 34.3821 11.6708 34.2713 12.046C34.1604 12.4213 34.0116 12.7918 33.8247 13.1575C34.1351 13.0673 34.4644 12.9992 34.8127 12.9533C35.1595 12.9074 35.549 12.8844 35.9813 12.8844C37.7783 12.8844 39.3482 13.395 40.6909 14.4163C42.0335 15.4375 42.9543 16.7414 43.453 18.3279C43.0762 18.2709 42.655 18.2424 42.1895 18.2424C41.7256 18.2424 41.3005 18.2661 40.9141 18.3136C40.485 17.4048 39.8359 16.6686 38.9666 16.1049C38.0958 15.5412 37.1007 15.2594 35.9813 15.2594C34.504 15.2594 33.3268 15.6426 32.4496 16.4089C31.5725 17.1752 30.4293 18.3754 29.0201 20.0094H27.9205C26.4733 18.3263 25.3112 17.1135 24.434 16.3709C23.5568 15.6283 22.4184 15.2578 21.0188 15.2594C19.4164 15.2594 18.0864 15.7898 17.0288 16.8506C15.9679 17.9083 15.4375 19.2383 15.4375 20.8406C15.4375 22.595 16.2268 24.4411 17.8054 26.3791C19.384 28.3171 21.5911 30.5845 24.4269 33.1811C24.7372 33.444 24.9415 33.7614 25.0396 34.1335C25.1394 34.5072 25.0578 34.8246 24.795 35.0859ZM28.5 14.3925C29.4769 14.3925 30.3153 14.0426 31.0151 13.3428C31.7134 12.6445 32.0625 11.8069 32.0625 10.83C32.0625 9.85152 31.7134 9.01314 31.0151 8.31489C30.3153 7.61664 29.4769 7.26752 28.5 7.26752C27.5231 7.26752 26.6847 7.61585 25.9849 8.31252C25.2866 9.01235 24.9375 9.85152 24.9375 10.83C24.9375 11.8069 25.2866 12.6445 25.9849 13.3428C26.6847 14.0426 27.5231 14.3925 28.5 14.3925ZM35.0621 51.5684C34.4969 51.5684 33.9411 51.5106 33.3949 51.395C32.847 51.2794 32.3142 51.0863 31.7965 50.8155C32.0182 50.5353 32.2406 50.202 32.4639 49.8156C32.6855 49.4293 32.8835 49.0715 33.0576 48.7421C33.4028 48.8973 33.7543 49.0042 34.1121 49.0628C34.4715 49.1198 34.8238 49.1483 35.169 49.1483C36.7096 49.1483 38.0269 48.5965 39.121 47.4929C40.2151 46.3893 40.7621 45.072 40.7621 43.5409C40.7621 42.7888 40.6275 41.9845 40.3584 41.1279C40.086 40.2729 39.7322 39.2121 39.2967 37.9454L39.8763 37.0049C41.8443 36.6265 43.7285 36.0739 45.5288 35.3471C47.3306 34.6188 48.2315 33.0244 48.2315 30.5639C48.2315 28.6465 47.5562 27.2246 46.2056 26.2984C44.855 25.3721 43.335 24.909 41.6456 24.909C40.1985 24.909 38.5265 25.1386 36.6296 25.5978C34.7328 26.0569 32.5715 26.6784 30.1459 27.4621C29.7453 27.5698 29.3732 27.5706 29.0296 27.4645C28.686 27.36 28.4604 27.1233 28.3527 26.7544C28.2467 26.3871 28.3076 26.0506 28.5356 25.745C28.7652 25.441 29.0637 25.2352 29.431 25.1275C31.8345 24.3675 34.0076 23.7302 35.9504 23.2156C37.8931 22.7011 39.7045 22.4438 41.3844 22.4438C43.78 22.4438 45.9159 23.1484 47.7921 24.5575C49.6684 25.9667 50.6065 27.9696 50.6065 30.5663C50.6065 31.6762 50.3817 32.722 49.932 33.7036C49.4823 34.6853 48.8593 35.572 48.0629 36.3636C49.6114 36.4111 50.8939 37.0183 51.9104 38.1853C52.9269 39.3522 53.4359 40.6806 53.4375 42.1705C53.4375 43.7839 52.8612 45.1773 51.7085 46.3505C50.5558 47.5222 49.153 48.108 47.5 48.108C46.5627 48.108 45.6697 47.8951 44.821 47.4691C43.9739 47.0448 43.3089 46.4321 42.826 45.6309C42.3098 47.3551 41.3519 48.7762 39.9523 49.894C38.5526 51.0103 36.9225 51.5684 35.0621 51.5684ZM47.5594 45.733C48.5363 45.733 49.3644 45.3831 50.0436 44.6833C50.7229 43.9866 51.0625 43.149 51.0625 42.1705C51.0625 41.192 50.7134 40.3441 50.0151 39.6269C49.3153 38.9081 48.4769 38.5486 47.5 38.5486C46.5231 38.5486 45.6847 38.8978 44.9849 39.596C44.2866 40.2943 43.9375 41.1326 43.9375 42.1111C43.9375 43.0881 44.2969 43.9351 45.0158 44.6524C45.7346 45.3728 46.5825 45.733 47.5594 45.733Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Embracing Diversity{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  We celebrate unique voices, building an inclusive culture
                  where diversity thrives, driving innovation and success.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="57"
                  viewBox="0 0 58 57"
                  fill="none"
                >
                  <path
                    d="M27.9502 47.3623C28.2605 47.3623 28.5788 47.2926 28.905 47.1533C29.2311 47.0124 29.4948 46.8414 29.6958 46.6403L48.2113 28.1248C48.8083 27.5279 49.2682 26.9183 49.5912 26.296C49.9158 25.6706 50.0781 24.985 50.0781 24.2393C50.0781 23.484 49.9158 22.7509 49.5912 22.04C49.2682 21.3275 48.8083 20.6784 48.2113 20.0925L39.3051 11.1863C38.7177 10.5894 38.1136 10.1516 37.493 9.8729C36.8739 9.59423 36.1867 9.4549 35.4315 9.4549C34.6857 9.4549 33.993 9.59423 33.3533 9.8729C32.7137 10.1516 32.1104 10.5894 31.5436 11.1863L29.4773 13.2525L33.8711 17.6629C34.3413 18.1252 34.6921 18.6517 34.9232 19.2423C35.1544 19.8329 35.2708 20.4329 35.2723 21.0425C35.2723 22.2775 34.8686 23.2996 34.0611 24.1086C33.2504 24.9161 32.2276 25.3199 30.9926 25.3199C30.383 25.3199 29.7885 25.2273 29.209 25.042C28.6279 24.8568 28.1062 24.5322 27.6438 24.0683L23.1005 19.5415L12.8452 29.7944C12.6046 30.0351 12.4241 30.3082 12.3037 30.6138C12.1834 30.9209 12.1232 31.2297 12.1232 31.54C12.1232 32.1005 12.3029 32.5629 12.6623 32.927C13.0218 33.2912 13.4817 33.4733 14.0422 33.4733C14.3526 33.4733 14.6708 33.402 14.997 33.2595C15.3231 33.1202 15.5868 32.95 15.7878 32.7489L23.3142 25.2225L24.9957 26.904L17.4812 34.4328C17.2406 34.6719 17.0601 34.9442 16.9397 35.2498C16.8194 35.5569 16.7592 35.8657 16.7592 36.176C16.7592 36.7049 16.9468 37.1561 17.3221 37.5298C17.6958 37.905 18.1478 38.0926 18.6782 38.0926C18.9886 38.0926 19.3068 38.023 19.633 37.8836C19.9591 37.7443 20.2228 37.5741 20.4238 37.373L28.4988 29.3099L30.178 30.9914L22.1172 39.0664C21.9066 39.2675 21.7341 39.5311 21.5995 39.8573C21.4633 40.1834 21.3952 40.5017 21.3952 40.812C21.3952 41.3409 21.5828 41.7921 21.9581 42.1658C22.3318 42.541 22.7838 42.7286 23.3142 42.7286C23.6246 42.7286 23.9333 42.6685 24.2405 42.5481C24.5461 42.4278 24.8192 42.2481 25.0598 42.009L33.1348 33.9459L34.814 35.6274L26.739 43.7024C26.4983 43.9431 26.3178 44.2312 26.1975 44.5669C26.0771 44.9041 26.017 45.2129 26.017 45.4931C26.017 46.0536 26.2149 46.5057 26.6107 46.8493C27.005 47.1929 27.4515 47.3647 27.9502 47.3647M27.936 49.7397C26.7152 49.7397 25.6702 49.2931 24.801 48.4001C23.9301 47.5056 23.5486 46.4028 23.6562 45.0918C22.3104 45.1076 21.1902 44.7054 20.2956 43.8853C19.3994 43.0667 18.9743 41.9235 19.0202 40.4558C17.5525 40.4716 16.3966 40.052 15.5527 39.197C14.7072 38.342 14.3225 37.2163 14.3985 35.8198C13.078 35.8356 11.9728 35.4635 11.083 34.7035C10.1931 33.9467 9.74822 32.8922 9.74822 31.54C9.74822 30.9304 9.86697 30.3209 10.1045 29.7113C10.3404 29.1001 10.6887 28.5634 11.1495 28.101L23.1005 16.1643L29.2327 22.2965C29.4338 22.5071 29.6824 22.6805 29.9785 22.8166C30.273 22.9512 30.6055 23.0185 30.976 23.0185C31.4858 23.0185 31.9355 22.8412 32.325 22.4865C32.7145 22.1319 32.9092 21.6703 32.9092 21.1019C32.9092 20.7298 32.8419 20.3957 32.7073 20.0996C32.5712 19.8051 32.3986 19.5574 32.1896 19.3563L24.0196 11.1863C23.4306 10.5894 22.8186 10.1516 22.1837 9.8729C21.5504 9.59423 20.8553 9.4549 20.0985 9.4549C19.3527 9.4549 18.6751 9.59423 18.0655 9.8729C17.4575 10.1516 16.855 10.5894 16.2581 11.1863L9.02859 18.43C8.51876 18.9367 8.10709 19.5423 7.79359 20.2469C7.48009 20.9515 7.31384 21.6774 7.29484 22.4248C7.27901 22.9615 7.32493 23.4769 7.43259 23.9709C7.54343 24.4665 7.71759 24.932 7.95509 25.3674L6.15484 27.1653C5.75584 26.5304 5.44393 25.7981 5.21909 24.9684C4.99268 24.1371 4.88897 23.2901 4.90797 22.4271C4.92697 21.3489 5.14309 20.3158 5.55634 19.3278C5.97118 18.3382 6.56334 17.4586 7.33284 16.6891L14.5172 9.50477C15.3453 8.68619 16.2217 8.0766 17.1463 7.67602C18.071 7.2786 19.0701 7.0799 20.1436 7.0799C21.2203 7.0799 22.2122 7.2794 23.1195 7.6784C24.0283 8.0774 24.8928 8.68619 25.713 9.50477L27.7792 11.5734L29.8502 9.50477C30.6783 8.68619 31.5468 8.0766 32.4556 7.67602C33.3644 7.2786 34.3564 7.0799 35.4315 7.0799C36.5066 7.0799 37.5056 7.2794 38.4287 7.6784C39.3534 8.0774 40.225 8.68619 41.0436 9.50477L49.8905 18.3516C50.7106 19.1702 51.3424 20.0894 51.7857 21.109C52.2306 22.1303 52.4531 23.1784 52.4531 24.2535C52.4531 25.327 52.2314 26.3182 51.7881 27.227C51.3432 28.1359 50.7106 29.0004 49.8905 29.8205L31.375 48.3218C30.8826 48.8158 30.3458 49.1752 29.7647 49.4C29.1852 49.6249 28.5756 49.7373 27.936 49.7373"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Upholding Integrity{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  Honesty, transparency, and ethical conduct guide our
                  operations, building trust with customers, partners, and
                  stakeholders.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="57"
                  viewBox="0 0 58 57"
                  fill="none"
                >
                  <path
                    d="M34.8584 13.3978C34.8584 15.0003 35.495 16.5372 36.6281 17.6703C37.7612 18.8034 39.2981 19.44 40.9006 19.44C42.5031 19.44 44.0399 18.8034 45.1731 17.6703C46.3062 16.5372 46.9428 15.0003 46.9428 13.3978C46.9428 11.7954 46.3062 10.2585 45.1731 9.12537C44.0399 7.99224 42.5031 7.35565 40.9006 7.35565C39.2981 7.35565 37.7612 7.99224 36.6281 9.12537C35.495 10.2585 34.8584 11.7954 34.8584 13.3978Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M49.9639 34.5463V31.5252C49.9639 26.5195 45.9062 22.4617 40.9006 22.4617C37.4872 22.4617 34.5145 24.3485 32.9688 27.1361"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.6895 13.3978C10.6895 15.0003 11.326 16.5372 12.4592 17.6703C13.5923 18.8034 15.1292 19.44 16.7316 19.44C18.3341 19.44 19.871 18.8034 21.0041 17.6703C22.1372 16.5372 22.7738 15.0003 22.7738 13.3978C22.7738 11.7954 22.1372 10.2585 21.0041 9.12537C19.871 7.99224 18.3341 7.35565 16.7316 7.35565C15.1292 7.35565 13.5923 7.99224 12.4592 9.12537C11.326 10.2585 10.6895 11.7954 10.6895 13.3978Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.66846 34.5463V31.5252C7.66846 26.5195 11.7263 22.4617 16.7319 22.4617C20.1453 22.4617 23.1179 24.3485 24.6637 27.1361"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.7773 31.5177C22.7773 32.3112 22.9336 33.0969 23.2373 33.83C23.5409 34.563 23.986 35.2291 24.5471 35.7902C25.1081 36.3513 25.7742 36.7963 26.5073 37.1C27.2404 37.4036 28.0261 37.5599 28.8195 37.5599C29.613 37.5599 30.3987 37.4036 31.1318 37.1C31.8648 36.7963 32.5309 36.3513 33.092 35.7902C33.6531 35.2291 34.0981 34.563 34.4018 33.83C34.7054 33.0969 34.8617 32.3112 34.8617 31.5177C34.8617 30.7242 34.7054 29.9385 34.4018 29.2055C34.0981 28.4724 33.6531 27.8063 33.092 27.2452C32.5309 26.6842 31.8648 26.2391 31.1318 25.9355C30.3987 25.6318 29.613 25.4755 28.8195 25.4755C28.0261 25.4755 27.2404 25.6318 26.5073 25.9355C25.7742 26.2391 25.1081 26.6842 24.5471 27.2452C23.986 27.8063 23.5409 28.4724 23.2373 29.2055C22.9336 29.9385 22.7773 30.7242 22.7773 31.5177Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.8838 49.6439C37.8838 44.6383 33.8259 40.5806 28.8203 40.5806C23.8147 40.5806 19.7568 44.6383 19.7568 49.6439"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Nurturing Talent{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  We prioritize our employees' well-being, fostering a positive
                  work culture that supports growth and balance.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="57"
                  viewBox="0 0 58 57"
                  fill="none"
                >
                  <path
                    d="M43.6481 23.2675C50.154 32.4294 45.177 42.9233 42.7698 47.0169C42.4168 47.5894 41.9426 48.078 41.3808 48.4485C40.8187 48.8187 40.1827 49.062 39.5168 49.1609C34.7999 49.9732 23.0567 50.883 16.7459 41.721C10.5327 33.0792 10.793 17.8744 11.346 10.6294C11.3678 10.0897 11.5176 9.56279 11.7832 9.09215C12.0487 8.62153 12.4224 8.22062 12.8734 7.92243C13.3245 7.62424 13.8399 7.43729 14.3775 7.37698C14.915 7.31667 15.4592 7.38471 15.9652 7.57551C22.9591 9.58983 37.5324 14.6256 43.6481 23.2675Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.7231 20.246C29.1742 29.0156 35.7137 38.5185 41.2411 48.6085"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Sustainable Practices{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  Committed to minimizing our environmental footprint, we
                  implement eco-friendly initiatives for a sustainable future.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="57"
                  height="57"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <path
                    d="M43.1387 22.0951C43.1569 19.4822 42.4751 16.9121 41.1644 14.6516C39.8538 12.3911 37.962 10.5226 35.6854 9.24013C33.4088 7.95765 30.8304 7.30791 28.218 7.35838C25.6055 7.40885 23.0541 8.15768 20.8287 9.52714C18.6034 10.8966 16.7852 12.8368 15.5628 15.1462C14.3404 17.4556 13.7585 20.0501 13.8775 22.6604C13.9964 25.2707 14.8119 27.8015 16.2392 29.9902C17.6665 32.1789 19.6537 33.9456 21.9944 35.107V39.9866C21.9944 40.4179 22.1657 40.8317 22.4708 41.1365C22.7758 41.4416 23.1895 41.613 23.6209 41.613H33.3798C33.8112 41.613 34.2249 41.4416 34.5299 41.1365C34.8349 40.8317 35.0063 40.4179 35.0063 39.9866V35.107C37.4378 33.909 39.4872 32.0567 40.9237 29.7581C42.3602 27.4595 43.1273 24.8057 43.1387 22.0951Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.9946 49.6443H35.0065"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Leading Innovation{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  At the forefront of technology, we strive for continuous
                  innovation, delivering cutting-edge solutions for clients
                  globally.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="57"
                  viewBox="0 0 58 57"
                  fill="none"
                >
                  <path
                    d="M50.0352 28.5C50.0352 16.6941 40.4641 7.12305 28.6582 7.12305M50.0352 28.5C50.0352 40.3059 40.4641 49.877 28.6582 49.877M50.0352 28.5C50.0352 32.7948 40.4641 36.2734 28.6582 36.2734C16.8523 36.2734 7.28125 32.7948 7.28125 28.5M28.6582 7.12305C16.8523 7.12305 7.28125 16.6941 7.28125 28.5M28.6582 7.12305C34.0238 7.12305 38.375 16.6941 38.375 28.5C38.375 40.3059 34.0238 49.877 28.6582 49.877M28.6582 7.12305C23.2926 7.12305 18.9414 16.6941 18.9414 28.5C18.9414 40.3059 23.2926 49.877 28.6582 49.877M28.6582 49.877C16.8523 49.877 7.28125 40.3059 7.28125 28.5"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Connecting Globally{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  Actively engaged in global collaborations, we work
                  collectively to contribute positively to the global community.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <Image src={img} alt="Pursuit of Excellence" />
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black max-md:w-full text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4">
                  Pursuit of Excellence{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  Dedicated to continuous improvement, we value feedback, assess
                  regularly, and strive for excellence in all endeavors.{" "}
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex widescreen:w-[30%]">
              <div className="w-[57px] h-[57px] relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="58"
                  height="57"
                  viewBox="0 0 58 57"
                  fill="none"
                >
                  <path
                    d="M23.1558 41.1065L11.3521 29.3027L13.0478 27.6094L23.1558 37.7174L44.9013 15.9719L46.5947 17.6652L23.1558 41.1065Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="flex-col justify-start items-start gap-5 flex">
                <div className="text-black text-xl font-normal font-['Graphik'] leading-[120%] letter-spacing-4 widescreen:text-[30px] widestscreen:text-[40px] widescreen:w-full">
                  Uncompromising Quality{" "}
                </div>
                <div className="w-[273.16px] max-md:w-full max-sm:text-justify opacity-80 text-black text-base font-normal font-['Graphik'] leading-normal max-lg:w-full widescreen:text-[24px] widescreen:text-[24px] widescreen:w-full">
                  Adhering to industry standards, our commitment to quality
                  assurance ensures the delivery of exceptional products.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commitment;
