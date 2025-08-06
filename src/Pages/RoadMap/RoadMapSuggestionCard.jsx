import React from "react";
import styles from "./roadMapPage.module.css";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

const RoadMapSuggestionCard = () => {
  return (
    <div
      id="suggestion-1"
      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
    >
      <div className="flex justify-between items-start mb-3">
        <h5
          className={`font-medium text-gray-800 ${styles.font_family_headers}`}
        >
          Dark Mode Support
        </h5>
        <div className="flex items-center">
          <button
            className={`flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700 ${styles.font_family_sub_headers}`}
            style={{
              borderRadius: "5px",
            }}
          >
            <ArrowUpwardRoundedIcon color="action" fontSize="small" />
            <span>42</span>
          </button>
        </div>
      </div>
      <p
        className={`text-gray-600 text-md mb-4  ${styles.font_family_sub_headers}`}
      >
        Add dark mode support to reduce eye strain when using the app at night.
      </p>
      <div
        className={`flex flex-wrap gap-2 mb-4 ${styles.font_family_sub_headers}`}
      >
        <span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
          Feature
        </span>
        <span className="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">
          UI/UX
        </span>
      </div>
      <div
        className={`flex items-center justify-between ${styles.font_family_sub_headers}`}
      >
        <div className="flex items-center text-sm text-gray-500">
          <ChatBubbleRoundedIcon
            color="action"
            fontSize="small"
            className="mr-2"
          />
          <span>8 comments</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>Submitted 2 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default RoadMapSuggestionCard;
