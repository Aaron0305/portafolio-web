"use client";

import type { SVGProps } from "react";
import { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";

// Componentes SVG con tipado
const MongoDB = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="0 0 120 257">
        <path
            fill="#00ED64"
            d="M82.323 28.55C71.537 15.795 62.249 2.84 60.35.15c-.2-.2-.5-.2-.7 0-1.897 2.69-11.185 15.645-21.971 28.4C-54.902 146.238 52.26 225.661 52.26 225.661l.9.597c.798 12.258 2.795 29.896 2.795 29.896h7.99s1.998-17.539 2.797-29.896l.899-.697c.1 0 107.263-79.323 14.68-197.01ZM59.95 223.867s-4.793-4.086-6.092-6.179v-.199l5.793-128.151c0-.4.6-.4.6 0l5.792 128.151v.199c-1.299 2.093-6.093 6.179-6.093 6.179Z"
        />
    </svg>
);

const Python = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} fill="none" viewBox="16 16 32 32">
        <path
            fill="url(#python__a)"
            d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"
        />
        <path
            fill="url(#python__b)"
            d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"
        />
        <defs>
            <linearGradient
                id="python__a"
                x1="19.075"
                x2="34.898"
                y1="18.782"
                y2="34.658"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#387EB8" />
                <stop offset="1" stopColor="#366994" />
            </linearGradient>
            <linearGradient
                id="python__b"
                x1="28.809"
                x2="45.803"
                y1="28.882"
                y2="45.163"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#FFE052" />
                <stop offset="1" stopColor="#FFC331" />
            </linearGradient>
        </defs>
    </svg>
);

const HTML5 = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 452 520">
        <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
        <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
        <path
            fill="#ecedee"
            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
        />
        <path
            fill="#fff"
            d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
        />
    </svg>
);

// Additional SVG components
const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 180 180">
    <mask
      height="180"
      id="nextjs_icon_dark__:r8:mask0_408_134"
      maskUnits="userSpaceOnUse"
      width="180"
      x="0"
      y="0"
      style={{ maskType: "alpha" }}
    >
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#nextjs_icon_dark__:r8:mask0_408_134)">
      <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#nextjs_icon_dark__:r8:paint0_linear_408_134)"
      />
      <rect fill="url(#nextjs_icon_dark__:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54" />
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs_icon_dark__:r8:paint0_linear_408_134"
        x1="109"
        x2="144.5"
        y1="116.5"
        y2="160.5"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs_icon_dark__:r8:paint1_linear_408_134"
        x1="121"
        x2="120.799"
        y1="54"
        y2="106.875"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

const Nodejs = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 292" xmlnsXlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="nodejs__a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%">
        <stop offset="0%" stopColor="#41873F" />
        <stop offset="32.88%" stopColor="#418B3D" />
        <stop offset="63.52%" stopColor="#419637" />
        <stop offset="93.19%" stopColor="#3FA92D" />
        <stop offset="100%" stopColor="#3FAE2A" />
      </linearGradient>
      <linearGradient id="nodejs__c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%">
        <stop offset="13.76%" stopColor="#41873F" />
        <stop offset="40.32%" stopColor="#54A044" />
        <stop offset="71.36%" stopColor="#66B848" />
        <stop offset="90.81%" stopColor="#6CC04A" />
      </linearGradient>
      <linearGradient id="nodejs__f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%">
        <stop offset="9.192%" stopColor="#6CC04A" />
        <stop offset="28.64%" stopColor="#66B848" />
        <stop offset="59.68%" stopColor="#54A044" />
        <stop offset="86.24%" stopColor="#41873F" />
      </linearGradient>
      <path
        id="nodejs__b"
        d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z"
      />
    </defs>
    <path fill="url(#nodejs__a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" />
    <mask id="nodejs__d" fill="#fff">
      <use xlinkHref="#nodejs__b" />
    </mask>
    <path
      fill="url(#nodejs__c)"
      d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z"
      mask="url(#nodejs__d)"
    />
    <mask id="nodejs__g" fill="#fff">
      <use xlinkHref="#nodejs__b" />
    </mask>
    <path
      fill="url(#nodejs__f)"
      d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z"
      mask="url(#nodejs__g)"
    />
  </svg>
);

