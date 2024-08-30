import Image from 'next/image';

export default function NowPage() {
    return (
      <div className="space-y-8 text-center max-w-2xl mx-auto">
        <Image
          src="/images/goals.jpg"
          alt="Hero image for Now page"
          width={600}
          height={300}
          className="w-1/2 h-auto mb-6 mx-auto"
        />
        
        <p className="text-lg">
          Here&apos;s what I&apos;m working on right now.<br />
          <span className="underline">Updated Aug 31st from a coworking space in Vienna, Austria.</span>
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Work</h2>
          <ul className="list-none p-0 space-y-2">
            
            <li>Learning and implementing as much as I can with AI</li>
            <li>Exploring new ideas</li>
          </ul>
        </div>

        <div>
          <ul className="list-none p-0 space-y-2">
          <h2 className="text-xl font-semibold mb-2">Health</h2>
            <li>Walking 10k-20k steps a day</li>
            <li>Lifting as much weight as possible while maintaining a caloric deficit <br/>Goal is to remain jacked forever </li>
            <li>Meditating alot these days</li>
          </ul>
        </div>

        <div>
        <h2 className="text-xl font-semibold mb-2">Misc</h2>
          <p>
            Sustanably traveling and living abroad
          </p>
        </div>
      </div>
    );
}