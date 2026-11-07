const copy = {
  en: {
    skip: "Skip to content", navWork: "Projects", navResume: "Résumé", navContact: "Contact",
    role: "ACTUARIAL SCIENCE GRADUATE", name: "Omar Alsaadi", intro: "I build and test quantitative models for financial and insurance risk. My work spans statistical modeling in Python and R, and cash-flow forecasting and scenario analysis in Excel.",
    seeWork: "Explore my work", snapshot: "AT A GLANCE", rank: "Cohort rank", rankValue: "1st", gpa: "Undergraduate GPA", locationLabel: "Based in", location: "Jeddah, Saudi Arabia",
    workLabel: "01 / PROJECTS", workTitle: "Models and research", workIntro: "Explore the methods, findings and assumptions behind each project in its GitHub README.",
    resumeLabel: "02 / RÉSUMÉ", resumeTitle: "Education and skills", contactLabel: "03 / CONTACT", contactTitle: "Let’s connect.", contactIntro: "I’m seeking an entry-level actuarial analyst role.", email: "Email ↗",
    readme: "Read the README", repo: "Repository", regression: "Regression README", clustering: "Clustering README", navigation: "Main navigation", language: "Language",
    credentialsTitle: "Certifications and training", credentialNote: "My credentials may show Omar Saadallah or my full name. I use Omar Alsaadi professionally.", viewCertificate: "View certificate",
    title: "Omar Alsaadi | Actuarial Science Portfolio"
  },
  ar: {
    skip: "انتقل إلى المحتوى", navWork: "المشاريع", navResume: "السيرة الذاتية", navContact: "التواصل",
    role: "خريج العلوم الاكتوارية", name: "عمر السعدي", intro: "أطوّر وأختبر نماذج كمية لتحليل المخاطر المالية والتأمينية. تشمل مشاريعي النمذجة الإحصائية باستخدام Python وR، وتوقع التدفقات النقدية وتحليل السيناريوهات باستخدام Excel.",
    seeWork: "استعرض المشاريع", snapshot: "نبذة مختصرة", rank: "الترتيب على الدفعة", rankValue: "الأول", gpa: "المعدل الجامعي", locationLabel: "المقر", location: "جدة، المملكة العربية السعودية",
    workLabel: "٠١ / المشاريع", workTitle: "نماذج وأبحاث", workIntro: "تعرّف على المنهجية والنتائج والافتراضات لكل مشروع من خلال ملف README في GitHub.",
    resumeLabel: "٠٢ / السيرة الذاتية", resumeTitle: "التعليم والمهارات", contactLabel: "٠٣ / التواصل", contactTitle: "لنتواصل", contactIntro: "أبحث عن فرصة مهنية في بداية مسيرتي كمحلل اكتواري.", email: "البريد الإلكتروني ↗",
    readme: "اقرأ ملف README", repo: "المستودع", regression: "توثيق الانحدار", clustering: "توثيق التجميع", navigation: "التنقل الرئيسي", language: "اللغة",
    credentialsTitle: "الشهادات والدورات التدريبية", credentialNote: "قد يظهر في شهاداتي اسم عمر سعدالله أو اسمي الكامل. أستخدم اسم عمر السعدي مهنياً.", viewCertificate: "عرض الشهادة",
    title: "عمر السعدي | محفظة أعمال في العلوم الاكتوارية"
  }
};

