# تفاصيل التصميم الشاملة - موقع Sandex AI

## معلومات أساسية
- **الاسم**: Sandex for Integrated Solutions
- **الوصف**: شركة متخصصة في الذكاء الاصطناعي والتحول الرقمي
- **اللغة**: إنجليزية مع دعم العربية

## نظام الألوان (Color System)

### الألوان الرئيسية
```css
--orange-primary: #EF571B    /* برتقالي رئيسي */
--orange-secondary: #D34500  /* برتقالي ثانوي */
--orange-tertiary: #BB3A00   /* برتقالي داكن للتفاعل */
--orange-accent: #F3C846     /* أصفر ذهبي للتأكيد */
```

### الألوان المساعدة
```css
--orange-light-1: #FFF8F0    /* أبيض مع لمسة دافئة */
--orange-light-2: #FFF1E0    /* كريمي فاتح */
--orange-light-3: #F5D6B3    /* كريمي داكن للتباين */
--orange-neutral: #8D5B3D    /* بني مكمل */
--orange-dark-primary: #2D180F   /* بني داكن للخلفيات */
--orange-dark-secondary: #4E2A15 /* بني متوسط للعناصر الثانوية */
```



## نظام الخطوط (Typography)

### الخطوط المستخدمة
- **Exo 2**: للعناوين والنصوص البارزة
  - الأوزان: 300, 400, 600, 700
- **Roboto**: للنصوص العادية والثانوية
  - الأوزان: 300, 400, 500, 700

### أحجام النصوص
- **العنوان الرئيسي**: 3xl-6xl (48px-96px)
- **العناوين الفرعية**: 3xl-4xl (30px-36px)
- **عناوين الأقسام**: xl (20px)
- **النص العادي**: base (16px)
- **النص الصغير**: sm (14px)

## تخطيط الصفحة (Layout)

### الهيكل العام
```
Header (شريط علوي)
├── Logo
├── Navigation Menu
├── Theme Toggle
├── Chat Button
└── Mobile Menu Button

Main Content
├── Hero Section
├── Services Section
├── About Section
└── Contact Section

Footer
├── Company Info
├── Quick Links
├── Social Media
└── Copyright
```

### أبعاد الحاويات
- **Container Max Width**: 1200px
- **الهوامش الجانبية**: 16px-48px
- **التباعد بين الأقسام**: 80px-160px
- **Grid Gap**: 32px

## مكونات التصميم (Design Components)

### الأزرار (Buttons)
```css
/* زر رئيسي */
background: linear-gradient(90deg, #D34500, #BB3A00)
padding: 12px 32px
border-radius: 9999px
color: #FFF8F0
font-weight: 600
box-shadow: 0 4px 15px rgba(211, 84, 0, 0.4)

/* زر ثانوي */
background: transparent
border: 2px solid #EF571B
color: #EF571B
padding: 12px 32px
border-radius: 9999px
```

### البطاقات (Cards)
```css
background: rgba(47, 25, 17, 0.85)
border: 2px solid #EF571B
border-radius: 12px
padding: 24px
backdrop-filter: blur(8px)
box-shadow: 0 8px 30px rgba(211, 84, 0, 0.25)
```

### أيقونات الخدمات
- **الذكاء الاصطناعي**: `fas fa-brain`
- **التدريب**: `fas fa-graduation-cap`
- **الأمان السيبراني**: `fas fa-shield-alt`
- **تطوير البرمجيات**: `fas fa-code`
- **اختبار الأنظمة**: `fas fa-clipboard-check`

## التأثيرات والحركات (Effects & Animations)

### التأثيرات الخلفية
```css
/* شبكة نقطية */
background-image: linear-gradient(rgba(227, 126, 34, 0.15) 1px, transparent 1px)
background-size: 30px 30px

/* خطوط المسح */
background: linear-gradient(to bottom, transparent 50%, rgba(227, 126, 34, 0.08) 51%)
background-size: 100% 3px
```

### الحركات
- **التحويم المتدرج**: `translateY(-5px)` مع `transition: 0.3s ease`
- **النبض الناعم**: `scale(1.03)` كل 5 ثوان
- **التطويف**: حركة دائرية للعناصر العائمة
- **الدوران**: دوران مستمر للدوائر
- **وميض النيون**: تأثير وميض للنصوص

### تأثيرات التفاعل
```css
/* توهج عند التحويم */
box-shadow: 0 0 20px rgba(227, 126, 34, 0.4)

/* تأثير السايبر */
background: linear-gradient(45deg, transparent, rgba(227, 126, 34, 0.3))
animation: cyber-glow 1.2s infinite
```

