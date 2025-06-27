import React from 'react'
import { SignedOut, SignedIn, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import { LayoutDashboard, StarsIcon, ChevronDown, FileText, PenBox, GraduationCap } from 'lucide-react'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './dropdown-menu'
import { checkUser } from '@/lib/checkUser'

const Header = async() => {
  await checkUser();
  return (
    <div className='fixed top-0  w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
        <nav className='flex items-center justify-between p-4'>
            <Link href="/">
            <div className="relative group">
              <Image src="/ourlogo.png" alt="logo" width={180} height={48} className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent rotate-12 animate-shine" />
              </span>
            </div>
            </Link>
            <div className='flex items-center space-x-2 md:space-x-4'>
              <SignedIn>
                <Link href="/dashboard">
                  <Button variant="ghost" className='text-sm md:text-base'>
                    <LayoutDashboard className='w-4 h-4' />
                    <span className='hidden md:block'>IndustryInsights</span>
                  </Button>
                </Link>

              <DropdownMenu>
  <DropdownMenuTrigger>
  <Button>
                    <StarsIcon className='w-4 h-4' />
                    <span className='hidden md:block'>Growth Tools</span>
                    <ChevronDown className='w-4 h-4' />
  </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>
      <Link href="/resume-builder" className='flex items-center gap-2'>
      <FileText className='w-4 h-4' />
      <span className='hidden md:block'>Build Resume</span>
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href="/cover-letter" className='flex items-center gap-2'>
      <PenBox className='w-4 h-4' />
      <span className='hidden md:block'>Cover Letter</span>
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <Link href="/interview-prep" className='flex items-center gap-2'>
      <GraduationCap className='w-4 h-4' />
      <span className='hidden md:block'>Interview Prep</span>
      </Link>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

</SignedIn>

<SignedOut>
              <SignInButton>
                <button variant="ghost" className='text-sm md:text-base'>
                  sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold',
                }
              }}
              />
            </SignedIn>

            </div>
        </nav>
    </div>
  )
}

export default Header