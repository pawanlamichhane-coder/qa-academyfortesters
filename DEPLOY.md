# Deployment & AdSense Setup Guide

## Step 1: Push to GitHub

```bash
# Extract the archive
tar -xzf qa-platform.tar.gz
cd qa-platform

# Initialize git
git init
git add .
git commit -m "Initial commit: QA Academy platform"

# Create a repo on GitHub (github.com/new), then:
git remote add origin https://github.com/YOUR_USERNAME/qa-academy.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Easiest)
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **"Add New Project"**
3. Select your `qa-academy` repository
4. Vercel auto-detects Next.js — just click **"Deploy"**
5. Wait 2-3 minutes for build to complete
6. Your site is live at `https://qa-academy-XXXX.vercel.app`

### Option B: Vercel CLI
```bash
npm i -g vercel
cd qa-platform
vercel
# Follow prompts: link to your Vercel account, accept defaults
```

### Custom Domain (Optional)
1. In Vercel Dashboard → your project → Settings → Domains
2. Add your domain (e.g., `qaacademy.com`)
3. Update DNS records as Vercel shows
4. Vercel gives you free SSL automatically

## Step 3: Set Environment Variables in Vercel

Go to your project in Vercel Dashboard:
1. **Settings** → **Environment Variables**
2. Add these:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SITE_URL` | `https://your-domain.vercel.app` (your actual URL) |
| `NEXT_PUBLIC_ADSENSE_ID` | `ca-pub-XXXXXXXXXXXXXXXX` (from Step 4) |

3. Click **Save** → **Redeploy** from Deployments tab

## Step 4: Google AdSense Setup

### 4a. Apply for AdSense
1. Go to https://adsense.google.com
2. Sign in with your Google account
3. Click **"Get Started"**
4. Enter your site URL (your Vercel URL)
5. Select your country → **Create Account**

### 4b. Verify Site Ownership
- AdSense gives you a verification code
- Add it to your layout.tsx `verification` field:
  ```typescript
  verification: {
    google: "YOUR_VERIFICATION_CODE_HERE",
  },
  ```
- Push to GitHub → Vercel auto-deploys → click "Verify" in AdSense

### 4c. Wait for Approval
- Google reviews your site (takes 1-14 days)
- They check: original content ✅, privacy policy, enough pages ✅
- Your site has 18 modules + 70 lessons + 7 static pages = plenty of content

### 4d. After Approval — Get Your Publisher ID
1. In AdSense Dashboard → Account → Account Information
2. Copy your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. Go to Vercel → Settings → Environment Variables
4. Set `NEXT_PUBLIC_ADSENSE_ID` = your publisher ID
5. Redeploy

### 4e. Create Ad Units
1. In AdSense → Ads → By ad unit → **Display ads**
2. Create these ad units:
   - "Lesson Top" → get the slot ID
   - "Lesson Middle" → get the slot ID
   - "Lesson Bottom" → get the slot ID
   - "Homepage" → get the slot ID
   - "Module Page" → get the slot ID
3. Replace the slot strings in AdSlot components:
   - `TOP_LESSON_AD` → your actual slot ID
   - `MID_LESSON_AD` → your actual slot ID
   - etc.

## Step 5: SEO Setup

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add your site URL
3. Verify ownership (same method as AdSense, or DNS)
4. Submit your sitemap: `https://your-site.vercel.app/sitemap.xml`
5. Wait for Google to index your pages (few days to 2 weeks)

### Things Already Built In
- ✅ Dynamic sitemap at `/sitemap.xml` (all pages auto-included)
- ✅ robots.txt allowing all crawlers
- ✅ OpenGraph meta tags (for social media sharing)
- ✅ Twitter Card meta tags
- ✅ JSON-LD structured data (Course schema, FAQ schema, Breadcrumbs)
- ✅ Per-page title and description updates
- ✅ Canonical URLs
- ✅ Semantic HTML (h1, h2, nav, main, footer, article)
- ✅ Mobile responsive design

### To Boost SEO Further
1. **Write 3-5 blog posts** about QA topics (add a /blog route)
2. **Share on social media** — LinkedIn, Twitter, Reddit r/QualityAssurance
3. **Submit to directories** — Product Hunt, dev.to, Hacker News
4. **Interlink** — each lesson links to related lessons
5. **Page speed** — Vercel's CDN handles this automatically

## Step 6: Monitor Earnings

1. AdSense Dashboard → Reports → track revenue
2. Key metric: **RPM** (Revenue Per 1000 impressions)
3. Educational sites typically earn $2-8 RPM
4. Focus on traffic growth — more visitors = more ad revenue

## Estimated Timeline

| Task | Time |
|------|------|
| Push to GitHub | 5 minutes |
| Deploy on Vercel | 5 minutes |
| Set up custom domain | 15 minutes |
| Apply for AdSense | 10 minutes |
| AdSense approval | 1-14 days |
| Google indexing | 3-14 days |
| First earnings | 2-4 weeks after approval |