const projects = [
  {
    slug: "Financial-Modeling", featured: true,
    en: ["Excel · OpenAI Codex · November 2026", "FAFF · Financial statement and SME risk model",
      "I used OpenAI Codex to extend a MAKCO workbook into a bilingual three-statement model for Saudi retail and wholesale SMEs. It combines year-over-year and common-size analysis, financial ratios and peer comparisons with a rolling 13-week cash forecast, break-even analysis and debt-service coverage.",
      "The model also tracks free cash flow after lease principal, separates Zakat from income tax, and calculates 19 reconciliation totals per year. In the fictional XAZ case, sales rose 20% while the cash forecast still projected a negative week. The English release passed 494 workbook checks, and the baseline and six stress cases matched across English and Arabic."],
    ar: ["Excel وOpenAI Codex · نوفمبر 2026", "FAFF · تحليل القوائم المالية ومخاطر المنشآت الصغيرة والمتوسطة",
      "استخدمت OpenAI Codex لتطوير ملف MAKCO إلى نموذج ثنائي اللغة يربط القوائم المالية الثلاث لمنشآت التجزئة والجملة السعودية. يجمع النموذج بين التحليل الأفقي وتحليل النسب المئوية للقوائم والنسب المالية ومقارنة النظراء، إلى جانب توقع نقدي متجدد لـ13 أسبوعاً وتحليل التعادل وتغطية خدمة الدين.",
      "يقيس النموذج التدفق النقدي الحر بعد سداد أصل التزامات الإيجار، ويفصل الزكاة عن ضريبة الدخل، ويحسب 19 إجمالياً للمطابقة لكل سنة. في مثال XAZ الافتراضي، ارتفعت المبيعات 20% رغم أن التوقع النقدي أظهر أسبوعاً برصيد سالب. اجتازت النسخة الإنجليزية 494 اختباراً، وتطابقت نتائج الحالة الأساسية وست حالات ضغط بين النسختين."]
  },
  {
    slug: "Actuarial-Risk-Modeling", details: [["regression", "2_Python_Regression"], ["clustering", "1_R_Clustering"]],
    en: ["Python · R · October 2026", "Actuarial Risk Modeling",
      "Fitted linear and log-linear BMI models on 733 current smokers using age and daily cigarette consumption. Checked residuals and multicollinearity (VIF 1.01). Neither predictor was statistically significant in the fitted models.",
      "Exploratory k-means on standardized age, cigarette consumption and BMI produced groups of 377 and 356, with a mean silhouette of 0.25. The groups illustrate segmentation with limited separation."],
    ar: ["Python وR · أكتوبر 2026", "نمذجة المخاطر الاكتوارية",
      "قدّرت نماذج انحدار خطية ولوغاريتمية خطية لمؤشر كتلة الجسم لدى 733 مدخناً، باستخدام العمر وعدد السجائر يومياً. فحصت البواقي والتعدد الخطي، وبلغ معامل تضخم التباين 1.01. لم تظهر للمتغيرين دلالة إحصائية في النماذج المقدّرة.",
      "أنتج التجميع الاستكشافي بطريقة المتوسطات المتعددة بعد توحيد المقاييس مجموعتين من 377 و356 سجلاً، بمتوسط معامل سيلويت 0.25، مما يشير إلى فصل محدود بين المجموعتين."]
  },
  {
    slug: "Actuarial-Market-Risk-Opportunity-Engine",
    en: ["Python · Streamlit · Market risk", "AMROE · Market risk and opportunity",
      "A dashboard for exploring market regimes and tail risk. Its methods include Kalman filtering for signal extraction, hidden Markov models for regimes, and extreme value theory and copulas for extremes and tail dependence.",
      "The workflow takes market and macroeconomic inputs through statistical processing into visual risk outputs. The README explains each method and the risk question it addresses."],
    ar: ["Python وStreamlit · مخاطر السوق", "AMROE · مخاطر السوق والفرص",
      "لوحة لتحليل حالات السوق ومخاطر الذيل. تستخدم مرشح كالمان لاستخلاص الإشارة، ونماذج ماركوف الخفية لتقدير حالات السوق، ونظرية القيم المتطرفة ودوال الربط لدراسة الأحداث المتطرفة والاعتماد في الذيول.",
      "تبدأ مراحل العمل ببيانات السوق والاقتصاد الكلي، ثم تعالجها إحصائياً وتعرض مقاييس المخاطر بصرياً. يشرح التوثيق وظيفة كل طريقة والسؤال الذي تجيب عنه."]
  },
  {
    slug: "openAlpha",
    en: ["Python · Streamlit · Equity research", "OpenAlpha · Multi-factor equity screener",
      "An equity screener that combines quality, value, momentum, low risk and sentiment into a score out of 100. Inputs range from return on invested capital and valuation multiples to drawdown, conditional value at risk and analyst estimates.",
      "The README details the five pillar weights, statistical normalization and sector-relative comparisons that feed the ranking."],
    ar: ["Python وStreamlit · أبحاث الأسهم", "OpenAlpha · فرز الأسهم متعدد العوامل",
      "أداة لفرز الأسهم تجمع الجودة والقيمة والزخم وانخفاض المخاطر ومعنويات السوق في درجة من 100. تشمل المدخلات العائد على رأس المال المستثمر ومضاعفات التقييم والتراجع من القمة والقيمة المعرضة للخطر المشروطة وتقديرات المحللين.",
      "يوضح التوثيق أوزان المحاور الخمسة وطريقة توحيد المقاييس ومقارنة الشركات داخل القطاعات لحساب الترتيب."]
  },
  {
    slug: "omar-alsaadi-decentralization",
    en: ["Essay · Digital finance", "The Myth of Decentralization as We Know It",
      "An essay examining Bitcoin and stablecoins. It asks how much decentralization users actually gain when the financial and technical infrastructure they rely on remains concentrated, and argues that parts of digital finance still depend on U.S. institutions and infrastructure."],
    ar: ["مقال · التمويل الرقمي", "خرافة اللامركزية كما نعرفها",
      "مقال يتناول بيتكوين والعملات المستقرة. يناقش مدى اللامركزية التي يستفيد منها المستخدم حين تظل البنية التحتية المالية والتقنية مركّزة، ويطرح أن أجزاء من التمويل الرقمي لا تزال تعتمد على مؤسسات وبنية تحتية أمريكية."]
  }
];

