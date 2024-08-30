import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NowPage() {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold mb-4">Now</h1>
        
        <p className="text-lg">
          Here&apos;s what I&apos;m working on right now.<br />
          Updated April 23rd, from a coffee shop in NYC.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Work</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Stabilizing the 5 properties we currently own. Have one new one under contract in PA</li>
              <li>Trying to grow a new recruiting business I launched to help agencies and brands hire</li>
              <li>Brainstorming some new ideas</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Entirely obsessed with developing my jiu jitsu game</li>
              <li>Lifting heavy compound lifts</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Misc</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Not a whole lot… summarized by trying to drink less, be a better friend, and learn more every day. Pretty simple
            </p>
          </CardContent>
        </Card>
      </div>
    );
}