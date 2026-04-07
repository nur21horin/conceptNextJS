"use client";
import { useRouter } from "next/navigation";
import React from "react";

const StoryCard = ({ story }) => {
    const router=useRouter();
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-5 flex gap-4 items-center">

      {/* Profile Image */}
      <img
        src={story.image}
        alt={story.name}
        className="w-16 h-16 rounded-full object-cover border-2 border-sky-400"
      />

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800">
          {story.name}
        </h2>

        <p className="text-sm text-gray-500">
          {story.designation}
        </p>

        <p className="text-sm text-gray-400">
          {story.company}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mt-2">
          {story.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-sky-100 text-sky-600 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Button */}
      <button onClick={()=>router.push(`/story/${story.id}`)} className="px-3 py-1 text-sm bg-sky-500 text-white rounded-lg hover:bg-black transition">
        View
      </button>
    </div>
  );
};

export default StoryCard;