src/
│
├── assets/               # Images, icons, fonts, static files
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── components/           # Reusable UI components (buttons, cards, modals)
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.module.css
│   └── Navbar/
│       ├── Navbar.jsx
│       └── Navbar.module.css
│
├── features/             # Feature-based structure (recommended for big apps)
│   ├── auth/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── authSlice.js
│   ├── weather/
│   │   ├── components/
│   │   ├── pages/
│   │   └── weatherApi.js
│   └── cart/
│
├── pages/                # Route-based pages (Home, Login, Dashboard)
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.module.css
│   ├── Login/
│   └── Dashboard/
│
├── hooks/                # Custom reusable hooks
│   ├── useAuth.js
│   └── useFetch.js
│
├── context/              # React Context Providers
│   └── ThemeContext.jsx
│
├── services/             # API calls / axios / firebase / backend logic
│   ├── axiosInstance.js
│   └── weatherService.js
│
├── utils/                # Helper functions (formatDate, calculateTemp)
│   └── formatDate.js
│
├── constants/            # Static reusable values
│   └── routes.js
│
├── styles/               # Global CSS files, variables
│   ├── variables.css
│   └── global.css
│
├── App.jsx
├── main.jsx
└── router.jsx            # Central router config (if needed)
