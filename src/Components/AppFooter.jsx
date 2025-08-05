import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PinterestIcon from "@mui/icons-material/Pinterest";

const AppFooter = () => {
  return (
    <footer id="footer" className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" mt-3 pt-3 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0 footer_text">
            © 2025 FeedbackBox. All rights reserved.
          </div>
          <div className="flex space-x-6 pb-3">
            <span className="text-gray-500 hover:text-primary cursor-pointer">
              <TwitterIcon className="text-xl" />
            </span>
            <span className="text-gray-500 hover:text-primary cursor-pointer">
              <LinkedInIcon className="text-xl" />
            </span>
            <span className="text-gray-500 hover:text-primary cursor-pointer">
              <GitHubIcon className="text-xl" />
            </span>
            <span className="text-gray-500 hover:text-primary cursor-pointer">
              <PinterestIcon className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
