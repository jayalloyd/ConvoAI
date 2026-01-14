🤖 Convo AI- A modern, full-stack AI conversation platform built with the MERN Stack and managed via pnpm workspaces. This project features a high-performance monorepo architecture, real-time AI responses, and persistent chat history.✨ Core Features⚡️ Lightning Fast: Managed with pnpm for ultra-efficient dependency handling.🧠 Brain Power: Integrated with OpenAI API (or DeepSeek/Gemini) for intelligent responses.📂 Chat Persistence: Secure storage of conversation history in MongoDB Atlas.🔐 Auth Ready: Secure JWT-based user authentication and protected routes.🎨 Premium UI: Styled with Tailwind CSS, including dark mode and markdown rendering for code snippets.🛠 Project StructureUsing a monorepo approach for easier management:Plaintext/
├── apps/
│   ├── FrontENd/       # React + Vite (Frontend)
│   └── Backend/       # Node.js + Express (Backend)
├── packages/
│   └── shared-types/ # (Optional) Shared TS interfaces
├── pnpm-workspace.yaml
└── package.json
🚀 Quick Start1. Prerequisitespnpm installed (npm i -g pnpm)MongoDB Atlas connection stringOpenAI API Key2. Clone & InstallBashgit clone https://github.com/jayalloyd/ConvoAI.git
cd ConvoAI

# Install dependencies for all apps at once
pnpm install
3. Environment VariablesCreate a .env file inside apps/server:Code snippetPORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_api_key
4. Run Development ServersFrom the root directory, run both frontend and backend in parallel:Bashpnpm dev
🏗 Scripts ReferenceCommandActionpnpm devStarts client and server concurrentlypnpm installInstalls dependencies across the workspacepnpm --filter client buildBuilds the React production bundlepnpm --filter server startStarts the production backend server
# ConvoAI
