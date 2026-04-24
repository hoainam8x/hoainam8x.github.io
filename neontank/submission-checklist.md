# App Store Connect Submission Checklist
## Duna's Neon Tank - Complete Setup Guide

### 🔥 CRITICAL - Do Before Submission
- [x] AdMob: DEBUG → Google test unit IDs; Release/Archive → production (`AdCoordinator` — no manual switch)
- [ ] Upload Privacy Policy, Terms, Support to web server
- [ ] Create GameCenter leaderboard + 10 achievements in App Store Connect
- [ ] Configure 3 IAP products in App Store Connect
- [ ] Generate 6.7" screenshots (5-6 images)
- [ ] Record 30-second app preview video

---

## 📱 App Information

**Bundle ID:** `com.duna.neontank`  
**SKU:** `neontank-ios-2026`  
**Primary Language:** English (US)  
**Secondary Languages:** Korean, Japanese, Vietnamese  

### App Name & Subtitle
**Name:** Neon Tank: Arena Shooter  
**Subtitle:** Twin-Stick Tanks & Neon Combat  

### Categories
**Primary:** Games > Action  
**Secondary:** Games > Arcade  

---

## 📝 App Store Metadata

### Keywords (100 characters max)
```
tank battle,arena shooter,neon game,top down,twin stick,bullet,ricochet,arcade,boss fight
```

### Description (English)
```
⚡ NEON TANK: ARENA SHOOTER ⚡
The ultimate twin-stick tank combat experience!

🎯 30 CHALLENGING LEVELS
Battle through neon-lit arenas with increasingly difficult enemies and epic boss encounters.

🔥 ADVANCED COMBAT SYSTEM
• Twin-stick controls for precise movement and aiming
• Ricochet shots off walls for tactical advantages  
• Multiple enemy types: Scouts, Heavies, Snipers, Drones
• Power-ups: Shield, Rapid Fire, Double Damage

⚡ LUXURY NEON VISUALS
• Stunning aurora backgrounds and particle effects
• Premium glass UI with animated borders
• 3D cartoon tank designs with realistic physics
• Professional procedural audio (100% royalty-free)

🏆 GAME CENTER INTEGRATION
• Global leaderboards - compete worldwide
• 10 challenging achievements to unlock
• Progress syncs across all your Apple devices

💰 PREMIUM FEATURES
• Remove ads forever ($1.99)
• Coin packs for faster progression
• Daily missions with coin rewards
• Luxury upgrade system

🌍 MULTILINGUAL SUPPORT
Available in English, Korean (한국어), Japanese (日本語), Vietnamese

Perfect for fans of tank games, twin-stick shooters, and arcade action!

⚡ Download now and dominate the neon battlefield! ⚡
```

### Promotional Text (170 characters)
```
⚡ New: Daily Missions! 30 levels of neon tank combat with twin-stick controls, ricochet shots, boss battles & Game Center leaderboards!
```

---

## 🖼 Screenshot Requirements

### iPhone 6.7" (iPhone 14 Pro Max) - REQUIRED
**Dimensions:** 1290 x 2796 pixels  
**Orientation:** Portrait (will show landscape game in portrait frame)

**Screenshot List:**
1. **Start Screen** - Show luxury UI, "LUXURY EDITION" crown badge, neon logo
2. **Boss Battle** - Level 10 boss encounter with lots of particle effects
3. **Combo Action** - Multi-kill combo with "UNSTOPPABLE!" speech bubble  
4. **Shop Screen** - Premium store, daily missions, IAP section visible
5. **Game Over** - High score, replay/home buttons, polished defeat screen
6. **Level Banner** - "⚠ BOSS ENCOUNTER" with aurora background

### iPad Pro 12.9" (3rd gen) - RECOMMENDED  
**Dimensions:** 2048 x 2732 pixels

---

## 🎬 App Preview Video

**Duration:** 15-30 seconds  
**Dimensions:** 1080 x 1920 (portrait frame, landscape content)  
**Format:** .mov or .mp4

**Storyboard:**
1. Logo animation (2s)
2. Level 1 gameplay - movement + shooting (5s)  
3. Ricochet kill montage (3s)
4. Boss battle explosion (3s)
5. Shop/upgrades quick view (2s)
6. End logo + "Download Now" (2s)

---

## 🛡 Age Rating

### App Store Age Rating: **9+**

**Content Description:**
- Infrequent/Mild Cartoon or Fantasy Violence ✓
- Infrequent/Mild Simulated Gambling (ads) ✓  

**Questionnaire Answers:**
- Does app contain violence? **YES - Mild cartoon tank combat**
- Realistic violence? **NO - Cartoon/fantasy style**
- Sexual content? **NO**
- Profanity? **NO**  
- Horror/fear? **NO**
- Mature themes? **NO**
- Gambling? **NO**
- Contest/sweepstakes? **NO**
- Medical info? **NO**

---

## 💳 In-App Purchase Setup

### Product 1: Remove Ads Forever
- **Product ID:** `com.duna.neontank.removeads`
- **Type:** Non-Consumable
- **Reference Name:** Remove Ads Forever
- **Price:** $1.99 USD (Tier 5)
- **Description:** "Remove all banner and interstitial advertisements permanently"

