/* ============================================
   HUGO DAIRA SOUSA — PORTFOLIO JS
   Handles: navigation, scroll animations,
   skill bars, form, micro-interactions,
   theme toggling and language toggling.
   ============================================ */

/* ----- Translations Dictionary ----- */
const translations = {
  pt: {
    "nav-about": "Sobre",
    "nav-skills": "Competências",
    "nav-projects": "Projetos",
    "nav-experience": "Experiência",
    "nav-education": "Formação",
    "nav-contact": "Contacto",
    "hero-greeting": "// Olá, bem-vindo ao meu portfólio",
    "hero-role": "Full-Stack Web Developer",
    "hero-desc": "Estudante de Engenharia Informática na Universidade Lusófona do Porto. Apaixonado por criar soluções web completas, com dedicação ao detalhe e espírito de equipa. Do conceito ao deploy — construo experiências digitais que fazem a diferença.",
    "btn-projects": "Ver Projetos",
    "btn-contact": "Contactar",
    "about-label": "Sobre Mim",
    "about-title": "Developer com paixão<br>por resolver problemas",
    "about-p1": "Olá! Sou o Hugo Sousa, natural de Vila Nova de Gaia, e atualmente estudo Engenharia Informática na Universidade Lusófona do Porto. A minha jornada no mundo da tecnologia começou cedo — desde o ensino secundário no Colégio de Gaia, no curso de Informática, Tecnologia e Multimédia (ITM), onde descobri a minha paixão pela programação.",
    "about-p2": "Sou um developer empenhado que valoriza o trabalho em equipa e gosta genuinamente de ajudar os outros. Acredito que as melhores soluções nascem da colaboração e da atenção ao detalhe. Especializo-me em desenvolvimento web Full-Stack, com foco em PHP, JavaScript, HTML5 e CSS3.",
    "about-p3": "Quando não estou a programar, estou provavelmente a jogar futebol ou a passar tempo com os meus animais. Também tenho formação musical — toco violino e guitarra, algo que me ensinou disciplina e perseverança.",
    "stat-projects": "Projetos",
    "stat-years": "Anos de Código",
    "stat-tech": "Tecnologias Core",
    "detail-location-label": "Localização",
    "detail-location-val": "Canidelo, Vila Nova de Gaia",
    "detail-edu-label": "Formação Atual",
    "detail-edu-val": "Engenharia Informática — Univ. Lusófona do Porto",
    "detail-focus-label": "Foco",
    "detail-focus-val": "Full-Stack Web Development",
    "detail-stack-label": "Stack Principal",
    "detail-email-label": "Email",
    "detail-hobbies-label": "Hobbies",
    "detail-hobbies-val": "Futebol · Animais · Violino · Guitarra",
    "skills-label": "Competências",
    "skills-title": "Stack Tecnológico",
    "skill-php-desc": "Desenvolvimento backend robusto. Criação de sistemas de gestão, APIs, autenticação e integração com bases de dados MySQL.",
    "skill-js-desc": "Interatividade frontend e lógica do lado do cliente. Manipulação do DOM, AJAX, validação de formulários e animações dinâmicas.",
    "skill-html-desc": "Estruturação semântica de páginas web. SEO, acessibilidade, formulários avançados e integração multimédia.",
    "skill-css-desc": "Design responsivo e moderno. Flexbox, Grid, animações CSS, variáveis customizadas e media queries.",
    "skill-sql-desc": "Modelação e gestão de bases de dados relacionais. Queries complexas, normalização e otimização.",
    "skill-git-desc": "Controlo de versões, branching, colaboração em equipa e gestão de repositórios com boas práticas.",
    "skill-java-desc": "Programação orientada a objetos. Desenvolvimento de aplicações robustas, integração de sistemas e algoritmos complexos.",
    "skill-python-desc": "Automação de tarefas, processamento de dados e scripting. Foco em eficiência, código limpo e arquitetura modular.",
    "projects-label": "Projetos",
    "projects-title": "Trabalho em Destaque",
    "proj-sgo-type": "Full-Stack · Académico",
    "proj-sgo-title": "SGO — Sistema de Gestão de Oficina",
    "proj-sgo-desc": "Projeto académico Full-Stack para a disciplina de Programação Web. Simula um ambiente real de gestão oficinal com painéis para administrador, rececionista e mecânico. Inclui sistema de faturação, gestão de clientes e logs.",
    "proj-arrabida-type": "Full-Stack · Restauração",
    "proj-arrabida-title": "Gostos d'Arrábida — Restaurante/Pastelaria",
    "proj-arrabida-desc": "Aplicação web Full-Stack para gestão de restaurante e pastelaria. Inclui sistema de reservas, ementa digital com geração de QR Code para mesas e painéis dedicados para Administrador e Staff.",
    "proj-asydim-type": "Full-Stack · Sustentabilidade",
    "proj-asydim-title": "ASYDIM — Consultoria Sustentável",
    "proj-asydim-desc": "Solução digital completa para consultoria e formação sustentável. Conecta utilizadores a oportunidades educacionais verdes com design premium e painel de controlo dedicado para administração.",
    "proj-univermotion-type": "Full-Stack · Energia",
    "proj-univermotion-title": "Univermotion — Energias Renováveis",
    "proj-univermotion-desc": "Website premium de energias renováveis com simulador de painéis solares, soluções de carregamento de veículos elétricos e sistema de email seguro via PHPMailer.",
    "proj-oficina-type": "Frontend · Negócio Local",
    "proj-oficina-title": "Oficina Carlos Silva & Alexandra Pires",
    "proj-oficina-desc": "Website moderno e profissional para oficina automóvel em Chaves, Portugal. Design premium com experiência de utilizador otimizada, incluindo serviços, contactos e localização.",
    "exp-label": "Experiência",
    "exp-title": "Percurso Profissional",
    "exp-tealt-role": "Analista de Dados",
    "exp-tealt-type": "Projeto de curta duração (1 mês)",
    "exp-tealt-desc": "Organização e integração de relatórios corporativos nas plataformas internas da TEALT, com foco em análise de dados, consistência da informação e documentação técnica dos processos. Incluiu validação de conteúdos, estruturação de dados e normalização de registos para facilitar consulta, manutenção e apoio à decisão.",
    "exp-tealt-skill1": "Análise de Dados",
    "exp-tealt-skill2": "Big Data",
    "exp-tealt-skill3": "Documentação Técnica",
    "exp-armis-role": "Desenvolvedor Web",
    "exp-armis-type": "Meio período",
    "exp-armis-desc": "Desenvolvimento de uma aplicação capaz de ler documentos, utilizando aplicações de IA (Inteligência Artificial) cognitiva, definindo parâmetros de leitura, para armazenar e visualizar dados específicos.",
    "exp-armis-skill1": "Resolução de problemas",
    "exp-armis-skill2": "Desenvolvimento Web",
    "edu-label": "Formação",
    "edu-title": "Percurso Académico",
    "edu-uni-title": "Licenciatura em Engenharia Informática",
    "edu-uni-place": "Universidade Lusófona do Porto",
    "edu-uni-desc": "Formação avançada em desenvolvimento de software, algoritmos, bases de dados, redes e programação web. Foco em projetos práticos Full-Stack.",
    "edu-sec-title": "Ensino Secundário — ITM",
    "edu-sec-desc": "Curso de Informática, Tecnologia e Multimédia (ITM). Primeiros passos no mundo da programação com VB e C#. Desenvolvimento de competências em tecnologia e informática.",
    "edu-music-title": "Ensino Articulado — Música",
    "edu-music-place": "Escola de Música de Perosinho",
    "edu-music-desc": "5 anos de formação musical, com aprendizagem de Violino e Guitarra. Desenvolvimento de disciplina, criatividade e perseverança.",
    "contact-label": "Contacto",
    "contact-title": "Vamos trabalhar juntos?",
    "contact-text": "Estou aberto a oportunidades de estágio, freelance ou colaborações. Não hesites em entrar em contacto — respondo sempre!",
    "contact-phone-label": "Telefone",
    "form-name-label": "Nome",
    "form-name-placeholder": "O teu nome",
    "form-email-placeholder": "email@exemplo.com",
    "form-subject-label": "Assunto",
    "form-subject-placeholder": "Proposta de projeto...",
    "form-message-label": "Mensagem",
    "form-message-placeholder": "Escreve a tua mensagem aqui...",
    "form-submit": "Enviar Mensagem",
    "footer-copy": "Hugo Daira Sousa. Feito com dedicação.",
    "scroll-text": "scroll"
  },
  en: {
    "nav-about": "About",
    "nav-skills": "Skills",
    "nav-projects": "Projects",
    "nav-experience": "Experience",
    "nav-education": "Education",
    "nav-contact": "Contact",
    "hero-greeting": "// Hello, welcome to my portfolio",
    "hero-role": "Full-Stack Web Developer",
    "hero-desc": "Computer Engineering student at Universidade Lusófona do Porto. Passionate about creating complete web solutions, with attention to detail and team spirit. From concept to deployment — I build digital experiences that make a difference.",
    "btn-projects": "View Projects",
    "btn-contact": "Contact Me",
    "about-label": "About Me",
    "about-title": "Developer with a passion<br>for solving problems",
    "about-p1": "Hi! I'm Hugo Sousa, from Vila Nova de Gaia, currently studying Computer Engineering at Universidade Lusófona do Porto. My journey in tech started early — during high school at Colégio de Gaia in the IT and Multimedia (ITM) course, where I discovered my passion for programming.",
    "about-p2": "I'm a dedicated developer who values teamwork and genuinely enjoys helping others. I believe the best solutions come from collaboration and attention to detail. I specialize in Full-Stack web development, focusing on PHP, JavaScript, HTML5, and CSS3.",
    "about-p3": "When I'm not coding, I'm probably playing football or spending time with my pets. I also have a musical background — I play violin and guitar, which taught me discipline and perseverance.",
    "stat-projects": "Projects",
    "stat-years": "Years Coding",
    "stat-tech": "Core Tech",
    "detail-location-label": "Location",
    "detail-location-val": "Canidelo, Vila Nova de Gaia",
    "detail-edu-label": "Current Education",
    "detail-edu-val": "Computer Engineering — Univ. Lusófona do Porto",
    "detail-focus-label": "Focus",
    "detail-focus-val": "Full-Stack Web Development",
    "detail-stack-label": "Main Stack",
    "detail-email-label": "Email",
    "detail-hobbies-label": "Hobbies",
    "detail-hobbies-val": "Football · Pets · Violin · Guitar",
    "skills-label": "Skills",
    "skills-title": "Tech Stack",
    "skill-php-desc": "Robust backend development. Creation of management systems, APIs, authentication, and MySQL database integration.",
    "skill-js-desc": "Frontend interactivity and client-side logic. DOM manipulation, AJAX, form validation, and dynamic animations.",
    "skill-html-desc": "Semantic structuring of web pages. SEO, accessibility, advanced forms, and multimedia integration.",
    "skill-css-desc": "Responsive and modern design. Flexbox, Grid, CSS animations, custom variables, and media queries.",
    "skill-sql-desc": "Relational database modeling and management. Complex queries, normalization, and optimization.",
    "skill-git-desc": "Version control, branching, team collaboration, and repository management with best practices.",
    "skill-java-desc": "Object-oriented programming. Development of robust applications, system integration, and complex algorithms.",
    "skill-python-desc": "Task automation, data processing, and scripting. Focus on efficiency, clean code, and modular architecture.",
    "projects-label": "Projects",
    "projects-title": "Featured Work",
    "proj-sgo-type": "Full-Stack · Academic",
    "proj-sgo-title": "SGO — Workshop Management System",
    "proj-sgo-desc": "Full-Stack academic project for Web Programming. Simulates a real workshop management environment with dashboards for admin, receptionist, and mechanic. Includes billing, client management, and logs.",
    "proj-arrabida-type": "Full-Stack · Restaurant",
    "proj-arrabida-title": "Gostos d'Arrábida — Restaurant & Bakery",
    "proj-arrabida-desc": "Full-Stack web app for restaurant and bakery management. Includes a reservation system, digital menu with QR Code generation for tables, and dedicated admin/staff dashboards.",
    "proj-asydim-type": "Full-Stack · Sustainability",
    "proj-asydim-title": "ASYDIM — Sustainability Consulting",
    "proj-asydim-desc": "Complete digital solution for sustainability consulting and training. Connects users to green educational opportunities with premium design and a dedicated admin control panel.",
    "proj-univermotion-type": "Full-Stack · Energy",
    "proj-univermotion-title": "Univermotion — Renewable Energy",
    "proj-univermotion-desc": "Premium renewable energy website with a solar panel simulator, electric vehicle charging solutions, and a secure PHPMailer-based email system.",
    "proj-oficina-type": "Frontend · Local Business",
    "proj-oficina-title": "Carlos Silva & Alexandra Pires Auto Repair",
    "proj-oficina-desc": "Modern and professional website for an auto repair shop in Chaves, Portugal. Premium design with optimized user experience, including services, contacts, and location.",
    "exp-label": "Experience",
    "exp-title": "Professional Path",
    "exp-tealt-role": "Data Analyst",
    "exp-tealt-type": "Short-term project (1 month)",
    "exp-tealt-desc": "Organized and integrated corporate reports into TEALT's internal platforms, focusing on data analysis, information consistency, and technical process documentation. The work included content validation, data structuring, and record normalization to improve consultation, maintenance, and decision support.",
    "exp-tealt-skill1": "Data Analysis",
    "exp-tealt-skill2": "Big Data",
    "exp-tealt-skill3": "Technical Documentation",
    "exp-armis-role": "Web Developer",
    "exp-armis-type": "Part-time",
    "exp-armis-desc": "Development of an application capable of reading documents, using cognitive AI (Artificial Intelligence) applications, defining reading parameters, to store and visualize specific data.",
    "exp-armis-skill1": "Problem Solving",
    "exp-armis-skill2": "Web Development",
    "edu-label": "Education",
    "edu-title": "Academic Path",
    "edu-uni-title": "BSc in Computer Engineering",
    "edu-uni-place": "Universidade Lusófona do Porto",
    "edu-uni-desc": "Advanced training in software development, algorithms, databases, networks, and web programming. Focus on practical Full-Stack projects.",
    "edu-sec-title": "High School — ITM",
    "edu-sec-desc": "IT, Technology and Multimedia course (ITM). First steps into programming with VB and C#. Skill development in technology and IT.",
    "edu-music-title": "Articulated Teaching — Music",
    "edu-music-place": "Escola de Música de Perosinho",
    "edu-music-desc": "5 years of musical training, learning Violin and Guitar. Development of discipline, creativity, and perseverance.",
    "contact-label": "Contact",
    "contact-title": "Let's work together?",
    "contact-text": "I'm open to internship opportunities, freelance work, or collaborations. Don't hesitate to reach out — I always reply!",
    "contact-phone-label": "Phone",
    "form-name-label": "Name",
    "form-name-placeholder": "Your name",
    "form-email-placeholder": "email@example.com",
    "form-subject-label": "Subject",
    "form-subject-placeholder": "Project proposal...",
    "form-message-label": "Message",
    "form-message-placeholder": "Write your message here...",
    "form-submit": "Send Message",
    "footer-copy": "Hugo Daira Sousa. Crafted with dedication.",
    "scroll-text": "scroll"
  }
};

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Theme Toggler ----- */
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('i');
  
  // Check local storage for theme preference
  const currentTheme = localStorage.getItem('theme') || 'dark';
  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if(themeIcon) themeIcon.className = 'ph ph-moon';
  }

  themeToggle?.addEventListener('click', () => {
    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    if (isLight) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
      if(themeIcon) themeIcon.className = 'ph ph-sun';
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      if(themeIcon) themeIcon.className = 'ph ph-moon';
    }
  });

  /* ----- Language Toggler ----- */
  const langToggle = document.getElementById('lang-toggle');
  let currentLang = localStorage.getItem('lang') || 'pt';
  
  const updateLanguage = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Handle elements with innerHTML safely (like the br in about-title)
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.hasAttribute('placeholder')) {
            el.setAttribute('placeholder', translations[lang][key]);
          }
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
    
    // Update button text
    if(langToggle) langToggle.textContent = lang.toUpperCase();
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
  };

  // Initialize language
  updateLanguage(currentLang);

  langToggle?.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    updateLanguage(currentLang);
  });

  /* ----- Navbar scroll effect ----- */
  const navbar = document.querySelector('.navbar');
  const handleNavScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ----- Mobile menu ----- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ----- Smooth scroll for nav links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ----- Scroll reveal animation ----- */
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const parent = entry.target.parentElement;
        const siblings = parent.querySelectorAll('.reveal');
        siblings.forEach((el, i) => {
          if (el === entry.target || entry.target.closest('.reveal') === el) {
            el.style.transitionDelay = `${i * 0.1}s`;
          }
        });
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  revealElements.forEach(el => revealObserver.observe(el));

  /* ----- Skill bars animation ----- */
  const skillBars = document.querySelectorAll('.skill-bar-fill');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const width = target.getAttribute('data-width');
        setTimeout(() => {
          target.style.width = width + '%';
        }, 300);
        skillObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => skillObserver.observe(bar));

  /* ----- Active nav link highlight ----- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const highlightNav = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.style.color = 'var(--accent)';
          } else {
            link.style.color = '';
          }
        });
      }
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });

  /* ----- Contact form handler ----- */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-primary');
    // Store original innerHTML instead of textContent because of the icon
    const originalHTML = btn.innerHTML;

    btn.textContent = currentLang === 'pt' ? 'A enviar...' : 'Sending...';
    btn.disabled = true;

    try {
      const response = await fetch('https://formspree.io/f/mrerozab', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        btn.textContent = currentLang === 'pt' ? '✓ Mensagem enviada!' : '✓ Message sent!';
        btn.style.background = '#2ecc71';
        form.reset();
      } else {
        throw new Error('Formspree error');
      }
    } catch (error) {
      btn.textContent = currentLang === 'pt' ? 'Erro ao enviar' : 'Error sending';
      btn.style.background = '#e74c3c';
    } finally {
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }
  });

  /* ----- Typing effect for hero greeting ----- */
  const greetingEl = document.querySelector('.hero-greeting');
  if (greetingEl) {
    // Only run typing effect on initial load, language switch changes it instantly
    const text = greetingEl.textContent;
    greetingEl.textContent = '';
    greetingEl.style.borderRight = '2px solid var(--accent)';

    let i = 0;
    const typeInterval = setInterval(() => {
      greetingEl.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          greetingEl.style.borderRight = 'none';
        }, 1500);
      }
    }, 60);
  }

  /* ----- Parallax on hero glow ----- */
  window.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    if (e.clientY > rect.bottom) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    hero.style.setProperty('--glow-x', `${x}px`);
    hero.style.setProperty('--glow-y', `${y}px`);
  }, { passive: true });

  /* ----- Year in footer ----- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
