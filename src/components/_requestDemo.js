import { useForm } from "react-hook-form";

export default function RequestDemo() {

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };

    return (
        <div className="bg-tertiary request-demo py-32 sm:py-48 lg:py-56">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div id="requestdemo"></div>
                <div className="mx-auto max-w-3xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Request a demo
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-white">
                        If you are a professional, we offer a desktop admin platform, to allow a better and faster management of your whole business
                        </p>
                    </div>
                </div>
                <div className="mx-auto max-w-xl">
                    <form className="mt-5 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        <input {...register("firstName", { required: true, maxLength: 30 })} type="text" className="bg-secondary rounded-lg block w-full p-5" placeholder="Your name" maxLength={30} />
                        {errors.firstName && <p className="error-message">Please enter a valid response.</p>}
                    
                        <input {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} type="email" className="bg-secondary rounded-lg block w-full p-5" placeholder="Your email" />
                        {errors.email && <p className="error-message">Please enter a valid response.</p>}

                        <input {...register("mobile", { required: true, minLength: 8, maxLength: 11 })} type="number" className="bg-secondary rounded-lg block w-full p-5" placeholder="Mobile number" minLength={8} maxLength={11} />
                        {errors.mobile && <p className="error-message">Please enter a valid response.</p>}
                        
                        <input {...register("company", { required: true, maxLength: 30 })} type="text" className="bg-secondary rounded-lg block w-full p-5" placeholder="Your company" maxLength={30} />
                        {errors.company && <p className="error-message">Please enter a valid response.</p>}

                        <select id="role" defaultValue={'roleincompany'} className="select bg-secondary rounded-lg block w-full p-5">
                            <option aria-label="Role in the company placeholder" value="roleincompany" disabled hidden>Role in the company</option>
                            <option aria-label="Developer" value="developer">Developer</option>
                            <option aria-label="QA Analyst" value="qaanalyst">QA Analyst</option>
                            <option aria-label="Business Analyst" value="businessanalyst">Business Analyst</option>
                        </select>

                        <button type="submit" className="bg-primary hover:bg-blue-700 text-white block w-full p-5 px-4 rounded-lg">
                            Request
                        </button>
                        
                    </form>
                </div>
            </div>
        </div>
    )
  }