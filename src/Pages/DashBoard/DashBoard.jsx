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
              <h1
                className={`text-2xl md:text-3xl font-bold ${styles.font_family_headers}`}
              >
                Dashboard
              </h1>
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
                <h2
                  className={`text-xl font-bold  ${styles.font_family_headers}`}
                >
                  SaaS Product Portal
                </h2>
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
            <h3
              className={`text-lg font-medium mb-1 truncate ${styles.font_family_headers}`}
            >
              Dark Mode Support
            </h3>
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
                <h3
                  className={`text-lg font-bold ${styles.font_family_headers}`}
                >
                  Suggestion Status Overview
                </h3>
                <button class="text-gray-500 hover:text-gray-700">
                  <MoreVertRoundedIcon />
                </button>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-new bg-opacity-10 mb-2">
                      <i class="text-status-new" data-fa-i2svg="">
                        <svg
                          class="svg-inline--fa fa-lightbulb"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="lightbulb"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <h3 class="text-2xl font-bold text-status-new">42</h3>
                    <p class="text-gray-600 text-sm">New</p>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 text-center">
                    <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-planned bg-opacity-10 mb-2">
                      <i class="text-status-planned" data-fa-i2svg="">
                        <svg
                          class="svg-inline--fa fa-clipboard-list"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="clipboard-list"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM72 272a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zM72 368a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm88 0c0-8.8 7.2-16 16-16H304c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <h3 class="text-2xl font-bold text-status-planned">28</h3>
                    <p class="text-gray-600 text-sm">Planned</p>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 text-center">
                    <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-progress bg-opacity-10 mb-2">
                      <i class="text-status-progress" data-fa-i2svg="">
                        <svg
                          class="svg-inline--fa fa-code-branch"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="code-branch"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3v87.8c18.8-10.9 40.7-17.1 64-17.1h96c35.3 0 64-28.7 64-64v-6.7C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V160c0 70.7-57.3 128-128 128H176c-35.3 0-64 28.7-64 64v6.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V352 153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm232 0a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM80 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <h3 class="text-2xl font-bold text-status-progress">16</h3>
                    <p class="text-gray-600 text-sm">In Progress</p>
                  </div>

                  <div class="bg-gray-50 rounded-lg p-4 text-center">
                    <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-status-launched bg-opacity-10 mb-2">
                      <i class="text-status-launched" data-fa-i2svg="">
                        <svg
                          class="svg-inline--fa fa-rocket"
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="rocket"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          data-fa-i2svg=""
                        >
                          <path
                            fill="currentColor"
                            d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <h3 class="text-2xl font-bold text-status-launched">38</h3>
                    <p class="text-gray-600 text-sm">Launched</p>
                  </div>
                </div>

                <div class="h-64 flex items-center justify-center">
                  <div class="w-full h-full">
                    <div class="relative h-full">
                      <div class="absolute bottom-0 left-0 w-1/4 h-[30%] bg-status-new rounded-t-lg mx-6"></div>
                      <div class="absolute bottom-0 left-1/4 w-1/4 h-[20%] bg-status-planned rounded-t-lg mx-6"></div>
                      <div class="absolute bottom-0 left-2/4 w-1/4 h-[12%] bg-status-progress rounded-t-lg mx-6"></div>
                      <div class="absolute bottom-0 left-3/4 w-1/4 h-[28%] bg-status-launched rounded-t-lg mx-6"></div>

                      <div class="absolute bottom-[-24px] left-[8%] text-xs text-gray-600">
                        New
                      </div>
                      <div class="absolute bottom-[-24px] left-[33%] text-xs text-gray-600">
                        Planned
                      </div>
                      <div class="absolute bottom-[-24px] left-[58%] text-xs text-gray-600">
                        In Progress
                      </div>
                      <div class="absolute bottom-[-24px] left-[83%] text-xs text-gray-600">
                        Launched
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <-- Quick Actions Panel --> */}
          <div id="quick-actions" class="lg:col-span-1">
            <div class="bg-white rounded-xl shadow-elevation overflow-hidden">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-bold">Quick Actions</h2>
              </div>
              <div class="p-6">
                <div class="space-y-4">
                  <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex items-center">
                      <div class="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                        <i class="text-primary" data-fa-i2svg="">
                          <svg
                            class="svg-inline--fa fa-tag"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="tag"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                            ></path>
                          </svg>
                        </i>
                      </div>
                      <span class="font-medium">Manage Status Labels</span>
                    </div>
                    <i class="text-gray-400" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-chevron-right"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </i>
                  </button>

                  <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex items-center">
                      <div class="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                        <i class="text-primary" data-fa-i2svg="">
                          <svg
                            class="svg-inline--fa fa-palette"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="palette"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M512 256c0 .9 0 1.8 0 2.7c-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48c0 3.4 .4 6.7 1 9.9c2.1 10.2 6.5 20 10.8 29.9c6.1 13.8 12.1 27.5 12.1 42c0 31.8-21.6 60.7-53.4 62c-3.5 .1-7 .2-10.6 .2C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                            ></path>
                          </svg>
                        </i>
                      </div>
                      <span class="font-medium">Customize Portal</span>
                    </div>
                    <i class="text-gray-400" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-chevron-right"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </i>
                  </button>

                  <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex items-center">
                      <div class="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                        <i class="text-primary" data-fa-i2svg="">
                          <svg
                            class="svg-inline--fa fa-code"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="code"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                            ></path>
                          </svg>
                        </i>
                      </div>
                      <span class="font-medium">View Embed Code</span>
                    </div>
                    <i class="text-gray-400" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-chevron-right"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </i>
                  </button>

                  <button class="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div class="flex items-center">
                      <div class="bg-primary bg-opacity-10 p-2 rounded-lg mr-3">
                        <i class="text-primary" data-fa-i2svg="">
                          <svg
                            class="svg-inline--fa fa-user-plus"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="user-plus"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            data-fa-i2svg=""
                          >
                            <path
                              fill="currentColor"
                              d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
                            ></path>
                          </svg>
                        </i>
                      </div>
                      <span class="font-medium">Invite Team Members</span>
                    </div>
                    <i class="text-gray-400" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-chevron-right"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
                        ></path>
                      </svg>
                    </i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <--- RECENT ACTIVITY SECTION ---> */}
        <div id="recent-activity" class="mt-8">
          <div class="bg-white rounded-xl shadow-elevation overflow-hidden">
            <div class="flex justify-between items-center p-6 border-b border-gray-100">
              <h2 class="text-lg font-bold">Recent Activity</h2>
              <div class="flex items-center space-x-2">
                <select class="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-gray-50">
                  <option>All Activity</option>
                  <option>New Suggestions</option>
                  <option>Status Changes</option>
                  <option>Comments</option>
                </select>
                <button class="text-gray-500 hover:text-gray-700">
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
            <div class="divide-y divide-gray-100">
              <div class="p-6 flex">
                <div class="mr-4 relative">
                  <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <i class="text-blue-500" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-lightbulb"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="lightbulb"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
                        ></path>
                      </svg>
                    </i>
                  </div>
                  <div class="absolute top-10 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div>
                  <div class="flex items-center mb-1">
                    <h3 class="font-medium">New suggestion submitted</h3>
                    <span class="text-xs text-gray-500 ml-3">2 hours ago</span>
                  </div>
                  <p class="text-gray-600 mb-2">
                    "Add integration with Zapier to connect with other tools"
                  </p>
                  <div class="flex items-center text-sm">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="User"
                      class="h-6 w-6 rounded-full mr-2"
                    />
                    <span class="text-gray-600">by Michael Torres</span>
                  </div>
                </div>
              </div>

              <div class="p-6 flex">
                <div class="mr-4 relative">
                  <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <i class="text-purple-500" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-arrow-up"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-up"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        ></path>
                      </svg>
                    </i>
                  </div>
                  <div class="absolute top-10 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div>
                  <div class="flex items-center mb-1">
                    <h3 class="font-medium">Status changed to "Planned"</h3>
                    <span class="text-xs text-gray-500 ml-3">5 hours ago</span>
                  </div>
                  <p class="text-gray-600 mb-2">
                    "Dark Mode Support" is now planned for the next release
                  </p>
                  <div class="flex items-center text-sm">
                    <div class="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary-light flex items-center justify-center text-white mr-2">
                      <span class="text-xs">JD</span>
                    </div>
                    <span class="text-gray-600">by You</span>
                  </div>
                </div>
              </div>

              <div class="p-6 flex">
                <div class="mr-4 relative">
                  <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <i class="text-green-500" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-comment"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="comment"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"
                        ></path>
                      </svg>
                    </i>
                  </div>
                  <div class="absolute top-10 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                </div>
                <div>
                  <div class="flex items-center mb-1">
                    <h3 class="font-medium">New comment added</h3>
                    <span class="text-xs text-gray-500 ml-3">Yesterday</span>
                  </div>
                  <p class="text-gray-600 mb-2">
                    "This would be really helpful for our workflow. Looking
                    forward to it!"
                  </p>
                  <div class="flex items-center text-sm">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                      alt="User"
                      class="h-6 w-6 rounded-full mr-2"
                    />
                    <span class="text-gray-600">
                      by Sarah Johnson on "CSV Export Feature"
                    </span>
                  </div>
                </div>
              </div>

              <div class="p-6 flex">
                <div class="mr-4">
                  <div class="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                    <i class="text-pink-500" data-fa-i2svg="">
                      <svg
                        class="svg-inline--fa fa-rocket"
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="rocket"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        data-fa-i2svg=""
                      >
                        <path
                          fill="currentColor"
                          d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        ></path>
                      </svg>
                    </i>
                  </div>
                </div>
                <div>
                  <div class="flex items-center mb-1">
                    <h3 class="font-medium">Feature launched</h3>
                    <span class="text-xs text-gray-500 ml-3">2 days ago</span>
                  </div>
                  <p class="text-gray-600 mb-2">
                    "Email Notifications for New Suggestions" has been deployed
                  </p>
                  <div class="flex items-center text-sm">
                    <div class="h-6 w-6 rounded-full bg-gradient-to-r from-primary to-secondary-light flex items-center justify-center text-white mr-2">
                      <span class="text-xs">JD</span>
                    </div>
                    <span class="text-gray-600">by You</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 bg-gray-50 text-center">
              <button class="text-primary hover:text-primary-dark font-medium">
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