## النوافذ التفاعلية (Interactive Elements)

### نافذة الدردشة
```css
position: fixed
bottom: 100px
right: 30px
width: 400px
height: 500px
background: #FFF8F0
border: 2px solid #D34500
border-radius: 16px
box-shadow: 0 8px 30px rgba(211, 84, 0, 0.25)
```

### زر الدردشة العائم
```css
position: fixed
bottom: 30px
left: 30px
width: 60px
height: 60px
border-radius: 50%
background: linear-gradient(135deg, #EF571B, #D34500)
animation: floating 3s infinite
```

## التصميم المتجاوب (Responsive Design)

### نقاط التوقف
- **الهاتف**: < 768px
- **الجهاز اللوحي**: 768px - 1024px
- **سطح المكتب**: > 1024px

### التكيفات للشاشات الصغيرة
- تغيير تخطيط الشبكة من 3 أعمدة إلى عمود واحد
- تقليل أحجام الخطوط بنسبة 20-30%
- إخفاء القائمة الرئيسية وإظهار قائمة الهاتف
- تكييف المساحات والهوامش

## الثيمات المتعددة (Theme System)

### الثيم الفاتح (Light Theme)
- خلفية بيضاء مع لمسات دافئة
- نصوص باللون البني الداكن
- استخدام الألوان البرتقالية للتأكيد

### الثيم المظلم (Dark Theme)
- خلفية سوداء/رمادية داكنة
- نصوص بيضاء/رمادية فاتحة
- استخدام السماوي والبنفسجي للتأكيد

## الأيقونات والصور

### مجموعة الأيقونات
- **Font Awesome 6.4.0**
- نمط منتظم ومتناسق
- حجم قياسي 24px
- ألوان متوافقة مع نظام الألوان

### اللوغو
- ملفات متعددة: `logo sandex.png`, `Sandex logo-01.png`, `Sandex logo-04.png`
- ارتفاع ثابت 56px في الهيدر
- خلفية شفافة

## معايير الجودة والأداء

### تحسين الأداء
- تحميل الخطوط بطريقة `display=swap`
- استخدام CSS Variables للثيمات
- تأثيرات CSS بدلاً من JavaScript حيث أمكن
- ضغط الصور وتحسينها

### إمكانية الوصول
- نسبة تباين عالية للنصوص
- دعم لوحة المفاتيح للتنقل
- `aria-label` للأزرار التفاعلية
- دعم قارئات الشاشة

## المكتبات والإطارات المستخدمة

### CSS Frameworks
- **Tailwind CSS 2.2.19**: للتصميم السريع
- **Font Awesome 6.4.0**: للأيقونات

### JavaScript Libraries
- **Particles.js**: لتأثيرات الخلفية التفاعلية
- **Vanilla JavaScript**: للتفاعلات الأساسية

## الملفات الرئيسية

### هيكل المشروع
```
/
├── index.html              /* الصفحة الرئيسية */
├── css/
│   └── styles.unified.css  /* جميع أنماط CSS */
├── js/
│   ├── script.js          /* الوظائف الرئيسية */
│   ├── env.js             /* متغيرات البيئة */
│   └── env-example.js     /* مثال متغيرات البيئة */
└── images/
    ├── logo sandex.png    /* اللوغو الرئيسي */
    ├── Sandex logo-01.png /* لوغو بديل 1 */
    └── Sandex logo-04.png /* لوغو بديل 2 */
```

### أحجام الملفات التقريبية
- CSS: ~140KB (مضغوط)
- JavaScript: ~25KB
- الصور: 50-200KB لكل صورة

## إرشادات التطوير

### إضافة ميزات جديدة
1. اتباع نظام الألوان المحدد
2. استخدام المتغيرات CSS للقيم المتكررة
3. دعم كلا الثيمين (فاتح/مظلم)
4. اختبار التصميم المتجاوب
5. التأكد من إمكانية الوصول

### أفضل الممارسات
- استخدام BEM methodology لتسمية CSS classes
- تجنب !important إلا عند الضرورة
- تحسين صور للويب قبل الاستخدام
- اختبار الأداء على الأجهزة البطيئة
- التأكد من التوافق مع المتصفحات المختلفة

## معلومات تقنية إضافية

### دعم المتصفحات
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### أبعاد العناصر الرئيسية
- **Header Height**: 80px
- **Footer Height**: 200px
- **Hero Section**: 100vh
- **Service Cards**: 300px height
- **Chat Window**: 400px × 500px

هذا الدليل الشامل يحتوي على جميع التفاصيل التصميمية اللازمة لنقل الموقع أو إنشاء موقع مشابه بنفس المعايير والجودة.
