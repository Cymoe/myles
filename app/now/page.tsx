import Image from 'next/image';

export default function NowPage() {
    return (
      <div className="space-y-8 text-center max-w-2xl mx-auto">
        <p className="text-lg">
          Here&apos;s what I&apos;m working on right now.<br />
          <span className="underline">Updated Aug 31st from a coworking space in Vienna, Austria.</span>
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Work</h2>
          <ul className="list-none p-0 space-y-2">
            <li>Sharing knowledge on how to build AI driven companies</li>
          </ul>
        </div>

        <div>
          <ul className="list-none p-0 space-y-2">
          <h2 className="text-xl font-semibold mb-2">Health</h2>
            <li>Lifting a lot of weight and maintaining a caloric deficit</li>
            <li>Walking 10k-20k steps a day with daily fasting</li>
            <li>The goal is to remain jacked forever</li>
            <li>Meditating alot these days</li>
          </ul>
        </div>

        <div>
        <h2 className="text-xl font-semibold mb-2">Misc</h2>
          <p>
            Sustanably traveling and living abroad <br/>Slowmadding mostly in Europe and Asia. 
          </p>
        </div>
      </div>
    );
}