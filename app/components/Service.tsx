"use client";
import React, { useState } from "react";
import {
  BookOpen,
  GraduationCap,
  LineChart,
  Award,
  LayoutDashboard,
  UserPlus,
  PenSquare,
  Wallet,
  BarChart3,
  Users,
  MessageSquare,
  Settings,
  FileText,
} from "lucide-react";

export default function Service() {
  const [active, setActive] = useState<"student" | "tutor">("student");

  const studentServices = [
    {
      title: "Course Selection",
      description: "Browse and choose from a wide range of curated courses.",
      icon: BookOpen,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Interactive Learning",
      description: "Engage with hands-on content for better understanding.",
      icon: GraduationCap,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Progress Tracking",
      description: "Monitor your learning journey with real-time insights.",
      icon: LineChart,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Certification",
      description: "Earn certificates to showcase your achievements.",
      icon: Award,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Dashboard",
      description: "Get an overview of all your courses in one place.",
      icon: LayoutDashboard,
      color: "bg-pink-100 text-pink-600",
    },
    {
      title: "Peer Community",
      description: "Collaborate, discuss, and learn together with peers.",
      icon: Users,
      color: "bg-cyan-100 text-cyan-600",
    },
    {
      title: "Doubt Support",
      description: "Get answers from tutors through chat and Q&A sessions.",
      icon: MessageSquare,
      color: "bg-indigo-100 text-indigo-600",
    },
  ];

  const tutorServices = [
    {
      title: "Self Onboard",
      description: "Easily register and set up your teaching profile.",
      icon: UserPlus,
      color: "bg-indigo-100 text-indigo-600",
    },
    {
      title: "Create Course",
      description: "Build structured courses with rich content tools.",
      icon: PenSquare,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Get Paid",
      description: "Receive payments securely and on time.",
      icon: Wallet,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Track Progress",
      description: "See how your students are performing in real time.",
      icon: BarChart3,
      color: "bg-rose-100 text-rose-600",
    },
    {
      title: "Student Engagement",
      description: "Interact with learners via discussions and feedback.",
      icon: MessageSquare,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Analytics & Reports",
      description: "Gain insights into course performance and student activity.",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Profile Management",
      description: "Easily update your profile and manage your courses.",
      icon: Settings,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const renderCard = (service: {
    title: string;
    description: string;
    icon: React.ElementType;
    color: string;
  }) => {
    const Icon = service.icon;
    return (
      <div className="border bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition flex flex-col">
        {/* Icon + Title Row */}
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${service.color} animate-pulse`}
          >
            <Icon size={22} />
          </div>
          <p className="font-semibold text-gray-800 text-lg lg:text-xl ">
            {service.title}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-4">{service.description}</p>
      </div>
    );
  };

  return (
    <div
      className="w-full flex items-center justify-center bg-[#6435cc] py-16"
      id="services"
    >
      <div className="w-11/12 lg:w-10/12 flex items-center justify-center flex-col">
        {/* Heading */}
        <p className="py-4 font-bold text-white text-4xl lg:text-5xl text-center">
          Our Services
        </p>
        <p className="text-white/80 text-lg text-center mb-8">
          Empowering both students and tutors with tools for effective learning
          and teaching.
        </p>

        {/* Switch Button */}
        <div className="flex gap-4 mb-10 bg-white/10 p-2 rounded-full">
          <button
            onClick={() => setActive("student")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              active === "student"
                ? "bg-white text-[#6435cc]"
                : "text-white hover:bg-white/20"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setActive("tutor")}
            className={`px-6 py-2 rounded-full font-medium transition ${
              active === "tutor"
                ? "bg-white text-[#6435cc]"
                : "text-white hover:bg-white/20"
            }`}
          >
            Tutors
          </button>
        </div>

        {/* Services Card */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full transition">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {(active === "student" ? studentServices : tutorServices).map(
                (service, idx) => (
                  <React.Fragment key={idx}>
                    {renderCard(service)}
                  </React.Fragment>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