const CSS = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 512 512">
    <path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z" />
    <path fill="#2965f1" d="M405.388 431.408 440.536 37.678H256v435.146z" />
    <path
      fill="#ebebeb"
      d="M124.46 208.59l5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z"
    />
    <path
      fill="#fff"
      d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z"
    />
  </svg>
);

const MySQL = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} preserveAspectRatio="xMidYMid" viewBox="0 0 256 252">
    <path
      fill="#FFF"
      d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"
    />
    <path fill="#FFF" d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z" />
  </svg>
);

const TypeScript = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 256 256" preserveAspectRatio="xMidYMid">
    <path
      d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
      fill="#3178C6"
    />
    <path
      d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-1.894 4.147-1.895c2.785 0 5.065 1.094 6.832 3.281 1.767 2.188 2.65 5.06 2.65 8.617v.199c0 .798-.173 1.596-.518 2.393-.345.798-.862 1.596-1.55 2.393l-9.761 12.117c-.689.797-1.55 1.595-2.583 2.393-1.033.799-2.238 1.597-3.616 2.395-1.378.798-2.928 1.596-4.651 2.393-1.723.798-3.618 1.596-5.684 2.393l-1.55 5.586c-.345.797-.862 1.595-1.55 2.393-.689.797-1.55 1.595-2.583 2.393l-9.761 12.117c-.689.797-1.55 1.595-2.583 2.393-1.033.799-2.238 1.597-3.616 2.395-1.378.798-2.928 1.596-4.651 2.393-1.723.798-3.618 1.596-5.684 2.393l-1.55 5.586c-.345.797-.862 1.595-1.55 2.393-.689.797-1.55 1.595-2.583 2.393Z"
      fill="#FFF"
    />
  </svg>
);

export { Nextjs, Nodejs, CSS, MySQL, TypeScript };


