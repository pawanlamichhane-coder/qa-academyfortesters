import { Module } from '../curriculum';

export const module2: Module = {
  id: 2,
  slug: 'sdlc-stlc',
  title: 'Software Development & Testing Lifecycle',
  description: 'Master the SDLC and STLC phases, Agile vs Waterfall methodologies, and how QA fits into each stage.',
  icon: '🔄',
  lessons: [
    {
      id: '2-1', difficulty: 'beginner',
      slug: 'sdlc-phases',
      title: 'SDLC Phases Explained',
      duration: 10,
      content: `
<h2>Software Development Life Cycle (SDLC) Phases</h2>
<p>The SDLC is a structured process that defines the stages involved in building software from concept to deployment and maintenance. Every QA Engineer must understand these phases because your testing activities align directly with them.</p>

<h3>Phase 1: Requirement Gathering & Analysis</h3>
<p>Stakeholders, business analysts, and product owners define what the software should do. Requirements are documented as Business Requirements Documents (BRD) or user stories.</p>
<p><strong>QA involvement:</strong> Review requirements for testability, clarity, and completeness. Ask questions like "What are the acceptance criteria?" and "What happens in error scenarios?"</p>

<h3>Phase 2: System Design</h3>
<p>Architects and senior developers create the technical blueprint: system architecture, database design, API contracts, UI wireframes.</p>
<p><strong>QA involvement:</strong> Review design documents to understand the system. Identify integration points that need testing. Start planning the test strategy.</p>

<h3>Phase 3: Implementation (Coding)</h3>
<p>Developers write the actual code based on design specifications. This is the longest phase.</p>
<p><strong>QA involvement:</strong> Write test cases, prepare test data, set up test environments, develop automation scripts for known requirements.</p>

<h3>Phase 4: Testing</h3>
<p>QA executes test cases, runs automated suites, performs exploratory testing, and reports defects.</p>
<p><strong>Activities:</strong> Unit testing (by devs), integration testing, system testing, UAT, performance testing, regression testing.</p>

<h3>Phase 5: Deployment</h3>
<p>The tested software is released to production. This may be a big-bang release or incremental deployment.</p>
<p><strong>QA involvement:</strong> Smoke testing in production, verifying deployment checklists, monitoring for issues.</p>

<h3>Phase 6: Maintenance</h3>
<p>Post-release bug fixes, patches, enhancements, and performance optimization.</p>
<p><strong>QA involvement:</strong> Regression testing for patches, verifying bug fixes, testing new enhancements.</p>
`
    },
    {
      id: '2-2', difficulty: 'beginner',
      slug: 'stlc-phases',
      title: 'STLC Phases Explained',
      duration: 10,
      content: `
<h2>Software Testing Life Cycle (STLC) Phases</h2>
<p>The STLC defines the specific phases within testing itself. While SDLC covers the entire software development process, STLC focuses specifically on testing activities.</p>

<h3>Phase 1: Requirement Analysis</h3>
<p>QA studies the requirements to understand what needs to be tested. Identify testable and non-testable requirements.</p>
<p><strong>Deliverables:</strong> Requirement Traceability Matrix (RTM), list of queries to stakeholders</p>

<h3>Phase 2: Test Planning</h3>
<p>The QA Lead creates a comprehensive test plan defining scope, approach, resources, schedule, environments, and tools.</p>
<p><strong>Deliverables:</strong> Test Plan document, effort estimates</p>
<p><strong>Key decisions:</strong> What to test manually vs automate? What environments are needed? What are the risks?</p>

<h3>Phase 3: Test Case Design</h3>
<p>QA Engineers write detailed test cases and test scripts based on requirements. Test data is prepared.</p>
<p><strong>Deliverables:</strong> Test cases, test scripts, test data</p>

<h3>Phase 4: Test Environment Setup</h3>
<p>Configure the hardware, software, network, and test data needed to execute tests. This often runs parallel with test case design.</p>
<p><strong>Deliverables:</strong> Environment ready, smoke test results</p>

<h3>Phase 5: Test Execution</h3>
<p>Execute test cases, log results (Pass/Fail/Blocked), report defects for failures, and retest fixed defects.</p>
<p><strong>Deliverables:</strong> Test execution results, defect reports, updated RTM</p>

<h3>Phase 6: Test Cycle Closure</h3>
<p>Evaluate completion criteria, prepare test summary reports, document lessons learned, and archive test artifacts.</p>
<p><strong>Deliverables:</strong> Test closure report, metrics (defect density, test coverage, pass rate)</p>

<h3>Entry and Exit Criteria</h3>
<table>
<thead><tr><th>Phase</th><th>Entry Criteria</th><th>Exit Criteria</th></tr></thead>
<tbody>
<tr><td>Requirement Analysis</td><td>Requirements documents available</td><td>RTM created, queries resolved</td></tr>
<tr><td>Test Planning</td><td>Requirements analyzed</td><td>Test plan approved</td></tr>
<tr><td>Test Case Design</td><td>Test plan approved</td><td>Test cases reviewed and approved</td></tr>
<tr><td>Test Execution</td><td>Environment ready, build deployed</td><td>All test cases executed, defects logged</td></tr>
<tr><td>Test Closure</td><td>Test execution complete</td><td>Closure report signed off</td></tr>
</tbody>
</table>
`
    },
    {
      id: '2-3', difficulty: 'beginner',
      slug: 'waterfall-vs-agile',
      title: 'Waterfall vs Agile vs Scrum for QA',
      duration: 12,
      content: `
<h2>Waterfall vs Agile vs Scrum for QA</h2>

<h3>Waterfall Model</h3>
<p>Waterfall is a linear, sequential approach where each phase must be completed before the next begins. Testing happens only after development is fully complete.</p>
<p><strong>Pros for QA:</strong> Clear requirements upfront, thorough documentation, well-defined test phase with dedicated time.</p>
<p><strong>Cons for QA:</strong> Bugs found late are expensive to fix. No early feedback loop. QA is often squeezed if development runs late.</p>
<p><strong>When used:</strong> Regulated industries (healthcare, aviation), fixed-scope projects with stable requirements.</p>

<h3>Agile Methodology</h3>
<p>Agile is an iterative approach where software is built in small increments with continuous feedback. Testing happens throughout each iteration.</p>
<p><strong>Core Agile principles for QA:</strong></p>
<ul>
<li>Working software over comprehensive documentation</li>
<li>Responding to change over following a plan</li>
<li>Continuous delivery of valuable software</li>
<li>Close collaboration between business and development</li>
</ul>
<p><strong>Impact on QA:</strong> Test in short cycles (1-4 weeks). Automate early. Shift-left: start testing from requirements. Embrace change — requirements evolve.</p>

<h3>Scrum Framework</h3>
<p>Scrum is the most popular Agile framework. Work is organized into time-boxed iterations called Sprints (usually 2 weeks).</p>
<p><strong>Scrum Roles:</strong></p>
<ul>
<li><strong>Product Owner:</strong> Defines what to build, prioritizes the backlog</li>
<li><strong>Scrum Master:</strong> Facilitates the process, removes blockers</li>
<li><strong>Development Team:</strong> Builds the product (includes QA Engineers!)</li>
</ul>

<h3>QA in Agile vs Waterfall</h3>
<table>
<thead><tr><th>Aspect</th><th>Waterfall QA</th><th>Agile QA</th></tr></thead>
<tbody>
<tr><td>When testing starts</td><td>After development is complete</td><td>From day one of the sprint</td></tr>
<tr><td>Test documentation</td><td>Extensive formal documents</td><td>Lightweight, living documents</td></tr>
<tr><td>Feedback loop</td><td>Weeks/months</td><td>Hours/days</td></tr>
<tr><td>Automation priority</td><td>Nice to have</td><td>Essential for regression</td></tr>
<tr><td>Change handling</td><td>Change control process</td><td>Embrace and adapt</td></tr>
<tr><td>QA-Dev interaction</td><td>Separate phases</td><td>Daily collaboration</td></tr>
</tbody>
</table>

<div class="callout">
<strong>💡 Industry Reality:</strong> 80%+ of software companies use Agile/Scrum today. If you're joining the industry now, Agile is your default working model. Learn Scrum ceremonies, embrace short feedback loops, and prioritize automation.
</div>
`
    },
    {
      id: '2-4', difficulty: 'beginner',
      slug: 'qa-in-agile-sprints',
      title: 'QA Role in Agile Sprints',
      duration: 8,
      content: `
<h2>QA Role in Agile Sprints</h2>
<p>In a 2-week sprint, QA Engineers are busy every single day. Here's what you do at each stage.</p>

<h3>Sprint Planning (Day 1)</h3>
<ul>
<li>Review user stories selected for the sprint</li>
<li>Ask clarifying questions about acceptance criteria</li>
<li>Estimate testing effort for each story</li>
<li>Identify stories that need new automation</li>
<li>Flag dependencies that might block testing</li>
</ul>

<h3>During the Sprint (Days 2-9)</h3>
<ul>
<li>Write test cases as stories are being developed</li>
<li>Review developer pull requests for testability</li>
<li>Test features as soon as they're code-complete (don't wait for all stories)</li>
<li>Write and update automation scripts</li>
<li>Report bugs immediately with clear reproduction steps</li>
<li>Attend daily standups to communicate testing status</li>
<li>Run regression suites to catch unintended side effects</li>
</ul>

<h3>Sprint End (Days 9-10)</h3>
<ul>
<li>Complete all testing for sprint stories</li>
<li>Run full regression suite</li>
<li>Update test documentation</li>
<li>Participate in sprint review / demo</li>
<li>Share quality metrics: bugs found, test coverage, pass rate</li>
<li>Participate in retrospective: what testing improvements can we make?</li>
</ul>

<h3>Common QA Challenges in Sprints</h3>
<p><strong>Late code delivery:</strong> If developers finish stories on the last day, there's no time for thorough testing. Solution: advocate for "development complete by Day 7" to allow 2-3 days of testing.</p>
<p><strong>Incomplete acceptance criteria:</strong> Vague stories lead to debates about whether something is a bug or a feature. Solution: insist on clear acceptance criteria during sprint planning.</p>
<p><strong>Regression risk:</strong> New features can break existing ones. Solution: maintain a solid automated regression suite.</p>
`
    },
    {
      id: '2-5', difficulty: 'beginner',
      slug: 'shift-left-testing',
      title: 'Shift-Left Testing Concept',
      duration: 6,
      content: `
<h2>Shift-Left Testing</h2>
<p>Shift-left testing is the practice of moving testing activities to the <strong>earliest possible stage</strong> of the software development lifecycle. Instead of testing only after code is written, you start testing during requirements, design, and coding phases.</p>

<h3>Why Shift Left?</h3>
<p>The cost of fixing a defect increases exponentially the later it's found:</p>
<ul>
<li>Defect found during requirements: <strong>$100</strong> to fix</li>
<li>Defect found during design: <strong>$500</strong> to fix</li>
<li>Defect found during coding: <strong>$1,000</strong> to fix</li>
<li>Defect found during testing: <strong>$5,000</strong> to fix</li>
<li>Defect found in production: <strong>$10,000+</strong> to fix</li>
</ul>
<p>Finding issues early saves enormous time, money, and customer frustration.</p>

<h3>Shift-Left Activities</h3>
<p><strong>Requirements phase:</strong> Review requirements for ambiguity, gaps, and testability. Create test scenarios before development starts.</p>
<p><strong>Design phase:</strong> Review architecture and design for potential issues. Plan test strategy.</p>
<p><strong>Coding phase:</strong> Collaborate with developers on unit tests. Review code for common defect patterns. Begin writing integration tests.</p>
<p><strong>Build phase:</strong> Automated tests run on every commit in CI/CD pipeline. Fast feedback on regressions.</p>

<h3>Practical Shift-Left Techniques</h3>
<ol>
<li>Participate in story refinement / grooming sessions</li>
<li>Write acceptance criteria in Given/When/Then format before development</li>
<li>Define test scenarios during sprint planning</li>
<li>Do pair testing with developers during development</li>
<li>Automate smoke tests that run on every code commit</li>
<li>Use static analysis tools to catch issues before testing</li>
</ol>
`
    },
    {
      id: '2-6', difficulty: 'beginner',
      slug: 'v-model',
      title: 'V-Model Explained',
      duration: 7,
      content: `
<h2>V-Model (Verification and Validation Model)</h2>
<p>The V-Model is an extension of the Waterfall model where each development phase has a corresponding testing phase. The left side of the V represents development (verification), and the right side represents testing (validation).</p>

<h3>The V-Model Structure</h3>
<pre><code>Requirements Analysis  ←→  Acceptance Testing (UAT)
    ↓                              ↑
  System Design        ←→  System Testing
    ↓                              ↑
  Architecture Design  ←→  Integration Testing
    ↓                              ↑
  Module Design        ←→  Unit Testing
    ↓                              ↑
        → → → Coding → → →</code></pre>

<h3>Verification (Left Side) vs Validation (Right Side)</h3>
<p><strong>Verification:</strong> "Are we building the product right?" — Reviews and inspections of documents without executing code.</p>
<p><strong>Validation:</strong> "Are we building the right product?" — Testing the actual software to ensure it meets requirements.</p>

<h3>Testing Levels in the V-Model</h3>
<p><strong>Unit Testing ↔ Module Design:</strong> Individual components tested in isolation. Written by developers.</p>
<p><strong>Integration Testing ↔ Architecture Design:</strong> Test interactions between modules. Verify APIs, data flow between components.</p>
<p><strong>System Testing ↔ System Design:</strong> Test the complete system end-to-end. Functional and non-functional testing.</p>
<p><strong>Acceptance Testing ↔ Requirements:</strong> Validate the system meets business requirements. Often done by end users or stakeholders.</p>

<h3>When to Use the V-Model</h3>
<p>The V-Model works best when requirements are clear, stable, and well-documented (medical devices, banking systems, government projects). It's less suitable for projects with rapidly changing requirements — Agile is better there.</p>

<div class="callout">
<strong>💡 Key Takeaway:</strong> Even in Agile environments, the V-Model's concept of mapping test levels to design phases is valuable. Unit tests validate module design, integration tests validate architecture decisions, and UAT validates requirements — regardless of methodology.
</div>
`
    },
    {
      id: '2-7', difficulty: 'beginner',
      slug: 'entry-exit-criteria',
      title: 'Entry and Exit Criteria',
      duration: 6,
      content: `
<h2>Entry and Exit Criteria</h2>
<p>Entry and exit criteria are the conditions that must be met to start or finish a testing phase. They prevent premature testing and incomplete sign-offs.</p>

<h3>Entry Criteria (When to start testing)</h3>
<p>You should not begin test execution until these conditions are met:</p>
<ul>
<li>Requirements are reviewed and approved</li>
<li>Test cases are written and reviewed</li>
<li>Test environment is set up and verified</li>
<li>Test data is prepared</li>
<li>A stable build is deployed (smoke test passed)</li>
<li>Required tools and access are available</li>
<li>Developer unit testing is complete</li>
</ul>

<h3>Exit Criteria (When to stop testing)</h3>
<p>Testing is considered complete when:</p>
<ul>
<li>All planned test cases have been executed</li>
<li>A target pass rate is achieved (e.g., 95% of tests pass)</li>
<li>All critical and high-priority defects are fixed and retested</li>
<li>Remaining open defects are triaged and accepted by stakeholders</li>
<li>Test summary report is prepared and reviewed</li>
<li>Regression testing is complete with no new critical issues</li>
<li>Product Owner signs off on quality</li>
</ul>

<h3>Why This Matters</h3>
<p><strong>Without entry criteria:</strong> QA starts testing on unstable builds, wasting time on environment issues instead of finding real bugs.</p>
<p><strong>Without exit criteria:</strong> There's no clear definition of "done," leading to either premature releases or endless testing cycles.</p>

<h3>Example: Login Feature</h3>
<pre><code>Entry Criteria:
✓ Login page UI development complete
✓ Backend API for authentication deployed to QA environment
✓ Test accounts created (valid user, locked user, expired user)
✓ Test cases reviewed by QA Lead

Exit Criteria:
✓ All 25 test cases executed
✓ 0 critical defects open
✓ 2 low-priority UI defects deferred (accepted by PO)
✓ Regression suite passed
✓ Test execution report generated</code></pre>
`
    },
  ],
  quiz: [
    { id: 'q2-1', question: 'How many phases does the SDLC typically have?', options: ['3', '4', '6', '8'], correctIndex: 2, explanation: 'The SDLC typically has 6 phases: Requirement Gathering, System Design, Implementation, Testing, Deployment, and Maintenance.' },
    { id: 'q2-2', question: 'In the STLC, what is created during the Requirement Analysis phase?', options: ['Test cases', 'Requirement Traceability Matrix (RTM)', 'Bug reports', 'Test plan'], correctIndex: 1, explanation: 'The RTM is created during Requirement Analysis to map requirements to test cases, ensuring complete coverage.' },
    { id: 'q2-3', question: 'What is the main advantage of Agile over Waterfall for QA?', options: ['Less documentation needed', 'Early and continuous testing with fast feedback loops', 'No testing phase required', 'Fewer bugs in the code'], correctIndex: 1, explanation: 'Agile allows testing throughout each iteration, providing fast feedback and catching issues early.' },
    { id: 'q2-4', question: 'In a 2-week sprint, when should QA start writing test cases?', options: ['After all development is complete', 'During the last 2 days', 'As soon as stories are selected in sprint planning', 'Only after the sprint review'], correctIndex: 2, explanation: 'QA should start writing test cases during sprint planning, as stories are being discussed and development begins.' },
    { id: 'q2-5', question: 'What does Shift-Left Testing mean?', options: ['Testing only on the left side of the screen', 'Moving testing earlier in the SDLC', 'Left-aligning all test reports', 'Moving the QA team to a different department'], correctIndex: 1, explanation: 'Shift-left testing means moving testing activities earlier — to requirements, design, and coding phases instead of only after development.' },
    { id: 'q2-6', question: 'In the V-Model, what testing level corresponds to Requirements Analysis?', options: ['Unit Testing', 'Integration Testing', 'System Testing', 'Acceptance Testing (UAT)'], correctIndex: 3, explanation: 'In the V-Model, Acceptance Testing validates that the system meets the original business requirements.' },
    { id: 'q2-7', question: 'What is an Entry Criterion for test execution?', options: ['All bugs are fixed', 'A stable build is deployed and smoke test passed', 'All users have been trained', 'The project deadline has passed'], correctIndex: 1, explanation: 'Test execution should not begin until a stable build is deployed and passes smoke testing.' },
    { id: 'q2-8', question: 'Which is NOT a Scrum ceremony?', options: ['Sprint Planning', 'Daily Standup', 'Waterfall Review', 'Sprint Retrospective'], correctIndex: 2, explanation: 'Waterfall Review is not a Scrum ceremony. The four ceremonies are Sprint Planning, Daily Standup, Sprint Review, and Sprint Retrospective.' },
    { id: 'q2-9', question: 'What does Verification mean in the V-Model?', options: ['Testing the code', 'Are we building the product right?', 'Are we building the right product?', 'Checking the deployment'], correctIndex: 1, explanation: 'Verification asks "Are we building the product right?" — checking that documents, designs, and processes are correct.' },
    { id: 'q2-10', question: 'When does the cost of fixing a defect become most expensive?', options: ['During requirements', 'During design', 'During testing', 'In production'], correctIndex: 3, explanation: 'Defects found in production are the most expensive to fix — 10-100x more than fixing during requirements phase.' },
  ],
};

export default module2;
