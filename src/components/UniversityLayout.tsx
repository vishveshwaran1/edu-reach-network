import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { districtsByState, states } from "@/lib/constants";
import {
  Award,
  BookOpen,
  Building,
  ChevronRight,
  Clock,
  GraduationCap,
  MapPin,
  Phone,
  Star,
  User,
  Users,
  Users2,
} from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

interface Course {
  title: string;
  duration?: string;
  category?: string;
  image?: string;
  description?: string;
  highlights?: string[];
  eligibility?: string;
  career?: string[];
}

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color?: string;
}

interface UniversityData {
  name: string;
  location: string;
  tagline?: string;
  heroImage: string;
  logoImage?: string;
  primaryColor: string;
  gradientColors: string;
  about: string;
  features: Feature[];
  courses: Course[];
  established: string;
  students: string;
  link?: string;
  metaDescription?: string;
  metaKeywords?: string;
}

interface UniversityLayoutProps {
  universityData: UniversityData;
}

// Course images mapping based on domain
const getCourseImage = (courseTitle: string): string => {
  const title = courseTitle.toLowerCase();

  if (title.includes("medical") || title.includes("medicine")) {
    return "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80";
  }
  if (title.includes("dental")) {
    return "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80";
  }
  if (title.includes("engineering") || title.includes("technology")) {
    return "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&q=80";
  }
  if (title.includes("law")) {
    return "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80";
  }
  if (title.includes("pharmacy")) {
    return "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80";
  }
  if (title.includes("nursing")) {
    return "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80";
  }
  if (title.includes("agriculture")) {
    return "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80";
  }
  if (title.includes("management") || title.includes("commerce")) {
    return "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";
  }
  if (title.includes("architecture") || title.includes("design")) {
    return "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80";
  }
  if (title.includes("physiotherapy")) {
    return "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80";
  }
  if (
    title.includes("arts") ||
    title.includes("humanities") ||
    title.includes("culture")
  ) {
    return "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80";
  }
  if (title.includes("health") || title.includes("allied")) {
    return "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80";
  }
  if (title.includes("ayurveda")) {
    return "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&q=80";
  }
  if (title.includes("education")) {
    return "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80";
  }
  if (title.includes("paramedical")) {
    return "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=80";
  }
  if (title.includes("hotel")) {
    return "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80";
  }
  if (title.includes("business")) {
    return "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80";
  }

  // Default image for other courses
  return "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80";
};

