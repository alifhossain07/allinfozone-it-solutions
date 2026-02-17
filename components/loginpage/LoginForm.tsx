import Link from 'next/link';

export default function LoginForm() {
  return (
    <section className="flex py-24 flex-col w-9/12 mx-auto md:flex-row">
      {/* Left: Info */}
      <div className="md:w-1/2 bg-black text-white flex flex-col justify-center px-16 py-16 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Welcome Back</h1>
        <p className="text-gray-300 text-lg md:text-lg leading-relaxed">
          Access your account to manage projects, track progress, and collaborate with our team.
        </p>

        {/* Features / Writeups */}
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <span className="text-white text-2xl mt-1">💡</span>
            <p className="text-gray-400 text-lg md:text-lg leading-relaxed">
              Stay updated with real-time notifications and insights tailored to your projects.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-white text-2xl mt-1">🔒</span>
            <p className="text-gray-400 text-lg md:text-lg leading-relaxed">
              Your data is secure with us. Privacy and safety are our top priorities.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-white text-2xl mt-1">⚡</span>
            <p className="text-gray-400 text-lg md:text-lg leading-relaxed">
              Experience fast and seamless workflow management with our intuitive platform.
            </p>
          </div>
          <div className="flex items-start space-x-4">
            <span className="text-white text-2xl mt-1">🤝</span>
            <p className="text-gray-400 text-lg md:text-lg leading-relaxed">
              Collaborate effortlessly with our team and achieve your project goals efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="md:w-1/2 flex items-center justify-center bg-white px-6 py-16">
        <div className="w-full max-w-md bg-gray-950 p-8 shadow-lg">
          {/* Login Form */}
          <form method="POST" action="#">
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold rounded-md hover:bg-gray-300 transition duration-200"
            >
              Login
            </button>

            {/* Signup Link */}
            <p className="mt-4 text-center text-sm text-gray-400">
              Dont have an account?
              <Link href="/register" className="text-white hover:underline">
                {' '}
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
