import { useState } from 'react';
import './home.css';
import imagemPrincipal from '../../assets/imagem-aracaju-home.jpg';
import { MultiStepModal, type UserPreferences } from '../../components/Modal/MultiStepModal';

export function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleComplete = (data: UserPreferences) => {
    console.log('Preferências do usuário:', data);
    // Aqui você pode navegar para a página de resultados ou processar os dados
    // Por exemplo: navigate('/results', { state: data });
  };

  return (
    <div className="home-container">
      {/* Seção da Esquerda: Imagem */}
      <div className="home-image-section">
        <img src={imagemPrincipal} alt="Vista da cidade de Aracaju" className="home-image" />
      </div>

      {/* Seção da Direita: Texto e Botão */}
      <div className="home-content-section">
        <h1>Conheça Aracaju!</h1>
        <p>
          Conheça Aracaju, a capital de Sergipe, com suas
          praias tranquilas, cultura rica e gastronomia
          deliciosa. <br />Explore mercados, museus e atrações únicas que
          tornam cada visita inesquecível.
        </p>
        <button className="home-button" onClick={handleOpenModal}>
          Começar
          <span>&#x2794;</span>
        </button>
      </div>

      {/* Modal Multi-Step */}
      <MultiStepModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onComplete={handleComplete}
      />
    </div>
  );
}