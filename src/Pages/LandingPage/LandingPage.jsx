import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import styles from "./landingPage.module.css";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import CodeIcon from "@mui/icons-material/Code";
import CheckIcon from "@mui/icons-material/Check";
import SchoolIcon from "@mui/icons-material/School";
import VideocamIcon from "@mui/icons-material/Videocam";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FormatListBulletedAddIcon from "@mui/icons-material/FormatListBulletedAdd";
import RouteIcon from "@mui/icons-material/Route";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppFooter from "../../Components/AppFooter";

const LandingPage = () => {
  return (
    <section className="landing_page_container">
      {/* --- HERO SECTION --- */}
      <div className={styles.hero_section_container}>
        <div className={`container-fluid ${styles.hero_section}`}>
          <div className="row">
            <div className="col-sm-12">
              <h1 className={styles.header}>collect feedback that matters</h1>
              <h3 className={styles.header_sub_title}>
                Your Plug and play feedback portal to build better products with
                your comminuty
              </h3>

              <Button
                variant="contained"
                className="gradient-btn"
                sx={{
                  width: "100%",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "25px",
                  marginTop: "10px",
                  fontWeight: "600",
                }}
              >
                Start Free
              </Button>
              <Button
                color="inherit"
                variant="outlined"
                sx={{
                  width: "100%",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "25px",
                  marginTop: "10px",
                  color: "black",
                  fontWeight: "600",
                }}
                startIcon={<LockOpenIcon />}
              >
                Log In
              </Button>
            </div>
            <div className="col-sm-12">
              <div
                className={`relative max-w-lg mx-auto ${styles.hero_image_section}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-xl blur-xl"></div>
                <div className="relative bg-white rounded-xl shadow-elevation p-2 border border-gray-100">
                  <img
                    className="w-full h-80 object-cover rounded-lg"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d164588a5c-11366e7f4db692d4e690.png"
                    alt="solo developer at modern desk with laptop open showing feedback UI, thoughtful satisfied expression, warm natural lighting, coffee mug and sketches around, clean minimal workspace aesthetic, real person real feedback theme"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- PROBLEM SECTION ---- */}
      <div className={styles.problem_container}>
        <div className="container-fluid">
          <div className="row">
            <div className={styles.section_spacing}>
              <h2 className={styles.header}>
                The Problem With Collecting FeedBack
              </h2>
              <div className="col-sm-12 col-md-6 mt-2">
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-primary/5 to-secondary-light/5 rounded-xl p-8 h-full border border-gray-100 shadow-sm">
                    <h3
                      className={`text-xl font-semibold mb-6 text-gray-800 ${styles.current_challenges}`}
                    >
                      How FeedbackBox Solves This:
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                          <DoneIcon fontSize="small" color="success" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            Centralized Feedback Portal
                          </h4>
                          <p
                            className={`text-gray-600  ${styles.current_challenges_sub_title}`}
                          >
                            One branded destination for all user suggestions,
                            feature requests, and bug reports.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                          <DoneIcon fontSize="small" color="success" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            Community-Driven Prioritization
                          </h4>
                          <p
                            className={`text-gray-600  ${styles.current_challenges_sub_title}`}
                          >
                            Built-in upvoting system helps identify what matters
                            most to your users.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                          <DoneIcon fontSize="small" color="success" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            Transparent Public Roadmap
                          </h4>
                          <p
                            className={`text-gray-600  ${styles.current_challenges_sub_title}`}
                          >
                            Show users what you're working on and what's coming
                            next to build trust and excitement.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                          {" "}
                          <DoneIcon fontSize="small" color="success" />{" "}
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            Automated Status Updates
                          </h4>
                          <p
                            className={`text-gray-600  ${styles.current_challenges_sub_title}`}
                          >
                            Keep users in the loop when their feedback is
                            considered, planned, or implemented.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 mt-3">
                <div className="lg:w-1/2 mt-2">
                  <div className="bg-gray-50 rounded-xl p-8 h-full border border-gray-100 shadow-sm">
                    <h3
                      className={`text-xl font-semibold mb-6 text-gray-800 ${styles.current_challenges}`}
                    >
                      Current Challenges:
                    </h3>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                          <ClearIcon color="error" fontSize="small" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            Scattered Feedback Channels
                          </h4>
                          <p
                            className={`text-gray-600 ${styles.current_challenges_sub_title}`}
                          >
                            Feedback spread across emails, social media, and
                            various platforms with no central repository.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                          <ClearIcon color="error" fontSize="small" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            No Prioritization System
                          </h4>
                          <p
                            className={`text-gray-600 ${styles.current_challenges_sub_title}`}
                          >
                            Difficult to determine which feedback deserves
                            immediate attention versus future consideration.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                          <ClearIcon color="error" fontSize="small" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            No Public Roadmap
                          </h4>
                          <p
                            className={`text-gray-600 ${styles.current_challenges_sub_title}`}
                          >
                            Users have no visibility into your development plans
                            or if their feedback is being considered.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                          <ClearIcon color="error" fontSize="small" />
                        </div>
                        <div>
                          <h4
                            className={`font-medium mb-1 ${styles.current_challenges_title}`}
                          >
                            Broken Feedback Loop
                          </h4>
                          <p
                            className={`text-gray-600 ${styles.current_challenges_sub_title}`}
                          >
                            Users rarely know if their feedback was received,
                            considered, or implemented.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- USE CASE SECTION --- */}
      <div className="py-16 bg-gray-50 ">
        <div className="container-fluid">
          <div className="row">
            <h2
              className={`text-3xl font-bold text-center mb-4 ${styles.header}`}
            >
              Who It's For
            </h2>
            <p
              className={`text-gray-600 text-center max-w-2xl mx-auto mb-16 ${styles.use_case_section_sub_title}`}
            >
              FeedbackBox is designed to help various creators collect and
              manage feedback efficiently.
            </p>
            <div className="col-sm-12 col-md-4 mt-4">
              <div
                id="indie-makers"
                className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <CodeIcon fontSize="large" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Indie Makers &amp; Solo Devs
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Collect structured feedback for your indie apps, tools, and
                  side projects without overwhelming your development workflow.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Prioritize limited development resources
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Build a loyal early adopter community
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Maintain transparency with users
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-4">
              <div
                id="training-orgs"
                className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <SchoolIcon fontSize="large" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Training Organizations
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Gather detailed feedback on courses, workshops, and
                  educational content to continuously improve your offerings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Improve course materials based on feedback
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Identify gaps in educational content
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Enhance student satisfaction
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-4">
              <div
                id="content-creators"
                className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <VideocamIcon fontSize="large" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Content Creators
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Let your audience guide your content strategy by collecting
                  and organizing topic suggestions and content feedback.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Create audience-driven content plans
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Identify most-requested topics
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckIcon color="secondary" fontSize="medium" />
                    <span
                      className={`text-gray-700 ${styles.use_case_section_sub_title} ml-2`}
                    >
                      Build stronger community engagement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- WHAT CAN YOU DO WITH FEEBACK BOX --- */}
      <div className="wcyd-section py-16 bg-white">
        <div className="container-fluid">
          <h2
            className={`text-3xl font-bold text-center mb-4 ${styles.header}`}
          >
            What You Can Do with FeedbackBox
          </h2>
          <p
            className={`text-gray-600 text-center max-w-2xl mx-auto mb-16 ${styles.use_case_section_sub_title}`}
          >
            Powerful features designed to transform how you collect, manage, and
            act on user feedback.
          </p>
          <div className="row">
            <div className="col-12 col-md-4 mt-4">
              <div
                id="suggestion-box"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-elevation transition-all"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary-light/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <LightbulbIcon fontSize="medium" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Suggestion Box
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  A dedicated portal for users to submit feature requests, bug
                  reports, and general feedback in a structured format.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
              <div
                id="upvoting"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-elevation transition-all"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary-light/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <ArrowUpwardIcon fontSize="medium" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Upvoting
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Let your community vote on which features matter most, helping
                  you prioritize your development efforts.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
              <div
                id="status-tracking"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-elevation transition-all"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary-light/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <FormatListBulletedAddIcon
                    fontSize="medium"
                    color="secondary"
                  />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Status Tracking
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Transparently track suggestions from submission to
                  implementation with customizable status labels.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 mt-4">
              <div
                id="road-map"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-elevation transition-all"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary-light/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <RouteIcon fontSize="medium" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Public RoadMap
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Share your development plans with users through a visual,
                  easy-to-understand public roadmap
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
              <div
                id="dashboard"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-elevation transition-all"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary-light/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <DashboardIcon fontSize="medium" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Admin Dashboard
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Powerful backend to manage, categorize, and respond to
                  feedback with analytics and reporting tools.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
              <div
                id="notifications"
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-elevation transition-all"
              >
                <div className="bg-gradient-to-r from-primary/20 to-secondary-light/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <NotificationsIcon fontSize="medium" color="secondary" />
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 ${styles.use_case_card_title}`}
                >
                  Notifications
                </h3>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Automatically notify users when their feedback changes status
                  or gets implemented
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- WHAT USERS SAY --- */}
      <div className="wys-section py-16 bg-gray-50">
        <div className="container-fluid">
          <h2
            className={`text-3xl font-bold text-center mb-4 ${styles.header}`}
          >
            Loved by Early Users
          </h2>
          <div className="row">
            <div className="col-12 col-md-4 mt-4">
              <div className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  />
                </div>
                <div className="text-primary text-4xl mb-4 mt-4">"</div>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  FeedbackBox transformed how I collect feedback for my SaaS. My
                  users love the transparency of seeing their ideas on the
                  roadmap.
                </p>
                <div>
                  <p className={`font-medium ${styles.ts_profile_names}`}>
                    Alex Chen
                  </p>
                  <p
                    className={`text-gray-500 text-sm ${styles.ts_profile_names}`}
                  >
                    Indie Developer, TaskFlow
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
              <div className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  />
                </div>
                <div className="text-primary text-4xl mb-4 mt-4">"</div>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  As a course creator, FeedbackBox helps me continuously improve
                  my content. The upvoting system shows exactly what topics my
                  students want more of.
                </p>
                <div>
                  <p
                    className={`text-gray-500 text-sm ${styles.ts_profile_names}`}
                  >
                    Sarah Johnson
                  </p>
                  <p
                    className={`text-gray-500 text-sm ${styles.ts_profile_names}`}
                  >
                    Online Course Creator
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mt-4">
              <div className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 relative">
                <div className="absolute -top-6 left-8">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                    alt="User Avatar"
                    className="w-12 h-12 rounded-full border-4 border-white shadow-sm"
                  />
                </div>
                <div className="text-primary text-4xl mb-4 mt-4">"</div>
                <p
                  className={`text-gray-600 mb-6 ${styles.use_case_section_sub_title}`}
                >
                  Setting up FeedbackBox took minutes but completely changed how
                  we handle user requests. Now we have a clear view of what to
                  build next.
                </p>
                <div>
                  <p
                    className={`text-gray-500 text-sm ${styles.ts_profile_names}`}
                  >
                    Michael Torres
                  </p>
                  <p
                    className={`text-gray-500 text-sm ${styles.ts_profile_names}`}
                  >
                    Founder, DevTools Pro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- PRICING SECTION --- */}
      <div className="pricing-section py-16 bg-white">
        <div className="container-fluid">
          <h2
            className={`text-3xl font-bold text-center mb-4 ${styles.header}`}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className={`text-gray-600 text-center max-w-2xl mx-auto mb-16 ${styles.use_case_section_sub_title}`}
          >
            Choose the plan that's right for you. No hidden fees, no surprises.
          </p>
          <div className="row">
            <div className="col-12 col-md-6 mt-4">
              <div
                id="free-plan"
                className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-6 border-b border-gray-200">
                  <h3
                    className={`text-xl font-semibold mb-2 ${styles.pricing_section_header}`}
                  >
                    Free
                  </h3>
                  <p
                    className={`text-gray-600 mb-4 ${styles.pricing_section_sub_title}`}
                  >
                    Perfect for getting started
                  </p>
                  <div className="flex items-end">
                    <span
                      className={`text-3xl font-bold ${styles.prices_figures}`}
                    >
                      $0
                    </span>
                    <span
                      className={`text-gray-500 ml-1 ${styles.pricing_section_sub_title}`}
                    >
                      /month
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Up to 100 feedback submissions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Basic suggestion box
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Upvoting system
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Public roadmap
                      </span>
                    </li>
                    <li className="flex items-start opacity-50">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Custom branding
                      </span>
                    </li>
                    <li className="flex items-start opacity-50">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Advanced analytics
                      </span>
                    </li>
                  </ul>
                  <span
                    className={`mt-8 block w-full py-3 text-center border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition-colors cursor-pointer ${styles.pricing_section_sub_title}`}
                  >
                    Get Started
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-4">
              <div
                id="pro-plan"
                className="bg-white rounded-xl border-2 border-primary shadow-elevation relative"
              >
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <div className="p-6 border-b border-gray-200">
                  <h3
                    className={`text-xl font-semibold mb-2 ${styles.pricing_section_header}`}
                  >
                    Pro
                  </h3>
                  <p
                    className={`text-gray-600 mb-4 ${styles.pricing_section_sub_title}`}
                  >
                    For growing products
                  </p>
                  <div className="flex items-end">
                    <span
                      className={`text-3xl font-bold ${styles.prices_figures}`}
                    >
                      $29
                    </span>
                    <span
                      className={`text-gray-500 ml-1 ${styles.pricing_section_sub_title}`}
                    >
                      /month
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Unlimited feedback submissions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Advanced suggestion categorization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Custom branding
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        User notifications
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Basic analytics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon color="success" fontSize="medium" />
                      <span
                        className={`text-gray-600 ${styles.pricing_section_sub_title}`}
                      >
                        Email digests
                      </span>
                    </li>
                  </ul>
                  <span
                    className={`mt-8 block w-full py-3 text-center bg-primary hover:bg-primary-dark text-white rounded-lg font-medium transition-colors cursor-pointer ${styles.pricing_section_sub_title}`}
                  >
                    Start Free Trial
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- CALL TO ACTION SECTION --- */}
      <div id="final-cta" className={`py-16 ${styles.hero_section_container}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold mb-4 ${styles.header}`}>
            Ready to start collecting smarter feedback?
          </h2>
          <p
            className={`text-gray-600 max-w-2xl mx-auto mb-8 ${styles.use_case_section_sub_title}`}
          >
            Join hundreds of creators who are building better products by
            listening to what their users actually want.
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="contained"
              className="gradient-btn"
              sx={{
                width: "100%",
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                marginTop: "10px",
                fontWeight: "600",
              }}
            >
              Start Free
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              sx={{
                width: "100%",
                padding: "0.75rem 1.5rem",
                borderRadius: "25px",
                marginTop: "10px",
                color: "black",
                fontWeight: "600",
              }}
              startIcon={<LockOpenIcon />}
            >
              Log In
            </Button>
          </div>
        </div>
      </div>
      {/* --- FOOTER --- */}
      <AppFooter />
    </section>
  );
};

export default LandingPage;
