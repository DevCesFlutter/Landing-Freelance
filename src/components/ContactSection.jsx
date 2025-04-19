const ContactSection = () => (
  <section id="contacto" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
      <p className="text-gray-600 mb-4">
        Puedes escribirnos a{" "}
        <a className="text-green-600" href="mailto: cesarnegretes100@gmail.com">
          cesarnegretes100@gmail.com
        </a>{" "}
        o llamarnos al +56 9 53373116
      </p>
      <a
        href="https://wa.me/56953373116"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors"
      >
        Enviar Mensaje
      </a>
    </div>
  </section>
);

export default ContactSection;
