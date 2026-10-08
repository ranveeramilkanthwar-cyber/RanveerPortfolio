/**
 * SeoContent — Hidden semantic HTML for search engines & AI crawlers.
 * 
 * This component renders keyword-rich, structured text that search engines
 * and AI bots can crawl, even when the visual content is animated/JS-driven.
 * It's visually hidden but fully accessible to screen readers and crawlers.
 */
export default function SeoContent() {
  return (
    <div
      className="sr-only"
      aria-hidden="false"
      itemScope
      itemType="https://schema.org/Person"
    >
      <h1 itemProp="name">Ranveer — Creative Developer & UI Engineer | 3D Games, AI/ML, React, Next.js</h1>
      
      <p itemProp="description">
        Ranveer is a creative developer and UI engineer from India, specializing in immersive 3D browser games,
        React and Next.js web applications, Python AI/ML projects, Flutter mobile apps, and Unity game development.
        I engineer stunning web and game experiences from zero to launch.
        Based in India, building cinematic, premium digital products.
      </p>

      <p itemProp="jobTitle">Creative Developer & UI Engineer</p>

      <section aria-label="Services">
        <h2>Services — Work with Ranveer</h2>
        
        <article>
          <h3>3D Browser Game Development</h3>
          <p>
            Building immersive 3D browser games using Three.js and Cannon.js physics. Projects include
            CyberRun 3D (Fall Guys-style obstacle course), SpaceDefenders 3D, and MazeEscapers 3D.
            Technologies: Three.js, Cannon-es, Vite, GSAP, WebGL.
          </p>
        </article>

        <article>
          <h3>React & Next.js Web Development</h3>
          <p>
            Engineering modern web applications with React and Next.js. Featuring cinematic UI animations,
            smooth UX, SEO optimization, and performance-first architecture using Tailwind CSS and Framer Motion.
          </p>
        </article>

        <article>
          <h3>AI / ML Web Applications</h3>
          <p>
            Building AI-powered web applications integrating Python machine learning models with clean
            React/Next.js frontends. Real-time inference APIs, interactive dashboards, and intelligent user experiences.
          </p>
        </article>

        <article>
          <h3>Flutter Mobile App Development</h3>
          <p>
            Cross-platform mobile app development for iOS and Android using Flutter and Dart.
            Smooth animations, native-like performance, and clean modern UI design.
          </p>
        </article>

        <article>
          <h3>Unity Game Development</h3>
          <p>
            Developing games in Unity with C#. Interactive gameplay mechanics, physics systems,
            and immersive 3D environments.
          </p>
        </article>

        <article>
          <h3>UI/UX Design with Figma</h3>
          <p>
            Creating high-fidelity prototypes, design systems, and premium user interfaces in Figma.
            Modern, clean, and visually impactful designs that translate directly to polished code.
          </p>
        </article>
      </section>

      <section aria-label="Projects">
        <h2>Featured Projects</h2>
        <ul>
          <li><strong>CyberRun 3D:</strong> Fall Guys-style 3D physics obstacle course game built with Three.js and Cannon.js.</li>
          <li><strong>SpaceDefenders 3D:</strong> High-intensity 3D space shooter browser game.</li>
          <li><strong>MazeEscapers 3D:</strong> Atmospheric 3D maze escape browser game.</li>
          <li><strong>AI Web Apps:</strong> Machine learning-powered full-stack web applications.</li>
          <li><strong>Mobile Apps:</strong> Cross-platform Flutter applications for iOS and Android.</li>
          <li><strong>E-Commerce Websites:</strong> High-performance React and Next.js web storefronts.</li>
        </ul>
      </section>

      <section aria-label="Technical Skills">
        <h2>Technical Skills</h2>
        <p itemProp="knowsAbout">
          React, Next.js, Three.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Vite, GSAP, Framer Motion,
          Node.js, Express, Python, AI/ML, Flutter, Dart, Unity, C++, C#,
          MongoDB, PostgreSQL, Git, Vercel, Netlify,
          Figma, Photoshop, Illustrator, After Effects, Premiere Pro, DaVinci Resolve
        </p>
      </section>

      <section aria-label="About Ranveer — Creative Developer & UI Engineer">
        <h2>Ranveer – Creative Developer & UI Engineer</h2>
        <p>
          Ranveer is a creative developer and UI engineer from India, focused on building immersive 3D games,
          premium web applications, and AI-powered digital experiences. Combining cinematic design aesthetics
          with high-performance code, Ranveer engineers everything from zero to launch — making products that
          look stunning and work flawlessly.
        </p>
        
        <h3>Skills and Expertise:</h3>
        <ul>
          <li>3D Game Development (Three.js, Cannon-es, Unity)</li>
          <li>React & Next.js Web Development</li>
          <li>Python AI/ML Engineering</li>
          <li>Flutter Mobile App Development</li>
          <li>UI/UX Design with Figma</li>
          <li>Frontend Engineering (Vite, Tailwind CSS)</li>
          <li>Node.js Backend Development</li>
          <li>C++ / C# Systems & Game Logic</li>
          <li>Responsive Web Design</li>
          <li>Open Source Development</li>
          <li>E-Commerce Web Development</li>
          <li>Creative Coding & Interactive Systems</li>
        </ul>
        
        <p>
          Ranveer continues to build immersive digital experiences at the intersection of technology and design.
          GitHub: ranveeramilkanthwar-cyber.
        </p>
      </section>

      <section aria-label="Contact">
        <h2>Hire Ranveer — Contact Information</h2>
        <p>
          <span itemProp="email">ranveeramilkanthwar@gmail.com</span> |
          GitHub: github.com/ranveeramilkanthwar-cyber |
          Based in India. Available for freelance and collaborative projects worldwide.
        </p>
      </section>
    </div>
  );
}
