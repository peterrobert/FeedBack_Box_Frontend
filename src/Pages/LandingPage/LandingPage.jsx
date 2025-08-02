import React from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import styles from "./landingPage.module.css";
import Button from "@mui/material/Button";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

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
              <h1 className={styles.header}>
                The Problem With Collecting FeedBack
              </h1>
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
      <div class="py-16 bg-gray-50 ">
        <div className="container-fluid">
          <div className="row">
            <h1
              className={`text-3xl font-bold text-center mb-4 ${styles.header}`}
            >
              Who It's For
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
              FeedbackBox is designed to help various creators collect and
              manage feedback efficiently.
            </p>
            <div className="col-sm-12 col-md-4 mt-4">
              <div
                id="indie-makers"
                className="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-code text-2xl text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3">
                  Indie Makers &amp; Solo Devs
                </h3>
                <p className="text-gray-600 mb-6">
                  Collect structured feedback for your indie apps, tools, and
                  side projects without overwhelming your development workflow.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-primary mr-2"></i>
                    <span className="text-gray-700">
                      Prioritize limited development resources
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-primary mr-2"></i>
                    <span className="text-gray-700">
                      Build a loyal early adopter community
                    </span>
                  </li>
                  <li className="flex items-center">
                    <i className="fa-solid fa-check text-primary mr-2"></i>
                    <span className="text-gray-700">
                      Maintain transparency with users
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-4">
              <div
                id="training-orgs"
                class="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i class="fa-solid fa-graduation-cap text-2xl text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3">
                  Training Organizations
                </h3>
                <p class="text-gray-600 mb-6">
                  Gather detailed feedback on courses, workshops, and
                  educational content to continuously improve your offerings.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <i class="fa-solid fa-check text-primary mr-2"></i>
                    <span class="text-gray-700">
                      Improve course materials based on feedback
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-check text-primary mr-2"></i>
                    <span class="text-gray-700">
                      Identify gaps in educational content
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-check text-primary mr-2"></i>
                    <span class="text-gray-700">
                      Enhance student satisfaction
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 mt-4">
              <div
                id="content-creators"
                class="bg-white rounded-xl shadow-elevation p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div class="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <i class="fa-solid fa-video text-2xl text-primary"></i>
                </div>
                <h3 class="text-xl font-semibold mb-3">Content Creators</h3>
                <p class="text-gray-600 mb-6">
                  Let your audience guide your content strategy by collecting
                  and organizing topic suggestions and content feedback.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <i class="fa-solid fa-check text-primary mr-2"></i>
                    <span class="text-gray-700">
                      Create audience-driven content plans
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-check text-primary mr-2"></i>
                    <span class="text-gray-700">
                      Identify most-requested topics
                    </span>
                  </li>
                  <li class="flex items-center">
                    <i class="fa-solid fa-check text-primary mr-2"></i>
                    <span class="text-gray-700">
                      Build stronger community engagement
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
