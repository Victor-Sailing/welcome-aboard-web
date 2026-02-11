export type Locale = 
  | "en" 
  | "de" 
  | "fr" 
  | "es-MX" 
  | "es-ES" 
  | "ja" 
  | "it" 
  | "ko" 
  | "nl" 
  | "ru" 
  | "pt-PT" 
  | "pt-BR" 
  | "zh";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  de: "DE",
  fr: "FR",
  "es-MX": "ES-MX",
  "es-ES": "ES-ES",
  ja: "JA",
  it: "IT",
  ko: "KO",
  nl: "NL",
  ru: "RU",
  "pt-PT": "PT-PT",
  "pt-BR": "PT-BR",
  zh: "ZH",
};

export const localeFlags: Record<Locale, string> = {
  en: "🇺🇸",
  de: "🇩🇪",
  fr: "🇫🇷",
  "es-MX": "🇲🇽",
  "es-ES": "🇪🇸",
  ja: "🇯🇵",
  it: "🇮🇹",
  ko: "🇰🇷",
  nl: "🇳🇱",
  ru: "🇷🇺",
  "pt-PT": "🇵🇹",
  "pt-BR": "🇧🇷",
  zh: "🇨🇳",
};

export type Currency = "MXN" | "USD" | "EUR";

export const currencySymbols: Record<Currency, string> = {
  MXN: "$",
  USD: "$",
  EUR: "€",
};

