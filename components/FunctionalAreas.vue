<template>
  <div class="container container-1">
    <div
      class="photo-card"
      v-for="justword in content[area]"
      :key="justword.id"
    >
      <div>
        <div class="head-title">{{ justword.headline }}</div>
        <div class="head-description" v-html="justword.discription"></div>
        <div v-for="list in justword.titleList" :key="list">
          <div class="head-subtitle">{{ list.title1 }}</div>
          <div class="head-description" v-html="list.titlepoint"></div>
        </div>
        <div class="head-description" v-html="justword.discription1"></div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    area: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      currentarticle: null,
      content: {
        SalesandBDProfessionals: [
          {
            headline: 'Sales and Business Development Professionals',

            discription:
              '<p>E-commerce, retail, pharmaceuticals, FMCG, clothing and fashion, cosmetics, furniture, aerospace, manufacturing, chemicals, and so on all require a result-oriented sales department. Hence, sales and business development positions are in high demand across India.</p><br /><p>When it comes to the growth of these startups, business development is critical. Their contribution directly helps a business increase revenue while also improving customer service and brand awareness. A skilled sales and business development professional are primarily responsible for lead generation and sales growth.</p><br /><p>Using proper recruiting practices is the key to finding skilled sales and business development professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />',

            titleList: [
              {
                title1: 'Skills required to be a Sales Professional',
                titlepoint:
                  '<ul><li>Interpersonal skills</li><li>Communication skills</li><li>Time-management</li><li>Problem-solving skills</li><li>Result-oriented approach</li></ul>',
              },
            ],
          },
        ],

        MarketingProfessionals: [
          {
            headline: 'Marketing Professionals',

            discription:
              "<p>While many verticals exist within the marketing domain, certain skills and attributes are required of all marketers to produce desired results.</p><br /><p>Marketing Professionals work closely with communication and sales strategies in a company. They have a very important role, both for the positioning of a brand in the market, and for any type of communication and for the financial return that the business expects. They are responsible for identifying and articulating the strategies and techniques to be used to attract customers to a business. Likewise, they determine the pricing based on product demand and supply, help maximize a firm's profits, and grow market share for a business. They also aid in new product development and critique market trends.</p><br /><p>Using proper recruiting practices is the key to finding skilled marketing professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />",
            titleList: [
              {
                title1: 'Skills required to be a Marketing Professional',

                titlepoint:
                  '<ul><li>Communication skills</li><li>Creative thinking</li><li>Leadership skills</li><li>Interpersonal skills</li</ul>',
              },
              {
                title1:
                  'Technical Skills required to be a Marketing Professional',
                titlepoint:
                  '<ul><li>Ability to recognize market trends</li><li>Problem-solving</li><li>Data analysis</li><li>Content editing</li><li>SEO/SEM expertise</li></ul>',
              },
            ],
          },
        ],

        ManagementTeam: [
          {
            headline: 'Management Professionals',

            discription:
              "<p>A manager's role is critical in any organization. A manager is responsible for tasks such as planning, organizing, staffing, directing, and controlling. All of these functions are necessary for an organization to run smoothly and achieve its goals. A manager must serve as a figurehead in some capacities. They must also act as a leader when dealing with subordinates' activities. They are not only responsible for motivating employees, but also for hiring, training, and disciplining them.</p><br />Good managers have a positive impact on their team members' lives and help them develop their skills. They prepare them for future senior positions in the organization. Using proper recruiting practices is the key to finding an able manager. Managers with the necessary skills and talent, behavioral qualities, and subject expertise will enter your workforce only if you have a competitive recruitment strategy in place.</p><br />",

            titleList: [
              {
                title1: 'Skills required to be a Manager',
                titlepoint:
                  '<ul><li>Interpersonal skills</li><li>Conflict-resolution skills</li><li>Good communication skills</li><li>Leadership skills</li><li>Responsibility & accountability</li><li>Approachable</li></ul>',
              },
            ],
          },
        ],

        Designers: [
          {
            headline: 'Design Professionals',

            discription:
              "<p>The design offers an effective way for companies to differentiate themselves from others. Capable of connecting customers and businesses before, design affects the consumer’s perception of an organization.</p><br />As a result, designers are extremely valuable to businesses today. A designer's job description includes the entire process of defining requirements, visualizing, and managing projects. A designer is an important member of a company's team who must be extremely creative to recognize visual trends and apply them in novel and exciting ways.</p><br /><p>Using proper recruiting practices is the key to finding a skilled designer. Only candidates with the necessary skills and talent, behavioral qualities, and subject expertise will enter the workforce by having a competitive recruitment strategy in place.</p><br />",

            titleList: [
              {
                title1: 'Skills required to become a Designer',
                titlepoint:
                  '<ul><li>Creativity</li><li>Communication skills</li><li>Interpersonal skills</li><li>Result-oriented approach</li><li>Detail-oriented approach</li><li>Flexibility</li></ul>',
              },
              {
                title1: 'Technical Skills required to be a Designers',
                titlepoint:
                  '<ul><li>Creativity</li><li>Communication skills</li><li>Interpersonal skills</li><li>Result-oriented approach</li><li>Detail-oriented approach</li><li>Flexibility</li></ul>',
              },
            ],
          },
        ],

        AutomobileJobsProfessionals: [
          {
            headline: 'Automobile Engineer Professionals',

            discription:
              '<p>Automotive engineers are part of a team that is in charge of vehicle design, development, manufacturing, and testing. Automotive engineers work on the design, production, distribution, marketing, sales, and after-sales care of automobiles (including race cars), motorcycles, and other commercial vehicles.</p><br /><p>It is one of the most popular careers among engineers. The rapid growth of auto components in the automobile sector increases job opportunities for Automobile Engineers. Using proper recruiting practices is the key to finding skilled automobile engineers. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />',
            title: 'Skills required to be an Automobile Engineer',
            titleList: [
              {
                title1: 'Skills required to be an Automobile Engineer',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Time management</li><li>Detail-oriented approach</li><li>Problem-solving skills</li><li>Leadership skills</li><li>Analytical skills</li></ul>',
              },
              {
                title1: 'Technical Skills required to be a Automobile Engineer',
                titlepoint:
                  '<ul><li>Industry knowledge</li><li>Research</li><li>Thermodynamics</li><li>Machine Elements Design</li><li>Engineering Analysis</li><li>Engines for Automobiles</li><li>Material Durability</li><li>Mechanical System Designing</li><li>The Machine Theory</li><li>Science and Technology of Materials</li><li>Vehicle Motion</li><li>Modeling of Power Units and Transmission Engineering Simulation and Analysis</li></ul>',
              },
            ],
          },
        ],

        MobileTechnologists: [
          {
            headline: 'Mobile Technologists',

            discription:
              '<p>Mobile technologists design, develop, and implement software programs for smartphones and other mobile devices. They specialize in a specific operating system, such as iOS or Android. They use data-driven insights to guide the development of software and applications that meet the needs of consumers. Likewise, they write code, oversee testing and bug fixes, create requirements and comprehensive plans, and participate in the rollout and launch. They work with engineers, designers, researchers, developers, and analysts.</p><br /><p>Using proper recruiting practices is the key to finding skilled marketing professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place</p><br />',

            titleList: [
              {
                title1: 'Skills required to be a Mobile Technologist',
                titlepoint:
                  '<ul><li>Effective communication</li><li>Attention to detail</li><li>Adaptability</li><li>Critical thinking</li><li>Result-oriented approach</li></ul>',
              },
              {
                title1: 'Technical Skills required to be a Mobile Technologist',
                titlepoint:
                  '<ul><li>Modern Language Programming</li><li>Backend Technology</li><li>GIT</li><li>Data analysis</li><li>Problem-solving</li></ul>',
              },
            ],
          },
        ],

        QAEngineers: [
          {
            headline: 'Quality Assurance Engineers',

            discription:
              "<p>Before products are made available to the public, a quality assurance (QA) engineer makes sure the software passes all inspections. They collaborate with a team, report to a manager, and supervise each stage of design, development, testing, and delivery to ensure that the product satisfies quality standards and needs. Every stage of the software development process, including design, development, testing, debugging, and delivery, is under the watchful eye of a quality assurance engineer.</p><br /><p>They ensure the final product satisfies the demand and uphold the software's quality standards at every stage. The tests are also created by a QA engineer to ensure that the software is free of any technical flaws. To test the software, they create test cases and record the outcomes. Depending on the project they work on and the industry they work in, the QA engineer's function may change.</p><br /><p>Using proper recruiting practices is the key to finding skilled marketing professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />",

            titleList: [
              {
                title1: 'Skills required to be a Quality Assurance Engineer',
                titlepoint:
                  '<ul><li>Effective communication</li><li>Result-oriented approach</li><li>Attention to detail</li><li>Adaptability</li><li>Critical thinking</li><li>Interpersonal skills</li></ul>',
              },
              {
                title1:
                  'Technical Skills required to be a Quality Assurance Engineer',
                titlepoint:
                  '<ul><li>Java</li><li>TestRail</li><li>Python</li><li>Problem-solving skills</li></ul>',
              },
            ],
          },
        ],

        ITSystemandOperationsEngineer: [
          {
            headline: 'IT System and Operations Engineer',

            discription:
              "<p>The IT Systems Engineer is in charge of analysis, installation, modification, and support of operating systems, databases, and utility applications. Additionally, the IT systems engineers organize, manage, and oversee the study of business issues with automated system fixes.</p><br /><p>Designing, testing, maintaining, and repairing the machinery are among an IT operations engineer's core responsibilities. To produce the best processes and results possible, they work together with production teams, project managers, quality control specialists, and equipment engineers. They also produce reports that outline the best practices.</p><br /><p>Using proper recruiting practices is the key to finding skilled marketing professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />",

            titleList: [
              {
                title1:
                  'Skills required to be an IT System and Operations Engineer',
                titlepoint:
                  '<ul><li>Effective communication</li><li>Attention to detail</li><li>Adaptability</li><li>Critical thinking</li><li>Result-oriented approach</li><li>Problem-solving</li><li>Creative thinking</li><li>Leadership skills</li><li>Interpersonal skills</li></ul>',
              },
              {
                title1:
                  'Technical Skills required to be an IT System and Operations Engineer',
                titlepoint:
                  '<ul><li>Troubleshooting</li><li>Researching skills</li><li>Operation analysis</li><li>Analytical skills</li><li>Problem-solving skills</li><li>Organizational skills</li></ul>',
              },
            ],
          },
        ],

        ProjectManager: [
          {
            headline: 'Project Manager',

            discription:
              '<p>A Project Manager is an expert who organizes, plans, and manages projects. They also lead a team, define goals, communicate with stakeholders and see the projects through to completion. The Project Manager is also in demand across various industries. When it comes to hiring a Project Manager, it can be tricky. From running a marketing campaign to developing a computer system, the project manager is in charge of the failure or success of the project. So, companies need to hire the best possible candidate for the role.</p><br /><p>One of the main aspects of hiring the most suitable candidate includes following a very effective recruitment process. With a competitive recruitment plan, attracting candidates with the desirable abilities and talent, behavioral traits, and subject expertise will be easier.</p><br />',

            titleList: [
              {
                title1: 'Skills required to be a Project Manager',
                titlepoint:
                  '<ul><li>Time management skills</li><li>Interpersonal skills</li><li>Ability to manage project resources</li><li>Communication skills</li><li>Result-oriented approach</li><li>Leadership skills</li></ul>',
              },
              {
                title1: 'Technical Skills required to be a Project Manager',
                titlepoint:
                  '<ul><li>Risk assessment</li><li>Troubleshooting</li><li>Quality assurance</li><li>Budget planning</li></ul>',
              },
            ],
          },
        ],

        DigitalMarketers: [
          {
            headline: 'Digital Marketer',

            discription:
              "<p>A Digital Marketer's job is to use a range of digital platforms to create leads and increase brand recognition. Websites run by the company are digital outlets as are the social media platforms like YouTube, Facebook, and Instagram. The promotion of brands via the internet and other digital communication channels is known as digital marketing, sometimes known as online marketing. Digital Marketers also use measurable analytics to identify weaknesses and find ways to enhance performance.</p><br /><p>In order to hire the right candidate, it is important to follow an extremely effective recruitment process. It will be easier to find candidates with the requisite abilities and talent, behavioural traits, and topic expertise if you have a competitive recruitment plan.</p><br />",

            titleList: [
              {
                title1: 'Skills required to be Digital Marketer',
                titlepoint:
                  '<ul><li>Effective communication</li><li>Attention to detail</li><li>Adaptability</li><li>Critical thinking</li><li>Result-oriented approach</li><li>Problem-solving</li><li>Creative thinking</li><li>Leadership skills</li><li>Interpersonal skills</li></ul>',
              },
              {
                title1: 'Technical Skills required to be Digital Marketer',
                titlepoint:
                  '<ul><li>Ability to recognize market trends</li><li>Data analysis</li><li>Content editing</li><li>SEO/SEM expertise</li><li>Social Media Marketing</li><li>Content Marketing</li><li>Design Thinking</li></ul>',
              },
            ],
          },
        ],

        SalesManager: [
          {
            headline: 'Sales Managers',

            discription:
              "<p>A Sales Manager is in charge of overseeing the sales department's day-to-day operations. Their responsibilities include hiring and training sales staff, relaying sales quota information from upper management to department staff, and generating leads to distribute to Sales Representatives. They also have contact with clients and customers. In larger companies, Sales Managers report to the National Sales Manager, who keeps track of all sales made across the country. Sales managers help set revenue targets and plan the sales efforts that will help the sales team meet them.</p><br /><p>Using proper recruiting practices is the key to finding skilled marketing professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />",
            titleList: [
              {
                title1: 'Skills required to be Real Estate Manager',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Negotiation skills</li><li>Creative thinking</li><li>Leadership skills</li><li>Interpersonal skills</li><li>Marketing skills</li><li>Time management abilities</li></ul>',
              },
            ],
          },
        ],

        RealEstateSalesManager: [
          {
            headline: 'Real Estate Sales Manager',

            discription:
              '<p>Real estate agents are responsible for marketing listings and advising buyers and sellers. Simply put, they are professionals who assist buyers in finding and purchasing a new home or commercial space. They assist clients in buying and selling homes, as well as guiding them through the negotiation process so that they receive the highest possible price for their property when selling. They also ensure that it is properly marketed so that potential buyers can find it! Real estate agents act as middlemen for sellers and buyers. The best real estate agents are rarely afraid to express themselves.</p><br /><p>Using proper recruiting practices is the key to finding skilled marketing professionals. Candidates with the necessary skills, talent, behavioral qualities, and subject expertise will enter your workforce if you have a competitive recruitment strategy in place.</p><br />',

            titleList: [
              {
                title1: 'Skills required to be Real Estate Manager',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Negotiation skills</li><li>Creative thinking</li><li>Leadership skills</li><li>Interpersonal skills</li><li>Marketing skills</li><li>Time management abilities</li></ul>',
              },
            ],
          },
        ],

        Agriculture: [
          {
            headline: 'Agriculture',

            discription:
              '<p>Professionals in the large field of agriculture may work in a number of fields, including sales, administration, engineering, research, or manual labor. Planning, producing, marketing, and selling agricultural products are all possible job paths in the agricultural industry. Being an important sector of the Indian economy, candidates are currently inclined towards the agriculture industry for their career prospects from all over the nation.</p><br />',

            titleList: [
              {
                title1:
                  'Soft Skills Required to be a Competent Agriculture Professional',
                titlepoint:
                  '<ul><li>Creativity - “thinking outside the box”</li><li>Teamwork</li><li>Dependability - dependable employees are trusted over others to finish tasks</li><li>Assertiveness - a display of confidence in work abilities</li><li>Problem-Solving</li><li>Communication</li><li>Time Management - effectively managing multiple tasks simultaneously</li><li>Accountability</li><li>Leadership</li></ul>',
              },
              {
                title1:
                  'Technical Skills Necessary for Agricultural Professionals',
                titlepoint:
                  '<ul><li>Understanding Precision Agriculture</li><li>Degree in Agronomy</li><li>Maintaining Data</li><li>Knowledge of Agro - Technology including tech based skills in irrigation, pesticide spraying, harvest, storage and transport</li><li>Stock Management & Inventory</li><li>Logistics</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Agriculture Jobs, specializing in different job roles like Agricultural Economist, Agricultural Engineer, Agricultural Scientist, Business Heads, Farm Labor Specialists, Farm Managers etc.</p><br />',
          },
        ],

        AviationandAerospace: [
          {
            headline: 'Aviation & Aerospace',

            discription:
              '<p>The aviation sector offers a wide variety of positions, from pilots to office staff. Whatever your skills, there are possibilities for you to advance your career in fields as diverse as engineering, design, and customer service. Aircraft manufacturing engineers, airline pilots, airport operations managers, air traffic controllers, aviation maintenance technicians, and quality control personnel are just a few of the lucrative job prospects offered by the aviation industry.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required by the Aviation Industry',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Interpersonal Skills</li><li>Global Skills - awareness and understanding of different cultural viewpoints</li><li>Flexibility</li><li>Time Management</li><li>Adaptability</li><li>Teamwork</li></ul>',
              },
              {
                title1:
                  'Technical Soft Skills Required by the Aviation Industry',
                titlepoint:
                  '<ul><li>Aircraft Airframes, Electrics & Engines</li><li>Principles of flight</li><li>Flight Rules and Air Law</li><li>Navigation (e.g. Navigation by Radio Aids)</li><li>Communication and Communication Systems</li><li>Flight Performance and Planning</li><li>Meteorology</li><li>Human Factors (performance limitations)</li><li>Aviation law</li><li>Air traffic management</li><li>Meteorology</li><li>Communication, Navigation & Surveillance</li><li>ATC Equipment and Systems</li><li>Safety Management Systems and Safety Culture</li><li>Linguistic knowledge, including Radio-Telephony Phraseology</li><li>Technical Airframe</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you find candidates seeking Aviation & Aerospace Jobs, with specializations in different job roles like Pilots, Flight & Airport Operations, etc.</p><br />',
          },
        ],

        AutoProductionandManufacturing: [
          {
            headline: 'Auto Production & Manufacturing',

            discription:
              '<p>The sector consists of businesses and employees that produce and deliver automobiles, trucks, and other vehicles to businesses that sell them. Workers in the automotive and manufacturing sectors are those who are employed in the assembly and part-making facilities of automobile producers. They work on everything from the smallest components to the finished automobiles. Workers in the automotive and manufacturing sectors read requirements, design parts, construct, maintain, and use equipment and tools that are used to make parts, as well as assemble automobiles.</p><br />',

            titleList: [
              {
                title1:
                  'Soft Skills Required by The Auto Production & Manufacturing Industry',
                titlepoint:
                  '<ul><li>Problem Solving</li><li>Interpersonal Skills</li><li>Communication Skills</li><li>Good Work Ethic</li><li>Industry Knowledge</li><li>Attentive</li><li>Critical Thinking</li><li>Ability to focus</li></ul>',
              },
              {
                title1:
                  'Technical Skills Involved in Auto Production & Manufacturing',
                titlepoint:
                  '<ul><li>Mechanical Engineering</li><li>Production Engineering</li><li>Electrical Engineering</li><li>Electronics Engineering</li><li>Computer Engineering</li><li>Thermodynamics</li><li>Design Of Machine Elements</li><li>Thermal Engineering Technology</li><li>Engineering Analysis And Numerical Methods</li><li>Automotive Diesel Engines</li><li>Strength Of Materials</li><li>Designing Of Mechanical Systems</li><li>Theory Of Machines</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Auto Production & Manufacturing Jobs, with specializations in different job roles like Quality Assurance Engineer, Stamping Engineer, Welding Engineer, Auto Engineer, Auto Instructor, Autobody Repair Technician, Car Detailer, car Rental Agent, Process Engineer, Tire Technician, Vehicle Inspector etc.</p><br />',
          },
        ],

        FrontEndDevelopment: [
          {
            headline: 'Front-End Development',

            discription:
              '<p>Website design is the area of expertise for front end developers, who are computer programmers. The responsibilities of a front end developer include choosing the layout and structure of online pages, achieving a balance between functionality and aesthetics, and making sure web design is mobile-friendly. A front-end developer is in charge of creating brand-new user-facing features, choosing the layout and structure of web pages, creating reusable code, accelerating page load speeds, and working with a range of markup languages to build the sites.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required in Front-End Development',
                titlepoint:
                  '<ul><li>Creativity</li><li>Communication Skills</li><li>Teamwork</li><li>Growth Mindset</li><li>Problem Solving</li><li>Adaptive</li></ul>',
              },
              {
                title1:
                  'Technical Skills Essential to be a Front-End Developer',
                titlepoint:
                  '<ul><li>HTML & CSS</li><li>Javascript</li><li>Electrical Engineering</li><li>TypeScript</li><li>Frameworks and Libraries</li><li>CSS Preprocessors</li><li>Responsive Design</li><li>Cross-Browser Compatibility</li><li>Version Contro</li><li>Testing and Debugging</li><li>Command Line</li><li>Web Performance</li></ul>',
              },
            ],
            discription1:
              '<p>Ohe Hirect App, hire candidates seeking Front-End Development Jobs, with specializations in different job roles like Wordpress Developer, Front-End Developer, JQuery Developer, React JS Developer, UI/UX Developer, Bootstrap Developer etc.</p><br />',
          },
        ],

        FlightandAirportOperations: [
          {
            headline: 'Flight & Airport Operations',

            discription:
              '<p>In order to ensure the safety, security, and effectiveness of terminal and ground transportation facilities, Flight & Airport Operations personnel typically oversee and take part in inspections of terminal buildings and ground transportation facilities, including concourses, terminals, gate areas, concession areas, interior and exterior of buildings, sidewalks, and public access roadways.</p><br />',

            titleList: [
              {
                title1:
                  'Soft Skills that Make a Proficient Flight & Airport Operations Professional',
                titlepoint:
                  '<ul><li>Communication</li><li>Interpersonal Skills</li><li>Teamwork</li><li>Adaptability</li><li>Time management</li><li>Problem solving</li><li>Leadership</li><li>CEmotional Intelligence</li><li>Attention to Detail</li><li>Customer Service</li><li>Self Discipline</li></ul>',
              },
              {
                title1:
                  'Technical Skills Essential to be a Flight & Airport Operations Professional',
                titlepoint:
                  '<ul><li>Safety Procedures</li><li>Federal Aviation</li><li>Operational Performance</li><li>Emergency</li><li>Transportation Security Administration</li><li>Facility/li><li>Daily Operations</li><li>Efficient Operation</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Flight & Airport Operation Jobs, with specializations in roles like Air Ticketing Agent, Air Traffic Controlling, Airport Duty Managing, Airport Duty Manager, Airport Operations Manager, Airport Ticketing Staffing, Aviation Security Officer, Cargo Agent, Flight Attendant, Flight Dispatcher, Ground Staff etc.</p><br />',
          },
        ],

        Pilot: [
          {
            headline: 'Pilot',

            discription:
              "<p>Pilots, sometimes known as aviators, use aircraft in a variety of sectors. They can work in the business world, for airlines, the military, or in private employment. Pilots are often a part of a crew that flies and navigates an aircraft safely. The crew typically consists of the captain, the first officer, and the co-pilot. They often inspect aircraft as well. The function of the pilot includes creating a flight plan while taking into account the aircraft's performance, altitude, fuel, and weather. Additionally, it entails duties including doing pre-flight inspections, working with flight attendants, and making sure the aircraft's regulations are followed.</p><br />",

            titleList: [
              {
                title1: 'Soft Skills Required to be a Pilot',
                titlepoint:
                  '<ul><li>Communication</li><li>Teamwork Skills</li><li>Stress Management</li><li>Decisiveness</li><li>Strong Focus</li><li>Multitasking</li></ul>',
              },
              {
                title1: 'Technical Skills Essential to be a Pilot',
                titlepoint:
                  '<ul><li>Understanding of Math and Physics</li><li>Ability to Understand their Aircraft and its Avionics</li><li>Situational Awareness</li><li>Situational Awareness</li><li>Aircraft Flight Path Management - Manual Contro</li><li>Aircraft Flight Path Management - Automation/li><li>Problem Solving</li><li>Application of Procedures</li><li>Workload Management</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Pilot Jobs, with specializations in Cadet Piloting. You can find and hire helicopter pilots, and you can also hire UAV pilots.</p><br />',
          },
        ],

        BioTechLifeScience: [
          {
            headline: 'Biotechnology ',

            discription:
              '<p>Animal husbandry, agriculture, energy production and conservation, pollution control, disease research, eco-conservation, and the development of drugs, vaccines, fertilizers, and insecticides are all fields where biotechnology engineering is used. The use of stem cells to repair damaged human tissues and develop new organs is one of the medical processes that biotech engineers are involved in. Another is getting organisms to make new medications.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Necessary in the Biotechnology Domain',
                titlepoint:
                  '<ul><li>Find the edge of your comfort</li><li>Turn theory into practice, practice into performance</li><li>Emotional intelligence</li><li>Collaboration</li><li>Diversity of thought</li><li>Complex problem solving</li><li>Time management</li><li>Communication</li></ul>',
              },
              {
                title1: 'Technical Skills Essential in Biotechnology',
                titlepoint:
                  '<ul><li>Computer Proficiency</li><li>Language skills</li><li>Scientific Skills</li><li>Management skills</li><li>Marketing Skills</li><li>Design Skills</li><li>Data Analytical Skills</li><li>Mathematical Skills</li><li>Laboratory skills</li><li>Tissue Culture</li><li>PCR</li><li>Gel Electrophoresis</li><li>Western Blot</li><li>ELISA</li><li>Molecular (Gene) Cloning</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Biotech/Life Science Jobs, with specialization in Biotechnology job roles like Medical Coder, Research Associate, Research Executive etc.</p><br />',
          },
        ],

        Logistics: [
          {
            headline: 'Logistics',

            discription:
              '<p>Logistics is a part of the total supply chain, despite the fact that the terms logistics and supply chain are sometimes used interchangeably. Logistics is the flow of commodities from Point A to Point B, which includes the activities of warehousing and transportation. Transportation and delivery, storage, packaging, cargo handling, distribution processing, and information processing are all parts of logistics, and numerous methods have been set up to carry goods from the factory or location of production to the consumer promptly and on time.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required in Logistics',
                titlepoint:
                  '<ul><li>Ability to see the big picture</li><li>Adaptability</li><li>Calm under pressure</li><li>Effective problem-solving skills</li><li>Honesty</li><li>Continually seeking improvement</li><li>Proficient in project management</li><li>Able to manage and release stress</li></ul>',
              },
              {
                title1: 'Technical Skills Essential in Logistics',
                titlepoint:
                  '<ul><li>Data Analysis</li><li>Industry Knowledge</li><li>Ability to embrace new technology</li><li>Conflict management</li><li>Teamwork</li><li>Customer service</li><li>Interpersonal skills</li><li>Organizational skills</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking jobs in Logistics, with specializations in different job roles like Logistics Management, Transportation Management, Inspection Staff, Logistics Operations Executive, Fleet Specialist, Pricing Executive, Shipping Executive etc.</p><br />',
          },
        ],

        Biotechnology: [
          {
            headline: 'Biotechnology',

            discription:
              '<p>Biotechnology is simply technology based on Biology; it uses cellular and biomolecular processes to create products and technologies that enhance both our quality of life and the health of the world. Biotechnologists take advantage of biological processes in industrial and other applications. In other words, they employ Biology in a useful way, such as in the creation of antibodies or protein medicines.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required For The Biotechnologists Role',
                titlepoint:
                  '<ul><li>Communication</li><li>Teamwork</li><li>Time management</li><li>Problem solving</li><li>Research - to look for, find, extract from, organize, assess, and use or present data related to a specific issue.</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required For The Biotechnologists Role',
                titlepoint:
                  '<ul><li>Bioinformatics - The field of bioinformatics focuses on using computer technology to collect, store, analyze, and combine genetic and biological data</li><li>PCR - its a common molecular Biology procedure.</li><li>Gel Electrophoresis - commonly utilized method in molecular Biology, biochemistry, genetics, and contemporary biotechnology.</li><li>Tissue Culture - most often utilized methods in any biological or biomedical research facility.</li><li>Analytical skill - problem-solving, planning, data mining, data interpretation, reporting etc.</li><li>Western Blot - molecular Biology method for identifying and examining proteins based on their propensity to bind to particular antibodies.</li></ul>',
              },
            ],
            discription1:
              "<p>If you're attempting to find candidates for Biotechnology jobs or if you need to fill positions like Medical coder, Research Associate, or Research Executive, the Hirect App will help you find eligible candidates.</p><br />",
          },
        ],

        BlueCollar: [
          {
            headline: 'Blue collar',

            discription:
              '<p>People use the terms white collar and blue collar to refer to various categories of workers in the economy. Manual work is typically involved in blue-collar jobs. Examples include truck drivers, manufacturing employees, welders, and construction personnel. Most white-collar workers spend their days in offices. A person from the working class who does manual labour is known as a blue-collar worker. Skilled or unskilled labour may be included in blue-collar work.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required For Blue Collar Jobs',
                titlepoint:
                  '<ul><li>Leadership</li><li>Collaboration</li><li>Persistence - to persevere through difficulties</li><li>Discipline - to advance academically & professionally</li><li>Patience - to remain composed</li><li>Ethics - an attitude of dedication</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Blue Collar Jobs',
                titlepoint:
                  '<ul><li>Technical Skills Required For Blue Collar Jobs</li><li>Plumbing - to pick up extra work as a handyman mending faulty pipes or unclogging drains, plumbing is an excellent skill</li><li>Car Maintenance - A great talent to have is the ability to perform simple auto maintenance</li><li>Landscaping - Developing abilities in landscaping can be a quick and simple way to get extra money</li><li>Low-Voltage Electronics - With this skill ability, you can enjoy the splendor of a fancy home theater or outdoor speaker system while also increasing the worth of your residence</li></ul>',
              },
            ],
            discription1:
              "<p>If you're looking for workers for Blue-Collar professions or for occupations like Logistics and Home Services, the Hirect App will help you find qualified people.</p><br />",
          },
        ],

        Legalaffairs: [
          {
            headline: 'Blue collar',

            discription:
              "<p>The scope and responsibilities of legal roles vary widely, but the majority of them call for a certain set of fundamental skills. It goes without saying that you'll need the physical endurance and energy required to work long days, but certain emotional qualities also need to be taken into consideration.</p><br />",

            titleList: [
              {
                title1: 'Soft Skills Required for Legal Affair Jobs',
                titlepoint:
                  '<ul><li>Communication</li><li>Teamwork</li><li>Critical thinking</li><li>Creative</li><li>Time management</li><li>problem-solving</li><li>Empathy - to use emotions</li><li>Attention to details - to effectively manage resources</li></ul>',
              },
              {
                title1: 'Technical Skills Required for Legal Affair Jobs',
                titlepoint:
                  '<ul><li>Information analysis - to analyze intricate written documents, make deductions, and link relevant legal authorities</li><li>Organization - to increase the effectiveness</li><li>Oral communication - to express ideas in a logical, clear, and concise manner</li><li>Client service - to competently, honestly, and properly serve a client</li><li>Logical reasoning - to arrive at crucial decisions, determine the truth, navigate tricky situations, generate fresh concepts, and establish realistic goals</li><li>Knowledge of laws and legal procedures - to have a basic understanding of substantive law and legal procedure</li><li>Research - to research statutes, regulations, case law</li></ul>',
              },
            ],
            discription1:
              '<p>If you need to fill positions such as Lawyer, Attorney, Patent Specialist, Legal Adviser, Legal Director, Trademark Specialist, Legal Counselor, Corporate Counsel, Intellectual Property, Legal Assistant, Legal Associate, or Legal Manager, the Hirect App will help you find competent individuals.</p><br />',
          },
        ],

        Trainee: [
          {
            headline: 'Trainee',

            discription:
              '<p>A trainee is a person undergoing training, particularly for a profession; an apprentice. Trainee positions are frequently entry-level employment where employees acquire the responsibilities and abilities needed to function independently. As a trainee, you are employed by a supervisor or more seasoned employee whose responsibility it is to help new hires advance their careers.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Important For Trainee',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Commercial awareness - ability to learn more</li><li>Attention to detail</li><li>Analytical skills</li><li>Problem solving skills</li><li>Leadership</li></ul>',
              },
              {
                title1: 'Technical Skills Important for Trainee',
                titlepoint:
                  '<ul><li>Team Working</li><li>Interpersonal skills - to interact with others effectively</li><li>Quick learning - to understand new information in less time</li><li>Adaptability - the ability to adapt ones behavior, path, or method of dealing with a situation to suit a new one</li><li>Customer service skills - to handle issues, show understanding and patience, guarantee client pleasure, and address consumer complaints</li></ul>',
              },
            ],
            discription1:
              "<p>If you're looking to hire Trainees with experience in Management Training, the Hirect App can assist you in finding appropriate candidates.</p><br />",
          },
        ],

        Consulting: [
          {
            headline: 'Consulting',

            discription:
              '<p>A consultant is a person who offers professional or expert advice in a certain scientific or business subject to an organization or individual, according to the definition given by consultancy. A consultant is a specialist who offers guidance and performs other useful tasks in a particular specialty. In general, professional services include consulting services.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required For Consulting Jobs',
                titlepoint:
                  '<ul><li>Creative thinking</li><li>Problem-solving</li><li>Communicating clearly and empathetically</li><li>Organization</li><li>Time management</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Consulting Jobs',
                titlepoint:
                  '<ul><li>Thinking conceptually - Conceptual thinking says that you are imaginative and visionary</li><li>Practical thinking - ability to translate their vision into deliverables and actionable tasks</li><li>Collaboration with all job levels - to feel confident when interacting with both stakeholders and staff</li><li>Curiosity - You can get the knowledge you need to execute your job properly by being curious</li><li>Credibility - Gaining genuine trust, integrity, and dependability is its main characteristic.</li><li>Analytical skill</li><li>Decision-making</li><li>Attention To Detail</li><li>Data analysis</li><li>Strategic thinking</li></ul>',
              },
            ],
            discription1:
              '<p>If you need to fill positions like Consultant, Financial consultant, Human Resources Consultant, IT Consultant, Project Management Consultant, Strategy Consultant, Business Consultant, Education Consultant, Fashion Consultant, Headhunting Consultant, Legal Consultant, Risk Advisory Consultant, Startup Consultant, or Technical Consultant, the Hirect App will help you find qualified candidates.</p><br />',
          },
        ],

        ConsultantLeaders: [
          {
            headline: 'Consultant Leaders',

            discription:
              '<p>When interacting with customers and their staff, consultants must uphold the highest ethical standards as leaders. They should implement trust-building exercises and transparency throughout the company, which fosters harmony between various departments and enhances collaboration and teamwork.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required For Consultant Leaders',
                titlepoint:
                  '<ul><li>Creative thinking</li><li>Problem-solving</li><li>Communicating clearly and empathetically</li><li>Organization</li><li>Time management</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Consultant Leaders',
                titlepoint:
                  '<ul><li>Collaboration</li><li>Analytical skill.</li><li>Decision-making.</li><li>Thinking conceptually.</li><li>Strategic thinking.</li><li>Conflict resolution</li><li>Practical thinking.</li><li>Curiosity</li><li>Data analysis</li><li>Data analysis</li><li>Credibility - Gaining genuine trust, integrity, and dependability is its main characteristic</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will assist you locate qualified candidates if you need to fill roles like Consulting Manager and Consulting Director.</p><br />',
          },
        ],

        Translation: [
          {
            headline: 'Translation ',

            discription:
              "<p>The process of converting text or words from one language to another is called translation. You will translate textual content from one or more 'source languages' into the 'target language,' making sure the translated version accurately captures the original's meaning. Your mother tongue is typically the target language.</p><br />",

            titleList: [
              {
                title1: 'Soft Skills Required For Translation Job',
                titlepoint:
                  '<ul><li>Communication skills.</li><li>Writing.</li><li>Active listening.</li><li>Attention to detail.</li><li>Flexibility</li><li>Time management.</li><li>Creativity</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Translation Job',
                titlepoint:
                  '<ul><li>Language knowledge - to be able to talk and write with ease in at least two languages.</li><li>Cultural knowledge - to communicate between persons of various backgrounds.</li><li>Research - to translators ongoing education as they expand their linguistic expertise.</li><li>Computer-assisted translation (CAT) - CAT tools can be used by translators to improve their translations.</li><li>Organization - to balance many projects in different languages.</li><li>Reading comprehension - abilities in several languages and verbal communication abilities.</li><li>Computer skills - to interpret spoken and written communication.</li><li>Specialization - to concentrate on a particular ability, pursuit, or method of production.</li><li>Neutrality - to communicate viewpoints that differ from their own.</li><li>Marketing - in order to get work as a freelance translation.</li></ul>',
              },
            ],
            discription1:
              "<p>The Hirect App will assist you in finding qualified candidates if you're trying to find candidates for Translation jobs or if you need to hire Language Translators, Chinese Translators, English Translators, French Translators, German Translators, Hindi Translators, Japanese Translators, Korean Translators, Malayalam Translators, Punjabi Translators, Russian Translators, Sanskrit Translators, Spanish Translators, or Telugu Translators.</p><br />",
          },
        ],

        TranslationLeaders: [
          {
            headline: 'Translation Leaders',

            discription:
              '<p>The Translation and Interpretation Leader is in charge of overseeing language translation and interpretation services in order to effectively serve the needs of the entire organization. To ensure the timely, accurate, and successful delivery of translation and interpreting services in support of the overall strategy, they manage the Translation and Interpretation (T&I) Team.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required For Translation Leaders',
                titlepoint:
                  '<ul><li>Communication skills.</li><li>Active listening.</li><li>Attention to detail.</li><li>Writing</li><li>Creativity</li><li>Flexibility</li><li>Time management</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Translation Leaders',
                titlepoint:
                  '<ul><li>Language knowledge - to be able to talk and write with ease in at least two languages.</li><li>Cultural knowledge - to communicate between persons of various backgrounds.</li><li>Research - to translators ongoing education.</li><li>Reading comprehension - abilities in several languages and verbal communication abilities.</li><li>Computer skills - to interpret spoken and written communication.</li><li>Specialization - to concentrate on a particular ability, pursuit, or method of production.</li><li>Computer-assisted translation (CAT) - CAT tools can be used by translators to improve their translations.</li><li>Organization - to balance many projects in different languages.</li></ul>',
              },
            ],
            discription1:
              "<p>If you're looking to hire Translation Leaders or need to fill positions like Lead Translator, the Hirect App will help you identify eligible candidates.</p><br />",
          },
        ],

        Planning: [
          {
            headline: 'Planning',

            discription:
              "<p>Thinking about the steps necessary to accomplish a goal is the process of planning. Foresight, the fundamental ability for mental time travel, is the foundation of planning. The ability to plan ahead and exhibit foresight is assumed to have evolved early in the course of human evolution. A planner's responsibilities include the following tasks: making, keeping, and reviewing a work schedule.</p><br />",

            titleList: [
              {
                title1: 'Soft Skills Required For Planning',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Problem solving skills.</li><li>Listening</li><li>Patience</li><li>Enthusiasm - to have discipline of intention</li><li>Passion - to possess innate & intense interest</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Planning',
                titlepoint:
                  '<ul><li>Multitasking - to handle multiple tasks</li><li>Commercial awareness - to gain a deeper knowledge of an industry.</li><li>Project management skills - to deliver projects successfully within the time.</li><li>Plan making - to plan and execute actions</li><li>Project evaluation- to assess the applicability and degree of project goal achievement.</li></ul>',
              },
            ],
            discription1:
              '<p>Hirect App will assist you in finding qualified individuals for positions like Real Estate Planning, Lead Real Estate, or Real Estate Project Manager.</p><br />',
          },
        ],

        VisualDesign: [
          {
            headline: 'Visual Design',

            discription:
              '<p>Through the thoughtful use of graphics, colors, typefaces, and other aspects, visual design focuses on the aesthetics of a website and the materials that go with it. A visual designer creates content for a number of platforms, such as kiosks, wearable technology, intranet and internet sites, games, and movies. In essence, they use creative briefs and client meetings to develop the concepts, artwork, and layouts for digital projects.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required For A Visual Designer',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Creativity</li><li>Problem solving.</li><li>Time management.</li><li>Active listening.</li></ul>',
              },
              {
                title1: 'Technical Skills Required For A Visual Designer',
                titlepoint:
                  '<ul><li>Technological know-how - Its crucial to keep up with changing practices.</li><li>Excellent verbal and written skills - Its essential to share notions with coworkers, clients and superiors if you want conceptions to become reality.</li><li>Multitasking</li><li>Attention to details</li><li>Collaborative</li><li>Independence</li></ul>',
              },
            ],
            discription1:
              '<p>If you’re looking for Visual Designers or if you want to fill the positions for job roles like Visual Designer, Flash Designer, Graphic Designer, Art Designer, Creative Designer, Multimedia Designer, Animation Designer, Illustrator Designer, Logo Designer, VR Designer, Packaging Designer, Print Designer, CAD Designer, Freelance Designer, the Hirect App can help you find best candidates.</p><br />',
          },
        ],

        BPOandKPO: [
          {
            headline: 'BPO & KPO',

            discription:
              '<p>Business Process Outsourcing (BPO) has grown in popularity over time by delivering services such as marketing, human resources, customer service, technical support, and so on. Knowledge Process Outsourcing (KPO) is a subsegment of BPO in which procedures including knowledge-related activity are outsourced to a third party. There is a narrow line between BPO and KPO.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required for BPO & KPO Jobs',
                titlepoint:
                  '<ul><li>Good communication</li><li>English fluency - For International BPO - US, UK Process</li><li>Knowledge of languages - you must be fluent in English, Hindi, and a regional language.</li><li>Patience -  to receive calls for at least 8 hours while being calm.</li><li>Flexible with Shifts (Ready to do any Shift)</li></ul>',
              },
              {
                title1: 'Technical Skills Required For BPO & KPO Jobs',
                titlepoint:
                  '<ul><li>Basic computer skills - As you need to enter the detailed interaction on the PC</li><li>Technical Knowledge and Understanding of Products/Services</li><li>Quality metrics and tools</li><li>Project management</li><li>Raw data analysis and processing</li><li>Statistical expertise</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for BPO & KPO with expertise in Telemarketer, Virtual Assistant.</p><br />',
          },
        ],

        CustomerService: [
          {
            headline: 'Operation Leaders',

            discription:
              '<p>Business Process Outsourcing (BPO) has grown in popularity over time by delivering services such as marketing, human resources, customer service, technical support, and so on. Knowledge Process Outsourcing (KPO) is a subsegment of BPO in which procedures including knowledge-related activity are outsourced to a third party. There is a narrow line between BPO and KPO.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Necessary For Operation Leaders',
                titlepoint:
                  '<ul><li>Communication.</li><li>Problem Solving.</li><li>Decision Making.</li><li>Time Management.</li><li>Active Listening.</li><li>Teamwork.</li><li>Motivation.</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Operation Leaders',
                titlepoint:
                  '<ul><li>Strategic Planning - to achieve the goals.</li><li>Strong negotiation skills - to negotiate.</li><li>Influencing - to influence others.</li><li>Conflict management - to manage Conflicts.</li><li>Forecasting - to have top-notch technical expertise.</li><li>Delegation - to empower your team.</li></ul>',
              },
            ],
            discription1:
              '<p>If you’re looking for candidates for job roles like Senior Operation Manager, Customer Service Director, Operations Manager, Head of Operations, Operations Supervisor, Hirect App will help you find eligible candidates.</p><br />',
          },
        ],

        BusinessDevelopment: [
          {
            headline: 'Business Development',

            discription:
              '<p>The formation of long-term value for an organization across customers, markets, and relationships is known as Business Development. Business Development can be defined as any activity carried out by a small or large organization, non-profit or for-profit, with the goal of developing the business in some way. Business development can also be defined as the ideas, initiatives, and activities that help a company grow. This process identifies, nurtures, and acquires new clients and business opportunities to drive growth and profitability.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Necessary For Business Development',
                titlepoint:
                  '<ul><li>Interpersonal skills.</li><li>Persuasive and Negotiation skills</li><li>Project Management Skills.</li><li>Proactivity</li><li>Enthusiasm</li><li>Communication skills</li></ul>',
              },
              {
                title1: 'Core Skills for Business Development ',
                titlepoint:
                  '<ul><li>Sales skills like prospecting, qualifying and nurturing leads</li><li>Marketing skills such as promoting the brand, expanding the market, acquiring new users and generating awareness</li><li>Business Intelligence skills like researching the needs of the business and its competitors</li><li>ROI and Data Analysis skills</li></li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates for Business Development, specializing in different job roles like Business Development Manager, Business Growth Manager, Business Development Associates, Business Development Executives etc.</p><br />',
          },
        ],

        Accounting_Tax_Audit: [
          {
            headline: 'Auditing',

            discription:
              '<p>Audits aid in preventing commercial fraud. In order to identify and stop various forms of fraud and accounting irregularities, businesses should regularly analyze their operations and maintain strict internal control systems. Typically, roles and responsibilities associated with auditing include ensuring that assets are protected, determining whether and where processes are not operating as they should, offering recommendations for adjustments to be made, and creating reports, commentaries, and financial statements.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Essential in Auditing',
                titlepoint:
                  '<ul><li>Communication</li><li>Verbal</li><li>Written</li><li>Relationship Building</li><li>Respect for clients as subject matter experts</li><li>Honest and transparent lines of communication</li><li>Continuous Learning</li></ul>',
              },
              {
                title1: 'Technical Skills Required in Auditing',
                titlepoint:
                  '<ul><li>Compliance Knowledge</li><li>Numerical Exactitude</li><li>Risk Management Skills</li><li>Problem-Solving Skills</li><li>Accounting Experience</li><li>Project Management Skills</li><li>Product Knowledge</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking jobs in Accounting/Tax/Auditing, specializing in different job roles like Accountant, Chartered Accountant, Credit Analyst, Equity Analyst, Finance Auditor, FP&A Manager, GST Manager, Liquidation Expert, Management Accountant, Portfolio Manager, Stock Broker, Tally Executive, Taxation Manager etc.</p><br />',
          },
        ],

        ChannelSales: [
          {
            headline: 'Channel Sales',

            discription:
              '<p>Channel sales are a sales model in which your product or service is distributed to the market through third parties. In other words, these are sales-related partners who do not work for your company directly. Channel Sales is a very effective strategy to bring your new product or service to the market and scale revenue. It can result in low marketing and sales costs while creating more brand awareness.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Requirement in Channel Sales',
                titlepoint:
                  '<ul><li>Business Acumen</li><li>Good Listener</li><li>Relationship Building/ Social Connections</li><li>Adaptability</li><li>Time Management</li><li>Commitment</li><li>Stress Management</li><li>Innovative Ideas</li><li>Goal Oriented</li></ul>',
              },
              {
                title1: 'Top Skills for Channel Sales Specialist',
                titlepoint:
                  '<ul><li>Understand the Sales Process</li><li>Solution Selling</li><li>Relationship Management</li><li>CRM</li><li>Business Development</li><li>Sales Management</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking jobs in Channel Sales, specializing in different job roles like Channel Sales, Telesales, Internet Sales, In-Store Sales, Social Media Sales, retail Sales, B2B Sales, Field Sales Executive, Sales Account Manager, Wholesale Sales Executive etc.</p><br />',
          },
        ],

        HumanResource: [
          {
            headline: 'Human Resource',

            discription:
              '<p>Human Resources are the set of people who make up the workforce of an organization, business sector, industry, or economy. A narrower concept is human capital, the knowledge, and skills of the individual in command. Similar terms include manpower, labor, personnel, associates, or simply, people.</p><br />',

            titleList: [
              {
                title1: 'Soft Skills Required for Human Resource Professionals',
                titlepoint:
                  '<ul><li>Organization</li><li>Cultural sensitivity – Removing bias from recruiting, hiring, and training practices</li><li>Confidentiality – Protecting sensitive employee information</li><li>Adaptability – Introduction of new technology, changes to roles and responsibilities</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required for Human Resource Professionals',
                titlepoint:
                  '<ul><li>HR software</li><li>Talent Management Systems</li><li>Onboarding – HR professionals add company values, policies, benefits packages</li><li>Budgeting – Responsibility to manage payroll, benefits, and other company finances</li><li>Corporate law – innovative technical expertise covering the subjects of corporate law</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for jobs Payroll Manager, Human Resource (HR) Manager, Employee Engagement Manager, Employee Training Manager, Recruitment Manager.</p><br />',
          },
        ],

        OperationandMaintenanceTechnicalSupport: [
          {
            headline: 'Operation and Maintenance / Technical Support',

            discription:
              '<p>Maintenance and Technical Supports primary function is to understand how information systems are used, in order to apply technical knowledge linked to computer hardware or software. AS AN IT TECHNICAL SUPPORTER, you will monitor and maintain your companys computer systems and networks.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required for Operation and Maintenance / Technical Support',
                titlepoint:
                  '<ul><li>Ability to Learn New Software and Hardware</li><li>Active Listening.</li><li>Adaptability</li><li>Analysis of Technical Issues</li><li>Application Support</li><li>Assessing Customer Support Needs</li><li>Attention to Detail</li><li>Case Notes</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required for Operation and Maintenance / Technical Support',
                titlepoint:
                  '<ul><li>Excellent problem-solving skills</li><li>The capacity to work well within a team</li><li>Attention to detail</li><li>Logical thinking – analyzing a situation and coming sensible solution</li><li>Expert knowledge in how operating systems and software work</li><li>Interpersonal skills as you will regularly be in contact with colleagues and/or customers.</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for Operation and Maintenance / Technical Support jobs Network Security Engineer, System Administrator, System Security engineer.</p><br />',
          },
        ],

        Banking: [
          {
            headline: 'Banking',

            discription:
              '<p>Banking supports businesses by offering a range of services, including long- and short-term financing, money transfer arrangements, check and bill collection, assistance with capital raising through underwriting, and more. Giving clients financial advice, particularly on problems involving savings, investments, loans, and securities, is the primary responsibility of a banker. Their expertise and guidance assist clients in resolving their financial issues while also boosting business profits.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Required in Banking',
                titlepoint:
                  '<ul><li>Communication skills</li><li>Customer service</li><li>Emotional intelligence</li><li>Teamwork</li><li>Organization and time management</li><li>Leadership and team management</li></ul>',
              },
              {
                title1: 'Technical Skills Essential in Banking',
                titlepoint:
                  '<ul><li>Cash handling and Mathematics</li><li>Customer service</li><li>Computer knowledge</li><li>Problem-solving</li><li>Written and verbal communication</li><li>Processing transactions</li><li>Attention to detail</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Banking Jobs, with specializations in different job roles like Bank Manager, Treasury Analyst, Relationship Manager, Bank Lobby Manager, Bank Teller, Branch Manager, Client Manager, Credit Manager, Debt Recovery Manager, Escrow Assistant, Foreign Exchange Trader, Internal Auditor, Investment Banker, Loan Officer, Probationary Officer, Regional Manager etc.</p><br />',
          },
        ],

        Administration: [
          {
            headline: 'Administration Job Roles ',

            discription:
              '<p>Education and Training Administration Job roles require candidates to participate in developing and implementing training programmes. They should be responsible for making reservations for and setting up training facilities. They also have to keep track of deadlines, documents, and accounts receivable. The job also seeks candidates who will have to communicate with participants and vendors and assist with developing the most effective programs.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills for Education and Training Administration Job Roles ',
                titlepoint:
                  '<ul><li>Strong Interpersonal Skills</li><li>Excellent written Communication Skills</li><li>Team working skills</li><li>Skill to deal with changes positively</li><li>Organize, prioritize and time management skills</li><li>Solid Attention to detail</li><li>Handle heavy workload</li><li>Flexible approach to work</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required to Be Proficient in Education and Training Administrator Jobs',
                titlepoint:
                  '<ul><li>IT skills</li><li>Social Media</li><li>Experience as Training Administrator</li><li>Proficient in MS Office</li><li>B.Sc./BA in Business, Psychology or a related field</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Administration Jobs, with specializations in different job roles like Coordinator, Counselor, Education Administrator, Librarian, Placement Coordinator, Principal, University Director, Vice Chancellor etc.</p><br />',
          },
        ],

        BusinessProcess: [
          {
            headline: 'Business Process',

            discription:
              '<p>Soft Skills Required For Business Process Services</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills for Education and Training Administration Job Roles ',
                titlepoint:
                  '<ul><li>Communication</li><li>Teamwork</li><li>Leadership</li><li>Time management</li><li>Creativity</li><li>Problem solving</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required For Business Process Services',
                titlepoint:
                  '<ul><li>Business Process Modeling - to classify processes and groups.</li><li>Organizational Change Techniques - to gain much more traction with stakeholders.</li><li>Business Process Discovery - to understand processes throughout the organization.</li><li>Project Management</li><li>BPM technology product knowledge.</li></ul>',
              },
            ],
            discription1:
              '<p>If you are attempting to find candidates for Business Process jobs or if you need to fill positions like Data Entry job or Transcriptionist, the Hirect App will help you find eligible candidates.</p><br />',
          },
        ],

        ContentMarketing: [
          {
            headline: 'Content Marketing',

            discription:
              '<p>The general company’s content strategy is often planned, developed, and implemented by the content marketing department. They are in charge of overseeing the development and production of marketing content for both online and offline distribution. It provides the information your audience seeks, aids in the development of relationships, increases conversions, and produces leads. Customers now demand constant, high-quality content from their favorite companies.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Essential in Content Marketing',
                titlepoint:
                  '<ul><li>Problem-Solving Ability</li><li>Teamwork</li><li>Flexibility</li><li>Emotional Intelligence</li><li>Integrity</li><li>Listening</li><li>Initiative </li></ul>',
              },
              {
                title1: 'Technical Skills Required in Content Marketing',
                titlepoint:
                  '<ul><li>Content Creation Skills</li><li>Editing Skills</li><li>Deep Understanding of Sales Funnels</li><li>Planning Skills</li><li>Research Skills</li><li>SEO Skills</li><li>Content Promotion Skills</li><li>Data Analysis Skills</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Content Marketing Jobs, specializing in different job roles like Content Audit, Content Editor, Chief Editor, Content Writer, Copy Editor, Deputy Editor etc.</p><br />',
          },
        ],

        DigitalDesign: [
          {
            headline: 'Digital Design',

            discription:
              '<p>It’s essentially a multi-platform branch of the graphic design profession. In a nutshell, digital designers conceptualize products and solutions and then use state-of-the-art technologies and software to bring their concepts to fruition. The work is both done and delivered on digital platforms.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Required for Digital Designer',
                titlepoint:
                  '<ul><li>Creativity -  involves innovative thinking capabilities and creative</li><li>Teamwork</li><li>Emotional Intelligence - self-awareness, self-regulation, motivation, empathy, and social skills.</li><li>Time Management - Strong time management skills</li><li>Growth Mindset - A growth mindset refers to the concept that there’s always room for improvement.</li><li>Networking - Networking means connecting with other creatives globally</li></ul>',
              },
              {
                title1: 'Technical Skills Required for Digital Designer',
                titlepoint:
                  '<ul><li>Layout and navigation principles - The design must have balance, rhythm, simplicity, preparation, harmony, line, shape, and movement.</li><li>Color and typography - Typography is the art of arranging letters and text in a way that.</li><li>Responsive/mobile-first design</li><li>Design software such as Adobe Photoshop, Illustrator, and Sketch.</li><li>Wire-Framing/Prototyping approaches, practices, and software.</li><li>HTML/CSS (not required, but a great bonus to have)</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for Digital Design with expertise jobs in Web Designing, 3D Designing, Advertising Designing, Digital Designing, Figma Designing, Photoshop Designing, Product Designing, UI Designing, UI/UX design, etc</p><br />',
          },
        ],

        WebTechnology: [
          {
            headline: 'Web Technology',

            discription:
              '<p>Web technology describes the numerous methods and tools used in the process of interacting with various internet-connected devices. Web developers are famous in this field and are in charge of making sure websites appear attractive and work properly. Web developers work with graphic and website designers, track website traffic, address issues as they come up, and upgrade websites as needed.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Prominent in Web Technology',
                titlepoint:
                  '<ul><li>Computer Literacy</li><li>Management</li><li>Empathy</li><li>Creative Thinking</li><li>Strong Numeracy Skills</li><li>Strong Creative Ability</li><li>Attention to Detail</li><li>Website Programming Languages like HTML, CSS, Javascript etc.</li><li>Logic and Reasoning</li><li>Technical Language ability</li></ul>',
              },
              {
                title1: 'Technical Skills Essential in Web Technology',
                titlepoint:
                  '<ul><li>Layout and navigation principles - The design must have balance, rhythm, simplicity, preparation, harmony, line, shape, and movement.</li><li>Color and typography - Typography is the art of arranging letters and text in a way that.</li><li>Responsive/mobile-first design</li><li>Design software such as Adobe Photoshop, Illustrator, and Sketch.</li><li>Wire-Framing/Prototyping approaches, practices, and software.</li><li>HTML/CSS (not required, but a great bonus to have)</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Web Technology Jobs, specializing in different job roles like CodeIgniter Developer, CSS Engineer, Flash Developer, JavaScript Engineer, Laravel Engineer, SEO Engineer, Web Front End Engineer, Web Full Stack Engineer etc.</p><br />',
          },
        ],

        FilmsTV: [
          {
            headline: 'Films & TV',

            discription:
              '<p>Film production firms, cinematography, animation, scripting, pre-production, post-production, film festivals, distribution, and actors are all included in the film industry, also known as the motion picture industry.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Films & TV Industry Professionals',
                titlepoint:
                  '<ul><li>Creativity</li><li>Organization / Scheduling</li><li>Analytical Skills</li><li>Assigning Tasks - to assign tasks to the perfect person.</li><li>Strong Numeracy Skills</li><li>Delegating - to focus on higher-value activities while also keeping employees engaged with greater autonomy.</li><li>Flexibility</li><li>Planning</li><li>Prioritizing</li><li>Time Management.</li><li>Working in a Fast-Paced Environment.</li><li>Budgeting</li><li>Critical Thinking.</li><li>Decision Making.</li><li>Detail Orientation.</li><li>Maintaining Relationships with Vendors.</li><li>Problem Solving.</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required For Films & TV Industry Professionals',
                titlepoint:
                  '<ul><li>Closing Deals - to close deals perfectly.</li><li>Evaluating Screenplays or Scripts - to evaluate the scripts.</li><li>Generating Story Ideas - to produce mind blowing stories.</li><li>Managing Teams - to manage every department.</li><li>Project Management - to plan & execute the projects.</li><li>Recruiting Talent - for better outcomes.</li><li>Securing Rights to Intellectual Property - to keep projects secure.</li><li>Selecting Stories - to know what you exactly need.</li><li>Supervisory Skills - to supervise everything.</li><li>Editing - to edit projects effectively.</li><li>Explaining - to explain ideas greatly.</li><li>Direction - for amazing direction of films & Tv.</li><li>Music - to add amazing music.</li></ul>',
              },
            ],
            discription1:
              '<p>If you’re looking to hire DJ Artist, Visual Artist, Assistant Artist, Photographer, Video Editor, Audio Editor, Media Broker, Choreographer, Video Graphic Artist, Dubbing Artist, Actor, TV Shows Manager, Sound Recorder, Hire Producer, Anchor, Casting Director, Cinematographer, Executive Producer, Film Director, Film Editor, Film Promoter, Integrated Producer, Lighting Technician, Location Manager, Recording Engineer, Screenwriter, Script writer, Sound Technician, Stunt Person, Technical Producer or if you’re looking to hire films & Tv professionals then use Hirect App where you can find these qualified candidates.</p><br />',
          },
        ],

        InteriorDesign: [
          {
            headline: 'Interior Design',

            discription:
              '<p>Interior design is the art and science of improving the interior of a structure in order to provide a healthier and more aesthetically pleasing environment for those who use it. An interior designer develops, investigates, coordinates, and supervises such home improvement initiatives.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Required For Interior Design Job',
                titlepoint:
                  '<ul><li>A creative eye and attention to detail</li><li>Trend identification - common factors and issues are then matched to colors, styles, products, materials, etc.</li><li>Knowledge of sustainable practices - seeks to reduce negative impacts on the environment.</li><li>Superior communication - be able to discuss their ideas, pay close attention to what they say, and understand requirements.</li><li>Sketching ability and computer knowledge - Interior designers sometimes use computer software to create 3D designs</li><li>Organization - Things like Deadline, Communicate, Delegate, Creating a Workspace</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Interior Design Job',
                titlepoint:
                  '<ul><li>Budgeting and numeracy - you need to be comfortable working with numbers</li><li>Drawing and design skills - being able to use computer-aided design (CAD) software is also a must.</li><li>Trend Following - Interior designers are required to keep up with the latest design shifts and industry</li><li>Technical drawings - use technical drawings to plan and visually communicate particular designs.</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for Interior Designer with expertise in Interior Designing, Display Designing Cabinet Designing, Decoration Designing, Exterior Designing, Furniture Designing, Home Decor Designing Wall Painter job.</p><br />',
          },
        ],

        Designanddecorationandmunicipalconstruction: [
          {
            headline: 'Design, Decoration, And Municipal Construction',

            discription:
              '<p>Design, decoration, and Municipal is the process of creating a description of a new facility, usually represented by detailed plans and specifications. Construction planning is the process of identifying the activities and resources needed to make the design a reality.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills To Look in Design, Decoration, And Municipal Construction Professionals',
                titlepoint:
                  '<ul><li>Enthusiasm</li><li>A positive attitude</li><li>Communication skills</li><li>Problem-solving skills</li><li>Flexibility</li><li>Body language</li><li>Multitasking skills</li></ul>',
              },
              {
                title1:
                  'Technical Skills To Look In Design, Decoration, And Municipal Construction Professionals',
                titlepoint:
                  '<ul><li>Sketching ability and computer knowledge – to create a visual representation of work</li><li>Creativity and Attention to Detail – Design is an artistic career choice</li><li>Knowledge of Design Trends and Styles</li><li>Trend identification – It will help you stay relevant and in demand</li><li>Time Management Skills – Need to present not only a budget but also a realistic timeline</li><li>Software skills – accurately representing designs using computer-aided design tools</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for jobs like Senior Construction Engineer, Construction Engineer, Structural Engineer, Engineering Supervision</p><br />',
          },
        ],

        Advertisement: [
          {
            headline: 'Advertisement',

            discription:
              '<p>Advertising professionals are in charge of coming up with marketing messages that convince an audience to purchase a good or service. These individuals might prepare advertisements for a firms clients, develop advertisements for the company itself, or both. Advertising specialists are essential for the growth of brands and for sales performance. They produce original writing, graphic design, jingles, sales advertising, logos, television campaigns, online campaigns, etc. They assist businesses with budget planning for the use of both traditional and digital media.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Essential in Advertising',
                titlepoint:
                  '<ul><li>Creativity</li><li>Teamwork</li><li>Communication skills</li><li>Active listening</li><li>Computer skills</li><li>Social media skills</li><li>Commercial awareness</li><li>Research skills</li></ul>',
              },
              {
                title1: 'Technical Skills Required in Advertising',
                titlepoint:
                  '<ul><li>Transferable Marketing Skills</li><li>Technical Marketing Skills</li><li>Aesthetic Sensibility</li><li>Social Media Marketing</li><li>Paid Social Media Advertising</li><li>Writing Skills</li><li>CRO and A/B Testing</li><li>Analytical Skills</li><li>Email Marketing and Automation</li><li>Sales</li><li>Funnel Management</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking jobs in Advertisement, specializing in different job roles like Social Media Ads Experts.</p><br />',
          },
        ],

        SalesLeaders: [
          {
            headline: 'Sales Leaders',

            discription:
              '<p>The Sales Leader establishes the sales teams goals and tone. They write the sales guide, also known as a sales playbook, to define the goals, vision, culture, and sales processes that will propel their team to success. Hiring an efficient Sales Leader also helps companies to analyze data and establish long-term objectives for their sales team. The sales leader also inspires and motivates their team to understand the goals and processes, assisting them in developing a personal passion for those goals to benefit the entire team.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Found in Effective Sales Leaders',
                titlepoint:
                  '<ul><li>Strategy focussed</li><li>Flexible</li><li>Empathy </li><li>Goal Driven</li><li>Inspirational</li><li>Strong Supervision Skills</li><li>Commercial Awareness</li><li>Leadership</li></ul>',
              },
              {
                title1: 'Top Core Skills for Sales Leaders',
                titlepoint:
                  '<ul><li>Selling skills</li><li>Management Skills</li><li>Communication</li><li>Intellectual Capacity</li><li>Interpersonal Skills</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire Sales Leaders, specializing in different job roles like Head of Sales, Sales Director, Commercial Director, Regional Sales Director, Sales Team Manager etc.</p><br />',
          },
        ],

        FullStackDevelopment: [
          {
            headline: 'Full Stack Development',

            discription:
              '<p>A Full Stack Web Developer can create both client and server software. They also understand how to program a browser in addition to HTML and CSS (like using JavaScript, jQuery, Angular, or Vue) or program a server (like using PHP, ASP, Python, or Node) or even a database (like using SQL, SQLite, or MongoDB). IT companies can hire Mean Stack Developer or even hire MERN Stack Developer from Hirect. This helps reduce the projects cost while also reducing the time used for team communication. Full stack development requires switching between front and back-end development based on requirements.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills of Full Stack Developer',
                titlepoint:
                  '<ul><li>Problem-solving</li><li>Creativity</li><li>Patience</li><li>Communication</li><li>Attention to detail</li><li>Build a Professional Network</li></ul>',
              },
              {
                title1: 'Top Hard Skills in Full Stack Development',
                titlepoint:
                  '<ul><li>HTML/ CSS</li><li>Java Developer</li><li>Mean Stack Developer</li><li>MERN Stack Developer</li><li>Python</li><li>PHP</li><li>SQL</li><li>Git</li><li>Web Architecture</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Full Stack Development Jobs, specializing in different job roles like Java Stack Developer, MEAN Stack Developer, MERN Stack Developer etc.</p><br />',
          },
        ],

        InvestmentFinancing: [
          {
            headline: 'Investment/Financing',

            discription:
              '<p>Wealth management is able to leverage your existing portfolio to further invest. This can be achieved through investment financing. In investment financing, you borrow money from a bank to invest. That loan is secured by your bank-managed assets serving as collateral, which can include deposits, stocks, bonds, funds, and other investment assets.</p><br />',
            titleList: [
              {
                title1:
                  'Soft skills required for Investment/Financing Professional',
                titlepoint:
                  '<ul><li>Communication</li><li>Negotiation</li><li>Influencing</li><li>Critical thinking</li><li>Flexibility</li><li>Resilience</li><li>Collaboration</li><li>Problem-solving</li><li>Dedication</li><li>Empathy</li></ul>',
              },
              {
                title1:
                  'Technical skills required for Investment/Financing Professional',
                titlepoint:
                  '<ul><li>Accounting – skills are paramount to your financial analyst career.</li><li>Reading SEC filings</li><li>Corporate Finance</li><li>Financial Modeling</li><li>Corporate Valuation</li><li>Technical Analysis</li><li>Leveraged Buyout Modeling</li><li>Mergers & Acquisitions Analysis</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, You can hire candidates for job roles like Investment Analyst, Venture Capitalist, Cashier, Finance Director, Investment Advisor, Investment Assistant, Investment Consultant, Investment Director, Investment Manager, Investment Partner, Investment VP etc.</p><br />',
          },
        ],

        EducationalProduct: [
          {
            headline: 'Educational Product Job Roles',

            discription:
              '<p>A candidate working in the Educational Product Role will be responsible for the products customer and business outcomes. These candidates should develop it to meet users and the markets needs. They ought to be educated on many subjects to comprehend better their clients and all their available product line options. They will develop marketing materials, work with the creative team on in-market communications, and collaborate with stakeholders from various teams and SMEs to create solution positioning and messaging that reflects customer needs. These challenges may include supporting English Learners, closing achievement gaps, or increasing accessibility.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Required in Educational Product Job Roles',
                titlepoint:
                  '<ul><li>Strategy</li><li>Planning</li><li>Communication</li><li>Collaboration</li><li>Product positioning and messaging</li></ul>',
              },
              {
                title1: 'Technical Skills for Educational Product Job Roles',
                titlepoint:
                  '<ul><li>Professional experience in product marketing, product management, campaign development or a related field for a technical product.</li><li>Experience creating marketing materials, customer-facing product documentation, or support resources.</li><li>Corporate Finance</li><li>Financial Modeling</li><li>Project Management Experience</li><li>Strong oral and written communication skills</li><li>Analytical skills</li></ul>',
              },
            ],
            discription1:
              '<p>The Hirect App will help you hire candidates seeking Educational Product Job Roles, with specializations in different fronts like Trainer, Content Creator, Content Manager, Course Designer, Course Editor etc.</p><br />',
          },
        ],

        FinancialSales: [
          {
            headline: 'Financial Sales',

            discription:
              '<p>Clients are assisted in choosing financial products or services by a financial sales professional. This frequently includes financial services, investments, and related goods and services. Representatives in this capacity may also aid clients with documentation and assist them in creating a plan to meet a financial objective.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Financial Sales Professionals',
                titlepoint:
                  '<ul><li>Communication</li><li>Flexibility</li><li>Confidence</li><li>Problem solving</li><li>Persuasive - to give reasoning</li><li>Enthusiasm - to be disciplined</li><li>Adaptability - to rapidly learn new skills</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required For Financial Sales Professionals',
                titlepoint:
                  '<ul><li>Written communication - to write to communicate effectively</li><li>Technical knowledge - to translate complicated technical information into easy understandable format</li><li>Planning & organizing - to plan & organize</li><li>Presentation skills - to present in a better way</li></ul>',
              },
            ],
            discription1:
              '<p>If you are attempting to find candidates for Financial Sales jobs or if you need to fill positions like Credit Card Salesman, Financial Advisor, LIC Agent, Insurance Agent, Loan Broker, Debt Lender, Revenue Manager, Sales Accountant, the Hirect App will help you find eligible candidates.</p><br />',
          },
        ],

        ElectronicsandSemiconductor: [
          {
            headline: 'Electronics & Semiconductor',

            discription:
              '<p>Semiconductor, Any of a class of crystalline solids intermediate in electrical conductivity between conductors and insulators. Semiconductors are used in the manufacture of a wide variety of electronic devices, including diodes, transistors, and integrated circuits.</p><br />',
            titleList: [
              {
                title1:
                  'Soft skills required for Electronics & Semiconductor Engineer',
                titlepoint:
                  '<ul><li>Communication</li><li>Problem-Solving</li><li>Organization</li><li>Leadership</li><li>Science skills</li><li>Computer skills</li><li>Adaptability</li><li>Creativity</li><li>Interpersonal Skills and Emotional Intelligence</li></ul>',
              },
              {
                title1:
                  'Technical skills required for Electronics & Semiconductor Engineer',
                titlepoint:
                  '<ul><li>Strong IT skills</li><li>Innovation</li><li>Software</li><li>Hardware</li><li>Embedded Software Systems</li><li>Digital and Analogue</li><li>Testing</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, You can hire candidates for job roles like Electrical Design Engineer, Electrical Engineer, Electronics Engineer, Field Application Engineer, VLSI Engineer etc.</p><br />',
          },
        ],

        DesignandManufacturing: [
          {
            headline: 'Design and Manufacturing',

            discription:
              '<p>Semiconductor, Any of a class of crystalline solids intermediate in electrical conductivity between conductors and insulators. Semiconductors are used in the manufacture of a wide variety of electronic devices, including diodes, transistors, and integrated circuits.</p><br />',
            titleList: [
              {
                title1:
                  'Soft skills required for Electronics & Semiconductor Engineer',
                titlepoint:
                  '<ul><li>Communication</li><li>Problem-Solving</li><li>Organization</li><li>Leadership</li><li>Science skills</li><li>Computer skills</li><li>Adaptability</li><li>Creativity</li><li>Interpersonal Skills and Emotional Intelligence</li></ul>',
              },
              {
                title1:
                  'Technical skills required for Electronics & Semiconductor Engineer',
                titlepoint:
                  '<ul><li>Strong IT skills</li><li>Innovation</li><li>Software</li><li>Hardware</li><li>Embedded Software Systems</li><li>Digital and Analogue</li><li>Testing</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, You can hire candidates for job roles like Electrical Design Engineer, Electrical Engineer, Electronics Engineer, Field Application Engineer, VLSI Engineer etc.</p><br />',
          },
        ],

        HardwareEngineering: [
          {
            headline: 'Hardware Engineering',

            discription:
              '<p>The process of planning, developing, testing, and producing computer systems and different physical components connected to computer systems is known as hardware engineering.</p><br />',
            titleList: [
              {
                title1: 'Soft Skills Required for Hardware Engineering',
                titlepoint:
                  '<ul><li>Communication</li><li>Communicators</li><li>Empathy – Emotional Intelligence</li><li>Self-Awareness</li><li>Patience</li><li>Open Mindedness</li><li>Critical Thinking – Problem-Solving</li><li>Time Management</li><li>Teamwork – Collaboration</li></ul>',
              },
              {
                title1: 'Technical Skills Required for Hardware Engineering',
                titlepoint:
                  '<ul><li>Connecting networks and servers</li><li>Repairing computer parts</li><li>Software and web development experience</li><li>Coding languages – such as HTML, Python, and Java</li><li>Agile development</li><li>Hardware and software troubleshooting</li><li>Programming and security</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for Hardware Engineering jobs ARM Developer Automation Engineer, Circuit Design Engineer, DSP Developer Embedded Engineer, FPGA Developer Hardware Engineer, Heat Transfer Engineer, Lean Engineer, Material Engineer, System Integration Engineer, RF Engineer, etc.</p><br />',
          },
        ],

        RealEstateBrokerage: [
          {
            headline: 'Real Estate Brokerage',

            discription:
              '<p>A real estate agent or broker is someone who represents buyers and sellers of real estate or property. While a broker can work independently, an agent often works under the supervision of a licensed broker to represent clients.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required for Real Estate Brokerage Professional',
                titlepoint:
                  '<ul><li>Communication Skills – Communication is about more than just words</li><li>Understanding Social Cues</li><li>Integrity</li><li>Active Listening Skills</li><li>Patience</li></ul>',
              },
              {
                title1:
                  'Technical Skills Required for Real Estate Brokerage Professional',
                titlepoint:
                  '<ul><li>Knowledge of the Industry – Be better equipped to assist clients</li><li>Familiarity with the Local Area – Good understanding of the real estate industry and local areas</li><li>Tech Savviness - To host virtual house tours</li><li>Understanding of Architecture – A genuine interest in structures and design will be evident in conversations with clients</li><li>Great Work Ethic – Estate agent skills include drive, self-motivation, and commitment</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for jobs like Real Estate Broker, Real Estate Property Consultant, Real Estate Appraisal, Real Estate Agent.</p><br />',
          },
        ],

        OperationLeaders: [
          {
            headline: 'Operation Leaders',

            discription:
              '<p>Soft Skills Necessary For Operation Leaders.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required for Real Estate Brokerage Professional',
                titlepoint:
                  '<ul><li>Communication</li><li>Problem solving</li><li>Decision making</li><li>Time management</li><li>Active listening</li><li>Teamwork</li><li>Motivation</li></ul>',
              },
              {
                title1: 'Technical Skills Necessary For Operation Leaders',
                titlepoint:
                  '<ul><li>Strategic Planning - to achieve the goals</li><li>Strong negotiation skills - to negotiate</li><li>Influencing - to influence others</li><li>Conflict management - to manage conflicts</li><li>Forecasting - to have top-notch technical expertise</li><li>Delegation - to empower your team</li></ul>',
              },
            ],
            discription1:
              '<p>If you’re looking for candidates for job roles like Senior Operation Manager, Customer Service Director, Operations Manager, Head of Operations, Operations Supervisor, Hirect App will help you find eligible candidates.</p><br />',
          },
        ],

        BackendDevelopment: [
          {
            headline: 'Backend Development',

            discription:
              '<p>Back-end development entails working on server-side software, which is concerned with everything that cannot be seen on a website. Back-end developers ensure that the website functions appropriately by concentrating on databases, back-end logic, application programming interfaces (APIs), architecture, and servers.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Backend Development Professionals',
                titlepoint:
                  '<ul><li>Teamwork</li><li>Clear Communication</li><li>Listening Skills</li><li>Humility</li><li>Flexibility</li><li>Ambition</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Backend Development Professionals',
                titlepoint:
                  '<ul><li>Python</li><li>Java</li><li>PHP</li><li>SQL</li><li>Git</li><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>',
              },
            ],
            discription1:
              '<p>Through Hirect App you can hire candidates looking for Backend Development jobs and various roles like Backend Developer, etc.</p><br />',
          },
        ],

        DeOpsEngineering: [
          {
            headline: 'DevOps Engineering',

            discription:
              '<p>Software development and IT operations are combined in the DevOps set of practices. To balance needs across the software development life cycle, from coding and deployment to maintenance and updates, DevOps engineers create methods, tools, and approaches.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For DevOps Engineering Professionals',
                titlepoint:
                  '<ul><li>Communication</li><li>Decision-Making</li><li>Critical Thinking</li><li>Flexibility</li><li>Flexibility</li><li>Problem Analysis</li><li>Teamwork</li><li>Collaboration</li></ul>',
              },
              {
                title1: 'Technical Skills Required for DevOps Engineering Professionals',
                titlepoint:
                  '<ul><li>Engineering</li><li>Software Testing - to execute tests without failure</li><li>Computer Programming - to use computer languages</li><li>Configuration Management - to keep track of software and operating system configurations</li><li>System Integration - to make sure code changes are continuously integrated and delivered</li><li>Cloud Computing - to architect and build cloud native systems</li><li>Continuous Integration - to make a central repository of all the different codes</li><li>Linux Fundamentals & Scripting - to get you started with infrastructure automation</li><li>Source Code Management - to create and modify the software codes regularly</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for DevOps Engineering jobs and various roles related to DevOps Engineering.</p><br />',
          },
        ],

        ProjectManagement: [
          {
            headline: 'Project Management',

            discription:
              '<p>Project management entails the planning and organization of a company’s resources to complete a specific task, event, or duty. It can be a one-time project or an ongoing activity, with resources such as personnel, finances, technology, and intellectual property managed.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Project Management Professionals',
                titlepoint:
                  '<ul><li>Leadership</li><li>Motivation</li><li>Communication</li><li>Conflict Management</li><li>Trust-Building</li><li>Decision-Making</li><li>Organization</li><li>Time Management</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Project Management Professionals',
                titlepoint:
                  '<ul><li>Project Scheduling</li><li>Strategic Planning</li><li>Subject Matter Expertise</li><li>Project Lifecycle Management</li><li>Agile Software</li><li>Scrum Management</li><li>Meeting Facilitation</li><li>Financial Modelling</li><li>Performance Tracking</li><li>Budgeting</li></ul>',
              },
            ],
            discription1:
              '<p>Through Hirect App you can hire candidates looking for Project Management Professionals jobs and various roles like Project Manager,etc.</p><br />',
          },
        ],

        Data: [
          {
            headline: 'Data',

            discription:
              '<p>Analyzing data to find trends is one of the duties of data professionals. Establishing methods and processes to increase the effectiveness of working with data. Investigating novel data-use strategies. Creating reports and charts that convey data trends to non-specialists.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Data Professionals',
                titlepoint:
                  '<ul><li>Communication</li><li>Creativity</li><li>Problem-solving</li><li>Critical thinking skills</li><li>Analytics</li><li>Teamwork</li><li>Collaboration</li><li>Time management</li><li>Attention to detail</li><li>Decision-making</li><li>Project management</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Data Professionals',
                titlepoint:
                  '<ul><li>Data Science</li><li>Data Analysis</li><li>Data Visualization</li><li>SQL</li><li>Git</li><li>Machine Learning</li><li>Computer Programming</li><li>Microsoft Excel</li><li>Business Intelligence</li><li>MATLAB</li><li>Research</li><li>Data cleansing</li><li>Statistics</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for jobs related to data and various roles like Data Engineer, Data Scientist, Data Analyst, Etc.</p><br />',
          },
        ],

        HomeServices: [
          {
            headline: 'Home Services',

            discription:
              '<p>Helping or overseeing client’s bathing, dressing, grooming, and toileting is all part of the job description for home services. Preparing meals and snacks for clients, as well as feeding or supervising consumption. Distributing medication. Cleaning the house, doing the laundry, buying groceries, and performing other household chores as necessary.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Home Services Professionals',
                titlepoint:
                  '<ul><li>Great communication skills</li><li>Willingness to listen</li><li>Patience</li><li>Critical thinking</li><li>Problem-solving skills</li><li>Empathy</li><li>Flexibility</li><li>Passion</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Home Services Professionals',
                titlepoint:
                  '<ul><li>The Ability to Organize, Plan and Multi-Process</li><li>Reliability</li><li>Highly observant</li><li>First aid training</li></ul>',
              },
            ],
            discription1:
              '<p>Through using the Hirect App, you can hire candidates looking for Home Services Jobs and various roles related to Home Services like Carer, etc.</p><br />',
          },
        ],

        OfflineMarketing: [
          {
            headline: 'Offline Marketing',

            discription:
              '<p>Any form of marketing that is not carried out online is referred to as “Offline Marketing“. This covers a wide range of media and formats, including billboards, print ads, and radio and TV commercials. Offline marketing comes in a wide variety, with a variety of benefits and drawbacks.</p><br />',
            titleList: [
              {
                title1:
                  'Soft Skills Required For Offline Marketing Professionals',
                titlepoint:
                  '<ul><li>Communication</li><li>Patience</li><li>Positive thinking</li><li>Teamwork</li><li>Collaboration</li><li>Problem-solving</li></ul>',
              },
              {
                title1: 'Technical Skills Required For Offline Marketing Professionals',
                titlepoint:
                  '<ul><li>Product knowledge</li><li>Commercial awareness</li><li>Market acknowledgment</li><li>Customer centricity</li><li>Strategic thinking</li><li>Project management</li></ul>',
              },
            ],
            discription1:
              '<p>Through the Hirect App, you can hire candidates looking for Offline Marketing jobs and various roles related to Offline Marketing.</p><br />',
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.head-title {
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 100%;
  color: #000000;
  margin-bottom: 60px;
  text-align: center;
}
.head-subtitle {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
  color: #000000;
}
.head-description {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #686a6b;
  margin-bottom: 24px;
  text-align: justify;
}

@media only screen and (min-width: 300px) and (max-width: 767px) {
  .head-description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #686a6b;
    text-align: justify;
    margin: 0 10px;
}
.head-subtitle {
    font-weight: 700;
    margin-bottom: 24px;
    text-align: center;
}
.head-title {
    font-weight: 700;
    font-size: 28px;
    margin-bottom: 30px;
    text-align: center;
    margin-top: 40px;
}
}
</style>
