import React from 'react';
import { SiMysql, SiExpress, SiPhp, SiNodedotjs, SiPython, SiMongodb, SiNextdotjs, SiGit } from 'react-icons/si';

const frontendSkills = [
  {
    name: 'HTML',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    )
  },
  {
    name: 'CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    )
  },
  {
    name: 'JavaScript',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#F7DF1E" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    )
  },
  {
    name: 'ReactJS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        <path fill="#61DAFB" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    )
  },
  {
    name: 'TailwindCSS',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-10 h-10"
        fill="none"
      >
        <path
          d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C7.666,17.818,9.027,19.2,12.001,19.2c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
          fill="#06B6D4"
        />
      </svg>
    )
  }
];

const backendSkills = [
  {
    name: 'PHP',
    icon: (
      <SiPhp className="w-10 h-10 text-[#777BB4]" />
    )
  },
  {
    name: 'Node.js',
    icon: (
      <SiNodedotjs className="w-10 h-10 text-[#8CC84B]" />
    )
  },
  {
    name: 'Python',
    icon: (
      <SiPython className="w-10 h-10 text-[#3776AB]" />
    )
  },
  {
    name: 'Express.js',
    icon: (
      <SiExpress className="w-10 h-10 text-gray-900 dark:text-white" />
    )
  },
  {
    name: 'MySQL',
    icon: <SiMysql className="w-10 h-10 text-[#4479A1]" />
  },
  {
    name: 'MongoDB',
    icon: (
      <SiMongodb className="w-10 h-10 text-[#47A248]" />
    )
  },
  {
    name: 'Next.js',
    icon: (
      <SiNextdotjs className="w-10 h-10 text-gray-900 dark:text-white" />
    )
  }
];

const learningSkills = [
  {
    name: 'Google Cloud',
  }

  // Microsoft Azure - Path correcto
  , {
    name: 'Microsoft Azure',
  }
];

const tools = [
  {
    name: 'Git',
    icon: (
      < SiGit className="w-10 h-10 text-[#F05032]" />
    )
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-900 dark:text-white">
        <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.096.823 2.21v3.285c0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    )
  },
  {
    name: 'Terminal',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-900 dark:text-white">
        <path fill="currentColor" d="M2 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm0 2h20v12H2V6zm2.5 2.5l2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4-1.5 1.5zm5.5 7v-2h6v2h-6z" />
      </svg>
    )
  },
  {
    name: 'VSCode',
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-10 h-10"
        fill="none"
      >
        <defs>
          <linearGradient id="vscodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0078D4" />
            <stop offset="100%" stopColor="#005A9E" />
          </linearGradient>
        </defs>
        <path
          d="M17.5 1.5C17.78 1.5 18.05 1.61 18.25 1.81L21.75 4.81C21.91 4.95 22 5.15 22 5.36V18.64C22 18.85 21.91 19.05 21.75 19.19L18.25 22.19C18.05 22.39 17.78 22.5 17.5 22.5C17.22 22.5 16.95 22.39 16.75 22.19L8.25 15.19L3.75 19.19C3.55 19.39 3.28 19.5 3 19.5C2.72 19.5 2.45 19.39 2.25 19.19L1.25 18.19C1.09 18.05 1 17.85 1 17.64V6.36C1 6.15 1.09 5.95 1.25 5.81L2.25 4.81C2.45 4.61 2.72 4.5 3 4.5C3.28 4.5 3.55 4.61 3.75 4.81L8.25 8.81L16.75 1.81C16.95 1.61 17.22 1.5 17.5 1.5ZM17.5 7.5L11.25 12L17.5 16.5V7.5Z"
          fill="url(#vscodeGradient)"
        />
      </svg>
    )
  }
];

export default function Skills() {
  return (
    <div className="py-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Card */}
          <div className="group rounded-3xl p-6 transition-all duration-300 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">Frontend</h3>
            </div>
            <div className="space-y-3">
              {frontendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-3 rounded-2xl transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 group/item"
                >
                  <div className="transform transition-transform duration-300 group-hover/item:scale-110">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="group rounded-3xl p-6 transition-all duration-300 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-300">Backend</h3>
            </div>
            <div className="space-y-3">
              {backendSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-3 rounded-2xl transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 group/item"
                >
                  <div className="transform transition-transform duration-300 group-hover/item:scale-110">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-green-500 dark:group-hover/item:text-green-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Card */}
          <div className="group rounded-3xl p-6 transition-all duration-300 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-300">Aprendiendo</h3>
            </div>
            <div className="space-y-3">
              {learningSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-3 rounded-2xl transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 group/item"
                >
                  <div className="transform transition-transform duration-300 group-hover/item:scale-110">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-orange-500 dark:group-hover/item:text-orange-400 transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Card */}
          <div className="group rounded-3xl p-6 transition-all duration-300 bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300">Herramientas</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50 group/item text-center"
                >
                  <div className="transform transition-transform duration-300 group-hover/item:scale-110">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover/item:text-indigo-500 dark:group-hover/item:text-indigo-400 transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}