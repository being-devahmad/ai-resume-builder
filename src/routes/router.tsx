import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/root";
import ErrorPage from "@/pages/ErrorPage";
// import Login from "@/pages/Login";
import ProtectedRoute from "@/components/ProtectedRoute";

import About from "@/pages/About";
// import RegisterUser from "@/pages/RegisterUser";
// Dashboard
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "@/pages/Dashboard";
// Normal Pages
// import Pricing from "@/pages/Pricing";
import ContactUs from "@/pages/ContactUs";
import Faqs from "@/pages/Faqs";
import Reviews from "@/pages/reviews";
import ResetPassword from "@/pages/ResetPassword";
import SelectTemplate from "@/pages/SelectTemplate";
import CreateCv from "@/pages/CreateCv";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/Terms";
import AuthLayout from "./layouts/AuthLayout";
import Resume from "@/pages/Resumes";
import BuilderLandingPage from "@/pages/resume/ResumeOptions";
import ResumeStart from "@/pages/resume/ResumeStart";
import DashboardSettings from "@/pages/DashboardSettings";
// import LoginForm from "@/components/forms/LoginForm";
import SignUpForm from "@/components/Auth/SignupForm";
import SignInForm from "@/components/Auth/LoginForm";
import CareerBlog from "@/pages/CareerBlog/CareerBlog";
import BlogDetail from "@/pages/CareerBlog/BlogDetailsPage";
import PricingPage from "@/pages/Pricing/PricingPage";
import Company from "@/pages/Company";
import Home from "@/pages/HomePage";
import CoverLetter from "@/pages/CoverLetter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            element: <SignInForm />,
            path: "login",
          },
          {
            element: <ResetPassword />,
            path: "reset-password",
          },
          {
            element: <SignUpForm />,
            path: "create-account",
          },
        ],
      },
      {
        index: true,
        element: <Home />,
      },

      {
        element: <CareerBlog />,
        path: "career",
      },

      {
        element: <CoverLetter />,
        path: "cover-letter",
      },

      {
        element: <BlogDetail />,
        path: "career/:id",
      },
      {
        element: <Company />,
        path: "company",
      },
      {
        element: <PricingPage />,
        path: "pricing",
      },
      {
        element: <ContactUs />,
        path: "contact",
      },
      {
        element: <Reviews />,
        path: "reviews",
      },
      {
        element: <PrivacyPolicy />,
        path: "privacy-policy",
      },
      {
        element: <TermsOfService />,
        path: "terms-and-conditions",
      },
      {
        path: "create",
        element: (
          <ProtectedRoute>
            <CreateCv />
          </ProtectedRoute>
        ),
      },


      {
        path: "select/:id",
        element: (
          <ProtectedRoute>
            <BuilderLandingPage />
          </ProtectedRoute>
        ),
      },

      {
        path: "select/:id/start",
        element: (
          <ProtectedRoute>
            <ResumeStart />
          </ProtectedRoute>
        ),
      },



      {
        element: <Faqs />,
        path: "faqs",
      },
      {
        element: <SelectTemplate />,
        path: "select",
      },

      // {
      //   path: "reset-password",
      //   element: <ResetPassword />,
      // },
      {
        path: "about",
        element: <About />,
      },




      {
        path: "resumes",
        element: <Resume />,
      },

    ],
  },

  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <div>Dashboard users</div>,
      },
      {
        path: "settings",
        element: <DashboardSettings />,
      },
    ],
  },
]);
