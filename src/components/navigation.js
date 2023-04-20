import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import logo from '../img/lucky-beard-logo.png'

import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function NavBar() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white sticky top-0 z-30 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only">Lucky beard logo</span>
            <img className="h-10 w-auto" src={logo} alt="Lucky beard logo" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#buyers"
          className="mx-5 block px-3 py-2.5 text-tertiary">For buyers</a>
          <a href="#sellers"
          className="mx-5 block px-3 py-2.5 text-tertiary">For sellers</a>
          <a href="#requestdemo"
          className="mx-5 block px-3 py-2.5 text-tertiary">Request a demo</a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden sticky top-0 z-30 shadow-lg" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
          <div className="flex items-center justify-between">
          <a href="#home" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Lucky beard logo</span>
            <img className="h-10 w-auto" src={logo} alt="Lucky beard logo" />
          </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 z-30"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="my-12">
            <a href="#buyers" onClick={() => setMobileMenuOpen(false)} className="text-tertiary py-5 block">For buyers</a>
            <a href="#sellers" onClick={() => setMobileMenuOpen(false)} className="text-tertiary py-5 block">For sellers</a>
            <a href="#requestdemo" onClick={() => setMobileMenuOpen(false)} className="text-tertiary py-5 block">Request a demo</a>
          </div>
        </Dialog.Panel>
      </Dialog>

    </header>
  )
}