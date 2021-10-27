import React from 'react'
import AngelaImage from 'media/Angela.png'
import EiderImage from 'media/Eider.png'
import DanielImage from 'media/Daniel.png'
import LorenaImage from 'media/Lorena.png'
import HarrisonImage from 'media/Harrison.png'
import 'styles/pages/PgNosotros.css'

const PgNosotros = () => {
    return (
        <div className='wrapper'>
            <div className='cont-cards'>
                <div className='cont-card'>
                    <div className='cont-img'>
                        <img src={EiderImage} alt="img" width='200px' height='200px' />
                    </div>
                    <span className='name'>John Eider Cardona</span>
                    <p className='description'>
                        <div>
                            Estudiante de ingeniría de sistemas de la Universidad de Caldas y estudiante de desarrollo de software en la Universidad de Antioquia bajo el programa Misión Tic 2022. <br /><br />
                        </div>
                        <div>
                            <span className='subtitle'>Contacto y enlaces</span><br />
                            <span>eidercardona22@gmail.com</span><br />
                            <a href="https://github.com/Eider22" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </p>
                </div>
                <div className='cont-card'>
                    <div className='cont-img'>
                        <img src={AngelaImage} alt="" width='200px' height='200px' />
                    </div>
                    <span className='name'>Angela Bustos</span>
                    <p className='description'>
                        <div>
                            Arquitecta y estudiante de desarrollo de software en la Universidad de Antioquia bajo el programa Misión Tic 2022. <br /><br />
                        </div>
                        <div>
                            <span className='subtitle'>Contacto y enlaces</span><br />
                            <span>apbustosc@unal.edu.co</span><br />
                            <a href="https://github.com/Abustosc" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </p>
                </div>
                <div className='cont-card'>
                    <div className='cont-img'>
                        <img src={DanielImage} alt="" width='200px' height='200px' />
                    </div>
                    <span className='name'>Luis Daniel Tisoy</span>
                    <p className='description'>
                        <div>
                            Estudiante de ciencias de la computación y estudiante de desarrollo de software en la Universidad de Antioquia bajo el programa Misión Tic 2022. Apasionado por aprender nuevas cosas y conocer nuevos lugares.  <br /><br />
                        </div>
                        <div>
                            <span className='subtitle'>Contacto y enlaces</span><br />
                            <span>.................</span><br />
                            <a href="https://github.com/luis-dt" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </p>
                </div>
                <div className='cont-card'>
                    <div className='cont-img'>
                        <img src={LorenaImage} alt="" width='200px' height='200px' />
                    </div>
                    <span className='name'>Rosmy Lorena Gaviria</span>
                    <p className='description'>
                        <div>
                            Rosmy Lorena Gaviria Rodríguez
                            Psicologa de la ciudad de popayán y estudiante de desarrollo de software de la universidad de antioquia (Udea) bajo el programa Mision Tic 2022. <br /><br />
                        </div>
                        <div>
                            <span className='subtitle'>Contacto y enlaces</span><br />
                            <span>roslore55@gmail.com</span><br />
                            <a href="https://github.com/rosshy" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </p>
                </div>
                <div className='cont-card'>
                    <div className='cont-img'>
                        <img src={HarrisonImage} alt="" width='200px' height='200px' />
                    </div>
                    <span className='name'>Harrison Stephen Buitrago</span>
                    <p className='description'>
                        <div>
                            Administrador de redes de computadores, mantenimiento e informática.
                            Estudiante de Desarrollo de Software UDEA MinTic 2022. <br /><br />
                        </div>
                        <div>
                            <span className='subtitle'>Contacto y enlaces</span><br />
                            <span>hsbc.itpartner@gmail.com</span><br />
                            <a href="https://github.com/HarrisonIT" target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                            </a>
                        </div>
                    </p>
                </div>

            </div>
        </div>


    )
}

export default PgNosotros
