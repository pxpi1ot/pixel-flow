import { cn } from '@/lib/utils';
import { SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Logo = ({
    fontSize = "2xl",
    iconSize = 20
} : {
    fontSize?: string;
    iconSize?: number;
}) => {
    return (
        <Link 
        href="/" 
        className={cn(
            "text-2xl font-extrabold flex items-center gap-2",
            fontSize
        )}
        >
            <div className='rounded-xl bg-gradient-to-r from-violet-600 p-2'>
                <SquareDashedMousePointer size={iconSize} className='stroke-white'/>
            </div>
        </Link>
    );
}

export default Logo;
