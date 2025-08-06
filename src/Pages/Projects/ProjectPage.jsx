import React from "react";
import Card from "./Card";
import styles from "./projectPage.module.css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import AppFooter from "../../Components/AppFooter";
const ProjectPage = () => {
  return (
    <div className="bg-gray-50 ">
      <main id="main-content" className="container mx-auto px-4 py-8 md:px-6 ">
        <section id="page-header" className="mb-8">
          <h2
            className={`text-3xl font-bold text-gray-900 mb-2 ${styles.font_family_headers}`}
          >
            My Projects
          </h2>
          <p className={`text-gray-600 ${styles.font_family_sub_headers}`}>
            Manage your feedback projects and track responses.
          </p>
        </section>

        <section
          id="toolbar"
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0"
        >
          <div className="relative">
            <Button
              startIcon={<AddIcon />}
              variant="contained"
              color="secondary"
            >
              Project
            </Button>
          </div>
          <div className="relative w-full md:w-64 mt-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="text-gray-400" />
            </div>
            <input
              type="text"
              className={`w-full pl-10 pr-4 py-2
                 bg-white border
                  border-gray-200 
                  rounded-lg focus:outline-none 
                  focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm 
                   ${styles.font_family_sub_headers}`}
              placeholder="Search projects..."
            />
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <select
                className={`appearance-none
                   bg-white border
                    border-gray-200 rounded-lg pl-3 pr-10 py-2
                     focus:outline-none focus:ring-2 focus:ring-primary 
                     focus:border-transparent shadow-sm text-gray-700 ${styles.font_family_sub_headers}`}
              >
                <option className={styles.font_family_sub_headers}>
                  Sort: Newest
                </option>
                <option className={styles.font_family_sub_headers}>
                  Sort: Most Feedback
                </option>
                <option className={styles.font_family_sub_headers}>
                  Sort: Alphabetical
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <KeyboardArrowDownIcon className="text-gray-400" />
              </div>
            </div>

            <div className="relative">
              <select
                className={`appearance-none
                   bg-white border
                    border-gray-200 rounded-lg pl-3 pr-10 py-2
                     focus:outline-none focus:ring-2 focus:ring-primary 
                     focus:border-transparent shadow-sm text-gray-700 ${styles.font_family_sub_headers}`}
              >
                <option>All Types</option>
                <option>MVP</option>
                <option>Design</option>
                <option>Blog</option>
                <option>Feature</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <KeyboardArrowDownIcon className="text-gray-400" />
              </div>
            </div>
          </div>
        </section>
        {/* ---- PROJECT CARDS ---- */}
        <section
          id="project-cards"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </main>{" "}
      <AppFooter />
    </div>
  );
};

export default ProjectPage;
