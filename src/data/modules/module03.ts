import { Module } from '../curriculum';

export const module3: Module = {
  id: 3,
  slug: 'manual-testing',
  title: 'Manual Testing Fundamentals',
  description: 'Master test types, test case design, bug reporting, and essential testing techniques used in every QA role.',
  icon: '📋',
  lessons: [
    {
      id: '3-1', difficulty: 'beginner',
      slug: 'types-of-testing',
      title: 'Types of Testing',
      duration: 15,
      content: `
<h2>Types of Testing</h2>
<p>Testing is categorized in multiple ways. Understanding each type helps you choose the right approach for each situation.</p>

<h3>Functional Testing</h3>
<p>Verifies that each function of the software operates according to the requirement specification. You test what the system does — input data, processing, and output.</p>
<p>Example: Test that a login form accepts valid credentials and rejects invalid ones.</p>

<h3>Non-Functional Testing</h3>
<p>Tests how the system performs, not what it does. Includes performance, usability, security, reliability, and compatibility testing.</p>
<p>Example: Test that the login page loads within 2 seconds under 1000 concurrent users.</p>

<h3>Regression Testing</h3>
<p>Re-running existing tests after code changes to ensure nothing is broken. This is the #1 candidate for automation.</p>
<p>Example: After fixing a bug in the payment module, run all checkout-related tests to verify nothing else broke.</p>

<h3>Smoke Testing</h3>
<p>A quick, shallow set of tests to verify the build is stable enough for further testing. Also called "Build Verification Testing."</p>
<p>Example: After deployment, verify the app launches, login works, and main navigation functions — if any fail, reject the build.</p>

<h3>Sanity Testing</h3>
<p>A narrow, focused test of specific functionality after receiving a build with minor changes. Unlike smoke testing (which is broad and shallow), sanity testing is narrow and deep.</p>
<p>Example: A bug fix was applied to the search feature — test just the search feature thoroughly.</p>

<h3>Exploratory Testing</h3>
<p>Unscripted testing where the tester simultaneously learns, designs, and executes tests. Relies on the tester's creativity, experience, and intuition.</p>
<p>Example: Spend 30 minutes exploring the shopping cart feature, trying unexpected actions like adding 999 items, using special characters in coupon codes, or navigating back and forth rapidly.</p>

<h3>User Acceptance Testing (UAT)</h3>
<p>The final validation phase where actual end users or stakeholders test the system to confirm it meets business requirements and is ready for production.</p>

<h3>Black Box, White Box, Grey Box</h3>
<p><strong>Black Box:</strong> Tester has no knowledge of internal code. Tests based purely on inputs and expected outputs. Most manual testing is black box.</p>
<p><strong>White Box:</strong> Tester has full access to source code. Tests internal logic, code paths, and branches. Usually done by developers (unit testing).</p>
<p><strong>Grey Box:</strong> Tester has partial knowledge of the system's internals. Common in integration testing and API testing where you know the API contracts but not the full implementation.</p>
`
    },
    {
      id: '3-2', difficulty: 'beginner',
      slug: 'test-levels',
      title: 'Test Levels: Unit, Integration, System, Acceptance',
      duration: 8,
      content: `
<h2>Test Levels</h2>
<p>Test levels define the scope and granularity of testing. Think of them as a pyramid — more tests at the bottom (unit), fewer at the top (acceptance).</p>

<h3>Unit Testing</h3>
<p><strong>What:</strong> Testing individual components (functions, methods, classes) in isolation.</p>
<p><strong>Who:</strong> Developers, sometimes SDETs.</p>
<p><strong>Tools:</strong> JUnit, TestNG (Java), pytest (Python), Jest (JavaScript).</p>
<p><strong>Example:</strong> Test that a calculateTax(amount, rate) function returns the correct tax for various inputs.</p>

<h3>Integration Testing</h3>
<p><strong>What:</strong> Testing the interaction between two or more components/modules.</p>
<p><strong>Who:</strong> Developers and QA Engineers.</p>
<p><strong>Types:</strong> Big bang (test all together), top-down (test from UI down), bottom-up (test from database up), sandwich (combination).</p>
<p><strong>Example:</strong> Test that when the "Place Order" button is clicked, the order service correctly calls the payment API and updates the inventory database.</p>

<h3>System Testing</h3>
<p><strong>What:</strong> Testing the complete, integrated system end-to-end.</p>
<p><strong>Who:</strong> QA Engineers.</p>
<p><strong>Includes:</strong> Functional testing, performance testing, security testing, usability testing.</p>
<p><strong>Example:</strong> Test the entire user journey: register → browse products → add to cart → checkout → receive confirmation email.</p>

<h3>Acceptance Testing</h3>
<p><strong>What:</strong> Validating the system meets business requirements. The "final approval" before release.</p>
<p><strong>Types:</strong> Alpha testing (internal users), Beta testing (external users), UAT (business stakeholders).</p>
<p><strong>Example:</strong> The Product Owner verifies that all user stories for the sprint are implemented correctly and meet acceptance criteria.</p>

<h3>The Test Pyramid</h3>
<pre><code>        /\\
       /  \\       ← Few E2E / Acceptance tests (slow, expensive)
      / UI \\
     /------\\
    / Integr \\    ← Medium integration tests
   /----------\\
  /   Unit     \\  ← Many unit tests (fast, cheap)
 /______________\\</code></pre>
<p>The test pyramid suggests having many fast unit tests, fewer integration tests, and even fewer slow end-to-end tests. This gives the best balance of speed, coverage, and cost.</p>
`
    },
    {
      id: '3-3', difficulty: 'beginner',
      slug: 'test-case-writing',
      title: 'Test Case Writing: Structure and Best Practices',
      duration: 15,
      content: `
<h2>Test Case Writing</h2>
<p>A test case is a documented set of conditions and steps to verify a specific feature or functionality. Writing good test cases is a core QA skill.</p>

<h3>Test Case Structure</h3>
<table>
<thead><tr><th>Field</th><th>Description</th></tr></thead>
<tbody>
<tr><td>Test Case ID</td><td>Unique identifier (e.g., TC_LOGIN_001)</td></tr>
<tr><td>Title</td><td>Brief, descriptive title</td></tr>
<tr><td>Module</td><td>Feature/module being tested</td></tr>
<tr><td>Priority</td><td>High / Medium / Low</td></tr>
<tr><td>Preconditions</td><td>Setup needed before execution</td></tr>
<tr><td>Test Steps</td><td>Numbered steps to perform</td></tr>
<tr><td>Test Data</td><td>Specific data to use</td></tr>
<tr><td>Expected Result</td><td>What should happen</td></tr>
<tr><td>Actual Result</td><td>What actually happened (filled during execution)</td></tr>
<tr><td>Status</td><td>Pass / Fail / Blocked / Not Executed</td></tr>
</tbody>
</table>

<h3>10 Real Example Test Cases for a Login Page</h3>
<pre><code>TC_LOGIN_001: Valid Login
Preconditions: User account exists with email "user@test.com" and password "Pass@123"
Steps:
  1. Navigate to the login page
  2. Enter "user@test.com" in the email field
  3. Enter "Pass@123" in the password field
  4. Click the "Sign In" button
Expected Result: User is redirected to the dashboard. Welcome message displays the user's name.
Priority: High

TC_LOGIN_002: Invalid Password
Steps:
  1. Navigate to the login page
  2. Enter valid email "user@test.com"
  3. Enter incorrect password "WrongPass1"
  4. Click "Sign In"
Expected Result: Error message "Invalid email or password" is displayed. User remains on login page.
Priority: High

TC_LOGIN_003: Empty Email Field
Steps:
  1. Navigate to the login page
  2. Leave email field empty
  3. Enter valid password
  4. Click "Sign In"
Expected Result: Validation message "Email is required" appears below the email field.
Priority: High

TC_LOGIN_004: Invalid Email Format
Steps:
  1. Enter "usertest.com" (missing @) in email field
  2. Enter valid password
  3. Click "Sign In"
Expected Result: Validation error "Please enter a valid email address" is shown.
Priority: Medium

TC_LOGIN_005: SQL Injection in Email Field
Steps:
  1. Enter "admin' OR '1'='1" in email field
  2. Enter any password
  3. Click "Sign In"
Expected Result: Login fails with generic error. No data exposed. No system crash.
Priority: High

TC_LOGIN_006: Remember Me Functionality
Preconditions: Valid user account exists
Steps:
  1. Login with valid credentials
  2. Check "Remember Me" checkbox
  3. Close the browser completely
  4. Reopen browser and navigate to the app
Expected Result: User is automatically logged in without re-entering credentials.
Priority: Medium

TC_LOGIN_007: Password Masking
Steps:
  1. Navigate to login page
  2. Enter password in the password field
Expected Result: Password characters are masked (shown as dots or asterisks).
Priority: Medium

TC_LOGIN_008: Account Lockout After Failed Attempts
Steps:
  1. Enter valid email
  2. Enter incorrect password
  3. Repeat step 2 five times consecutively
Expected Result: Account is locked. Message says "Account locked. Try again after 30 minutes."
Priority: High

TC_LOGIN_009: Forgot Password Link
Steps:
  1. Navigate to login page
  2. Click "Forgot Password?" link
Expected Result: User is redirected to password reset page with email input field.
Priority: Medium

TC_LOGIN_010: Login with Keyboard (Enter Key)
Steps:
  1. Enter valid email and password
  2. Press Enter key instead of clicking "Sign In" button
Expected Result: Login succeeds. Same behavior as clicking the button.
Priority: Low</code></pre>

<h3>Best Practices</h3>
<ul>
<li>Write steps that anyone can follow — be specific, not vague</li>
<li>One expected result per test case (don't test multiple things)</li>
<li>Include both positive (happy path) and negative test cases</li>
<li>Cover boundary values and edge cases</li>
<li>Keep test cases independent — one should not depend on another</li>
<li>Use consistent naming conventions for IDs</li>
<li>Review test cases with peers before execution</li>
</ul>
`
    },
    {
      id: '3-4', difficulty: 'beginner',
      slug: 'test-plan',
      title: 'Test Plan: How to Write One',
      duration: 10,
      content: `
<h2>How to Write a Test Plan</h2>
<p>A test plan is a comprehensive document that describes the testing scope, approach, resources, and schedule. It's the master blueprint for all testing activities.</p>

<h3>Test Plan Template</h3>
<pre><code>1. INTRODUCTION
   1.1 Purpose — Why this test plan exists
   1.2 Scope — What features/modules will be tested
   1.3 Out of Scope — What will NOT be tested (and why)

2. TEST OBJECTIVES
   - What we aim to validate
   - Quality goals (e.g., < 5 critical defects at release)

3. TEST STRATEGY
   3.1 Test Types — Functional, regression, smoke, performance, security
   3.2 Test Levels — Unit, integration, system, acceptance
   3.3 Manual vs Automated — Which tests will be automated

4. TEST SCOPE
   4.1 Features to be Tested
   4.2 Features NOT to be Tested (with justification)

5. TEST ENVIRONMENT
   - Hardware, software, browsers, OS versions
   - Test server URLs
   - Database details

6. TEST DATA
   - Test accounts needed
   - Sample data requirements

7. ENTRY & EXIT CRITERIA
   7.1 Entry Criteria — Conditions to start testing
   7.2 Exit Criteria — Conditions to stop testing

8. DEFECT MANAGEMENT
   - Bug tracking tool (e.g., Jira)
   - Severity and priority definitions
   - Bug triage process

9. RESOURCE PLAN
   - Team members and roles
   - Responsibilities matrix

10. SCHEDULE
    - Milestones and deadlines
    - Test execution timeline

11. RISKS & MITIGATION
    - Identified risks (e.g., late delivery, environment issues)
    - Mitigation strategies

12. SIGN-OFF
    - Approval by QA Lead, Dev Lead, Product Owner</code></pre>

<h3>Tips for Writing a Good Test Plan</h3>
<p><strong>Keep it practical:</strong> A test plan that sits in a drawer is worthless. Write something the team will actually reference.</p>
<p><strong>Be specific about scope:</strong> Clearly listing what's NOT being tested is as important as what IS being tested.</p>
<p><strong>Update it:</strong> A test plan is a living document. Update it as requirements change.</p>
<p><strong>Get buy-in:</strong> Have stakeholders review and approve the plan. This prevents surprises later.</p>
`
    },
    {
      id: '3-5', difficulty: 'beginner',
      slug: 'test-scenario-vs-case',
      title: 'Test Scenario vs Test Case vs Test Script',
      duration: 5,
      content: `
<h2>Test Scenario vs Test Case vs Test Script</h2>

<h3>Test Scenario</h3>
<p>A high-level description of what to test. It describes the "what" without the "how."</p>
<p><strong>Example:</strong> "Verify that a user can log in with valid credentials."</p>
<p>One test scenario can generate multiple test cases.</p>

<h3>Test Case</h3>
<p>A detailed, step-by-step instruction for testing a specific scenario. Includes preconditions, steps, test data, and expected results.</p>
<p><strong>Example:</strong> See the 10 login test cases from the previous lesson — each is a detailed test case derived from the login scenario.</p>

<h3>Test Script</h3>
<p>An automated version of a test case — actual code written in a programming language or tool that executes the test steps automatically.</p>
<p><strong>Example (Selenium Java):</strong></p>
<pre><code>@Test
public void testValidLogin() {
    driver.get("https://example.com/login");
    driver.findElement(By.id("email")).sendKeys("user@test.com");
    driver.findElement(By.id("password")).sendKeys("Pass@123");
    driver.findElement(By.id("submit")).click();
    
    String welcomeText = driver.findElement(By.id("welcome")).getText();
    Assert.assertTrue(welcomeText.contains("Welcome"));
}</code></pre>

<h3>Relationship</h3>
<pre><code>Test Scenario (high-level, what to test)
  └── Test Case 1 (detailed steps for positive path)
  └── Test Case 2 (detailed steps for negative path)
  └── Test Case 3 (edge case)
       └── Test Script (automated code for Test Case 3)</code></pre>
`
    },
    {
      id: '3-6', difficulty: 'beginner',
      slug: 'bug-lifecycle',
      title: 'Bug/Defect Life Cycle',
      duration: 8,
      content: `
<h2>Bug/Defect Life Cycle</h2>
<p>Every bug goes through a series of states from discovery to closure. Understanding this lifecycle is essential for effective defect management.</p>

<h3>Bug States</h3>
<pre><code>New → Open → Assigned → In Progress → Fixed → Ready for Retest → 
  → Retest → Verified/Closed
                                        ↘ Reopen (if not fixed)</code></pre>

<p><strong>New:</strong> Bug is logged by the tester. Initial state.</p>
<p><strong>Open:</strong> Bug is reviewed and accepted as valid by the QA Lead or Project Manager.</p>
<p><strong>Assigned:</strong> Bug is assigned to the responsible developer.</p>
<p><strong>In Progress:</strong> Developer is actively working on the fix.</p>
<p><strong>Fixed:</strong> Developer has applied the fix and updated the status.</p>
<p><strong>Ready for Retest:</strong> Fix is deployed to the QA environment.</p>
<p><strong>Retest:</strong> QA retests the bug with the same steps that originally found it.</p>
<p><strong>Verified/Closed:</strong> Bug is confirmed fixed. Status is closed.</p>
<p><strong>Reopen:</strong> If the fix doesn't work, the bug is reopened and sent back to the developer.</p>

<h3>Additional States</h3>
<p><strong>Deferred:</strong> Bug is valid but will be fixed in a future release (low priority or out of scope).</p>
<p><strong>Duplicate:</strong> Same bug has already been reported.</p>
<p><strong>Rejected/Invalid:</strong> The reported behavior is working as designed, or the bug cannot be reproduced.</p>
<p><strong>Not Reproducible:</strong> The tester or developer cannot reproduce the issue with the given steps.</p>

<h3>Priority vs Severity</h3>
<table>
<thead><tr><th>Severity</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>Impact on the system</td><td>Urgency of the fix</td></tr>
<tr><td>Set by QA/Tester</td><td>Set by Product Owner/Manager</td></tr>
<tr><td>Technical perspective</td><td>Business perspective</td></tr>
</tbody>
</table>

<p><strong>High Severity, High Priority:</strong> App crashes on login — affects all users, must fix immediately.</p>
<p><strong>High Severity, Low Priority:</strong> App crashes on a feature used by 0.1% of users — severe but not urgent.</p>
<p><strong>Low Severity, High Priority:</strong> Company logo is wrong on the homepage — not a crash, but the CEO wants it fixed now.</p>
<p><strong>Low Severity, Low Priority:</strong> Minor typo on a rarely visited help page.</p>
`
    },
    {
      id: '3-7', difficulty: 'beginner',
      slug: 'bug-report-writing',
      title: 'Bug Report Writing with Examples',
      duration: 10,
      content: `
<h2>Bug Report Writing</h2>
<p>A well-written bug report saves hours of back-and-forth. Developers should be able to reproduce the issue from your report alone.</p>

<h3>Bug Report Template</h3>
<pre><code>Bug ID: BUG-001
Title: [Short, descriptive summary]
Module: [Feature/module name]
Environment: [Browser, OS, URL, app version]
Severity: Critical / Major / Minor / Trivial
Priority: High / Medium / Low
Reporter: [Your name]
Date: [Date reported]

Description:
[Detailed description of the issue]

Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected Result:
[What should happen]

Actual Result:
[What actually happened]

Attachments:
[Screenshots, videos, logs]

Additional Notes:
[Any extra context - frequency, workaround, related bugs]</code></pre>

<h3>5 Real Example Bug Reports</h3>

<pre><code>BUG-001: Login button unresponsive after entering valid credentials on Safari
Module: Authentication
Environment: Safari 17.2, macOS Sonoma, Production (app.example.com)
Severity: Critical | Priority: High

Steps to Reproduce:
1. Open app.example.com in Safari 17.2
2. Enter valid email: user@test.com
3. Enter valid password: Pass@123
4. Click "Sign In" button

Expected Result: User should be logged in and redirected to dashboard.
Actual Result: Nothing happens. Button appears clicked (visual feedback) but no request is sent. No error messages. Console shows: "TypeError: fetch is not defined."
Note: Works correctly in Chrome 120 and Firefox 121. Safari-specific issue.

---

BUG-002: Cart total shows $0.00 when removing the last item and re-adding
Module: Shopping Cart
Environment: Chrome 120, Windows 11, staging.example.com v2.4.1
Severity: Major | Priority: High

Steps to Reproduce:
1. Add Product A ($29.99) to cart
2. Go to cart page
3. Remove Product A (cart is now empty)
4. Navigate back to product listing
5. Add Product A to cart again

Expected Result: Cart total should show $29.99
Actual Result: Cart total shows $0.00 despite Product A being listed in the cart with quantity 1.
Note: Refreshing the page fixes the total. Issue appears to be a frontend state management bug.

---

BUG-003: Password reset email contains broken link
Module: Account Recovery
Environment: All browsers, Production
Severity: Critical | Priority: High

Steps to Reproduce:
1. Click "Forgot Password" on login page
2. Enter registered email address
3. Click "Send Reset Link"
4. Open the reset email
5. Click the reset link in the email

Expected Result: Link should open the password reset form
Actual Result: Link leads to 404 page. URL shows "https://example.com/reset?token=abc123" but correct URL should be "https://app.example.com/reset?token=abc123" (missing "app" subdomain).

---

BUG-004: Date picker allows selecting past dates for flight booking
Module: Flight Search
Environment: Chrome 120, Windows 11, staging
Severity: Minor | Priority: Medium

Steps to Reproduce:
1. Navigate to flight search page
2. Click on "Departure Date" date picker
3. Select yesterday's date

Expected Result: Past dates should be grayed out and non-selectable
Actual Result: Past dates are selectable. Submitting search with past date returns "No flights available" error.

---

BUG-005: Profile image upload accepts files larger than 5MB without error
Module: User Profile
Environment: Firefox 121, Ubuntu 22.04, staging
Severity: Minor | Priority: Low

Steps to Reproduce:
1. Go to Profile > Edit Profile
2. Click "Upload Photo"
3. Select a 15MB image file

Expected Result: Error message "File size must be under 5MB"
Actual Result: Upload appears to succeed but image never displays. No error shown to user. Server returns 413 in network tab but error is not handled by frontend.</code></pre>
`
    },
    {
      id: '3-8', difficulty: 'beginner',
      slug: 'testing-techniques',
      title: 'Testing Techniques',
      duration: 12,
      content: `
<h2>Testing Techniques</h2>
<p>Test design techniques help you create effective test cases with optimal coverage while minimizing the number of tests.</p>

<h3>Equivalence Partitioning (EP)</h3>
<p>Divide input data into groups (partitions) where all values in a group are expected to behave the same way. Test one value from each partition.</p>
<p><strong>Example:</strong> An age field accepts 18-65.</p>
<ul>
<li>Valid partition: 18-65 (test with 30)</li>
<li>Invalid partition 1: Below 18 (test with 10)</li>
<li>Invalid partition 2: Above 65 (test with 70)</li>
<li>Invalid partition 3: Negative numbers (test with -1)</li>
<li>Invalid partition 4: Non-numeric (test with "abc")</li>
</ul>
<p>Instead of testing every age from 1 to 100, you test just 5 representative values.</p>

<h3>Boundary Value Analysis (BVA)</h3>
<p>Bugs often lurk at boundaries. Test the exact boundary values and values just inside/outside.</p>
<p><strong>Example:</strong> Age field accepts 18-65. Test these exact values:</p>
<ul>
<li>17 (just below minimum — invalid)</li>
<li>18 (minimum boundary — valid)</li>
<li>19 (just above minimum — valid)</li>
<li>64 (just below maximum — valid)</li>
<li>65 (maximum boundary — valid)</li>
<li>66 (just above maximum — invalid)</li>
</ul>

<h3>Decision Table Testing</h3>
<p>When multiple conditions determine the outcome, create a table showing all combinations of conditions and their expected results.</p>
<p><strong>Example:</strong> Login with Remember Me</p>
<table>
<thead><tr><th>Condition</th><th>Case 1</th><th>Case 2</th><th>Case 3</th><th>Case 4</th></tr></thead>
<tbody>
<tr><td>Valid Credentials</td><td>Yes</td><td>Yes</td><td>No</td><td>No</td></tr>
<tr><td>Remember Me Checked</td><td>Yes</td><td>No</td><td>Yes</td><td>No</td></tr>
<tr><td><strong>Result</strong></td><td>Login + Cookie saved</td><td>Login, no cookie</td><td>Error</td><td>Error</td></tr>
</tbody>
</table>

<h3>State Transition Testing</h3>
<p>Test systems that have different states and transitions between them. Create a state diagram and test each valid and invalid transition.</p>
<p><strong>Example:</strong> ATM PIN entry</p>
<pre><code>State: Start → [Enter PIN] → Checking
  If correct → Authenticated
  If wrong (1st time) → Retry (2 attempts left)
  If wrong (2nd time) → Retry (1 attempt left)
  If wrong (3rd time) → Card Blocked</code></pre>
<p>Test cases: correct PIN on first try, correct on retry, 3 wrong PINs leading to block, correct PIN after 2 wrong attempts.</p>

<h3>When to Use Each Technique</h3>
<table>
<thead><tr><th>Technique</th><th>Best For</th></tr></thead>
<tbody>
<tr><td>Equivalence Partitioning</td><td>Input fields with ranges or categories</td></tr>
<tr><td>Boundary Value Analysis</td><td>Numeric fields, date fields, size limits</td></tr>
<tr><td>Decision Table</td><td>Business rules with multiple conditions</td></tr>
<tr><td>State Transition</td><td>Workflows, account states, order processing</td></tr>
</tbody>
</table>
`
    },
    {
      id: '3-9', difficulty: 'beginner',
      slug: 'testing-tools-overview',
      title: 'Testing Tools Overview',
      duration: 8,
      content: `
<h2>Testing Tools Overview</h2>

<h3>Defect Tracking Tools</h3>
<p><strong>Jira (by Atlassian):</strong> The industry standard for bug tracking and project management. Used by 75%+ of software teams. Supports custom workflows, dashboards, and integrates with almost every dev tool.</p>
<p><strong>Azure DevOps:</strong> Microsoft's all-in-one platform. Popular in enterprises using .NET stack. Includes boards, pipelines, repos, and test plans.</p>
<p><strong>Bugzilla:</strong> Free, open-source bug tracking. Still used in some open-source projects and older organizations.</p>
<p><strong>Linear:</strong> Modern, fast issue tracker gaining popularity with startups. Clean UI, keyboard-driven.</p>

<h3>Test Management Tools</h3>
<p><strong>TestRail:</strong> Dedicated test case management. Organize test suites, execute test runs, generate reports. The most widely used test management tool.</p>
<p><strong>Zephyr:</strong> Jira plugin for test management. Lets you create and execute test cases directly inside Jira.</p>
<p><strong>Xray:</strong> Another popular Jira plugin for test management. Supports manual and automated test results.</p>
<p><strong>qTest:</strong> Enterprise test management with requirements traceability and integration with automation tools.</p>

<h3>Choosing the Right Tools</h3>
<p>For a typical QA team setup:</p>
<ul>
<li><strong>Bug tracking:</strong> Jira (industry standard, learn this first)</li>
<li><strong>Test management:</strong> Xray or Zephyr (Jira integration) or TestRail (standalone)</li>
<li><strong>API testing:</strong> Postman</li>
<li><strong>UI automation:</strong> Selenium, Playwright, or Cypress</li>
<li><strong>CI/CD:</strong> GitHub Actions or Jenkins</li>
<li><strong>Performance:</strong> JMeter or k6</li>
</ul>

<div class="callout">
<strong>💡 Pro Tip:</strong> Don't try to learn every tool. Master one from each category. Most companies will train you on their specific toolset — what matters is understanding the concepts behind each category.
</div>
`
    },
  ],
  quiz: [
    { id: 'q3-1', question: 'What type of testing is best suited for automation?', options: ['Exploratory testing', 'Regression testing', 'Usability testing', 'Ad-hoc testing'], correctIndex: 1, explanation: 'Regression testing is the best automation candidate — it\'s repetitive, runs frequently, and has stable test cases.' },
    { id: 'q3-2', question: 'What is the difference between Smoke and Sanity testing?', options: ['They are the same thing', 'Smoke is broad and shallow; Sanity is narrow and deep', 'Smoke tests features; Sanity tests performance', 'Smoke is automated; Sanity is manual'], correctIndex: 1, explanation: 'Smoke testing is a broad, shallow check of overall stability. Sanity testing is a narrow, focused check of specific functionality.' },
    { id: 'q3-3', question: 'In Boundary Value Analysis for a field accepting 1-100, which values should you test?', options: ['1, 50, 100', '0, 1, 2, 99, 100, 101', '1 and 100 only', '-1, 0, 50, 100, 101'], correctIndex: 1, explanation: 'BVA tests at the boundaries: just below minimum (0), at minimum (1), just above minimum (2), just below maximum (99), at maximum (100), just above maximum (101).' },
    { id: 'q3-4', question: 'What determines bug Severity?', options: ['How urgently business wants it fixed', 'The technical impact on the system', 'The number of users affected', 'The developer\'s opinion'], correctIndex: 1, explanation: 'Severity reflects the technical impact — how badly the bug affects the system (crash vs cosmetic). Priority reflects business urgency.' },
    { id: 'q3-5', question: 'A company logo is wrong on the homepage. What is the severity and priority?', options: ['High severity, High priority', 'High severity, Low priority', 'Low severity, High priority', 'Low severity, Low priority'], correctIndex: 2, explanation: 'Low severity (cosmetic issue, no functionality impact) but High priority (brand visibility, CEO wants it fixed ASAP).' },
    { id: 'q3-6', question: 'Which test level is at the top of the Test Pyramid?', options: ['Unit tests', 'Integration tests', 'End-to-end / Acceptance tests', 'Smoke tests'], correctIndex: 2, explanation: 'E2E/Acceptance tests are at the top — fewest in number, slowest to run, most expensive but test the full user journey.' },
    { id: 'q3-7', question: 'What is Equivalence Partitioning?', options: ['Testing all possible values', 'Dividing inputs into groups and testing one value from each', 'Testing only boundary values', 'Testing random values'], correctIndex: 1, explanation: 'EP divides inputs into partitions where values behave the same, then tests one representative value from each — reducing the number of tests while maintaining coverage.' },
    { id: 'q3-8', question: 'Which bug state indicates the developer has fixed the issue?', options: ['Open', 'Assigned', 'Fixed', 'Closed'], correctIndex: 2, explanation: 'Fixed means the developer has applied the fix. It still needs QA retest before moving to Verified/Closed.' },
    { id: 'q3-9', question: 'What information should NOT be included in a bug report?', options: ['Steps to reproduce', 'Expected vs actual result', 'Personal opinions about the developer', 'Screenshots and logs'], correctIndex: 2, explanation: 'Bug reports should be factual and professional. Personal opinions or blame have no place in defect documentation.' },
    { id: 'q3-10', question: 'When is Decision Table testing most useful?', options: ['Testing a single input field', 'When there are multiple conditions that determine the output', 'For performance testing', 'When testing mobile apps only'], correctIndex: 1, explanation: 'Decision Table testing is ideal when multiple conditions interact to produce different results — like business rules with many combinations.' },
  ],
};

export default module3;
