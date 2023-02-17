import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src="/logo.svg"
            alt="Logo do site Watch Next"
            width={168}
            height={63}
        />
    )
}