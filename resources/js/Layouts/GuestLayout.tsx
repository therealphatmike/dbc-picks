import { Fragment, ReactNode, useState } from 'react'
import { Link, Head } from '@inertiajs/react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Host } from '@/types/dbcPicksTypes'

const navigation = [
  { name: 'Current Picks', href: '/#current_picks' },
  { name: 'Standings', href: '/#standings' },
  { name: 'Picks', href: '/#picks' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Guest({ hosts, children }: { hosts: Host[], children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">DBC Picks</span>
              <img className="h-12 w-auto" src="build/images/dbc_picks.jpeg" alt="" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <div className="hidden lg:flex lg:gap-x-12 ">
              {navigation.map((item) => (
                <div key={`header-${item.name}`}>
                  <a href={item.href} className="text-base font-semibold leading-6 text-dbc-blue hover:text-dbc-teal">
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-dbc-blue border-dbc-blue">
                Host Stats
                <ChevronDownIcon className="h-5 w-5 flex-none text-dbc-blue/50" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-dbc-orange/5">
                  <div className="p-4">
                    {hosts.map((host) => (
                      <div
                        key={host.id}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-dbc-teal/25"
                      >
                        <div className="flex-shrink-0">
                          <img className="h-10 rounded-full" src={`/build/images/${host.avatar}`} alt="" />
                        </div>
                        <div className="flex-auto">
                          <a href={`/hosts/${host.id}`} className="block font-semibold text-dbc-blue">
                            {host.first_name} {host.last_name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="https://www.dirtymomedia.com/doorbumperclear" target="_blank" rel="noopener noreferrer" className="-m-1.5 p-1.5">
              <span className="sr-only">DBC Picks</span>
              <img className="h-12 w-auto" src="/build/images/dbc_logo.png" alt="" />
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-dbc-orange/10">
            <div className="flex items-center justify-between">
              <div>
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">DBC Picks</span>
                  <img className="h-12 w-auto" src="build/images/dbc_picks.jpeg" alt="" />
                </a>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-auto py-a">
                        {navigation.map((item) => (
                          <a
                            key={`mobile-header-${item.name}`}
                            href={item.href}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dbc-blue hover:bg-gray-50"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 mt-6 text-base font-semibold leading-7 text-dbc-blue hover:bg-dbc-teal/25">
                          Host Stats
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {
                            hosts.map((host) => (
                              <Disclosure.Button
                                key={host.id}
                                as="a"
                                href={`/hosts/${host.id}`}
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-dbc-blue hover:bg-gray-50"
                              >
                                {host.first_name} {host.last_name}
                              </Disclosure.Button>
                            ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <nav className="-mb-6 columns-1 text-center sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {navigation.map((item) => (
              <div key={`footer-nav-${item.name}`} className="pb-6">
                <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-dbc-blue">
                  {item.name}
                </a>
              </div>
            ))}
          </nav>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            Door Bumper Clear is owned by Dirty Mo Media. I do not claim rights to these copyrighted and trademarked items. All data is generated by Dirty Mo employees and is owned by Dirty Mo Media.
            I am just a fan who wanted to build a website to track this information and make available to other fans.
          </p>
        </div>
      </footer>
    </>
  );
}
