# איך ליצור favicon.ico

קובץ `favicon.ico` הוא פורמט ישן אבל עדיין נתמך על ידי דפדפנים רבים.

## אופציה 1: באמצעות כלי אונליין
1. גש ל-https://favicon.io/favicon-converter/
2. העלה את הקובץ `favicon-192x192.png`
3. הורד את קובץ ה-`favicon.ico` שנוצר
4. שים אותו בתיקיית השורש של הפרויקט

## אופציה 2: באמצעות ImageMagick (שורת פקודה)
```bash
# התקן ImageMagick אם עדיין לא מותקן
# Windows: choco install imagemagick
# Mac: brew install imagemagick
# Linux: sudo apt-get install imagemagick

# צור favicon.ico מכמה גדלים
magick convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
```

## אופציה 3: באמצעות Python + Pillow
```python
from PIL import Image

# פתח את התמונה
img = Image.open('favicon-192x192.png')

# שמור כ-ICO
img.save('favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
```

## הוספה ל-HTML
לאחר יצירת הקובץ, הוסף את השורה הזו ל-`<head>` ב-`index.html`:
```html
<link rel="icon" type="image/x-icon" href="/haotzar-site/favicon.ico" />
```

## הערה
הקובץ `favicon.svg` שכבר קיים בפרויקט הוא מודרני יותר ונתמך על ידי רוב הדפדפנים החדשים.
קובץ ה-ICO נחוץ בעיקר לתמיכה בדפדפנים ישנים.
