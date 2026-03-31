// i18n - Internationalization Support for Hebrew and English
const translations = {
  he: {
    nav: {
      home: 'בית',
      features: 'תכונות',
      download: 'הורדה',
      about: 'אודות'
    },
    hero: {
      mainTitle: 'האוצר',
      title: 'מאגר דיגיטלי ענק של ספרי קודש',
      description: 'ספרייה חינמית לגישה מהירה למאות אלפי ספרים, טקסטים ומקורות תורניים. בנוי ללימוד: חיפוש מהיר, ממשק חלק, ציטוטים נקיים.',
      getStarted: 'התחל ללמוד',
      download: 'הורד עכשיו'
    },
    features: {
      title: 'תכונות מתקדמות',
      library: {
        title: 'מאגר ענק',
        description: 'תמיכה בכל המאגרים: מאגר האוצר, אוצריא והיברובוקס וספרים מהמחשב האישי שלך.'
      },
      search: {
        title: 'חיפוש חכם',
        description: 'חיפוש מהיר ומדויק בכל הספרים עם תוצאות רלוונטיות.'
      },
      times: {
        title: 'זמני היום',
        description: 'זמני היום, פרשת השבוע ודף היומי מעודכנים.'
      },
      responsive: {
        title: 'תומך בכל מכשיר',
        description: 'עובד בצורה מושלמת במחשב, טאבלט ונייד.'
      },
      design: {
        title: 'ממשק מרהיב',
        description: 'ממשק נקי ואלגנטי בסגנון תורני.'
      },
      usability: {
        title: 'קל לשימוש',
        description: 'ממשק אינטואיטיבי שהופך את הלימוד לפשוט ונעים.'
      }
    },
    download: {
      title: 'הורדה',
      description: 'זמין להורדה חינמית בכל הפלטפורמות. לא נדרשת הרשמה.',
      windows: 'הורד לווינדוס',
      android: 'הורד לאנדרואיד',
      ios: 'הורד ל-iOS',
      mac: 'הורד ל-Mac',
      linux: 'הורד ל-Linux',
      web: 'לאתר האוצר',
      otherPlatforms: 'פלטפורמות אחרות',
      choosePlatform: 'בחר פלטפורמה:',
      recommended: 'מומלץ'
    },
    about: {
      title: 'אודות האוצר',
      paragraph1: 'האוצר הוא ספרייה דיגיטלית מתקדמת שנועדה להנגיש את אוצרות התורה לכל אדם. אנו מאמינים ביצירת כלים חזקים אך פשוטים לשימוש, המאפשרים לך להתמקד במה שחשוב באמת - הלימוד.',
      paragraph2: 'נבנה עם טכנולוגיות ווב מתקדמות, האוצר מספק ביצועים יוצאי דופן וחוויית משתמש חלקה בכל המכשירים. בין אם אתה תלמיד, רב, או חוקר, האוצר מתאים את עצמו לצרכים שלך.',
      stats: {
        users: 'משתמשים פעילים',
        rating: 'דירוג משתמשים',
        support: 'תמיכה'
      }
    },
    faq: {
      title: 'שאלות נפוצות',
      description: 'מצא תשובות לשאלות הנפוצות ביותר על האוצר',
      q1: {
        question: 'מה זה האוצר?',
        answer: 'האוצר הוא אפליקציה חינמית לקריאה ולימוד ספרי קודש. האפליקציה מאפשרת גישה למאות אלפי ספרים, חיפוש מתקדם, סימניות ועוד תכונות רבות המיועדות ללימוד תורה.'
      },
      q2: {
        question: 'האם האוצר חינמי?',
        answer: 'כן! האוצר הוא לחלוטין חינמי ללא פרסומות. אין צורך בהרשמה או תשלום כלשהו. כל התכונות זמינות לכולם ללא הגבלה.'
      },
      q3: {
        question: 'אילו מאגרים נתמכים?',
        answer: 'האוצר תומך במאגרים הגדולים: מאגר האוצר המקורי, אוצריא, היברובוקס ועוד. בנוסף, ניתן להוסיף ספרים מהמחשב האישי שלך.'
      },
      q4: {
        question: 'האם ניתן להשתמש באויצר ללא אינטרנט?',
        answer: 'כן! לאחר הורדת הספרים, ניתן להשתמש באויצר במצב אופליין מלא. כל הספרים והתכונות זמינים גם ללא חיבור לאינטרנט.'
      },
      q5: {
        question: 'באילו מערכות הפעלה האוצר זמין?',
        answer: 'האוצר זמין לווינדוס, אנדרואיד, iOS, Mac ולינוקס. בנוסף, ניתן להשתמש בגרסת הווב ישירות מהדפדפן.'
      },
      q6: {
        question: 'איך מחפשים ספר או נושא מסוים?',
        answer: 'האוצר כולל מנוע חיפוש מתקדם המאפשר חיפוש לפי מילות מפתח, שם ספר, מחבר ועוד. החיפוש מהיר ומדויק ומציג תוצאות רלוונטיות תוך שניות.'
      },
      contact: {
        question: 'יש לכם שאלה נוספת? צרו קשר'
      }
    },
    footer: {
      product: {
        title: 'מוצר',
        features: 'תכונות',
        download: 'הורדה',
        about: 'אודות'
      },
      support: {
        title: 'תמיכה',
        docs: 'פורום האוצר',
        help: 'מרכז עזרה',
        contact: 'צור קשר'
      },
      connect: {
        title: 'התחבר',
        mitmahmim: 'מתמחים טופ',
        github: 'GitHub'
      },
      copyright: '© 2026 האוצר. כל הזכויות שמורות.'
    },
    popup: {
      title: 'קבל עדכונים על האוצר',
      description: 'הירשם לרשימת התפוצה שלנו וקבל עדכון ישירות למייל כשהתוכנה תהיה זמינה',
      emailPlaceholder: 'הכנס את כתובת המייל שלך',
      submit: 'שלח',
      successTitle: 'תודה על ההרשמה!',
      successMessage: 'נשלח לך עדכון ברגע שהתוכנה תהיה זמינה'
    },
    error404: {
      title: 'הדף לא נמצא',
      description: 'מצטערים, הדף שחיפשת לא קיים או הועבר למקום אחר. אולי תרצה לחזור לדף הבית או לחפש משהו אחר?',
      backHome: 'חזרה לדף הבית',
      downloadApp: 'הורד את האפליקציה'
    }
  },
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      download: 'Download',
      about: 'About'
    },
    hero: {
      mainTitle: 'HaOtzar',
      title: 'Vast Digital Library of Sacred Texts',
      description: 'Free library for quick access to hundreds of thousands of books, texts and Torah sources. Built for learning: fast search, smooth interface, clean citations.',
      getStarted: 'Start Learning',
      download: 'Download Now'
    },
    features: {
      title: 'Advanced Features',
      library: {
        title: 'Vast Library',
        description: 'Support for all libraries: HaOtzar, Otzaria and HebrewBooks, plus books from your personal computer.'
      },
      search: {
        title: 'Smart Search',
        description: 'Fast and accurate search across all books with relevant results.'
      },
      times: {
        title: 'Daily Times',
        description: 'Updated daily times, weekly portion and daily page.'
      },
      responsive: {
        title: 'All Devices',
        description: 'Works perfectly on desktop, tablet and mobile.'
      },
      design: {
        title: 'Stunning Interface',
        description: 'Clean and elegant interface in Torah style.'
      },
      usability: {
        title: 'Easy to Use',
        description: 'Intuitive interface that makes learning simple and pleasant.'
      }
    },
    download: {
      title: 'Download',
      description: 'Available for free download on all platforms. No registration required.',
      windows: 'Download for Windows',
      android: 'Download for Android',
      ios: 'Download for iOS',
      mac: 'Download for Mac',
      linux: 'Download for Linux',
      web: 'HaOtzar Website',
      otherPlatforms: 'Other Platforms',
      choosePlatform: 'Choose Platform:',
      recommended: 'Recommended'
    },
    about: {
      title: 'About HaOtzar',
      paragraph1: 'HaOtzar is an advanced digital library designed to make Torah treasures accessible to everyone. We believe in creating powerful yet simple tools that allow you to focus on what really matters - learning.',
      paragraph2: 'Built with advanced web technologies, HaOtzar provides exceptional performance and smooth user experience on all devices. Whether you are a student, rabbi, or researcher, HaOtzar adapts to your needs.',
      stats: {
        users: 'Active Users',
        rating: 'User Rating',
        support: 'Support'
      }
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Find answers to the most common questions about HaOtzar',
      q1: {
        question: 'What is HaOtzar?',
        answer: 'HaOtzar is a free application for reading and studying sacred texts. The app provides access to hundreds of thousands of books, advanced search, bookmarks and many other features designed for Torah study.'
      },
      q2: {
        question: 'Is HaOtzar free?',
        answer: 'Yes! HaOtzar is completely free with no ads. No registration or payment required. All features are available to everyone without limitation.'
      },
      q3: {
        question: 'Which libraries are supported?',
        answer: 'HaOtzar supports major libraries: the original HaOtzar library, Otzaria, HebrewBooks and more. Additionally, you can add books from your personal computer.'
      },
      q4: {
        question: 'Can I use HaOtzar offline?',
        answer: 'Yes! After downloading the books, you can use HaOtzar in full offline mode. All books and features are available even without an internet connection.'
      },
      q5: {
        question: 'Which operating systems is HaOtzar available for?',
        answer: 'HaOtzar is available for Windows, Android, iOS, Mac and Linux. Additionally, you can use the web version directly from your browser.'
      },
      q6: {
        question: 'How do I search for a specific book or topic?',
        answer: 'HaOtzar includes an advanced search engine that allows searching by keywords, book name, author and more. The search is fast and accurate, displaying relevant results within seconds.'
      },
      contact: {
        question: 'Have another question? Contact us'
      }
    },
    footer: {
      product: {
        title: 'Product',
        features: 'Features',
        download: 'Download',
        about: 'About'
      },
      support: {
        title: 'Support',
        docs: 'HaOtzar Forum',
        help: 'Help Center',
        contact: 'Contact'
      },
      connect: {
        title: 'Connect',
        mitmahmim: 'Mitmahmim Top',
        github: 'GitHub'
      },
      copyright: '© 2026 HaOtzar. All rights reserved.'
    },
    popup: {
      title: 'Get Updates About HaOtzar',
      description: 'Subscribe to our mailing list and receive an update directly to your email when the software is available',
      emailPlaceholder: 'Enter your email address',
      submit: 'Submit',
      successTitle: 'Thank you for subscribing!',
      successMessage: 'We will send you an update as soon as the software is available'
    },
    error404: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist or has been moved. You may want to return to the home page or search for something else.',
      backHome: 'Back to Home',
      downloadApp: 'Download the App'
    }
  }
};

// Get nested translation value
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

// Apply translations
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = getNestedValue(translations[lang], key);
    if (translation) {
      element.textContent = translation;
    }
  });
  
  // Update HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  
  // Update body direction
  document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
  
  // Save preference
  localStorage.setItem('language', lang);
}

// Initialize language
function initLanguage() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  const savedLang = localStorage.getItem('language');
  const browserLang = navigator.language.startsWith('he') ? 'he' : 'en';
  
  const currentLang = urlLang || savedLang || browserLang;
  applyTranslations(currentLang);
  
  // Setup language toggle
  const langToggle = document.querySelector('.lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const newLang = document.documentElement.lang === 'he' ? 'en' : 'he';
      applyTranslations(newLang);
    });
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  initLanguage();
}

// Export for external use
window.i18n = {
  applyTranslations,
  translatePage: function() {
    const currentLang = document.documentElement.lang || 'he';
    applyTranslations(currentLang);
  }
};
