

import UniversityLayout from "@/components/UniversityLayout";
import { Award, Users, Building, Handshake } from "lucide-react";

const universityData = {
  name: "Dhanalakshmi Srinivasan University",
  location: "Chennai, Perambalur & Trichy, Tamil Nadu",
  tagline: "Empowering Minds, Transforming Lives - Innovation and Excellence in Higher Education",
  heroImage: "https://www.dsuniversity.ac.in/slider/DSU-Pic-04.jpg",
  logoImage: "https://www.dsuniversity.ac.in/images/DSU_Logo.png",
  primaryColor: "text-emerald-600",
  gradientColors: "from-emerald-600 to-emerald-800",
  established: "2019",
  students: "15,000+",
  metaDescription: "Dhanalakshmi Srinivasan University (DSU) - Premier multi-campus institution in Tamil Nadu with campuses in Samayapuram (Tiruchirappalli) and Perambalur. UGC approved university offering comprehensive programs in medicine, engineering, agriculture, pharmacy, and more with modern infrastructure and industry partnerships.",
  metaKeywords: "Dhanalakshmi Srinivasan University, DSU, Samayapuram campus, Perambalur campus, Tiruchirappalli university, Tamil Nadu university, medical education, engineering college, agriculture programs, pharmacy courses, AICTE approved, UGC approved, multi-campus university",
  about:
    "Dhanalakshmi Srinivasan University (DSU), established in 2019, is a prestigious multi-campus institution with state-of-the-art facilities in Samayapuram, Tiruchirappalli and Perambalur, Tamil Nadu. Founded by the Dhanalakshmi Srinivasan Charitable and Educational Trust under the visionary leadership of Dr. A. Srinivasan, DSU represents over 25 years of educational excellence. The university operates across multiple campuses with modern infrastructure, advanced laboratories, and comprehensive facilities. Approved by UGC, AICTE, NMC, PCI, and INC, DSU offers diverse programs from undergraduate to doctoral levels across various disciplines including medicine, engineering, agriculture, pharmacy, law, and management. With a commitment to holistic education, research innovation, and industry collaboration, DSU prepares students to become global leaders and responsible citizens.",
  features: [
    {
      icon: Award,
      title: "Approvals",
      description: "Approved by AICTE, NMC, PCI, INC, and UGC.",
      color: "bg-blue-100",
    },
    {
      icon: Building,
      title: "Campus",
      description:
        "Modern campuses in Samayapuram and Perambalur with advanced infrastructure.",
      color: "bg-green-100",
    },
    {
      icon: Users,
      title: "Faculties",
      description:
        "Highly qualified, experienced educators promoting research and innovation.",
      color: "bg-orange-100",
    },
    {
      icon: Handshake,
      title: "Collaborations",
      description:
        "Robust industry-academic partnerships enhancing practical experience.",
      color: "bg-red-100",
    },
  ],
  courses: [
    {
      title: "B.Tech - Artificial Intelligence & Data Science",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQFgy09hFhKGZA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1734360323373?e=2147483647&v=beta&t=Xdhh6NfoBadaQXy4sIdKqRlmdqSEuy-7dB-VTQVimzU",
    },
    {
      title: "B.Tech - Artificial Intelligence and Machine Learning",
      image:
        "https://miro.medium.com/v2/resize:fit:1400/0*aqjYal-ng3JdAuR2",
    },
    {
      title: "B.Tech - Computer Science & Engineering",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    },
    {
      title: "B.Tech - Computer Science & Engineering with Cyber Security",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80",
    },
    {
      title: "B.Tech - Information Technology",
      image:
        "https://storage.googleapis.com/5paisa-prod-storage/files/2022-07/IT_3.jpg",
    },
    {
      title: "B.Tech - Agriculture Engineering",
      image:
        "https://www.aiet.org.in/wp-content/uploads/2023/11/image1-4.jpg",
    },
    {
      title: "B.Tech - Biotechnology",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHRgZyqDGPLRQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1699521451896?e=2147483647&v=beta&t=xbuM8aDw3My8Tw-ns0aPX6XY46hzudWFqCsMegV9wew",
    },
    {
      title: "B.Tech - Biomedical Engineering",
      image:
        "https://www.gilero.com/wp-content/uploads/2025/06/GettyImages-1193074238.jpg",
    },
    {
      title: "B.Tech - Computer Science & Engineering with IOT",
      image:
        "https://cdn.prod.website-files.com/5f2b216ac3168956c3b5be1c/64c07f9ec46dba0d69701f93_iStock-1428908381%20(1).jpg",
    },
    {
      title: "B.Tech - Electrical and Electronics Engineering",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    },
    {
      title: "B.Tech - Electronics and Communication Engineering",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80",
    },
    {
      title: "B.Tech - Mechanical Engineering",
      image:
        "https://educadd.co.in/wp-content/uploads/2024/01/Manufacturing-Design.jpg",
    },
    {
      title: "Medical & Health Sciences",
      image:
        "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=400&q=80",
    },
    {
      title: "Law",
      image:
        "https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg",
    },
    {
      title: "Physiotherapy",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80",
    },
    {
      title: "Pharmacy",
      image:
        "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&q=80",
    },
    {
      title: "Agriculture",
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&q=80",
    },
    {
      title: "Design",
      image:
        "https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=400&q=80",
    },
    {
      title: "Management",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    },
  ],
};

const DsuUniversity = () => {
  return <UniversityLayout universityData={universityData} />;
};

export default DsuUniversity;

