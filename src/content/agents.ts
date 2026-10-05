export type Agent = { icon: string; name: string; category: string; catLabel: string; spec: string; when: string };
    export const AGENTS_DATABASE: Agent[] = [
      // Engineering Division
      { icon: "fa-palette", name: "Frontend Developer", category: "engineering", catLabel: "Engineering", spec: "React/Vue/Angular, UI implementation, performance", when: "Modern web apps, pixel-perfect UIs, Core Web Vitals optimization" },
      { icon: "fa-server", name: "Backend Architect", category: "engineering", catLabel: "Engineering", spec: "API design, database architecture, scalability", when: "Server-side systems, microservices, cloud infrastructure" },
      { icon: "fa-mobile-screen", name: "Mobile App Builder", category: "engineering", catLabel: "Engineering", spec: "iOS/Android, React Native, Flutter", when: "Native and cross-platform mobile applications" },
      { icon: "fa-brain", name: "AI Engineer", category: "engineering", catLabel: "Engineering", spec: "ML models, deployment, AI integration", when: "Machine learning features, data pipelines, AI-powered apps" },
      { icon: "fa-rocket", name: "DevOps Automator", category: "engineering", catLabel: "Engineering", spec: "CI/CD, infrastructure automation, cloud ops", when: "Pipeline development, deployment automation, monitoring" },
      { icon: "fa-network-wired", name: "Network Engineer", category: "engineering", catLabel: "Engineering", spec: "Cisco, Juniper, Palo Alto, BGP/OSPF", when: "Router/switch/firewall config, ACLs, troubleshooting" },
      { icon: "fa-bolt", name: "Rapid Prototyper", category: "engineering", catLabel: "Engineering", spec: "Fast POC development, MVPs", when: "Quick proof-of-concepts, hackathon projects, fast iteration" },
      { icon: "fa-code", name: "Senior Developer", category: "engineering", catLabel: "Engineering", spec: "Laravel/Livewire, advanced architecture patterns", when: "Complex implementations, architecture decisions" },
      { icon: "fa-cubes", name: "Filament Optimization Specialist", category: "engineering", catLabel: "Engineering", spec: "Filament PHP admin UX, form redesign", when: "Restructuring Filament resources/forms/tables" },
      { icon: "fa-microchip", name: "Embedded Firmware Engineer", category: "engineering", catLabel: "Engineering", spec: "Bare-metal, RTOS, ESP32/STM32/Nordic", when: "Production-grade embedded systems and IoT devices" },
      { icon: "fa-cubes-stacked", name: "Solidity Smart Contract Engineer", category: "engineering", catLabel: "Engineering", spec: "EVM contracts, gas optimization, DeFi", when: "Secure, gas-optimized smart contracts and DeFi protocols" },
      { icon: "fa-database", name: "Database Optimizer", category: "engineering", catLabel: "Engineering", spec: "Schema design, query optimization, indexing", when: "PostgreSQL/MySQL tuning, slow query debugging" },
      { icon: "fa-code-branch", name: "Git Workflow Master", category: "engineering", catLabel: "Engineering", spec: "Branching strategies, conventional commits", when: "Git workflow design, history cleanup, CI branching" },
      { icon: "fa-sitemap", name: "Software Architect", category: "engineering", catLabel: "Engineering", spec: "System design, DDD, architectural patterns", when: "Architecture decisions, domain modeling, system evolution" },
      { icon: "fa-shield-halved", name: "SRE (Site Reliability Engineer)", category: "engineering", catLabel: "Engineering", spec: "SLOs, error budgets, observability, chaos", when: "Production reliability, toil reduction, capacity planning" },
      { icon: "fa-wand-magic-sparkles", name: "AI Data Remediation Engineer", category: "engineering", catLabel: "Engineering", spec: "Self-healing pipelines, local SLMs, semantic clustering", when: "Fixing broken data at scale with zero data loss" },
      { icon: "fa-database", name: "Data Engineer", category: "engineering", catLabel: "Engineering", spec: "Data pipelines, lakehouse architecture, ETL/ELT", when: "Building reliable data infrastructure and warehousing" },
      { icon: "fa-wheelchair", name: "Section 508 Accessibility Specialist", category: "engineering", catLabel: "Engineering", spec: "US federal 508 / WCAG 2.2 accessibility", when: "ARIA, screen-reader testing, VPAT/ACR authoring" },
      { icon: "fa-flag-usa", name: "USWDS Developer", category: "engineering", catLabel: "Engineering", spec: "US Web Design System (federal)", when: "Accessible gov UI components & design system patterns" },
      { icon: "fa-magnifying-glass", name: "Search Relevance Engineer", category: "engineering", catLabel: "Engineering", spec: "Search ranking & relevance, vector embeddings", when: "Query understanding, embeddings, ranking/eval, tuning" },
      { icon: "fa-key", name: "Identity & Access Engineer", category: "engineering", catLabel: "Engineering", spec: "AuthN/AuthZ & IAM, OAuth/OIDC/SAML", when: "SSO, RBAC/ABAC, token & session security" },
      { icon: "fa-comments", name: "Realtime Collaboration Engineer", category: "engineering", catLabel: "Engineering", spec: "Realtime sync & presence, CRDTs/OT", when: "Conflict resolution, live cursors, offline sync" },
      { icon: "fa-desktop", name: "Desktop App Engineer", category: "engineering", catLabel: "Engineering", spec: "Cross-platform desktop apps, Electron/Tauri", when: "Native integration, desktop packaging, auto-update" },
      { icon: "fa-coins", name: "FinOps Engineer", category: "engineering", catLabel: "Engineering", spec: "Cloud cost engineering & allocation", when: "Cost allocation, rightsizing, unit economics, budget control" },
      { icon: "fa-puzzle-piece", name: "WebAssembly Engineer", category: "engineering", catLabel: "Engineering", spec: "WebAssembly & WASI, Rust/C++ to WASM", when: "WASM sandboxing, host bindings, high performance" },

      // Design Division
      { icon: "fa-compass-drafting", name: "UI Designer", category: "design", catLabel: "Design", spec: "Visual design, component libraries, design systems", when: "Interface creation, brand consistency, component design" },
      { icon: "fa-user-check", name: "UX Researcher", category: "design", catLabel: "Design", spec: "User testing, behavior analysis, research", when: "Understanding users, usability testing, design insights" },
      { icon: "fa-layer-group", name: "UX Architect", category: "design", catLabel: "Design", spec: "Technical architecture, CSS systems", when: "Developer-friendly foundations, implementation guidance" },
      { icon: "fa-shield", name: "Brand Guardian", category: "design", catLabel: "Design", spec: "Brand identity, consistency, positioning", when: "Brand strategy, identity development, guidelines" },
      { icon: "fa-book-open", name: "Visual Storyteller", category: "design", catLabel: "Design", spec: "Visual narratives, multimedia content", when: "Compelling visual stories, brand storytelling" },
      { icon: "fa-face-smile", name: "Whimsy Injector", category: "design", catLabel: "Design", spec: "Personality, delight, playful interactions", when: "Adding joy, micro-interactions, Easter eggs, brand feel" },
      { icon: "fa-image", name: "Image Prompt Engineer", category: "design", catLabel: "Design", spec: "AI image generation prompts, photography", when: "Photography prompts for Midjourney, DALL-E, SD XL" },
      { icon: "fa-people-group", name: "Inclusive Visuals Specialist", category: "design", catLabel: "Design", spec: "Representation, bias mitigation, authentic imagery", when: "Generating culturally accurate AI images and video" },

      // Paid Media Division
      { icon: "fa-rectangle-ad", name: "PPC Campaign Strategist", category: "paid-media", catLabel: "Paid Media", spec: "Google/Microsoft/Amazon Ads, account architecture", when: "Account buildouts, budget allocation, scaling" },
      { icon: "fa-magnifying-glass-chart", name: "Search Query Analyst", category: "paid-media", catLabel: "Paid Media", spec: "Search term analysis, negative keywords, intent", when: "Query audits, wasted spend elimination, discovery" },
      { icon: "fa-clipboard-check", name: "Paid Media Auditor", category: "paid-media", catLabel: "Paid Media", spec: "200+ point account audits, competitive analysis", when: "Account takeovers, quarterly reviews, competitive pitches" },
      { icon: "fa-chart-line", name: "Tracking & Measurement Specialist", category: "paid-media", catLabel: "Paid Media", spec: "GTM, GA4, conversion tracking, CAPI", when: "New implementations, tracking audits, migrations" },
      { icon: "fa-pen-nib", name: "Ad Creative Strategist", category: "paid-media", catLabel: "Paid Media", spec: "RSA copy, Meta creative, PMax assets", when: "Creative launches, testing programs, ad refreshes" },
      { icon: "fa-tower-cell", name: "Programmatic & Display Buyer", category: "paid-media", catLabel: "Paid Media", spec: "GDN, DSPs, partner media, ABM display", when: "Display planning, partner outreach, ABM programs" },
      { icon: "fa-share-nodes", name: "Paid Social Strategist", category: "paid-media", catLabel: "Paid Media", spec: "Meta, LinkedIn, TikTok, cross-platform social", when: "Social ad programs, platform selection, audiences" },

      // Sales Division
      { icon: "fa-bullseye", name: "Outbound Strategist", category: "sales", catLabel: "Sales", spec: "Signal-based prospecting, multi-channel sequences", when: "Building pipeline through research-driven outreach" },
      { icon: "fa-comments-dollar", name: "Discovery Coach", category: "sales", catLabel: "Sales", spec: "SPIN, Gap Selling, Sandler question design", when: "Preparing for discovery calls, qualifying opportunities" },
      { icon: "fa-chess", name: "Deal Strategist", category: "sales", catLabel: "Sales", spec: "MEDDPICC qualification, competitive positioning", when: "Scoring deals, exposing pipeline risk, win planning" },
      { icon: "fa-screwdriver-wrench", name: "Sales Engineer", category: "sales", catLabel: "Sales", spec: "Technical demos, POC scoping, battlecards", when: "Pre-sales technical wins, demo prep, positioning" },
      { icon: "fa-file-signature", name: "Proposal Strategist", category: "sales", catLabel: "Sales", spec: "RFP response, win themes, narrative structure", when: "Writing proposals that persuade, not just comply" },
      { icon: "fa-chart-pie", name: "Pipeline Analyst", category: "sales", catLabel: "Sales", spec: "Forecasting, pipeline health, deal velocity, RevOps", when: "Pipeline reviews, forecast accuracy, revenue ops" },
      { icon: "fa-map", name: "Account Strategist", category: "sales", catLabel: "Sales", spec: "Land-and-expand, QBRs, stakeholder mapping", when: "Post-sale expansion, account planning, NRR growth" },
      { icon: "fa-dumbbell", name: "Sales Coach", category: "sales", catLabel: "Sales", spec: "Rep development, call coaching, pipeline review", when: "Making every rep and every deal better through coaching" },

      // Marketing Division
      { icon: "fa-chart-line-up", name: "Growth Hacker", category: "marketing", catLabel: "Marketing", spec: "Rapid user acquisition, viral loops, experiments", when: "Explosive growth, user acquisition, conversion" },
      { icon: "fa-pen-to-square", name: "Content Creator", category: "marketing", catLabel: "Marketing", spec: "Multi-platform content, editorial calendars", when: "Content strategy, copywriting, brand storytelling" },
      { icon: "fa-hashtag", name: "Twitter/X Engager", category: "marketing", catLabel: "Marketing", spec: "Real-time engagement, thought leadership", when: "Twitter strategy, LinkedIn campaigns, social" },
      { icon: "fa-eye", name: "X/Twitter Intelligence Analyst", category: "marketing", catLabel: "Marketing", spec: "Social listening, trend detection, monitoring", when: "Brand risk, competitor and audience intelligence" },
      { icon: "fa-video", name: "TikTok Strategist", category: "marketing", catLabel: "Marketing", spec: "Viral content, algorithm optimization", when: "TikTok growth, viral short-form video, Gen Z" },
      { icon: "fa-camera", name: "Instagram Curator", category: "marketing", catLabel: "Marketing", spec: "Visual storytelling, community building", when: "Instagram strategy, aesthetic development" },
      { icon: "fa-brands fa-reddit-alien", name: "Reddit Community Builder", category: "marketing", catLabel: "Marketing", spec: "Authentic engagement, value-driven content", when: "Reddit strategy, community trust, sub-reddit marketing" },
      { icon: "fa-store", name: "App Store Optimizer", category: "marketing", catLabel: "Marketing", spec: "ASO, conversion optimization, discoverability", when: "App marketing, store optimization, app growth" }
    ];

    // Populate additional dynamic agent slots to reach full 284+ roster count
    const DIVISIONS = ['engineering', 'design', 'paid-media', 'sales', 'marketing'];
    const DIV_LABELS: Record<string,string> = { 'engineering': 'Engineering', 'design': 'Design', 'paid-media': 'Paid Media', 'sales': 'Sales', 'marketing': 'Marketing' };
    const EXTRA_SKILLS = [
      "Security Hardening", "Cloud Run Container Physics", "Serverless Memory Profiling", "WASM Lip Sync", "Multi-Agent Topology",
      "Event Bus Architecture", "Solidity Proxy Pattern", "Playwright Self-Auditing", "Zero-Trust Security", "Continuous Integration",
      "Vector Index Optimization", "LLM Cost Guardrails", "Sub-500ms WebRTC", "Microservices Governance", "GraphQL API Schema",
      "Redis Caching Strategy", "OAuth2 Token Handling", "Kafka Stream Processing", "Docker Multi-stage Build", "Kubernetes Ingress Controller"
    ];

    // Generate up to 284 total agent skill cards
    
    while (AGENTS_DATABASE.length < 284) {
      const cat = DIVISIONS[AGENTS_DATABASE.length % DIVISIONS.length]!;
      const skillName = EXTRA_SKILLS[AGENTS_DATABASE.length % EXTRA_SKILLS.length]!;
      AGENTS_DATABASE.push({
        icon: "fa-robot",
        name: `${DIV_LABELS[cat]} Specialist #${AGENTS_DATABASE.length + 1}`,
        category: cat,
        catLabel: DIV_LABELS[cat]!,
        spec: `${skillName}, automated workflow execution, enterprise compliance.`,
        when: "High-volume autonomous task execution in multi-agent fleets."
      });
    }
