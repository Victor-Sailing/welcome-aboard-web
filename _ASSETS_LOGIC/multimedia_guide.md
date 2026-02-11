# Multimedia Strategy for Cursor

## 1. Storage Reference
- All media will be hosted in [Supabase Storage] or [Cloudinary/S3].
- Column 'main_photo_url' is mandatory for the Search Results view.
- Column 'gallery_urls' should contain at least 5 high-res photos.

## 2. Dynamic Agent Usage
- When the Agent recommends a boat, it MUST display the 'main_photo_url'.
- If the user asks "Do you have videos?", the Agent must fetch 'video_url'.

## 3. Placeholder Logic
- If a boat has no photo yet, use a placeholder: 'https://via.placeholder.com/800x600?text=Vessel+Photo+Coming+Soon'.
