# Ajay Dwivedi — Personal Website

This is your portfolio site. It is a **Next.js** app (React + TypeScript + Tailwind CSS). You do not need to know all of that to get started. Most of what people see on the page is edited in a few files under `data/`.

The live site is meant to be hosted on **Vercel** for free. Your code lives on **GitHub**.

---

## 1. One-time setup on your computer

You need:

1. [Node.js](https://nodejs.org/) (LTS version is fine)
2. [Git](https://git-scm.com/)
3. A [GitHub](https://github.com/) account
4. A [Vercel](https://vercel.com/) account (sign up with GitHub — easiest)

Open a terminal **inside this folder** (`website_v2`, the folder that contains `package.json`) and run:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. Leave the terminal running while you edit. Saving a file should refresh the page.

---

## 2. How to edit the website (the important files)

You almost never need to touch `components/` unless you want to change layout or colors.

| What you want to change | File to edit |
| --- | --- |
| Name, title, about-me paragraphs | `data/profile.ts` |
| Email, location, LinkedIn, GitHub | `data/contact.ts` |
| Project cards and detail text | `data/projects.ts` |
| Photos | put files in `public/images/` then reference them in the data files |

After you change a file, save it and check localhost.

### Fill in your real info first

Open `data/contact.ts` and replace:

- `ajay.dwivedi@example.com`
- the LinkedIn URL
- the GitHub URL
- location

Open `data/profile.ts` and rewrite the three about-me sentences so they sound like you.

### Adding a project

1. Open `data/projects.ts`.
2. Copy the example object in the `projects` array.
3. Give it a new `id` using lowercase letters and hyphens, for example `wifi-threat-model`.
4. Fill in `title`, `description` (short, on the card), `longDescription` (the detail page), `techStack`, and `date`.
5. Optional fields:
   - `github`: link to the repo
   - `demo`: live site if you have one
   - `images`: e.g. `["/images/projects/my-screenshot.png"]` after you drop the file in `public/images/projects/`
6. Delete the example project when you have a real one. An empty `projects` array is allowed, but a site with no projects looks unfinished.

You do **not** need a new React file for each project. The detail page is generated from this data.

### Adding a photo of yourself

1. Save a square-ish photo as `public/images/avatar.jpg`
2. In `data/profile.ts`, uncomment `avatar: "/images/avatar.jpg"`

---

## 3. Put the code on GitHub (your repo, not anyone else's)

This folder used to be cloned from someone else's site. Create **your own** GitHub repository so you own the code.

### If you already see `origin` pointing at someone else

In this folder, run:

```bash
git remote -v
```

If it shows another person's GitHub URL, disconnect it:

```bash
git remote remove origin
```

### Create a new repo and push

1. On GitHub, click **New repository**. Name it something like `portfolio`. Do **not** add a README if this folder already has git history.
2. In the terminal (still in `website_v2`):

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/portfolio.git
git add .
git commit -m "Start my portfolio site"
git branch -M main
git push -u origin main
```

Use **your** username and repo name.

Every time you change the site later:

```bash
git add .
git commit -m "Short description of what you changed"
git push
```

---

## 4. Publish on Vercel (this is the public website)

1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New… → Project**.
3. Import the GitHub repo you just created.
4. Vercel should detect **Next.js**. You can leave the defaults:
   - Framework: Next.js
   - Root directory: `./` (this folder is the app)
   - Build command: `next build` (default)
5. Click **Deploy**.

When it finishes you get a URL like `https://your-project.vercel.app`. That is your live site.

If this repo lives inside a parent folder on GitHub (for example the project root is `ajay_website` and the Next.js app is in `website_v2`), set **Root Directory** in Vercel to `website_v2`.

### Custom domain (optional)

In the Vercel project: **Settings → Domains**. Add something like `ajaydwivedi.com` after you buy the domain. Vercel shows the DNS records to paste at your registrar.

### Updates go live automatically

After Vercel is connected, every `git push` to `main` rebuilds the site. You do not redeploy by hand.

---

## 5. Folder map (if you get curious)

```
website_v2/
  data/           ← edit these files (content)
  components/     ← page sections (Hero, Projects, Contact)
  pages/          ← Next.js routes (index = homepage)
  public/         ← images and other static files
  styles/         ← global CSS
```

---

## 6. Common problems

**`npm` is not recognized**  
Node.js is not installed, or you need to close and reopen the terminal after installing it.

**Port 3000 already in use**  
Stop the other `npm run dev` window, or run `npx next dev -p 3001` and open localhost:3001.

**Changes on GitHub but not on the website**  
Confirm you `git push`ed, then check the Vercel dashboard for a failed build. Open the build log — missing commas in `data/*.ts` are a common cause.

**Project page 404 after you add a project**  
Restart `npm run dev`. This site is statically generated; new `id`s sometimes need a restart.

---

Build it locally with `npm run build` if you want to confirm nothing is broken before you push.