type TranslationKeys = {
  header: {
    brand: string;
    calendar: string;
    signIn: string;
  };
  columns: {
    welcome: { title: string; subtitle: string };
    cancun: { title: string; subtitle: string };
    islaMujeres: { title: string; subtitle: string };
    rivieraMaya: { title: string; subtitle: string };
    cozumel: { title: string; subtitle: string };
  };
  cta: {
    welcome: string;
    destinations: string;
  };
};

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    header: { 
      brand: "WELCOME ABOARD",
      calendar: "Calendar",
      signIn: "Sign In",
    },
    columns: {
      welcome: { title: "Welcome", subtitle: "Mexican Caribbean" },
      cancun: { title: "Cancun", subtitle: "The Turquoise Gateway" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Island Paradise" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "An Infinite Coast" },
      cozumel: { title: "Cozumel", subtitle: "Deep Crystal Blue" },
    },
    cta: {
      welcome: "ALL ABOUT IT",
      destinations: "VISIT OUR FLEET",
    },
  },
  "es-MX": {
    header: { 
      brand: "BIENVENIDO A BORDO",
      calendar: "Calendario",
      signIn: "Iniciar Sesión",
    },
    columns: {
      welcome: { title: "Bienvenidos", subtitle: "Caribe Mexicano" },
      cancun: { title: "Cancún", subtitle: "La Puerta Turquesa" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Paraíso Insular" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Una Costa Infinita" },
      cozumel: { title: "Cozumel", subtitle: "Azul Cristal Profundo" },
    },
    cta: {
      welcome: "TODO SOBRE ESTO",
      destinations: "VISITAR NUESTRA FLOTA",
    },
  },
  "es-ES": {
    header: { 
      brand: "BIENVENIDO A BORDO",
      calendar: "Calendario",
      signIn: "Iniciar Sesión",
    },
    columns: {
      welcome: { title: "Bienvenidos", subtitle: "Caribe Mexicano" },
      cancun: { title: "Cancún", subtitle: "La Puerta Turquesa" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Paraíso Insular" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Una Costa Infinita" },
      cozumel: { title: "Cozumel", subtitle: "Azul Cristal Profundo" },
    },
    cta: {
      welcome: "TODO SOBRE ESTO",
      destinations: "VISITAR NUESTRA FLOTA",
    },
  },
  fr: {
    header: { 
      brand: "BIENVENUE À BORD",
      calendar: "Calendrier",
      signIn: "Se Connecter",
    },
    columns: {
      welcome: { title: "Bienvenue", subtitle: "Caraïbes Mexicaines" },
      cancun: { title: "Cancún", subtitle: "La Porte Turquoise" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Paradis Insulaire" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Une Côte Infinie" },
      cozumel: { title: "Cozumel", subtitle: "Bleu Cristal Profond" },
    },
    cta: {
      welcome: "TOUT À CE SUJET",
      destinations: "VISITER NOTRE FLOTTE",
    },
  },
  "pt-PT": {
    header: { 
      brand: "BEM-VINDO A BORDO",
      calendar: "Calendário",
      signIn: "Iniciar Sessão",
    },
    columns: {
      welcome: { title: "Bem-vindos", subtitle: "Caribe Mexicano" },
      cancun: { title: "Cancún", subtitle: "O Portal Turquesa" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Paraíso Insular" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Uma Costa Infinita" },
      cozumel: { title: "Cozumel", subtitle: "Azul Cristal Profundo" },
    },
    cta: {
      welcome: "TUDO SOBRE ISSO",
      destinations: "VISITAR A NOSSA FROTA",
    },
  },
  "pt-BR": {
    header: { 
      brand: "BEM-VINDO A BORDO",
      calendar: "Calendário",
      signIn: "Entrar",
    },
    columns: {
      welcome: { title: "Bem-vindos", subtitle: "Caribe Mexicano" },
      cancun: { title: "Cancún", subtitle: "O Portal Turquesa" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Paraíso Insular" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Uma Costa Infinita" },
      cozumel: { title: "Cozumel", subtitle: "Azul Cristal Profundo" },
    },
    cta: {
      welcome: "TUDO SOBRE ISSO",
      destinations: "VISITAR NOSSA FROTA",
    },
  },
  de: {
    header: { 
      brand: "WILLKOMMEN AN BORD",
      calendar: "Kalender",
      signIn: "Anmelden",
    },
    columns: {
      welcome: { title: "Willkommen", subtitle: "Mexikanische Karibik" },
      cancun: { title: "Cancún", subtitle: "Das Türkise Tor" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Inselparadies" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Eine Endlose Küste" },
      cozumel: { title: "Cozumel", subtitle: "Tiefes Kristallblau" },
    },
    cta: {
      welcome: "ALLES DARÜBER",
      destinations: "UNSERE FLOTTE BESUCHEN",
    },
  },
  ja: {
    header: { 
      brand: "ようこそ",
      calendar: "カレンダー",
      signIn: "サインイン",
    },
    columns: {
      welcome: { title: "ようこそ", subtitle: "メキシコカリブ海" },
      cancun: { title: "カンクン", subtitle: "ターコイズの玄関口" },
      islaMujeres: { title: "イスラムヘーレス", subtitle: "島の楽園" },
      rivieraMaya: { title: "リビエラマヤ", subtitle: "無限の海岸" },
      cozumel: { title: "コスメル", subtitle: "深いクリスタルブルー" },
    },
    cta: {
      welcome: "すべてについて",
      destinations: "フリートを訪問",
    },
  },
  it: {
    header: { 
      brand: "BENVENUTO A BORDO",
      calendar: "Calendario",
      signIn: "Accedi",
    },
    columns: {
      welcome: { title: "Benvenuti", subtitle: "Caraibi Messicani" },
      cancun: { title: "Cancún", subtitle: "La Porta Turchese" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Paradiso Insulare" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Una Costa Infinita" },
      cozumel: { title: "Cozumel", subtitle: "Blu Cristallo Profondo" },
    },
    cta: {
      welcome: "TUTTO SU QUESTO",
      destinations: "VISITA LA NOSTRA FLOTTA",
    },
  },
  ko: {
    header: { 
      brand: "환영합니다",
      calendar: "캘린더",
      signIn: "로그인",
    },
    columns: {
      welcome: { title: "환영합니다", subtitle: "멕시코 카리브해" },
      cancun: { title: "칸쿤", subtitle: "터콰이즈 게이트웨이" },
      islaMujeres: { title: "이슬라 무헤레스", subtitle: "섬 낙원" },
      rivieraMaya: { title: "리비에라 마야", subtitle: "무한한 해안" },
      cozumel: { title: "코수멜", subtitle: "깊은 크리스털 블루" },
    },
    cta: {
      welcome: "모든 것에 대해",
      destinations: "우리 함대 방문",
    },
  },
  nl: {
    header: { 
      brand: "WELKOM AAN BOORD",
      calendar: "Kalender",
      signIn: "Inloggen",
    },
    columns: {
      welcome: { title: "Welkom", subtitle: "Mexicaanse Caraïben" },
      cancun: { title: "Cancún", subtitle: "De Turquoise Poort" },
      islaMujeres: { title: "Isla Mujeres", subtitle: "Eilandparadijs" },
      rivieraMaya: { title: "Riviera Maya", subtitle: "Een Oneindige Kust" },
      cozumel: { title: "Cozumel", subtitle: "Diep Kristalblauw" },
    },
    cta: {
      welcome: "ALLES EROVER",
      destinations: "BEZOEK ONZE VLOOT",
    },
  },
  ru: {
    header: { 
      brand: "ДОБРО ПОЖАЛОВАТЬ НА БОРТ",
      calendar: "Календарь",
      signIn: "Войти",
    },
    columns: {
      welcome: { title: "Добро пожаловать", subtitle: "Мексиканское Карибское море" },
      cancun: { title: "Канкун", subtitle: "Бирюзовые Ворота" },
      islaMujeres: { title: "Исла Мухерес", subtitle: "Островной Рай" },
      rivieraMaya: { title: "Ривьера Майя", subtitle: "Бесконечное Побережье" },
      cozumel: { title: "Косумель", subtitle: "Глубокая Кристальная Синева" },
    },
    cta: {
      welcome: "ВСЁ ОБ ЭТОМ",
      destinations: "ПОСЕТИТЬ НАШ ФЛОТ",
    },
  },
  zh: {
    header: { 
      brand: "欢迎登船",
      calendar: "日历",
      signIn: "登录",
    },
    columns: {
      welcome: { title: "欢迎", subtitle: "墨西哥加勒比海" },
      cancun: { title: "坎昆", subtitle: "绿松石门户" },
      islaMujeres: { title: "女人岛", subtitle: "岛屿天堂" },
      rivieraMaya: { title: "里维埃拉玛雅", subtitle: "无尽的海岸" },
      cozumel: { title: "科苏梅尔", subtitle: "深水晶蓝" },
    },
    cta: {
      welcome: "关于这一切",
      destinations: "访问我们的船队",
    },
  },
};
