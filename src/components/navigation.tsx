import clsx from 'clsx/lite'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { withBase } from '../lib/utils'

export default function Navigation({
  children,
}: {
  children: React.ReactNode
}) {
  // Desktop shows the links inline and starts open; on mobile the menu is a
  // full-screen overlay, so it starts closed.
  const [isDesktopOpen, setIsDesktopOpen] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  function toggle() {
    if (window.matchMedia('(min-width: 64rem)').matches) {
      setIsDesktopOpen((previous) => !previous)
    } else {
      setIsMobileOpen((previous) => !previous)
    }
  }

  return (
    <div className="flex items-center justify-center gap-12">
      <AnimatePresence initial={false}>
        {isDesktopOpen && (
          <motion.div
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            exit={{ filter: 'blur(20px)', opacity: 0 }}
            className="hidden lg:flex gap-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.dialog
            open={isMobileOpen}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.25 }}
            animate={{ filter: 'blur(0px)', opacity: 1 }}
            exit={{ filter: 'blur(20px)', opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden absolute z-50 w-full h-full flex flex-col gap-4 top-0 bg-zinc-900/20 backdrop-blur-md"
          >
            <div className="fixed bottom-20 sm:bottom-32 left-4 sm:left-8 flex flex-col items-start justify-center gap-4">
              {/* <MobileLink href="/blog">Blog</MobileLink> */}
              <MobileLink href="/presskit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <title>Folder With Files Icon</title>
                  <path
                    fill="currentColor"
                    d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                    opacity=".5"
                  />
                  <path
                    fill="currentColor"
                    d="M18 9.25C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H13C12.5858 10.75 12.25 10.4142 12.25 10C12.25 9.58579 12.5858 9.25 13 9.25H18Z"
                  />
                  <path
                    fill="currentColor"
                    d="M16.5 3C16.9642 3 17.1967 2.99976 17.3916 3.02539C18.7378 3.20262 19.7974 4.26221 19.9746 5.6084C19.9949 5.76258 19.9991 5.94008 20 6.2373C19.1592 5.99982 17.9811 6 16.2021 6H15.8291C14.6754 6 14.0981 5.9999 13.5605 5.84668C13.2653 5.76251 12.9802 5.64439 12.7119 5.49512C12.2237 5.22336 11.8155 4.8155 11 4L10.4502 3.4502C10.2349 3.2349 10.1042 3.10392 9.98828 3H16.5Z"
                  />
                </svg>
                Press Kit
              </MobileLink>
              <MobileLink href="/contact">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <title>Smiley Face Icon</title>
                  <path
                    fill="currentColor"
                    d="M16.791 13.343c.781-.274 1.752-.31 3.78-.315h1.426c-.007.097.01-.097 0 0a1.478 1.478 0 0 1-.424.908l-7.65 7.69a1.262 1.262 0 0 1-.895.37c-.097.01.097-.006 0 0v-1.424c.005-2.03.041-3 .314-3.78a5.621 5.621 0 0 1 3.45-3.45"
                  />
                  <path
                    fill="currentColor"
                    d="M13.028 21.948A10.27 10.27 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 .347-.018.69-.052 1.028h-1.376c-2.03.005-3 .041-3.78.314a5.621 5.621 0 0 0-3.45 3.45c-.273.78-.31 1.75-.314 3.78z"
                    opacity=".5"
                  />
                  <path
                    fill="currentColor"
                    d="M14.898 11.224c.533-.143.792-.908.578-1.708c-.215-.8-.821-1.333-1.355-1.19c-.533.143-.792.907-.577 1.708c.214.8.82 1.333 1.354 1.19m-5.796 1.553c.534-.143.792-.908.578-1.708c-.214-.8-.82-1.333-1.354-1.19c-.534.143-.792.907-.578 1.708c.215.8.82 1.333 1.354 1.19m-.007 2.429a.75.75 0 1 0-.365 1.455c1.387.347 2.944.344 4.5-.073l.052-.014l.08.163a5.62 5.62 0 0 1 3.43-3.394c.092-.033.188-.062.287-.088a.75.75 0 0 0-.96.069c-.838.81-1.96 1.463-3.278 1.816s-2.616.35-3.746.066"
                  />
                </svg>
                Contact
              </MobileLink>
              <motion.button
                type="button"
                onClick={() => setIsMobileOpen(false)}
                initial={{
                  transform: 'translateY(100px)',
                  filter: 'blur(20px)',
                  opacity: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 25,
                  damping: 2,
                  mass: 0.1,
                }}
                animate={{
                  transform: 'translateY(0px)',
                  filter: 'blur(0px)',
                  opacity: 1,
                }}
                exit={{
                  transform: 'translateY(100px)',
                  filter: 'blur(20px)',
                  opacity: 0,
                }}
                className="w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <title>Close Icon</title>
                  <path
                    fill="currentColor"
                    d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
                    opacity=".5"
                  />
                  <path
                    fill="currentColor"
                    d="M8.97 8.97a.75.75 0 0 1 1.06 0L12 10.94l1.97-1.97a.75.75 0 1 1 1.06 1.06L13.06 12l1.97 1.97a.75.75 0 0 1-1.06 1.06L12 13.06l-1.97 1.97a.75.75 0 0 1-1.06-1.06L10.94 12l-1.97-1.97a.75.75 0 0 1 0-1.06"
                  />
                </svg>
                Close
              </motion.button>
            </div>
          </motion.dialog>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggle}
        className="w-6 sm:w-8 h-fit text-white cursor-pointer hover:outline-2 focus-visible:outline-2 outline-offset-1 outline-zinc-100/20 focus-visible:outline-white rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className={clsx(
            'transition-all duration-300 ease-in-out',
            isDesktopOpen && 'lg:rotate-90',
            isMobileOpen && 'max-lg:rotate-90'
          )}
        >
          <title>Menu Icon</title>
          <path
            fill="currentColor"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"
            opacity=".5"
          />
          <path
            fill="currentColor"
            d="M13.024 14.56c.493-.197.739-.296.932-.465c.05-.043.096-.09.139-.139c.17-.193.268-.44.465-.932c.924-2.31 1.386-3.465.938-4.124a1.5 1.5 0 0 0-.398-.398c-.66-.448-1.814.014-4.124.938c-.493.197-.74.295-.933.465c-.049.043-.095.09-.138.139c-.17.193-.268.44-.465.932c-.924 2.31-1.386 3.464-.938 4.124a1.5 1.5 0 0 0 .398.398c.66.448 1.814-.014 4.124-.938"
          />
        </svg>
      </button>
    </div>
  )
}

type MobileLinkProps = {
  href: string
  className?: string
  children: React.ReactNode
}

function MobileLink({ href, className, children }: MobileLinkProps) {
  return (
    <motion.a
      href={withBase(href)}
      initial={{
        transform: 'translateY(100px)',
        filter: 'blur(20px)',
        opacity: 0,
      }}
      transition={{ type: 'spring', stiffness: 25, damping: 2, mass: 0.1 }}
      animate={{
        transform: 'translateY(0px)',
        filter: 'blur(0px)',
        opacity: 1,
      }}
      exit={{
        transform: 'translateY(100px)',
        filter: 'blur(20px)',
        opacity: 0,
      }}
      className={clsx(
        'w-fit flex items-center justify-center gap-3 text-lg sm:text-2xl text-zinc-100 cursor-pointer',
        className
      )}
    >
      {children}
    </motion.a>
  )
}
