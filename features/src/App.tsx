import { Github, ExternalLink, Mail, Code2, Terminal, BookOpen } from 'lucide-react';
import { Hero3D, GlitchText, TiltCard } from './components';
import { useMousePosition } from './hooks/useMousePosition';

const projects = [
  {
    name: 'shadcn-interval-picker',
    description: 'Interval Picker component for recurring events in shadcn/ui',
    category: 'Open Source',
    url: 'https://github.com/shadcn-ui/ui/pull/8839',
    icon: '📅'
  },
  {
    name: 'shadcn-multiple-sidebars',
    description: 'Multiple independent sidebar instances for shadcn/ui',
    category: 'Open Source',
    url: 'https://github.com/shadcn-ui/ui/pull/8237',
    icon: '📑'
  },
  {
    name: 'theme-studio',
    description: 'Visual theme designer for shadcn/ui with real-time preview',
    category: 'Product',
    url: 'https://github.com/peterpcw/shadcn-theme-studio',
    icon: '🎨'
  },
  {
    name: 'rtl-container-lookup',
    description: 'Performance optimization for React Testing Library',
    category: 'Open Source',
    url: 'https://github.com/testing-library/react-testing-library/pull/1254',
    icon: '⚡'
  },
  {
    name: 'vitest-doctests',
    description: 'Doctest plugin for Vitest with JSDoc and Python-style assertions',
    category: 'Open Source',
    url: 'https://github.com/vitest-dev/vitest/pull/7342',
    icon: '🧪'
  },
  {
    name: 'git-hooks-cli',
    description: 'Git hooks CLI with lazy-loaded styling',
    category: 'CLI',
    url: 'https://www.npmjs.com/package/git-hooks-cli',
    icon: '🪝'
  },
];

const guides = [
  { name: 'Webpack → Vite Migration', price: '$29', url: 'https://gumroad.com/l/webpack-to-vite' },
  { name: 'React 18→19 Migration', price: '$29', url: 'https://gumroad.com/l/react-18-to-19' },
  { name: 'TanStack Query v5', price: '$24', url: 'https://gumroad.com/l/tanstack-query-v5' },
  { name: 'React Router v7', price: '$29', url: 'https://gumroad.com/l/react-router-v7' },
  { name: 'ESLint 8→9', price: '$19', url: 'https://gumroad.com/l/eslint-8-to-9' },
  { name: 'Normalizr Guide', price: '$19', url: 'https://gumroad.com/l/normalizr' },
];

const skills = {
  frontend: ['React 18/19', 'TypeScript 5.x', 'shadcn/ui', 'Tailwind CSS 3.4', 'Next.js 15', 'Zustand'],
  testing: ['Vitest', 'Jest', 'React Testing Library', 'Playwright', 'msw'],
  buildTools: ['Vite 5/6', 'Turborepo', 'ESLint 8/9', 'Rollup', 'Webpack → Vite'],
  backend: ['Node.js 20+', 'Python', 'PostgreSQL', 'Docker', 'GitHub Actions'],
};

function App() {
  const mousePosition = useMousePosition();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center justify-center text-center px-4 py-16 relative">
        <Hero3D mousePosition={mousePosition} />
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-primary">
            <Code2 size={24} />
            <span className="text-sm font-medium">Full-Stack Developer & Open Source Maintainer</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">
            <GlitchText text="Peter W." />
          </h1>
          <p className="text-xl text-muted mb-8">
            Building the tools developers need to ship better code, faster. 
            Creator of <span className="text-primary">attune</span>, <span className="text-primary">retect</span>, and contributor to shadcn/ui.
          </p>
          <p className="text-muted mb-8">
            Specializing in React, TypeScript, testing infrastructure, and developer tooling.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
            >
              View Projects
            </a>
            <a
              href="#guides"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:border-primary transition"
            >
              Browse Guides
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-lg text-muted mb-4">
            I'm a full-stack developer based in Austin, TX, with a passion for building tools that make developers' lives easier.
          </p>
          <p className="text-lg text-muted mb-4">
            After years of hobby coding, I'm now focused on creating real products and contributing to the open-source community. 
            My current focus is on developer tooling, testing infrastructure, and helping teams navigate the ever-changing JavaScript ecosystem.
          </p>
          <p className="text-lg text-muted">
            When I'm not coding, you'll find me exploring new technologies, writing documentation, or helping other developers solve their problems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-surface border border-border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary capitalize">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1 bg-background border border-border rounded-full text-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <TiltCard key={project.name} className="h-full">
                <a
                  href={project.url}
                  className="bg-surface border border-border rounded-xl p-6 hover:border-primary transition group h-full flex flex-col"
                >
                  <div className="text-3xl mb-3">{project.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                    {project.name}
                  </h3>
                  <p className="text-muted text-sm mb-4 flex-grow">{project.description}</p>
                  <div className="flex items-center gap-2 text-accent text-sm">
                    <Github size={14} />
                    <span>View on GitHub</span>
                    <ExternalLink size={12} className="ml-auto" />
                  </div>
                </a>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Guides & Tutorials</h2>
          <p className="text-muted text-center mb-12">
            Migration guides and tutorials based on real-world experience
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <TiltCard key={guide.name} className="h-full">
                <a
                  href={guide.url}
                  className="bg-surface border border-border rounded-xl p-6 text-center hover:border-primary transition h-full flex flex-col"
                >
                  <div className="flex items-center justify-center gap-2 mb-3 text-primary">
                    <BookOpen size={18} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{guide.name}</h3>
                  <p className="text-primary font-semibold mt-auto">{guide.price}</p>
                </a>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted mb-8">
            Austin, TX • Available for remote work and consulting
          </p>
          <a
            href="mailto:peter@wilson.dev"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            <Mail size={18} />
            peter@wilson.dev
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted text-sm border-t border-border">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Terminal size={14} />
          <span>Built with React + TypeScript + Tailwind</span>
        </div>
        <p>© 2026 Peter W.</p>
      </footer>
    </div>
  );
}

export default App;