const getDetailedCourseInfo = (courseTitle: string) => {
  const title = courseTitle.toLowerCase();

  if (title.includes("medical") || title.includes("medicine")) {
    return {
      description:
        "Our Medical program provides comprehensive training in modern healthcare practices, combining theoretical knowledge with extensive clinical exposure. Students learn from experienced faculty and gain hands-on experience in our affiliated hospitals.",
      highlights: [
        "State-of-the-art medical facilities and laboratories",
        "Clinical rotations in top hospitals",
        "Research opportunities in medical sciences",
        "International exposure programs",
        "Experienced faculty with clinical expertise",
        "Modern simulation labs for practical training",
      ],
      eligibility:
        "12th grade with PCB (Physics, Chemistry, Biology) with minimum 50% marks and qualified NEET",
      career: [
        "Doctor",
        "Medical Researcher",
        "Hospital Administrator",
        "Public Health Specialist",
        "Medical Consultant",
      ],
      duration: "5.5 years (4.5 years + 1 year internship)",
    };
  }

  if (title.includes("dental")) {
    return {
      description:
        "The Dental program offers comprehensive education in oral health, dental procedures, and patient care. Our curriculum integrates modern dental technologies with traditional practices to produce skilled dental professionals.",
      highlights: [
        "Modern dental clinics and equipment",
        "Hands-on clinical training",
        "Advanced dental technology exposure",
        "Community outreach programs",
        "Research in oral health",
        "Industry-standard dental laboratories",
      ],
      eligibility: "12th grade with PCB and qualified NEET",
      career: [
        "Dentist",
        "Oral Surgeon",
        "Dental Researcher",
        "Dental Consultant",
        "Academia",
      ],
      duration: "5 years",
    };
  }

  if (title.includes("engineering") || title.includes("technology")) {
    return {
      description:
        "Our Engineering programs combine theoretical foundations with practical applications, preparing students for the evolving technological landscape. We offer specializations in various fields with industry-aligned curriculum.",
      highlights: [
        "Industry-standard laboratories",
        "Project-based learning approach",
        "Industry internships and placements",
        "Research and innovation opportunities",
        "Expert faculty from industry and academia",
        "Modern computing and engineering facilities",
      ],
      eligibility:
        "12th grade with PCM (Physics, Chemistry, Mathematics) with minimum 50% marks",
      career: [
        "Software Engineer",
        "Hardware Engineer",
        "Research Scientist",
        "Project Manager",
        "Entrepreneur",
      ],
      duration: "4 years",
    };
  }

  if (title.includes("law")) {
    return {
      description:
        "The Law program provides comprehensive legal education covering various aspects of jurisprudence, constitutional law, and legal practice. Students gain practical experience through moot courts and legal aid clinics.",
      highlights: [
        "Comprehensive legal curriculum",
        "Moot court competitions",
        "Legal aid clinic participation",
        "Internships with law firms and courts",
        "Expert faculty with legal practice experience",
        "Extensive legal library and resources",
      ],
      eligibility: "12th grade from any stream with minimum 45% marks",
      career: [
        "Advocate",
        "Legal Advisor",
        "Judge",
        "Corporate Lawyer",
        "Legal Researcher",
      ],
      duration: "5 years (integrated program)",
    };
  }

  if (title.includes("pharmacy")) {
    return {
      description:
        "The Pharmacy program focuses on pharmaceutical sciences, drug development, and patient care. Students learn about medication therapy, drug interactions, and pharmaceutical research.",
      highlights: [
        "Modern pharmaceutical laboratories",
        "Drug development research opportunities",
        "Clinical pharmacy training",
        "Industry collaborations",
        "Pharmaceutical analysis techniques",
        "Quality assurance and control training",
      ],
      eligibility: "12th grade with PCM/PCB with minimum 50% marks",
      career: [
        "Pharmacist",
        "Drug Inspector",
        "Pharmaceutical Researcher",
        "Clinical Pharmacist",
        "Regulatory Affairs",
      ],
      duration: "4 years",
    };
  }

  if (title.includes("nursing")) {
    return {
      description:
        "The Nursing program prepares compassionate healthcare professionals with strong clinical skills and patient care expertise. Our curriculum emphasizes both theoretical knowledge and practical training.",
      highlights: [
        "Clinical training in partner hospitals",
        "Simulation labs for skill development",
        "Community health programs",
        "International nursing standards",
        "Research in nursing practices",
        "Holistic patient care approach",
      ],
      eligibility: "12th grade with PCB with minimum 45% marks",
      career: [
        "Registered Nurse",
        "Nurse Practitioner",
        "Nursing Supervisor",
        "Community Health Nurse",
        "Nursing Educator",
      ],
      duration: "4 years",
    };
  }

  if (title.includes("management") || title.includes("business")) {
    return {
      description:
        "Our Management programs develop future business leaders with strong analytical, strategic, and leadership skills. The curriculum covers various aspects of business administration and entrepreneurship.",
      highlights: [
        "Case study methodology",
        "Industry mentorship programs",
        "Entrepreneurship development",
        "Global business exposure",
        "Leadership development workshops",
        "Corporate internships and placements",
      ],
      eligibility: "Graduation in any discipline with minimum 50% marks",
      career: [
        "Business Manager",
        "Consultant",
        "Entrepreneur",
        "Business Analyst",
        "Corporate Executive",
      ],
      duration: "2 years",
    };
  }

  // Default return for other courses
  return {
    description: `Comprehensive ${courseTitle} program designed to provide in-depth knowledge and practical skills in the field. Our curriculum is designed to meet industry standards and prepare students for successful careers.`,
    highlights: [
      "Industry-relevant curriculum",
      "Experienced faculty members",
      "Practical training opportunities",
      "Research and innovation focus",
      "Modern infrastructure and facilities",
      "Placement assistance and career guidance",
    ],
    eligibility: "As per university and regulatory body requirements",
    career: [
      "Specialist",
      "Researcher",
      "Consultant",
      "Academia",
      "Industry Professional",
    ],
    duration: "As per program structure",
  };
};

