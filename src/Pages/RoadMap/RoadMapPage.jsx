import React from "react";
import styles from "./roadMapPage.module.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import RoadMapSuggestionCard from "./RoadMapSuggestionCard";
import AppFooter from "../../Components/AppFooter";
const RoadMapPage = () => {
  return (
    <main id="roadmap-content" className="pt-6 bg-gray-50">
      {/* <!-- Page Title Section --> */}
      <section id="page-title" className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center mb-2">
                <h3
                  className={`text-2xl font-semibold mr-3 ${styles.font_family_headers}`}
                >
                  Roadmap
                </h3>
                <div
                  className={`flex items-center text-gray-600 font-medium cursor-pointer px-3 py-1.5 rounded-md hover:bg-gray-100 border border-gray-200 ${styles.font_family_sub_headers}`}
                >
                  <span>ProductX Portal</span>
                  <ArrowDropDownRoundedIcon />
                </div>
              </div>
              <p
                className={`text-gray-600 mt-1 ${styles.font_family_sub_headers}`}
              >
                See what's planned, in progress, and recently launched for
                ProductX
              </p>
            </div>
            <div
              className={`mt-4 md:mt-0 flex items-center space-x-3 ${styles.font_family_sub_headers} `}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search features..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <SearchRoundedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="relative">
                <Button
                  startIcon={<AddIcon />}
                  variant="contained"
                  color="secondary"
                >
                  New Suggestion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Filter Controls --> */}
      <section
        id="filter-controls"
        className="bg-white border-b border-gray-200"
      >
        <div className="px-6 py-3">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`flex items-center space-x-2  ${styles.font_family_sub_headers}`}
              >
                <span className="text-sm text-gray-600">Filter by:</span>
                <div className="relative">
                  <select class="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-1.5 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-primary text-sm">
                    <option>All Categories</option>
                    <option>Feature</option>
                    <option>Bug Fix</option>
                    <option>Enhancement</option>
                    <option>Documentation</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ArrowDropDownRoundedIcon />
                  </div>
                </div>
              </div>
              <div
                className={`flex items-center space-x-2  ${styles.font_family_sub_headers}`}
              >
                <span className="text-sm text-gray-600">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-1.5 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-primary text-sm">
                    <option>Most Upvoted</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <ArrowDropDownRoundedIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-2 sm:mt-0">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="show-archived"
                  className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <label
                  for="show-archived"
                  className={`ml-2 text-sm text-gray-600  ${styles.font_family_sub_headers}`}
                >
                  Show Archived
                </label>
              </div>
              <button
                className={`flex items-center text-sm text-gray-600 hover:text-primary  ${styles.font_family_sub_headers}`}
              >
                <AutorenewRoundedIcon />
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Roadmap Columns --> */}
      <section id="roadmap-columns" className="py-8">
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Planned Column --> */}
            <div
              id="planned-column"
              className="bg-white rounded-xl shadow-elevation border border-gray-100 overflow-hidden"
            >
              <div className="bg-blue-100 px-5 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-2.5"></div>
                    <h5
                      className={`font-semibold text-gray-800 ${styles.font_family_headers} mt-2`}
                    >
                      Planned
                    </h5>
                  </div>
                  <span
                    className={`bg-blue-200 text-blue-500 px-2.5 py-1 rounded-full text-xs font-medium ${styles.font_family_headers}`}
                  >
                    8
                  </span>
                </div>
              </div>
              <div class="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {/* <!-- Suggestion Card 1 --> */}
                <RoadMapSuggestionCard />
                {/* <!-- Suggestion Card 2 --> */}
                <RoadMapSuggestionCard />
                {/* <!-- Suggestion Card 3 --> */}
                <RoadMapSuggestionCard />
              </div>
            </div>

            {/* <!-- In Progress Column --> */}
            <div
              id="in-progress-column"
              className="bg-white rounded-xl shadow-elevation border border-gray-100 overflow-hidden"
            >
              <div className="bg-purple-100 px-5 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-purple-500 mr-2.5"></div>
                    <h5
                      className={`font-semibold text-gray-800 ${styles.font_family_headers} mt-2`}
                    >
                      In Progress
                    </h5>
                  </div>
                  <span
                    className={`bg-purple-200 text-purple-500 px-2.5 py-1 rounded-full text-xs font-medium ${styles.font_family_headers}`}
                  >
                    5
                  </span>
                </div>
              </div>
              <div class="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {/* <!-- Suggestion Card 4 --> */}
                <RoadMapSuggestionCard />
                {/* <!-- Suggestion Card 5 --> */}
                <RoadMapSuggestionCard />
                {/* <!-- Suggestion Card 6 --> */}
                <RoadMapSuggestionCard />
              </div>
            </div>

            {/* <!-- Launched Column --> */}
            <div
              id="launched-column"
              className="bg-white rounded-xl shadow-elevation border border-gray-100 overflow-hidden"
            >
              <div className="bg-green-100 px-5 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2.5"></div>
                    <h5
                      className={`font-semibold text-gray-800 ${styles.font_family_headers} mt-2`}
                    >
                      Launched
                    </h5>
                  </div>
                  <span
                    className={`bg-green-200 text-green-500 px-2.5 py-1 rounded-full text-xs font-medium ${styles.font_family_headers}`}
                  >
                    6
                  </span>
                </div>
              </div>
              <div class="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {/* <!-- Suggestion Card 7 --> */}
                <RoadMapSuggestionCard />
                {/* <!-- Suggestion Card 8 --> */}
                <RoadMapSuggestionCard />
                {/* <!-- Suggestion Card 9 --> */}
                <RoadMapSuggestionCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <-- Feedback Prompt CTA --> */}
      <section id="feedback-cta" className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-xl shadow-sm border border-gray-100 p-8 text-center ${styles.hero_section_container}`}
          >
            <h3
              className={`text-xl font-semibold mb-3 ${styles.font_family_headers}`}
            >
              Have ideas to improve ProductX?
            </h3>
            <p
              className={`text-gray-600 mb-6 max-w-xl mx-auto text-lg ${styles.font_family_sub_headers}`}
            >
              Your feedback helps us build a better product. Submit your
              suggestions and see them come to life on our roadmap.
            </p>

            <div className="relative">
              <Button variant="contained" color="secondary">
                Submit Your Suggestion
              </Button>
            </div>
          </div>
        </div>
      </section>
      <AppFooter />
    </main>
  );
};

export default RoadMapPage;
