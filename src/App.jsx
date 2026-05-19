import React from 'react';
import './App.css'; // Use para estilizar a página de divulgação

function PaginaDivulgacao() {
  return (
    <div className="landing-page">
      {/* 1. TÍTULO */}
      <header className="hero-section">
        <h1>Manager FC</h1>
        <p className="subtitle">O Simulador de Gestão de Futebol e Simulação de Partidas</p>
      </header>

      {/* 2. DESCRIÇÃO */}
      <section className="about-section">
        <h2>Sobre o Projeto</h2>
        <p> O Manager FC é um simulador de gestão e simulação de partidas de futebol inspirado em clássicos como Brasfoot e Football Manager. O objetivo principal do sistema é permitir a organização de um campeonato no formato de pontos corridos, processando estatísticas das equipes e simulando eventos de jogo em tempo real. Desenvolvido como um sistema de informação robusto, o projeto utiliza um motor matemático de simulação implementado puramente em C++ no Backend e uma interface interativa construída em React no Frontend.  </p>
      </section>

      {/* 3. FUNCIONALIDADES */}
      <section className="features-section">
        <h2>Funcionalidades</h2>
        <ul>
          <li>Simulação de partidas em tempo real</li>
          <li>Gestão de equipes e jogadores</li>
          <li>Processamento de estatísticas detalhadas</li>
          <li>Criação e gerenciamento de campeonatos</li>
        </ul>
      </section>

      {/* 4. VÍDEO */}
      <section className="video-section">
        <video width="100%" controls autoPlay muted loop>
        <source src=".\video demonstra.mp4" type="video/mp4" />
        O seu navegador não suporta a tag de vídeo.
        </video>
      </section>

      {/* 5. LINKS E RECURSOS */}
      <section className="resources-section">
        <h2>Recursos e Downloads</h2>
        <div className="buttons-container">
          <a href="https://github.com/joaopedrommm/manager-fc" target="_blank" rel="noreferrer" className="btn-link repo">
            Ver Código no GitHub
          </a>
          <a href="https://docs.google.com/document/d/1Y_0ITu7_dFNu9kH7ujvDrg9ZE2jU9FrPhPhv3Z-2A9c/edit?usp=sharing" target="_blank" className="btn-link doc">
            Ler Relatório Completo
          </a>
          <a href="https://youtu.be/uEbkA52vFp4" target="_blank" rel="noreferrer" className="btn-link video">
            Assistir Vídeo Completo no YouTube
          </a>
        </div>
      </section>
    </div>
  );
}

export default PaginaDivulgacao;