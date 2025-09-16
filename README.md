PrepAI - AI-Powered Placement Preparation Platform
==================================================

**Developer Information:**
- **Name**: Aditya Saini
- **University**: IIT Bhilai
- **Department**: Software
-----------

📝 Interaction Logs
----------
https://prepai.notion.site/Code-Generation-Logs-25009eb4b65e80f0b5c0c974e0d5a4ef


🖧 System Design Document
----------
https://prepai.notion.site/Design-Document-27009eb4b65e806287f4ce9f036f806f


-----------

> Transform your career preparation with intelligent AI-driven insights and personalized learning experiences.


![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js) ![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=flat-square&logo=javascript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css) ![Gemini API](https://img.shields.io/badge/Gemini-API-4285F4?style=flat-square&logo=google)

🚀 Overview
-----------

PrepAI is a cutting-edge placement preparation platform that leverages artificial intelligence to provide personalized career preparation experiences. Built with modern web technologies, it offers dynamic industry insights, AI-powered testing, and intelligent resume generation to help students and professionals excel in their career journey.

✨ Features
----------

### 🧠 AI-Powered Dynamic Industry Insights

-   Real-time industry trend analysis
-   Personalized career recommendations
-   Market demand forecasting
-   Skills gap identification

### 📝 Intelligent Placement Preparation Tests

-   AI-generated questions based on industry requirements
-   Adaptive difficulty levels
-   Comprehensive topic coverage
-   Performance analytics and insights

### 📊 Interactive Test Dashboard

-   Real-time progress tracking
-   Detailed performance metrics
-   Interactive Graphs

### 📄 AI Resume Generator


-   AI-powered content optimization
-   ATS-friendly formatting
-   One-click PDF download functionality
-   Skills and experience enhancement suggestions

🛠️ Tech Stack
--------------

### Frontend

-   **Framework**: Next.js 15 with App Router
-   **UI Library**: React 18 with JavaScript
-   **Styling**: Tailwind CSS
-   **Components**: Shadcn

### Backend & AI

-   **AI Engine**: Google Gemini API for intelligent content generation
-   **Background Processing**: Inngest for handling async tasks
-   **Database**: Neon (Serverless PostgreSQL)
-   **Authentication**: Clerk for secure user management
-   **API Routes**: Next.js API Routes

### Infrastructure

-   **Database**: Neon Database

🚀 Getting Started
------------------

### Prerequisites

-   Node.js 18+
-   npm or yarn
-   Git

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/prepai.git
    cd prepai
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables**

    ```bash
    cp .env.example .env
    ```

    Configure the following variables:

    ```env
    # Database
    DATABASE_URL="your_neon_database_url"

    # Authentication (Clerk)
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
    CLERK_SECRET_KEY="your_clerk_secret_key"
    NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
    NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/onboarding"
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/onboarding"

    # AI Services
    GEMINI_API_KEY="your_gemini_api_key"

    # Background Jobs
    INNGEST_EVENT_KEY="your_inngest_event_key"
    INNGEST_SIGNING_KEY="your_inngest_signing_key"

    # App Configuration
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    ```

4.  **Start the Inngest development server**

    ```bash
    npx inngest-cli@latest dev
    ```

    In your browser open `http://localhost:8288` to see the development UI where you can test the background functions.

5.  **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

6.  **Open your browser** Navigate to [http://localhost:3000](http://localhost:3000/)

📁 Project Structure
--------------------

```
prepai/
├── ai/                           # AI and Machine Learning Components
├── actions/                      # Server Actions
│   ├── dashboard.js              # Dashboard related actions
│   ├── interview.js              # Interview preparation actions
│   ├── resume.js                 # Resume generation actions
│   └── user.js                   # User management actions
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   ├── (main)/                   # Main application routes
│   ├── api/                      # API routes
│   ├── lib/                      # App-level utilities
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.jsx                  # Home page
├── components/                   # Reusable UI Components
│   ├── ui/                       # Base UI components
│   │   ├── header.jsx            # Application header
│   │   ├── hero.jsx              # Hero section component
│   │   └── theme-provider.jsx    # Theme context provider
├── data/                         # Static Data and Configurations
│   └── industries.js             # Industry-specific data
├── hooks/                        # Custom React Hooks
│   └── use-fetch.js              # Custom fetch hook
├── lib/                          # Utility Functions and Configurations
│   ├── generated/                # Auto-generated files
│   ├── inngest/                  # Background job configurations
│   │   ├── checkUser.js          # User verification jobs
│   │   ├── prisma.js             # Database job utilities
│   │   └── utils.js              # Inngest utilities
├── node_modules/                 # Dependencies
├── prisma/                       # Database Schema and Migrations
├── public/                       # Static Assets
├── .env.local                    # Environment variables
├── .gitignore                    # Git ignore rules
├── components.json               # Component configuration
├── eslint.config.mjs             # ESLint configuration
├── jsconfig.json                 # JavaScript configuration
├── middleware.js                 # Next.js middleware
├── next.config.mjs               # Next.js configuration
├── package-lock.json             # Lock file
├── package.json                  # Dependencies and scripts
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # Project documentation
└── tailwind.config.js            # Tailwind CSS configuration
```

📸 Screenshots
-----------------
<img width="1920" height="1027" alt="Screenshot from 2025-09-17 00-52-45" src="https://github.com/user-attachments/assets/bd3cc94e-b76a-4845-9006-7bdcbffc8c14" />


<img width="1920" height="1027" alt="Screenshot from 2025-09-17 00-53-16" src="https://github.com/user-attachments/assets/c673af15-6947-4802-b1e9-f58fb46e3f3c" />


<img width="1920" height="1027" alt="Screenshot from 2025-09-17 00-53-58" src="https://github.com/user-attachments/assets/56b88660-dbf1-40b1-bfcb-a02bf5ea5611" />
<img width="1920" height="1027" alt="Screenshot from 2025-09-17 00-53-46" src="https://github.com/user-attachments/assets/c04f705a-eb7b-414b-9110-db57768d5b9a" />

<img width="1920" height="1027" alt="Screenshot from 2025-09-17 00-57-30" src="https://github.com/user-attachments/assets/401f8350-e272-4ae5-81f2-6e30f1e5f9fa" />

<img width="1920" height="1027" alt="Screenshot from 2025-09-17 00-54-17" src="https://github.com/user-attachments/assets/82520239-9fa3-40df-9ba9-858799a579dc" />





![alt text](image.png)

![alt text](<Screenshot from 2025-09-17 00-54-17.png>)
-----------------
🔧 Key Components
-----------------

### AI Integration

-   **Gemini API**: Powers intelligent question generation, resume optimization, and industry insights
-   **Content Generation**: Dynamic test questions and personalized recommendations
-   **Content Suggestion**: Resume content enhancement and skill extraction

### Background Processing

-   **Inngest**: Handles heavy AI processing tasks asynchronously

### Database Architecture

-   **Neon PostgreSQL**: Serverless database for optimal performance
-   **Prisma ORM**: JavaScript-based database operations
-   **Optimized Queries**: Efficient data retrieval for real-time insights

🎯 Key Features Breakdown
-------------------------

### 1\. Industry Insights Dashboard

-   AI-curated content based on current market trends
-   Personalized recommendations using machine learning
-   Interactive charts and data visualizations

### 2\. Adaptive Testing System

-   Questions generated using Gemini AI based on job requirements
-   Comprehensive analytics and progress tracking

### 3\. Resume Intelligence

-   AI-powered resume optimization using industry best practices



* * * * *

**Built with ❤️ by Aditya Saini and AI**



*Empowering careers through intelligent preparation*
