import React, { FC } from 'react';

interface SpaceProps {
  height: string;
}

const Space: FC<SpaceProps> = ({ height }) => {
  return (
    <div className={`h-[${height}px] bg-gray-500 w-1 opacity-30 rounded-full`}></div>
  );
}

export default Space;
