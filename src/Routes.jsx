import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Protection = React.lazy(() => import("pages/Protection"));
const Liecenses = React.lazy(() => import("pages/Liecenses"));
const ChangeLog = React.lazy(() => import("pages/ChangeLog"));
const FourHundredFour = React.lazy(() => import("pages/FourHundredFour"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const Contact = React.lazy(() => import("pages/Contact"));
const Team = React.lazy(() => import("pages/Team"));
const BlogSingle = React.lazy(() => import("pages/BlogSingle"));
const Blog = React.lazy(() => import("pages/Blog"));
const ProjectSingle = React.lazy(() => import("pages/ProjectSingle"));
const Project = React.lazy(() => import("pages/Project"));
const ServiceSingle = React.lazy(() => import("pages/ServiceSingle"));
const Services = React.lazy(() => import("pages/Services"));
const AboutUs = React.lazy(() => import("pages/AboutUs"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesingle" element={<ServiceSingle />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectsingle" element={<ProjectSingle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogsingle" element={<BlogSingle />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/fourhundredfour" element={<FourHundredFour />} />
          <Route path="/changelog" element={<ChangeLog />} />
          <Route path="/liecenses" element={<Liecenses />} />
          <Route path="/protection" element={<Protection />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