### Product 2: Small Coin Pack  
- **Product ID:** `com.duna.neontank.coins_small`
- **Type:** Consumable
- **Reference Name:** 250 Coins
- **Price:** $0.99 USD (Tier 2)
- **Description:** "250 coins to upgrade your tank and buy power-ups"

### Product 3: Large Coin Pack
- **Product ID:** `com.duna.neontank.coins_large`  
- **Type:** Consumable
- **Reference Name:** 1200 Coins (Best Value)
- **Price:** $2.99 USD (Tier 8)
- **Description:** "1000 coins + 200 bonus coins - best value for upgrades!"

---

## 🎮 Game Center Setup

### Leaderboard
- **Leaderboard ID:** `com.duna.neontank.leaderboard.score`
- **Reference Name:** Global High Scores
- **Score Format:** Integer
- **Sort Order:** High to Low
- **Score Range:** 0 to 999,999,999

### Achievements (10 total)
1. **First Blood** (`com.duna.neontank.ach.firstblood`) - Kill first enemy
2. **On Fire** (`com.duna.neontank.ach.combo5`) - 5-kill combo  
3. **Unstoppable** (`com.duna.neontank.ach.combo10`) - 10-kill combo
4. **Trick Shot** (`com.duna.neontank.ach.ricochet`) - Kill with ricochet
5. **Billiard Master** (`com.duna.neontank.ach.ricochet5`) - 5 ricochet kills
6. **Boss Slayer** (`com.duna.neontank.ach.bosskiller`) - Defeat level 10 boss
7. **Untouchable** (`com.duna.neontank.ach.survivor`) - Complete level without damage
8. **Shopaholic** (`com.duna.neontank.ach.shopaholic`) - Buy 5 upgrades
9. **Centurion** (`com.duna.neontank.ach.centurion`) - 100 total kills
10. **Neon Legend** (`com.duna.neontank.ach.legend`) - Reach level 30

---

## 🔒 Privacy & Compliance

### Privacy Policy URL
`https://yourdomain.com/dunatank/privacy-policy.html`

### Terms of Service URL  
`https://yourdomain.com/dunatank/terms-of-service.html`

### Support URL
`https://yourdomain.com/dunatank/support.html`

### Data Collection
- [x] **Third-Party Analytics:** NO
- [x] **Third-Party Advertising:** YES (Google AdMob)  
- [x] **Collects Data:** YES (Device ID for advertising only)
- [x] **Data Used for Tracking:** YES (with user consent)
- [x] **Data Linked to User:** NO (anonymous advertising only)

### ATT Implementation
- [x] NSUserTrackingUsageDescription in Info.plist ✓
- [x] ATTrackingManager.requestTrackingAuthorization() ✓
- [x] App works without tracking consent ✓

---

## 🌍 Export Compliance

### Export Laws
- **Uses Encryption:** YES (HTTPS only, standard)
- **Qualifies for exemption:** YES
- **Exemption type:** (a)(5)(ii) - Standard cryptographic protocols
- **ECCN:** 5D992.c (standard protocols)

---

## ✅ Final Pre-Submission Checklist

### Technical Requirements
- [ ] Built with latest Xcode version
- [ ] Targets iOS 16.0+ minimum  
- [ ] Supports iPhone and iPad
- [ ] Works on all screen sizes
- [ ] No crashes or major bugs
- [ ] App launch time < 3 seconds
- [ ] 64-bit architecture only

### Metadata Complete
- [ ] App name, subtitle, description written
- [ ] Keywords optimized for ASO
- [ ] Screenshots captured (6.7" + iPad)
- [ ] App preview video created
- [ ] Age rating questionnaire completed
- [ ] Privacy policy uploaded to web

### Monetization Setup
- [ ] 3 IAP products configured
- [x] AdMob production IDs used in Release builds only (verify Archive is Release)
- [ ] Game Center leaderboard + achievements setup
- [ ] Privacy labels completed
- [ ] ATT implementation tested

### Legal & Compliance
- [ ] Terms of Service accessible
- [ ] Support page live
- [ ] Export compliance answered
- [ ] Content rights verified (no copyrighted material)
- [ ] Age rating appropriate for content

### Final Testing
- [ ] Test on multiple device sizes
- [ ] Verify IAP restore works
- [ ] Game Center login/logout
- [ ] ATT prompt appears correctly  
- [ ] Ads load (production IDs)
- [ ] All localizations display correctly

---

## 📊 ASO Strategy

### Target Keywords
**Primary:** neon tank, tank game, arena shooter  
**Secondary:** twin stick, ricochet, tank battle  
**Long-tail:** neon tank shooter, twin stick tank game

### Competitor Analysis
**Similar apps:** Tank Stars, Pocket Tanks, Brutal.io
**Differentiation:** Luxury neon visuals, ricochet mechanics, procedural audio

### Launch Strategy
1. **Soft launch:** Vietnam + Philippines (localization ready)
2. **Global rollout:** After 100+ reviews and 4.5+ rating
3. **ASO iteration:** Update keywords based on search performance