const resume = {
  en: [
    ["Education", "B.Sc. in Actuarial Sciences, Karabük University, Türkiye · April 2022–July 2026", "First in cohort · Honor student · GPA 3.48/4"],
    ["SOA exam preparation", "Exam P · Planned sitting February 2027", "Exam FM · Planned sitting April 2027"],
    ["Software and reporting", "Python (pandas, scikit-learn, statsmodels, SciPy, seaborn), R (tidyverse, ggplot2, cluster), SQL (DDL, DML and DQL)", "Tableau and advanced Excel (PivotTables, INDEX/MATCH, VLOOKUP and financial modeling)"],
    ["Quantitative methods", "Regression, GLMs, time series, clustering, mortality tables, life contingencies and pension mathematics", "Discounted cash flow, horizontal and common-size analysis, ratio analysis and peer benchmarking"],
    ["Learning in progress", "Pandas · Kaggle", "Forward Program · McKinsey & Company"],
    ["Professional skills and languages", "Analytical problem-solving, attention to detail, clear written communication and documentation of assumptions", "Arabic · Native", "English · Upper-intermediate", "Turkish · Intermediate"]
  ],
  ar: [
    ["التعليم", "بكالوريوس العلوم الاكتوارية، جامعة كارابوك، تركيا · أبريل 2022–يوليو 2026", "الأول على الدفعة · طالب متفوق · المعدل 3.48 من 4"],
    ["الاستعداد لاختبارات جمعية الاكتواريين", "اختبار الاحتمالات P · الموعد المخطط فبراير 2027", "اختبار الرياضيات المالية FM · الموعد المخطط أبريل 2027"],
    ["الأدوات وإعداد التقارير", "Python ‏(pandas وscikit-learn وstatsmodels وSciPy وseaborn)، وR ‏(tidyverse وggplot2 وcluster)، وSQL ‏(DDL وDML وDQL)", "Tableau وExcel المتقدم (الجداول المحورية ودوال البحث والنمذجة المالية)"],
    ["الأساليب الكمية", "الانحدار والنماذج الخطية المعممة والسلاسل الزمنية والتجميع وجداول الوفيات واحتمالات الحياة ورياضيات التقاعد", "التدفقات النقدية المخصومة والتحليل الأفقي وتحليل النسب المئوية للقوائم والنسب المالية ومقارنة النظراء"],
    ["برامج قيد الدراسة", "Pandas · Kaggle", "برنامج Forward · ماكنزي وشركاه"],
    ["المهارات المهنية واللغات", "حل المشكلات تحليلياً والدقة في التفاصيل والتواصل الكتابي الواضح وتوثيق الافتراضات", "العربية · اللغة الأم", "الإنجليزية · فوق المتوسط", "التركية · متوسط"]
  ]
};

