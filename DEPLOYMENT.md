# Deployment Guide - Render.com (Full Stack)

This guide shows you how to deploy both frontend and backend together on Render.com as a single application.

## 🚀 **Deploy Full Stack on Render.com**

### **Prerequisites:**
- GitHub account with your repository pushed
- OpenAI API key
- Render.com account (sign up free at https://render.com)

---

## **Step-by-Step Deployment**

### **1. Sign in to Render**

1. Go to [https://render.com](https://render.com)
2. Click **"Get Started"** or **"Sign In"**
3. Choose **"Sign in with GitHub"**
4. Authorize Render to access your GitHub repositories

---

### **2. Create a New Web Service**

1. Click the **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect a repository"** or select from the list
4. Find and select: **`eswar-1297/Fanout`**
5. Click **"Connect"**

---

### **3. Configure Your Web Service**

Fill in the following settings:

#### **Basic Settings:**
```
Name: fanout-app
(or any name you prefer, like: fanout-query-generator)

Region: Oregon (US West) 
(or choose the closest to your users)

Branch: main

Root Directory: [LEAVE THIS BLANK]
```

#### **Build Settings:**
```
Runtime: Node

Build Command:
npm install && npm run build

Start Command:
npm start
```

#### **Plan:**
```
Select: Free
(You can upgrade later if needed)
```

---

### **4. Add Environment Variables**

Click **"Advanced"** or scroll down to **"Environment Variables"** section.

Click **"Add Environment Variable"** and add:

**Variable 1:**
```
Key: OPENAI_API_KEY
Value: sk-your-actual-openai-api-key-here
```

**Variable 2:**
```
Key: PORT
Value: 3001
```

**Variable 3 (Optional - for production):**
```
Key: NODE_ENV
Value: production
```

---

### **5. Deploy!**

1. Review all settings
2. Click **"Create Web Service"** at the bottom
3. Wait for deployment (5-10 minutes for first deploy)

You'll see:
- ✅ Building...
- ✅ Deploying...
- ✅ Live

Your app will be available at:
```
https://fanout-app.onrender.com
```
(or whatever name you chose)

---

## **✅ Testing Your Deployment**

### **Test 1: Health Check**
Open in browser:
```
https://your-app.onrender.com/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2024-12-08T..."
}
```

### **Test 2: Frontend**
Open in browser:
```
https://your-app.onrender.com
```

You should see the Fanout Query Generator interface!

### **Test 3: Generate Queries**
1. Enter a query: `"What is machine learning?"`
2. Set max fanouts: `10`
3. Click **"Generate Fanout Queries"**
4. Wait 5-10 seconds
5. See the generated fanout queries! 🎉

---

## **🔧 How It Works**

1. **Build Process:**
   - `npm install` - Installs root dependencies
   - `npm run build` - Runs:
     - `npm run build:client` - Builds React app → `client/dist/`
     - `npm run build:server` - Compiles TypeScript → `dist/`

2. **Runtime:**
   - Express server starts on port specified by Render
   - Serves API routes at `/api/*`
   - Serves React app (static files) for all other routes
   - Everything runs on the same domain - no CORS issues!

---

## **📊 Monitoring & Logs**

### **View Logs:**
1. Go to your Render dashboard
2. Click on your service
3. Click **"Logs"** tab
4. See real-time logs of your application

### **View Metrics:**
1. Click **"Metrics"** tab
2. See:
   - CPU usage
   - Memory usage
   - Request count
   - Response times

---

## **🔄 Automatic Deployments**

Render automatically redeploys when you push to GitHub:

1. Make changes locally
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Update feature"
   git push
   ```
3. Render automatically detects the push
4. Rebuilds and redeploys (2-5 minutes)

---

## **🐛 Troubleshooting**

### **Build Failed:**

**Check Render build logs:**
- Go to your service → "Logs" tab
- Look for errors in the build output

**Common issues:**
- Missing dependencies: Run `npm install` locally first
- TypeScript errors: Run `npm run build` locally to check
- Node version: Render uses Node 14+ by default

**Fix:**
```bash
# Test locally first
npm install
npm run build
npm start
# Then visit http://localhost:3001
```

### **Deploy Failed:**

**Check start command:**
- Make sure `dist/index.js` exists after build
- Verify `npm start` works locally

### **Application Crashes:**

**Check environment variables:**
- Verify `OPENAI_API_KEY` is set correctly
- Check Render dashboard → Settings → Environment Variables

**Check logs:**
- Look for error messages in Logs tab
- Common: "Invalid API key" or "Module not found"

### **Slow First Load (Cold Start):**

**This is normal on Render free tier:**
- App spins down after 15 minutes of inactivity
- First request after spin-down takes 30-60 seconds
- Subsequent requests are fast

**Solutions:**
- Upgrade to paid plan (no cold starts)
- Use a uptime monitor to keep it awake
- Just wait 30 seconds on first load 😊

### **API Requests Failing:**

**Check OpenAI API Key:**
```bash
# Test your API key
curl https://api.openai.com/v1/models \
  -H "Authorization: Bearer YOUR_API_KEY"
```

**Check CORS:**
- Should work fine since frontend and backend are on same domain
- Check browser console for errors

---

## **💰 Costs**

### **Free Tier Includes:**
- ✅ 750 hours/month (enough for one app 24/7)
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Auto-deploys from GitHub
- ⚠️ Spins down after 15 min inactivity
- ⚠️ Cold start delay (30-60 seconds)

### **Paid Tier ($7/month):**
- ✅ No spin down
- ✅ No cold starts
- ✅ More resources
- ✅ Better performance

---

## **🎯 Quick Reference**

### **Your URLs:**
```
Application: https://your-app-name.onrender.com
Health Check: https://your-app-name.onrender.com/health
API Endpoint: https://your-app-name.onrender.com/api/fanout
```

### **Key Commands:**
```bash
# Test locally
npm run dev          # Dev mode (separate servers)
npm run build        # Production build
npm start           # Production mode

# Deploy
git push origin main # Automatic deploy on Render
```

### **Environment Variables:**
- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `PORT` - Auto-set by Render, or use 3001
- `NODE_ENV` - Set to "production" (optional)

---

## **🚀 Next Steps**

### **Custom Domain (Optional):**
1. Go to service → "Settings"
2. Scroll to "Custom Domain"
3. Add your domain
4. Update DNS records as shown

### **Environment Switching:**
You can create multiple services:
- `fanout-production` (main branch)
- `fanout-staging` (develop branch)

### **Monitoring:**
Set up alerts:
1. Go to "Settings" → "Notifications"
2. Add email or Slack webhook
3. Get notified of deploy failures

