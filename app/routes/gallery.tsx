import {projects} from "~/routes/function/projects";
import galleryStyle from "~/styles/components/gallery/gallery.css";

export let links = () => {
  return [{rel: "stylesheet", href: galleryStyle}];
};
export let meta = () => {
  return {
    title: "Gallery",
    description: "qwyzeX's Gallery.",
  };
};

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>GALLERY</h1>
      <div className="projects">
        <h2 className="cascade">// Projects</h2>
        <section>
          {projects.map(
            (
              project // listed projects
            ) => (
              <div key={project.name} className="card">
                <h3 key={project.name}>{project.name}</h3>
                <p key={project.desc}>{project.desc}</p>
                <hr />
                <p key={project.about} className="desc">
                  {project.about}
                </p>
                <a
                  className="source-code fill"
                  target="_blank"
                  key={project.repo}
                  href={project.repo}
                >
                  <span></span>
                </a>
                <div>
                  <a target="_blank" key={project.demo} href={project.demo}>
                    &#9656;
                  </a>
                  <p>{project.date}</p>
                </div>
              </div>
            )
          )}
        </section>
      </div>
      {/* <div>
                <h2 className='cascade'></h2>
            </div> */}
    </div>
  );
};

export default Gallery;