const UniversityLayout = ({ universityData }: UniversityLayoutProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
    college: universityData.name,
  });
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    course: "",
    college: universityData.name,
  });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);
  const [isCourseDetailOpen, setIsCourseDetailOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { pathname } = useLocation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaveDisabled(true);
    try {
      const enquirySubmitReq = await fetch("/api/admission-query", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include",
        method: "POST",
      });
      const enquirySubmitRes = await enquirySubmitReq.json();
      if (enquirySubmitReq.ok) {
        toast({
          title: "Application Submitted Successfully!",
          description:
            "We'll contact you soon with more information about the course.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "",
          message: "",
          college: universityData.name,
        });
        setIsContactOpen(false);
        setIsCourseDetailOpen(false);
      } else {
        toast({
          title: "Application submission failed!",
          description:
            enquirySubmitRes.error ||
            "Please try submitting the application again!",
        });
      }
    } catch (error) {
      console.log("Error in sending enquiry");
      toast({
        title: "Enquiry submission failed!",
        description: "Please try submitting the enquiry again!",
      });
    } finally {
      setIsSaveDisabled(false);
    }
    console.log("Registration submitted:", formData);
  };

  const handleEnquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enquiry submitted:", enquiryForm);
    setIsSaveDisabled(true);
    try {
      const enquirySubmitReq = await fetch("/api/admission-query", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryForm),
        credentials: "include",
        method: "POST",
      });
      const enquirySubmitRes = await enquirySubmitReq.json();
      if (enquirySubmitReq.ok) {
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "We'll contact you soon with more information.",
        });
        setEnquiryForm({
          name: "",
          phone: "",
          state: "",
          district: "",
          course: "",
          college: universityData.name,
        });
      } else {
        toast({
          title: "Application submission failed!",
          description:
            enquirySubmitRes.error ||
            "Please try submitting the application again!",
        });
      }
    } catch (error) {
      console.log("Error in sending enquiry");
      toast({
        title: "Enquiry submission failed!",
        description: "Please try submitting the enquiry again!",
      });
      setEnquiryForm({
        name: "",
        phone: "",
        state: "",
        district: "",
        course: "",
        college: universityData.name,
      });
    } finally {
      setIsSaveDisabled(false);
    }
  };

  const handleCourseClick = (course: Course) => {
    const detailedInfo = getDetailedCourseInfo(course.title);
    setSelectedCourse({
      ...course,
      ...detailedInfo,
    });
    setIsCourseDetailOpen(true);
  };

  const handleApplyNow = () => {
    setFormData({ ...formData, course: selectedCourse?.title || "" });
    setIsCourseDetailOpen(false);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Helmet>
        <title>{universityData.name} | Admissions & Programs</title>
        <meta
          name="description"
          content={
            universityData.metaDescription ||
            `Learn about ${universityData.name} in ${universityData.location}. Established in ${universityData.established} with ${universityData.students} students. Explore programs in ${universityData.courses
              .slice(0, 5)
              .map((c) => c.title)
              .join(", ")} and more.`
          }
        />
        <meta
          name="keywords"
          content={
            universityData.metaKeywords ||
            `${universityData.name}, university, ${universityData.location}, admissions, ${universityData.courses
              .slice(0, 8)
              .map((c) => c.title)
              .join(", ")}, education, college`
          }
        />
        <link
          rel="canonical"
          href={`https://www.getyourcollege.com/admissions/${pathname.split("/").at(-1)}`}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content={`${universityData.name} | Admissions & Programs`}
        />
        <meta
          property="og:description"
          content={
            universityData.metaDescription ||
            `Learn about ${universityData.name} in ${universityData.location}. Established in ${universityData.established} with ${universityData.students} students.`
          }
        />
        <meta property="og:image" content={universityData.heroImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.href} />
        <meta
          property="twitter:title"
          content={`${universityData.name} | Admissions & Programs`}
        />
        <meta
          property="twitter:description"
          content={
            universityData.metaDescription ||
            `Learn about ${universityData.name} in ${universityData.location}. Established in ${universityData.established}.`
          }
        />
        <meta property="twitter:image" content={universityData.heroImage} />

        {/* Structured Data for Educational Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: universityData.name,
            description: universityData.about,
            url: window.location.href,
            logo: universityData.logoImage,
            image: universityData.heroImage,
            address: {
              "@type": "PostalAddress",
              addressLocality: universityData.location,
            },
            foundingDate: universityData.established,
            numberOfStudents: universityData.students,
          })}
        </script>
      </Helmet>
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/95 shadow-lg backdrop-blur-sm">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                {universityData.logoImage ? (
                  <img
                    src={universityData.logoImage}
                    alt={`${universityData.name} Logo`}
                    className="h-14 w-14 rounded-xl border-2 border-white object-cover shadow-lg"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg">
                    <span className="text-xl font-bold text-white">
                      {universityData.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {universityData.name.split(" ").slice(0, 12).join(" ")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="mr-1 h-3 w-3" />
                    {universityData.location}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-500">
              Excellence in Education
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-32"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${universityData.heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="sm:px-6 lg:px-8 relative mx-auto max-w-7xl px-4">
          <div className="lg:grid-cols-2 grid grid-cols-1 items-center gap-12">
            {/* Left Content - Expanded */}
            <div className="lg:text-left space-y-8 text-center">
              <div className="mb-8 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white backdrop-blur-sm">
                <Star className="mr-2 h-4 w-4 text-yellow-400" />
                Est. {universityData.established} • {universityData.students}{" "}
                Students
              </div>
              <h1 className="lg:text-6xl mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
                {universityData.name}
              </h1>
              <p className="mb-8 text-xl font-light leading-relaxed text-white/90 md:text-2xl">
                {universityData.tagline || "Excellence in Education"}
              </p>

              {/* Additional content to use the space efficiently */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-white md:text-3xl">
                      {universityData.established}
                    </div>
                    <div className="text-sm text-gray-300">Established</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-white md:text-3xl">
                      {universityData.students}
                    </div>
                    <div className="text-sm text-gray-300">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-white md:text-3xl">
                      {universityData.courses.length}+
                    </div>
                    <div className="text-sm text-gray-300">Programs</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    Why Choose Us?
                  </h3>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center">
                      <Award className="mr-2 h-4 w-4 text-yellow-400" />
                      <span className="text-sm">
                        Top-ranked university with excellent reputation
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Users className="mr-2 h-4 w-4 text-blue-400" />
                      <span className="text-sm">
                        Expert faculty with industry experience
                      </span>
                    </li>
                    <li className="flex items-center">
                      <Building className="mr-2 h-4 w-4 text-green-400" />
                      <span className="text-sm">
                        Modern infrastructure and facilities
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Enquiry Form */}
            <div className="rounded-2xl border bg-white p-6 shadow-xl md:p-8">
              <div className="mb-6 text-center">
                <h2 className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
                  Get Started Today
                </h2>
                <p className="text-gray-600">
                  Submit your enquiry and we'll help you find the perfect
                  program
                </p>
              </div>

              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div>
                  <Label
                    htmlFor="enquiry-name"
                    className="flex items-center text-sm font-medium"
                  >
                    <User className="mr-2 h-4 w-4 text-blue-600" />
                    Full Name *
                  </Label>
                  <Input
                    id="enquiry-name"
                    value={enquiryForm.name}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, name: e.target.value })
                    }
                    required
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="enquiry-phone"
                    className="flex items-center text-sm font-medium"
                  >
                    <Phone className="mr-2 h-4 w-4 text-green-600" />
                    Phone Number *
                  </Label>
                  <Input
                    id="enquiry-phone"
                    value={enquiryForm.phone}
                    onChange={(e) =>
                      setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                    }
                    required
                    className="mt-1"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="enquiry-state"
                    className="flex items-center text-sm font-medium"
                  >
                    <MapPin className="mr-2 h-4 w-4 text-purple-600" />
                    State *
                  </Label>
                  <Select
                    value={enquiryForm.state}
                    onValueChange={(value) =>
                      setEnquiryForm({
                        ...enquiryForm,
                        state: value,
                        district: "",
                      })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your state" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="enquiry-district"
                    className="flex items-center text-sm font-medium"
                  >
                    <MapPin className="mr-2 h-4 w-4 text-indigo-600" />
                    District *
                  </Label>
                  <Select
                    value={enquiryForm.district}
                    onValueChange={(value) =>
                      setEnquiryForm({ ...enquiryForm, district: value })
                    }
                    disabled={!enquiryForm.state}
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue
                        placeholder={
                          enquiryForm.state
                            ? "Select your district"
                            : "Select state first"
                        }
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {enquiryForm.state &&
                        districtsByState[enquiryForm.state]?.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label
                    htmlFor="enquiry-program"
                    className="flex items-center text-sm font-medium"
                  >
                    <GraduationCap className="mr-2 h-4 w-4 text-orange-600" />
                    Program Interest *
                  </Label>
                  <Select
                    value={enquiryForm.course}
                    onValueChange={(value) =>
                      setEnquiryForm({ ...enquiryForm, course: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select program of interest" />
                    </SelectTrigger>
                    <SelectContent>
                      {universityData.courses.map((course, index) => (
                        <SelectItem key={index} value={course.title}>
                          {course.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <span className="mt-6 text-xs font-semibold text-gray-600">
                  By submitting this form, you agree let us use your information
                  to possibly contact you about admissions.
                </span>
                <Button
                  type="submit"
                  disabled={isSaveDisabled}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-3 text-lg font-semibold text-white hover:from-blue-700 hover:to-purple-700"
                >
                  Submit Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="bg-white py-24">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-purple-100 px-6 py-3 text-sm font-medium text-purple-700">
              <BookOpen className="mr-2 h-4 w-4" />
              Academic Programs
            </div>
            <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
              Programmes Offered
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              Advance your career by choosing the course that interests you the
              most
            </p>
          </div>

          <div className="lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            {universityData.courses.map((course, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl"
                onClick={() => handleCourseClick(course)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image || getCourseImage(course.title)}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-bold leading-tight text-white">
                      {course.title}
                    </h3>
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-white/20 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ChevronRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full py-2 text-base font-medium text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-24">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4">
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-6 py-3 text-sm font-medium text-blue-700">
              <Award className="mr-2 h-4 w-4" />
              Why Choose Us
            </div>
            <h2 className="mb-8 text-4xl font-bold text-gray-900 md:text-5xl">
              Excellence in Every Aspect
            </h2>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
              We are committed to providing quality education and fostering
              innovation and research excellence.
            </p>
          </div>

          <div className="lg:grid-cols-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            {universityData.features.map((feature, index) => (
              <div key={index} className="group">
                <div className="transform rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
                  <div
                    className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color || "bg-blue-100"} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <feature.icon
                      className={`h-8 w-8 ${index === 0 ? "text-blue-600" : index === 1 ? "text-green-600" : index === 2 ? "text-orange-600" : "text-red-600"}`}
                    />
                  </div>
                  <h3 className="mb-3 text-center text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="sm:px-6 lg:px-8 relative mx-auto max-w-7xl px-4">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm">
              <Building className="mr-2 h-4 w-4" />
              Our Story
            </div>
            <h2 className="mb-8 text-4xl font-bold leading-tight text-white md:text-5xl">
              About {universityData.name.split(" ").slice(-2).join(" ")}
            </h2>
            <div className="prose prose-lg max-w-none text-white/90">
              <p className="mb-8 text-xl font-light leading-relaxed">
                {universityData.about}
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white">
                  {universityData.established}
                </div>
                <div className="text-gray-300">Established</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white">
                  {universityData.students}
                </div>
                <div className="text-gray-300">Students</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white">
                  {universityData.courses.length}+
                </div>
                <div className="text-gray-300">Programs</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white">A+</div>
                <div className="text-gray-300">NAAC Grade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Detail Dialog */}
      <Dialog open={isCourseDetailOpen} onOpenChange={setIsCourseDetailOpen}>
        <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="mb-2 text-2xl font-bold text-gray-900 md:text-3xl">
              {selectedCourse?.title}
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed text-gray-600">
              {selectedCourse?.description}
            </DialogDescription>
          </DialogHeader>

          {selectedCourse && (
            <div className="mt-6 space-y-8">
              {/* Program Highlights */}
              <div>
                <h3 className="mb-4 flex items-center text-xl font-semibold text-gray-900">
                  <Star className="mr-2 h-5 w-5 text-yellow-500" />
                  Program Highlights
                </h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {selectedCourse.highlights?.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 text-gray-700"
                    >
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Grid */}
              <div className="lg:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-4">
                  <h4 className="mb-3 flex items-center font-semibold text-gray-900">
                    <Users2 className="mr-2 h-5 w-5 text-blue-500" />
                    Eligibility
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {selectedCourse.eligibility}
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <h4 className="mb-3 flex items-center font-semibold text-gray-900">
                    <Clock className="mr-2 h-5 w-5 text-green-500" />
                    Duration
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {selectedCourse.duration}
                  </p>
                </div>

                <div className="lg:col-span-1 rounded-lg bg-purple-50 p-4 md:col-span-2">
                  <h4 className="mb-3 flex items-center font-semibold text-gray-900">
                    <GraduationCap className="mr-2 h-5 w-5 text-purple-500" />
                    Career Opportunities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.career?.map((career, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700"
                      >
                        {career}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="sm:flex-row flex flex-col gap-3 border-t pt-6">
                <Button
                  onClick={handleApplyNow}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setIsCourseDetailOpen(false)}
                  className="flex-1 py-3"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Contact Us Dialog */}
      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Contact {universityData.name}
            </DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll get back to you with more
              information.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="course">Course Interest</Label>
              <Select
                value={formData.course}
                onValueChange={(value) =>
                  setFormData({ ...formData, course: value })
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  {universityData.courses.map((course, index) => (
                    <SelectItem key={index} value={course.title}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message">Additional Message (Optional)</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell us more about your interests..."
                className="mt-1"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isSaveDisabled}
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Submit Application
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsContactOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UniversityLayout;
