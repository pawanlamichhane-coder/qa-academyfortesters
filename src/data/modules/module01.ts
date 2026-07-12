import { Module } from '../curriculum';

export const module1: Module = {
  id: 1,
  slug: 'what-is-qa',
  title: 'What is QA',
  description: 'Understand the role, responsibilities, and career path of a Quality Assurance Engineer in the software industry.',
  icon: '🔍',
  lessons: [
    {
      id: '1-1', difficulty: 'beginner',
      slug: 'qa-vs-qc',
      title: 'Quality Assurance vs Quality Control',
      duration: 8,
      content: `
<h2>Quality Assurance vs Quality Control</h2>
<p>Many people use QA and QC interchangeably, but they represent fundamentally different philosophies in software quality management. Understanding this distinction is the first step in your QA career.</p>

<h3>Quality Assurance (QA)</h3>
<p><strong>Quality Assurance is a proactive, process-oriented approach.</strong> It focuses on preventing defects before they occur by improving the development and testing processes themselves. Think of QA as building quality into the process so that the output is naturally better.</p>
<p>QA activities include:</p>
<ul>
<li>Defining coding standards and guidelines</li>
<li>Establishing test strategies and processes</li>
<li>Conducting process audits and reviews</li>
<li>Training team members on quality practices</li>
<li>Implementing shift-left testing practices</li>
<li>Creating and maintaining test plans and documentation</li>
</ul>

<h3>Quality Control (QC)</h3>
<p><strong>Quality Control is a reactive, product-oriented approach.</strong> It focuses on identifying defects in the finished or in-progress product. QC is the actual testing — executing test cases, finding bugs, and verifying fixes.</p>
<p>QC activities include:</p>
<ul>
<li>Executing manual and automated test cases</li>
<li>Performing exploratory testing</li>
<li>Logging and tracking defects</li>
<li>Verifying bug fixes</li>
<li>Running regression tests</li>
<li>Validating the product meets requirements</li>
</ul>

<h3>Key Differences at a Glance</h3>
<table>
<thead><tr><th>Aspect</th><th>QA</th><th>QC</th></tr></thead>
<tbody>
<tr><td>Focus</td><td>Process</td><td>Product</td></tr>
<tr><td>Approach</td><td>Preventive</td><td>Corrective</td></tr>
<tr><td>Goal</td><td>Prevent defects</td><td>Detect defects</td></tr>
<tr><td>Responsibility</td><td>Everyone on the team</td><td>Testing team</td></tr>
<tr><td>Timing</td><td>Throughout SDLC</td><td>After development</td></tr>
</tbody>
</table>

<h3>Real-World Example</h3>
<p>Imagine a car factory. <strong>QA</strong> would be designing the assembly line to ensure every bolt is tightened to the right torque — preventing loose bolts from ever happening. <strong>QC</strong> would be the inspector at the end of the line checking each car for loose bolts and sending defective ones back.</p>
<p>In software, QA defines the processes (code reviews, CI/CD pipelines, test strategies) while QC executes the tests and catches bugs.</p>

<div class="callout">
<strong>💡 Key Takeaway:</strong> Modern QA Engineers do both QA and QC. You'll define quality processes AND execute tests. The title "QA Engineer" encompasses the full spectrum.
</div>
`
    },
    {
      id: '1-2', difficulty: 'beginner',
      slug: 'role-of-qa-engineer',
      title: 'Role of a QA Engineer in a Software Team',
      duration: 10,
      content: `
<h2>Role of a QA Engineer in a Software Team</h2>
<p>A QA Engineer is the quality guardian of a software product. Your job isn't just to find bugs — it's to ensure the entire team ships software that works correctly, performs well, and delivers a great user experience.</p>

<h3>Core Responsibilities</h3>
<p><strong>1. Requirement Analysis:</strong> QA Engineers participate in requirement gathering sessions, reviewing user stories and acceptance criteria to catch ambiguities and gaps before development begins. You ask questions like: "What happens if the user enters an invalid email?" or "What's the expected behavior on a slow network?"</p>

<p><strong>2. Test Planning:</strong> You create comprehensive test plans that define what to test, how to test it, what environments to test in, and what the entry/exit criteria are. This is your testing blueprint.</p>

<p><strong>3. Test Case Design:</strong> You write detailed test cases covering positive scenarios, negative scenarios, edge cases, and boundary conditions. Good test cases are reusable, maintainable, and traceable back to requirements.</p>

<p><strong>4. Test Execution:</strong> You execute manual tests and run automated test suites. This includes functional testing, regression testing, smoke testing, integration testing, and more.</p>

<p><strong>5. Defect Management:</strong> When you find issues, you document them with clear reproduction steps, screenshots, logs, and severity/priority classifications. You track defects through their lifecycle until resolution.</p>

<p><strong>6. Automation:</strong> Modern QA Engineers write automated tests using tools like Selenium, Playwright, Cypress, and REST Assured. Automation speeds up regression testing and catches regressions early in CI/CD pipelines.</p>

<p><strong>7. Cross-Team Communication:</strong> You're the bridge between developers, product managers, designers, and stakeholders. You translate technical issues into business impact and help the team prioritize quality improvements.</p>

<h3>Where QA Fits in the Team</h3>
<p>In a typical Agile/Scrum team, a QA Engineer works alongside 4-8 developers, a Product Owner, and a Scrum Master. You participate in:</p>
<ul>
<li><strong>Sprint Planning:</strong> Estimating test effort, identifying automation candidates</li>
<li><strong>Daily Standups:</strong> Sharing testing progress, blocking issues</li>
<li><strong>Sprint Review:</strong> Demonstrating tested features to stakeholders</li>
<li><strong>Retrospective:</strong> Improving testing processes</li>
</ul>

<h3>A Day in the Life</h3>
<p>A typical day might look like this:</p>
<pre><code>9:00 AM  - Daily standup: share yesterday's testing progress, today's plan
9:30 AM  - Review new pull requests, verify acceptance criteria
10:00 AM - Execute manual exploratory tests on a new feature
11:30 AM - Write automated test scripts for last sprint's features
1:00 PM  - Investigate a failing CI pipeline test
2:00 PM  - Write and refine bug reports with reproduction steps
3:00 PM  - Attend sprint grooming — ask clarifying questions on upcoming stories
4:00 PM  - Update test documentation and regression suite
4:30 PM  - Run full regression suite, review results</code></pre>
`
    },
    {
      id: '1-3', difficulty: 'beginner',
      slug: 'qa-vs-developer',
      title: 'QA vs Developer — Differences and Collaboration',
      duration: 7,
      content: `
<h2>QA vs Developer — Differences and Collaboration</h2>
<p>QA Engineers and Developers have complementary but distinct roles. Understanding both perspectives makes you a better QA professional and a stronger team player.</p>

<h3>Key Differences</h3>
<table>
<thead><tr><th>Aspect</th><th>Developer</th><th>QA Engineer</th></tr></thead>
<tbody>
<tr><td>Primary Goal</td><td>Build features that work</td><td>Ensure features work correctly in all scenarios</td></tr>
<tr><td>Mindset</td><td>"How do I make this work?"</td><td>"How can this break?"</td></tr>
<tr><td>Focus</td><td>Implementation and architecture</td><td>Validation and user experience</td></tr>
<tr><td>Testing Scope</td><td>Unit tests, happy path</td><td>All test levels, edge cases, negative paths</td></tr>
<tr><td>Tools</td><td>IDEs, frameworks, databases</td><td>Testing frameworks, bug trackers, monitoring</td></tr>
</tbody>
</table>

<h3>The Constructive Tension</h3>
<p>There's a natural tension between QA and Dev — and that's a <em>good thing</em>. Developers are optimistic builders; QA Engineers are constructive skeptics. When a developer says "it works," a QA Engineer asks "does it work when the user has a slow connection, enters Unicode characters, and clicks submit 50 times in a row?"</p>

<h3>Collaboration Best Practices</h3>
<p><strong>1. Three Amigos Meetings:</strong> Before work begins, the Developer, QA Engineer, and Product Owner meet to discuss the user story together. This ensures shared understanding and catches issues before code is written.</p>
<p><strong>2. Pair Testing:</strong> QA and Dev sit together to test a feature. The developer explains the implementation while the QA engineer probes edge cases in real time. This catches bugs faster and builds empathy.</p>
<p><strong>3. Shift-Left Testing:</strong> QA participates early — reviewing requirements, writing acceptance criteria, and identifying test scenarios before development starts.</p>
<p><strong>4. Constructive Bug Reports:</strong> Always write bug reports that help developers fix the issue quickly. Include exact steps to reproduce, expected vs actual behavior, environment details, screenshots, and logs. Never write "it doesn't work" — be specific.</p>

<div class="callout">
<strong>💡 Pro Tip:</strong> The best QA-Dev relationships are built on mutual respect. Developers aren't your adversaries — you're partners with the shared goal of shipping great software. Report bugs constructively, celebrate good code, and offer solutions alongside problems.
</div>
`
    },
    {
      id: '1-4', difficulty: 'beginner',
      slug: 'types-of-qa-roles',
      title: 'Types of QA Roles',
      duration: 8,
      content: `
<h2>Types of QA Roles</h2>
<p>QA isn't a single role — it's a spectrum of specializations. Understanding the landscape helps you plan your career path.</p>

<h3>1. Manual QA Tester / QA Analyst</h3>
<p><strong>What they do:</strong> Execute test cases manually, perform exploratory testing, write detailed bug reports, maintain test documentation.</p>
<p><strong>Skills needed:</strong> Attention to detail, analytical thinking, good written communication, knowledge of testing techniques, familiarity with bug tracking tools (Jira, Azure DevOps).</p>
<p><strong>Typical salary:</strong> Entry-level role. $40,000-$65,000/yr in the US; ₹3-8 LPA in India; equivalent ranges in other Asian markets.</p>

<h3>2. Automation QA Engineer</h3>
<p><strong>What they do:</strong> Write automated test scripts using tools like Selenium, Playwright, or Cypress. Build and maintain test automation frameworks. Integrate tests into CI/CD pipelines.</p>
<p><strong>Skills needed:</strong> Programming (Java, Python, JavaScript), test automation frameworks, CI/CD tools, API testing.</p>
<p><strong>Typical salary:</strong> Mid-level. $70,000-$110,000/yr in the US; ₹8-18 LPA in India.</p>

<h3>3. SDET (Software Development Engineer in Test)</h3>
<p><strong>What they do:</strong> Write production-level test infrastructure. Build testing tools, frameworks, and utilities used by the entire team. They're essentially developers who specialize in testing.</p>
<p><strong>Skills needed:</strong> Strong programming, system design, framework architecture, CI/CD, often contribute to production code.</p>
<p><strong>Typical salary:</strong> Senior-level. $100,000-$160,000/yr in the US; ₹15-30 LPA in India.</p>

<h3>4. Performance Test Engineer</h3>
<p><strong>What they do:</strong> Design and execute load tests, stress tests, and performance benchmarks. Analyze system behavior under heavy traffic.</p>
<p><strong>Skills needed:</strong> JMeter, k6, Gatling, understanding of server architecture, metrics analysis.</p>

<h3>5. Security Test Engineer</h3>
<p><strong>What they do:</strong> Test for security vulnerabilities — SQL injection, XSS, authentication flaws, OWASP Top 10 issues.</p>
<p><strong>Skills needed:</strong> OWASP knowledge, tools like Burp Suite and OWASP ZAP, basic networking concepts.</p>

<h3>6. QA Lead / QA Manager</h3>
<p><strong>What they do:</strong> Lead QA teams, define testing strategy, mentor junior QAs, communicate quality metrics to stakeholders, manage test environments and tooling.</p>
<p><strong>Skills needed:</strong> Technical QA expertise + leadership, communication, project management, strategic thinking.</p>

<h3>Career Progression</h3>
<pre><code>Junior QA Tester → QA Engineer → Senior QA Engineer → QA Lead → QA Manager → Director of Quality</code></pre>
<p>Many QA professionals also move laterally into DevOps, Product Management, or Software Development as their skills grow.</p>
`
    },
    {
      id: '1-5', difficulty: 'beginner',
      slug: 'skills-needed',
      title: 'Skills Needed to Become a QA Engineer',
      duration: 8,
      content: `
<h2>Skills Needed to Become a QA Engineer in 2025</h2>
<p>The QA landscape has evolved dramatically. Here's what you actually need to be job-ready.</p>

<h3>Must-Have Technical Skills</h3>
<p><strong>1. Testing Fundamentals:</strong> Understand test types (functional, regression, smoke, integration), test design techniques (equivalence partitioning, boundary value analysis), and the testing lifecycle. This is non-negotiable — every interview will test this.</p>
<p><strong>2. Programming Basics:</strong> You need at least one language well. Java and Python are the most common in QA. JavaScript/TypeScript is growing rapidly. You don't need to be an expert developer, but you must be able to read code, write test scripts, and debug failures.</p>
<p><strong>3. Test Automation:</strong> Know at least one UI automation tool (Selenium, Playwright, or Cypress) and one API testing tool (Postman, REST Assured). Most job postings now list automation as a requirement even for "manual QA" roles.</p>
<p><strong>4. API Testing:</strong> Understanding REST APIs, HTTP methods, status codes, and how to test APIs with Postman is essential. Nearly every modern application has an API layer.</p>
<p><strong>5. Git & Version Control:</strong> You need to store your test code somewhere. Know Git basics: clone, branch, commit, push, pull, merge.</p>
<p><strong>6. CI/CD Basics:</strong> Understand how automated tests run in pipelines (GitHub Actions, Jenkins). You should be able to trigger test runs on code changes.</p>
<p><strong>7. SQL Basics:</strong> Many QA tasks require querying databases to verify data. Know SELECT, WHERE, JOIN, INSERT, UPDATE.</p>

<h3>Must-Have Soft Skills</h3>
<p><strong>Analytical Thinking:</strong> Ability to break down complex features into testable scenarios.</p>
<p><strong>Attention to Detail:</strong> Catching subtle UI glitches, data inconsistencies, and edge cases that others miss.</p>
<p><strong>Communication:</strong> Writing clear bug reports, explaining issues to developers, presenting quality metrics to stakeholders.</p>
<p><strong>Curiosity:</strong> The best QA engineers are naturally curious. They ask "what if?" constantly.</p>
<p><strong>Persistence:</strong> Some bugs are elusive. You need patience to reproduce intermittent issues.</p>

<h3>Nice-to-Have Skills</h3>
<ul>
<li>Performance testing (JMeter, k6)</li>
<li>Security testing basics (OWASP Top 10)</li>
<li>Mobile testing (Appium)</li>
<li>Docker and containerization</li>
<li>Cloud services basics (AWS, Azure)</li>
<li>Monitoring tools (Datadog, Grafana)</li>
</ul>
`
    },
    {
      id: '1-6', difficulty: 'beginner',
      slug: 'certifications',
      title: 'Qualifications and Certifications',
      duration: 6,
      content: `
<h2>Qualifications and Certifications</h2>
<p>Do you need a degree or certification to become a QA Engineer? Let's break down what actually matters.</p>

<h3>Educational Background</h3>
<p>Most QA Engineers have a degree in Computer Science, IT, or a related field — but it's not strictly required. Many successful QA professionals come from non-traditional backgrounds (biology, business, arts) and transition through bootcamps, self-study, or on-the-job learning.</p>
<p>What matters more than a degree is demonstrable skill: a GitHub portfolio with real test projects, knowledge of testing fundamentals, and the ability to write automation code.</p>

<h3>ISTQB Certification</h3>
<p>The International Software Testing Qualifications Board (ISTQB) is the most widely recognized QA certification globally.</p>
<p><strong>ISTQB Foundation Level (CTFL):</strong></p>
<ul>
<li>Covers testing fundamentals, test design, test management, tool support</li>
<li>No prerequisites — anyone can take it</li>
<li>Exam: 40 multiple-choice questions, 60 minutes, 65% to pass</li>
<li>Cost: $200-$300 depending on country</li>
<li>Worth it: Yes, especially for your first QA job. Many companies list it as "preferred"</li>
</ul>

<p><strong>ISTQB Advanced Level:</strong> Test Analyst, Technical Test Analyst, Test Manager — for experienced QAs.</p>
<p><strong>ISTQB Agile Tester Extension:</strong> Covers Agile-specific testing practices. Good supplement to Foundation.</p>

<h3>Other Certifications</h3>
<ul>
<li><strong>Certified Agile Tester (CAT):</strong> Focuses on Agile testing practices</li>
<li><strong>AWS Certified Cloud Practitioner:</strong> Useful if testing cloud applications</li>
<li><strong>Selenium Certifications:</strong> Various providers offer Selenium-specific certs</li>
<li><strong>API Testing Certifications:</strong> Postman offers free certifications on their platform</li>
</ul>

<div class="callout">
<strong>💡 Reality Check:</strong> Certifications open doors, but portfolios close deals. A GitHub repo with a well-structured Selenium POM framework impresses interviewers far more than a certificate alone. Invest in both.
</div>
`
    },
    {
      id: '1-7', difficulty: 'beginner',
      slug: 'salary-ranges',
      title: 'QA Salary Ranges Globally',
      duration: 5,
      content: `
<h2>QA Salary Ranges Globally</h2>
<p>QA salaries vary significantly by region, experience level, and specialization. Here's what to expect.</p>

<h3>United States</h3>
<table>
<thead><tr><th>Level</th><th>Salary Range (USD/year)</th></tr></thead>
<tbody>
<tr><td>Junior QA (0-2 yrs)</td><td>$50,000 — $75,000</td></tr>
<tr><td>Mid QA (2-5 yrs)</td><td>$75,000 — $110,000</td></tr>
<tr><td>Senior QA (5+ yrs)</td><td>$110,000 — $150,000</td></tr>
<tr><td>SDET</td><td>$120,000 — $170,000</td></tr>
<tr><td>QA Lead/Manager</td><td>$130,000 — $180,000+</td></tr>
</tbody>
</table>

<h3>India</h3>
<table>
<thead><tr><th>Level</th><th>Salary Range (INR LPA)</th></tr></thead>
<tbody>
<tr><td>Junior QA</td><td>₹3 — ₹6 LPA</td></tr>
<tr><td>Mid QA</td><td>₹6 — ₹14 LPA</td></tr>
<tr><td>Senior QA</td><td>₹14 — ₹25 LPA</td></tr>
<tr><td>SDET</td><td>₹18 — ₹35 LPA</td></tr>
</tbody>
</table>

<h3>Southeast Asia & Nepal</h3>
<p>Markets like Nepal, Bangladesh, Philippines, and Vietnam typically range from $5,000-$20,000/year for junior to mid-level roles, with senior and remote positions reaching $25,000-$50,000+. Remote work opportunities for international companies can significantly increase earning potential.</p>

<h3>Europe</h3>
<p>Western Europe (UK, Germany, Netherlands): $50,000-$120,000 equivalent. Eastern Europe (Poland, Romania, Ukraine): $20,000-$60,000 equivalent.</p>

<h3>What Increases Your Salary</h3>
<ul>
<li><strong>Automation skills:</strong> 20-40% salary premium over manual-only QA</li>
<li><strong>SDET capabilities:</strong> Framework development skills command top salaries</li>
<li><strong>Performance testing:</strong> Specialized skill with high demand</li>
<li><strong>Remote work:</strong> Access to US/EU salaries from lower-cost regions</li>
<li><strong>Domain expertise:</strong> Fintech, healthcare, and e-commerce QA specialists earn more</li>
</ul>
`
    },
    {
      id: '1-8', difficulty: 'beginner',
      slug: 'career-roadmap',
      title: 'Career Roadmap from Junior to Senior QA',
      duration: 7,
      content: `
<h2>Career Roadmap from Junior to Senior QA</h2>

<h3>Phase 1: Junior QA Engineer (0-2 years)</h3>
<p><strong>Focus:</strong> Build a solid foundation in manual testing and start learning automation.</p>
<ul>
<li>Master testing fundamentals (test types, techniques, lifecycle)</li>
<li>Learn to write clear, detailed test cases and bug reports</li>
<li>Get comfortable with Jira (or similar) for defect tracking</li>
<li>Learn one programming language (Java or Python recommended)</li>
<li>Start learning Selenium or Playwright basics</li>
<li>Understand API basics and Postman</li>
<li>Learn Git fundamentals</li>
</ul>

<h3>Phase 2: Mid-Level QA Engineer (2-4 years)</h3>
<p><strong>Focus:</strong> Become proficient in automation and take ownership of testing strategy.</p>
<ul>
<li>Build complete automation frameworks (POM, data-driven)</li>
<li>Master API testing (REST Assured, Postman automation)</li>
<li>Set up CI/CD pipelines for test execution</li>
<li>Learn performance testing basics (JMeter)</li>
<li>Mentor junior QAs</li>
<li>Participate in test strategy decisions</li>
<li>Contribute to code reviews of test code</li>
</ul>

<h3>Phase 3: Senior QA Engineer (4-7 years)</h3>
<p><strong>Focus:</strong> Drive quality strategy, architect test frameworks, lead initiatives.</p>
<ul>
<li>Design and architect test automation frameworks from scratch</li>
<li>Define testing strategy for the team/project</li>
<li>Lead quality improvements and process optimization</li>
<li>Cross-functional collaboration at a strategic level</li>
<li>Deep expertise in at least one specialization (performance, security, mobile)</li>
<li>Interview and hire QA team members</li>
</ul>

<h3>Phase 4: QA Lead / QA Manager (7+ years)</h3>
<p><strong>Focus:</strong> People management, organizational quality strategy, stakeholder communication.</p>
<ul>
<li>Manage and grow QA teams</li>
<li>Define organization-wide quality metrics and KPIs</li>
<li>Budget management for tools and infrastructure</li>
<li>Report quality status to executive stakeholders</li>
<li>Drive cultural change toward quality ownership</li>
</ul>
`
    },
    {
      id: '1-9', difficulty: 'beginner',
      slug: 'getting-first-job',
      title: 'How to Get Your First QA Job',
      duration: 10,
      content: `
<h2>How to Get Your First QA Job</h2>
<p>Breaking into QA without experience feels like a catch-22: companies want experience, but you can't get experience without a job. Here's how to solve that.</p>

<h3>Build a Portfolio on GitHub</h3>
<p>This is the single most impactful thing you can do. Create these repositories:</p>
<ol>
<li><strong>Manual Testing Project:</strong> Pick a real website (like Amazon, Swag Labs, or OrangeHRM). Write a full test plan, 50+ test cases in a spreadsheet, and 10+ detailed bug reports. Store everything in a GitHub repo with a clear README.</li>
<li><strong>Selenium POM Framework:</strong> Build a Page Object Model framework from scratch for an e-commerce demo site. Include data-driven tests, reporting, and CI/CD pipeline.</li>
<li><strong>API Testing Collection:</strong> Create a Postman collection testing a public API (like JSONPlaceholder or ReqRes). Include environment variables, test assertions, and a Newman HTML report.</li>
<li><strong>Playwright/Cypress Project:</strong> One modern framework project with clean code, good structure, and CI integration.</li>
</ol>

<h3>Resume Tips</h3>
<ul>
<li>Lead with skills, not work history if you're transitioning careers</li>
<li>List specific tools: "Selenium WebDriver, Java, TestNG, Maven, Jenkins" — not just "automation testing"</li>
<li>Include links to your GitHub projects</li>
<li>Quantify where possible: "Wrote 200+ test cases covering 5 modules"</li>
<li>Add your ISTQB certification if you have one</li>
<li>Keep it to 1 page for junior roles</li>
</ul>

<h3>LinkedIn Optimization</h3>
<ul>
<li>Headline: "QA Engineer | Selenium | Playwright | API Testing | ISTQB Certified"</li>
<li>Add your GitHub link prominently</li>
<li>Write posts about testing topics you're learning</li>
<li>Follow QA thought leaders and engage with their content</li>
<li>Join QA-focused LinkedIn groups</li>
</ul>

<h3>Where to Apply</h3>
<ul>
<li>LinkedIn Jobs (filter by "QA Engineer", "QA Tester", "Quality Analyst")</li>
<li>Indeed, Glassdoor</li>
<li>Company career pages directly (startups often have less competition)</li>
<li>Freelance platforms (Upwork, Toptal) for initial experience</li>
<li>QA-specific job boards: Ministry of Testing, Software Testing Help</li>
</ul>

<h3>Interview Preparation</h3>
<p>Prepare for three types of questions:</p>
<ol>
<li><strong>Testing Concepts:</strong> "What's the difference between smoke and sanity testing?" "Explain boundary value analysis."</li>
<li><strong>Practical Scenarios:</strong> "How would you test a login page?" "What test cases would you write for an ATM?"</li>
<li><strong>Technical Skills:</strong> "Write an XPath for this element." "How do you handle dynamic elements in Selenium?"</li>
</ol>

<div class="callout">
<strong>💡 Pro Tip:</strong> Apply even if you don't meet 100% of the job requirements. Job postings are wish lists, not checklists. If you meet 60-70% of the requirements, go for it. Your GitHub portfolio and enthusiasm will compensate for gaps.
</div>
`
    },
  ],
  quiz: [
    { id: 'q1-1', question: 'What is the main focus of Quality Assurance (QA)?', options: ['Finding bugs in the product', 'Preventing defects by improving processes', 'Writing code', 'Deploying software'], correctIndex: 1, explanation: 'QA is proactive and process-oriented — it focuses on preventing defects by improving development and testing processes.' },
    { id: 'q1-2', question: 'Which of the following is a QC (Quality Control) activity?', options: ['Defining coding standards', 'Conducting process audits', 'Executing test cases and logging bugs', 'Training team on quality practices'], correctIndex: 2, explanation: 'QC is reactive and product-oriented — executing tests and finding bugs is a QC activity.' },
    { id: 'q1-3', question: 'What is an SDET?', options: ['A type of database', 'Software Development Engineer in Test', 'Secure Data Encryption Tool', 'System Design Evaluation Technique'], correctIndex: 1, explanation: 'SDET stands for Software Development Engineer in Test — they build testing tools and frameworks at a developer level.' },
    { id: 'q1-4', question: 'Which certification is the most widely recognized in QA globally?', options: ['AWS Certified Tester', 'ISTQB Foundation Level', 'Google QA Certificate', 'Microsoft Testing Professional'], correctIndex: 1, explanation: 'ISTQB (International Software Testing Qualifications Board) Foundation Level is the most recognized QA certification globally.' },
    { id: 'q1-5', question: 'What mindset differentiates a QA Engineer from a Developer?', options: ['"How do I make this work?" vs "How can this break?"', 'QA focuses on features, Dev focuses on bugs', 'They have the same mindset', 'QA writes code, Dev tests code'], correctIndex: 0, explanation: 'Developers think about making features work correctly; QA Engineers think about how features can break or fail.' },
    { id: 'q1-6', question: 'Which skill has the biggest salary premium for QA Engineers?', options: ['Manual testing expertise', 'Documentation skills', 'Test automation skills', 'Communication skills'], correctIndex: 2, explanation: 'Automation skills command a 20-40% salary premium over manual-only QA roles.' },
    { id: 'q1-7', question: 'What is the best portfolio item for getting your first QA job?', options: ['A resume with many certifications', 'GitHub repositories with real test projects', 'A blog about testing theory', 'A college degree in CS'], correctIndex: 1, explanation: 'GitHub repos with real, working test projects (Selenium framework, Postman collections, etc.) are the most impactful portfolio items.' },
    { id: 'q1-8', question: 'In Agile/Scrum, when should QA start testing activities?', options: ['Only during the testing phase', 'After all development is complete', 'From the beginning — during sprint planning and requirement review', 'Only when bugs are reported'], correctIndex: 2, explanation: 'QA participates from the start in Agile — reviewing stories, writing acceptance criteria, and identifying test scenarios during planning.' },
    { id: 'q1-9', question: 'What does "Shift-Left Testing" mean?', options: ['Moving the testing team to a different office', 'Starting testing activities earlier in the development lifecycle', 'Using left-aligned test reports', 'Shifting responsibility from QA to developers'], correctIndex: 1, explanation: 'Shift-left testing means starting testing activities earlier in the SDLC — during requirements and design phases rather than after development.' },
    { id: 'q1-10', question: 'What is a "Three Amigos" meeting?', options: ['A meeting with three QA Engineers', 'A meeting between Developer, QA, and Product Owner to discuss a user story', 'A meeting to review three bugs', 'A meeting held three times per sprint'], correctIndex: 1, explanation: 'Three Amigos is a collaborative meeting where a Developer, QA Engineer, and Product Owner discuss a user story to ensure shared understanding.' },
  ],
};

export default module1;
