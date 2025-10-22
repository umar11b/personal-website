# Resume Sync

This folder contains the resume file and automated sync workflow to AWS S3.

## 📁 Structure

```
resume-sync/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions workflow
├── Umar_Zaman_Resume.pdf   # Your resume file (add this)
└── README.md               # This file
```

## 🚀 How it works

1. **Add your resume**: Place your `Umar_Zaman_Resume.pdf` file in this directory
2. **Commit & Push**: The GitHub Actions workflow will automatically sync to AWS S3
3. **Access**: Your resume will be available at `https://resume-umarzaman-ca.s3.amazonaws.com/Umar_Zaman_Resume.pdf`

## 🔧 Workflow Details

The `ci.yml` workflow:

- Triggers on pushes to the `main` branch when files in `resume-sync/` change
- Uses the same AWS IAM role as your main portfolio deployment
- Syncs the resume to the `resume-umarzaman-ca` S3 bucket
- Sets appropriate cache headers for public access
- Provides feedback on the sync status

## 📝 Usage

1. Update your resume in Overleaf (or your preferred LaTeX editor)
2. Export as PDF and save as `Umar_Zaman_Resume.pdf` in this folder
3. Commit and push to GitHub:
   ```bash
   git add resume-sync/
   git commit -m "Update resume"
   git push origin main
   ```
4. The workflow will automatically deploy your resume to AWS S3

## 🔗 Resume URL

Once synced, your resume will be available at:
**https://resume-umarzaman-ca.s3.amazonaws.com/Umar_Zaman_Resume.pdf**

## ⚙️ AWS Configuration

This workflow uses the same AWS IAM role as your main portfolio:

- **Role**: `GitHubPortfolioDeploy`
- **S3 Bucket**: `resume-umarzaman-ca`
- **Region**: `us-east-1`

The bucket permissions are configured in `infra/s3/policy.json`.
