/**
 * SEO & Structured Data Plugin for Kamal Taj's Portfolio
 */

function buildJsonLd() {
    const graph = [];

    const person = {
        '@type': 'Person',
        '@id': 'https://kamal-taj-portfolio.vercel.app/#person',
        name: 'Yeraballi Kamal Taj',
        alternateName: ['Kamal Taj', 'Kamal'],
        url: 'https://kamal-taj-portfolio.vercel.app',
        jobTitle: 'AI/ML Engineer',
        description: 'AI/ML undergraduate (CGPA 9.41) with hands-on experience building GenAI and MLOps projects in Python, including a hybrid-RAG multi-agent system and a real-time fraud detection pipeline.',
        knowsAbout: [
            'Python', 'Machine Learning', 'Deep Learning', 'GenAI', 'LLMs', 'RAG',
            'LangChain', 'MLOps', 'Docker', 'MLflow', 'Evidently AI', 'Apache Kafka',
            'PostgreSQL', 'FastAPI', 'Flask', 'Computer Vision', 'NLP', 'SQL'
        ],
        alumniOf: {
            '@type': 'EducationalOrganization',
            name: 'BNM Institute Of Technology, Bangalore'
        },
        sameAs: [
            'https://www.linkedin.com/in/ykamaltaj',
            'https://github.com/ykamaltaj185'
        ]
    };
    graph.push(person);

    const website = {
        '@type': 'WebSite',
        '@id': 'https://kamal-taj-portfolio.vercel.app/#website',
        url: 'https://kamal-taj-portfolio.vercel.app',
        name: 'Yeraballi Kamal Taj | AI/ML Engineer Portfolio',
        description: 'Interactive 3D Portfolio of Yeraballi Kamal Taj showcasing GenAI, MLOps, and Computer Vision projects.',
        publisher: { '@id': 'https://kamal-taj-portfolio.vercel.app/#person' }
    };
    graph.push(website);

    const profilePage = {
        '@type': 'ProfilePage',
        '@id': 'https://kamal-taj-portfolio.vercel.app/#profilepage',
        url: 'https://kamal-taj-portfolio.vercel.app',
        mainEntity: { '@id': 'https://kamal-taj-portfolio.vercel.app/#person' },
        about: { '@id': 'https://kamal-taj-portfolio.vercel.app/#person' }
    };
    graph.push(profilePage);

    // Projects
    const projectsList = {
        '@type': 'ItemList',
        '@id': 'https://kamal-taj-portfolio.vercel.app/#projects',
        name: 'Featured AI/ML Projects by Kamal Taj',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                item: {
                    '@type': 'SoftwareApplication',
                    name: 'Fraud Detection MLOps Platform',
                    description: 'Real-time fraud detection system using Isolation Forest, Apache Kafka, PostgreSQL, MLflow, Evidently AI, and Grafana.',
                    applicationCategory: 'Machine Learning Application',
                    operatingSystem: 'All',
                    url: 'https://github.com/ykamaltaj185'
                }
            },
            {
                '@type': 'ListItem',
                position: 2,
                item: {
                    '@type': 'SoftwareApplication',
                    name: 'LLM-Powered Multi-Agent System with RAG',
                    description: 'AI study assistant with hybrid RAG (FAISS + BM25 + CrossEncoder) and multi-agent architecture with dynamic task planning.',
                    applicationCategory: 'Generative AI Application',
                    operatingSystem: 'All',
                    url: 'https://github.com/ykamaltaj185'
                }
            },
            {
                '@type': 'ListItem',
                position: 3,
                item: {
                    '@type': 'SoftwareApplication',
                    name: 'Face Mask Detection System',
                    description: 'CNN-based classifier with OpenCV Haar Cascade face detection and Flask web app for webcam inference.',
                    applicationCategory: 'Computer Vision Application',
                    operatingSystem: 'All',
                    url: 'https://github.com/ykamaltaj185'
                }
            }
        ]
    };
    graph.push(projectsList);

    return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);
}

