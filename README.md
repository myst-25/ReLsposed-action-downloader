# ReLSPosed Auto Downloader / Mirror

Simple mirror for **ReLSPosed builds**.

👉 Download here:
https://myst-25.github.io/ReLsposed-action-downloader/

---

## What is this?

This repository automatically mirrors the latest **ReLSPosed** releases and provides:

✅ Direct downloads  
✅ Always latest version  
✅ No ads  
✅ No manual updates  
✅ Clean website  

You don’t need to search GitHub Actions or artifacts anymore.

Just open the site and click download.

---

## How to download?

### Step 1
Open the website:

👉 https://myst-25.github.io/ReLsposed-action-downloader/

### Step 2
Click:

• **Download Release** (normal use)  
or  
• **Download Debug** (testing/debug)

That’s it.

---

## What files are provided?

Every release includes:

• `zygisk-release.zip` → stable version  
• `zygisk-debug.zip` → debug version  

The exact original filenames are preserved.

Example:
ReLSPosed-v1.0.2-7211-zygisk-release.zip

yaml
Copy code

---

## How does this work?

This repo is a **mirror**, not a rebuild.

### Automatic process:

Every 30 minutes GitHub Actions:

1. Checks upstream repo:
ThePedroo/ReLSPosed

markdown
Copy code

2. Gets latest official release

3. Downloads the original zip files

4. Uploads them here as a new Release

5. Website auto-updates links

So:

Upstream release → mirror → website updates

yaml
Copy code

No manual work needed.

---

## Why mirror instead of rebuild?

Rebuilding would:
❌ change version numbers  
❌ take longer  
❌ use more CI time  

Mirroring:
✅ keeps original files  
✅ same hashes  
✅ same version  
✅ faster  
✅ safer  

You get the **exact same files** as upstream.

---

## Where do the files come from?

Source:
https://github.com/ThePedroo/ReLSPosed

yaml
Copy code

This repo ONLY mirrors them automatically.

Nothing is modified.

---

## Are these files safe?

Yes.

They are downloaded directly from upstream releases without modification.

Same filenames  
Same hashes  
Same content  

Just mirrored for easier access.

---

## When does it update?

Automatically:

• every 30 minutes  
• or instantly after upstream publishes a release

So the site always shows latest.

---

## Why use the website instead of GitHub?

Because:

GitHub:
❌ hard to find artifacts  
❌ confusing UI  
❌ too many clicks  

This site:
✅ one page  
✅ one click  
✅ always latest  

---

## For developers

This repo uses:

• GitHub Actions
• Release mirroring
• GitHub API
• Static GitHub Pages site

No builds. No compilation. Pure mirror.

Workflow file:
.github/workflows/release.yml

yaml
Copy code

---

## Credits

Original project:
ReLSPosed developers ❤️

This repo only provides a convenience mirror.

---

## Download again

👉 https://myst-25.github.io/ReLsposed-action-downloader/
