'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Head from 'next/head';
import { FaInstagram, FaLinkedin, FaGithub, FaSun, FaMoon } from "react-icons/fa";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Sobre Mim | Maria Fernanda</title>
        <meta
          name="description"
          content="Portfólio de Maria Fernanda, desenvolvedora iniciante apaixonada por tecnologia, design e experiências digitais."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="bg-white dark:bg-[#0a0a0a] text-[#333] dark:text-[#ededed] min-h-screen font-inter scroll-smooth transition-colors duration-500">
        {/* MENU FIXO */}
        <nav className="fixed top-0 w-full bg-[#f9c9d4] dark:bg-[#1a1a1a] border-b border-[#f7a7bb] dark:border-[#2a2a2a] z-50 shadow-sm transition-colors duration-500">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white select-none">MF</h1>
            <ul className="hidden sm:flex space-x-6 text-sm font-medium text-white">
              <li><a href="#sobre" className="hover:underline">Sobre mim</a></li>
              <li><a href="#projetos" className="hover:underline">Projetos</a></li>
              <li><a href="#contato" className="hover:underline">Contato</a></li>
            </ul>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-white text-xl hover:scale-110 transition-transform"
              aria-label="Alternar modo claro e escuro"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </nav>

        {/* HEADER */}
        <section className="pt-28 pb-20 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 gap-10">
          <div className="max-w-xl text-left">
            {/* Título do Header com mesma fonte e estilo que "Sobre Mim" */}
            <h2 className="text-4xl font-bold mb-6 font-inter">
              <span className="text-[#f17da1]">Olá,</span>{' '}
              <span className="text-[#333333] dark:text-[#ededed]">eu sou a Fernanda!</span>
            </h2>
            <p className="text-lg leading-relaxed">
              Sou estudante de Licenciatura em Computação com formação técnica em Análise e Desenvolvimento de Sistemas. Estou me desenvolvendo na área de tecnologia, com foco em projetos que unem organização, criatividade e propósito. Iniciando minha carreira com vontade de aprender, crescer e fazer a diferença. Tenho interesse especial por ambientes que envolvem{' '}
              <span className="text-[#f17da1] font-semibold">Solução</span>,{' '}
              <span className="text-[#f17da1] font-semibold">Criatividade</span> e{' '}
              <span className="text-[#f17da1] font-semibold">Inovação</span>.
            </p>
          </div>
          <div>
            <Image
              src="/fotoperfil.jpeg"
              alt="Foto de perfil"
              width={300}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </section>

        {/* SOBRE MIM */}
        <section
          id="sobre"
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6 py-20"
        >
          <div className="md:w-2/3">
            {/* Título 'Sobre Mim' com mesma fonte e estilo que o header */}
            <h2 className="text-4xl font-bold mb-6 text-[#f17da1] font-inter">Sobre Mim</h2>
            <p className="text-lg leading-relaxed">
              Desde o ensino médio, a tecnologia faz parte da minha trajetória. Sou Maria Fernanda, estudante da Universidade Federal Rural de Pernambuco (UFRPE), onde curso Licenciatura em Computação. Comecei no curso técnico em Análise e Desenvolvimento de Sistemas, onde aprendi lógica de programação, estrutura de dados e desenvolvimento web. Atualmente, junto ao conhecimento técnico, busco desenvolver minha vocação para ensinar. Também atuo como analista de projetos na empresa júnior Seed A Bit Tecnologia, onde estou melhorando minhas habilidades em desenvolvimento de projetos e trabalho em equipe. Estou no início da carreira, mas determinada a crescer e contribuir com soluções criativas em ambientes colaborativos que unem desenvolvimento, educação e propósito.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/foto-sobremim.jpeg"
              alt="Foto da Nanda"
              width={300}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold mb-8 text-[#f17da1] text-center font-inter">Projetos</h2>

          <Slider
            dots={true}
            infinite={true}
            speed={500}
            autoplay={true}
            autoplaySpeed={4000}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {[{
              titulo: 'Vision One - Óculos Inteligente',
              descricao: 'Landing page desenvolvida para apresentar as funcionalidades de um óculos inteligente. Design responsivo e foco em conversão.',
              imagem: '/VisionOne.png',
              github: 'https://lpauloaraujo.github.io/oculos-inteligente/',
            }, {
              titulo: 'Site de Curiosidades',
              descricao: 'Um site de curiosidades feito com HTML e CSS. Conteúdo leve e visual limpo com estrutura bem organizada.',
              imagem: '/curiosidades.png',
              github:  'https://fernandadev-07.github.io/reino.curiosidades-html/'
            }, {
              titulo: 'Sistema para Lanchonete',
              descricao: 'Sistema de pedidos e gerenciamento para lanchonete com foco em usabilidade e eficiência.',
              imagem: '/lanchonete.png',
              github: 'https://fernandadev-07.github.io/Projeto.LanchoneteMFC/'
            }].map((projeto, index) => (
              <div key={index} className="p-4">
                <div className="bg-[#fff0f4] dark:bg-[#1f1f1f] rounded-xl shadow-md p-6 flex flex-col items-center transition-colors duration-500">
                  <Image
                    src={projeto.imagem}
                    alt={`Imagem do projeto ${projeto.titulo}`}
                    width={600}
                    height={350}
                    className="rounded-lg object-cover mb-4"
                    priority
                  />
                  <h3 className="text-xl font-bold mb-2 font-inter">{projeto.titulo}</h3>
                  <p className="text-center">{projeto.descricao}</p>
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-[#f17da1] font-semibold hover:underline"
                    aria-label={`Ver código fonte do projeto ${projeto.titulo} no GitHub`}
                  >
                    Ver GitHub
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* CONTATO */}
        <section
          id="contato"
          className="max-w-4xl mx-auto px-6 py-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-[#f17da1] font-inter">Contato</h2>
          <p className="mb-6">
            Quer conversar comigo? Me chama no e-mail ou nas redes sociais!
          </p>
          <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=fernanda.antunes@seedabit.org.br"
           target="_blank"
           rel="noopener noreferrer"
           className="inline-block bg-[#f9c9d4] text-[#333] dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-[#f7a7bb] transition"
>
  Enviar e-mail
</a>

          <div className="flex justify-center space-x-6 mt-8 text-3xl">
            <a
              href="https://www.instagram.com/mf.antuness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:scale-110 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/Fernanda-Antunees"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0072b1] hover:scale-110 transition-transform"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/fernandadev-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#333] dark:text-white hover:scale-110 transition-transform"
            >
              <FaGithub />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}


