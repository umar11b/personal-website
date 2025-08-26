# Resume Management

This directory contains your resume that gets automatically deployed to your website.

## How to Update Your Resume

### Option 1: Overleaf + GitHub Integration (Recommended)

1. **Sync Overleaf to GitHub:**

   - In your Overleaf project, go to Menu → Git
   - Connect your Overleaf project to this GitHub repository
   - Set the branch to `main` and the folder to `resume/`

2. **Update in Overleaf:**

   - Make your changes in Overleaf
   - Compile to PDF
   - Commit and push to GitHub

3. **Automatic Deployment:**
   - GitHub Actions will automatically detect the change
   - Your resume will be updated on your website within minutes

### Option 2: Manual Upload

1. **Download from Overleaf:**

   - Compile your resume in Overleaf
   - Download the PDF

2. **Replace the file:**

   - Replace `Umar_Zaman_Resume.pdf` in this directory
   - Commit and push to GitHub

3. **Automatic Deployment:**
   - GitHub Actions will automatically deploy the new version

## File Structure

```
resume/
├── README.md                    # This file
├── Umar_Zaman_Resume.pdf       # Your current resume
└── .gitignore                  # Git ignore rules
```

## Benefits

- ✅ **Automatic Updates:** No manual deployment needed
- ✅ **Version Control:** Track all resume changes
- ✅ **Fast Deployment:** Updates live within minutes
- ✅ **CDN Caching:** Fast loading for visitors
- ✅ **Backup:** Your resume is safely stored in Git

## Troubleshooting

If the automatic deployment doesn't work:

1. Check the GitHub Actions tab in your repository
2. Verify the file path is correct (`resume/Umar_Zaman_Resume.pdf`)
3. Ensure the branch is `main`
4. Check AWS credentials and permissions

## Daily Commit Strategy

For your daily commits, you can:

1. **Make small updates in Overleaf** (add a skill, update experience, etc.)
2. **Commit and push** from Overleaf
3. **GitHub Actions automatically deploys** the changes
4. **Your website is updated** within minutes

This gives you a perfect workflow for maintaining an up-to-date resume while building your daily commit streak!
