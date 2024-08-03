import { Cta } from './cta';
import './hero.scss'

export const Hero = () => {
  return (
    <div className="hero hero-bg-animated tablet:px-4 tablet:pt-4">
      <h1 className="text-white max-w-[1200px] font-season font-bold">
        <span>
          <span>L</span>
          <span style={{animationDelay: '0.05s'}}>E</span>
          <span style={{animationDelay: '0.1s'}}>S</span>
          <span style={{animationDelay: '0.15s'}}> </span>
          <span style={{animationDelay: '0.2s'}}>M</span>
          <span style={{animationDelay: '0.25s'}}>U</span>
          <span style={{animationDelay: '0.3s'}}>S</span>
          <span style={{animationDelay: '0.35s'}}>E</span>
          <span style={{animationDelay: '0.4s'}}>S</span>
          <span style={{animationDelay: '0.45s'}}> </span>
          <span style={{animationDelay: '0.5s'}}>M</span>
          <span style={{animationDelay: '0.55s'}}>A</span>
          <span style={{animationDelay: '0.60s'}}>I</span>
          <span style={{animationDelay: '0.65s'}}>T</span>
          <span style={{animationDelay: '0.70s'}}>R</span>
          <span style={{animationDelay: '0.75s'}}>E</span>
          <span style={{animationDelay: '0.80s'}}>S</span>
          <span style={{animationDelay: '0.85s'}}> </span>
          <span style={{animationDelay: '0.90s'}}>C</span>
          <span style={{animationDelay: '0.95s'}}>O</span>
          <span style={{animationDelay: '1.00s'}}>I</span>
          <span style={{animationDelay: '1.05s'}}>F</span>
          <span style={{animationDelay: '1.1s'}}>F</span>
          <span style={{animationDelay: '1.15s'}}>E</span>
          <span style={{animationDelay: '1.2s'}}>U</span>
          <span style={{animationDelay: '1.25s'}}>R</span>
          <span style={{animationDelay: '1.3s'}}>S</span>
        </span>
      </h1>
      <h3 className='slogan text-white font-pt'>Lorem ipsum odor amet, consectetuer adipiscing elit.</h3>
      <div className='self-start mt-4'>
        <Cta /> 
      </div>
    </div>
  );
};
