import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }: any) => {
  return (
    <button
      className={`${
        isSelected 
          ? '!border-purple-500 !text-white' // Purple border if selected, with important to ensure it takes precedence
          : 'border-slate-600 text-[#ADB7BE] hover:!border-white' // Slate border by default, white on hover, with important
      } rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
