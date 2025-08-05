import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <section className="auth-layout">
      <div className="container">
        <div className="col-12 col-md-4">
          <div
            id="auth-visual"
            class="md:w-1/2 bg-gradient-to-br from-primary/5 to-secondary-light/5 rounded-xl p-8 mb-8 md:mb-0 md:mr-8"
          >
            <div class="hidden md:block h-full">
              <div class="flex flex-col justify-center h-full">
                <div class="mb-8">
                  <img
                    class="w-full max-w-md mx-auto rounded-lg shadow-elevation"
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d164588a5c-aba9c4550fd959a6026c.png"
                    alt="solo developer at modern desk with laptop, looking thoughtful and satisfied, sticky notes around, warm natural lighting, clean aesthetic, feedback UI visible on screen, coffee mug, minimal workspace, real person focused composition"
                  />
                </div>

                <h2 class="text-2xl md:text-3xl font-bold mb-6">
                  Transform how you collect feedback
                </h2>

                <div class="space-y-4 mb-8">
                  <div class="flex items-start">
                    <div class="bg-primary/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <i class="fa-solid fa-rocket text-primary"></i>
                    </div>
                    <p class="text-gray-700">
                      Set up in 5 minutes, no code needed
                    </p>
                  </div>

                  <div class="flex items-start">
                    <div class="bg-primary/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <i class="fa-solid fa-arrow-up-right-dots text-primary"></i>
                    </div>
                    <p class="text-gray-700">Build community-driven roadmaps</p>
                  </div>

                  <div class="flex items-start">
                    <div class="bg-primary/10 rounded-full p-2 mr-4 mt-1 flex-shrink-0">
                      <i class="fa-solid fa-bell text-primary"></i>
                    </div>
                    <p class="text-gray-700">
                      Close the feedback loop automatically
                    </p>
                  </div>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-elevation border border-gray-100">
                  <div class="flex items-start">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                      alt="User Avatar"
                      class="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p class="text-gray-700 mb-2">
                        "FeedbackBox transformed how I collect feedback for my
                        SaaS. My users love the transparency."
                      </p>
                      <p class="font-medium">Alex Chen</p>
                      <p class="text-gray-500 text-sm">
                        Indie Developer, TaskFlow
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-8">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
