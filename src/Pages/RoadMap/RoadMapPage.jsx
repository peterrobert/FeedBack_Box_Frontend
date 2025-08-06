import React from "react";
import styles from "./roadMapPage.module.css";

const RoadMapPage = () => {
  return (
    <main id="roadmap-content" className="pt-6 bg-gray-50">
      {/* <!-- Page Title Section --> */}
      <section id="page-title" className="bg-white border-b border-gray-200">
        <div className="px-6 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-semibold mr-3">Roadmap</h3>
                <div className="flex items-center text-gray-600 font-medium cursor-pointer px-3 py-1.5 rounded-md hover:bg-gray-100 border border-gray-200">
                  <span>ProductX Portal</span>
                  <i class="fa-solid fa-chevron-down text-xs ml-2"></i>
                </div>
              </div>
              <p className="text-gray-600 mt-1">
                See what's planned, in progress, and recently launched for
                ProductX
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search features..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <button className="bg-gradient-to-r from-primary to-secondary-light text-white px-4 py-2 rounded-md shadow-sm hover:shadow-md transition-all">
                <i class="fa-solid fa-plus mr-1.5"></i>
                <span>Add Suggestion</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Filter Controls --> */}
      <section id="filter-controls" class="bg-white border-b border-gray-200">
        <div class="px-6 py-3">
          <div class="flex flex-wrap items-center justify-between">
            <div class="flex items-center space-x-4">
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Filter by:</span>
                <div class="relative">
                  <select class="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-1.5 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-primary text-sm">
                    <option>All Categories</option>
                    <option>Feature</option>
                    <option>Bug Fix</option>
                    <option>Enhancement</option>
                    <option>Documentation</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">Sort by:</span>
                <div class="relative">
                  <select class="appearance-none bg-gray-100 border border-gray-200 text-gray-700 py-1.5 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-primary text-sm">
                    <option>Most Upvoted</option>
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <i class="fa-solid fa-chevron-down text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center space-x-3 mt-2 sm:mt-0">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="show-archived"
                  class="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                />
                <label for="show-archived" class="ml-2 text-sm text-gray-600">
                  Show Archived
                </label>
              </div>
              <button class="flex items-center text-sm text-gray-600 hover:text-primary">
                <i class="fa-solid fa-arrows-rotate mr-1.5"></i>
                <span>Refresh</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Roadmap Columns --> */}
      <section id="roadmap-columns" class="py-8">
        <div class="px-6">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Planned Column --> */}
            <div
              id="planned-column"
              class="bg-white rounded-xl shadow-elevation border border-gray-100 overflow-hidden"
            >
              <div class="bg-status-planned/10 px-5 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-status-planned mr-2.5"></div>
                    <h3 class="font-semibold text-gray-800">Planned</h3>
                  </div>
                  <span class="bg-status-planned/10 text-status-planned px-2.5 py-1 rounded-full text-xs font-medium">
                    8
                  </span>
                </div>
              </div>
              <div class="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {/* <!-- Suggestion Card 1 --> */}
                <div
                  id="suggestion-1"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Dark Mode Support</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>42</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Add dark mode support to reduce eye strain when using the
                    app at night.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-purple-100 text-purple-800 text-xs px-2.5 py-1 rounded-full">
                      UI/UX
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>8 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <span>Submitted 2 days ago</span>
                    </div>
                  </div>
                </div>

                {/* <!-- Suggestion Card 2 --> */}
                <div
                  id="suggestion-2"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Export to CSV</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>36</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Allow exporting feedback data to CSV for further analysis in
                    spreadsheets.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-green-100 text-green-800 text-xs px-2.5 py-1 rounded-full">
                      Data
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>5 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <span>Submitted 3 days ago</span>
                    </div>
                  </div>
                </div>

                {/* <!-- Suggestion Card 3 --> */}
                <div
                  id="suggestion-3"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Custom Domains</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>29</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Support custom domains for feedback portals to match brand
                    websites.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full">
                      Branding
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>3 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <span>Submitted 5 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- In Progress Column --> */}
            <div
              id="in-progress-column"
              class="bg-white rounded-xl shadow-elevation border border-gray-100 overflow-hidden"
            >
              <div class="bg-status-progress/10 px-5 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-status-progress mr-2.5"></div>
                    <h3 class="font-semibold text-gray-800">In Progress</h3>
                  </div>
                  <span class="bg-status-progress/10 text-status-progress px-2.5 py-1 rounded-full text-xs font-medium">
                    5
                  </span>
                </div>
              </div>
              <div class="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {/* <!-- Suggestion Card 4 --> */}
                <div
                  id="suggestion-4"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">
                      Advanced Analytics Dashboard
                    </h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>54</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Comprehensive analytics dashboard with trend visualization
                    and user engagement metrics.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-1 rounded-full">
                      Analytics
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>12 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <span>Started 1 week ago</span>
                    </div>
                  </div>
                </div>

                {/* <!-- Suggestion Card 5 --> */}
                <div
                  id="suggestion-5"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">
                      Email Notifications
                    </h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>47</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Send email notifications when feedback status changes or
                    receives comments.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-pink-100 text-pink-800 text-xs px-2.5 py-1 rounded-full">
                      Notifications
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>9 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <div class="w-5 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div class="w-3/5 h-full bg-status-progress"></div>
                      </div>
                      <span class="ml-2">60%</span>
                    </div>
                  </div>
                </div>

                {/* <!-- Suggestion Card 6 --> */}
                <div
                  id="suggestion-6"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Slack Integration</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>38</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Connect FeedbackBox to Slack to receive notifications about
                    new feedback and updates.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-gray-100 text-gray-800 text-xs px-2.5 py-1 rounded-full">
                      Integration
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>7 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <div class="w-5 h-1 bg-gray-200 rounded-full overflow-hidden">
                        <div class="w-4/5 h-full bg-status-progress"></div>
                      </div>
                      <span class="ml-2">80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Launched Column --> */}
            <div
              id="launched-column"
              class="bg-white rounded-xl shadow-elevation border border-gray-100 overflow-hidden"
            >
              <div class="bg-status-launched/10 px-5 py-4 border-b border-gray-200">
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="w-4 h-4 rounded-full bg-status-launched mr-2.5"></div>
                    <h3 class="font-semibold text-gray-800">Launched</h3>
                  </div>
                  <span class="bg-status-launched/10 text-status-launched px-2.5 py-1 rounded-full text-xs font-medium">
                    6
                  </span>
                </div>
              </div>
              <div class="p-4 space-y-4 max-h-[600px] overflow-y-auto">
                {/* <!-- Suggestion Card 7 --> */}
                <div
                  id="suggestion-7"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Public Roadmap</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>62</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Share your development plans with users through a visual,
                    easy-to-understand public roadmap.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full">
                      Core
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>14 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-solid fa-rocket mr-1 text-status-launched"></i>
                      <span>Launched 2 days ago</span>
                    </div>
                  </div>
                </div>

                {/* <!-- Suggestion Card 8 --> */}
                <div
                  id="suggestion-8"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Upvoting System</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>58</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Let your community vote on which features matter most,
                    helping you prioritize development.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full">
                      Core
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>11 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-solid fa-rocket mr-1 text-status-launched"></i>
                      <span>Launched 1 week ago</span>
                    </div>
                  </div>
                </div>

                {/* <!-- Suggestion Card 9 --> */}
                <div
                  id="suggestion-9"
                  class="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-4"
                >
                  <div class="flex justify-between items-start mb-3">
                    <h4 class="font-medium text-gray-800">Custom Branding</h4>
                    <div class="flex items-center">
                      <button class="flex items-center bg-gray-100 hover:bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-700">
                        <i class="fa-solid fa-arrow-up mr-1 text-xs"></i>
                        <span>45</span>
                      </button>
                    </div>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">
                    Customize your feedback portal with your brand colors, logo,
                    and domain name.
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span class="bg-blue-100 text-blue-800 text-xs px-2.5 py-1 rounded-full">
                      Feature
                    </span>
                    <span class="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-1 rounded-full">
                      Branding
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-regular fa-comment mr-1"></i>
                      <span>9 comments</span>
                    </div>
                    <div class="flex items-center text-xs text-gray-500">
                      <i class="fa-solid fa-rocket mr-1 text-status-launched"></i>
                      <span>Launched 2 weeks ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <-- Feedback Prompt CTA --> */}
      <section id="feedback-cta" class="py-8">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-gradient-to-r from-primary/5 to-secondary-light/5 rounded-xl shadow-sm border border-gray-100 p-8 text-center">
            <h3 class="text-xl font-semibold mb-3">
              Have ideas to improve ProductX?
            </h3>
            <p class="text-gray-600 mb-6 max-w-xl mx-auto">
              Your feedback helps us build a better product. Submit your
              suggestions and see them come to life on our roadmap.
            </p>
            <span class="inline-flex items-center bg-gradient-to-r from-primary to-secondary-light text-white px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all cursor-pointer">
              <i class="fa-solid fa-lightbulb mr-2"></i>
              <span>Submit Your Suggestion</span>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RoadMapPage;
