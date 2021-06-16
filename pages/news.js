import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

// import "tailwindcss/base";
// import "tailwindcss/components";
// import "tailwindcss/utilities";

export default function news() {
	return (
			<div className="container">
				<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <Image
                src="/images/profile.jpg" // Route of the image file
                height={216} // Desired size with correct aspect ratio
                width={216} // Desired size with correct aspect ratio
                alt="Bill Gate"
                class="h-48 w-full object-cover md:h-full md:w-48"
              />
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
              <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
            </div>
          </div>
        </div>
			</div>
	)
}