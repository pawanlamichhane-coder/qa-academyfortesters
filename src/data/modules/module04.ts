import { Module } from '../curriculum';

export const module4: Module = {
  id: 4, slug: 'agile-scrum', title: 'Agile & Scrum for QA',
  description: 'Learn how QA Engineers work effectively within Agile Scrum teams — ceremonies, acceptance criteria, BDD, and estimation.', icon: '🏃',
  lessons: [
    { id: '4-1', difficulty: 'beginner', slug: 'scrum-ceremonies', title: 'Scrum Ceremonies', duration: 10, content: `
<h2>Scrum Ceremonies</h2>
<p>Scrum has four core ceremonies (events) that create regularity and minimize unnecessary meetings.</p>

<h3>1. Sprint Planning</h3>
<p><strong>Duration:</strong> 2-4 hours for a 2-week sprint.</p>
<p><strong>Purpose:</strong> Decide what work will be completed in the sprint.</p>
<p><strong>QA's role:</strong> Review user stories, estimate test effort, identify automation candidates, clarify acceptance criteria, flag dependencies.</p>
<p><strong>Output:</strong> Sprint backlog — the list of stories committed for the sprint.</p>

<h3>2. Daily Standup (Daily Scrum)</h3>
<p><strong>Duration:</strong> 15 minutes max.</p>
<p><strong>Format:</strong> Each team member answers: What did I do yesterday? What will I do today? Any blockers?</p>
<p><strong>QA example:</strong> "Yesterday I tested the payment integration — found 2 bugs, logged them. Today I'll start testing the order history page. Blocked on: staging environment is down."</p>

<h3>3. Sprint Review (Demo)</h3>
<p><strong>Duration:</strong> 1-2 hours.</p>
<p><strong>Purpose:</strong> Demonstrate completed work to stakeholders and gather feedback.</p>
<p><strong>QA's role:</strong> Help demonstrate features, share quality metrics (bugs found/fixed, test coverage, automation progress), highlight any known issues.</p>

<h3>4. Sprint Retrospective</h3>
<p><strong>Duration:</strong> 1-1.5 hours.</p>
<p><strong>Purpose:</strong> Reflect on the sprint process. What went well? What didn't? What can we improve?</p>
<p><strong>QA topics:</strong> Test environment stability, automation pipeline speed, communication gaps, defect escape analysis (bugs that reached production).</p>
` },
    { id: '4-2', difficulty: 'beginner', slug: 'qa-tasks-in-sprint', title: 'QA Tasks in Each Sprint', duration: 8, content: `
<h2>QA Tasks in Each Sprint Phase</h2>

<h3>Before the Sprint (Grooming/Refinement)</h3>
<ul>
<li>Review upcoming user stories in the backlog</li>
<li>Identify unclear or incomplete acceptance criteria</li>
<li>Estimate testing effort for each story</li>
<li>Flag high-risk stories that need extra attention</li>
</ul>

<h3>Sprint Start (Days 1-2)</h3>
<ul>
<li>Break down stories into test scenarios</li>
<li>Write initial test cases for committed stories</li>
<li>Prepare test data and environment</li>
<li>Identify what can be automated vs tested manually</li>
</ul>

<h3>Mid-Sprint (Days 3-7)</h3>
<ul>
<li>Test features as developers complete them (don't wait!)</li>
<li>Log bugs immediately with detailed reproduction steps</li>
<li>Write and execute automation scripts for completed features</li>
<li>Retest fixed bugs</li>
<li>Run daily/nightly regression suites</li>
<li>Update test cases based on implementation details</li>
</ul>

<h3>Sprint End (Days 8-10)</h3>
<ul>
<li>Complete all testing for sprint stories</li>
<li>Run full regression suite</li>
<li>Prepare quality metrics for sprint review</li>
<li>Update test documentation</li>
<li>Verify all high/critical bugs are resolved</li>
<li>Sign off on stories that pass acceptance criteria</li>
</ul>
` },
    { id: '4-3', difficulty: 'beginner', slug: 'acceptance-criteria', title: 'Writing Acceptance Criteria', duration: 8, content: `
<h2>Writing Acceptance Criteria</h2>
<p>Acceptance criteria define the conditions that a user story must satisfy to be considered complete. They're the contract between the Product Owner, Developer, and QA.</p>

<h3>Format: Given/When/Then (Gherkin)</h3>
<p>The most popular format uses the Given/When/Then structure from BDD (Behavior-Driven Development):</p>
<pre><code>Given [a precondition or context]
When [an action is performed]
Then [the expected outcome]</code></pre>

<h3>Example User Story</h3>
<pre><code>As a registered user
I want to reset my password
So that I can regain access to my account

Acceptance Criteria:

AC1: Successful password reset request
Given I am on the login page
When I click "Forgot Password" and enter my registered email
Then I should receive a password reset email within 2 minutes

AC2: Password reset link expiry
Given I have received a password reset email
When I click the reset link after 24 hours
Then I should see a message "This link has expired. Please request a new one."

AC3: New password validation
Given I am on the password reset page
When I enter a new password shorter than 8 characters
Then I should see an error "Password must be at least 8 characters"

AC4: Successful password change
Given I am on the password reset page with a valid link
When I enter a valid new password and confirm it
Then my password should be updated and I should be redirected to login

AC5: Old password invalidation
Given I have successfully changed my password
When I try to log in with my old password
Then I should see "Invalid email or password"</code></pre>

<h3>Good Acceptance Criteria Characteristics</h3>
<ul>
<li><strong>Testable:</strong> Each criterion can be verified with a specific test</li>
<li><strong>Clear:</strong> No ambiguity — anyone can understand the expected behavior</li>
<li><strong>Independent:</strong> Each criterion tests one specific behavior</li>
<li><strong>Measurable:</strong> Include specific values ("within 2 minutes", "at least 8 characters")</li>
</ul>
` },
    { id: '4-4', difficulty: 'beginner', slug: 'definition-of-done', title: 'Definition of Done', duration: 5, content: `
<h2>Definition of Done (DoD)</h2>
<p>The Definition of Done is a shared checklist that every user story must satisfy before it can be marked as "Done." It ensures consistency and prevents incomplete work from being shipped.</p>

<h3>Example Definition of Done</h3>
<pre><code>A user story is "Done" when:
✅ Code is written and peer-reviewed
✅ Unit tests are written and passing (> 80% coverage)
✅ Code is merged to the main branch
✅ Feature is deployed to the staging environment
✅ All acceptance criteria are met and verified by QA
✅ No critical or high-severity bugs are open
✅ Regression tests pass
✅ UI is responsive on mobile and desktop
✅ API documentation is updated (if applicable)
✅ Product Owner has reviewed and approved
✅ Automated tests are added to the CI/CD pipeline</code></pre>

<h3>Why DoD Matters for QA</h3>
<p>Without a clear DoD, "done" is subjective. A developer might consider a feature done when the code compiles. A PM might consider it done when the demo looks good. QA might have a list of 10 things that still need testing.</p>
<p>The DoD eliminates these disagreements by defining a shared standard that everyone agrees to.</p>
` },
    { id: '4-5', difficulty: 'beginner', slug: 'story-points', title: 'Story Points and Estimation', duration: 7, content: `
<h2>Story Points and Estimation</h2>
<p>Story points are a relative measure of the effort, complexity, and uncertainty involved in completing a user story. They're not hours — they're relative comparisons.</p>

<h3>The Fibonacci Scale</h3>
<p>Most teams use Fibonacci numbers: 1, 2, 3, 5, 8, 13, 21</p>
<pre><code>1 point  = Very simple (change a label, fix a typo)
2 points = Simple (add a form field with basic validation)
3 points = Moderate (new API endpoint with basic CRUD)
5 points = Complex (new feature with multiple integrations)
8 points = Very complex (major feature with edge cases)
13 points = Should probably be broken into smaller stories
21 points = Way too big — break it down!</code></pre>

<h3>QA Estimation</h3>
<p>When estimating story points as a QA, consider:</p>
<ul>
<li><strong>Test complexity:</strong> How many test cases are needed?</li>
<li><strong>Data setup:</strong> How much test data preparation is required?</li>
<li><strong>Integration points:</strong> How many systems interact?</li>
<li><strong>Automation feasibility:</strong> Can this be automated? How long will that take?</li>
<li><strong>Risk:</strong> What's the blast radius if this feature breaks?</li>
</ul>

<h3>Planning Poker</h3>
<p>The team estimates together using Planning Poker: each member secretly selects a story point value, then all reveal simultaneously. If estimates differ significantly, discuss and re-estimate. This avoids anchoring bias.</p>
` },
    { id: '4-6', difficulty: 'beginner', slug: 'bdd-concepts', title: 'BDD Concepts: Given/When/Then', duration: 8, content: `
<h2>Behavior-Driven Development (BDD)</h2>
<p>BDD is a methodology that bridges the gap between business stakeholders, developers, and testers by using a shared language to describe software behavior.</p>

<h3>The Gherkin Language</h3>
<p>BDD uses Gherkin syntax — a structured, human-readable format for writing test scenarios:</p>
<pre><code>Feature: User Login
  As a registered user
  I want to log into my account
  So that I can access my personalized dashboard

  Scenario: Successful login with valid credentials
    Given I am on the login page
    And the user "john@example.com" exists with password "Secure@123"
    When I enter "john@example.com" in the email field
    And I enter "Secure@123" in the password field
    And I click the "Sign In" button
    Then I should be redirected to the dashboard
    And I should see "Welcome, John" on the page

  Scenario: Failed login with invalid password
    Given I am on the login page
    When I enter "john@example.com" in the email field
    And I enter "WrongPassword" in the password field
    And I click the "Sign In" button
    Then I should see "Invalid email or password" error message
    And I should remain on the login page</code></pre>

<h3>BDD Tools</h3>
<ul>
<li><strong>Cucumber:</strong> The original BDD framework. Supports Java, Ruby, JavaScript. Maps Gherkin to step definitions.</li>
<li><strong>SpecFlow:</strong> Cucumber for .NET</li>
<li><strong>Behave:</strong> BDD framework for Python</li>
<li><strong>Playwright + Cucumber:</strong> Modern combination for web UI BDD</li>
</ul>

<h3>Benefits of BDD for QA</h3>
<ul>
<li>Tests are readable by non-technical stakeholders</li>
<li>Acceptance criteria serve as living documentation</li>
<li>Scenarios can be automated directly</li>
<li>Shared language reduces misunderstandings</li>
</ul>
` },
    { id: '4-7', difficulty: 'beginner', slug: 'working-with-user-stories', title: 'Working with User Stories as QA', duration: 7, content: `
<h2>Working with User Stories as QA</h2>

<h3>Anatomy of a User Story</h3>
<pre><code>As a [type of user]
I want [an action or feature]
So that [a benefit or reason]</code></pre>

<h3>QA's Approach to User Stories</h3>
<p><strong>Step 1: Read and Understand</strong> — Read the story and acceptance criteria carefully. Ask: "Do I fully understand what success looks like?"</p>
<p><strong>Step 2: Identify Gaps</strong> — Look for missing acceptance criteria:</p>
<ul>
<li>What are the error scenarios?</li>
<li>What about edge cases (empty data, max length, special characters)?</li>
<li>How does this interact with existing features?</li>
<li>What are the performance expectations?</li>
<li>What about mobile responsiveness?</li>
</ul>
<p><strong>Step 3: Ask Questions</strong> — Bring your questions to grooming or Three Amigos sessions. Better to ask now than discover ambiguity during testing.</p>
<p><strong>Step 4: Plan Test Scenarios</strong> — Map each acceptance criterion to one or more test cases. Identify positive, negative, and edge case tests.</p>
<p><strong>Step 5: Estimate Test Effort</strong> — Consider the number of test cases, data setup complexity, and automation effort.</p>

<h3>INVEST Criteria for Good Stories</h3>
<p>Good user stories are:</p>
<ul>
<li><strong>I</strong>ndependent — Not dependent on other stories</li>
<li><strong>N</strong>egotiable — Details can be discussed</li>
<li><strong>V</strong>aluable — Delivers value to the user</li>
<li><strong>E</strong>stimable — Team can estimate the effort</li>
<li><strong>S</strong>mall — Can be completed in one sprint</li>
<li><strong>T</strong>estable — Has clear acceptance criteria that QA can verify</li>
</ul>
` },
  ],
  quiz: [
    { id: 'q4-1', question: 'How long should a Daily Standup last?', options: ['30 minutes', '15 minutes max', '1 hour', 'As long as needed'], correctIndex: 1, explanation: 'Daily Standups are time-boxed to 15 minutes maximum. They\'re brief status updates, not problem-solving sessions.' },
    { id: 'q4-2', question: 'What format does BDD use for writing scenarios?', options: ['If/Then/Else', 'Given/When/Then', 'Setup/Execute/Verify', 'Input/Process/Output'], correctIndex: 1, explanation: 'BDD uses Given/When/Then (Gherkin) syntax: Given a precondition, When an action happens, Then expect a result.' },
    { id: 'q4-3', question: 'What is the Definition of Done?', options: ['When the developer says the code is done', 'A shared checklist every story must satisfy before being marked complete', 'When all bugs are fixed', 'When the sprint ends'], correctIndex: 1, explanation: 'DoD is a team-agreed checklist (code reviewed, tests passing, QA verified, etc.) that defines when a story is truly done.' },
    { id: 'q4-4', question: 'Which Fibonacci number would you assign to a very complex story with multiple integrations?', options: ['1', '3', '8', '2'], correctIndex: 2, explanation: '8 story points indicates a very complex story. 13+ should be broken into smaller stories.' },
    { id: 'q4-5', question: 'Which Scrum ceremony focuses on process improvement?', options: ['Sprint Planning', 'Daily Standup', 'Sprint Review', 'Sprint Retrospective'], correctIndex: 3, explanation: 'The Sprint Retrospective is dedicated to reflecting on the process and identifying improvements.' },
    { id: 'q4-6', question: 'What does INVEST stand for in user stories?', options: ['Independent, Negotiable, Valuable, Estimable, Small, Testable', 'Integrated, Narrow, Valid, Easy, Secure, Tested', 'Innovative, New, Verified, Enhanced, Stable, Tracked', 'None of the above'], correctIndex: 0, explanation: 'INVEST: Independent, Negotiable, Valuable, Estimable, Small, Testable — the criteria for well-written user stories.' },
    { id: 'q4-7', question: 'When should QA start testing features in a sprint?', options: ['Only on the last day', 'As soon as each feature is code-complete', 'After all stories are developed', 'Only during the sprint review'], correctIndex: 1, explanation: 'QA should test features as developers complete them throughout the sprint, not wait until the end.' },
    { id: 'q4-8', question: 'What is Planning Poker used for?', options: ['Deciding who takes vacation', 'Estimating story points collaboratively', 'Assigning bugs to developers', 'Planning the sprint demo'], correctIndex: 1, explanation: 'Planning Poker is a collaborative estimation technique where team members independently estimate story points, then discuss differences.' },
    { id: 'q4-9', question: 'Good acceptance criteria should be:', options: ['Vague to allow flexibility', 'Testable, clear, independent, and measurable', 'Written only by developers', 'As brief as possible'], correctIndex: 1, explanation: 'Good acceptance criteria are testable (verifiable with a test), clear (unambiguous), independent, and measurable (specific values).' },
    { id: 'q4-10', question: 'What should QA discuss during Sprint Retrospective?', options: ['Only the bugs they found', 'Process improvements like test environment stability and automation coverage', 'Nothing — retrospective is only for developers', 'Their personal career goals'], correctIndex: 1, explanation: 'QA contributes to retrospectives by discussing process improvements: environment stability, automation gaps, communication issues, and testing workflow improvements.' },
  ],
};

export default module4;