const credentials = [
  { file: "kaggle-python.png", format: "PNG",
    en: ["Python", "Kaggle Learn · 25 October 2026"],
    ar: ["Python", "Kaggle Learn · 25 أكتوبر 2026"] },
  { file: "cisco-data-analytics.pdf", format: "PDF",
    en: ["Data Analytics Essentials", "Cisco Networking Academy · 16 September 2026"],
    ar: ["أساسيات تحليل البيانات", "أكاديمية سيسكو للشبكات · 16 سبتمبر 2026"] },
  { file: "edraak-digital-marketing.pdf", format: "PDF",
    en: ["Digital Marketing — Paid Campaign Management", "Edraak · 17 March 2021"],
    ar: ["التسويق الإلكتروني — إدارة الحملات الرقمية المدفوعة", "إدراك · 17 مارس 2021"] },
  { en: ["Consumer Behavior", "Karabük University · Certificate of achievement · 28 hours"],
    ar: ["سلوك المستهلك", "جامعة كارابوك · شهادة اجتياز · 28 ساعة"] },
  { en: ["Turkish Language Programme", "Karabük University TÖMER · CEFR C1 certificate"],
    ar: ["برنامج اللغة التركية", "مركز TÖMER بجامعة كارابوك · شهادة المستوى C1 وفق الإطار الأوروبي المرجعي"] },
  { en: ["IELTS Academic", "Overall band 6.0 · Test taken April 2021"],
    ar: ["IELTS الأكاديمي", "الدرجة الكلية 6.0 · أُجري الاختبار في أبريل 2021"] }
];

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(url, text) {
  const node = element("a", text + " ↗");
  node.href = url;
  return node;
}

function render(language) {
  const labels = copy[language];
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = labels.title;
  document.querySelector("nav").setAttribute("aria-label", labels.navigation);
  document.querySelector(".languages").setAttribute("aria-label", labels.language);
  document.querySelectorAll("[data-key]").forEach(node => {
    if (node.dataset.key !== "name") node.textContent = labels[node.dataset.key];
  });
  const name = document.querySelector("#name");
  const [first, ...last] = labels.name.split(" ");
  name.replaceChildren(first, element("br"), last.join(" "), element("span", "."));
  document.querySelectorAll("[data-lang]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  document.querySelector("#projects").replaceChildren(...projects.map(project => {
    const [meta, title, description, finding] = project[language];
    const article = element("article", null, project.featured ? "project featured" : "project");
    article.append(element("p", meta, "meta"), element("h3", title), element("p", description));
    if (finding) article.append(element("p", finding, "finding"));
    const base = "https://github.com/goshema/" + project.slug;
    const links = element("div", null, "links");
    links.append(link(base + "/blob/main/README.md", labels.readme), link(base, labels.repo));
    for (const [key, folder] of project.details ?? []) {
      links.append(link(base + "/blob/main/" + folder + "/README.md", labels[key]));
    }
    article.append(links);
    return article;
  }));

  document.querySelector("#resume-details").replaceChildren(...resume[language].map(([title, ...items]) => {
    const section = element("section", null, "resume-item");
    const list = element("ul");
    list.append(...items.map(item => element("li", item)));
    section.append(element("h3", title), list);
    return section;
  }));
  document.querySelector("#credentials").replaceChildren(...credentials.map(credential => {
    const [title, description] = credential[language];
    const card = element("article", null, "resume-item credential");
    card.append(element("h3", title), element("p", description));
    if (credential.file) {
      const certificate = link("certificates/" + credential.file, labels.viewCertificate + " (" + credential.format + ")");
      certificate.setAttribute("aria-label", labels.viewCertificate + " · " + title + " (" + credential.format + ")");
      card.append(certificate);
    }
    return card;
  }));
}

function readLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (requested === "ar" || requested === "en") return requested;
  try { return localStorage.getItem("oa-language") === "ar" ? "ar" : "en"; }
  catch { return "en"; }
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    const language = button.dataset.lang;
    render(language);
    try { localStorage.setItem("oa-language", language); } catch {}
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    try { history.replaceState(null, "", url); } catch {}
  });
});
render(readLanguage());
