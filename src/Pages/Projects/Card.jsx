import React from "react";
import styles from "./projectPage.module.css";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import Button from "@mui/material/Button";

const Card = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-elevation overflow-hidden transition-transform hover:shadow-elevation-md hover:-translate-y-1">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center mb-2">
              <h3
                className={`text-xl font-semibold text-gray-900 ${styles.font_family_headers}`}
              >
                Landing Page MVP
              </h3>
              <span
                className={`ml-3 bg-blue-100 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded-full  ${styles.font_family_sub_headers}`}
              >
                MVP
              </span>
            </div>
            <p
              className={`text-gray-600 text-lg line-clamp-2 ${styles.font_family_sub_headers}`}
            >
              Collecting feedback on our new landing page design before the
              official launch.
            </p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <ChatBubbleRoundedIcon color="secondary" />
          <span
            className={`text-md pl-2 font-medium text-gray-700 ${styles.font_family_sub_headers}`}
          >
            12 feedback received
          </span>
        </div>

        <div className="flex items-center p-2 bg-gray-50 rounded-lg mb-5">
          <span
            className={`text-sm text-gray-500 truncate flex-1  ${styles.font_family_headers}`}
          >
            feedbackbox.io/p/landing-page-mvp
          </span>
          <button
            className="ml-2 text-gray-500 hover:text-primary"
            title="Copy link"
          >
            <ContentPasteRoundedIcon />
          </button>
        </div>

        <div className="flex justify-end space-x-2">
          <Button startIcon={<VisibilityRoundedIcon />} variant="outlined">
            View
          </Button>
          &nbsp; &nbsp;
          <Button
            startIcon={<ModeEditOutlineRoundedIcon />}
            variant="outlined"
            color="secondary"
          >
            Edit
          </Button>
          &nbsp;&nbsp;
          <Button
            startIcon={<ModeEditOutlineRoundedIcon />}
            variant="outlined"
            color="error"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
