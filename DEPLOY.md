# Deployment Guide for GitHub Pages

## Quick Start

1. **Update `package.json`**
   - Replace `"homepage": "https://yourusername.github.io/adrien.vc"` with your actual GitHub username

2. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to: **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose the **gh-pages** branch
   - Click **Save**

5. **Access Your Site**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - It may take a few minutes for the first deployment to go live

## Custom Domain (Optional)

If you want to use a custom domain like `adrien.vc`:

1. **Create CNAME file in public folder**
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Update package.json**
   ```json
   "homepage": "https://yourdomain.com"
   ```

3. **Configure DNS**
   - Add an A record or CNAME record pointing to GitHub Pages
   - See: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Blank Page After Deployment
- Ensure the `homepage` field in `package.json` matches your GitHub Pages URL exactly
- Check browser console for 404 errors on static assets

### Build Errors
```bash
npm run build
```
Run this locally first to catch any build issues before deploying

### Update Deployment
Simply run `npm run deploy` again to update your live site with new changes

## Development Workflow

1. Make changes locally
2. Test with `npm start`
3. Commit changes: `git add . && git commit -m "Description"`
4. Push to main: `git push origin main`
5. Deploy: `npm run deploy`

Note: The `deploy` command handles the build automatically via the `predeploy` script.
