# ✅ App Store Publish Checklist — Duna's Alchemy Master
## Last audited: April 11, 2026

> Items marked ✅ are verified. Items marked ⬜ require manual action before submission.

---

## 📋 Phase 1: Project Settings ✅ ALL COMPLETE

| Item | Status | Details |
|------|--------|---------|
| Bundle ID | ✅ | `com.duna.AlchemyMaster.Alchemy-Master` |
| Display Name | ✅ | `Duna's Alchemy Master` |
| Version | ✅ | `1.0.0` (MARKETING_VERSION + CFBundleShortVersionString) |
| Build | ✅ | `1` (CURRENT_PROJECT_VERSION + CFBundleVersion) |
| iOS Deployment Target | ✅ | 16.0 |
| Devices | ✅ | iPhone + iPad (TARGETED_DEVICE_FAMILY = "1,2") |
| Orientation | ✅ | Portrait only (iPhone), Portrait + UpsideDown (iPad) |
| Full Screen | ✅ | UIRequiresFullScreen = YES |
| Dev Team | ✅ | JY74FRJ3J3 |
| Code Signing | ✅ | Automatic |
| Export Compliance | ✅ | ITSAppUsesNonExemptEncryption = NO |
| ATT Description | ✅ | NSUserTrackingUsageDescription set |
| SKAdNetwork | ✅ | 14 networks configured |
| Launch Screen | ✅ | UILaunchScreen with black background |
| Release Build | ✅ | **Clean — zero errors, zero warnings** |

---

## 📋 Phase 2: Code Quality ✅ ALL COMPLETE

| Item | Status | Details |
|------|--------|---------|
| Debug prints | ✅ | All `print()` wrapped in `#if DEBUG` |
| showsFPS/showsNodeCount | ✅ | Inside `#if DEBUG` in GameViewController |
| Debug overlays | ✅ | AdMob debug stub only active when SDK not installed |
| No TODO/FIXME/HACK | ✅ | No markers found in code |
| Compiler warnings | ✅ | Zero warnings in Release build |
| Levels verified | ✅ | 25 levels + BFS solver-verified endless mode |

---

## 📋 Phase 3: Assets ✅ ALL COMPLETE

| Item | Status | Details |
|------|--------|---------|
| App Icon 1024x1024 | ✅ | Light + Dark + Tinted variants |
| macOS icons | ✅ | 16, 32, 64, 128, 256, 512, 1024 (all @1x and @2x) |
| Icon Contents.json | ✅ | No unassigned children |
| Levels.json | ✅ | 25 valid levels, all solvable |
| iOS/Shared files synced | ✅ | All 17 Swift files + 1 JSON synced |

---

## 📋 Phase 4: Legal & Privacy ✅ FILES READY

| Item | Status | Details |
|------|--------|---------|
| Privacy Policy | ✅ File ready | `AppStore/PrivacyPolicy.html` |
| Terms of Service | ✅ File ready | `AppStore/TermsOfService.html` |
| App Store Metadata | ✅ | `AppStore/AppStoreMetadata.md` — complete |
| ⬜ Host Privacy Policy online | ⬜ TODO | Upload to: GitHub Pages / Netlify / your domain |
| ⬜ Host Terms of Service online | ⬜ TODO | Upload alongside Privacy Policy |

---

## 📋 Phase 5: AdMob ✅ IDs CONFIGURED (auto-switching)

> Ad unit IDs automatically switch between test (DEBUG) and real (RELEASE).
> **No code changes needed when going to production.**

| Item | Status | Details |
|------|--------|---------|
| App ID (Info.plist) | ✅ | `ca-app-pub-5115828862032559~4945962695` (REAL, always) |
| Banner ID | ✅ | `ca-app-pub-5115828862032559/6650972783` (RELEASE) / test ID (DEBUG) |
| Interstitial ID | ✅ | `ca-app-pub-5115828862032559/9744039984` (RELEASE) / test ID (DEBUG) |
| Rewarded ID | ✅ | `ca-app-pub-5115828862032559/7255050971` (RELEASE) / test ID (DEBUG) |
| Auto-switch | ✅ | `AdUnitIDs` struct uses `#if DEBUG` → test IDs, `#else` → real IDs |
| Policy compliance | ✅ | DEBUG always uses Google test IDs → no invalid clicks |
| ⬜ Install SDK | ⬜ | SPM: `https://github.com/googleads/swift-package-manager-google-mobile-ads` |
| ⬜ Test on device | ⬜ | Verify banner, interstitial, rewarded with real SDK |