function buildLlmsTxt() {
    let content = `# Yeraballi Kamal Taj | AI/ML Engineer Portfolio\n`;
    content += `> AI/ML undergraduate with hands-on experience in GenAI, MLOps, and Deep Learning.\n\n`;

    content += `## Biography / About Me\n`;
    content += `AI/ML undergraduate (CGPA 9.41) at BNM Institute Of Technology, Bangalore, with hands-on experience building GenAI and MLOps projects in Python, including a hybrid-RAG multi-agent system and a real-time fraud detection pipeline. Strong in OOP, DBMS, and SQL, with experience building REST APIs using FastAPI and Flask.\n\n`;

    content += `## Contact Information\n`;
    content += `- Email: ykamaltaj01@gmail.com\n`;
    content += `- Phone: +91 9381526504\n`;
    content += `- LinkedIn: https://www.linkedin.com/in/ykamaltaj\n`;
    content += `- GitHub: https://github.com/ykamaltaj185\n\n`;

    content += `## Technical Skills\n`;
    content += `- Languages: Python, SQL\n`;
    content += `- Core CS: OOP, DBMS\n`;
    content += `- ML/DL: Scikit-learn, CNNs, Isolation Forest, OpenCV\n`;
    content += `- Data & Streaming: PostgreSQL, Apache Kafka, Pandas, NumPy\n`;
    content += `- GenAI: LLMs, RAG, LangChain, Prompt Engineering\n`;
    content += `- MLOps & Deployment: Docker, MLflow, Evidently AI, Grafana, Drift Detection\n`;
    content += `- Backend & APIs: REST APIs, FastAPI, Flask\n`;
    content += `- Tools: Git, GitHub\n\n`;

    content += `## Featured Projects\n`;
    content += `1. **Fraud Detection MLOps Platform** (Jan 2026 – Feb 2026)\n`;
    content += `   - Real-time fraud detection using Isolation Forest anomaly detection.\n`;
    content += `   - Integrated Apache Kafka for real-time transaction streaming and automated scoring.\n`;
    content += `   - Built with PostgreSQL, MLflow, Evidently AI, and Grafana for monitoring and visualization.\n\n`;

    content += `2. **LLM-Powered Multi-Agent System with RAG** (Dec 2025)\n`;
    content += `   - AI study assistant processing PDFs and images for summaries, quizzes, and doubt resolution.\n`;
    content += `   - Hybrid RAG with FAISS vector search, BM25 keyword search, and CrossEncoder reranking.\n`;
    content += `   - Multi-agent architecture with intent routing, dynamic task planning, and local LLMs via Ollama.\n\n`;

    content += `3. **Face Mask Detection System** (May 2026 – Jul 2026)\n`;
    content += `   - CNN-based deep learning classifier for Mask / No Mask categories.\n`;
    content += `   - OpenCV Haar Cascade for face detection and Flask web app for real-time webcam inference.\n\n`;

    content += `## Education\n`;
    content += `- **BNM Institute Of Technology, Bangalore** (Expected 2027)\n`;
    content += `  B.E. in Artificial Intelligence and Machine Learning | 9.41 CGPA\n`;
    content += `- **Narayana, Narmada Campus, Hyderabad** (Completed 2023)\n`;
    content += `  Board of Intermediate Education, Telangana State | 93.15%\n\n`;

    content += `## Certifications\n`;
    content += `- Python for Data Science — Infosys\n`;
    content += `- Power BI Business Scenarios with Hands-on Use Cases — Udemy\n`;

    return content;
}

export function generateSeoHtml() {
    const llmsContent = buildLlmsTxt();

    return {
        name: 'sanity-seo-plugin',

        configureServer(server) {
            server.middlewares.use(async (req, res, next) => {
                if (req.url === '/llms.txt') {
                    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
                    res.end(llmsContent);
                } else {
                    next();
                }
            });
        },

        async transformIndexHtml(html) {
            const jsonLd = buildJsonLd();
            const jsonLdScript = `<script type="application/ld+json">\n${jsonLd}\n</script>`;

            if (html.includes('</head>')) {
                return html.replace('</head>', `${jsonLdScript}\n</head>`);
            }
            return html + jsonLdScript;
        },

        generateBundle() {
            this.emitFile({
                type: 'asset',
                fileName: 'llms.txt',
                source: llmsContent
            });
        }
    };
}