// SVGs de las tecnologías como Data URLs
const technologyIcons = [
    {
        name: "React",
        color: "#61DAFB",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="8" fill="#61DAFB"/><ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" stroke-width="3"/><ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(60 50 50)"/><ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#61DAFB" stroke-width="3" transform="rotate(120 50 50)"/></svg>`
    },
    {
        name: "Next.js",
        color: "#FFFFFF",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="#000"/><path d="M35 70V30h5l25 30V30h5v40h-5L40 40v30h-5z" fill="#fff"/><path d="M70 35l-8 15h8l-8 15" stroke="#fff" stroke-width="4" fill="none"/></svg>`
    },
    {
        name: "TypeScript",
        color: "#3178C6",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="10" fill="#3178C6"/><text x="50" y="68" font-family="Arial, sans-serif" font-size="45" font-weight="bold" fill="white" text-anchor="middle">TS</text></svg>`
    },
    {
        name: "JavaScript",
        color: "#F7DF1E",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#F7DF1E"/><text x="50" y="70" font-family="Arial, sans-serif" font-size="45" font-weight="bold" fill="#000" text-anchor="middle">JS</text></svg>`
    },
    {
        name: "Node.js",
        color: "#8CC84B",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="#8CC84B"/><text x="50" y="60" font-family="Arial, sans-serif" font-size="24" font-weight="bold" fill="white" text-anchor="middle">Node</text></svg>`
    },
    {
        name: "Python",
        color: "#3776AB",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32"><path fill="url(#python__a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z"/><path fill="url(#python__b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z"/><defs><linearGradient id="python__a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse"><stop stop-color="#387EB8"/><stop offset="1" stop-color="#366994"/></linearGradient><linearGradient id="python__b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse"><stop stop-color="#FFE052"/><stop offset="1" stop-color="#FFC331"/></linearGradient></defs></svg>`
    },
    {
        name: "MongoDB",
        color: "#00ED64",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 120 257"><path fill="#00ED64" d="M82.323 28.55C71.537 15.795 62.249 2.84 60.35.15c-.2-.2-.5-.2-.7 0-1.897 2.69-11.185 15.645-21.971 28.4C-54.902 146.238 52.26 225.661 52.26 225.661l.9.597c.798 12.258 2.795 29.896 2.795 29.896h7.99s1.998-17.539 2.797-29.896l.899-.697c.1 0 107.263-79.323 14.68-197.01ZM59.95 223.867s-4.793-4.086-6.092-6.179v-.199l5.793-128.151c0-.4.6-.4.6 0l5.792 128.151v.199c-1.299 2.093-6.093 6.179-6.093 6.179Z"/></svg>`
    },
    {
        name: "MySQL",
        color: "#4479A1",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="30" rx="40" ry="15" fill="#4479A1"/><path d="M10 30v40c0 8 18 15 40 15s40-7 40-15V30" fill="#4479A1"/><ellipse cx="50" cy="70" rx="40" ry="15" fill="#5D9BD5"/><text x="50" y="55" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="white" text-anchor="middle">MySQL</text></svg>`
    },
    {
        name: "Git",
        color: "#F05032",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M95 45L55 5c-3-3-7-3-10 0L35 15l12 12c3-1 6 0 8 2 2 2 3 5 2 8l12 12c3-1 6 0 8 2 3 3 3 8 0 11s-8 3-11 0c-2-2-3-6-2-9L52 41v27c1 1 2 2 2 3 3 3 3 8 0 11s-8 3-11 0-3-8 0-11c1-1 2-2 4-2V40c-2-1-3-2-4-4-3-3-3-7-1-10L31 15 5 41c-3 3-3 7 0 10l40 40c3 3 7 3 10 0l40-40c3-3 3-7 0-10z" fill="#F05032"/></svg>`
    },
    {
        name: "TailwindCSS",
        color: "#06B6D4",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M25 40c5-15 15-20 30-20 22.5 0 25 15 36.25 17.5 7.5 1.67 14-1.25 20-8.75-5 15-15 20-30 20-22.5 0-25-15-36.25-17.5-7.5-1.67-14 1.25-20 8.75z" fill="#06B6D4"/><path d="M5 60c5-15 15-20 30-20 22.5 0 25 15 36.25 17.5 7.5 1.67 14-1.25 20-8.75-5 15-15 20-30 20-22.5 0-25-15-36.25-17.5-7.5-1.67-14 1.25-20 8.75z" fill="#06B6D4"/></svg>`
    },
    {
        name: "HTML5",
        color: "#E34F26",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520"><path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52"/><path fill="#ef652a" d="M226 472l149-41 35-394H226"/><path fill="#ecedee" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"/><path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"/></svg>`
    },
    {
        name: "CSS3",
        color: "#1572B6",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><polygon points="10,5 15,90 50,98 85,90 90,5" fill="#1572B6"/><polygon points="50,12 50,90 78,82 82,12" fill="#33A9DC"/><path d="M50 25H30l1 10h19v10H32l2 20 16 5v-11l-9-2-1-7h10v-5h20l-1 10-11 3-8-3v11l17-5 3-30H50zM30 25h40l-1 10H31z" fill="#fff"/></svg>`
    },
];

