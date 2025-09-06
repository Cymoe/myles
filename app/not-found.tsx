import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ocean Background - Very Subtle */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/ocean.png"
          alt=""
          fill
          className="object-cover opacity-20"
          priority={false}
        />
      </div>
      
      <div className="max-w-md w-full text-center relative z-10">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-light text-muted-foreground/30 mb-4">
          404
        </h1>
        
        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-light text-foreground mb-2">
          Page not found
        </h2>
        
        <p className="text-muted-foreground mb-8">
          Looks like this deal fell through.
        </p>
        
        <p className="text-sm text-muted-foreground mb-8">
          Lost? Here&apos;s <Link href="/now" className="underline hover:text-primary transition-colors">where I am now</Link> →
        </p>
        
        {/* Actions */}
        <div className="space-y-4">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Back to homepage
          </Link>
          
          <div>
            <Link 
              href="/#newsletter"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Get deal alerts instead →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}