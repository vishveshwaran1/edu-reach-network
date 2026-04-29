import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Award,
  BookOpen,
  Building,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const universities = [
  {
    name: "MGR University",
    path: "/mgr-university",
    description: "Leading institution in medical and health sciences",
    color: "from-blue-600 to-blue-800",
    image: "https://www.drmgrdu.ac.in/images/logo/logo_main.png",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXL8WpQPT0QRC84zDlL5rHThqw0BdhWRzWA&s",
  },
  {
    name: "DSU University",
    path: "/dsu-university",
    description: "Innovation in technology and engineering",
    color: "from-emerald-600 to-emerald-800",
    image: "https://www.dsuniversity.ac.in/images/DSU_Logo.png",
    heroImage: "https://www.dsuniversity.ac.in/slider/DSU-Pic-04.jpg",
  },
  {
    name: "BIHER University",
    path: "/biher-university",
    description: "Excellence in biotechnology and research",
    color: "from-purple-600 to-purple-800",
    image:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Bharath_University_Logo.png",
    heroImage:
      "https://img.jagranjosh.com/images/2022/December/1122022/Bharath-Institute-of-Higher-Education-and-Research-Chennai-Campus-View-3.jpg",
  },
  {
    name: "SCSVMV University",
    path: "/scsvmv-university",
    description: "Comprehensive education and development",
    color: "from-orange-600 to-orange-800",
    image:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Sri_Chandrasekharendra_Saraswathi_Viswa_Mahavidyalaya_logo.png",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvOBmLRcAe4nPBYeVosAKtyty4x5aqLc9Fg&s",
  },
  {
    name: "Saveetha University",
    path: "/saveetha-university",
    description: "Multidisciplinary academic excellence",
    color: "from-red-600 to-red-800",
    image:
      "https://upload.wikimedia.org/wikipedia/en/2/21/Saveetha_Institute_of_Medical_And_Technical_Sciences_Logo.png",
    heroImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVs0OjZjdMSOK_D8q6stw6rjfOPdnb02C7Kw&s",
  },
  {
    name: "Takshashila University",
    path: "/takshashila-university",
    description: "Reviving India's ancient educational excellence",
    color: "from-amber-600 to-amber-800",
    image:
      "https://media.licdn.com/dms/image/v2/C4D0BAQEn2ipthDvaeA/company-logo_200_200/company-logo_200_200/0/1657190027778?e=1755129600&v=beta&t=_Wq4kB0kNAdBl3n1gMC2LupsgXRrzgfc60qQAT8TDcg",
    heroImage:
      "https://takshashilauniv.ac.in/wp-content/uploads/2025/03/infrastructure-2.webp",
  },
  {
    name: "VelTech University",
    path: "/veltech-university",
    description: "Reviving India's ancient educational excellence",
    color: "from-amber-600 to-amber-800",
    image:
      "https://www.veltech.edu.in/wp-content/uploads/2026/01/veltech-logo-.png",
    heroImage:
      "https://www.veltech.edu.in/wp-content/uploads/2025/08/Campus-2.jpg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <meta
          name="description"
          content="Explore premier universities in Chennai including MGR University, DSU University, BIHER, SCSVMV, Saveetha, and Takshashila. Find programs in medicine, engineering, management, law and more."
        />
        <meta
          name="keywords"
          content="Chennai universities, university admissions, college admissions, medical programs, engineering education, law schools, management programs, MGR University, DSU University, BIHER, SCSVMV, Saveetha University, Takshashila University"
        />
        <link rel="canonical" href={window.location.origin} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin} />
        <meta
          property="og:title"
          content="University Explorer | Find Top Universities in Chennai"
        />
        <meta
          property="og:description"
          content="Explore premier universities in Chennai and find the perfect program to launch your career. Medical, Engineering, Biotechnology, and more."
        />
        <meta
          property="og:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={window.location.origin} />
        <meta
          property="twitter:title"
          content="University Explorer | Find Top Universities in Chennai"
        />
        <meta
          property="twitter:description"
          content="Explore premier universities in Chennai and find the perfect program to launch your career."
        />
        <meta
          property="twitter:image"
          content="https://lovable.dev/opengraph-image-p98pqg.png"
        />

        {/* Structured Data for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "University Explorer",
            url: window.location.origin,
            logo: "https://lovable.dev/opengraph-image-p98pqg.png",
            description:
              "Gateway to premier educational institutions in Chennai",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chennai",
              addressRegion: "Tamil Nadu",
              addressCountry: "India",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 9876543210",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Building className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                University Explorer
              </h1>
            </div>
            <div className="sm:block hidden text-sm text-gray-600">
              Find Your Future
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="lg:text-6xl mb-6 animate-fade-in text-4xl font-bold text-gray-900 md:text-5xl">
              Discover Your Future
            </h1>
            <p className="mx-auto mb-8 max-w-2xl animate-fade-in text-lg text-gray-600 md:text-xl">
              Explore premier universities in Chennai and find the perfect
              program to launch your career
            </p>

            <div className="lg:grid-cols-4 mx-auto mb-8 grid max-w-4xl grid-cols-2 gap-6">
              <div className="animate-fade-in text-center">
                <Award className="mx-auto mb-3 h-10 w-10 text-blue-600 md:h-12 md:w-12" />
                <h3 className="text-sm font-semibold text-gray-900 md:text-lg">
                  Accredited Programs
                </h3>
                <p className="text-xs text-gray-600 md:text-sm">
                  Top-tier standards
                </p>
              </div>
              <div className="animate-fade-in text-center">
                <Users className="mx-auto mb-3 h-10 w-10 text-emerald-600 md:h-12 md:w-12" />
                <h3 className="text-sm font-semibold text-gray-900 md:text-lg">
                  Expert Faculty
                </h3>
                <p className="text-xs text-gray-600 md:text-sm">
                  Industry leaders
                </p>
              </div>
              <div className="animate-fade-in text-center">
                <Building className="mx-auto mb-3 h-10 w-10 text-purple-600 md:h-12 md:w-12" />
                <h3 className="text-sm font-semibold text-gray-900 md:text-lg">
                  Modern Campus
                </h3>
                <p className="text-xs text-gray-600 md:text-sm">
                  State-of-the-art
                </p>
              </div>
              <div className="animate-fade-in text-center">
                <BookOpen className="mx-auto mb-3 h-10 w-10 text-orange-600 md:h-12 md:w-12" />
                <h3 className="text-sm font-semibold text-gray-900 md:text-lg">
                  Diverse Programs
                </h3>
                <p className="text-xs text-gray-600 md:text-sm">Wide range</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Grid */}
      <section className="bg-white py-16 md:py-20">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4">
          <h2 className="mb-16 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Choose Your University
          </h2>

          <div className="lg:grid-cols-3 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {universities.map((university, index) => (
              <Card
                key={university.path}
                className="animate-fade-in overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden md:h-56">
                    <img
                      src={university.heroImage}
                      alt={`${university.name} Campus`}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-3">
                      <img
                        src={university.image}
                        alt={`${university.name} Logo`}
                        className="h-12 w-12 rounded-lg bg-white object-cover p-1 shadow-lg"
                      />
                      <div>
                        <CardTitle className="text-lg text-white md:text-xl">
                          {university.name}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <CardDescription className="mb-4 text-sm text-gray-600 md:text-base">
                    {university.description}
                  </CardDescription>
                  <Link to={"/admissions" + university.path} className="block">
                    <Button className="w-full py-2 text-sm transition-transform hover:scale-105 md:py-3 md:text-base">
                      Explore University
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 py-12">
          <div className="lg:grid-cols-4 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Building className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">University Explorer</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-300">
                Your gateway to premier educational institutions. Discover the
                perfect university and program to shape your future.
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
                <Twitter className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
                <Instagram className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
                <Linkedin className="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-blue-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    to="/admissions/mgr-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    MGR University
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions/dsu-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    DSU University
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions/biher-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    BIHER University
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions/scsvmv-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    SCSVMV University
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions/saveetha-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Saveetha University
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions/takshashila-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Takshashila University
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admissions/veltech-university"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    VelTech University
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Popular Programs</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">Medical & Health Sciences</li>
                <li className="text-gray-300">Engineering & Technology</li>
                <li className="text-gray-300">Management Studies</li>
                <li className="text-gray-300">Law</li>
                <li className="text-gray-300">Arts & Science</li>
                <li className="text-gray-300">Pharmacy</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">
                    info@universityexplorer.com
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">
                    Chennai, Tamil Nadu, India
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-gray-300">
                    www.universityexplorer.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between md:flex-row">
              <p className="text-sm text-gray-400">
                © 2024 University Explorer. All rights reserved.
              </p>
              <div className="mt-4 flex space-x-6 md:mt-0">
                <span className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-white">
                  Privacy Policy
                </span>
                <span className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-white">
                  Terms of Service
                </span>
                <span className="cursor-pointer text-sm text-gray-400 transition-colors hover:text-white">
                  Cookie Policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
