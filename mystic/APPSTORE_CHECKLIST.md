# 🏛 DUNA'S MYSTIC MAHJONG — App Store Connect Checklist

## 📱 Trước khi Upload

### Xcode Project Settings
- [x] **Bundle Identifier:** `com.duna.MysticMahjong.Mystic-Mahjong`
- [x] **Version:** `1.0`
- [x] **Build:** `1`
- [x] **Deployment Target:** iOS 16.0
- [x] **Supported Devices:** iPhone + iPad (`TARGETED_DEVICE_FAMILY = "1,2"`)
- [x] **Orientation:** Portrait only (iPhone), All (iPad)
- [x] **Display Name:** "Duna's Mystic"
- [x] **App Icon:** 1024×1024 + macOS sizes, all verified
- [x] **Launch Screen:** AccentColor (warm ivory)

### Info.plist Keys
- [x] `GADApplicationIdentifier` = `ca-app-pub-5115828862032559~4717044207`
- [x] `NSUserTrackingUsageDescription` = ATT message
- [x] `SKAdNetworkItems` = 14 network IDs
- [x] `ITSAppUsesNonExemptEncryption` = `false`
- [x] `CFBundleDisplayName` = "Duna's Mystic"
- [x] `UILaunchScreen` → AccentColor

### AdMob IDs (in AdConfig.swift)
- [x] App ID: `ca-app-pub-5115828862032559~4717044207`
- [x] Banner: `ca-app-pub-5115828862032559/2350735316`
- [x] Interstitial: `ca-app-pub-5115828862032559/4186561164`
- [x] Rewarded: `ca-app-pub-5115828862032559/2140425280`
- [x] App Open: `ca-app-pub-5115828862032559/1556528390`
- [x] Debug mode uses Google Test IDs automatically

### Code Quality
- [x] All `print()` wrapped in `#if DEBUG`
- [x] Zero warnings, zero errors
- [x] 60 FPS performance target
- [x] Safe zone compliance on all screen sizes

---

## 🌐 Web Pages to Host (before submission)

Bạn cần host 3 file HTML lên web server trước khi submit:

| File | URL cần điền vào App Store Connect |
|------|-----------------------------------|
| `docs/privacy-policy.html` | `https://dunaapps.com/mystic-mahjong/privacy-policy.html` |
| `docs/terms-of-use.html` | `https://dunaapps.com/mystic-mahjong/terms-of-use.html` |
| `docs/support.html` | `https://dunaapps.com/mystic-mahjong/support.html` |

**Cách host miễn phí:**
1. **GitHub Pages:** Push docs/ to a public repo → Enable Pages → URL: `https://hoainam8x.github.io/mystic-mahjong-web/`
2. **Netlify:** Drag & drop docs/ folder → instant URL
3. **Firebase Hosting:** `firebase deploy` → URL tùy chọn

> ⚠️ Privacy Policy URL là **BẮT BUỘC** — Apple sẽ reject nếu thiếu!

---

## 📲 App Store Connect — Từng bước

