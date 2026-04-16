// Hebrew Calendar and Jewish Features
class HebrewCalendar {
  constructor() {
    this.months = [
      'תשרי', 'חשוון', 'כסלו', 'טבת', 'שבט', 'אדר',
      'ניסן', 'אייר', 'סיוון', 'תמוז', 'אב', 'אלול'
    ];
    
    this.parashot = [
      'בראשית', 'נח', 'לך לך', 'וירא', 'חיי שרה', 'תולדות', 'ויצא',
      'וישלח', 'וישב', 'מקץ', 'ויגש', 'ויחי', 'שמות', 'וארא',
      'בשלח', 'יתרו', 'משפטים', 'תרומה', 'תצוה', 'כי תשא', 'ויקהל',
      'פקודי', 'ויקרא', 'צו', 'שמיני', 'תזריע', 'אחרי מות', 'קדושים',
      'אמור', 'בהר', 'חקת', 'בלק', 'פינחס', 'מטות', 'מסעי', 'נשא',
      'בהעלותך', 'שלח לך', 'קרח', 'בלק', 'חוקת', 'פינחס', 'מטות', 'דברים',
      'ואתחנן', 'קי תצא', 'ראה', 'שופטים', 'כי תצא', 'כי תבוא', 'ניצבים',
      'וילך', 'האזינו', 'ראה', 'שופטים', 'כי תצא', 'כי תבוא', 'ניצבים', 'וילך', 'האזינו'
    ];
    
    this.dafYomiMasechtot = [
      'ברכות', 'שבת', 'עירובין', 'פסחים', 'שקלים', 'יומא', 'סוכה', 'ביצה',
      'תענית', 'מועד קטן', 'חגיגה', 'יבמות', 'כתובות', 'נדרים', 'נזיר',
      'סוטה', 'גיטין', 'קידושין', 'בבא קמא', 'בבא מציעא', 'בבא בתרא',
      'שבועות', 'עבודה זרה', 'הוריות', 'זבחים', 'מנחות', 'חולין', 'בכורות',
      'נדה', 'תמורה', 'כריתות', 'ערכין', 'זבחים', 'מנחות', 'חולין', 'בכורות',
      'נדה', 'תמורה', 'כריתות', 'ערכין', 'תמידה', 'מידות', 'שבועות', 'עדיות',
      'אבות', 'אבות דרבי נתן', 'דרך ארץ', 'פרקי אבות', 'קלה', 'מסכת קטנה'
    ];
  }

  // Get current Hebrew date
  getHebrewDate() {
    const now = new Date();
    const hebrewDate = this.toHebrewDate(now);
    
    return {
      day: hebrewDate.day,
      month: hebrewDate.month,
      year: hebrewDate.year,
      monthName: this.months[hebrewDate.month - 1],
      formatted: `${hebrewDate.day} ${this.months[hebrewDate.month - 1]} ${hebrewDate.year}`
    };
  }

  // Get current parasha
  getCurrentParasha() {
    const now = new Date();
    const weekNumber = Math.floor((now - new Date(now.getFullYear(), 0, 1)) / (7 * 24 * 60 * 60 * 1000));
    const parashaIndex = weekNumber % this.parashot.length;
    
    return this.parashot[parashaIndex];
  }

  // Get current Daf Yomi
  getCurrentDafYomi() {
    const dafYomiStart = new Date('1923-09-11'); // Start date of Daf Yomi cycle
    const now = new Date();
    const daysSinceStart = Math.floor((now - dafYomiStart) / (1000 * 60 * 60 * 24));
    
    let totalDafim = 0;
    let currentMasechta = 0;
    let currentDaf = 1;
    
    const masechtaLengths = [64, 157, 121, 121, 120, 89, 31, 5, 29, 27, 23, 47, 44, 66, 49, 43, 35, 34, 24, 31, 32, 33, 28, 23, 22, 37, 40, 43, 34, 44, 34, 28, 27, 23, 22, 20, 19];
    
    for (let i = 0; i < masechtaLengths.length; i++) {
      if (totalDafim + masechtaLengths[i] > daysSinceStart) {
        currentMasechta = i;
        currentDaf = daysSinceStart - totalDafim + 1;
        break;
      }
      totalDafim += masechtaLengths[i];
    }
    
    return {
      masechta: this.dafYomiMasechtot[currentMasechta],
      daf: currentDaf,
      formatted: `דף היומי: ${this.dafYomiMasechtot[currentMasechta]} דף ${currentDaf}`
    };
  }

  // Get zmanim (prayer times)
  getZmanim(location = 'Jerusalem') {
    const now = new Date();
    const times = this.calculateZmanim(now, location);
    
    return {
      alot: times.alot,
      misheyakir: times.misheyakir,
      sunrise: times.sunrise,
      shma: times.shma,
      tefila: times.tefila,
      chatzot: times.chatzot,
      mincha: times.mincha,
      sunset: times.sunset,
      tzeit: times.tzeit
    };
  }

  // Simple Hebrew date conversion (simplified)
  toHebrewDate(date) {
    // This is a simplified version - in real implementation you'd use a proper Hebrew calendar library
    const year = date.getFullYear() + 3760; // Approximate conversion
    const month = date.getMonth() + 1;
    const day = date.getDate();
    
    return { day, month, year };
  }

  // Calculate zmanim (simplified)
  calculateZmanim(date, location) {
    // This is a simplified version - in real implementation you'd use proper astronomical calculations
    const sunrise = new Date(date);
    sunrise.setHours(6, 0, 0, 0);
    
    const sunset = new Date(date);
    sunset.setHours(18, 0, 0, 0);
    
    return {
      alot: '04:30',
      misheyakir: '05:15',
      sunrise: '06:00',
      shma: '09:00',
      tefila: '10:00',
      chatzot: '12:30',
      mincha: '13:30',
      sunset: '18:00',
      tzeit: '19:30'
    };
  }

  // Get comprehensive Jewish info
  getJewishInfo() {
    const hebrewDate = this.getHebrewDate();
    const parasha = this.getCurrentParasha();
    const dafYomi = this.getCurrentDafYomi();
    const zmanim = this.getZmanim();
    
    return {
      hebrewDate: hebrewDate.formatted,
      parasha: `פרשת השבוע: ${parasha}`,
      dafYomi: dafYomi.formatted,
      zmanim: zmanim
    };
  }
}

// Initialize and expose the calendar
const hebrewCalendarInstance = new HebrewCalendar();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    HebrewCalendar: HebrewCalendar,
    hebrewCalendar: hebrewCalendarInstance
  };
} else {
  window.HebrewCalendar = HebrewCalendar;
  window.hebrewCalendar = hebrewCalendarInstance;
}
