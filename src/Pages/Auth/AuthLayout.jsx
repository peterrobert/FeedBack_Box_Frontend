import { Outlet } from "react-router-dom";
import styles from "./auth.module.css";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

const AuthLayout = () => {
  return (
    <section className="auth-layout mt-5 mb-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          <div
            id="auth-visual"
            className={`md:w-1/2 rounded-xl p-8 mb-8 md:mb-0 md:mr-8 ${styles.hero_section_container}`}
          >
            <div className="hidden md:block h-full">
              <div className="flex flex-col justify-center h-full">
                <div className="mb-8">
                  <img
                    className="w-full max-w-md mx-auto rounded-lg shadow-elevation"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d164588a5c-aba9c4550fd959a6026c.png"
                    alt="solo developer at modern desk with laptop, looking thoughtful and satisfied, sticky notes around, warm natural lighting, clean aesthetic, feedback UI visible on screen, coffee mug, minimal workspace, real person focused composition"
                  />
                </div>

                <h2
                  className={`text-2xl md:text-3xl font-bold mb-6 ${styles.font_family_headers}`}
                >
                  Transform how you collect feedback
                </h2>

                <div className="space-y-4 mb-8 mt-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <RocketLaunchIcon color="secondary" fontSize="small" />
                    </div>
                    <p
                      className={`text-gray-700 text-lg ${styles.font_family_sub_headers}`}
                    >
                      Set up in 5 minutes, no code needed
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <BuildCircleIcon color="secondary" fontSize="medium" />
                    </div>
                    <p
                      className={`text-gray-700 text-lg  ${styles.font_family_sub_headers}`}
                    >
                      Build community-driven roadmaps
                    </p>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <AllInclusiveIcon color="secondary" fontSize="medium " />
                    </div>
                    <p
                      className={`text-gray-700 text-lg ${styles.font_family_sub_headers}`}
                    >
                      Close the feedback loop automatically
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-elevation border border-gray-100">
                  <div className="flex items-start">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p
                        className={`text-gray-700 mb-2 ${styles.font_family_sub_headers}`}
                      >
                        "FeedbackBox transformed how I collect feedback for my
                        SaaS. My users love the transparency."
                      </p>
                      <p
                        className={`font-medium ${styles.font_family_headers}`}
                      >
                        Alex Chen
                      </p>
                      <p
                        className={`text-gray-500 text-sm ${styles.font_family_sub_headers}`}
                      >
                        Indie Developer, TaskFlow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="auth-form"
            className="md:w-1/2 flex items-center justify-center"
          >
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
