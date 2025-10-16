# DNS Setup for galentopper.com on Vercel

## 📋 DNS Records to Add

Add these records at your domain registrar (where you bought galentopper.com):

### Root Domain (galentopper.com)
```
Type: A
Name: @ (or blank, or galentopper.com)
Value: 76.76.21.21
TTL: 3600
```

### WWW Subdomain (www.galentopper.com)
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

---

## 🔧 Step-by-Step by Registrar

### **GoDaddy**
1. Login to GoDaddy
2. Go to "My Products" → "Domains"
3. Click "DNS" next to galentopper.com
4. Click "Add" to add new records
5. Add the A and CNAME records above
6. Save

### **Namecheap**
1. Login to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to galentopper.com
4. Go to "Advanced DNS" tab
5. Add new records (A and CNAME)
6. Save

### **Google Domains**
1. Login to Google Domains
2. Click on galentopper.com
3. Go to "DNS" in left menu
4. Scroll to "Custom resource records"
5. Add A record and CNAME record
6. Save

### **Cloudflare**
1. Login to Cloudflare
2. Select galentopper.com
3. Go to "DNS" tab
4. Click "Add record"
5. Add A and CNAME records
6. Make sure Proxy status (orange cloud) is OFF for initial setup
7. Save

### **Porkbun**
1. Login to Porkbun
2. Go to "Domain Management"
3. Click "DNS" for galentopper.com
4. Add the A and CNAME records
5. Save

---

## ⏱️ How Long Does It Take?

- **Minimum:** 5-10 minutes
- **Average:** 30 minutes to 2 hours
- **Maximum:** Up to 48 hours (rare)

You can check propagation status at: https://dnschecker.org

---

## ✅ Verification Steps

### 1. Check in Vercel Dashboard
- Go to your project → Settings → Domains
- Your domain should show a green checkmark when ready
- Status will say "Valid Configuration"

### 2. Test Your Domain
After DNS propagates, visit:
- https://galentopper.com (should load your site)
- https://www.galentopper.com (should redirect to non-www or vice versa)

### 3. Check DNS Propagation
Visit: https://dnschecker.org
- Enter: galentopper.com
- Type: A
- Should show: 76.76.21.21

---

## 🔒 SSL/HTTPS

Vercel automatically provisions SSL certificates via Let's Encrypt:
- ✅ Free
- ✅ Automatic renewal
- ✅ Takes 1-5 minutes after DNS is configured

---

## ❓ Troubleshooting

### Domain shows "Invalid Configuration"
- Wait longer (DNS can take time)
- Double-check DNS records are exactly right
- Make sure there are no conflicting records

### Site doesn't load
- Check DNS propagation: https://dnschecker.org
- Clear your browser cache
- Try incognito/private browsing
- Wait a bit longer

### "Too Many Redirects" error
- In Vercel, check if both galentopper.com and www.galentopper.com are added
- One should redirect to the other

### HTTPS not working
- Wait 5-10 minutes for SSL certificate
- Vercel auto-provisions SSL after DNS is verified

---

## 📞 Need Help?

- Vercel Support: https://vercel.com/support
- Vercel Docs: https://vercel.com/docs/custom-domains
- DNS Propagation Checker: https://dnschecker.org

---

## 🎯 Quick Checklist

- [ ] Deployed site to Vercel (npx vercel)
- [ ] Added galentopper.com in Vercel dashboard
- [ ] Added www.galentopper.com in Vercel dashboard  
- [ ] Added A record pointing @ to 76.76.21.21
- [ ] Added CNAME record pointing www to cname.vercel-dns.com
- [ ] Waited for DNS propagation (check dnschecker.org)
- [ ] Verified green checkmark in Vercel dashboard
- [ ] Tested https://galentopper.com in browser
- [ ] Confirmed HTTPS/SSL is working

