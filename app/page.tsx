import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { AsciiRipple } from '@/components/background/AsciiRipple';

export default function Home() {
  const tableOfContents = [
    { number: '01', title: 'My Work', subtitle: 'The most important roles, projects, and ideas that I put my time into.', href: '/work' },
    { number: '02', title: 'The Main Planter', subtitle: 'The more long-form, polished version of my blog; expect both technical and life-related content (it\'ll be tagged).', href: '/blog' },
    { number: '03', title: 'Clippings', subtitle: 'Shorter form thoughts and ideas that are worth sharing, but are one-off or aren\'t enough to form a whole post.', href: '/shortform' },
    { number: '04', title: 'The Birds-Eye View', subtitle: 'Quite literally, I think in graphs...a visualisation of my internal notes and thoughts. Updated roughly every week.', href: '/graph' }
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-white px-6 sm:px-8 lg:px-12">
      <AsciiRipple />
      
      {/* Hero Section - Vertically Centered */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Left Side - Name + Table of Contents */}
            <div className="flex-1">
              <h1 className="mb-12 text-5xl font-normal text-gray-900 sm:text-6xl lg:text-7xl">
                Jack Fan
              </h1>

              <nav>
                <ul className="space-y-6">
                  {tableOfContents.map((item) => (
                    <li key={item.number}>
                      <Link
                        href={item.href}
                        className="group flex items-start gap-4 text-gray-700 transition-colors hover:text-gray-900"
                      >
                        <span className="text-sm font-normal text-gray-500 pt-0.5">
                          {item.number}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-lg font-normal">{item.title}</span>
                          {item.subtitle && (
                            <span className="text-sm font-normal text-gray-500 mt-0.5">
                              {item.subtitle}
                            </span>
                          )}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Vertical Divider */}
            <div className="relative flex items-center justify-center self-stretch py-8">
              <div className="h-[70vh] w-px bg-gray-300"></div>
            </div>

            {/* Right Side - Placeholder Text */}
            <div className="flex-1">
              <div className="space-y-6 text-gray-600">
                <p className="text-base leading-relaxed sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-base leading-relaxed sm:text-lg">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-base leading-relaxed sm:text-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links - Bottom Centered */}
      <div className="relative z-10 flex justify-center pb-8 sm:pb-12 lg:pb-16">
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/itsjackfan"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/jack-fan-dev"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:jack.fan.dev@gmail.com"
            className="text-gray-600 transition-colors hover:text-gray-900"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
