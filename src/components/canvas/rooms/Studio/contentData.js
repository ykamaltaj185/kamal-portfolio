/**
 * Studio Content Data
 * 
 * This file contains all content items for the Studio monitor tower.
 * Each item will be displayed on a monitor in the tower.
 * 
 * Platforms: 'youtube', 'blog', 'tiktok'
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#FF0000',
        accentColor: '#cc0000',
        icon: '▶',
        label: 'YouTube',
        shape: 'tv', // Wide CRT style
    },
    blog: {
        color: '#4A90D9',
        accentColor: '#2d6cb5',
        icon: '📝',
        label: 'Blog',
        shape: 'monitor', // Thin desktop monitor
    },
    tiktok: {
        color: '#00F2EA',
        accentColor: '#FF0050',
        icon: '🎵',
        label: 'TikTok',
        shape: 'phone', // Vertical phone
    },
    instagram: {
        color: '#E1306C',
        accentColor: '#C13584',
        icon: '📷',
        label: 'Instagram',
        shape: 'phone',
    },
    x: {
        color: '#000000',
        accentColor: '#14171A',
        icon: '𝕏',
        label: 'X (Twitter)',
        shape: 'monitor',
    },
    linkedin: {
        color: '#0077B5',
        accentColor: '#005E93',
        icon: 'in',
        label: 'LinkedIn',
        shape: 'monitor',
    },
    codrops: {
        color: '#0099FF',
        accentColor: '#0077CC',
        icon: '💧',
        label: 'Codrops',
        shape: 'monitor',
    },
};

// Kamal Taj's skills and experience content
const RAW_CONTENT_DATA = [
    // ============ Skills (TV monitors) ============
    {
        id: 'skill-001',
        platform: 'youtube',
        title: 'Python & Machine Learning',
        description: 'Proficient in Python with hands-on experience in Scikit-learn, CNNs, Isolation Forest, and OpenCV for building ML and deep learning models.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2026-01-01',
        views: 'Expert',
        duration: 'Core Skill',
    },
    {
        id: 'skill-002',
        platform: 'youtube',
        title: 'GenAI & LLMs',
        description: 'Experience building GenAI systems with LangChain, RAG pipelines, FAISS vector search, BM25 keyword search, CrossEncoder reranking, and local LLMs using Ollama.',
        frontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-12-01',
        views: 'Expert',
        duration: 'Core Skill',
    },
    {
        id: 'skill-003',
        platform: 'youtube',
        title: 'MLOps & Deployment',
        description: 'Building production-ready ML pipelines using Docker, MLflow for experiment tracking, Evidently AI for drift detection, Grafana for visualization and monitoring.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-11-01',
        views: 'Advanced',
        duration: 'Core Skill',
    },
    {
        id: 'skill-004',
        platform: 'youtube',
        title: 'Data & Streaming',
        description: 'Working with PostgreSQL, Apache Kafka for real-time data streaming, Pandas, NumPy for data manipulation and analysis in production environments.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-10-01',
        views: 'Advanced',
        duration: 'Core Skill',
    },
    {
        id: 'skill-005',
        platform: 'youtube',
        title: 'Backend & APIs',
        description: 'Building REST APIs with FastAPI and Flask, integrating Python backend services with HTML/JavaScript frontends for real-time ML applications.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-09-01',
        views: 'Advanced',
        duration: 'Core Skill',
    },
    {
        id: 'skill-006',
        platform: 'youtube',
        title: 'SQL & Databases',
        description: 'Strong in OOP, DBMS concepts, and SQL with PostgreSQL. Experienced in designing relational schemas, writing complex queries, and database optimization.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-08-01',
        views: 'Expert',
        duration: 'Core Skill',
    },
    {
        id: 'skill-007',
        platform: 'youtube',
        title: 'Deep Learning & CV',
        description: 'CNN-based models for image classification, face detection using OpenCV Haar Cascade, and real-time webcam inference deployed as Flask web applications.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-07-01',
        views: 'Advanced',
        duration: 'Core Skill',
    },
    {
        id: 'skill-008',
        platform: 'youtube',
        title: 'Git & GitHub',
        description: 'Version control with Git and GitHub for all projects. Collaborative development workflows, code reviews, and open-source contribution.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-06-01',
        views: 'Expert',
        duration: 'Core Skill',
    },

    // ============ Projects (Blog monitors) ============
    {
        id: 'proj-001',
        platform: 'blog',
        title: 'Fraud Detection MLOps Platform',
        description: 'Real-time fraud detection using Isolation Forest, Apache Kafka, PostgreSQL, MLflow, Evidently AI, and Grafana. Jan 2026 – Feb 2026.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2026-02-01',
        readTime: 'Jan–Feb 2026',
    },
    {
        id: 'proj-002',
        platform: 'blog',
        title: 'LLM Multi-Agent System with RAG',
        description: 'AI study assistant with hybrid RAG (FAISS + BM25 + CrossEncoder), multi-agent architecture, intent routing, and local LLMs via Ollama. Dec 2025.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2025-12-01',
        readTime: 'Dec 2025',
    },
    {
        id: 'proj-003',
        platform: 'blog',
        title: 'Face Mask Detection System',
        description: 'CNN-based classifier for Mask/No Mask detection with OpenCV Haar Cascade face detection and Flask web app supporting image uploads and webcam. May–Jul 2026.',
        thumbnail: null,
        url: 'https://github.com/ykamaltaj185',
        date: '2026-07-01',
        readTime: 'May–Jul 2026',
    },
    {
        id: 'proj-004',
        platform: 'blog',
        title: 'Education & Certifications',
        description: 'B.E. AI & ML @ BNMIT Bangalore (Expected 2027, CGPA 9.41). Certified: Python for Data Science (Infosys), Power BI Business Scenarios (Udemy).',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ykamaltaj/',
        date: '2026-11-01',
        readTime: '2023–2027',
    },
    {
        id: 'proj-005',
        platform: 'blog',
        title: 'Professional Summary',
        description: 'AI/ML undergraduate (CGPA 9.41) with hands-on experience in GenAI and MLOps. Strong in OOP, DBMS, SQL. Building REST APIs with FastAPI and Flask.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ykamaltaj/',
        date: '2026-11-19',
        readTime: '2023–Present',
    },

    // ============ Certifications (Phone monitors) ============
    {
        id: 'cert-001',
        platform: 'tiktok',
        title: 'Python for Data Science',
        description: 'Certified in Python for Data Science by Infosys. Covers data analysis, visualization, and ML foundations.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ykamaltaj/',
        date: '2025-01-01',
        views: 'Infosys',
        likes: 'Certified',
    },
    {
        id: 'cert-002',
        platform: 'tiktok',
        title: 'Power BI Business Scenarios',
        description: 'Certified in Power BI Business Scenarios with Hands-on Use Cases from Udemy. Advanced data visualization and business intelligence.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ykamaltaj/',
        date: '2024-06-01',
        views: 'Udemy',
        likes: 'Certified',
    },
    {
        id: 'cert-003',
        platform: 'tiktok',
        title: 'AI/ML Undergraduate',
        description: 'Pursuing B.E. in Artificial Intelligence and Machine Learning at BNM Institute of Technology, Bangalore. Expected graduation: 2027. CGPA: 9.41.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ykamaltaj/',
        date: '2023-08-01',
        views: 'BNMIT',
        likes: '9.41 CGPA',
    },
    {
        id: 'cert-004',
        platform: 'tiktok',
        title: 'Intermediate – 93.15%',
        description: 'Completed Board of Intermediate Education (Telangana State) at Narayana Narmada Campus, Hyderabad with 93.15% in 2023.',
        thumbnail: null,
        url: 'https://www.linkedin.com/in/ykamaltaj/',
        date: '2023-05-01',
        views: 'Narayana',
        likes: '93.15%',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

// Helper to get content by platform
export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

// Get latest content (for "On Air" indicator)
export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
