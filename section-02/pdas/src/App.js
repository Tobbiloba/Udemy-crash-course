import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

// console.log(AlexaImage)
function App() {
  return (
    <div className="">
      {/* <header className='header'>
        
      </header> */}
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </section>
      <div className='container'>

        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImage}
                description="Alexa was created by Amazon and it helps yo buy things" />
            </div>
            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="@Cortana69" img={CortanaImage}
                description="Alexa was created by Amazon and it helps yo buy things"
              />
            </div>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="@siri69" img={SiriImage} description="Alexa was created by Amazon and it helps yo buy things" />

            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