const CodeEngineerScene = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const isHoveredRef = useRef(false);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    }, []);

    const handleMouseEnter = useCallback(() => {
        isHoveredRef.current = true;
    }, []);

    const handleMouseLeave = useCallback(() => {
        isHoveredRef.current = false;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const sizes = {
            width: container.clientWidth,
            height: 450,
        };

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = null;

        const camera = new THREE.PerspectiveCamera(
            50,
            sizes.width / sizes.height,
            0.1,
            100
        );
        camera.position.set(0, 2, 5.5);
        camera.lookAt(0, 0.5, 0);

        // Renderer con transparencia
        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.2;
        container.appendChild(renderer.domElement);

        // Luces cinematográficas
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const mainLight = new THREE.DirectionalLight(0xffffff, 1);
        mainLight.position.set(5, 8, 5);
        mainLight.castShadow = true;
        scene.add(mainLight);

        const backLight = new THREE.DirectionalLight(0x6366f1, 0.5);
        backLight.position.set(-5, 3, -5);
        scene.add(backLight);

        const rimLight = new THREE.DirectionalLight(0x22d3ee, 0.4);
        rimLight.position.set(0, 5, -8);
        scene.add(rimLight);

        const pointLight = new THREE.PointLight(0x8b5cf6, 1, 10);
        pointLight.position.set(0, 2, 0);
        scene.add(pointLight);

        // Grupo principal de la laptop
        const laptopGroup = new THREE.Group();
        scene.add(laptopGroup);
        laptopGroup.position.y = -0.3;

        // === BASE DE LA LAPTOP ===
        const baseGroup = new THREE.Group();
        laptopGroup.add(baseGroup);

        // Base principal
        const baseGeom = new THREE.BoxGeometry(3, 0.12, 2);
        const baseMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            metalness: 0.9,
            roughness: 0.3,
        });
        const base = new THREE.Mesh(baseGeom, baseMat);
        base.position.y = 0;
        base.castShadow = true;
        base.receiveShadow = true;
        baseGroup.add(base);

        // Borde iluminado
        const baseBorderGeom = new THREE.BoxGeometry(3.04, 0.02, 2.04);
        const baseBorderMat = new THREE.MeshStandardMaterial({
            color: 0x6366f1,
            emissive: 0x4f46e5,
            emissiveIntensity: 0.3,
            metalness: 0.8,
            roughness: 0.2,
        });
        const baseBorder = new THREE.Mesh(baseBorderGeom, baseBorderMat);
        baseBorder.position.y = 0.07;
        baseGroup.add(baseBorder);

        // Teclado
        const keyboardGeom = new THREE.BoxGeometry(2.6, 0.02, 1.4);
        const keyboardMat = new THREE.MeshStandardMaterial({
            color: 0x16162a,
            metalness: 0.6,
            roughness: 0.4,
        });
        const keyboard = new THREE.Mesh(keyboardGeom, keyboardMat);
        keyboard.position.set(0, 0.08, 0.15);
        baseGroup.add(keyboard);

        // Teclas
        for (let row = 0; row < 4; row++) {
            for (let col = 0; col < 12; col++) {
                const keyGeom = new THREE.BoxGeometry(0.17, 0.02, 0.17);
                const keyMat = new THREE.MeshStandardMaterial({
                    color: 0x252545,
                    metalness: 0.5,
                    roughness: 0.5,
                });
                const key = new THREE.Mesh(keyGeom, keyMat);
                key.position.set(-1.05 + col * 0.19, 0.1, 0.5 - row * 0.22);
                baseGroup.add(key);
            }
        }

        // Trackpad
        const trackpadGeom = new THREE.BoxGeometry(0.8, 0.01, 0.45);
        const trackpadMat = new THREE.MeshStandardMaterial({
            color: 0x202040,
            metalness: 0.7,
            roughness: 0.3,
        });
        const trackpad = new THREE.Mesh(trackpadGeom, trackpadMat);
        trackpad.position.set(0, 0.08, 0.75);
        baseGroup.add(trackpad);

        // === PANTALLA ===
        const screenGroup = new THREE.Group();
        laptopGroup.add(screenGroup);
        screenGroup.position.set(0, 0.06, -0.95);

        // Marco
        const lidGeom = new THREE.BoxGeometry(3, 2, 0.1);
        const lidMat = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            metalness: 0.9,
            roughness: 0.3,
        });
        const lid = new THREE.Mesh(lidGeom, lidMat);
        lid.position.y = 1;
        lid.castShadow = true;
        screenGroup.add(lid);

        // Pantalla LCD
        const displayGeom = new THREE.PlaneGeometry(2.7, 1.7);
        const displayMat = new THREE.MeshStandardMaterial({
            color: 0x0f172a,
            emissive: 0x1e1b4b,
            emissiveIntensity: 0.4,
            metalness: 0.1,
            roughness: 0.1,
        });
        const display = new THREE.Mesh(displayGeom, displayMat);
        display.position.set(0, 1, 0.06);
        screenGroup.add(display);

        // Líneas de código
        const codeLines = new THREE.Group();
        screenGroup.add(codeLines);

        for (let i = 0; i < 10; i++) {
            const lineWidth = 0.4 + Math.random() * 1.2;
            const lineGeom = new THREE.PlaneGeometry(lineWidth, 0.05);
            const colors = [0x22d3ee, 0x8b5cf6, 0x10b981, 0xf59e0b, 0xec4899];
            const lineMat = new THREE.MeshBasicMaterial({
                color: colors[Math.floor(Math.random() * colors.length)],
                transparent: true,
                opacity: 0.7,
            });
            const line = new THREE.Mesh(lineGeom, lineMat);
            line.position.set(
                -0.7 + lineWidth / 2 + Math.random() * 0.2,
                1.5 - i * 0.13,
                0.08
            );
            codeLines.add(line);
        }

        screenGroup.rotation.x = -Math.PI * 0.35;

        // === ICONOS DE TECNOLOGÍAS FLOTANTES ===
        interface IconSprite extends THREE.Sprite {
            userData: {
                baseY: number;
                baseAngle: number;
                speed: number;
                radius: number;
                phaseOffset: number;
            };
        }

        const iconSprites: IconSprite[] = [];
        const iconGroup = new THREE.Group();
        scene.add(iconGroup);

        // Cargar iconos
        const textureLoader = new THREE.TextureLoader();
        const loadedTextures: THREE.Texture[] = [];

        technologyIcons.forEach((tech, index) => {
            // Convertir SVG a data URL
            const svgDataUrl = `data:image/svg+xml;base64,${btoa(tech.svg)}`;

            // Crear textura desde el SVG
            const texture = textureLoader.load(svgDataUrl);
            texture.colorSpace = THREE.SRGBColorSpace;
            loadedTextures.push(texture);

            // Crear sprite material
            const spriteMat = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: 1,
                depthWrite: false,
            });

            // Crear sprite
            const sprite = new THREE.Sprite(spriteMat) as IconSprite;
            const size = 0.5 + Math.random() * 0.15;
            sprite.scale.set(size, size, 1);

            // Posición inicial orbital
            const angle = (index / technologyIcons.length) * Math.PI * 2;
            const radius = 2.2 + (index % 3) * 0.4;
            const height = 0.8 + (index % 4) * 0.5;

            sprite.position.set(
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius
            );

            sprite.userData = {
                baseY: height,
                baseAngle: angle,
                speed: 0.2 + Math.random() * 0.15,
                radius: radius,
                phaseOffset: Math.random() * Math.PI * 2,
            };

            iconSprites.push(sprite);
            iconGroup.add(sprite);

            // Añadir glow detrás del icono
            const glowMat = new THREE.SpriteMaterial({
                map: texture,
                transparent: true,
                opacity: 0.3,
                depthWrite: false,
                color: new THREE.Color(tech.color),
            });
            const glowSprite = new THREE.Sprite(glowMat);
            glowSprite.scale.set(size * 1.4, size * 1.4, 1);
            glowSprite.position.copy(sprite.position);
            glowSprite.position.z -= 0.01;
            sprite.add(glowSprite);
            glowSprite.position.set(0, 0, -0.05);
        });

        // === PARTÍCULAS ===
        const particlesCount = 200;
        const particlePositions = new Float32Array(particlesCount * 3);
        const particleColors = new Float32Array(particlesCount * 3);
        const particleSpeeds: number[] = [];

        const colorPalette = [
            new THREE.Color(0x6366f1),
            new THREE.Color(0x22d3ee),
            new THREE.Color(0x8b5cf6),
            new THREE.Color(0x10b981),
        ];

        for (let i = 0; i < particlesCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = 0.5 + Math.random() * 3.5;
            particlePositions[i * 3] = Math.cos(angle) * radius;
            particlePositions[i * 3 + 1] = -1 + Math.random() * 4;
            particlePositions[i * 3 + 2] = Math.sin(angle) * radius;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            particleColors[i * 3] = color.r;
            particleColors[i * 3 + 1] = color.g;
            particleColors[i * 3 + 2] = color.b;

            particleSpeeds.push(0.005 + Math.random() * 0.01);
        }

        const particleGeom = new THREE.BufferGeometry();
        particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
        particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

        const particleMat = new THREE.PointsMaterial({
            size: 0.03,
            vertexColors: true,
            transparent: true,
            opacity: 0.7,
            blending: THREE.AdditiveBlending,
        });

        const particles = new THREE.Points(particleGeom, particleMat);
        scene.add(particles);

        // === ANILLOS ORBITALES ===
        const rings: THREE.Mesh[] = [];
        for (let i = 0; i < 2; i++) {
            const ringGeom = new THREE.TorusGeometry(2.5 + i * 0.7, 0.015, 8, 64);
            const ringMat = new THREE.MeshBasicMaterial({
                color: i === 0 ? 0x6366f1 : 0x22d3ee,
                transparent: true,
                opacity: 0.25,
            });
            const ring = new THREE.Mesh(ringGeom, ringMat);
            ring.rotation.x = Math.PI / 2 + (i - 0.5) * 0.4;
            ring.position.y = 1;
            rings.push(ring);
            scene.add(ring);
        }

        // Clock y animación
        const clock = new THREE.Clock();
        let animationFrameId: number;

        // Event listeners
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseenter", handleMouseEnter);
        container.addEventListener("mouseleave", handleMouseLeave);

        const handleResize = () => {
            if (!container) return;
            sizes.width = container.clientWidth;
            renderer.setSize(sizes.width, sizes.height);
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener("resize", handleResize);

        // Loop de animación
        const animate = () => {
            const elapsed = clock.getElapsedTime();

            // Rotación de la laptop
            const targetRotationY = isHoveredRef.current
                ? mouseRef.current.x * 0.35
                : Math.sin(elapsed * 0.2) * 0.12;
            const targetRotationX = isHoveredRef.current
                ? mouseRef.current.y * 0.1
                : 0;

            laptopGroup.rotation.y += (targetRotationY - laptopGroup.rotation.y) * 0.05;
            laptopGroup.rotation.x += (targetRotationX - laptopGroup.rotation.x) * 0.05;

            // Animación de las líneas de código
            codeLines.children.forEach((line, i) => {
                const mesh = line as THREE.Mesh;
                const mat = mesh.material as THREE.MeshBasicMaterial;
                mat.opacity = 0.5 + Math.sin(elapsed * 3 + i * 0.6) * 0.3;
            });

            // Animar iconos flotantes
            iconSprites.forEach((sprite) => {
                const data = sprite.userData;
                const angle = data.baseAngle + elapsed * data.speed;

                // Movimiento orbital suave
                sprite.position.x = Math.cos(angle) * data.radius;
                sprite.position.z = Math.sin(angle) * data.radius;
                sprite.position.y = data.baseY + Math.sin(elapsed * 0.8 + data.phaseOffset) * 0.25;

                // Efecto de escala pulsante suave
                const pulseScale = 1 + Math.sin(elapsed * 2 + data.phaseOffset) * 0.08;
                const baseScale = 0.5 + (data.radius - 2.2) * 0.3;
                sprite.scale.set(baseScale * pulseScale, baseScale * pulseScale, 1);
            });

            // Rotar grupo de iconos
            iconGroup.rotation.y = elapsed * 0.08;

            // Animar partículas
            const posAttr = particles.geometry.getAttribute("position") as THREE.BufferAttribute;
            for (let i = 0; i < particlesCount; i++) {
                let y = posAttr.getY(i);
                y += particleSpeeds[i];
                if (y > 3.5) y = -1;
                posAttr.setY(i, y);
            }
            posAttr.needsUpdate = true;

            // Rotar anillos
            rings.forEach((ring, i) => {
                ring.rotation.z = elapsed * (0.08 + i * 0.04);
            });

            // Animación de luz puntual
            pointLight.intensity = 0.7 + Math.sin(elapsed * 1.5) * 0.25;

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseenter", handleMouseEnter);
            container.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", handleResize);

            if (renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }

            // Dispose textures
            loadedTextures.forEach(texture => texture.dispose());

            // Dispose geometries and materials
            scene.traverse((object) => {
                if (object instanceof THREE.Mesh) {
                    object.geometry.dispose();
                    if (Array.isArray(object.material)) {
                        object.material.forEach((mat) => mat.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
                if (object instanceof THREE.Sprite) {
                    object.material.dispose();
                }
            });

            particleGeom.dispose();
            particleMat.dispose();
            renderer.dispose();
        };
    }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

    return (
        <div
            ref={containerRef}
            className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden cursor-pointer"
            style={{
                background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 27, 75, 0.95) 50%, rgba(15, 23, 42, 0.95) 100%)",
            }}
        />
    );
};

export default CodeEngineerScene;
