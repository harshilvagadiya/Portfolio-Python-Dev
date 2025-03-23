export default function Projects() {
    return (
      <section className="p-10 bg-bgLight text-textDark">
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">Project 1</h3>
            <p>A Django + React web application.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-bold">Project 2</h3>
            <p>A REST API built with Django REST Framework.</p>
          </div>
        </div>
      </section>
    );
  }
  