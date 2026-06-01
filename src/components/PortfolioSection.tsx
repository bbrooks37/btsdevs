// src/components/PortfolioSection.tsx

const projects = [
  { name: "Cursive Trace Studio", img: "/cursive.png", link: "https://cursive-tracer-78ofucedt-brandon-brooks-projects-3d7b8471.vercel.app/" },
  { name: "Recipe Grid", img: "/recipes.png", link: "https://receipe-grid-efn6zf72t-brandon-brooks-projects-3d7b8471.vercel.app/" },
  { name: "Ryley Design", img: "/rdc.png", link: "https://ryleydesigns.com/" },
  { name: "ETF Investing", img: "/ETF.png", link: "https://etf-investing.netlify.app/" },
  { name: "Bible Kiosk", img: "/bible.png", link: "https://bible-kiosk.netlify.app/" },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-slate-50" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Recent Projects</h2>
          <p className="mt-4 text-lg text-slate-600">A showcase of custom web development and technical solutions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-2xl p-4 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-xl mb-4 aspect-video bg-slate-100">
                <img 
                  src={project.img} 
                  alt={project.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                {project.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}