import Button from "@mui/material/Button";
import styles from "./dashboard.module.css";
import AddIcon from "@mui/icons-material/Add";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import RouteRoundedIcon from "@mui/icons-material/RouteRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import AutoModeRoundedIcon from "@mui/icons-material/AutoModeRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import {  SignedIn } from '@clerk/react-router'

const DashBoard = () => {
  return (

    <main
      id="dashboard-content"
      className="pt-4 pb-16  text-gray-800 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* <-- Page Title Section --> */}
        <div id="page-title" className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div
                className={`text-sm text-gray-500 mb-1 ${styles.font_family_sub_headers}`}
              >
                Overview for
              </div>
              <h3
                className={`text-2xl md:text-3xl font-bold ${styles.font_family_headers}`}
              >
                Dashboard
              </h3>
            </div>
            <div class="mt-4 md:mt-0">
              <Button
                startIcon={<AddIcon />}
                variant="contained"
                color="secondary"
              >
                New Project
              </Button>
            </div>
          </div>
        </div>

        {/* <-- Project Summary Panel --> */}
        <div
          id="project-summary"
          className="bg-white rounded-xl shadow-elevation mb-8 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row">
            <div className="p-6 md:w-2/3 border-b md:border-b-0 md:border-r border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mr-4">
                  <RocketLaunchIcon className="text-3xl" />
                </div>
                <h3
                  className={`text-xl font-bold  ${styles.font_family_headers}`}
                >
                  SaaS Product Portal
                </h3>
              </div>
              <p
                className={`text-gray-600 mb-6 ${styles.font_family_headers} `}
              >
                A customer feedback portal for our SaaS product. Collect feature
                requests, bug reports, and general feedback from users.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center text-sm font-medium  text-error hover:text-primary-dark transition-colors cursor-pointer">
                  <ForumRoundedIcon color="error" className="mr-1" />
                  Public Suggestion Board
                </span>
                <span className="inline-flex items-center text-sm font-medium text-error hover:text-primary-dark transition-colors cursor-pointer">
                  <RouteRoundedIcon color="error" className="mr-1" />
                  Public Roadmap
                </span>
              </div>
            </div>
            <div className="bg-gray-50 p-6 md:w-1/3">
              <h3 className={`font-medium mb-4 ${styles.font_family_headers}`}>
                Quick Stats
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span
                    className={`text-gray-600  ${styles.font_family_sub_headers}`}
                  >
                    Portal Views
                  </span>
                  <span
                    className={`font-medium ${styles.font_family_sub_headers}`}
                  >
                    1,245
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-gray-600 ${styles.font_family_sub_headers}`}
                  >
                    Unique Visitors
                  </span>
                  <span
                    className={`font-medium ${styles.font_family_sub_headers}`}
                  >
                    328
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span
                    className={`text-gray-600 ${styles.font_family_sub_headers}`}
                  >
                    Feedback Conversion
                  </span>
                  <span
                    className={`font-medium ${styles.font_family_sub_headers}`}
                  >
                    12.4%
                  </span>
                </div>
                <div
                  className={`flex justify-between items-center ${styles.font_family_sub_headers} `}
                >
                  <span className="text-gray-600">Last Updated</span>
                  <span className="text-sm text-gray-500">Today, 10:45 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <-- Key Metrics Section --> */}
        <div
          id="key-metrics"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div
            id="total-suggestions"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-elevation transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <LightbulbRoundedIcon color="secondary" />
              </div>
              <span
                className={`text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full ${styles.font_family_sub_headers_strong}`}
              >
                All Time
              </span>
            </div>
            <h3
              className={`text-2xl font-bold mb-1 ${styles.font_family_headers}`}
            >
              124
            </h3>
            <p
              className={`text-gray-600 ${styles.font_family_sub_headers_strong}`}
            >
              Total Suggestions
            </p>
            <div
              className={`flex items-center mt-3 text-sm text-green-600 ${styles.font_family_sub_headers_strong}`}
            >
              <ArrowUpwardRoundedIcon className="mr-1" color="success" />
              <span>12% from last month</span>
            </div>
          </div>

          <div
            id="total-votes"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-elevation transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <ThumbUpRoundedIcon color="secondary" />
              </div>
              <span
                className={`text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full ${styles.font_family_sub_headers_strong}`}
              >
                All Time
              </span>
            </div>
            <h3
              className={`text-2xl font-bold mb-1 ${styles.font_family_headers}`}
            >
              856
            </h3>
            <p
              className={`text-gray-600 ${styles.font_family_sub_headers_strong}`}
            >
              Total Votes
            </p>
            <div
              className={`flex items-center mt-3 text-sm text-green-600 ${styles.font_family_sub_headers_strong}`}
            >
              <ArrowUpwardRoundedIcon className="mr-1" color="success" />

              <span class="">24% from last month</span>
            </div>
          </div>

          <div
            id="total-comments"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-elevation transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <ChatBubbleRoundedIcon color="secondary" />
              </div>
              <span
                className={`text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full ${styles.font_family_sub_headers_strong}`}
              >
                All Time
              </span>
            </div>
            <h3
              className={`text-2xl font-bold mb-1 ${styles.font_family_headers}`}
            >
              238
            </h3>
            <p
              className={`text-gray-600 ${styles.font_family_sub_headers_strong}`}
            >
              Total Comments
            </p>
            <div
              className={`flex items-center mt-3 text-sm text-green-600 ${styles.font_family_sub_headers_strong}`}
            >
              <ArrowUpwardRoundedIcon className="mr-1" color="success" />
              <span className="">8% from last month</span>
            </div>
          </div>

          <div
            id="most-voted"
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-elevation transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <EmojiEventsRoundedIcon color="success" />
              </div>
              <span
                className={`text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full ${styles.font_family_sub_headers_strong}`}
              >
                Top Request
              </span>
            </div>
            <h4
              className={`text-lg font-medium mb-1 truncate ${styles.font_family_headers}`}
            >
              Dark Mode Support
            </h4>
            <p
              className={`text-gray-600 ${styles.font_family_sub_headers_strong}`}
            >
              68 votes
            </p>
            <div className="flex items-center mt-3 text-sm text-secondary">
              <span className="text-purple-500">View suggestion</span>
              <ArrowForwardRoundedIcon className="ml-1" color="secondary" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <-- Suggestion Status Overview --> */}
          <div id="status-overview" className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-elevation overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b border-gray-100">
                <h5
                  className={`text-lg font-bold ${styles.font_family_headers}`}
                >
                  Suggestion Status Overview
                </h5>
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreVertRoundedIcon />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-new bg-opacity-10 mb-2">
                      <LightbulbRoundedIcon color="primary" fontSize="large" />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-status-new text-blue-400 ${styles.font_family_headers}`}
                      style={{
                        fontColor: "blue !important",
                      }}
                    >
                      42
                    </h3>
                    <p
                      className={`text-gray-600 text-sm ${styles.font_family_sub_headers_strong}`}
                    >
                      New
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-planned bg-opacity-10 mb-2">
                      <AssignmentRoundedIcon
                        color="secondary"
                        fontSize="large"
                      />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-status-planned  ${styles.font_family_headers}`}
                    >
                      28
                    </h3>
                    <p
                      className={`text-gray-600 text-sm ${styles.font_family_sub_headers_strong}`}
                    >
                      Planned
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-progress bg-opacity-10 mb-2">
                      <AutoModeRoundedIcon color="error" fontSize="large" />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-status-planned  ${styles.font_family_headers}`}
                    >
                      16
                    </h3>
                    <p
                      className={`text-gray-600 text-sm ${styles.font_family_sub_headers_strong}`}
                    >
                      In Progress
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-launched bg-opacity-10 mb-2">
                      <RocketLaunchRoundedIcon
                        color="success"
                        fontSize="large"
                      />
                    </div>
                    <h3
                      className={`text-2xl font-bold text-status-planned  ${styles.font_family_headers}`}
                    >
                      38
                    </h3>
                    <p
                      className={`text-gray-600 text-sm ${styles.font_family_sub_headers_strong}`}
                    >
                      Launched
                    </p>
                  </div>
                </div>

                <div className="h-64 flex items-center justify-center">
                  <div className="w-full h-full">
                    <div className="relative h-full">
                      <div className="absolute bottom-0 left-0 w-1/4 h-[30%] bg-blue-500 rounded-t-lg mx-6"></div>
                      <div className="absolute bottom-0 left-1/4 w-1/4 h-[20%] bg-purple-500 rounded-t-lg mx-6"></div>
                      <div className="absolute bottom-0 left-2/4 w-1/4 h-[12%] bg-red-500 rounded-t-lg mx-6"></div>
                      <div className="absolute bottom-0 left-3/4 w-1/4 h-[28%] bg-green-500 rounded-t-lg mx-6"></div>

                      <div
                        class={`absolute bottom-[-24px] left-[8%] text-xs text-gray-600 ${styles.font_family_headers}`}
                      >
                        New
                      </div>
                      <div
                        className={`absolute bottom-[-24px] left-[33%] text-xs text-gray-600 ${styles.font_family_headers}`}
                      >
                        Planned
                      </div>
                      <div
                        className={`absolute bottom-[-24px] left-[58%] text-xs text-gray-600 ${styles.font_family_headers}`}
                      >
                        In Progress
                      </div>
                      <div
                        className={`absolute bottom-[-24px] left-[83%] text-xs text-gray-600 ${styles.font_family_headers}`}
                      >
                        Launched
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <-- Quick Actions Panel --> */}
          <div id="quick-actions" className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-elevation overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h5
                  className={`text-lg font-bold ${styles.font_family_headers}`}
                >
                  Quick Actions
                </h5>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                        <RouteRoundedIcon
                          className="text-primary"
                          fontSize="small"
                        />
                      </div>
                      <span
                        className={`font-medium ${styles.font_family_sub_headers_strong}`}
                      >
                        Manage Road Map
                      </span>
                    </div>
                    <ArrowForwardRoundedIcon
                      fontSize="small"
                      color="secondary"
                    />
                  </button>

                  <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                        <LightbulbRoundedIcon
                          className="text-primary"
                          fontSize="small"
                        />
                      </div>
                      <span
                        className={`font-medium ${styles.font_family_sub_headers_strong}`}
                      >
                        View New Suggestions
                      </span>
                    </div>
                    <ArrowForwardRoundedIcon
                      fontSize="small"
                      color="secondary"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <--- RECENT ACTIVITY SECTION ---> */}
        <div id="recent-activity" className="mt-8">
          <div className="bg-white rounded-xl shadow-elevation overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h5
                className={`text-lg font-bold  ${styles.font_family_headers} `}
              >
                Recent Activity
              </h5>
              <div className="flex items-center space-x-2">
                <select
                  className={`text-sm border border-gray-200 rounded-lg px-3 py-2 bg-gray-50 ${styles.font_family_sub_headers}`}
                >
                  <option>All Activity</option>
                  <option>New Suggestions</option>
                  <option>Status Changes</option>
                  <option>Comments</option>
                </select>
                <button className="text-gray-500 hover:text-gray-700">
                  <i data-fa-i2svg="">
                    <svg
                      class="svg-inline--fa fa-ellipsis-vertical"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="ellipsis-vertical"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 512"
                      data-fa-i2svg=""
                    >
                      <path
                        fill="currentColor"
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                      ></path>
                    </svg>
                  </i>
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              <div className="p-6 flex">
                <div className="mr-4 relative">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <LightbulbRoundedIcon fontSize="small" color="blue" />
                  </div>
                  <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h5
                      className={`font-medium  ${styles.font_family_sub_headers_strong}`}
                    >
                      New suggestion submitted
                    </h5>
                    <span
                      className={`text-xs text-gray-500 ml-3  ${styles.font_family_sub_headers_strong}`}
                    >
                      2 hours ago
                    </span>
                  </div>
                  <p
                    className={`text-gray-600 mb-2  ${styles.font_family_sub_headers_strong}`}
                  >
                    "Add integration with Zapier to connect with other tools"
                  </p>
                  <div className="flex items-center text-sm">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="User"
                      class="h-6 w-6 rounded-full mr-2"
                    />
                    <span
                      className={`text-gray-600 ${styles.font_family_sub_headers_strong}`}
                    >
                      by Michael Torres
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex">
                <div className="mr-4 relative">
                  <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <ArrowUpwardRoundedIcon
                      fontSize="small"
                      color="secondary"
                    />
                  </div>
                  <div className="absolute top-10 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div>
                  <div className="flex items-center mb-1">
                    <h5
                      className={`font-medium  ${styles.font_family_sub_headers_strong}`}
                    >
                      Status changed to "Planned"
                    </h5>
                    <span
                      className={`text-xs text-gray-500 ml-3  ${styles.font_family_sub_headers_strong}`}
                    >
                      5 hours ago
                    </span>
                  </div>
                  <p
                    className={`text-gray-600 mb-2  ${styles.font_family_sub_headers_strong}`}
                  >
                    "Dark Mode Support" is now planned for the next release
                  </p>
                  <div className="flex items-center text-sm">
                    <div className="h-6 w-6 rounded-full bg-purple-500 flex items-center justify-center text-white mr-2">
                      <span className="text-xs">JD</span>
                    </div>
                    <span
                      className={`text-gray-600 ${styles.font_family_sub_headers_strong}`}
                    >
                      by You
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <button
                className={
                  "text-purple-500 hover:text-primary-dark font-medium " +
                  styles.font_family_sub_headers_strong
                }
              >
                View All Activity
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
