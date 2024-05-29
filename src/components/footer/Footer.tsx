import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    return (
        <>
            <div className="flex justify-center bg-sky-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <div className='flex gap-3 mb-4'>
                        <a href="https://www.linkedin.com/in/falecomsanti/" className="hover:underline" target="_blank"><LinkedinLogo size={37} weight='light' /></a>
                        <a href='https://github.com/DEVnaoCry' className="hover:underline" target="_blank"><GithubLogo size={37} weight='light' /></a>
                        <a href="mailto:work.frodrigues@gmail.com" className="hover:underline" target="_blank"><Envelope size={37} weight='light' /></a>
                    </div>
                    <p className='text-sm font-light mb-1'> Natura Farma | 2024 &copy; </p>
                </div>
            </div>
        </>
    )
}

export default Footer