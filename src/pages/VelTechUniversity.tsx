import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { districtsByState, states } from "@/lib/constants";
import { SelectItem } from "@radix-ui/react-select";
import { Building, GraduationCap, MapPin, Phone, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UNIVERSITY_NAME = "Vel Tech University";

const universityData = {
  name: UNIVERSITY_NAME,
  programs: [
    "Aeronautical Engineering",
    "Bio Medical Engineering",
    "Civil Engineering",
    "Computer Science Engineering",
    "Computer Science Engineering (AI)",
    "Computer Science Engineering (Cyber Security)",
    "Computer Science Engineering (AI & ML)",
    "Computer Science Engineering (AI & DS)",
    "Electrical and Electronics Engineering",
    "Electronics Communication Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "B.Com",
    "BBA",
    "Multimedia",
    "Visual Communication",
    "B.A. LLB (Hons)",
    "B.Com LLB (Hons)",
    "M.Tech",
    "MBA",
  ],
};

export default function VelTechUniversity() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    state: "",
    district: "",
    course: "",
    college: UNIVERSITY_NAME,
  });
  const [isSaveDisabled, setIsSaveDisabled] = useState(false);

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
          college: UNIVERSITY_NAME,
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
        college: UNIVERSITY_NAME,
      });
    } finally {
      setIsSaveDisabled(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b bg-white/95 shadow-lg backdrop-blur-sm">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <img
                  src={
                    "https://www.veltech.edu.in/wp-content/uploads/2026/01/veltech-logo-.png"
                  }
                  alt={`Veltech Logo`}
                  className="h-14 rounded-xl border-2 border-white object-cover shadow-lg"
                />
                <div>
                  <div className="text-xl font-bold text-gray-900">
                    {universityData.name.split(" ").slice(0, 12).join(" ")}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Building className="mr-1 h-3 w-3" />
                    Avadi
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
      <section className="relative flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 pb-16 pt-32">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 1200 800">
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4">
          <div className="lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] grid items-center gap-10">
            <div className="text-white">
              <span className="mb-6 inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-gray-900">
                Admissions Open 2026
              </span>
              <h1 className="lg:text-6xl mb-6 text-5xl font-bold leading-tight">
                One of the Top Ranked Institutions In India
              </h1>
              <p className="mb-8 text-xl leading-relaxed opacity-90 md:text-2xl">
                Excellence in Education, Research & Innovation
              </p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                  <p className="text-3xl font-bold text-yellow-300">1697+</p>
                  <p className="text-sm text-white/80">Placements</p>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/10 p-4 text-center backdrop-blur-sm">
                  <p className="text-3xl font-bold text-yellow-300">47 LPA</p>
                  <p className="text-sm text-white/80">Highest CTC</p>
                </div>
              </div>
            </div>

            <div className="lg:ml-auto mx-auto w-full max-w-2xl">
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
                        setEnquiryForm({
                          ...enquiryForm,
                          phone: e.target.value,
                        })
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
                          districtsByState[enquiryForm.state]?.map(
                            (district) => (
                              <SelectItem key={district} value={district}>
                                {district}
                              </SelectItem>
                            ),
                          )}
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
                        {universityData.programs.map((program, index) => (
                          <SelectItem key={index} value={program}>
                            {program}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <span className="mt-6 text-xs font-semibold text-gray-600">
                    By submitting this form, you agree let us use your
                    information to possibly contact you about admissions.
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
        </div>
      </section>
    </>
  );
}
