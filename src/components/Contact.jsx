import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  const [errors, setErrors] = useState({});

  // Validación de formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    // Simulación de envío (reemplazar con API real)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Formulario enviado:', formData);
      
      setFormStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message después de 5 segundos
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      label: 'Email',
      value: 'patricia.caballero.roldan@gmail.com',
      link: 'mailto:patricia.caballero.roldan@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      ),
      label: 'Teléfono',
      value: '+34 662 62 38 32',
      link: 'tel:+34662623832'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      label: 'Ubicación',
      value: 'Madrid, España',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase mb-4">
            contacto<span className="text-olive-600">.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Columna izquierda - Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Ponte en contacto</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Ya sea que necesites fotografía, diseño o producción audiovisual para tu proyecto, 
                estoy aquí para ayudarte a contar tu historia de forma visual.
              </p>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-olive-600/10 rounded-lg flex items-center justify-center text-olive-500 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-white hover:text-olive-500 transition-colors"
                        aria-label={`${item.label}: ${item.value}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-white">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div className="p-6 bg-gradient-to-br from-olive-600/10 to-olive-700/10 rounded-lg border border-olive-600/20">
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2 text-olive-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Horario de respuesta
              </h4>
              <p className="text-gray-400 text-sm">
                Lunes a Viernes: 9:00 - 18:00<br />
                Respondo en menos de 24 horas
              </p>
            </div>
          </div>

          {/* Columna derecha - Formulario */}
          <div className="bg-zinc-800 p-8 rounded-2xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre <span className="text-olive-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-900 border ${
                    errors.name ? 'border-red-500' : 'border-zinc-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-olive-500 transition-colors`}
                  placeholder="Tu nombre"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-sm text-red-500" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-olive-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-900 border ${
                    errors.email ? 'border-red-500' : 'border-zinc-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-olive-500 transition-colors`}
                  placeholder="tu@email.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-red-500" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-olive-500 transition-colors"
                  placeholder="+34 123 456 789"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje <span className="text-olive-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-4 py-3 bg-zinc-900 border ${
                    errors.message ? 'border-red-500' : 'border-zinc-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-olive-500 transition-colors resize-none`}
                  placeholder="Cuéntame sobre tu proyecto..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={formStatus.loading}
                className={`w-full py-4 rounded-lg font-semibold transition-all ${
                  formStatus.loading
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-olive-600 hover:bg-olive-700 transform hover:scale-105 shadow-lg hover:shadow-olive-600/50'
                } text-white`}
                aria-label={formStatus.loading ? 'Enviando mensaje' : 'Enviar mensaje'}
              >
                {formStatus.loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>

              {/* Success message */}
              {formStatus.success && (
                <div className="p-4 bg-green-600/20 border border-green-600/50 rounded-lg text-green-400 text-sm" role="alert">
                  ✓ ¡Mensaje enviado con éxito! Te responderé pronto.
                </div>
              )}

              {/* Error message */}
              {formStatus.error && (
                <div className="p-4 bg-red-600/20 border border-red-600/50 rounded-lg text-red-400 text-sm" role="alert">
                  ✗ {formStatus.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
