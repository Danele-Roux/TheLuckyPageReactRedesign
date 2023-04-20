import {
CheckCircleIcon,
ClockIcon,
CalendarIcon,
ArrowUpCircleIcon,
MapPinIcon,
ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline'

  export default function ForSellers() {
    return (
        <div className="bg-white for-sellers py-32 sm:py-48 lg:py-56">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div id="sellers"></div>
                <div className="mx-auto max-w-3xl ">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Private seller
                        </h1>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        We got your back
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                        Want to sell your current car? Put it on Dealr, schedule appointments and take advantage of our integrated financing engine.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto max-w-6xl p-6 grid md:grid-cols-3 sm:grid-cols-1 gap-4">
                <div className="flex flex-col bg-white rounded-lg shadow text-left p-6">
                    
                    <h2 className="inline-block mb-2 font-bold text-2xl">
                        <CheckCircleIcon className="icon h-6 w-6 text-primary center-text" aria-hidden="true" />Verified buyers
                    </h2>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Secure and verified registration</p>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow text-left p-6">
                    <h2 className="mb-2 font-bold text-2xl">
                        <ClockIcon className="icon h-6 w-6 text-primary center-text" aria-hidden="true" />No time wasters
                    </h2>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Buyers undergo a credit check before to be able to book a test drive</p>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow text-left p-6">
                    <h2 className="mb-2 font-bold text-2xl">
                        <CalendarIcon className="icon h-6 w-6 text-primary center-text" aria-hidden="true" />
                        Scheduling
                    </h2>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Set test drive scheduling</p>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow text-left p-6">
                    <h2 className="mb-2 font-bold text-2xl">
                        <ArrowUpCircleIcon className="icon h-6 w-6 text-primary center-text" aria-hidden="true" />
                        Easy upload
                    </h2>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Add a car ad in minutes via our extensive database of car models</p>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow text-left p-6">
                    <h2 className="mb-2 font-bold text-2xl">
                        <MapPinIcon className="icon h-6 w-6 text-primary center-text" aria-hidden="true" />
                        Geo-located
                    </h2>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Notifications to Geo-located opportunities</p>
                </div>
                <div className="flex flex-col bg-white rounded-lg shadow text-left p-6">
                    <h2 className="mb-2 font-bold text-2xl">
                        <ChatBubbleLeftEllipsisIcon className="icon h-6 w-6 text-primary center-text" aria-hidden="true" />
                        Chat in a tap
                    </h2>
                    <p className="font-normal text-gray-500 dark:text-gray-400">Direct messaging with buyer</p>
                </div>
            </div>
      </div>
    )
  }