import PhoneImg from '../img/phone-img.png'
import PhoneImg2 from '../img/phone-img2.png'

  export default function ForBuyers() {
    return (
      <div className="bg-primary py-24 sm:py-32 for-buyers">
        <div id="buyers"></div>
        <div className="mx-auto max-w-7xl grid grid-flow-row sm:grid-flow-col gap-3 px-6 lg:px-8 items-center">
            <div className="sm:col-span-4">
              <img src={PhoneImg} className="phone-image" />
            </div>
            <div className="sm:col-span-4 px-8 drop-shadow-md">
              <h2 className="text-4xl text-secondary font-semibold leading-normal text-center md:text-left">Search for the car of your dreams and test drive it</h2>
              <p className="text-secondary leading-loose mt-10 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat.</p>
              <ul className="text-secondary mt-10 list-inside list-disc text-center md:text-left">
                <li>
                  Multiple filtering options
                </li>
                <li className="pt-5">
                  Test drives with both private sellers or dealerships
                </li>
                <li className="pt-5">
                  Take pictures and notes during test drive
                </li>
              </ul>
            </div>
        </div>
        <div className="mt-20 mx-auto max-w-7xl grid grid-flow-row sm:grid-flow-col gap-3 px-6 lg:px-8 items-center">
            <div className="grid sm:col-span-4">
              <img src={PhoneImg2} className="phone-image" />
            </div>
            <div className="sm:col-span-4 lg:order-first px-8 drop-shadow-md">
              <h2 className="text-4xl text-secondary font-semibold leading-normal text-center md:text-left">Only real people</h2>
              <p className="text-secondary leading-loose mt-10 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed malesuada habitant odio eu etiam proin odio habitant. Elit felis aliquam suspendisse amet nunc. Erat.</p>
              <ul className="text-secondary mt-10 list-inside list-disc text-center md:text-left">
                <li>
                  Multiple filtering options
                </li>
                <li className="pt-5">
                  Test drives with both private sellers or dealerships
                </li>
                <li className="pt-5">
                  Take pictures and notes during test drive
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }