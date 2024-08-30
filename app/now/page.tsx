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
            <li>Stabilizing the 5 properties we currently own. Have one new one under contract in PA</li>
            <li>Trying to grow a new recruiting business I launched to help agencies and brands hire</li>
            <li>Brainstorming some new ideas</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Health</h2>
          <ul className="list-none p-0 space-y-2">
            <li>Entirely obsessed with developing my jiu jitsu game</li>
            <li>Lifting heavy compound lifts</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Misc</h2>
          <p>
            Not a whole lot… summarized by trying to drink less, be a better friend, and learn more every day. Pretty simple
          </p>
        </div>
      </div>
    );
}