import Link from "next/link";
import Image from "next/image";

const socials = [
    {
        name: 'Twitter',
        href: '#',
        icon: '/images/social-media/twitter-x.svg',
    }
];

const links = [
    {
        name: 'Blog',
        href: '#'
    },
    {
        name: 'Privacy Policy',
        href: '#'
    },
    {
        name: 'Terms of Service',
        href: '#'
    }
];

function HomeFooter() {
    return (
        <footer className="flex flex-col-reverse gap-y-4 md:flex-row w-full py-4 px-8 md:justify-between text-muted-foreground">
            <span>© 2024 Kazu</span>
            <div className="flex mt-6 md:mt-0 flex-col gap-y-4 md:flex-row gap-x-5">
                {
                    socials.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            className="my-auto"
                        >
                            <Image
                                src={social.icon}
                                alt={social.name}
                                width={15}
                                height={15}
                            />
                        </Link>
                    ))
                }
                {
                    links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                        >{link.name}</Link>
                    ))
                }
            </div>
        </footer>
    );
}

export default HomeFooter;