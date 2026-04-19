// Modern Web Application JavaScript
// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

// Initialize Application
function initializeApp() {
  setupNavigation();
  setupScrollEffects();
  setupAnimations();
  setupFormHandlers();
  setupTheme();
  setupImageCarousel();
  setupPlatformDetection();
  setupFAQ();
  setupEmailPopup();
  console.log('האוצר initialized successfully');
}

// Navigation Setup
function setupNavigation() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const logo = document.querySelector('.nav-logo h1');

  // Logo click to scroll to top
  if (logo) {
    logo.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    logo.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });

  // Active navigation highlighting
  setActiveNavLink();
}

// Set active navigation link based on scroll position
function setActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  function updateActiveLink() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === `#${current}` || (current === '' && href === '#home')) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
}

// Scroll Effects
function setupScrollEffects() {
  const header = document.querySelector('.header');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    // Header shadow on scroll
    if (currentScroll > 10) {
      header.style.boxShadow = '0 2px 20px rgba(92, 61, 46, 0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
}

// Animation Setup
function setupAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add staggered animation for feature cards
        if (entry.target.classList.contains('feature-card')) {
          const cards = Array.from(document.querySelectorAll('.feature-card'));
          const index = cards.indexOf(entry.target);
          
          // Animate all cards in sequence once the first one is visible
          cards.forEach((card, i) => {
            setTimeout(() => {
              card.classList.add('animate-in');
            }, i * 30); // 30ms delay between each card
          });
          
          // Unobserve all cards
          cards.forEach(card => observer.unobserve(card));
        } else {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature-row, .stat, .section-title, .section-description, .about-text p, .faq-item');
  animateElements.forEach(el => observer.observe(el));

  // Add CSS for animations
  addAnimationStyles();
}

// Add animation styles
function addAnimationStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .feature-row,
    .stat,
    .faq-item {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
    
    .stat:nth-child(1) { transition-delay: 0s; }
    .stat:nth-child(2) { transition-delay: 0.03s; }
    .stat:nth-child(3) { transition-delay: 0.06s; }
    
    .faq-item:nth-child(1) { transition-delay: 0s; }
    .faq-item:nth-child(2) { transition-delay: 0.05s; }
    .faq-item:nth-child(3) { transition-delay: 0.1s; }
    .faq-item:nth-child(4) { transition-delay: 0.15s; }
    .faq-item:nth-child(5) { transition-delay: 0.2s; }
    .faq-item:nth-child(6) { transition-delay: 0.25s; }
  `;
  document.head.appendChild(style);
}

// Form Handlers
function setupFormHandlers() {
  // Button click handlers
  const buttons = document.querySelectorAll('.btn, .download-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      handleButtonClick(e, this);
    });
  });

  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Handle button clicks
function handleButtonClick(event, button) {
  // Add ripple effect
  createRipple(event, button);
  
  // Handle specific button actions
  const buttonAction = button.getAttribute('data-action');
  if (buttonAction === 'get-started') {
    window.open('https://haotzar.netlify.app/', '_blank', 'noopener');
    return;
  }

  const buttonText = button.textContent.trim().toLowerCase();
  
  switch(buttonText) {
    case 'התחל ללמוד':
      window.open('https://haotzar.netlify.app/', '_blank', 'noopener');
      break;
    case 'הורד עכשיו':
      document.getElementById('download').scrollIntoView({ behavior: 'smooth' });
      break;
    case 'ווינדוס':
      showNotification('הורדת גרסת ווינדוס...', 'info');
      break;
    case 'אנדרואיד':
      showNotification('הורדת גרסת אנדרואיד...', 'info');
      break;
    case 'לאתר האוצר':
      showNotification('פותח את אתר האוצר...', 'info');
      break;
    default:
      console.log('Button clicked:', buttonText);
  }
}

// Create ripple effect
function createRipple(event, button) {
  const ripple = document.createElement('span');
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  ripple.classList.add('ripple');
  
  // Add ripple styles
  if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
      }
      
      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
      
      .btn, .download-btn {
        position: relative;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }
  
  button.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

// Theme Setup
function setupTheme() {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
  updateThemeIcon(savedTheme);

  // Theme toggle functionality
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Theme toggle functionality (if needed in future)
  window.addEventListener('storage', function(e) {
    if (e.key === 'theme') {
      applyTheme(e.newValue);
      updateThemeIcon(e.newValue);
    }
  });
}

// Apply theme
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Update theme icon
function updateThemeIcon(theme) {
  const themeToggle = document.querySelector('.theme-toggle i');
  if (themeToggle) {
    if (theme === 'dark') {
      themeToggle.className = 'ms-Icon ms-Icon--ClearNight';
    } else {
      themeToggle.className = 'ms-Icon ms-Icon--Sunny';
    }
  }
}

// Hebrew Calendar Integration
function setupHebrewCalendar() {
  if (typeof HebrewCalendar !== 'undefined') {
    const calendar = new HebrewCalendar();
    const jewishInfo = calendar.getJewishInfo();
    
    // Update Jewish info display if elements exist
    const hebrewDateElement = document.getElementById('hebrew-date');
    const parashaElement = document.getElementById('parasha');
    const dafYomiElement = document.getElementById('daf-yomi');
    
    if (hebrewDateElement) {
      hebrewDateElement.textContent = jewishInfo.hebrewDate;
    }
    
    if (parashaElement) {
      parashaElement.textContent = jewishInfo.parasha;
    }
    
    if (dafYomiElement) {
      dafYomiElement.textContent = jewishInfo.dafYomi;
    }
  }
}

// Notification System
function showNotification(message, type = 'info') {
  return;
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  
  // Add notification styles
  if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
      .notification {
        position: fixed;
        top: 100px;
        left: 20px;
        padding: 1.25rem 1.75rem;
        border-radius: 0.75rem;
        color: var(--text-primary);
        font-weight: 500;
        z-index: 9999;
        transform: translateX(-400px);
        transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        max-width: 350px;
        box-shadow: 0 10px 40px rgba(139, 111, 71, 0.3);
        backdrop-filter: blur(10px);
        border: 2px solid rgba(139, 111, 71, 0.2);
        font-family: var(--font-heading);
        font-size: 1.05rem;
      }
      
      .notification-success {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(196, 165, 116, 0.95) 100%);
        color: #2a1810;
        border-color: rgba(212, 175, 55, 0.4);
      }
      
      .notification-info {
        background: linear-gradient(135deg, rgba(139, 111, 71, 0.95) 0%, rgba(160, 130, 90, 0.95) 100%);
        color: white;
        border-color: rgba(139, 111, 71, 0.4);
      }
      
      .notification-warning {
        background: linear-gradient(135deg, rgba(212, 175, 55, 0.95) 0%, rgba(218, 165, 32, 0.95) 100%);
        color: #2a1810;
        border-color: rgba(212, 175, 55, 0.4);
      }
      
      .notification-error {
        background: linear-gradient(135deg, rgba(139, 69, 19, 0.95) 0%, rgba(160, 82, 45, 0.95) 100%);
        color: white;
        border-color: rgba(139, 69, 19, 0.4);
      }
      
      .notification.show {
        transform: translateX(0);
      }
      
      .notification::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255, 255, 255, 0.03) 10px,
          rgba(255, 255, 255, 0.03) 20px
        );
        border-radius: 0.75rem;
        pointer-events: none;
      }
      
      @media (max-width: 480px) {
        .notification {
          right: 10px;
          left: 10px;
          max-width: calc(100% - 20px);
          transform: translateY(-100px);
        }
        
        .notification.show {
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Trigger animation
  setTimeout(() => notification.classList.add('show'), 100);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Performance monitoring
function logPerformance() {
  if ('performance' in window) {
    window.addEventListener('load', function() {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page Load Time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
      }, 0);
    });
  }
}

// Error handling
window.addEventListener('error', function(e) {
  console.error('JavaScript Error:', e.error);
  showNotification('Something went wrong. Please try again.', 'error');
});

// Service Worker registration (for PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js')
      .then(function(registration) {
        console.log('SW registered: ', registration);
      })
      .catch(function(registrationError) {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Initialize performance monitoring
logPerformance();

// Export functions for external use if needed
window.MyApp = {
  showNotification,
  applyTheme,
  createRipple
};


// Platform Detection and Download Buttons
function setupPlatformDetection() {
  // Wait a bit to ensure i18n is loaded
  setTimeout(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    let detectedPlatform = 'web';
    
    // Detect Windows
    if (/windows/i.test(userAgent)) {
      detectedPlatform = 'windows';
    }
    // Detect Android
    else if (/android/i.test(userAgent)) {
      detectedPlatform = 'android';
    }
    // Detect iOS
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      detectedPlatform = 'ios';
    }
    // Detect Mac
    else if (/Mac/.test(userAgent)) {
      detectedPlatform = 'mac';
    }
    // Detect Linux
    else if (/Linux/.test(userAgent)) {
      detectedPlatform = 'linux';
    }
    
    console.log('Detected platform:', detectedPlatform);
    
    // Update download buttons
    updateDownloadButtons(detectedPlatform);
  }, 100);
}

function updateDownloadButtons(platform) {
  const downloadButtons = document.querySelector('.download-buttons');
  if (!downloadButtons) {
    console.error('Download buttons container not found');
    return;
  }
  
  console.log('Updating download buttons for platform:', platform);
  
  // Platform configurations
  const platforms = {
    windows: {
      id: 'windows',
      icon: 'https://img.icons8.com/color/96/windows-11.png', // High-quality 3D/Color Windows 11 icon
      text: 'download.windows',
      textFallback: 'הורד לווינדוס',
      url: '#download-windows'
    },
    android: {
      id: 'android',
      icon: 'https://img.icons8.com/color/96/android-os.png', // High-quality Color Android icon
      text: 'download.android',
      textFallback: 'הורד לאנדרואיד',
      url: '#download-android'
    },
    ios: {
      id: 'ios',
      icon: 'https://img.icons8.com/color/96/apple-app-store--v1.png', // App Store icon for iOS
      text: 'download.ios',
      textFallback: 'הורד ל-iOS',
      url: '#download-ios'
    },
    mac: {
      id: 'mac',
      icon: 'https://img.icons8.com/color/96/mac-os--v1.png', // Mac OS icon
      text: 'download.mac',
      textFallback: 'הורד ל-Mac',
      url: '#download-mac'
    },
    linux: {
      id: 'linux',
      icon: 'https://img.icons8.com/color/96/linux.png', // High-quality Linux penguin icon
      text: 'download.linux',
      textFallback: 'הורד ל-Linux',
      url: '#download-linux'
    },
    web: {
      id: 'web',
      icon: 'https://img.icons8.com/color/96/chrome--v1.png', // Color Chrome/Web icon
      text: 'download.web',
      textFallback: 'לאתר האוצר',
      url: 'https://www.haoetz.com'
    }
  };
  
  const currentPlatform = platforms[platform] || platforms.web;
  
  // Clear existing buttons
  downloadButtons.innerHTML = '';
  
  // Create wrapper for recommended button
  const wrapper = document.createElement('div');
  wrapper.className = 'download-btn-wrapper recommended-wrapper';
  wrapper.style.position = 'relative';
  wrapper.style.display = 'inline-block';
  
  const badge = document.createElement('span');
  badge.className = 'recommended-badge';
  badge.textContent = 'מומלץ';
  badge.setAttribute('data-i18n', 'download.recommended');
  
  // Create primary download button (detected platform)
  const primaryButton = createDownloadButton(currentPlatform, true);
  primaryButton.classList.add('recommended');
  
  wrapper.appendChild(badge);
  wrapper.appendChild(primaryButton);
  
  // Create "show other platforms" button
  const otherPlatformsButton = document.createElement('button');
  otherPlatformsButton.className = 'download-btn download-btn-secondary';
  otherPlatformsButton.innerHTML = `
    <span class="download-icon"><i class="ms-Icon ms-Icon--More"></i></span>
    <span data-i18n="download.otherPlatforms">פלטפורמות אחרות</span>
  `;
  
  // Add buttons
  downloadButtons.appendChild(wrapper);
  downloadButtons.appendChild(otherPlatformsButton);
  
  console.log('Download buttons updated successfully');
  
  // Handle "other platforms" click
  otherPlatformsButton.addEventListener('click', function() {
    showAllPlatforms(downloadButtons, platform, platforms);
  });
  
  // Apply i18n if available
  if (window.i18n && window.i18n.translatePage) {
    window.i18n.translatePage();
  }
}

function createDownloadButton(platformConfig, isPrimary = false) {
  const button = document.createElement('button');
  button.className = isPrimary ? 'download-btn download-btn-primary' : 'download-btn';
  
  // Check if it's an SVG URL or icon class
  const isSvgUrl = platformConfig.icon.startsWith('http') || platformConfig.icon.startsWith('data:');
  
  if (isSvgUrl) {
    button.innerHTML = `
      <span class="download-icon download-icon-svg">
        <img src="${platformConfig.icon}" alt="${platformConfig.textFallback}" class="platform-logo" />
      </span>
      <span data-i18n="${platformConfig.text}">${platformConfig.textFallback}</span>
    `;
  } else {
    button.innerHTML = `
      <span class="download-icon"><i class="ms-Icon ${platformConfig.icon}"></i></span>
      <span data-i18n="${platformConfig.text}">${platformConfig.textFallback}</span>
    `;
  }
  
  button.addEventListener('click', function() {
    handleDownloadClick(platformConfig);
  });
  
  return button;
}

function showAllPlatforms(container, currentPlatform, platforms) {
  // Clear container
  container.innerHTML = '';
  container.style.display = 'block';
  
  // Add title
  const title = document.createElement('div');
  title.className = 'download-platforms-title';
  title.innerHTML = '<h3 data-i18n="download.choosePlatform">בחר פלטפורמה:</h3>';
  container.appendChild(title);
  
  // Create buttons grid
  const grid = document.createElement('div');
  grid.className = 'download-buttons-grid';
  
  // Add all platform buttons
  Object.entries(platforms).forEach(([key, config]) => {
    const isRecommended = key === currentPlatform;
    
    if (isRecommended) {
      // Create a wrapper for recommended button to handle the badge outside the overflow:hidden button
      const wrapper = document.createElement('div');
      wrapper.className = 'download-btn-wrapper recommended-wrapper';
      wrapper.style.position = 'relative';
      
      const badge = document.createElement('span');
      badge.className = 'recommended-badge';
      badge.textContent = 'מומלץ';
      badge.setAttribute('data-i18n', 'download.recommended');
      
      const button = createDownloadButton(config, true);
      button.classList.add('recommended');
      
      wrapper.appendChild(badge);
      wrapper.appendChild(button);
      grid.appendChild(wrapper);
    } else {
      const button = createDownloadButton(config, false);
      grid.appendChild(button);
    }
  });
  
  container.appendChild(grid);
  
  // Apply i18n if available
  if (window.i18n && window.i18n.translatePage) {
    window.i18n.translatePage();
  }
}

function handleDownloadClick(platformConfig) {
  const platform = platformConfig.textFallback;
  showNotification(`מתחיל הורדה עבור ${platform}...`, 'info');
  
  console.log('Download initiated for:', platformConfig);

  const platformId = platformConfig.id;
  
  if (platformId === 'web') {
    window.open(platformConfig.url, '_blank', 'noopener');
    showNotification(`נפתח קישור עבור ${platform}`, 'success');
    return;
  }

  if (platformId === 'windows') {
    downloadLatestFromGitHub('windows').catch(err => {
      console.error('Windows download failed:', err);
      showNotification('לא הצלחנו להתחיל את ההורדה. פותח דף ריליסים...', 'warning');
      window.open('https://github.com/haotzar/haotzar/releases', '_blank', 'noopener');
    });
    return;
  }

  if (platformId === 'mac') {
    downloadLatestFromGitHub('mac').catch(err => {
      console.error('Mac download failed:', err);
      showNotification('לא הצלחנו להתחיל את ההורדה. פותח דף ריליסים...', 'warning');
      window.open('https://github.com/haotzar/haotzar/releases', '_blank', 'noopener');
    });
    return;
  }

  if (platformId === 'linux') {
    downloadLatestFromGitHub('linux').catch(err => {
      console.error('Linux download failed:', err);
      showNotification('לא הצלחנו להתחיל את ההורדה. פותח דף ריליסים...', 'warning');
      window.open('https://github.com/haotzar/haotzar/releases', '_blank', 'noopener');
    });
    return;
  }

  window.open('https://github.com/haotzar/haotzar/releases/latest', '_blank', 'noopener');
  showNotification(`פתחתי את דף הריליסים עבור ${platform}`, 'success');
}

async function downloadLatestFromGitHub(platform) {
  const cached = getCachedLatestAssetUrl(platform);
  if (cached) {
    window.location.assign(cached);
    showNotification('ההורדה החלה...', 'success');
    return;
  }

  const apiUrl = 'https://api.github.com/repos/haotzar/haotzar/releases/latest';
  const response = await fetch(apiUrl, {
    headers: {
      'Accept': 'application/vnd.github+json'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const release = await response.json();
  const assets = Array.isArray(release.assets) ? release.assets : [];
  const url = pickAssetUrlFromReleaseAssets(assets, platform);
  if (!url) {
    throw new Error(`No matching ${platform} asset found in latest release`);
  }

  cacheLatestAssetUrl(platform, url);
  window.location.assign(url);
  showNotification('ההורדה החלה...', 'success');
}

function pickAssetUrlFromReleaseAssets(assets, platform) {
  const normalized = assets
    .filter(a => a && typeof a.name === 'string' && typeof a.browser_download_url === 'string')
    .map(a => ({ name: a.name, url: a.browser_download_url }));

  if (platform === 'windows') {
    const isHaotzarX64Setup = (name) => /^haotzar[-_].*_x64-setup\.exe$/i.test(name);
    const isWindowsName = (name) => /windows|win32|win64|win-x64|win-x86/i.test(name);
    const isPreferredExt = (name) => /\.(msi|exe)$/i.test(name);
    const isAcceptableExt = (name) => /\.(msi|exe|zip)$/i.test(name);

    const exact = normalized.find(a => isHaotzarX64Setup(a.name));
    if (exact) return exact.url;

    const preferred = normalized.find(a => isWindowsName(a.name) && isPreferredExt(a.name));
    if (preferred) return preferred.url;

    const acceptable = normalized.find(a => isWindowsName(a.name) && isAcceptableExt(a.name));
    if (acceptable) return acceptable.url;

    const fallbackPreferred = normalized.find(a => isPreferredExt(a.name));
    if (fallbackPreferred) return fallbackPreferred.url;

    const fallbackAcceptable = normalized.find(a => isAcceptableExt(a.name));
    if (fallbackAcceptable) return fallbackAcceptable.url;
  }

  if (platform === 'mac') {
    const isMacName = (name) => /mac|darwin|osx|macos/i.test(name);
    const isPreferredExt = (name) => /\.(dmg|pkg)$/i.test(name);
    const isAcceptableExt = (name) => /\.(dmg|pkg|zip)$/i.test(name);

    const preferred = normalized.find(a => isMacName(a.name) && isPreferredExt(a.name));
    if (preferred) return preferred.url;

    const acceptable = normalized.find(a => isMacName(a.name) && isAcceptableExt(a.name));
    if (acceptable) return acceptable.url;

    const fallbackPreferred = normalized.find(a => isPreferredExt(a.name));
    if (fallbackPreferred) return fallbackPreferred.url;

    const fallbackAcceptable = normalized.find(a => isAcceptableExt(a.name));
    if (fallbackAcceptable) return fallbackAcceptable.url;
  }

  if (platform === 'linux') {
    const isLinuxName = (name) => /linux|ubuntu|debian|fedora|appimage/i.test(name);
    const isPreferredExt = (name) => /\.(appimage|deb|rpm)$/i.test(name);
    const isAcceptableExt = (name) => /\.(appimage|deb|rpm|tar\.gz|zip)$/i.test(name);

    const preferred = normalized.find(a => isLinuxName(a.name) && isPreferredExt(a.name));
    if (preferred) return preferred.url;

    const acceptable = normalized.find(a => isLinuxName(a.name) && isAcceptableExt(a.name));
    if (acceptable) return acceptable.url;

    const fallbackPreferred = normalized.find(a => isPreferredExt(a.name));
    if (fallbackPreferred) return fallbackPreferred.url;

    const fallbackAcceptable = normalized.find(a => isAcceptableExt(a.name));
    if (fallbackAcceptable) return fallbackAcceptable.url;
  }

  return null;
}

function getCachedLatestAssetUrl(platform) {
  try {
    const key = `haotzar_latest_${platform}_asset_url`;
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.url !== 'string' || typeof parsed.ts !== 'number') return null;
    if (Date.now() - parsed.ts > 6 * 60 * 60 * 1000) return null;
    return parsed.url;
  } catch {
    return null;
  }
}

function cacheLatestAssetUrl(platform, url) {
  try {
    const key = `haotzar_latest_${platform}_asset_url`;
    sessionStorage.setItem(key, JSON.stringify({ url, ts: Date.now() }));
  } catch {
  }
}

// Image Carousel for Hero Section
function setupImageCarousel() {
  const images = [
    '/haotzar-site/art/app-screenshot.PNG',
    '/haotzar-site/art/app-screenshot-2.PNG',
    '/haotzar-site/art/app-screenshot-3.PNG'
  ];
  
  let currentIndex = 0;
  const heroImagePlaceholder = document.querySelector('.hero-image-placeholder');
  
  if (!heroImagePlaceholder) return;
  
  // Clear existing images
  heroImagePlaceholder.innerHTML = '';
  
  const loadedImages = [];
  
  // Create all image elements
  images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `צילום מסך ${index + 1} של אפליקציית האוצר`;
    img.className = 'hero-image';
    if (index === 0) img.classList.add('active');
    img.dataset.slide = index;
    
    // Handle image load success
    img.onload = function() {
      loadedImages.push(this);
    };
    
    // Handle image load error - if image doesn't exist, don't add it
    img.onerror = function() {
      this.remove();
    };
    
    heroImagePlaceholder.appendChild(img);
  });
  
  // Create navigation dots
  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'carousel-dots';
  heroImagePlaceholder.appendChild(dotsContainer);
  
  // Wait a bit for images to load, then setup dots and rotation
  setTimeout(() => {
    const allImages = document.querySelectorAll('.hero-image');
    
    if (allImages.length <= 1) return; // Don't add controls if only one image
    
    // Create dots for each loaded image
    allImages.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `עבור לתמונה ${index + 1}`);
      if (index === 0) dot.classList.add('active');
      
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(allImages);
      });
      
      dotsContainer.appendChild(dot);
    });
    
    // Auto-rotate images every 5 seconds
    setInterval(() => {
      if (allImages.length <= 1) return;
      currentIndex = (currentIndex + 1) % allImages.length;
      updateCarousel(allImages);
    }, 5000);
  }, 100);
  
  function updateCarousel(images) {
    images.forEach((img, index) => {
      img.classList.toggle('active', index === currentIndex);
    });
    
    const dots = document.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }
}

// FAQ Accordion
function setupFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active', !isActive);
    });
  });
}

// Email Popup Setup
function setupEmailPopup() {
  const popup = document.getElementById('emailPopup');
  const closeBtn = popup.querySelector('.email-popup-close');
  const form = document.getElementById('emailPopupForm');
  const successMessage = document.getElementById('emailPopupSuccess');
  
  // Check if user has already seen the popup
  const hasSeenPopup = localStorage.getItem('hasSeenEmailPopup');
  const hasSubscribed = localStorage.getItem('hasSubscribedEmail');
  
  // Show popup after 3 seconds if user hasn't seen it or subscribed
  if (!hasSeenPopup && !hasSubscribed) {
    setTimeout(() => {
      popup.classList.add('show');
      localStorage.setItem('hasSeenEmailPopup', 'true');
    }, 3000);
  }
  
  // Close popup when clicking close button
  closeBtn.addEventListener('click', () => {
    popup.classList.remove('show');
  });
  
  // Close popup when clicking outside
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('show');
    }
  });
  
  // Close popup on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('show')) {
      popup.classList.remove('show');
    }
  });
  
  // Handle form submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    if (!email) {
      showNotification('נא להזין כתובת מייל תקינה', 'warning');
      return;
    }
    
    // Disable submit button during submission
    const submitBtn = form.querySelector('.email-popup-submit');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>שולח...</span>';
    
    try {
      // Send to Formspree
      const response = await fetch('https://formspree.io/f/xjgprovr', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          message: 'הרשמה לעדכונים על האוצר',
          _subject: 'הרשמה חדשה לעדכונים - האוצר'
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        console.log('Email submitted successfully:', email);
        
        // Hide form and show success message
        form.style.display = 'none';
        successMessage.classList.add('show');
        
        // Mark as subscribed
        localStorage.setItem('hasSubscribedEmail', 'true');
        
        // Close popup after 3 seconds
        setTimeout(() => {
          popup.classList.remove('show');
          // Reset form for next time (if needed)
          setTimeout(() => {
            form.style.display = 'flex';
            successMessage.classList.remove('show');
            emailInput.value = '';
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }, 300);
        }, 3000);
        
        showNotification('תודה על ההרשמה! נשלח לך עדכון בקרוב', 'success');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      showNotification('אירעה שגיאה בשליחה. נסה שוב מאוחר יותר', 'error');
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });
}

// Contact Form Validation and Submission
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show contact popup with message
function showContactPopup(type, title, message) {
  const popup = document.getElementById('contactPopup');
  const iconDiv = document.getElementById('contactPopupIcon');
  const titleEl = document.getElementById('contactPopupTitle');
  const messageEl = document.getElementById('contactPopupMessage');
  
  // Set icon based on type
  if (type === 'success') {
    iconDiv.className = 'contact-popup-icon success';
    iconDiv.innerHTML = '<i class="ms-Icon ms-Icon--CompletedSolid"></i>';
  } else {
    iconDiv.className = 'contact-popup-icon error';
    iconDiv.innerHTML = '<i class="ms-Icon ms-Icon--Error"></i>';
  }
  
  // Set content
  titleEl.textContent = title;
  messageEl.textContent = message;
  
  // Show popup
  popup.classList.add('show');
}

// Close contact popup
function closeContactPopup() {
  const popup = document.getElementById('contactPopup');
  popup.classList.remove('show');
}

// Make functions globally available for inline onclick
window.closeContactPopup = closeContactPopup;
window.showContactPopup = showContactPopup;

// Initialize contact form when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = contactForm.querySelector('input[name="name"]').value.trim();
    const email = contactForm.querySelector('input[name="email"]').value.trim();
    const subject = contactForm.querySelector('input[name="subject"]').value.trim();
    const message = contactForm.querySelector('textarea[name="message"]').value.trim();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Validation checks with popup
    if (!name) {
      showContactPopup('error', 'שם חסר', 'נא להזין שם מלא');
      return;
    }
    
    if (!email) {
      showContactPopup('error', 'אימייל חסר', 'נא להזין כתובת אימייל');
      return;
    }
    
    if (!validateEmail(email)) {
      showContactPopup('error', 'אימייל לא תקין', 'נא להזין כתובת אימייל תקינה (לדוגמה: name@example.com)');
      return;
    }
    
    if (!subject) {
      showContactPopup('error', 'נושא חסר', 'נא להזין נושא להודעה');
      return;
    }
    
    if (!message) {
      showContactPopup('error', 'תוכן חסר', 'נא להזין תוכן הודעה');
      return;
    }
    
    if (message.length < 10) {
      showContactPopup('error', 'תוכן קצר מדי', 'תוכן ההודעה חייב להכיל לפחות 10 תווים');
      return;
    }
    
    // Disable submit button during submission
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'שולח...';
    
    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          _subject: `הודעה חדשה מאת ${name}: ${subject}`
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        showContactPopup('success', 'הודעה נשלחה!', 'ההודעה נשלחה בהצלחה. נחזור אליך בהקדם.');
        contactForm.reset();
      } else {
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.error) {
          showContactPopup('error', 'שגיאה בשליחה', `שגיאה: ${errorData.error}`);
        } else {
          showContactPopup('error', 'שגיאה בשליחה', 'אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.');
        }
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showContactPopup('error', 'שגיאת תקשורת', 'אירעה שגיאה בתקשורת עם השרת. בדוק את החיבור לאינטרנט ונסה שוב.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
});