### How it works:
```
DEBUG build  → AdUnitIDs.banner = "ca-app-pub-3940256099942544/..." (Google test)
RELEASE build → AdUnitIDs.banner = "ca-app-pub-5115828862032559/..." (Your real ID)
```
No code changes needed. Just Archive → Upload.

---

## 📋 Phase 6: App Store Connect ⬜ REQUIRES MANUAL SETUP

| Item | Action |
|------|--------|
| ⬜ Create App Record | Apps → "+" → New App |
| ⬜ Fill App Information | Name, Subtitle, Category (Puzzle), Subcategory (Casual) |
| ⬜ Set Pricing | Free |
| ⬜ Paste Description | Copy from `AppStoreMetadata.md` |
| ⬜ Paste Keywords | `puzzle,sort,potion,alchemy,color,flask,liquid,water,brain,magic,casual,tube,sorting,wizard,match` |
| ⬜ Set Privacy Policy URL | URL where you hosted `PrivacyPolicy.html` |
| ⬜ Set Support URL | Your support email or webpage |
| ⬜ Fill Age Rating | All answers: None/No → Rating: **4+** |
| ⬜ App Privacy Labels | Identifiers (Advertising ID), Usage Data |

---

## 📋 Phase 7: Screenshots ⬜ REQUIRES MANUAL CAPTURE

| Device | Resolution | Min Required |
|--------|-----------|-------------|
| ⬜ iPhone 6.7" | 1290 × 2796 | 3 screenshots |
| ⬜ iPhone 6.5" | 1284 × 2778 | 3 screenshots |
| ⬜ iPad Pro 12.9" | 2048 × 2732 | 3 screenshots (if supporting iPad) |

### Suggested screenshot scenes:
1. Gameplay — Colorful flasks with liquids
2. Special mechanics — Ice/Mystery/Cracked flask
3. Win celebration — Fireworks effect
4. Booster in action — Wand or Undo
5. Complex level — 6+ colors with many tubes

---

## 📋 Phase 8: Build & Upload ⬜ FINAL STEP

```
1. Open Xcode
2. Set scheme: "Alchemy Master iOS"
3. Set destination: "Any iOS Device (arm64)"
4. Product → Clean Build Folder (⇧⌘K)
5. Product → Archive
6. In Organizer: Select archive → Distribute App
7. Choose: App Store Connect → Upload
8. Enable: Strip Swift Symbols, Upload Symbols
9. Wait for processing (10-30 min)
10. In App Store Connect: Select build, Submit for Review
```

---

## 📋 Phase 9: Post-Launch

- [ ] Monitor crash reports in App Store Connect
- [ ] Monitor AdMob revenue dashboard
- [ ] Respond to user reviews
- [ ] Plan v1.1 update with more levels / new mechanics
- [ ] Consider adding Game Center leaderboard
- [ ] Consider localization (Vietnamese, Japanese, Korean)

---

## 🎯 SUMMARY

| Category | Status |
|----------|--------|
| Project Settings | ✅ Complete |
| Code Quality | ✅ Complete |
| Assets & Icons | ✅ Complete |
| Legal Files | ✅ Files ready (need hosting) |
| AdMob | ✅ IDs configured (need SDK install) |
| App Store Connect | ⬜ Need account setup |
| Screenshots | ⬜ Need capture |
| Build & Upload | ⬜ Final step |

### Estimated time to go-live:
- **If AdMob + hosting ready**: ~2 hours (screenshots + archive + upload)
- **From scratch**: ~1 day (AdMob setup + hosting + screenshots + review)
- **Apple Review**: 24-48 hours typical for new apps
