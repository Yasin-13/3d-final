"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "./components/navbar"

const AnimatedSection = ({ children, className = "" }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const recruiterImages = [
  "/cq.png",
  "/c2.png",
  "/c3.png",
  "/c4.png",
  "/c5.png",
  "/c7.png",
  "/c8.png",
  "/c9.png",
  "/c10.png",
  "/c11.png",
  "/c12.png",
  "/c13.png",// Add more image URLs as needed
]

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter mb-8">
            A. P. Shah Institute of Technology
          </h1>

          <p className="text-gray-400 max-w-md mb-12 text-lg">
            Empowering future engineers with cutting-edge education and industry-ready skills.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              href="#about"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <Image
            src="/1.jpg?height=800&width=1200"
            alt="APSIT Campus"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-16 px-6 md:px-12 lg:px-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About APSIT</h2>

    {/* About Image */}
    <div className="mb-8">
      <img 
        src="Picture9.png" 
        alt="About APSIT" 
        className="w-full rounded-lg shadow-lg object-cover"
      />
    </div>

    <p className="text-gray-300 mb-6">
      A. P. Shah Institute of Technology, Thane offers engineering degree courses in Civil, Mechanical, Computer
      Engineering and Information Technology. These courses are accredited by National Board of Accreditation
      (NBA). Accreditation is a conformation and assurance to students and parents regarding quality of teaching
      learning practices followed in an Engineering Institute. Institute's commitment to deliver latest in
      pedagogics is recognised by accreditation from STEM USA. Recently, the institute has also added courses in
      Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning and Data
      Science.
    </p>
  </div>
</AnimatedSection>


      {/* About Institute */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">A. P. Shah Institute of Technology</h2>
          <p className="text-gray-300 mb-6">
            A. P. Shah Institute of Technology, Thane offers engineering degree courses in Civil, Mechanical, Computer
            Engineering and Information Technology. These courses are accredited by National Board of Accreditation
            (NBA). Accreditation is a conformation and assurance to students and parents regarding quality of teaching
            learning practices followed in an Engineering Institute. Institute's commitment to deliver latest in
            pedagogics is recognised by accreditation from STEM USA. Recently, the institute has also added courses in
            Computer Science & Engineering with specialization in Artificial Intelligence & Machine Learning and Data
            Science.
          </p>
        </div>
      </AnimatedSection>

      {/* Courses Offered */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Courses Offered</h2>
          <p className="text-gray-300 mb-4">
            APSIT provides Bachelor of Engineering (B.E.) degrees in the following specializations:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">
            <li>Computer Engineering</li>
            <li>Information Technology</li>
            <li>Electronics and Telecommunication Engineering</li>
            <li>Mechanical Engineering</li>
            <li>Artificial Intelligence and Data Science</li>
          </ul>
          <p className="text-gray-300">
            Each program is designed to equip students with the necessary technical skills and knowledge to excel in
            their respective fields.
          </p>
        </div>
      </AnimatedSection>

      {/* Admission Process */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Admission Process</h2>
          <p className="text-gray-300 mb-6">
  The admission process at A. P. Shah Institute of Technology (APSIT) is designed to ensure a seamless and transparent experience for aspiring students. The institute offers undergraduate engineering programs, and admissions are primarily conducted through the Centralized Admission Process (CAP) governed by the State Common Entrance Test Cell, Maharashtra. Candidates must qualify for the Maharashtra Common Entrance Test (MHT-CET) or Joint Entrance Examination (JEE Main) to be eligible for admission. Students from outside Maharashtra can also apply through the All India Quota, based on their JEE Main scores.
</p>

<p className="text-gray-300 mb-6">
  Applicants must meet the minimum eligibility criteria, which include passing the Higher Secondary Certificate (HSC) examination or an equivalent qualification with Physics, Mathematics, and Chemistry/Biology/Computer Science as core subjects. The admission process involves online registration through the official website of the State Common Entrance Test Cell, Maharashtra, followed by document verification at designated centers. Based on their entrance exam scores and category-wise seat availability, students are allotted seats through the CAP rounds. APSIT also offers Institute-Level Quota admissions, where eligible candidates can apply directly to the college by submitting their academic records and entrance exam scores. For this, students must visit the APSIT campus, complete the application process, and participate in counseling sessions conducted by the admission committee. The institute follows a merit-based selection process, ensuring that deserving students secure admission.
</p>

<p className="text-gray-300 mb-6">
  Once seat allotment is confirmed, students must report to the institute for document submission, fee payment, and final enrollment within the stipulated timeframe. The required documents include mark sheets, entrance exam scorecards, caste certificates (if applicable), domicile certificates, and other relevant documents. APSIT offers various scholarships and financial assistance schemes for eligible students to support their education. With a well-structured admission process, APSIT aims to attract talented and ambitious students, providing them with a technologically advanced learning environment to excel in their engineering careers. The institute ensures a student-centric approach, guiding applicants throughout the admission procedure for a smooth transition into their academic journey.
</p>

        </div>
      </AnimatedSection>

      {/* Fee Structure */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Fee Structure</h2>
          <p className="text-gray-300">
          The fee structure at A. P. Shah Institute of Technology (APSIT) is as follows:
Tuition Fees: ₹1,33,000 per annum. 
University Fees: This includes charges for exams, enrollment, eligibility, cultural activities, disaster relief fund, cultural sports, e-charges, vice-chancellor fund, NSS fund, and national service scheme.
Payment Details: Fees are to be paid via Demand Draft (DD) in favor of "A P SHAH INSTITUTE OF TECHNOLOGY". Or it can be paid online through our APSIT payment portal         https://admission.apsit.org.in/ jaha apsit highlight kiya h dekh upar wala line me waha yeh link add krdenaa

Please note that the fee structure is subject to change as per the institute's regulations. 
For the most accurate and updated information, it is advisable to consult the official APSIT website or contact the admissions office directly.


          </p>
        </div>
      </AnimatedSection>

      {/* Facilities */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Facilities</h2>
          <p className="text-gray-300 mb-6">
  A. P. Shah Institute of Technology (APSIT) offers a wide range of modern facilities designed to provide students with a conducive learning environment and support their academic, research, and extracurricular activities. The institute boasts a state-of-the-art infrastructure with well-equipped laboratories, advanced computing facilities, and smart classrooms that integrate AI-driven teaching methodologies. The digital library provides access to an extensive collection of books, journals, e-resources, and research papers, fostering a culture of continuous learning.
</p>

<p className="text-gray-300 mb-6">
  The spacious seminar halls and conference rooms are equipped with modern audio-visual aids, hosting guest lectures, technical workshops, and corporate interactions. APSIT has a centralized computing facility with high-speed internet access, supporting various academic and research-related activities. The robotics and AI labs provide students with hands-on experience in emerging technologies, ensuring they stay ahead in the competitive world of engineering.
</p>

<p className="text-gray-300 mb-6">
  The institute provides a well-maintained cafeteria offering hygienic and nutritious meals, along with recreational spaces for students to unwind. The sports facilities include indoor and outdoor games, promoting physical fitness and teamwork. The college has dedicated student clubs and societies for technical, cultural, and artistic pursuits, encouraging holistic development. For student safety and well-being, APSIT has a 24/7 security system, CCTV surveillance, and a medical center on campus. The dedicated placement and career development cell ensures strong industry connections, facilitating job opportunities for students in leading multinational companies. Additionally, APSIT provides transportation facilities, hostel accommodations, and a grievance redressal system to ensure a comfortable and enriching educational experience. Through its world-class facilities, APSIT remains committed to fostering a progressive, innovative, and student-friendly environment for aspiring engineers.
</p>

        </div>
      </AnimatedSection>

      {/* Industry Collaborations */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Industry Collaborations</h2>
          <p className="text-gray-300">
            APSIT offers myriad ways of building engineering career through its strong industrial collaborations.
            Institute provides opportunities to master globally trending technologies of future at no extra cost. For
            further details on the entire gamut of technologies you may visit
            <a
              href="https://www.apsit.edu.in/"
              className="text-red-600 hover:text-red-400 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Institute Website.
            </a>
          </p>
        </div>
      </AnimatedSection>

      {/* Engineering Departments */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Engineering Departments</h2>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">CIVIL ENGINEERING</h3>
              <div className="bg-black/50 p-6 rounded-lg">
                <p className="text-gray-300 text-center">
                  Comprehensive civil engineering program with focus on structural design, construction management, and
                  sustainable development.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">MECHANICAL ENGINEERING</h3>
              <div className="bg-black/50 p-6 rounded-lg">
                <p className="text-gray-300 text-center">
                  State-of-the-art mechanical engineering curriculum covering thermodynamics, manufacturing processes,
                  and mechanical design.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                IT / COMPUTER ENGG. / CSE (AI and ML) / CSE (Data Science)
              </h3>
              <div className="bg-black/50 p-6 rounded-lg">
                <p className="text-gray-300 text-center">
                  Cutting-edge programs in computer science and information technology with specializations in
                  artificial intelligence, machine learning, and data science.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Recruiters */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">OUR RECRUITERS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recruiterImages.map((image, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg flex items-center justify-center h-24">
                <img src={image} alt={`Company ${i + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection className="py-12 px-6 md:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-gray-300 mb-4">
            A.P. Shah Institute of Technology (APSIT) in Thane, Maharashtra, is a well-regarded engineering college
            affiliated with the University of Mumbai.
          </p>

          <div className="space-y-6 mt-8">
            <div>
              <h3 className="text-xl font-bold mb-2">1. Accreditation & Recognition</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Affiliated with Mumbai University</li>
                <li>Approved by AICTE (All India Council for Technical Education)</li>
                <li>NBA & NAAC accredited, ensuring quality education</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">2. Modern Infrastructure</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Well-equipped laboratories & research centers</li>
                <li>Smart classrooms and a well-stocked library</li>
                <li>Incubation center for startups and entrepreneurship</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">3. Strong Placement Record</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-4">
                <li>Companies like TCS, Infosys, Capgemini, Accenture, L&T, Amazon, etc., visit the campus</li>
                <li>Training programs to enhance employability skills</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}