### Step 1: Tạo App
1. Đăng nhập [App Store Connect](https://appstoreconnect.apple.com)
2. My Apps → "+" → New App
3. Điền:
   - **Platforms:** iOS
   - **Name:** `Duna's Mystic Mahjong`
   - **Primary Language:** English (U.S.)
   - **Bundle ID:** `com.duna.MysticMahjong.Mystic-Mahjong`
   - **SKU:** `dunas-mystic-mahjong-001`
   - **User Access:** Full Access

### Step 2: App Information
1. **Category:**
   - Primary: **Games**
   - Secondary: **Puzzle**
   - Subcategory: **Board**
2. **Content Rights:** Does not contain third-party content
3. **Age Rating:** Fill questionnaire → should get **4+**

### Step 3: Pricing and Availability
1. **Price:** Free
2. **Availability:** All Territories
3. **Pre-Orders:** Optional (not recommended for v1.0)

### Step 4: App Privacy
1. Click "Get Started" in Privacy section
2. **Data Collection:** Yes
3. Fill details (see `appstore-metadata.json` → `privacy_details`):
   - **Identifiers → Device ID:** Yes → Third-Party Advertising → Not linked → Tracking
   - **Usage Data → Product Interaction:** Yes → Analytics → Not linked → Not tracking
   - **Diagnostics → Performance Data:** Yes → App Functionality → Not linked → Not tracking
4. All other categories: **No**

### Step 5: Version Information (1.0)

#### 5a. Localization — English (U.S.)
Copy from `appstore-metadata.json`:
- **App Name:** `Duna's Mystic Mahjong`
- **Subtitle:** `Zen Tile Matching Puzzle`
- **Promotional Text:** _(copy from metadata)_
- **Description:** _(copy from metadata)_
- **Keywords:** `mahjong,puzzle,zen,tiles,matching,relax,brain,temple,mystic,solitaire,calm,board,meditation,connect,pairs`
- **Support URL:** `https://dunaapps.com/mystic-mahjong/support.html`
- **Marketing URL:** `https://dunaapps.com/mystic-mahjong/` _(optional)_

#### 5b. Localization — Vietnamese (optional)
- Add "Vietnamese" locale
- Copy Vietnamese metadata from `appstore-metadata.json → vi`

#### 5c. Screenshots
Upload screenshots cho:
- **iPhone 6.7"** (iPhone 15 Pro Max): 1290 × 2796 px
- **iPhone 6.5"** (iPhone 14 Pro): 1284 × 2778 px _(có thể dùng lại 6.7")_
- **iPad Pro 12.9"** (nếu hỗ trợ): 2048 × 2732 px

**Gợi ý 5 screenshots:**
1. 📱 Menu screen — temple, "Begin Journey" button
2. 🀄 Gameplay Level 1 — clean diamond layout
3. ✨ Match animation — glowing path line between tiles
4. 🎯 Gameplay Level 15+ — larger grid with timer
5. 🎉 Level complete celebration screen

> **Cách chụp:** Run app trên Simulator → `Cmd+S` để save screenshot

#### 5d. App Review Information
- **Contact:** _(copy from metadata → app_review_information)_
- **Sign-In Required:** No
- **Notes:** "Free tile-matching puzzle. Tap 'Begin Journey' to start. Uses ATT for ad personalization."

#### 5e. Version Release
- **Manually release this version** (recommended for v1.0)

### Step 6: Upload Build
1. In Xcode: **Product → Archive**
2. In Organizer: **Distribute App → App Store Connect → Upload**
3. Wait 10-30 minutes for processing
4. Back in App Store Connect: Select the build under "Build" section

### Step 7: Submit for Review
1. Verify all sections have green checkmarks ✅
2. Click **"Add for Review"**
3. Click **"Submit to App Review"**
4. Expected review time: **24-48 hours**

---

## 🚨 Common Rejection Reasons (tránh trước)

| Lý do | Status |
|--------|--------|
| Missing Privacy Policy URL | ✅ Đã chuẩn bị |
| ATT not implemented properly | ✅ Đã implement trong GameViewController |
| Ads too intrusive / block content | ✅ Banner trong safe zone, interstitial có cooldown |
| App crashes on launch | ✅ Tested, BUILD SUCCEEDED |
| Missing purpose string for tracking | ✅ `NSUserTrackingUsageDescription` có trong Info.plist |
| Misleading app name/description | ✅ Tên + mô tả chính xác |
| In-app purchases not labeled | ✅ Không có IAP |

---

## 📋 Final Checklist

- [ ] Host `privacy-policy.html` lên web → lấy URL
- [ ] Host `terms-of-use.html` lên web → lấy URL  
- [ ] Host `support.html` lên web → lấy URL
- [ ] Chụp 5 screenshots trên iPhone 15 Pro Max simulator
- [ ] Chụp 5 screenshots trên iPad Pro simulator (nếu cần)
- [ ] Tạo app trên App Store Connect
- [ ] Điền toàn bộ metadata (copy từ `appstore-metadata.json`)
- [ ] Upload screenshots
- [ ] Fill Privacy section
- [ ] Fill Age Rating questionnaire
- [ ] Archive & Upload build từ Xcode
- [ ] Select build trong App Store Connect
- [ ] Review tất cả sections → green checkmarks
- [ ] Submit for Review
- [ ] ☕️ Chờ 24-48h

---

*Generated for Duna's Mystic Mahjong v1.0 — April 13, 2026*
