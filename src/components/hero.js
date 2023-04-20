import Appstore from '../img/appStore.png'
import Playstore from '../img/playStore.png'

export default function Hero() {

  return (
    <div className="bg-white hero">
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div id="home"></div>
        <div className="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                A new era for test-drives
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
                Enhanced test drive experience through the connection of people in a secure, scheduled and convenient manner to ensure the seamless buying and selling of new and used vehicles. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#">
                <img src={Appstore} className='app-download-image' />
              </a>
              <a href="#">
                <img src={Playstore} className='app-download-image' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
