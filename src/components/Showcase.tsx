export default function Showcase() {
  const projects = [
    {
      title: 'Modern Kitchen Transformation',
      description: 'Complete kitchen remodel with custom cabinetry and quartz countertops',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Luxury Hardwood Installation',
      description: 'Premium oak hardwood flooring throughout main living areas',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Contemporary Bathroom Redesign',
      description: 'Elegant tile work and modern cabinetry installation',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'Elegant Staircase Refinish',
      description: 'Custom staircase with premium hardwood and modern railings',
      image: 'https://images.pexels.com/photos/534172/pexels-photo-534172.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Work</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Installed once, built to last
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">
            "Every project is an opportunity to exceed expectations"
          </p>
        </div>
      </div>
    </section>
  );
}
