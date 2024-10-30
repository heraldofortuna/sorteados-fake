const Footer = () => {
  return (
    <footer className="bg-dark h-[140px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8">
        <ul className="text-light">
          <span><a href="#" className="hover:underline">Contacto, dudas y errores</a></span>&nbsp;|&nbsp;
          <a href="#" rel="nofollow" className="hover:underline">Preguntas frecuentes</a>&nbsp;|&nbsp;
          <a href="#" rel="nofollow" className="hover:underline">Condiciones legales</a>&nbsp;|&nbsp;
          <a href="#" rel="noopener" target="_blank" className="hover:underline">Blog</a>&nbsp;|&nbsp;	
          <a href="#" target="blank" className="hover:underline">Sortea2 en Facebook</a>&nbsp;|&nbsp;
          <a href="#" rel="noopener" target="_blank" className="hover:underline">RSS</a>
        </ul>
        <span className="text-dark-gray font-semibold">© 2008-2024&nbsp;Sortea2</span>
      </div>
    </footer>
  )
}

export default Footer;